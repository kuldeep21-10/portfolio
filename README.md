# Kuldeep Soni | Portfolio

Personal portfolio website to showcase my skills and projects as a MERN stack developer.

**Live:** https://kuldeep21-dev.vercel.app/

## Features

- Responsive design for mobile and desktop
- Auto-sliding project screenshots (pauses on hover, dots to jump to a slide)
- Downloadable resume
- "Coming soon" toast for project links that are not live yet
- Smooth hover animations with Tailwind CSS

## Sections

- **Header and Hero:** intro, resume, LinkedIn and GitHub links
- **Skills:** technologies I work with
- **Projects:** featured projects with tech stack and links
- **Contact:** email to get in touch

## Projects featured

| Project | Description | Tech |
|---|---|---|
| Fintrack | AI-powered expense tracker with payment integration | Node.js, Express.js, MongoDB, Gemini AI, Razorpay |
| Complaint Management Portal | Users register complaints with image proof and track status, admins review and resolve | Node.js, Express.js, MongoDB, React.js, Cloudinary |

## Tech stack

- React 19
- Vite
- Tailwind CSS v4
- Deployed on Vercel

## Run locally

```bash
git clone https://github.com/kuldeep21-10/portfolio.git
cd portfolio
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

Production build:

```bash
npm run build
npm run preview
```

## Project structure

```
public/            resume PDF and project screenshots
src/
  components/      Header, Button (hero), Skills, Project, Slider, Footer
  App.jsx
  main.jsx
  index.css
```

## Contact

- Email: Kuldeep21025@gmail.com
- LinkedIn: https://www.linkedin.com/in/kuldeep-soni-b0b415428/
- GitHub: https://github.com/kuldeep21-10