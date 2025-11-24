# Video Loading Optimization - Testing Guide

## Quick Visual Test

### What You Should See Now

**Timeline of User Experience:**

1. **0-100ms (Instant):**
   - Green gradient background appears immediately
   - Text and mascot are visible and readable
   - No dark/blank screen

2. **500ms-2s (Video loads):**
   - Green gradient remains visible underneath
   - Video smoothly fades in over 1 second
   - Transition is barely noticeable (professional)

3. **After video loads:**
   - Video plays in slow motion (0.5x speed)
   - Green gradient hidden behind video
   - Everything looks polished and intentional

### How to Test Locally

```bash
# 1. Start the development server
npm run dev

# 2. Open browser to http://localhost:5173

# 3. Open DevTools (F12 or Cmd+Option+I)

# 4. Go to Network tab > Throttling dropdown

# 5. Select "Slow 3G" to simulate slow connection

# 6. Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

# 7. Observe the loading sequence
```

## Expected Behavior vs. Issues

### EXPECTED (Good)
- Green gradient appears instantly
- Page is never dark or blank
- Video fades in smoothly after 1-2 seconds
- Transition feels intentional and professional
- No console errors

### ISSUES (Bad - Report if you see these)
- Dark/black screen at any point
- Video appears suddenly (no fade-in)
- White screen or flash
- Console errors about missing poster
- Video doesn't play at all

## Testing Scenarios

### Test 1: First-Time Visit (Uncached)
```
1. Clear browser cache (Cmd+Shift+Delete)
2. Hard refresh page (Cmd+Shift+R)
3. Expected: Gradient appears instantly, video fades in 1-2s
```

### Test 2: Return Visit (Cached)
```
1. Visit page once
2. Refresh normally (Cmd+R)
3. Expected: Gradient appears instantly, video may load faster (<500ms)
```

### Test 3: Slow Connection
```
1. DevTools > Network > Throttling > Slow 3G
2. Hard refresh
3. Expected: Gradient appears instantly, video takes 3-5s but user never sees blank screen
```

### Test 4: Mobile Device
```
1. DevTools > Toggle device toolbar (Cmd+Shift+M)
2. Select iPhone or Android device
3. Hard refresh
4. Expected: Same smooth experience on mobile
```

### Test 5: Cross-Browser
```
Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if on Mac)

Expected: Identical behavior in all browsers
```

## Before vs After Comparison

### BEFORE (Problem)
```
User lands on page
     ↓
2-3 seconds of dark/blank screen  ← BAD UX
     ↓
Video suddenly appears  ← Jarring
     ↓
User finally sees content
```

### AFTER (Solution)
```
User lands on page
     ↓
<100ms green gradient appears  ← INSTANT
     ↓
Content readable immediately  ← GOOD UX
     ↓
Video smoothly fades in 1-2s  ← POLISHED
     ↓
Professional experience
```

## Visual Checklist

When testing, verify these visual elements:

- [ ] Green gradient background (dark green to black)
- [ ] Privacy Gecko mascot visible immediately
- [ ] "$PRICKO" text readable from start
- [ ] "GeckoCore Protocol" heading visible
- [ ] CTA buttons ("Buy $PRICKO", "Whitepaper") visible
- [ ] Video fades in smoothly (not sudden)
- [ ] No white flash or blank screen
- [ ] Text remains readable throughout load

## Network Tab Analysis

Open DevTools > Network tab during page load:

**What you should see:**
1. HTML loads first (~2.60 kB)
2. CSS loads next (~78 kB)
3. JavaScript chunks load (~500 kB total)
4. green_bg.mp4 loads (3.5 MB) - but gradient shows while this loads
5. Favicon and external resources

**Key metric:** Time to First Contentful Paint (FCP)
- Should be <1 second
- Green gradient counts as contentful paint
- Video is enhancement, not blocker

## Console Output

Open DevTools > Console tab:

**Expected (clean):**
- Vite dev server connected
- React development mode warnings (normal)
- No errors about missing poster image
- No 404 errors

**Unexpected (report these):**
- Errors about video-poster.jpg
- Errors about green_bg.mp4
- React warnings about memory leaks
- Any red error messages

## Mobile Testing

### iOS Safari
1. Use real iPhone or Safari responsive mode
2. Video should autoplay (muted)
3. Gradient should appear instantly
4. playsInline attribute prevents fullscreen

### Android Chrome
1. Use real Android device or Chrome emulation
2. Same smooth experience as desktop
3. Video autoplay works (muted + playsInline)

## Performance Metrics

### Lighthouse Audit
```bash
# Run Lighthouse in DevTools
1. DevTools > Lighthouse tab
2. Select "Performance" only
3. Run audit

Expected scores:
- Performance: 85+ (should remain stable)
- Accessibility: 95+ (no change)
- Best Practices: 100 (no change)
- SEO: 100 (no change)
```

### Core Web Vitals
Monitor these metrics:

**LCP (Largest Contentful Paint):**
- Target: <2.5s
- Should be stable or improved
- Video is not LCP (gradient + text are)

**FID (First Input Delay):**
- Target: <100ms
- No change expected

**CLS (Cumulative Layout Shift):**
- Target: <0.1
- No change (video container sized correctly)

## Rollback Instructions

If something goes wrong:

```bash
# Restore original file
cp /Users/pothamsettyk/Projects/Pricko-Website/src/pages/HomePage.tsx.backup \
   /Users/pothamsettyk/Projects/Pricko-Website/src/pages/HomePage.tsx

# Rebuild
npm run build

# Restart dev server
npm run dev
```

## Reporting Issues

If you encounter problems, report:

1. **Browser:** Chrome 120, Safari 17, etc.
2. **Device:** Desktop, iPhone 15, etc.
3. **Connection:** Fast, Slow 3G, etc.
4. **Issue:** What you saw vs. what was expected
5. **Console errors:** Copy/paste any error messages
6. **Screenshots:** Before/after if possible

## Success Criteria

The optimization is successful if:

- [x] Build completes without errors (verified)
- [x] TypeScript compiles successfully (verified)
- [ ] Green gradient appears instantly (<100ms)
- [ ] No dark/blank screen at any point
- [ ] Video fades in smoothly (1 second transition)
- [ ] No console errors
- [ ] Works on mobile devices
- [ ] Works in all major browsers
- [ ] Performance metrics stable or improved

## Next Steps After Testing

1. **If tests pass:**
   - Deploy to staging (stage.pricko.com)
   - Test on staging environment
   - Get approval from ForthEye
   - Deploy to production (pricko.com)

2. **If issues found:**
   - Document issues in detail
   - Review implementation
   - Fix issues
   - Re-test

3. **Future optimizations (optional):**
   - Video compression (reduce from 3.5 MB to 1.5 MB)
   - CDN delivery for faster loading
   - Multiple quality sources for different devices

---

**Happy Testing!**

The goal is a smooth, professional loading experience where users never see a blank screen. The green gradient should feel intentional, not like a placeholder.
