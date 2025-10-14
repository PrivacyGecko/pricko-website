# Contact Form Quick Start Guide

## 5-Minute Setup

### What Was Done
The contact form now uses **Formspree** instead of `mailto:` links. This provides:
- Professional form submission
- Loading/success/error states
- Email notifications
- Spam protection
- No backend coding required

### What You Need to Do

#### Step 1: Create Formspree Account (2 minutes)
1. Go to https://formspree.io
2. Click "Get Started" and sign up (free)
3. Verify your email

#### Step 2: Create Forms (2 minutes)

**Contact Form:**
1. Click "+ New Form" in dashboard
2. Name: "PRICKO Contact Form"
3. Copy the Form ID (example: `xyzabc123`)
4. Your endpoint: `https://formspree.io/f/xyzabc123`

**Newsletter Form:**
1. Click "+ New Form" again
2. Name: "PRICKO Newsletter"
3. Copy the Form ID (example: `def456ghi`)
4. Your endpoint: `https://formspree.io/f/def456ghi`

#### Step 3: Update Code (1 minute)

**Open file:** `/src/pages/ContactPage.tsx`

**Find lines 57-58:**
```typescript
const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/YOUR_CONTACT_FORM_ID';
const NEWSLETTER_FORM_ENDPOINT = 'https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID';
```

**Replace with your Form IDs:**
```typescript
const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/xyzabc123';
const NEWSLETTER_FORM_ENDPOINT = 'https://formspree.io/f/def456ghi';
```

#### Step 4: Test (2 minutes)

```bash
npm run dev
```

1. Go to http://localhost:5173/contact
2. Fill out the contact form
3. Submit and verify success message appears
4. Check your email for notification
5. Check Formspree dashboard for submission

### Done!

The contact form is now live and professional. All submissions will:
- Be stored in Formspree dashboard
- Send you email notifications
- Show users success/error messages
- Work on all devices

---

## Quick Reference

### File Locations
- **Main Component:** `/src/pages/ContactPage.tsx`
- **Setup Guide:** `/FORMSPREE_SETUP.md` (detailed)
- **Testing Guide:** `/CONTACT_FORM_TESTING.md` (comprehensive)
- **Implementation Summary:** `/P0-12_IMPLEMENTATION_SUMMARY.md` (technical)

### Formspree Dashboard
- **URL:** https://formspree.io/dashboard
- **View submissions:** Click on form name
- **Check spam:** See spam filter logs
- **Email settings:** Configure notifications

### Features
- ✅ Client-side validation (email format, required fields)
- ✅ Loading spinner during submission
- ✅ Success message (green) with confirmation
- ✅ Error message (red) with retry button
- ✅ Honeypot spam protection
- ✅ Mobile responsive
- ✅ Accessibility compliant (WCAG 2.1 AA)
- ✅ Works on all modern browsers

### Limits (Free Tier)
- 50 submissions/month
- Upgrade to Bronze ($10/month) for 1,000 submissions if needed

### Troubleshooting

**Form doesn't submit:**
- Check Form IDs are correct in code
- Check browser console for errors
- Verify Formspree dashboard shows the forms

**No email received:**
- Check spam folder
- Verify email settings in Formspree dashboard
- Check Formspree submission logs

**Build fails:**
- Run `npm run build` to see errors
- Check TypeScript compilation

### Support
- **Formspree:** support@formspree.io
- **Docs:** https://help.formspree.io

---

**Status:** ✅ Implementation Complete - Just needs Formspree IDs
**Time to Deploy:** 5 minutes
**Difficulty:** Easy
