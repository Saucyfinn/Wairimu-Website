import { useState } from "react";
import { Phone, Mail, MapPin, Calendar, PhoneCall, Send } from "lucide-react";
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
    submitInquiry.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const quickActions = [
    {
      icon: Phone,
      label: "Call Andy Now",
      action: () => window.open("tel:+6433195555"),
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
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Enquire
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For more information, property documents, and visits to the property, contact Andy Nurse from Nurse Property
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-background">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Send an Enquiry
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <Label htmlFor="investmentType">Investment Interest</Label>
                  <Select 
                    value={formData.investmentType} 
                    onValueChange={(value) => handleInputChange("investmentType", value)}
                  >
                    <SelectTrigger data-testid="select-investment-type">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-purchase">Full Property Purchase</SelectItem>
                      <SelectItem value="ets-income">ETS Income Investment</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="tourism-development">Tourism Development</SelectItem>
                      <SelectItem value="information-only">Information Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your investment goals and any specific questions..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    data-testid="textarea-message"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                    data-testid="checkbox-consent"
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground">
                    I consent to being contacted about this property investment opportunity
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={submitInquiry.isPending}
                  data-testid="submit-enquiry"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {submitInquiry.isPending ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Agent Information */}
          <div className="space-y-8">
            <Card className="bg-background">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
                    alt="Andy Nurse - Property Agent" 
                    className="w-24 h-24 rounded-full object-cover"
                    data-testid="agent-photo"
                  />
                  <div>
                    <h4 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      Andy Nurse
                    </h4>
                    <p className="text-accent font-medium mb-4">
                      Senior Property Consultant - Nurse Property
                    </p>
                    <p className="text-muted-foreground mb-4">
                      With over 15 years of experience in New Zealand property investment, Andy specializes in rural and forestry properties with sustainable income streams.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="text-primary h-4 w-4" />
                        <span className="text-foreground" data-testid="agent-phone">+64 3 319 5555</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="text-primary h-4 w-4" />
                        <span className="text-foreground" data-testid="agent-email">andy@nurseproperty.co.nz</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="text-primary h-4 w-4" />
                        <span className="text-foreground" data-testid="agent-location">Kaikoura, Canterbury</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="space-y-4">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <Button
                    key={action.label}
                    variant={action.variant}
                    className={`w-full p-4 ${action.bgColor === "bg-card" ? "bg-card text-foreground border border-border hover:bg-muted" : action.bgColor === "bg-accent" ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
                    onClick={action.action}
                    data-testid={action.testId}
                  >
                    <IconComponent className="mr-2 h-4 w-4" />
                    {action.label}
                  </Button>
                );
              })}
            </div>

            {/* Office Information */}
            <Card className="bg-muted">
              <CardContent className="p-6">
                <h5 className="font-semibold text-foreground mb-3">Nurse Property Office</h5>
                <p className="text-sm text-muted-foreground mb-3">
                  123 Beach Road, Kaikoura 7300<br />
                  New Zealand
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Office Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 10:00 AM - 3:00 PM<br />
                  Sunday: By appointment
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
