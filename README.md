# Modern Portfolio - Shivaramakrishnan D

A stunning, modern, and fully responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern UI/UX**: Clean, elegant design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for stunning visual effects
- **Interactive Elements**: Hover effects, parallax, floating elements, and micro-interactions
- **3D Flip Cards**: Interactive certification cards with detailed information
- **Animated Timeline**: Beautiful education and project timelines
- **Glassmorphism**: Modern glass effects and gradient backgrounds
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for lightning-fast load times

## 🛠️ Technologies Used

- **React 18** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling navigation
- **React Simple Typewriter** - Typewriter effect
- **Vite** - Build tool and dev server

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shiva0042/my_portfolio.git
   cd my_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📤 Deploying to GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. **Create `.github/workflows/deploy.yml`** (already included in this project)

2. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

4. **Your site will be live at**: `https://shiva0042.github.io/my_portfolio/`

### Method 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install gh-pages**
   ```bash
   npm install -D gh-pages
   ```

3. **Add deploy script to package.json**
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.jpg
│   │   │   ├── profiletop.jpg
│   │   │   ├── profilebotm.jpg
│   │   │   ├── educat/
│   │   │   └── certifications/
│   │   └── ...
│   └── skills.json
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Update name, title, and social links
   - Change profile image path

2. **About Section** (`src/components/About.jsx`)
   - Update bio, email, location
   - Change resume link

3. **Skills** (`public/skills.json`)
   - Add/remove skills
   - Update skill icons

4. **Education** (`src/components/Education.jsx`)
   - Update education details
   - Change institution images

5. **Certifications** (`src/components/Certifications.jsx`)
   - Add/remove certificates
   - Update certificate images and descriptions

6. **Projects** (`src/components/Projects.jsx`)
   - Add/remove projects
   - Update GitHub links and descriptions

7. **Contact** (`src/components/Contact.jsx`)
   - Update contact information
   - Change social media links

### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: { /* your primary colors */ },
  accent: { /* your accent colors */ },
}
```

### Update Animations

Modify animation settings in `tailwind.config.js` and `src/index.css`.

## 🌟 Features Breakdown

### Hero Section
- Animated particles background
- Gradient orbs
- Typewriter effect
- Floating profile image with rotating rings
- Social media links

### About Section
- Profile image with glow effect
- Info cards with icons
- Resume download button
- Smooth animations

### Skills Section
- Dynamic skill cards loaded from JSON
- Rotating icons on hover
- Animated progress bars
- Glow effects

### Education Section
- Vertical timeline
- Alternating layout
- Animated timeline dots
- Image galleries

### Certifications Section
- 3D flip cards
- Front: Certificate image
- Back: Detailed description
- View certificate link

### Projects Section
- Timeline layout
- Project/Involvement badges
- Technology tags
- GitHub links
- Animated cards

### Contact/Footer Section
- Contact information
- Quick navigation links
- Social media icons
- Scroll to top button
- Animated heart icon

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1280px and up)

## ⚡ Performance

- Lazy loading images
- Optimized animations
- Code splitting
- Minified production build
- Fast initial load time

## 🔧 Troubleshooting

### Images not loading
- Check that all image paths are correct
- Ensure images are in the `public/assets/images/` folder

### Animations not working
- Verify Framer Motion is installed: `npm install framer-motion`
- Check browser compatibility

### Build errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shivaramakrishnan D**
- GitHub: [@shiva0042](https://github.com/shiva0042)
- LinkedIn: [shiva0042](https://www.linkedin.com/in/shiva0042)
- Email: shiva20048@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

**Keep Rising. Exploring. Learning. Building.** 🚀
