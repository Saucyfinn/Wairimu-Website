import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      
      // In a real application, you would send an email here
      // For now, we'll just log the inquiry
      console.log("New inquiry received:", inquiry);
      
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
      area: 2400,
      etsCredits: 3000,
      yearEstablished: 1887,
      annualIncome: 185000,
      location: "Kaikoura, Canterbury, New Zealand",
      forestType: "Native New Zealand",
      currentNzuPrice: 62,
      landValuation: 2400000,
      totalInvestmentValue: 2590000
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
