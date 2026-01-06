# EmailJS Setup Instructions

To enable the contact form to send emails to `usamazahoor216@gmail.com`, follow these steps:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or your preferred email provider
4. Connect your Gmail account (`usamazahoor216@gmail.com`)
5. Note down the **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Portfolio Contact: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Set the template variables:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `subject` - Message subject
   - `message` - Message content

5. Set the **To Email** to: `usamazahoor216@gmail.com`
6. Note down the **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcdef123456`)

## 5. Update Contact Component

Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
const result = await emailjs.sendForm(
  'service_abc123',        // Your Service ID
  'template_xyz789',       // Your Template ID
  form.current,
  'abcdef123456'          // Your Public Key
)
```

## 6. Test the Form

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Navigate to the contact section
4. Fill out and submit the form
5. Check `usamazahoor216@gmail.com` for the test email

## 7. Optional: Set Up Auto-Reply

Create a second template for auto-replies to visitors:

```
Subject: Thanks for reaching out!

Hi {{from_name}},

Thank you for your message! I've received your inquiry about "{{subject}}" and will get back to you within 24 hours.

Best regards,
Usama Zahoor
MERN Stack Developer

---
This is an automated response from usamazahoor216@gmail.com
```

## Security Notes

- EmailJS public key is safe to expose in frontend code
- The service only allows sending emails, not reading them
- Set up domain restrictions in EmailJS dashboard for production
- Consider rate limiting for production use

## Troubleshooting

- **Form not sending**: Check console for errors, verify IDs are correct
- **Emails not received**: Check spam folder, verify template setup
- **CORS errors**: Ensure domain is whitelisted in EmailJS settings

## Free Tier Limits

- 200 emails/month on free plan
- Upgrade to paid plan for higher limits if needed