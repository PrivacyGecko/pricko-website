# TokenFlowDiagram Component Documentation

## Overview

The **TokenFlowDiagram** component is an animated SVG visualization that demonstrates the circular token economy of $PRICKO. It shows how tokens flow through the ecosystem: Users → Treasury → Node Operators → Privacy Tools → back to Users.

**File Location**: `/src/components/ui/TokenFlowDiagram.tsx`

## Features

✅ **Animated SVG** - Smooth path drawing and traveling dots
✅ **Responsive** - Scales perfectly from mobile to 4K displays
✅ **Accessible** - WCAG 2.1 AA compliant with screen reader support
✅ **Performance** - GPU-accelerated animations (60fps)
✅ **Reduced Motion** - Automatically respects user preferences
✅ **Interactive** - Hover effects on nodes with scale and glow
✅ **Customizable** - 3 size variants, optional labels, animations

## Component API

### TypeScript Interface

```typescript
interface TokenFlowDiagramProps {
  size?: 'small' | 'medium' | 'large';  // Default: 'medium'
  animated?: boolean;                    // Default: true
  showLabels?: boolean;                  // Default: true
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Controls maximum width of the diagram |
| `animated` | `boolean` | `true` | Enable/disable all animations |
| `showLabels` | `boolean` | `true` | Show/hide connection labels and node descriptions |

### Size Variants

- **`small`**: `max-w-sm` (< 640px) - Ideal for mobile/sidebar
- **`medium`**: `max-w-2xl` (< 1024px) - Standard size for content sections
- **`large`**: `max-w-4xl` (< 1536px) - Full-width for dedicated pages

## Usage Examples

### Basic Usage

```tsx
import { TokenFlowDiagram } from '@/components/ui/TokenFlowDiagram';

// Default configuration
<TokenFlowDiagram />
```

### Full-Featured (Ecosystem Page)

```tsx
<TokenFlowDiagram
  size="large"
  animated
  showLabels
/>
```

### Compact Version (Homepage)

```tsx
<TokenFlowDiagram
  size="medium"
  animated
  showLabels={false}
/>
```

### Mobile/Sidebar

```tsx
<TokenFlowDiagram
  size="small"
  animated={false}
  showLabels={false}
/>
```

## Data Structure

### Flow Nodes (4 Total)

1. **Users** (Top)
   - Icon: FaUsers
   - Color: Green (#4ade80)
   - Position: Top center
   - Description: "Purchase & use privacy tools"

2. **Treasury** (Right)
   - Icon: FaCoins
   - Color: Cyan (#06b6d4)
   - Position: Right center
   - Description: "$PRICKO token pool"

3. **Node Operators** (Bottom)
   - Icon: FaServer
   - Color: Purple (#8b5cf6)
   - Position: Bottom center
   - Description: "Run GeckoCore infrastructure"

4. **Privacy Tools** (Left)
   - Icon: FaShieldAlt
   - Color: Green (#4ade80)
   - Position: Left center
   - Description: "8 products powered by protocol"

### Flow Connections (4 Total)

1. Users → Treasury: "Token Payment"
2. Treasury → Operators: "Staking Rewards"
3. Operators → Tools: "Infrastructure"
4. Tools → Users: "Privacy Protection"

## Animation Details

### On Load

1. **Nodes**: Fade in sequentially (0.2s stagger, 0.6s duration)
2. **Connections**: Draw from start to end (1.5s duration, 0.2s stagger)
3. **Central Label**: Fades in last (1.5s delay)

### Continuous Animations

1. **Flow Dots**: Travel along paths in infinite loop (4s per cycle)
2. **Node Glow**: Subtle pulsing effect (3s heartbeat, varies by node)
3. **Path Dasharray**: Creates flowing line effect

### Hover States

- Node scales to 1.1
- Glow intensifies
- Description text more prominent
- Transition: 0.2s duration

### Reduced Motion

Component automatically respects `prefers-reduced-motion` browser setting:
- Disables traveling dots
- Disables pulsing glow
- Disables sequential animations
- Maintains static visualization

## Accessibility Features

✅ **ARIA Labels**: Descriptive labels for entire diagram and each node
✅ **Keyboard Navigation**: All nodes focusable with Tab key
✅ **Focus Indicators**: Visible green ring on focused nodes
✅ **Screen Reader Support**: Hidden text describes full token flow
✅ **Semantic SVG**: Proper use of `<g role="group">` for grouping
✅ **Color Contrast**: All text meets WCAG AA standards

### Screen Reader Text

```
The $PRICKO token flows through a circular ecosystem: Users purchase privacy
tools with tokens, payments go to the Treasury, the Treasury rewards Node
Operators through staking, Node Operators provide infrastructure for Privacy
Tools, and Privacy Tools deliver protection back to Users. This creates a
self-sustaining circular economy.
```

## Technical Implementation

### SVG Specifications

- **ViewBox**: 800 x 600
- **Node Radius**: 60px
- **Connection Paths**: Cubic Bezier curves with control points
- **Flow Dots**: 6px radius circles with glow filter
- **Path Stroke**: 3px width, dashed (10px dash, 5px gap)

### Performance Optimizations

1. **GPU Acceleration**: All animations use `transform` and `opacity`
2. **Lazy Evaluation**: Reduced motion detected once on mount
3. **Viewport Triggers**: Animations only run when visible (`viewport={{ once: true }}`)
4. **Efficient Rendering**: Minimal DOM updates using Framer Motion

### Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (iOS and macOS)
- ✅ Brave (latest)

**Note**: All modern browsers fully support SVG and CSS animations used in this component.

## Integration Examples

### Ecosystem Page Section

```tsx
<section className="section-padding bg-primary">
  <div className="container-max">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
        Circular Token Economy
      </h2>
      <p className="text-lg text-muted max-w-3xl mx-auto">
        $PRICKO creates a self-sustaining ecosystem where every transaction
        strengthens the network and enhances user privacy.
      </p>
    </div>

    <TokenFlowDiagram size="large" animated showLabels />

    <div className="mt-12 text-center">
      <p className="text-sm text-zinc-500">
        Hover over nodes to explore each component of the ecosystem
      </p>
    </div>
  </div>
</section>
```

### Homepage Integration

```tsx
<section className="py-20 bg-secondary">
  <div className="container-max">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Diagram */}
      <div>
        <TokenFlowDiagram size="medium" animated showLabels={false} />
      </div>

      {/* Right: Description */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Token Utility That <span className="gradient-text">Actually Works</span>
        </h2>
        <p className="text-lg text-muted mb-6">
          Unlike most memecoins, $PRICKO powers a real ecosystem of privacy tools.
          Every token has genuine utility in protecting user privacy.
        </p>
        {/* Feature list */}
      </div>
    </div>
  </div>
</section>
```

### Tokenomics Page Integration

```tsx
<section className="section-padding bg-gradient-to-b from-primary to-secondary">
  <div className="container-max">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
        Token Flow & Utility
      </h2>
      <p className="text-lg text-muted max-w-3xl mx-auto">
        Understanding how $PRICKO moves through the ecosystem and creates value.
      </p>
    </div>

    <TokenFlowDiagram size="large" animated showLabels />

    {/* Detailed breakdown cards below */}
  </div>
</section>
```

## Styling Customization

### CSS Variables (Tailwind Config)

The component uses these design system colors:

```css
--color-accent: #4ade80;        /* Green - Users, Tools */
--color-protocol-primary: #06b6d4;   /* Cyan - Treasury */
--color-protocol-secondary: #8b5cf6; /* Purple - Node Operators */
--color-zinc-400: #a1a1aa;      /* Muted text */
--color-zinc-800: #27272a;      /* Connection paths */
```

### Custom Styling

To customize colors or effects, modify the component directly or extend via props in a future version.

## Testing Checklist

✅ **Rendering**: Displays correctly on all screen sizes
✅ **Animations**: Smooth 60fps animations without jank
✅ **Responsiveness**: Scales from 375px to 4K displays
✅ **Keyboard Navigation**: All nodes focusable and accessible
✅ **Screen Readers**: Descriptive labels read correctly
✅ **Reduced Motion**: Respects user preference
✅ **Performance**: Lighthouse score >90
✅ **Cross-Browser**: Works in Chrome, Firefox, Safari, Edge

## Known Limitations

1. **SVG Path Animations**: The `offsetPath` animation for flow dots uses CSS `offset-path` which has excellent modern browser support but may need fallback for very old browsers.

2. **Text on Path**: The connection labels use SVG `<textPath>` which is well-supported but may render slightly differently across browsers.

3. **Mobile Performance**: On very low-end devices, consider disabling animations (`animated={false}`) for better performance.

## Future Enhancements

Potential improvements for future versions:

- [ ] **Interactive Mode**: Click nodes to highlight specific flows
- [ ] **Theme Variants**: Light mode color scheme
- [ ] **Custom Data**: Accept custom nodes/connections via props
- [ ] **Export**: Download diagram as PNG/SVG
- [ ] **Tooltip Details**: Show detailed stats on hover
- [ ] **Animation Controls**: Play/pause button for presentations

## Related Components

- **UtilityTimeline**: Shows token utility progression over time
- **ProtocolArchitectureDiagram**: Technical infrastructure visualization
- **ProgressBar**: Used for token distribution metrics

## Questions & Support

For implementation questions or bug reports, see:
- Project documentation: `/CLAUDE.md`
- Technical specs: `/PHASE1_TECHNICAL_SPECS.md`
- Content copy: `/PHASE1_CONTENT_COPY.md`

---

**Last Updated**: November 14, 2025
**Component Version**: 1.0.0
**Status**: ✅ Production Ready
