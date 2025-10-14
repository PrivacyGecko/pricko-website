# Formspree Integration Setup Guide

This guide explains how to configure the contact form and newsletter subscription forms in ContactPage.tsx to work with Formspree.

## Overview

The contact form has been updated to use Formspree as the backend service instead of the unreliable `mailto:` fallback. Formspree provides:

- Professional form submission handling
- Spam protection with honeypot fields
- Email notifications for form submissions
- Free tier: 50 submissions/month
- No backend code required
- Built-in confirmation emails

## Features Implemented

### Contact Form
- ✅ Full form validation (client-side)
- ✅ Loading state with spinner animation
- ✅ Success message with confirmation
- ✅ Error handling with retry option
- ✅ Form clears automatically on success
- ✅ Honeypot field for spam prevention
- ✅ Accessibility support (ARIA labels, screen reader announcements)
- ✅ Disabled state during submission
- ✅ Email format validation
- ✅ Required field validation
- ✅ Minimum character validation for message

### Newsletter Form
- ✅ Email validation
- ✅ Loading/success/error states
- ✅ Automatic form clearing on success
- ✅ Retry functionality on error
- ✅ Accessibility support

## Setup Instructions

### Step 1: Create Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Forms

#### Contact Form Setup

1. In your Formspree dashboard, click "New Form"
2. Name it: "PRICKO Contact Form"
3. Copy the Form ID (looks like: `xyzabc123`)
4. Your endpoint will be: `https://formspree.io/f/xyzabc123`

**Recommended Settings:**
- Enable spam filtering
- Set reply-to address (uses `_replyto` field from form)
- Enable email notifications to your team
- Customize confirmation email template (optional)

#### Newsletter Form Setup

1. Create another form: "PRICKO Newsletter"
2. Copy the Form ID
3. Your endpoint will be: `https://formspree.io/f/[newsletter-id]`

**Recommended Settings:**
- Enable spam filtering
- Set up autoresponder with welcome message
- Forward submissions to your email marketing tool (optional)

### Step 3: Update Environment Variables

Create a `.env` file in the project root (if it doesn't exist):

```bash
# Formspree Form Endpoints
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_CONTACT_FORM_ID
VITE_NEWSLETTER_FORM_ENDPOINT=https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID
```

**Important:** Add `.env` to your `.gitignore` to prevent committing sensitive data.

### Step 4: Update ContactPage.tsx

Replace the placeholder endpoints in `/src/pages/ContactPage.tsx`:

**Current (lines 57-58):**
```typescript
const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/YOUR_CONTACT_FORM_ID';
const NEWSLETTER_FORM_ENDPOINT = 'https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID';
```

**Update to:**
```typescript
const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || 'https://formspree.io/f/YOUR_CONTACT_FORM_ID';
const NEWSLETTER_FORM_ENDPOINT = import.meta.env.VITE_NEWSLETTER_FORM_ENDPOINT || 'https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID';
```

Or simply replace `YOUR_CONTACT_FORM_ID` and `YOUR_NEWSLETTER_FORM_ID` with your actual Formspree form IDs.

### Step 5: Test the Forms

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to Contact Page:**
   ```
   http://localhost:5173/contact
   ```

3. **Test Contact Form:**
   - Fill out all required fields
   - Submit the form
   - Verify loading state appears
   - Check for success message
   - Verify email received in Formspree dashboard

4. **Test Newsletter Form:**
   - Enter email address
   - Submit form
   - Verify success message
   - Check Formspree dashboard for submission

5. **Test Error Handling:**
   - Try submitting with invalid Formspree endpoint (temporarily)
   - Verify error message displays
   - Test retry functionality

## Form Data Structure

### Contact Form Submission

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "category": "technical",
  "subject": "Bug Report",
  "message": "I found a bug in the wallet connection...",
  "_subject": "[TECHNICAL] Bug Report",
  "_replyto": "john@example.com"
}
```

### Newsletter Form Submission

```json
{
  "email": "subscriber@example.com",
  "_subject": "New Newsletter Subscription"
}
```

## Formspree Special Fields

The implementation uses Formspree's special fields:

- `_subject`: Sets the email subject line (overrides default)
- `_replyto`: Sets the reply-to address for easier responses
- `_gotcha`: Honeypot field for spam prevention (hidden from users)

## Validation Rules

### Contact Form
- **Name:** Required
- **Email:** Required, valid email format
- **Subject:** Required
- **Message:** Required, minimum 10 characters
- **Category:** Optional (defaults to "general")

### Newsletter Form
- **Email:** Required, valid email format

## Accessibility Features

### Screen Reader Support
- `aria-live="polite"` on status message containers
- `aria-busy="true"` on form during submission
- `role="alert"` on success/error messages
- `aria-invalid` on fields with validation errors
- `aria-describedby` linking error messages to fields

### Keyboard Navigation
- All form fields are keyboard accessible
- Submit button disabled during loading (prevents double submission)
- Focus management for error messages

## Security Features

### Spam Prevention
1. **Honeypot Field:** Hidden field `_gotcha` catches bots
2. **Formspree Spam Filter:** Built-in spam detection
3. **Email Validation:** Client-side regex validation
4. **Rate Limiting:** Consider adding if receiving spam (Formspree feature)

### Data Privacy
- No sensitive data stored in frontend code
- HTTPS-only communication
- Formspree GDPR compliant
- User data encrypted in transit

## Troubleshooting

### Form Not Submitting

**Check:**
1. Formspree endpoint URLs are correct
2. Network tab in browser DevTools for errors
3. CORS errors (shouldn't occur with Formspree)
4. Formspree dashboard for submission logs

### Success Message Not Showing

**Check:**
1. Response status is 200 OK
2. `submitStatus` state is updating correctly
3. Console for JavaScript errors
4. Network request completed successfully

### Email Not Received

**Check:**
1. Formspree dashboard shows submission
2. Email notifications enabled in Formspree settings
3. Check spam folder
4. Verify email address in Formspree settings

### Validation Errors

**Check:**
1. All required fields filled
2. Email format is valid (contains @ and domain)
3. Message has at least 10 characters
4. Console for validation error messages

## Alternative Solutions

If Formspree doesn't meet your needs, consider these alternatives:

### 1. Netlify Forms (if deploying to Netlify)
```tsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  {/* form fields */}
</form>
```

### 2. Custom Backend API
- Create serverless function (Vercel/Netlify Functions)
- Use SendGrid, Mailgun, or AWS SES for email delivery
- Requires backend development

### 3. Firebase Firestore
- Store submissions in Firestore database
- Set up Cloud Function to send emails
- More complex setup

### 4. EmailJS
- Similar to Formspree
- Free tier: 200 emails/month
- Different API structure

## Production Deployment Checklist

- [ ] Replace placeholder Formspree endpoints with real form IDs
- [ ] Test form submission in production environment
- [ ] Verify email notifications are received
- [ ] Test on mobile devices (iOS Safari, Chrome Android)
- [ ] Verify accessibility with screen reader
- [ ] Test keyboard navigation
- [ ] Monitor Formspree dashboard for spam
- [ ] Set up email forwarding if needed
- [ ] Configure autoresponders for better UX
- [ ] Add monitoring/analytics (optional)

## Cost Considerations

### Formspree Free Tier
- 50 submissions/month
- Unlimited forms
- Basic spam filtering
- Email notifications

### Paid Plans (if needed)
- **Bronze ($10/month):** 1,000 submissions
- **Silver ($25/month):** 5,000 submissions
- **Gold ($50/month):** 25,000 submissions
- Features: Priority support, custom branding, webhooks

## Support Resources

- **Formspree Docs:** https://help.formspree.io
- **Formspree Dashboard:** https://formspree.io/dashboard
- **React Integration:** https://help.formspree.io/hc/en-us/articles/360055613373

## File Locations

- **Contact Page Component:** `/src/pages/ContactPage.tsx`
- **Setup Documentation:** `/FORMSPREE_SETUP.md` (this file)
- **Environment Variables:** `/.env` (create if needed)

## Questions or Issues?

If you encounter issues:
1. Check Formspree dashboard for error logs
2. Review browser console for JavaScript errors
3. Verify network requests in DevTools
4. Contact Formspree support: support@formspree.io
5. Review this documentation

---

**Last Updated:** 2025-10-14
**Implemented By:** Pricko Web Developer Agent
**Status:** Ready for production deployment
