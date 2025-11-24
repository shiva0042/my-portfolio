# 🚀 Deployment Guide for GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

- Git installed on your computer
- GitHub account
- Node.js and npm installed

## Step-by-Step Deployment

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

This method automatically deploys your site whenever you push to the main branch.

#### 1. Update Repository Name in vite.config.js

Open `vite.config.js` and update the `base` field with your repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/my_portfolio/', // Change 'my_portfolio' to your actual repo name
})
```

#### 2. Push Your Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Modern portfolio redesign"

# Add your GitHub repository as remote
git remote add origin https://github.com/shiva0042/my_portfolio.git

# Push to GitHub
git push -u origin main
```

#### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically run and deploy your site

#### 4. Access Your Site

Your portfolio will be live at:
```
https://shiva0042.github.io/my_portfolio/
```

The deployment usually takes 2-5 minutes. You can check the progress in the **Actions** tab of your repository.

---

### Option 2: Manual Deployment with gh-pages

This method requires you to manually deploy each time you make changes.

#### 1. Update vite.config.js

Same as Option 1 - update the `base` field.

#### 2. Build and Deploy

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

#### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch and **/ (root)** folder
6. Click **Save**

#### 4. Access Your Site

Your portfolio will be live at:
```
https://shiva0042.github.io/my_portfolio/
```

---

## Updating Your Portfolio

### With GitHub Actions (Option 1)

Simply push your changes to GitHub:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

The site will automatically rebuild and redeploy.

### With Manual Deployment (Option 2)

After making changes:

```bash
npm run deploy
```

---

## Troubleshooting

### Issue: Site shows 404 error

**Solution**: Make sure the `base` in `vite.config.js` matches your repository name exactly.

```javascript
// If your repo is https://github.com/shiva0042/my_portfolio
base: '/my_portfolio/'

// If your repo is https://github.com/shiva0042/portfolio
base: '/portfolio/'
```

### Issue: Images not loading

**Solution**: 
1. Ensure all images are in the `public/assets/` folder
2. Use paths starting with `/assets/` in your code
3. Rebuild and redeploy

### Issue: GitHub Actions workflow fails

**Solution**:
1. Check the Actions tab for error details
2. Ensure `package.json` has all required dependencies
3. Make sure `npm run build` works locally
4. Check that Pages is enabled in repository settings

### Issue: CSS not loading properly

**Solution**:
1. Clear browser cache
2. Check that Tailwind CSS is properly configured
3. Verify `postcss.config.js` and `tailwind.config.js` exist
4. Rebuild the project

---

## Custom Domain (Optional)

If you want to use a custom domain:

1. Create a file named `CNAME` in the `public` folder
2. Add your domain name to the file (e.g., `www.yourname.com`)
3. Configure your domain's DNS settings to point to GitHub Pages
4. Redeploy your site

---

## Testing Locally Before Deployment

Always test your build locally before deploying:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Open the preview URL (usually `http://localhost:4173`) to see how your site will look in production.

---

## Important Notes

1. **Repository Visibility**: Your repository can be public or private. GitHub Pages works with both.

2. **Build Time**: The first deployment might take longer. Subsequent deployments are usually faster.

3. **Cache**: If you don't see your changes immediately, clear your browser cache or use incognito mode.

4. **Base Path**: Always remember to update the `base` in `vite.config.js` if you rename your repository.

5. **Assets**: All images, fonts, and other assets should be in the `public` folder.

---

## Need Help?

If you encounter any issues:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
3. Check the Actions tab for detailed error logs
4. Ensure all dependencies are installed: `npm install`

---

**Happy Deploying! 🎉**
