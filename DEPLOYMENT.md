# 🚀 Deployment Guide - EyeView Sunglasses

## Prerequisites

- ✅ GitHub account
- ✅ Vercel account (use diffish666@gmail.com)
- ✅ Domain at GoDaddy: eyeviewsunglasses.com

---

## Step-by-Step Deployment

### Step 1: Initialize Git Repository

Open terminal and run:

```bash
cd /home/admin/.openclaw/workspace/eyeview-sunglasses-site

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - EyeView Sunglasses website"

# Set main branch
git branch -M main
```

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "+" → "New repository"
3. Name: `eyeview-sunglasses`
4. Set to **Public**
5. Click "Create repository"

### Step 3: Push to GitHub

Copy the commands from GitHub and run them. They look like:

```bash
git remote add origin https://github.com/YOUR_USERNAME/eyeview-sunglasses.git
git push -u origin main
```

### Step 4: Deploy to Vercel

1. **Go to Vercel**: [vercel.com](https://vercel.com)

2. **Sign In**: Use your GitHub account (diffish666@gmail.com)

3. **Add New Project**: 
   - Click "Add New..." → "Project"
   - Under "Import Git Repository", find `eyeview-sunglasses`
   - Click "Import"

4. **Configure Project**:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   
5. **Click "Deploy"**

6. **Wait 2-3 minutes** for build to complete

7. **Your site is live!** You'll get a URL like:
   - `https://eyeview-sunglasses.vercel.app`

### Step 5: Connect Your Domain

1. In Vercel dashboard, click your project

2. Go to **Settings** → **Domains**

3. Click **"Add"** button

4. Enter: `eyeviewsunglasses.com`

5. Click **"Add"**

6. Vercel will show DNS configuration needed:

   ```
   Type    Name    Value
   A       @       76.76.21.21
   CNAME   www     cname.vercel-dns.com
   ```

### Step 6: Update DNS at GoDaddy

1. **Go to GoDaddy**: [godaddy.com](https://godaddy.com)

2. **Sign in** to your account

3. **Go to Domain Settings**:
   - Click your name → "My Products"
   - Find `eyeviewsunglasses.com`
   - Click "DNS" or "Manage DNS"

4. **Add/Update DNS Records**:

   **Delete existing A records** (if any) for `@`

   **Add new A record**:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`
   - TTL: `600` (or default)

   **Add CNAME record**:
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `600` (or default)

5. **Save** changes

### Step 7: Wait for DNS Propagation

- DNS changes take **5 minutes to 48 hours** to propagate
- Usually completes within **30 minutes**
- Vercel will show status in Domains settings
- When ready, status changes from "Configuring" to "Active"

### Step 8: Verify SSL

- Vercel automatically provisions SSL certificate
- Wait for HTTPS to activate (usually 5-10 minutes)
- Your site will be available at:
  - `https://eyeviewsunglasses.com`
  - `https://www.eyeviewsunglasses.com`

---

## Post-Deployment Checklist

### Immediate Tasks

- [ ] Test all pages load correctly
- [ ] Test contact form (needs backend setup)
- [ ] Check mobile responsiveness
- [ ] Verify domain redirects work (with/without www)

### Set Up Analytics

**Google Analytics:**

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account and property
3. Get Measurement ID (G-XXXXXXXXXX)
4. Add to `app/layout.tsx`:

```tsx
<head>
  <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  />
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `,
    }}
  />
</head>
```

**Google Search Console:**

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `eyeviewsunglasses.com`
3. Verify ownership (DNS record or HTML file)
4. Submit sitemap: `https://eyeviewsunglasses.com/sitemap.xml`

### Contact Form Setup (Choose One)

**Option A: Formspree (Easiest)**

1. Go to [formspree.io](https://formspree.io)
2. Sign up free account
3. Create new form
4. Get form endpoint URL
5. Update `app/contact/page.tsx`:

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: Vercel Email**

Use Vercel's serverless functions with SendGrid or Resend.

---

## Troubleshooting

### Domain Not Working

- Wait longer for DNS propagation (up to 48 hours)
- Clear browser cache
- Check DNS with: `nslookup eyeviewsunglasses.com`
- Verify DNS records in GoDaddy match exactly

### Build Fails

- Check Vercel deployment logs
- Common issues:
  - Missing dependencies (run `npm install`)
  - TypeScript errors
  - Node version mismatch

### Site Shows Default Vercel Page

- Make sure you pushed code to GitHub
- Check Vercel is connected to correct repository
- Trigger redeploy in Vercel dashboard

---

## Ongoing Updates

To update your site after changes:

```bash
# Make your changes, then:
git add .
git commit -m "Description of changes"
git push
```

Vercel automatically deploys on every push to main branch.

---

## Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **GoDaddy DNS Guide**: [godaddy.com/help](https://godaddy.com/help)

---

**Good luck with your sunglasses business! 🕶️**
