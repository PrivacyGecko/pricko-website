# GitHub Repository Setup Checklist

Use this checklist when transferring the repository to github.com/PrivacyGecko

## Pre-Transfer

- [x] Remove all sensitive information
- [x] Add MIT License with Privacy Gecko copyright
- [x] Update package.json metadata
- [x] Add CONTRIBUTING.md
- [x] Add SECURITY.md
- [x] Update README.md with correct URLs
- [x] Remove Claude Code references from history
- [x] Add .githooks/ to .gitignore
- [x] Clean commit history
- [x] Push to current repository

## Organization Setup

- [ ] Create PrivacyGecko organization on GitHub (if not exists)
- [ ] Configure organization settings
- [ ] Add team members with appropriate roles
- [ ] Set up organization-level security policies

## Repository Transfer

- [ ] Transfer repository from personal account to PrivacyGecko organization
  - Go to Settings > General > Danger Zone > Transfer
  - Enter: `PrivacyGecko/Pricko-Website`
  - Confirm transfer

## Repository Configuration

### General Settings

- [ ] Add repository description:
  ```
  Official website for PRICKO ($PRICKO) - Privacy-focused memecoin with real utility. Built with React, TypeScript, and Tailwind CSS.
  ```

- [ ] Add repository topics/tags:
  - `pricko`
  - `privacy-gecko`
  - `cryptocurrency`
  - `memecoin`
  - `solana`
  - `privacy-tools`
  - `web3`
  - `defi`
  - `react`
  - `typescript`
  - `tailwindcss`

- [ ] Set homepage URL: `https://pricko.com`

- [ ] Features to enable:
  - [x] Issues
  - [x] Discussions
  - [ ] Wiki (optional)
  - [x] Projects (optional)

### Branch Protection

#### Main Branch

- [ ] Enable branch protection for `main`:
  - Require pull request reviews before merging
  - Require status checks to pass
  - Require conversation resolution before merging
  - Do not allow bypassing the above settings
  - Restrict who can push to matching branches

#### Stage Branch

- [ ] Enable branch protection for `stage`:
  - Require pull request reviews before merging (1 reviewer)
  - Require status checks to pass
  - Allow force pushes (for deployment fixes)

### Security Settings

- [ ] Enable Dependabot alerts
- [ ] Enable Dependabot security updates
- [ ] Enable Dependabot version updates
- [ ] Configure code scanning (optional)
- [ ] Set up secret scanning

### Collaboration

- [ ] Add collaborators/teams:
  - Core team: Admin access
  - Contributors: Write access
  - Community: Read access

- [ ] Configure default branch: `main`

- [ ] Enable "Allow squash merging"
- [ ] Enable "Allow merge commits"
- [ ] Disable "Allow rebase merging" (to preserve attribution)

### Issue & PR Templates

- [ ] Create `.github/ISSUE_TEMPLATE/bug_report.md`
- [ ] Create `.github/ISSUE_TEMPLATE/feature_request.md`
- [ ] Create `.github/PULL_REQUEST_TEMPLATE.md`

### GitHub Actions (Optional)

- [ ] Set up CI/CD workflow
  ```yaml
  # .github/workflows/ci.yml
  name: CI
  on: [push, pull_request]
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - uses: actions/setup-node@v3
          with:
            node-version: '18'
        - run: npm install
        - run: npm run build
        - run: npm run lint
  ```

- [ ] Set up automatic deployments (Vercel/Netlify)
- [ ] Set up dependency updates notifications

### Community Files

- [ ] Verify CODE_OF_CONDUCT.md displays in community tab
- [ ] Verify CONTRIBUTING.md displays in community tab
- [ ] Verify SECURITY.md displays in security tab
- [ ] Verify LICENSE displays correctly

## Post-Transfer

### Documentation

- [ ] Update README.md badge links (if applicable)
- [ ] Verify all URLs point to PrivacyGecko organization
- [ ] Update package.json if repository URL changed

### Announcements

- [ ] Announce on Twitter: @PrivacyGecko
- [ ] Announce on Telegram: GeckoArmy
- [ ] Announce on Discord
- [ ] Update Privacy Gecko website with GitHub link
- [ ] Create blog post about open-sourcing (optional)

### Monitoring

- [ ] Set up repository insights monitoring
- [ ] Monitor first week of issues/PRs
- [ ] Respond to community questions promptly
- [ ] Welcome first contributors

## GitHub Repository URLs

After transfer, verify these work:

- Repository: `https://github.com/PrivacyGecko/Pricko-Website`
- Issues: `https://github.com/PrivacyGecko/Pricko-Website/issues`
- Pull Requests: `https://github.com/PrivacyGecko/Pricko-Website/pulls`
- Discussions: `https://github.com/PrivacyGecko/Pricko-Website/discussions`
- Security: `https://github.com/PrivacyGecko/Pricko-Website/security`

## Final Checks

- [ ] Clone repository from new URL
- [ ] Verify build works: `npm install && npm run build`
- [ ] Verify all documentation displays correctly
- [ ] Test contribution workflow with a sample PR
- [ ] Verify security policy is discoverable
- [ ] Check repository insights and community profile

---

**Ready to Go Open Source!** 🦎

Last updated: November 15, 2025
