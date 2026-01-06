// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: 'service_6noe5if',     // Replace with your EmailJS Service ID
  templateId: 'template_sf3az0j',   // Replace with your EmailJS Template ID
  publicKey: '3jHozHv90zD9TKFQa',             // Replace with your EmailJS Public Key
  
  // Email template variables mapping
  templateParams: {
    to_email: 'usamazahoor216@gmail.com',   // Your email address
    from_name: '',                          // Will be filled from form
    from_email: '',                         // Will be filled from form
    subject: '',                            // Will be filled from form
    message: '',                            // Will be filled from form
  }
}

// Instructions:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Set up a Gmail service connected to usamazahoor216@gmail.com
// 3. Create an email template with the variables above
// 4. Replace the placeholder values with your actual IDs
// 5. Test the contact form

export default emailjsConfig