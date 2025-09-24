import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { z } from "zod";
import { sendEmail, formatInquiryEmail } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      
      // Send email notification using SendGrid
      const emailFormat = formatInquiryEmail(validatedData);
      const emailResult = await sendEmail({
        to: "andy.nurse@nurseproperty.co.nz",
        from: "noreply@wairimustation.co.nz", // You may need to verify this domain in SendGrid
        bcc: "brendon@mondial.co.nz",
        subject: emailFormat.subject,
        html: emailFormat.html,
        text: emailFormat.text
      });
      
      if (!emailResult.success) {
        console.error("Failed to send email notification:", emailResult.error);
        // Continue with success response even if email fails
      } else {
        console.log("Email notification sent successfully to Andy Nurse");
      }
      
      res.json({ 
        success: true, 
        message: "Thank you for your enquiry. Andy Nurse will contact you within 24 hours.",
        id: inquiry.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating inquiry:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all inquiries (for admin purposes - development only)
  app.get("/api/inquiries", async (req, res) => {
    // Only allow in development environment to protect PII
    if (process.env.NODE_ENV !== "development") {
      return res.status(403).json({ 
        success: false, 
        message: "Access denied" 
      });
    }
    
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Property information endpoint
  app.get("/api/property", async (req, res) => {
    res.json({
      name: "Wairimu Station",
      area: 637,
      etsCredits: 215.5,
      yearEstablished: 1887,
      annualIncome: 185000,
      location: "Kaikoura, Canterbury, New Zealand",
      forestType: "Native New Zealand",
      currentNzuPrice: 62,
      landValuation: 2400000,
      totalInvestmentValue: 2590000,
      titles: 5,
      zoning: "Rural"
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
