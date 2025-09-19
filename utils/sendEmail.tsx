import formData from "form-data";
import Mailgun from "mailgun.js";
import fs from "fs";
import path from "path";

if (typeof window !== "undefined") {
  throw new Error("sendEmail.ts must only be used on the server side.");
}

// Validate env vars before initialization
if (!process.env.MAILGUN_API_KEY) {
  throw new Error("MAILGUN_API_KEY environment variable is missing");
}

type EmailResponse = {
  id: string;
  message: string;
};

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
  url: "https://api.mailgun.net"
});

const domain = "globalaisummit.isfnetwork.org";
const brochureFilename = "GLOBAL JUNICORN Brochure.pdf";

const sendWithRetry = async (payload: any, retries = 3): Promise<any> => {
  try {
    return await mg.messages.create(domain, payload);
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, 1000 * (4 - retries)));
      return sendWithRetry(payload, retries - 1);
    }
    throw error;
  }
};

export const sendConfirmationEmail = async (email: string, name: string): Promise<EmailResponse> => {
  try {
    const brochurePath = path.join(process.cwd(), "public", brochureFilename);
    
    if (!fs.existsSync(brochurePath)) {
      throw new Error(`Brochure file not found: ${brochurePath}`);
    }

    const brochureData = fs.readFileSync(brochurePath);

    const result = await sendWithRetry({
      from: `ISF Global AI Summit <noreply@${domain}>`,
      to: [email],
      subject: "Registration Confirmed – GLOBAL JUNICORN & AI SUMMIT 2025",
      text: `Dear ${name},\n\nDelighted to confirm your registration for the GLOBAL JUNICORN SUMMIT on 29th May and GLOBAL AI SUMMIT on 30th May 2025, hosted by the International StartUp Foundation (ISF) at Texas State University, San Marcos, Texas, USA.\n\nYou'll be joining top unicorn founders, CXOs, innovators, and leaders for two powerful days of keynotes, networking, and global collaboration.\n\nPlease find the brochure attached for full details.\nWe look forward to seeing you there!\n\nFor any support, write to hello@isfnetwork.org\n\nWarm regards,\nJ.A. Chowdary\nFounder, International StartUp Foundation\nwww.isfjunicorns.com   www.isfnetwork.org`,
      html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Confirmed – GLOBAL JUNICORN & AI Summits 2025</title>
    <style>
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                border-radius: 0 !important;
            }
            .header, .content {
                padding: 25px 15px !important;
            }
            .header h1 {
                font-size: 24px !important;
            }
            .event-dates p {
                font-size: 14px !important;
            }
            .content p, .signature p {
                font-size: 15px !important;
            }
        }
        
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            max-width: 600px;
            margin: 0 auto;
            padding: 0;
            background-color: #f7fafc;
        }
        .email-container {
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            margin: 20px auto;
        }
        .header {
            background-color: #1a365d;
            padding: 40px 20px;
            text-align: center;
        }
        .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 28px;
            font-weight: 600;
            letter-spacing: 0.5px;
        }
        .header p {
            color: #cbd5e0;
            margin: 8px 0 0;
            font-size: 16px;
            font-weight: 300;
        }
        .content {
            padding: 40px;
        }
        .content p {
            margin-bottom: 20px;
            font-size: 16px;
            color: #4a5568;
        }
        .highlight {
            color: #2c5282;
            font-weight: 600;
        }
        .signature {
            margin-top: 30px;
            border-top: 1px solid #e2e8f0;
            padding-top: 20px;
        }
        .signature p {
            margin-bottom: 5px;
            font-size: 16px;
        }
        .signature-name {
            font-weight: 600;
            color: #2d3748;
        }
        a {
            color: #2b6cb0;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .event-dates {
            background-color: #ebf8ff;
            padding: 15px;
            border-radius: 6px;
            margin: 25px 0;
            text-align: center;
            border-left: 4px solid #4299e1;
        }
        .event-dates p {
            margin: 0;
            font-weight: 500;
            color: #2b6cb0;
        }
        .brochure-notice {
            background-color: #f0fff4;
            padding: 15px;
            border-radius: 6px;
            margin: 25px 0;
            border-left: 4px solid #48bb78;
            font-size: 15px;
        }
        .social-links {
            text-align: center;
            margin: 30px 0 20px 0;
        }
        .social-button {
            display: inline-block;
            background-color: #1a365d;
            color: white;
            padding: 10px 20px;
            margin: 0 5px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
        }
        .footer {
            text-align: center;
            padding: 25px 20px;
            background-color: #f8f9fa;
            border-top: 1px solid #e2e8f0;
            color: #718096;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Registration Confirmed</h1>
            <p>GLOBAL JUNICORN & AI Summits 2025</p>
        </div>

        <div class="content">
            <p>Dear <span class="highlight">${name}</span>,</p>
            
            <p>We are delighted to confirm your registration for the <span class="highlight">GLOBAL JUNICORN SUMMIT</span> on 29th May and <span class="highlight">GLOBAL AI SUMMIT</span> on 30th May 2025, hosted by the International StartUp Foundation (ISF) at Texas State University, San Marcos, Texas, USA.</p>
            
            <p>You'll be joining top unicorn founders, CXOs, innovators, and leaders for two powerful days of keynotes, networking, and global collaboration.</p>
            
            <p>Please find the brochure attached for full details. </p>
            
            <p>We look forward to seeing you there!</p>
            
            <p>For any assistance, please contact us at <a href="mailto:hello@isfnetwork.org">hello@isfnetwork.org</a></p>
            
            <div class="signature">
                <p>Warm regards,</p>
                <p class="signature-name">J.A. Chowdary</p>
                <p>Founder, International StartUp Foundation</p>
                <p>
                    <a href="http://www.isfjunicorns.com">www.isfjunicorns.com</a> • 
                    <a href="https://globalaisummit.isfnetwork.org/">www.globalaisummit.isfnetwork.org</a>
                </p>
            </div>
        </div>
    </div>
</body>
</html>`,
      attachment: [{
        filename: "GLOBAL JUNICORN Brochure.pdf",
        data: brochureData,
        contentType: "application/pdf"
      }],
      "o:tracking": true,
      "o:tracking-clicks": "htmlonly",
      "o:tracking-opens": true
    });

    console.log(`✅ Email sent to ${email}`, result.id);
    return { 
      id: result.id ?? "no-id", 
      message: result.message ?? "Email queued successfully" 
    };

  } catch (error: any) {
    console.error(`❌ Failed to send to ${email}:`, error.message);
    throw new Error(`Email delivery failed: ${error.message}`);
  }
};