# SkillCard - Developer Profile Cards Generator

A modern web application that allows developers to create beautiful, shareable profile cards showcasing their skills, projects, and achievements. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- 🎨 Create beautiful developer profile cards
- 📱 Mobile-responsive design
- 🌓 Multiple themes (Light, Dark, Gradient)
- 🔄 Live preview
- 📤 Download as image
- 🎯 Easy to use form interface
- 🏷️ Skills management
- 📋 Project showcase

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **UI Components:** shadcn/ui
- **Image Generation:** html2canvas

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/Srinath66/skillcard.git]
   cd skillcard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 How to Use

1. **Create Your Profile Card**
   - Visit the landing page
   - Click "Create Your Card"
   - Fill out your information in the form

2. **Add Your Information**
   - Enter your name and role
   - Write a brief bio
   - Add your skills (one at a time)
   - Add your projects with titles and links

3. **Customize Your Card**
   - Choose from three themes:
     - Light (default)
     - Dark
     - Gradient
   - See live preview of your card

4. **Download Your Card**
   - Click "Download as Image"
   - Your card will be saved as a PNG file

## 📁 Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── create/       # Profile creation page
│   └── page.tsx      # Landing page
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   ├── ProfileForm.tsx
│   └── ProfileCard.tsx
├── lib/             # Utility functions
├── store/           # Zustand store
└── types/           # TypeScript types
```

## 🔧 Configuration

The project uses the following configuration files:
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [html2canvas](https://html2canvas.hertzen.com/)

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository. # skillcard
