# justingohn.com Website

## Project Location

**Code**: `/Users/justingohn/justingohn-website/`
**Planning docs**: `My Drive/Personal/Career Online Ventures/justingohn.com Redesign/`

## Status: LIVE - Awaiting DNS Propagation

**Deployed**: Dec 26, 2025
**GitHub repo**: https://github.com/justincgohn/justingohn-website
**Live URL**: https://justincgohn.github.io/justingohn-website/ (temporary)
**Custom domain**: justingohn.com (pending DNS propagation)

## Quick Reference

| File | Purpose |
|------|---------|
| `index.html` | Home page |
| `appraising.html` | Appraisal services + Expert Witness section |
| `ai-consulting.html` | AI consulting + 22 speaking events |
| `writing.html` | Links to Substack |
| `css/styles.css` | All styles, CSS variables, dark mode |
| `js/main.js` | Dark mode toggle, active nav, staggered animations |
| `images/headshot.png` | Profile photo |

## Design Notes

- **Inspiration**: bykahlil.com
- **Animation**: Staggered fade-up (0.08s delay per element via JS)
- **Dark mode**: CSS variables + localStorage + prefers-color-scheme
- **Typography**: Inter (Google Fonts)
- **Colors**: Neutral (black/white/gray)
- **Layout**: Fixed left nav, content area with footer at bottom

## Social Links

- Email: justin@justingohn.com
- GitHub: justincgohn
- LinkedIn: toprealestateappraiser
- Substack: justingohn.substack.com
- X: @justincgohn

## Deployment Status

**Completed:**
- [x] Created GitHub repo and pushed code
- [x] Enabled GitHub Pages
- [x] Configured custom domain (justingohn.com)
- [x] Updated DNS at Namecheap (4 A records + CNAME for www)

**DNS Records (Namecheap):**
| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | justincgohn.github.io |

**Remaining:**
- [ ] Verify DNS propagation (`dig justingohn.com +short`)
- [ ] Enable "Enforce HTTPS" in GitHub repo settings (after SSL cert provisions)
- [ ] Cancel Bluehost hosting (domain no longer points there - can cancel anytime)
- [ ] Cancel Elementor Pro subscription
