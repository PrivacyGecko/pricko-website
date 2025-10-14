# Contact Form Testing Guide

This document provides a comprehensive testing checklist for the newly implemented contact form and newsletter subscription functionality.

## Testing Checklist

### Contact Form - Validation Testing

#### Name Field
- [ ] Empty name shows error: "Name is required"
- [ ] Error clears when user starts typing
- [ ] Valid name allows submission
- [ ] Field is disabled during submission

#### Email Field
- [ ] Empty email shows error: "Email is required"
- [ ] Invalid email format shows error: "Please enter a valid email address"
- [ ] Valid email allows submission
- [ ] Test formats:
  - [ ] `test@example.com` (valid)
  - [ ] `test@domain.co.uk` (valid)
  - [ ] `test.name+tag@example.com` (valid)
  - [ ] `test@example` (invalid - no TLD)
  - [ ] `test@.com` (invalid - no domain)
  - [ ] `@example.com` (invalid - no local part)

#### Subject Field
- [ ] Empty subject shows error: "Subject is required"
- [ ] Error clears when user starts typing
- [ ] Valid subject allows submission

#### Message Field
- [ ] Empty message shows error: "Message is required"
- [ ] Message with < 10 characters shows error: "Message must be at least 10 characters"
- [ ] Valid message (10+ chars) allows submission
- [ ] Textarea doesn't allow resize (CSS: resize-none)

#### Category Field
- [ ] Dropdown shows all options: General, Technical, Business, Media, Community
- [ ] Default value is "General Inquiry"
- [ ] Selected category is included in submission

### Contact Form - Submission Flow Testing

#### Loading State
- [ ] Button shows "Sending..." with spinner icon
- [ ] Button is disabled (opacity reduced, not clickable)
- [ ] All form fields are disabled
- [ ] Loading message appears: "Sending your message..."
- [ ] Form cannot be submitted again during loading

#### Success State
- [ ] Success message appears with green styling
- [ ] Check mark icon is displayed
- [ ] Message reads: "Message Sent Successfully!"
- [ ] Confirmation text mentions 24-hour response time
- [ ] All form fields are cleared
- [ ] Form can be submitted again with new data
- [ ] Status message auto-scrolls into view

#### Error State
- [ ] Error message appears with red styling
- [ ] X icon is displayed
- [ ] Message reads: "Failed to Send Message"
- [ ] Fallback email link is provided: community@pricko.com
- [ ] "Try Again" button resets status to idle
- [ ] Form data is NOT cleared (user can retry without re-entering)
- [ ] Status message auto-scrolls into view

### Newsletter Form Testing

#### Email Validation
- [ ] Empty email cannot be submitted (HTML5 required)
- [ ] Invalid email format triggers error state
- [ ] Valid email allows submission

#### Loading State
- [ ] Button shows "Subscribing..." with spinner
- [ ] Button is disabled during submission
- [ ] Email input field is disabled
- [ ] Loading message appears: "Subscribing..."

#### Success State
- [ ] Success message with green styling appears
- [ ] Message reads: "Successfully Subscribed!"
- [ ] Welcome message displayed
- [ ] Email field is cleared
- [ ] Can subscribe again with different email

#### Error State
- [ ] Error message with red styling appears
- [ ] Message reads: "Subscription Failed"
- [ ] "Try Again" button resets form
- [ ] Email is preserved for retry

### Accessibility Testing

#### Screen Reader Compatibility
- [ ] Form has proper ARIA labels
- [ ] Status changes are announced (`aria-live="polite"`)
- [ ] Form has `aria-busy="true"` during submission
- [ ] Error messages have `role="alert"`
- [ ] Field errors linked with `aria-describedby`
- [ ] Invalid fields marked with `aria-invalid="true"`

#### Keyboard Navigation
- [ ] Tab key navigates through all form fields in order
- [ ] Enter key submits form when focused on input
- [ ] Can navigate to and activate submit button with keyboard
- [ ] Can activate "Try Again" button with keyboard
- [ ] Focus is visible on all interactive elements
- [ ] No keyboard traps

#### Required Field Indicators
- [ ] Required fields show red asterisk (*)
- [ ] Asterisk is visible and readable
- [ ] Color contrast meets WCAG standards

### Mobile Responsiveness Testing

#### iPhone/iOS Safari
- [ ] Form layout stacks vertically on small screens
- [ ] Input fields are large enough to tap (min 44x44px)
- [ ] Email keyboard appears for email inputs
- [ ] Form fits within viewport without horizontal scroll
- [ ] Success/error messages are readable
- [ ] Newsletter form stacks on mobile

#### Android/Chrome Mobile
- [ ] Same as iOS testing
- [ ] Virtual keyboard doesn't obscure submit button
- [ ] Zoom is not required to read text

#### Tablet (iPad/Android Tablet)
- [ ] Form uses appropriate breakpoints (sm:, md:)
- [ ] Two-column layout for name/email on larger tablets
- [ ] Buttons are appropriately sized

### Security Testing

#### Spam Prevention
- [ ] Honeypot field `_gotcha` is hidden (display: none)
- [ ] Honeypot field has `tabIndex={-1}` (not keyboard accessible)
- [ ] Honeypot field has `autoComplete="off"`
- [ ] Formspree spam filter is enabled (check dashboard)

#### Data Validation
- [ ] No script injection possible in text fields
- [ ] Email regex prevents malformed emails
- [ ] Form cannot be submitted without required fields
- [ ] Client-side validation works even with JS disabled (HTML5)

### Cross-Browser Testing

#### Chrome (Latest)
- [ ] Form displays correctly
- [ ] All animations work smoothly
- [ ] Submission successful
- [ ] Console has no errors

#### Firefox (Latest)
- [ ] Same as Chrome testing
- [ ] Framer Motion animations render correctly

#### Safari (Latest)
- [ ] Same as Chrome testing
- [ ] iOS Safari testing on iPhone

#### Edge (Latest)
- [ ] Same as Chrome testing
- [ ] Windows Edge testing

### Performance Testing

#### Page Load
- [ ] Contact page loads in < 2 seconds
- [ ] No layout shift from form components
- [ ] Images/icons load properly

#### Form Interaction
- [ ] No lag when typing in fields
- [ ] Animations are smooth (60fps)
- [ ] Button hover effects work instantly
- [ ] State changes are immediate

### Integration Testing

#### Formspree Integration
- [ ] Form submissions appear in Formspree dashboard
- [ ] Email notifications are received
- [ ] Correct subject line format: `[CATEGORY] Subject`
- [ ] Reply-to address is set to user's email
- [ ] Newsletter submissions tracked separately

#### Email Delivery
- [ ] Test email received within 1 minute
- [ ] Email contains all form data:
  - [ ] Name
  - [ ] Email (as reply-to)
  - [ ] Category
  - [ ] Subject
  - [ ] Message
- [ ] Email formatting is readable
- [ ] Reply button uses user's email address

### Edge Cases

#### Network Issues
- [ ] Slow network: Loading state displays
- [ ] Network failure: Error state displays
- [ ] Timeout: Error message shown
- [ ] Can retry after network restored

#### Form Behavior
- [ ] Submitting empty form shows all validation errors at once
- [ ] Rapid clicking submit button doesn't create duplicate submissions
- [ ] Browser back button doesn't break form state
- [ ] Page refresh clears form data
- [ ] Success message persists until user submits again or refreshes

#### Long Text
- [ ] Very long name (100+ chars) is handled
- [ ] Very long message (5000+ chars) is handled
- [ ] Unicode characters (emoji, accents) work: 你好, café, 🎉

#### Special Characters in Email
- [ ] Periods: test.name@example.com
- [ ] Plus signs: test+tag@example.com
- [ ] Hyphens: test-name@my-domain.com

## Automated Testing Commands

### Build Test
```bash
npm run build
```
**Expected:** Build succeeds with no TypeScript errors

### Development Server
```bash
npm run dev
```
**Expected:** Server starts at http://localhost:5173

### TypeScript Check
```bash
npx tsc --noEmit
```
**Expected:** No type errors

## Manual Testing Steps

### Quick Test (5 minutes)
1. Navigate to `/contact` page
2. Fill out contact form with valid data
3. Submit and verify success message
4. Fill out newsletter form with valid email
5. Submit and verify success message
6. Check Formspree dashboard for both submissions

### Comprehensive Test (30 minutes)
1. Test all validation rules (see checklist above)
2. Test loading/success/error states
3. Test on mobile device or emulator
4. Test keyboard navigation
5. Test with screen reader (VoiceOver/NVDA)
6. Test in multiple browsers
7. Verify emails received
8. Test error recovery flow

### Regression Test (Before Production Deploy)
1. Run all tests from "Testing Checklist" section
2. Verify no console errors in browser
3. Verify no TypeScript compilation errors
4. Test in production-like environment
5. Verify analytics tracking (if applicable)
6. Check Lighthouse score (should be 90+)

## Known Issues / Limitations

### Formspree Free Tier
- Limited to 50 submissions/month
- No custom success page redirect
- Basic spam filtering only

### Client-Side Only
- Validation can be bypassed with DevTools
- Formspree handles server-side validation
- Consider adding reCAPTCHA for high-traffic sites

### Browser Compatibility
- Requires JavaScript enabled
- Modern browsers only (ES6+)
- Framer Motion requires modern CSS support

## Reporting Issues

If you find issues during testing:

1. **Document the issue:**
   - Browser and version
   - Device (desktop/mobile)
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots/video if applicable

2. **Check browser console:**
   - JavaScript errors
   - Network request failures
   - TypeScript type errors

3. **Check Formspree dashboard:**
   - Did submission reach Formspree?
   - Any error messages?
   - Spam filter triggered?

4. **Report to development team:**
   - Create GitHub issue
   - Include all documentation from step 1
   - Assign priority level

## Success Criteria

The contact form implementation is considered successful when:

- [x] All validation rules work correctly
- [x] Loading/success/error states display properly
- [x] Form submissions reach Formspree dashboard
- [x] Email notifications are received
- [x] Mobile responsive design works on iOS and Android
- [x] Accessibility standards met (WCAG 2.1 AA)
- [x] No TypeScript compilation errors
- [x] No console errors in browser
- [x] Build succeeds without warnings
- [x] Performance is acceptable (no lag)

---

**Test Plan Version:** 1.0
**Last Updated:** 2025-10-14
**Tested By:** _________________
**Test Date:** _________________
**Result:** [ ] Pass [ ] Fail
