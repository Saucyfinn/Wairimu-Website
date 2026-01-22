import { useState } from "react";
import { Phone, Calendar, PhoneCall, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  investmentType: string;
  message: string;
  consent: boolean;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    investmentType: "",
    message: "",
    consent: false
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Enquiry Sent Successfully",
        description: data.message,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        investmentType: "",
        message: "",
        consent: false
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error Sending Enquiry",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please consent to being contacted about this investment opportunity.",
        variant: "destructive",
      });
      return;
    }
    
    // Build email body
    const subject = encodeURIComponent("Wairimu Station Investment Enquiry");
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n` +
      `Investment Interest: ${formData.investmentType || "Not specified"}\n\n` +
      `Message:\n${formData.message || "No message provided"}`
    );
    
    // Open email client
    window.location.href = `mailto:andy.nurse@nurseproperty.co.nz?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const quickActions = [
    {
      icon: Phone,
      label: "Call Andy Now",
      action: () => window.open("tel:+6421437143"),
      variant: "default" as const,
      bgColor: "bg-accent",
      testId: "call-andy"
    },
    {
      icon: Calendar,
      label: "Schedule Property Visit",
      action: () => alert("This would open a calendar scheduling system."),
      variant: "default" as const,
      bgColor: "bg-primary",
      testId: "schedule-visit"
    },
    {
      icon: PhoneCall,
      label: "Request Callback",
      action: () => alert("Callback request submitted. Andy will call you within 2 hours."),
      variant: "outline" as const,
      bgColor: "bg-card",
      testId: "request-callback"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Ready to Enquire
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            To obtain further information on the property, pricing and purchasing process, and to arrange an inspection of the property - which is strictly by appointment - please contact the exclusive listing agent Andy Nurse:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <Card className="bg-background">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                Send an Enquiry
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm sm:text-base">First Name</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="min-h-[44px] text-base"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm sm:text-base">Last Name</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="min-h-[44px] text-base"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm sm:text-base">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="min-h-[44px] text-base"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="min-h-[44px] text-base"
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <Label htmlFor="investmentType" className="text-sm sm:text-base">Investment Interest</Label>
                  <Select 
                    value={formData.investmentType} 
                    onValueChange={(value) => handleInputChange("investmentType", value)}
                  >
                    <SelectTrigger className="min-h-[44px] text-base" data-testid="select-investment-type">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-purchase">Full Property Purchase</SelectItem>
                      <SelectItem value="ets-income">Carbon Credit Investment</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="tourism-development">Tourism Development</SelectItem>
                      <SelectItem value="information-only">Information Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your investment goals and any specific questions..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="min-h-[100px] text-base resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                
                <div className="flex items-start space-x-3 py-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                    className="mt-1 min-h-[20px] min-w-[20px]"
                    data-testid="checkbox-consent"
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                    I consent to being contacted about this property investment opportunity
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full min-h-[48px] text-base touch-target" 
                  data-testid="submit-enquiry"
                >
                  <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Send Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Agent Information */}
          <div className="space-y-6 sm:space-y-8 order-first lg:order-last">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/andy-nurse-contact.png" 
                alt="Andy Nurse - NURSE Property - Licensed Sales Consultant | Rural & Lifestyle - +64 21 437 143 - andy.nurse@nurseproperty.co.nz - @realty Ltd Licensed REAA 2008"
                className="w-full h-auto"
                data-testid="agent-contact-image"
              />
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-3 sm:space-y-4">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <Button
                    key={action.label}
                    variant={action.variant}
                    className={`w-full min-h-[48px] p-4 text-sm sm:text-base touch-target ${action.bgColor === "bg-card" ? "bg-card text-foreground border border-border hover:bg-muted" : action.bgColor === "bg-accent" ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
                    onClick={action.action}
                    data-testid={action.testId}
                  >
                    <IconComponent className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    {action.label}
                  </Button>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
