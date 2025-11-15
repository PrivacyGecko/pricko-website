# Contributing to PRICKO Website

Thank you for your interest in contributing to the PRICKO website! 🦎

We welcome contributions from the community to help make this project better. Whether you're fixing bugs, improving documentation, or proposing new features, your help is appreciated.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors. We expect:

- Respectful communication
- Constructive feedback
- Collaboration over conflict
- Recognition that everyone is learning

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git
- A code editor (VS Code recommended)

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Pricko-Website.git
   cd Pricko-Website
   ```

3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/PrivacyGecko/Pricko-Website.git
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Branch naming conventions:
- `feature/` - New features or enhancements
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions or modifications

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add comments where necessary
- Update documentation if needed
- Test your changes thoroughly

### 3. Test Your Changes

Before submitting, ensure:

```bash
# Run the dev server and test manually
npm run dev

# Build for production (ensure no errors)
npm run build

# Run linter
npm run lint

# Run tests (if applicable)
npm test
```

### 4. Commit Your Changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add dark mode toggle to header

- Added dark mode state management
- Updated navigation component
- Added localStorage persistence"
```

Commit message format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Build process or auxiliary tool changes

### 5. Keep Your Fork Updated

```bash
git fetch upstream
git rebase upstream/main
```

## Pull Request Process

### Before Submitting

- ✅ Ensure your code builds without errors (`npm run build`)
- ✅ Run the linter (`npm run lint`) and fix any issues
- ✅ Test your changes in multiple browsers
- ✅ Update documentation if needed
- ✅ Rebase your branch on the latest `main`

### Submitting a Pull Request

1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Go to the [original repository](https://github.com/PrivacyGecko/Pricko-Website)

3. Click "New Pull Request"

4. Select your fork and branch

5. Fill out the PR template with:
   - **Description**: What does this PR do?
   - **Motivation**: Why is this change needed?
   - **Testing**: How did you test this?
   - **Screenshots**: If UI changes, include before/after screenshots
   - **Related Issues**: Link any related issues

### PR Review Process

- A maintainer will review your PR within 3-5 business days
- Address any requested changes
- Once approved, a maintainer will merge your PR
- Your contribution will be recognized in the release notes!

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` types when possible
- Use type inference where appropriate

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Follow the existing component structure

### Styling

- Use Tailwind CSS utility classes
- Follow the existing design system
- Maintain responsive design (mobile-first)
- Use custom classes from `src/index.css` when appropriate

### File Organization

```
src/
├── components/
│   ├── common/     # Layout components (Header, Footer, etc.)
│   └── ui/         # Reusable UI components
├── pages/          # Page components
├── constants/      # Constants and configuration
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add semicolons at the end of statements
- Use meaningful variable and function names
- Keep functions small and focused

### Comments

- Add JSDoc comments for exported functions and components
- Explain complex logic with inline comments
- Update comments when code changes

## Reporting Bugs

### Before Reporting

- Check if the bug has already been reported in [Issues](https://github.com/PrivacyGecko/Pricko-Website/issues)
- Ensure you're using the latest version
- Try to reproduce the bug in a clean environment

### Bug Report Template

When reporting a bug, include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**:
   ```
   1. Go to '...'
   2. Click on '...'
   3. Scroll down to '...'
   4. See error
   ```
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Screenshots**: If applicable
6. **Environment**:
   - Browser: [e.g. Chrome 120]
   - OS: [e.g. Windows 11]
   - Device: [e.g. Desktop, Mobile]
7. **Additional Context**: Any other relevant information

## Suggesting Features

We welcome feature suggestions! Before suggesting:

- Check if the feature has already been requested
- Consider if it aligns with the project's goals
- Think about how it would benefit users

### Feature Request Template

1. **Feature Summary**: Brief description of the feature
2. **Problem**: What problem does this solve?
3. **Proposed Solution**: How should it work?
4. **Alternatives Considered**: Other approaches you've thought about
5. **Additional Context**: Mockups, examples, or references

## Questions?

If you have questions about contributing:

- Open a [GitHub Discussion](https://github.com/PrivacyGecko/Pricko-Website/discussions)
- Join our [Telegram community](https://t.me/+mDFnSI8_A54wZDE1)
- Email us at [community@privacygecko.com](mailto:community@privacygecko.com)

## Recognition

Contributors will be:
- Listed in release notes
- Mentioned in the project README (for significant contributions)
- Given public recognition in our community channels

Thank you for contributing to PRICKO! 🦎

---

**Privacy Gecko Approved** | Built with ❤️ by the community
