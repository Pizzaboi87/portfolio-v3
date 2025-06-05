#### 🧠 Peter Weiser – Portfolio v3

A modern, performant, and visually engaging personal portfolio built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/). Designed to showcase frontend and full-stack development projects, technical skills, and availability for remote opportunities across Europe.

---

##### ✨ Overview

This is the third iteration of my developer portfolio, created with a focus on interactivity, animation, and clarity. It reflects not just my technical stack but also my attention to detail and user experience.

---

##### 🔧 Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Dark Mode**: Enabled with Tailwind `class` strategy
- **Animation**: Framer Motion
- **Email Handling**: EmailJS (`@emailjs/browser`)
- **Icons**: Iconify
- **Fonts**: Google Fonts (Manrope & Geologica)

---

##### 🧩 Features

- ⚡ Fully responsive, mobile-first layout
- 🌗 Dark mode toggle
- ✂️ `ClipText` hover effect using `clip-path` and CSS variables
- 🖼️ Image handling with `next/image` + custom aspect ratio
- 📬 Contact form with real-time feedback and email obfuscation
- 🎯 Scroll animations & viewport-triggered effects
- 🗂️ Modular, scalable folder and component structure
- 📈 SEO + Open Graph metadata for link previews

---

##### 📁 Folder Structure

├── components/ # Reusable UI components
├── data/ # Project list (JSON-style TypeScript object)
├── hooks/ # Custom hooks (e.g. useClipPosition)
├── lib/ # Utilities (e.g. email logic)
├── sections/ # Layout sections: Hero, Projects, Contact, etc.
├── styles/ # Global styles & Tailwind layers
├── public/ # Static assets (images, og-image, etc.)
├── pages/ # Next.js routing (index.tsx, 404.tsx)
└── app/ # App directory (layout, metadata, globals)

---

##### 📬 EmailJS Setup

To enable contact form functionality, create a .env.local file in the root and add:

NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

The form uses @emailjs/browser and is handled entirely on the client side.

---

##### 📦 Install & Run

```
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Lint the codebase
npm run lint
```

Built with clean code, dark coffee, and dangerously sharp CSS edges. ☕
# portfolio-v3
