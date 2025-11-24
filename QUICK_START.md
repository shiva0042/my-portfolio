# 🚀 Quick Start Guide

## 📋 Prerequisites Checklist

- [ ] Node.js installed (v18 or higher)
- [ ] npm installed
- [ ] Git installed
- [ ] GitHub account
- [ ] Code editor (VS Code recommended)

## ⚡ Quick Commands

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment
```bash
# Deploy to GitHub Pages (manual)
npm run deploy

# Or push to GitHub (automatic with Actions)
git add .
git commit -m "Your message"
git push origin main
```

## 🎯 Common Tasks

### 1. Update Your Name/Info
**File**: `src/components/Hero.jsx`
```jsx
// Line 50
<h1>I'm <span>Your Name Here</span></h1>
```

### 2. Change Email
**Files**: 
- `src/components/Hero.jsx` (line 12)
- `src/components/About.jsx` (line 99)
- `src/components/Contact.jsx` (line 24)

### 3. Update Resume Link
**File**: `src/components/About.jsx`
```jsx
// Line 105
<a href="YOUR_RESUME_LINK_HERE">
```

### 4. Add/Remove Skills
**File**: `public/skills.json`
```json
[
  {
    "name": "Skill Name",
    "icon": "https://img.icons8.com/..."
  }
]
```

### 5. Update Social Media Links
**Files**:
- `src/components/Hero.jsx` (lines 12-16)
- `src/components/Contact.jsx` (lines 40-45)

### 6. Change Colors
**File**: `tailwind.config.js`
```javascript
colors: {
  primary: {
    500: '#YOUR_COLOR',
  },
  accent: {
    500: '#YOUR_COLOR',
  },
}
```

### 7. Add New Project
**File**: `src/components/Projects.jsx`
```jsx
// Add to projectsData array
{
  type: 'project',
  title: 'Project Name',
  description: ['Point 1', 'Point 2'],
  tools: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
}
```

### 8. Add New Certificate
**File**: `src/components/Certifications.jsx`
```jsx
// Add to certificationsData array
{
  id: 7,
  title: 'Certificate Name',
  image: '/assets/images/certifications/cert.jpg',
  description: ['Point 1', 'Point 2'],
}
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear cache
npm cache clean --force

# Reinstall
npm install
```

### Images Not Loading
1. Check images are in `public/assets/images/`
2. Use paths starting with `/assets/`
3. Rebuild: `npm run build`

## 📱 Testing Checklist

- [ ] Desktop view (1920px)
- [ ] Laptop view (1366px)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] All links work
- [ ] All images load
- [ ] Smooth scrolling works
- [ ] Animations play correctly
- [ ] Forms submit (if added)
- [ ] No console errors

## 🚀 Deployment Checklist

- [ ] Update `vite.config.js` with correct repo name
- [ ] Test build locally (`npm run build`)
- [ ] Preview build (`npm run preview`)
- [ ] Commit all changes
- [ ] Push to GitHub
- [ ] Enable GitHub Pages
- [ ] Wait for deployment (2-5 mins)
- [ ] Test live site
- [ ] Check all pages/sections
- [ ] Verify images load
- [ ] Test on mobile device

## 📂 File Locations

| What | Where |
|------|-------|
| Hero content | `src/components/Hero.jsx` |
| About content | `src/components/About.jsx` |
| Skills data | `public/skills.json` |
| Education | `src/components/Education.jsx` |
| Certificates | `src/components/Certifications.jsx` |
| Projects | `src/components/Projects.jsx` |
| Contact info | `src/components/Contact.jsx` |
| Colors/theme | `tailwind.config.js` |
| Images | `public/assets/images/` |
| Global styles | `src/index.css` |

## 🎨 Customization Tips

### Change Background
```css
/* src/index.css */
body {
  @apply bg-gradient-to-br from-YOUR-COLOR via-YOUR-COLOR to-YOUR-COLOR;
}
```

### Adjust Animations
```javascript
// tailwind.config.js
animation: {
  'float': 'float 6s ease-in-out infinite', // Change duration
}
```

### Modify Spacing
```jsx
// In any component
<div className="py-20"> // Change padding
```

## 🔗 Useful Links

- **Local Dev**: http://localhost:5173/my_portfolio/
- **GitHub Repo**: https://github.com/shiva0042/my_portfolio
- **Live Site**: https://shiva0042.github.io/my_portfolio/
- **Vite Docs**: https://vitejs.dev/
- **Tailwind Docs**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/

## 💡 Pro Tips

1. **Save Often**: Vite has hot reload, changes appear instantly
2. **Use DevTools**: Inspect elements to debug
3. **Check Console**: Look for errors in browser console
4. **Mobile First**: Test mobile view frequently
5. **Git Commits**: Commit after each major change
6. **Backup**: Keep legacy folder as backup
7. **Comments**: Add comments for complex code
8. **Format**: Use Prettier for consistent formatting

## 📞 Getting Help

1. Check `README.md` for detailed docs
2. Check `DEPLOYMENT.md` for deployment help
3. Check `IMPROVEMENTS.md` for enhancement ideas
4. Check browser console for errors
5. Search GitHub Issues
6. Ask in developer communities

## ✅ Quick Checklist

Before going live:
- [ ] All personal info updated
- [ ] All links tested
- [ ] All images optimized
- [ ] Mobile responsive
- [ ] No console errors
- [ ] SEO meta tags updated
- [ ] Favicon set
- [ ] Resume link works
- [ ] Social links work
- [ ] Build succeeds
- [ ] Preview looks good

---

**You're all set! Start customizing and make it yours! 🎉**
