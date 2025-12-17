Test Plan: Joint Investment — https://www.jointinv.com/home

1. Overview
- Objective: Verify functionality, navigation, content integrity, accessibility, and critical business flows on the Joint Investment website (`https://www.jointinv.com/home`).
- Scope: Public site pages reachable from the home page, header/footer links, social links, contact actions, and content sections (Investment Opportunities, What We Do, Where We Invest, Contact, Complaint Policy).

2. In-scope pages/features
- Home: `/home`
- Root and primary pages linked from home: `/`, `/complaint-policy`, plus external links to Amazon, social profiles, Companies House links.
- Header: navigation menu (Courses/Training/Contact if present)
- Footer: contact info, social links, address, phone, email links
- Images/media loading and alt text presence
- CTA buttons (Contact, Call Us)

3. Out-of-scope
- Internal admin/dashboard (no access)
- Payment processing or protected user flows (not exposed on public homepage)

4. Test objectives
- Navigation and links work (internal + external)
- Content correctness and presence (headings, contact info)
- Images load and have alt text (basic accessibility)
- Contact actions: `mailto:` and `tel:` links function (open mail client / dialer)
- Responsiveness across common viewports (mobile/tablet/desktop)
- Accessibility basics (landmark roles, headings order, contrast spot-checks)
- External integrations (social links, Amazon book link) open correctly
- SEO meta tags presence (title, description)
- Basic performance and page load (smoke)

5. Test types and priority
- Smoke (critical): navigation, contact links, main CTAs — P0
- Functional: images, content sections, external links — P1
- Accessibility (automated checks) — P1
- Regression: after content updates — P2
- Exploratory: visual/UX checks — P2

6. Test scenarios / sample test cases
A. Home load
- Visit `https://www.jointinv.com/home` → page loads (status 200), hero visible, main headings exist.

B. Navigation
- Click header/footer link to Complaint Policy → verify URL and page content.
- Click social links (Instagram/TikTok/Facebook/LinkedIn/YouTube) → assert they open external pages (target/_blank) and return expected domain.

C. Contact actions
- Click phone number `08001973099` → assert `tel:` link present (cannot dial in CI, assert `href`).
- Click email link `invest@housingr-us.com` → assert `mailto:` link present.

D. Images
- Verify key images have `src` and non-empty `alt` attributes.

E. Content blocks
- Validate presence of sections: Investment Opportunities, WHAT WE DO, WHERE DO WE CURRENTLY INVEST?, WE INVEST UKWIDE.

F. Links to external resources
- Amazon book link opens amazon domain; Companies House links open expected domain.

G. Responsiveness
- Check layout at 375x812, 768x1024, 1440x900; verify hero and contact blocks remain accessible.

H. Accessibility (automated)
- Run axe or cypress-axe to detect high/critical issues (no duplicate IDs, headings order, ARIA roles).

I. SEO/Meta
- Verify `<title>` and `<meta name="description">` exist and are non-empty.

7. Test data
- None required for public pages. For mail/phone behavior, assert `href` attributes rather than sending messages.

8. Environment & browsers
- Run tests against live staging/production as provided.
- Browsers: Chromium (Cypress default), Firefox (optional), Mobile viewport emulation.

9. Automation candidates
- High: Home smoke tests (load, header links, contact links), external link checks, images/alt assertions, responsive smoke.
- Medium: Accessibility automated checks using `cypress-axe`.

10. Acceptance criteria
- All P0 smoke tests pass
- No critical accessibility violations
- No broken internal links

11. Deliverables
- `TEST_PLAN.md` (this file) in repository root
- Automated Cypress specs for high-priority flows (navigation, contact, images, responsiveness)

12. Risks & Notes
- Site is built on Wix; DOM selectors may change — prefer text-based selectors and stable attributes.
- External links rely on third-party sites — treat as smoke (existence/target), not content validation.

13. Next steps (automation roadmap)
- Implement Cypress specs for:
  - Home smoke (visit, hero, CTAs)
  - Header/footer link matrix
  - Contact link verification
  - Social/external link checks
  - Axe accessibility checks
- Add CI artifacts: JUnit report, Cypress videos/screenshots, and optionally Cypress Dashboard.


