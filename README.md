# The Hospitalist Network Landing Site

A multi-page dark-themed landing site for **Hospitalist Network**, a healthcare SaaS platform for hospital staffing and physician recruitment.

## Tech Stack

- **React 18** + TypeScript
- **Vite** (build tool)
- **Tailwind CSS v4**
- **React Router v7** (Data mode)
- **Motion** (Framer Motion v11+)
- **Radix UI** (Accordion)
- **Lucide React** (icons)

## Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Full landing page with 12 sections |
| `/about` | `About` | Company mission, values, team |
| `/pricing` | `Pricing` | 3-tier pricing + FAQ |
| `/contact` | `Contact` | Contact form + office info |
| `/blog` | `Blog` | Blog listing with category filter |
| `/blog/:slug` | `BlogPost` | Blog post template |
| `/privacy` | `Privacy` | Privacy Policy |
| `/cookie-policy` | `CookiePolicy` | Cookie Policy |
| `/terms` | `Terms` | Terms of Service |

## Design System

- **Primary**: Emerald `#10B981`
- **Accent Gold**: `#EAB308`
- **Blue (Network Ready)**: `#3B82F6`
- **Background**: Deep navy `#0A0F1C`
- **Glass morphism** cards with `backdrop-filter: blur(24px)`

## Getting Started

```bash
npm install
npm run build
```

## Compliance

- Cookie consent banner with localStorage persistence
- Full Privacy Policy, Cookie Policy, and Terms of Service pages
