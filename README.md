# TEG Student Club Website

Welcome to the TEG Student Club website repository! This is the official website for our student club, built with modern web technologies to provide an engaging and accessible platform for our members and visitors.

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Routing**: React Router
- **Internationalization**: React Intl
- **Icons**: Lucide React

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/TheEntrepreneurialGroup/teg-website-main.git
   cd teg-website-main
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

The website will be available at `http://localhost:5173` by default.

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── locales/       # Internationalization files
├── pages/         # Page components
├── renderer/      # Custom renderers and utilities
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## 🤝 Contributing

We welcome contributions from all club members! Here's how you can help:

### Development Workflow

1. Create a new branch for your feature/fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:

   ```bash
   git commit -m "Description of your changes"
   ```

3. Push your branch and create a Pull Request

### Code Style Guidelines

- Follow the existing code style and formatting
- Use TypeScript for type safety
- Write meaningful commit messages
- Keep components small and focused
- Use proper naming conventions

### Before Submitting

- Run the linter: `npm run lint`
- Test your changes locally
- Ensure all tests pass (if applicable)
- Update documentation if needed

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Internationalization

The website supports multiple languages. To add or modify translations:

1. Navigate to the `src/locales` directory
2. Add or update translation files
3. Use the `react-intl` components for text content

## 📫 Contact

For questions or support, please contact the website taskforce on whatsapp or open an issue in the repository.

## 📄 License

This project is private and intended for TEG Student Club use only.

---

Happy coding! 🎉
