# Deploy to Netlify - Quick Guide

## Option 1: GitHub Actions (Recommended - Automatic)

1. Get your Netlify credentials:
   - Go to [app.netlify.com](https://app.netlify.com) → Account Settings → Applications
   - Click "New personal access token" → Copy the token

2. Create a Netlify site:
   - Go to [app.netlify.com](https://app.netlify.com) → Add new site → Import existing project
   - Select GitHub → Choose `diffish666-del/eyeview-sunglasses`
   - Click "Save and deploy" (this creates the site)
   - Copy the **Site ID** from Site settings → Site details

3. Add secrets to GitHub:
   - Go to https://github.com/diffish666-del/eyeview-sunglasses/settings/secrets/actions/new
   - Add `NETLIFY_AUTH_TOKEN`: Your Netlify token from step 1
   - Add `NETLIFY_SITE_ID`: Your Site ID from step 2

4. Done! Future pushes to `main` will auto-deploy.

## Option 2: Manual CLI Deploy

```bash
# Install Netlify CLI globally (requires sudo)
sudo npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
cd /home/admin/.openclaw/workspace/eyeview-sunglasses-site
netlify init --siteId=YOUR_SITE_ID
netlify deploy --prod --dir=out
```

## Option 3: Netlify UI (No Code)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub and select `diffish666-del/eyeview-sunglasses`
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Click "Deploy site"

---

## Current Status

✅ Code pushed to GitHub: https://github.com/diffish666-del/eyeview-sunglasses
✅ GitHub Actions workflow configured
⏳ Waiting for Netlify credentials to complete deployment
