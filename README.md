# Bhoomika Monthy Rajashekar — Personal Portfolio

A sleek, modern, and fully responsive **personal portfolio website** built with **Next.js 15**, **TailwindCSS**, and **React**. It showcases my projects, skills, experience, education, and achievements with a custom cream/brown luxury design theme.

**Source Code:** [github.com/bhoomi02-ai/Personal-Portfolio-Website](https://github.com/bhoomi02-ai/Personal-Portfolio-Website)

---

## Sections

- **Hero** — Introduction with code block and call-to-action
- **About Me** — Background and description
- **Experience** — Work and internship history
- **Skills** — Tech stack with icons
- **Projects** — Featured projects with descriptions and links
- **Education** — Academic background
- **Achievements** — Awards, hackathons, research papers, leadership roles, workshops, and conferences
- **Contact** — Contact form and social links

---

## Tech Stack

| Category       | Technologies                                      |
| -------------- | ------------------------------------------------- |
| Framework      | Next.js 15 (App Router)                           |
| Styling        | TailwindCSS, SCSS                                 |
| Animations     | Lottie React, CSS transitions                     |
| Email          | Nodemailer, EmailJS                               |
| Icons          | React Icons                                       |
| Deployment     | Vercel                                            |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v18+)
- [Git](https://git-scm.com/downloads)

### Clone and Install

```bash
git clone https://github.com/bhoomi02-ai/Personal-Portfolio-Website.git
cd Personal-Portfolio-Website
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_GTM=
NEXT_PUBLIC_APP_URL=
GMAIL_PASSKEY=
EMAIL_ADDRESS=
```

---

## Customization

Update your personal details in `utils/data/personal-data.js`:

```js
export const personalData = {
  name: "Bhoomika Monthy Rajashekar",
  profile: '/profile-bhoomika.png',
  designation: "AI Engineer",
  description: "Master's student in AI at Boston University...",
  email: 'bhoomi02@bu.edu',
  address: 'Boston, MA',
  github: 'https://github.com/bhoomi02-ai',
  linkedIn: 'https://www.linkedin.com/in/bhoomika-rajshekar/',
  resume: "https://drive.google.com/...",
};
```

Other data files in `utils/data/`:
- `skills.js` — Tech skills list
- `experience.js` — Work experience
- `educations.js` — Education history
- `projects-data.js` — Projects
- `achievements.js` — Awards, hackathons, research papers, etc.

---

## Deployment (Vercel)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/) and import the repo
3. Add environment variables in the Vercel dashboard
4. Click **Deploy**

Every push to `main` triggers an automatic redeployment.

---

## Projects Featured

| Project | Description | Stack |
|---------|-------------|-------|
| **Admission Management System** | Full-stack college admissions automation platform hosted on the university's institutional server with Government of India copyright | HTML, CSS, PHP, SQL, REST API |
| **Result Analysis Dashboard** | Academic GPA calculator and ML-based subject difficulty predictor for the VTU board curriculum | React.js, Python, ML, SQL, Cloud |
| **Serene Settings** | AI-powered interior design app generating personalized room layouts, furniture suggestions, and color palettes — Top 10 at Cognizant Technoverse | React.js, Python, AI, CSS, REST API |

---

## Achievements Highlighted

- **Ideathon Winner** — 1st Place at GSSSIETW (2023)
- **Best Teacher of the Month** — U&I NGO (Feb 2024)
- **Emerging Leader Award** — U&I NGO (Feb 2025)
- **GDSC Lead** — Google Developer Student Club (2024–25)
- **Graduate Student Ambassador** — Boston University GRS (Sep 2025–Present)
- **Top 10 / 121 Teams** — Cognizant Technoverse Hackathon (2024)
- **Research Paper** — Automated Result Analysis (Springer, 2025)

---

## Packages Used

| Package               |
| :-------------------: |
| next                  |
| react                 |
| react-dom             |
| tailwindcss           |
| sass                  |
| lottie-react          |
| react-icons           |
| react-toastify        |
| react-fast-marquee    |
| nodemailer            |
| @emailjs/browser      |
| @next/third-parties   |
| axios                 |
| sharp                 |

---

## Author

**Bhoomika Monthy Rajashekar**
Master's in Artificial Intelligence — Boston University (Fall 2025)

- **Email:** bhoomi02@bu.edu
- **GitHub:** [github.com/bhoomi02-ai](https://github.com/bhoomi02-ai)
- **LinkedIn:** [linkedin.com/in/bhoomika-rajshekar](https://www.linkedin.com/in/bhoomika-rajshekar/)
- **Location:** Boston, MA
