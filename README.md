# Tormi Studio

A modern web application for a contemporary ceramics studio, combining an editorial-style portfolio, curated product catalogue, and e-commerce experience into a single digital platform.

Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Framer Motion, the project explores modern frontend architecture, responsive design, and motion-driven user experiences. While inspired by the identity of a ceramics studio, the application also serves as a practical software engineering project focused on building scalable, production-ready web applications.

> **Status:** Active development

---

## Overview

Tormi Studio is designed as a premium digital experience that balances storytelling, visual presentation, and functionality. Rather than functioning as a traditional portfolio, the application combines editorial layouts, immersive media, and a future e-commerce platform to create a cohesive brand experience.

The project emphasizes clean architecture, reusable components, smooth interactions, and maintainable code while following modern React and Next.js development practices.

---

## Features

### Current

- Responsive landing page
- Cinematic video hero section
- Smooth momentum scrolling powered by Lenis
- Scroll-triggered reveal animations with Framer Motion
- Shared application layout with persistent navigation and footer
- Modular component architecture
- Route groups for separating portfolio and store experiences
- TypeScript-first development
- Utility-first styling with Tailwind CSS

### In Progress

- Studio pages
- Portfolio gallery
- Product catalogue
- Shopping cart
- Checkout flow
- Contact experience
- SEO improvements
- Accessibility enhancements
- Performance optimization

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework and App Router |
| React 19 | Component-based UI |
| TypeScript | Static type checking |
| Tailwind CSS 4 | Utility-first styling |
| Framer Motion | Motion and page animations |
| Lenis | Smooth scrolling |
| Lucide React | Icons |
| ESLint | Code quality and consistency |

---

## Architecture

```text
src/
├── app/
│   ├── (site)/              # Portfolio and studio pages
│   ├── (store)/             # E-commerce routes
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/              # Navigation, footer, hero
│   ├── motion/              # Animation utilities
│   ├── sections/            # Page sections
│   ├── shop/                # Store components
│   └── ui/                  # Reusable interface components
│
├── hooks/                   # Custom React hooks
├── lib/                     # Shared utilities
├── store/                   # Application state
└── types/                   # Shared TypeScript types
```

The project follows a modular architecture that separates routing, presentation, animations, shared utilities, and application logic into dedicated directories. This approach improves maintainability, scalability, and component reusability as the application continues to grow.

---

## Design Philosophy

The visual direction is inspired by contemporary editorial websites and premium design studios. Motion is intentionally subtle, using smooth scrolling and restrained animations to enhance the browsing experience without competing with the content.

The goal is to create an interface that feels calm, tactile, and intentional while maintaining accessibility and performance.

---

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/tormi-studio.git
```

Navigate to the project directory:

```bash
cd tormi-studio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```
http://localhost:3000
```

---

## Project Goals

This project serves as both a real-world application and a continuous learning project. Development focuses on applying current frontend engineering practices, including:

- Building scalable Next.js applications
- Creating reusable React components
- Writing maintainable TypeScript
- Designing responsive user interfaces
- Implementing motion with Framer Motion
- Organizing applications using modular architecture
- Following modern frontend development workflows

---

## Roadmap

- [ ] Complete Studio pages
- [ ] Complete portfolio gallery
- [ ] Build product catalogue
- [ ] Implement shopping cart
- [ ] Develop checkout experience
- [ ] Add contact functionality
- [ ] Integrate a content management system
- [ ] Optimize performance
- [ ] Improve accessibility
- [ ] Implement SEO best practices
- [ ] Add automated testing

---

## License

This project is intended for educational and portfolio purposes.