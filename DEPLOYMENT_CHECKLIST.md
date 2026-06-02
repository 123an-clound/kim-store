# Deployment Checklist & Troubleshooting

## ✅ Pre-Deployment Checklist

### Local Setup
- [ ] Node.js 18+ installed
- [ ] Dependencies installed: `npm install`
- [ ] `.env.local` file created with Supabase credentials
- [ ] Build passes locally: `npm run build`
- [ ] Dev server runs: `npm run dev` (check [http://localhost:3000](http://localhost:3000))

### Code Quality
- [ ] No TypeScript errors: `npm run lint` (if available)
- [ ] All images load correctly in dev mode
- [ ] Product data displays correctly
- [ ] Mobile view works (test on different screen sizes)
- [ ] Dark/light mode toggle works
- [ ] Contact buttons (Phone, Zalo) work

### Supabase Configuration
- [ ] Supabase project created and has `kho_hang_iphone` table
- [ ] Table has all required columns (see DEPLOYMENT.md)
- [ ] At least one product in the table
- [ ] Images uploaded to Supabase Storage (`anh-iphone/` bucket)
- [ ] Storage bucket has public access enabled (RLS rules allow public read)
- [ ] Anon Key copied correctly (no extra spaces)

### Git & GitHub
- [ ] Code committed: `git add . && git commit -m "Ready for deployment"`
- [ ] `.env.local` is in `.gitignore` (not committed)
- [ ] `.env.example` committed as reference
- [ ] Repository pushed to GitHub: `git push origin main`

---

## 🚀 Vercel Deployment Steps

### 1. Create Vercel Project
```bash
# Option A: CLI (recommended)
npm install -g vercel
vercel

# Option B: Web
# Go to https://vercel.com/new and connect GitHub repo
```

### 2. Configure Environment Variables
In Vercel Dashboard → Project Settings → Environment Variables:
```
NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = sb_public_xxxxx
```

### 3. Configure Build Settings
- **Build Command**: `npm run build` (or leave default)
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 4. Deploy
- Commit and push to GitHub
- Vercel automatically deploys on push
- Check deployment status in Vercel Dashboard

---

## 🔧 Common Issues & Fixes

### ❌ Issue: "Build fails with Turbopack error"
**Solution:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### ❌ Issue: "Products not loading (blank page or 'Không tìm thấy sản phẩm')"

**Check 1: Verify Supabase connection**
- Open browser DevTools (F12) → Console
- Look for error messages like "Supabase fetch error"
- Check if you see: "Successfully fetched X products"

**Check 2: Verify environment variables in Vercel**
- Go to Vercel Dashboard → Project → Settings → Environment Variables
- Ensure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
- Click "Redeploy" to rebuild with new env vars

**Check 3: Verify Supabase data**
- Log into Supabase → Database → kho_hang_iphone table
- Ensure table has data with required columns:
  - `stt` (number)
  - `Tên sản phẩm` (text)
  - `Giá` (text)
  - `Dung Lượng RAM/ROM` (text)
  - `Mô tả` (text)
  - `Hình ảnh sản phẩm 1-6` (text)

**Check 4: Verify column names**
- Column names are **case-sensitive** and use **Vietnamese characters**
- Example: `Hình ảnh sản phẩm 1` (not `anh1` or `image1`)

### ❌ Issue: "Images not loading or showing broken"

**Check 1: Verify Supabase Storage**
- Supabase Dashboard → Storage
- Bucket name must be `anh-iphone` (with hyphen)
- Images should be in this bucket root (no subdirectories)

**Check 2: Verify image file paths in database**
- In `kho_hang_iphone` table, image columns should contain:
  - Simple filenames: `iphone-16-pro.png`
  - Windows paths: `C:\Users\...\iphone-16-pro.png` (will be parsed)
  - DO NOT use full URLs

**Check 3: Enable public access**
- Go to Supabase Storage → Policies
- Ensure public read access is allowed (default)
- Test URL directly: `https://your-project.supabase.co/storage/v1/object/public/anh-iphone/filename.png`

### ❌ Issue: "Favicon showing old image"

**Solution:**
- Favicon is built into the app at deployment time
- Update `store/app/favicon.ico`
- Commit and push to trigger redeploy
- In browser, do hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### ❌ Issue: "Dark mode not working"

**Solution:**
- Dark mode state is stored in localStorage
- Clear localStorage: F12 → Application → Local Storage → Delete `theme` key
- Refresh page

### ❌ Issue: "Contact buttons (Phone, Zalo) not working"

**Solution:**
Edit `store/lib/constants.js`:
```javascript
export const HOTLINE = '0123456789'; // Update with real number
export const HOTLINE_DISPLAY = '0123 456 789';
export const TEL_URL = `tel:${HOTLINE}`;
export const ZALO_URL = `https://zalo.me/${HOTLINE}`;
```
- Commit, push, wait for redeploy

### ❌ Issue: "Deployment status says 'Error' but no details"

**Solution:**
- Go to Vercel Dashboard → Deployments
- Click the failed deployment
- Check **Logs** tab for detailed errors
- Common issues:
  - Missing environment variables
  - Node.js version mismatch
  - Dependency installation failed

### ❌ Issue: "500 error or 'Internal Server Error'"

**Check 1: Vercel Function logs**
- Vercel Dashboard → Logs (not Deployments)
- Look for server-side errors

**Check 2: Supabase connectivity**
- Verify Supabase project is active (not deleted)
- Check if you're over Supabase quota
- Try connecting locally: `npm run dev`

---

## 📊 Performance Optimization

### Before going live:
- [ ] Enable image optimization (default in Next.js 16)
- [ ] Test Core Web Vitals: [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Test on mobile: Use Chrome DevTools device emulation
- [ ] Test with slow 3G: DevTools → Network → Slow 3G

### Monitor after deployment:
- [ ] Check Vercel Analytics (if enabled)
- [ ] Monitor Supabase performance (Supabase Dashboard → Reports)
- [ ] Set up error alerting (optional)

---

## 🔐 Security Checklist

- [ ] Supabase Anon Key is exposed (intentional for public read)
- [ ] Use RLS (Row Level Security) to restrict write access
- [ ] `.env.local` is NOT committed
- [ ] No API keys or secrets in code
- [ ] Vercel environment variables are properly restricted

---

## 📞 Need Help?

**Error in Vercel logs?**
1. Copy the full error message
2. Go to [claude.ai](https://claude.ai) and paste it
3. Ask: "How do I fix this Next.js deployment error?"

**Data not showing?**
1. Check Supabase console for errors
2. Verify table structure matches `groupByModel()` expectations
3. Test Supabase connection locally first

**Product list still broken?**
1. Try rolling back to a known working commit
2. Check git history: `git log --oneline`
3. Reset: `git reset --hard <commit-hash>`

---

## 📅 Post-Deployment

### Keep updated:
- Regularly check Supabase for new products
- Monitor Vercel deployment status
- Check for Next.js security updates

### Backup:
- Export Supabase data regularly
- Keep git history (GitHub automatically)
