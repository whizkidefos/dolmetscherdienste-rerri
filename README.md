# Dolmetscherdienste Rerri

Professional interpretation services website specializing in African, Asian, and Middle Eastern languages. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌍 About

Dolmetscherdienste Rerri provides comprehensive interpretation services including:
- **Simultaneous interpretation**
- **Consecutive interpretation** 
- **Whispered interpretation**
- **Relay interpretation**
- **Over-the-Phone Interpretation (OPI)**
- **Video Remote Interpretation (VRI)**

Specializing in rare and regional language varieties from Africa, Asia, and the Middle East including Amharic, Hausa, Igbo, Kurdish, Arabic, Persian, Swahili, Yoruba, and many more.

## 🚀 Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Internationalization:** next-intl (German/English)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Analytics:** Google Analytics 4
- **Email:** Nodemailer & Resend

## 🛠️ Getting Started

### Prerequisites
- Node.js 20.x LTS (recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/whizkidefos/dolmetscherdienste-rerri.git
cd dolmetscherdienste-rerri
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Google Analytics
NEXT_PUBLIC_GA_TRACKING_ID=G-R9QBTE1FJC

# Email Configuration (optional)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
RESEND_API_KEY=your-resend-key
```

**Note:** Google Analytics only loads in production builds.

## 📁 Project Structure

```
├── app/
│   ├── [locale]/          # Internationalized routes
│   ├── globals.css        # Global styles
├── components/
│   ├── layout/           # Header, Footer, Navigation
│   ├── GoogleAnalytics.tsx
├── context/              # Theme and other contexts
├── messages/             # Translation files (en.json, de.json)
├── public/              # Static assets
├── i18n.ts              # Internationalization config
├── middleware.ts        # Next.js middleware
└── tailwind.config.ts   # Tailwind configuration
```

## 🌍 Internationalization

The website supports:
- **German (de)** - Default locale
- **English (en)**

Translation files are located in the `messages/` directory.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
```bash
npm run build
npm run start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

**Dolmetscherdienste Rerri**
- Website: [dolmetscherdienste-rerri.de](https://dolmetscherdienste-rerri.de)
- Email: info@dolmetscherdienste-rerri.de
