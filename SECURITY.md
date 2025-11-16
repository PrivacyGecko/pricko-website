# Security Policy

## Supported Versions

We actively support the following versions of the PRICKO website:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of the PRICKO website seriously. If you discover a security vulnerability, please follow responsible disclosure practices:

### How to Report

**DO NOT** create a public GitHub issue for security vulnerabilities.

Instead, please report security vulnerabilities by emailing:

**security@privacygecko.com**

### What to Include

When reporting a vulnerability, please include:

1. **Description**: Clear description of the vulnerability
2. **Impact**: Potential impact and affected components
3. **Steps to Reproduce**: Detailed steps to reproduce the issue
4. **Proof of Concept**: If applicable, include a PoC (without exploiting production systems)
5. **Suggested Fix**: If you have ideas on how to fix it
6. **Your Contact**: How we can reach you for follow-up

### Response Timeline

- **Initial Response**: Within 48 hours of report
- **Status Update**: Within 7 days
- **Fix Target**: Critical vulnerabilities within 30 days

### What to Expect

1. We will acknowledge receipt of your vulnerability report
2. We will investigate and validate the vulnerability
3. We will work on a fix and coordinate disclosure
4. We will publicly acknowledge your contribution (unless you prefer to remain anonymous)

## Security Best Practices for Contributors

When contributing to this repository:

- ✅ Never commit sensitive information (API keys, secrets, passwords)
- ✅ Use environment variables for configuration
- ✅ Validate and sanitize all user inputs
- ✅ Follow OWASP security guidelines
- ✅ Keep dependencies up to date
- ✅ Run security audits (`npm audit`)
- ✅ Use HTTPS for all external requests
- ✅ Implement proper authentication and authorization
- ✅ Protect against XSS, CSRF, and injection attacks
- ✅ Use Content Security Policy (CSP) headers

## Vulnerability Disclosure Policy

### Scope

The following are in scope for vulnerability reports:

- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- Server-Side Request Forgery (SSRF)
- SQL Injection (if applicable)
- Authentication/Authorization bypasses
- Sensitive data exposure
- Security misconfiguration

### Out of Scope

The following are generally NOT considered vulnerabilities:

- Social engineering attacks
- Physical attacks
- Denial of Service (DoS) attacks
- Spam or social media account compromises
- Vulnerabilities in third-party services we don't control
- Issues requiring unlikely user interaction
- Theoretical vulnerabilities without PoC

## Security Updates

Security patches will be released as:

- **Critical**: Immediate patch release
- **High**: Patch within 7 days
- **Medium**: Patch within 30 days
- **Low**: Patch in next regular release

## Hall of Fame

We recognize security researchers who responsibly disclose vulnerabilities:

- (None yet - you could be first!)

## Contact

For security-related questions:

- **Email**: security@privacygecko.com
- **PGP Key**: (Available upon request)

---

**Thank you for helping keep PRICKO secure!** 🦎
