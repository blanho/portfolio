# 🌟 Personal Portfolio

A modern, responsive personal portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to showcase skills, experience, and projects with beautiful animations and a professional HR-friendly layout.

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with gradient effects and smooth animations
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🌙 Dark/Light Mode**: Theme switching with beautiful transitions
- **🚀 Performance Optimized**: Fast loading with Next.js 15 and optimized assets
- **📄 Resume Integration**: Built-in PDF viewer with download functionality
- **💼 Services Showcase**: Professional capability presentation for HR and clients
- **📬 Contact Form**: Functional contact form with multiple communication methods
- **🎭 Smooth Animations**: Framer Motion powered transitions and interactions
- **♿ Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### UI Components

- **Radix UI** - Accessible component primitives
- **Custom Components** - Reusable UI components with Tailwind

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Geist Font** - Modern typography

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/blanho/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── contact/           # Contact page
│   ├── resume/            # Resume page with PDF viewer
│   ├── services/          # Services/Expertise page
│   ├── work/              # Work/Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── home/              # Home page specific components
│   ├── navbar/            # Navigation components
│   ├── transition/        # Page transition components
│   └── ui/                # UI component library
├── constants/             # Application constants
│   └── skills.ts          # Skills and social links data
├── lib/                   # Utility functions
├── public/                # Static assets
└── ...config files
```

## 🎯 Key Pages

### 🏠 Home

- Hero section with call-to-action buttons
- Technical skills showcase organized by category
- Social media links with tooltips
- Languages, certifications, and interests

### 📄 Resume

- Interactive PDF viewer
- Download functionality
- Contact information and highlights
- Fallback options for PDF display

### 💼 My Expertise

- Professional capabilities showcase
- Service offerings (non-commercial focus)
- Technology expertise breakdown
- HR-friendly presentation

### 📞 Contact

- Contact form with mailto integration
- Multiple communication methods
- Social media links
- Professional availability status

## 🎨 Customization

### Skills and Social Links

Edit `constants/skills.ts` to update:

- Technical skills by category
- Social media links
- Personal skills and certifications

### Styling

- **Theme**: Modify `app/globals.css` for color schemes
- **Components**: Update component styles in respective files
- **Animations**: Customize animations in `app/animations.css`

### Content

- **Resume**: Replace `public/resume.pdf` with your resume
- **Contact**: Update contact information in relevant components
- **Bio**: Modify hero section content in `app/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Other Platforms

- **Netlify**: Drag and drop `npm run build` output
- **GitHub Pages**: Use GitHub Actions for deployment
- **Azure Static Web Apps**: Connect your repository

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Bao Lan Ho**

- 📧 Email: blanho1211@gmail.com
- 💼 LinkedIn: [linkedin.com/in/blanho](https://linkedin.com/in/blanho)
- 🐙 GitHub: [github.com/blanho](https://github.com/blanho)
- 💬 Teams: [Teams Chat](https://teams.microsoft.com/l/chat/0/0?users=h.baolan20025@gmail.com)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev) - Beautiful & consistent icons
- [Radix UI](https://www.radix-ui.com) - Low-level UI primitives

---

⭐ **Star this repository if you found it helpful!**
