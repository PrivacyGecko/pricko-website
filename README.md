# PRICKO - Privacy Gecko Approved 🦎

A modern, privacy-focused memecoin website built with React, TypeScript, and Tailwind CSS. PRICKO combines the fun of meme culture with serious privacy tools, creating a unique ecosystem for digital privacy advocates.

![PRICKO Logo](public/logo.png)

## 🚀 Features

### 🎨 Design & UX
- **Dark Theme**: Sleek black background with vibrant green accents
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Modern Typography**: Clean, readable fonts with gradient text effects
- **Gecko Branding**: Consistent mascot theme throughout the site

### 📱 Pages & Content
- **Homepage**: Hero section with call-to-action buttons and tools preview
- **About**: Origin story and mission of the PRICKO project
- **Privacy Tools**: Detailed showcase of PrickoShare, Pricko Guard, Pricko Shell, Pricko Browser
- **Tokenomics**: Complete breakdown of $PRICKO token distribution and utility
- **Roadmap**: Development timeline and future milestones
- **Contact**: Community channels and team contact information
- **Legal Pages**: Privacy Policy, Terms of Service, Disclaimer

### 🛠️ Technical Features
- **TypeScript**: Full type safety and better developer experience
- **React Router**: Client-side routing with active navigation states
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Smooth animations and page transitions
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Component Architecture**: Reusable, maintainable component structure

## 🏗️ Project Structure

```
pricko-website/
├── public/
│   └── logo.png          # Main PRICKO gecko logo
├── src/
│   ├── components/
│   │   ├── common/       # Layout components (Header, Footer, Navigation)
│   │   └── ui/           # Reusable UI components (ToolCard, Button)
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ToolsPage.tsx
│   │   ├── TokenomicsPage.tsx
│   │   ├── RoadmapPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── PrivacyPolicyPage.tsx      # Legal
│   │   ├── TermsOfServicePage.tsx     # Legal
│   │   └── DisclaimerPage.tsx         # Legal
│   ├── constants/
│   │   └── metrics.ts                 # Centralized metrics
│   ├── types/            # TypeScript type definitions
│   ├── styles/           # Global CSS and Tailwind configuration
│   └── utils/            # Utility functions and constants
├── index.html            # Main HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite build configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pricko-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Design System

### Color Palette
- **Primary**: `#000000` (Black)
- **Secondary**: `#18181b` (Zinc-900)
- **Accent**: `#4ade80` (Green-400)
- **Accent Hover**: `#22c55e` (Green-500)
- **Text Muted**: `#a1a1aa` (Zinc-400)
- **Border**: `#27272a` (Zinc-800)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights with gradient text effects
- **Body Text**: Regular weight with good contrast
- **Accent Text**: Green color for highlights and CTAs

### Components
- **Buttons**: Primary (green) and secondary (outline) variants
- **Cards**: Dark background with hover effects and borders
- **Navigation**: Fixed header with active state indicators
- **Animations**: Fade-in, slide-up, and hover effects

## 🔧 Technology Stack

### Frontend Framework
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development with full IntelliSense
- **Vite**: Fast build tool with hot module replacement

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **PostCSS**: CSS processing with autoprefixer

### Development Tools
- **ESLint**: Code linting and quality checks
- **Prettier**: Code formatting (recommended)
- **React Router**: Client-side routing

## 🌟 Key Features Explained

### Privacy Tools Showcase
The website highlights four main privacy tools:

1. **PrickoShare** (Live - 2,100+ Users)
   - Zero-knowledge file sharing SaaS
   - Token-gated premium features
   - Persistent vault storage for Pro tier
   - Daily quotas system with wallet-connect authentication
   - URL: https://prickoshare.com

2. **Pricko Guard** (Beta - 850+ Testers)
   - Manifest V3 browser extension
   - Anti-fingerprinting protection
   - Tracker and cookie blocking
   - Multiple stealth modes
   - Premium tiers for token holders
   - URL: https://prickoguard.com

3. **Pricko Shell** (Coming Soon - 1,800+ Waitlist)
   - Cross-platform mobile privacy browser (iOS, Android)
   - Solana wallet integration
   - Plugin system architecture
   - Privacy toolkit SDK

4. **Pricko Browser** (In Development - Phase 3)
   - Desktop browser forked from Ungoogled Chromium
   - Built-in crypto wallet
   - Plugin marketplace
   - Privacy-first architecture
   - Integrated DeFi tools

### Tokenomics
- **Total Supply**: 1,000,000,000 $PRICKO tokens
- **Blockchain**: Solana (fast and low cost)
- **Utility**: Access to privacy tools, governance, staking

### Community Focus
- Multiple social media channels
- Professional contact information
- Newsletter signup
- FAQ section

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🦎 About PRICKO

PRICKO is more than just a meme coin—it's a movement for digital privacy. Born from the chaos of memes and forged in the fires of data abuse, PRICKO combines the irreverent spirit of crypto culture with serious privacy tools.

**Mission**: To make privacy accessible, fun, and community-driven while building the strongest gecko army in crypto.

## 📞 Contact

- **Community**: community@pricko.com
- **Technical Support**: support@pricko.com
- **Business**: business@pricko.com
- **Press**: press@pricko.com

## 🔗 Links

- **Twitter**: [@PrivacyGecko](https://twitter.com/PrivacyGecko)
- **Telegram**: [GeckoArmy](https://t.me/+mDFnSI8_A54wZDE1)
- **Discord**: [Join Server](https://discord.gg/pricko)
- **GitHub**: [PRICKO Project](https://github.com/pricko-project)

---

**Privacy Gecko Approved** 🦎 | Built with ❤️ by the PRICKO community