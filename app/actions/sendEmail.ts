'use server';

import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
// Ensure to add RESEND_API_KEY to your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
    user_firstname?: string;
    user_lastname?: string;
    user_company: string;
    user_email: string;
    user_phone?: string;
    user_country?: string;
    business_type?: string;
    inquiry_type: string;
    order_volume?: string;
    timeline?: string;
    hear_about_us?: string;
    message?: string;
}

export async function sendEmailAction(data: EmailData) {
    try {
        const {
            user_firstname, user_lastname, user_company, user_email,
            user_phone, user_country, business_type, inquiry_type,
            order_volume, timeline, hear_about_us, message
        } = data;

        // Construct the name (handle missing first/last name for Lightbox form)
        const name = [user_firstname, user_lastname].filter(Boolean).join(' ') || 'Prospective Client';

        // Construct the email body
        const htmlBody = `
      <h2>New B2B Inquiry from Trombay Trading Website</h2>
      <table style="width: 100%; border-collapse: collapse; max-width: 600px;">
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${user_company}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${user_email}</td></tr>
        ${user_phone ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone / WhatsApp:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${user_phone}</td></tr>` : ''}
        ${user_country ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Country / Region:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${user_country}</td></tr>` : ''}
        ${business_type ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Business Type:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${business_type}</td></tr>` : ''}
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Area of Interest:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${inquiry_type}</td></tr>
        ${order_volume ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Estimated Volume:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${order_volume}</td></tr>` : ''}
        ${timeline ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Required Timeline:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${timeline}</td></tr>` : ''}
        ${hear_about_us ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Heard About Us Via:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${hear_about_us}</td></tr>` : ''}
      </table>
      ${message ? `<div style="margin-top: 20px;"><strong>Project Details:</strong><p style="background: #f9f9f9; padding: 15px; border-radius: 4px;">${message.replace(/\n/g, '<br/>')}</p></div>` : ''}
    `;

        // Note: 'onboarding@resend.dev' is the default testing sender for Resend.
        // If you verify a domain later, change the 'from' address.
        const { data: resendData, error } = await resend.emails.send({
            from: 'Trombay Trading B2B <onboarding@resend.dev>',
            to: ['saisrikanth2007@gmail.com'],
            subject: `New B2B Inquiry: ${inquiry_type} - ${user_company}`,
            html: htmlBody,
            replyTo: user_email,
        });

        if (error) {
            console.error('Resend Error:', error);
            return { success: false, error: error.message };
        }

        return { success: true, data: resendData };
    } catch (error) {
        console.error('Server Action Error:', error);
        return { success: false, error: 'Failed to send email layout.' };
    }
}
