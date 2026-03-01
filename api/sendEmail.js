import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, company, email, service, message } = req.body;

  // Validate required fields
  if (!name || !company || !email || !service || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Main inquiry email HTML content
    const mainEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">New Service Inquiry – Good Ledger Website</h2>
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
          <h3 style="color: #374151;">Inquiry Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; vertical-align: top;"><strong>Name:</strong></td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 8px; vertical-align: top;"><strong>Company:</strong></td>
              <td style="padding: 8px;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px; vertical-align: top;"><strong>Email:</strong></td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 8px; vertical-align: top;"><strong>Service Required:</strong></td>
              <td style="padding: 8px;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 8px; vertical-align: top;"><strong>Message:</strong></td>
              <td style="padding: 8px;">${message}</td>
            </tr>
          </table>
        </div>
        <div style="margin-top: 30px; padding: 15px; background-color: #f8fafc; border-radius: 5px;">
          <p style="margin: 0; color: #6b7280; font-size: 0.9em;">
            This inquiry was submitted through the Good Ledger Financial Partners website contact form.
          </p>
        </div>
      </div>
    `;

    // Confirmation email HTML content for client
    const confirmationEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; padding: 20px 0;">
          <h1 style="color: #1e40af; margin: 0;">Good Ledger Financial Partners</h1>
          <p style="color: #6b7280; margin: 10px 0 0 0;">Structured Offshore Accounting Support</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <h2 style="color: #1e40af; margin-top: 0;">Thank You for Contacting Good Ledger Financial Partners</h2>
          
          <p>We have received your inquiry and our team will review it promptly.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Your Inquiry Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; vertical-align: top; width: 120px;"><strong>Your Name:</strong></td>
                <td style="padding: 8px;">${name}</td>
              </tr>
              <tr style="background-color: #f9fafb;">
                <td style="padding: 8px; vertical-align: top;"><strong>Company:</strong></td>
                <td style="padding: 8px;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 8px; vertical-align: top;"><strong>Service Requested:</strong></td>
                <td style="padding: 8px;">${service}</td>
              </tr>
              <tr style="background-color: #f9fafb;">
                <td style="padding: 8px; vertical-align: top;"><strong>Your Message:</strong></td>
                <td style="padding: 8px;">${message}</td>
              </tr>
            </table>
          </div>
          
          <p>One of our CMA (US) qualified professionals will contact you at <strong>${email}</strong> within 1-2 business days.</p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #dbeafe; border-radius: 5px;">
            <p style="margin: 0; color: #1e40af; font-weight: 500;">
              <strong>What to expect next:</strong>
            </p>
            <ul style="margin: 10px 0 0 20px; color: #374151;">
              <li>Initial consultation to understand your needs</li>
              <li>Proposal outlining our recommended solution</li>
              <li>Flexible engagement options tailored to your firm</li>
            </ul>
          </div>
        </div>
        
        <div style="margin-top: 30px; padding: 20px; background-color: #1e40af; color: white; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-weight: 500;">Good Ledger Financial Partners</p>
          <p style="margin: 5px 0 0 0; font-size: 0.9em; opacity: 0.9;">CMA (US) Qualified Professionals | Offshore Accounting Support</p>
        </div>
      </div>
    `;

    // Send main inquiry email to business
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'goodledgerfinancialpartners@gmail.com',
      subject: 'New Service Inquiry – Good Ledger Website',
      html: mainEmailHtml,
    });

    // Send confirmation email to client
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting Good Ledger Financial Partners',
      html: confirmationEmailHtml,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ success: false, message: 'Error sending emails' });
  }
}