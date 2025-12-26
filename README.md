# justingohn.com

Personal website for Justin Gohn — commercial real estate appraiser and AI consultant.

## Structure

```
/
├── index.html          (Home)
├── appraising.html     (Appraisal services)
├── ai-consulting.html  (AI consulting & speaking)
├── writing.html        (Link to Substack)
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    └── headshot.jpg    (Add your headshot here)
```

## Features

- Minimal, typography-focused design
- Dark mode toggle (respects system preference)
- Staggered fade-up animations on page load
- Fully responsive (mobile + desktop)
- Static HTML/CSS — no build step required

## Development

Open `index.html` in a browser to preview. No server required.

For local development with live reload:
```bash
npx serve .
```

## Deployment

Configured for GitHub Pages. Push to `main` branch to deploy.

### Custom Domain Setup

1. In GitHub repo settings, enable GitHub Pages
2. Set custom domain to `justingohn.com`
3. Update DNS records:
   - A record: `185.199.108.153`
   - A record: `185.199.109.153`
   - A record: `185.199.110.153`
   - A record: `185.199.111.153`
   - CNAME: `www` → `justingohn.github.io`

## To Do

- [ ] Add headshot image to `images/headshot.jpg`
- [ ] Create GitHub repository
- [ ] Configure GitHub Pages
- [ ] Update DNS from Bluehost
- [ ] Cancel Bluehost hosting
- [ ] Cancel Elementor subscription
