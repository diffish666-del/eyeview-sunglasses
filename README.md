# EyeView Sunglasses Website

Premium OEM sunglasses manufacturer website built with Next.js and Tailwind CSS.

## 🚀 Quick Deploy to Vercel

### Step 1: Push to GitHub

```bash
cd /home/admin/.openclaw/workspace/eyeview-sunglasses-site
git init
git add .
git commit -m "Initial commit - EyeView Sunglasses website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/eyeview-sunglasses.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account (diffish666@gmail.com)
3. Click "Add New Project"
4. Import your `eyeview-sunglasses` repository
5. Keep default settings and click "Deploy"

### Step 3: Connect Domain

1. In Vercel dashboard, go to Project Settings → Domains
2. Add `eyeviewsunglasses.com`
3. Vercel will show DNS records to configure
4. Go to your GoDaddy domain settings
5. Update DNS records as shown by Vercel:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`

### Step 4: Wait for SSL

Vercel automatically provisions SSL. Wait 5-10 minutes for HTTPS to activate.

---

## 📁 Project Structure

```
eyeview-sunglasses-site/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── products/
│   │   └── page.tsx        # Products listing
│   ├── contact/
│   │   └── page.tsx        # Contact form
│   └── blog/
│       ├── page.tsx        # Blog listing
│       └── start-sunglasses-brand/
│           └── page.tsx    # Blog article
├── public/
│   └── images/             # Static images
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 Pages Created

| Page | URL | Status |
|------|-----|--------|
| Homepage | `/` | ✅ Complete |
| Products | `/products` | ✅ Complete |
| About | `/about` | ✅ Complete |
| Contact | `/contact` | ✅ Complete |
| Blog | `/blog` | ✅ Complete |
| Blog Article | `/blog/start-sunglasses-brand` | ✅ Complete |

---

## 🎨 Design Features

- **Responsive**: Mobile-first design, works on all devices
- **SEO Optimized**: Meta tags, semantic HTML, fast loading
- **Modern UI**: Tailwind CSS, gradient backgrounds, cards
- **Conversion Focused**: Clear CTAs, trust badges, contact forms

---

## 📈 SEO Strategy

### Target Keywords

**Primary:**
- sunglasses wholesale
- OEM sunglasses manufacturer
- custom sunglasses
- bulk sunglasses supplier

**Long-tail:**
- sunglasses manufacturer China
- private label sunglasses
- wholesale sunglasses low MOQ
- custom logo sunglasses

### Content Plan

| Week | Content |
|------|---------|
| 1-2 | Core pages (done) |
| 3-4 | 5 blog articles |
| 5-8 | Product category pages |
| 9-12 | 2 articles/week + backlinks |

---

## 🔧 Next Steps

### Immediate (Week 1)

- [ ] Deploy to Vercel
- [ ] Connect domain
- [ ] Set up Google Analytics
- [ ] Submit to Google Search Console
- [ ] Add contact form backend (email service)

### Short-term (Week 2-4)

- [ ] Add more product pages
- [ ] Write 5 blog articles
- [ ] Add product images
- [ ] Set up social media profiles
- [ ] Create backlink strategy

### Long-term (Month 2-6)

- [ ] Publish 2 blog posts/week
- [ ] Build quality backlinks
- [ ] Optimize for target keywords
- [ ] Monitor rankings weekly
- [ ] Adjust strategy based on data

---

## 📞 Contact Form Backend

The contact form currently doesn't have a backend. Options:

### Option 1: Formspree (Free, Easiest)

1. Go to [formspree.io](https://formspree.io)
2. Create free account
3. Create new form
4. Replace form action in `contact/page.tsx`:

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Vercel Serverless Function

Create `app/api/contact/route.ts` with email sending logic.

### Option 3: EmailJS

Client-side email sending without backend.

---

## 🎯 Success Metrics

Track these metrics:

| Metric | Target (6 months) |
|--------|------------------|
| Google ranking (main keywords) | Page 1 |
| Organic traffic | 5,000+ visits/month |
| Contact form submissions | 50+/month |
| Conversion rate | 2-5% |

---

## 📝 Notes

- All content is SEO-optimized with target keywords
- Site structure follows best practices
- Ready for immediate deployment
- Contact form needs backend integration
- Product images are placeholders (replace with actual photos)

---

**Built with ❤️ for EyeView Sunglasses**
