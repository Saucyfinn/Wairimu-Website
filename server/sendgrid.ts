import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable is not set. Email functionality will be disabled.");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
  bcc?: string;
}

export async function sendEmail(params: EmailParams): Promise<{ success: boolean; error?: string }> {
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SendGrid API key not configured. Email not sent.');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const emailData: any = {
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    };
    
    if (params.bcc) {
      emailData.bcc = params.bcc;
    }
    
    await mailService.send(emailData);
    console.log(`Email sent successfully to ${params.to}`);
    return { success: true };
  } catch (error) {
    console.error('SendGrid email error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown email error' };
  }
}

export function formatInquiryEmail(inquiry: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  investmentType?: string;
  message?: string;
}): { subject: string; html: string; text: string } {
  const subject = `Property Inquiry - Wairimu Station - ${inquiry.firstName} ${inquiry.lastName}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
        New Property Inquiry - Wairimu Station
      </h2>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #2c3e50; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${inquiry.firstName} ${inquiry.lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${inquiry.email}">${inquiry.email}</a></p>
        ${inquiry.phone ? `<p><strong>Phone:</strong> <a href="tel:${inquiry.phone}">${inquiry.phone}</a></p>` : ''}
        ${inquiry.investmentType ? `<p><strong>Investment Interest:</strong> ${inquiry.investmentType}</p>` : ''}
      </div>
      
      ${inquiry.message ? `
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #3498db; margin: 20px 0;">
          <h3 style="color: #2c3e50; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6;">${inquiry.message.replace(/\n/g, '<br>')}</p>
        </div>
      ` : ''}
      
      <div style="background-color: #ecf0f1; padding: 15px; border-radius: 5px; margin: 20px 0; font-size: 12px; color: #7f8c8d;">
        <p><strong>Property:</strong> Wairimu Station</p>
        <p><strong>Location:</strong> Kaikoura, Canterbury, New Zealand</p>
        <p><strong>Inquiry Date:</strong> ${new Date().toLocaleString('en-NZ')}</p>
      </div>
      
      <p style="color: #7f8c8d; font-size: 12px; margin-top: 30px;">
        This inquiry was submitted through the Wairimu Station property website.
      </p>
    </div>
  `;
  
  const text = `
New Property Inquiry - Wairimu Station

Contact Information:
Name: ${inquiry.firstName} ${inquiry.lastName}
Email: ${inquiry.email}
${inquiry.phone ? `Phone: ${inquiry.phone}` : ''}
${inquiry.investmentType ? `Investment Interest: ${inquiry.investmentType}` : ''}

${inquiry.message ? `Message:\n${inquiry.message}` : ''}

Property: Wairimu Station
Location: Kaikoura, Canterbury, New Zealand
Inquiry Date: ${new Date().toLocaleString('en-NZ')}

This inquiry was submitted through the Wairimu Station property website.
  `;
  
  return { subject, html, text };
}