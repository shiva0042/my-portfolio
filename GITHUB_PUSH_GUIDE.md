# 🚀 Push to GitHub - Complete Guide

## 📋 Prerequisites

- [ ] Git installed on your computer
- [ ] GitHub account
- [ ] Repository created on GitHub (or will create new one)

## 🎯 Step-by-Step Guide

### **Option 1: Push to Existing Repository**

If you already have a repository at `https://github.com/shiva0042/my_portfolio`:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all files
git add .

# 3. Commit your changes
git commit -m "Modern portfolio redesign with React, Tailwind, and Framer Motion"

# 4. Add remote repository
git remote add origin https://github.com/shiva0042/my_portfolio.git

# 5. Push to GitHub
git push -u origin main
```

If you get an error about "main" branch, try:
```bash
git branch -M main
git push -u origin main
```

---

### **Option 2: Create New Repository**

If you need to create a new repository:

#### **Step 1: Create Repository on GitHub**
1. Go to https://github.com/new
2. Repository name: `my_portfolio` (or any name you want)
3. Description: "Modern Data Science Portfolio"
4. **Keep it Public** (required for GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

#### **Step 2: Push Your Code**
```bash
# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial commit: Modern portfolio redesign"

# 4. Rename branch to main
git branch -M main

# 5. Add remote (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/shiva0042/my_portfolio.git

# 6. Push to GitHub
git push -u origin main
```

---

## 🔐 Authentication

### **If You Get Authentication Error:**

You'll need a Personal Access Token (PAT):

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: "Portfolio Deployment"
4. Expiration: 90 days (or custom)
5. Select scopes:
   - ✅ `repo` (all)
   - ✅ `workflow`
6. Click "Generate token"
7. **COPY THE TOKEN** (you won't see it again!)

**When pushing, use:**
- Username: `shiva0042`
- Password: `paste_your_token_here`

---

## 📦 What Will Be Pushed

Your portfolio includes:
```
✅ All source code (src/)
✅ Public assets (images, skills.json)
✅ Configuration files (vite.config.js, tailwind.config.js, etc.)
✅ Package files (package.json, package-lock.json)
✅ Documentation (README.md, guides)
✅ GitHub Actions workflow (.github/workflows/deploy.yml)
✅ Legacy backup (legacy/ folder)
```

**NOT pushed (in .gitignore):**
- ❌ node_modules/
- ❌ dist/
- ❌ .env files

---

## 🌐 Deploy to GitHub Pages

### **Method 1: Automatic Deployment (Recommended)**

After pushing to GitHub:

1. **Go to your repository** on GitHub
2. Click **Settings** (top right)
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. **Done!** Your site will auto-deploy on every push

**Your site will be live at:**
```
https://shiva0042.github.io/my_portfolio/
```

Deployment takes 2-5 minutes. Check the **Actions** tab to see progress.

---

### **Method 2: Manual Deployment**

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npm run deploy
```

Then:
1. Go to repository **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** → **/ (root)**
4. Click **Save**

---

## 🔄 Update Your Portfolio Later

Whenever you make changes:

```bash
# 1. Add changes
git add .

# 2. Commit with message
git commit -m "Update: describe what you changed"

# 3. Push to GitHub
git push
```

**With GitHub Actions enabled**, your site will automatically rebuild and redeploy!

---

## 🐛 Common Issues & Solutions

### **Issue: "fatal: not a git repository"**
```bash
git init
```

### **Issue: "remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/shiva0042/my_portfolio.git
```

### **Issue: "failed to push some refs"**
```bash
# Pull first, then push
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### **Issue: "Authentication failed"**
- Use Personal Access Token instead of password
- See "Authentication" section above

### **Issue: "Repository not found"**
- Check repository name spelling
- Make sure repository exists on GitHub
- Check you're using correct username

---

## 📝 Important Notes

### **Before Pushing:**

1. **Update vite.config.js** if needed:
   ```javascript
   base: mode === 'production' ? '/my_portfolio/' : '/',
   //                              ^^^^^^^^^^^^^^
   // Change to match your repo name
   ```

2. **Check .gitignore** exists:
   ```
   node_modules
   dist
   .env
   .DS_Store
   ```

3. **Test locally** one more time:
   ```bash
   npm run build
   npm run preview
   ```

---

## ✅ Deployment Checklist

- [ ] All changes committed
- [ ] Vite config base path correct
- [ ] Build succeeds (`npm run build`)
- [ ] Preview works (`npm run preview`)
- [ ] Git repository initialized
- [ ] Remote added
- [ ] Pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site is live!

---

## 🎯 Quick Commands Reference

```bash
# Check git status
git status

# See what changed
git diff

# View commit history
git log --oneline

# Check remote URL
git remote -v

# See current branch
git branch

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout main
```

---

## 🌟 After Deployment

Your portfolio will be live at:
```
https://shiva0042.github.io/my_portfolio/
```

**Share it:**
- LinkedIn profile
- Resume
- Email signature
- GitHub profile README
- Twitter/X bio

---

## 📞 Need Help?

If you encounter any issues:
1. Check the error message carefully
2. Search the error on Google
3. Check GitHub's documentation
4. Ask me for help with the specific error!

---

**Ready to push? Let's do it! 🚀**
