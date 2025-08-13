# Deployment Guide

## Environment Detection Priority

The application uses a smart URL detection system with the following priority:

1. **`NEXT_PUBLIC_SITE_URL`** (highest priority - manual override)
2. **`VERCEL_URL`** (auto-provided by Vercel)
3. **Production fallback** (when `NODE_ENV=production`)
4. **Development default** (`http://localhost:3000`)

## Development Environment

### Local Development

```bash
# No environment variables needed
# Automatically uses: http://localhost:3000

# Optional: Create .env.local (copy from env-example.txt)
NODE_ENV=development
```

### Running Development Server

```bash
npm run dev
# Result: APP_CONFIG.url = "http://localhost:3000"
```

## Production Environments

### 1. Vercel Deployment

**Automatic Environment Variables (provided by Vercel):**

```bash
NODE_ENV=production
VERCEL_URL=your-app-name.vercel.app
VERCEL_ENV=production
```

**Optional Custom Variables (in Vercel dashboard):**

```bash
NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com
```

**Result:**

- With custom domain: `APP_CONFIG.url = "https://your-custom-domain.com"`
- Without custom domain: `APP_CONFIG.url = "https://your-app-name.vercel.app"`

### 2. Netlify Deployment

**Required Environment Variables:**

```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-netlify-domain.netlify.app
```

**Result:**

```bash
APP_CONFIG.url = "https://your-netlify-domain.netlify.app"
```

### 3. Custom Domain Production

**Required Environment Variables:**

```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**Result:**

```bash
APP_CONFIG.url = "https://your-domain.com"
```

### 4. Other Platforms (Railway, DigitalOcean, etc.)

**Option A: Set custom URL**

```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-deployed-url.com
```

**Option B: Update fallback in code**
Update `lib/constants.ts` line 17:

```typescript
return 'https://your-actual-domain.com'; // Replace this
```

## Environment Files

### `.env.local` (Development)

```bash
# Optional for development
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### `.env.production` (Production)

```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### `.env.example` (Template - rename from env-example.txt)

```bash
# Copy to .env.local and customize
NODE_ENV=development
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Real-World Examples

### Example 1: Vercel with Custom Domain

```bash
# Automatically provided by Vercel
NODE_ENV=production
VERCEL_URL=random-name-abc123.vercel.app

# You add in Vercel dashboard
NEXT_PUBLIC_SITE_URL=https://locmai.com

# Result: Uses https://locmai.com
```

### Example 2: Netlify

```bash
# You set in Netlify dashboard
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://wonderful-curie-abc123.netlify.app

# Result: Uses https://wonderful-curie-abc123.netlify.app
```

### Example 3: Development

```bash
# No env vars needed
# Result: Uses http://localhost:3000
```

## Debugging Environment

Add this to any component to see the current configuration:

```typescript
import { APP_CONFIG } from '@/lib/constants';

console.log('Environment:', {
  url: APP_CONFIG.url,
  environment: APP_CONFIG.environment,
  isProduction: APP_CONFIG.isProduction,
  VERCEL_URL: process.env.VERCEL_URL,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NODE_ENV: process.env.NODE_ENV,
});
```

## Common Issues & Solutions

### Issue: Wrong URL in production

**Solution:** Set `NEXT_PUBLIC_SITE_URL` environment variable

### Issue: Social sharing images not working

**Solution:** Ensure the URL is absolute and accessible

### Issue: Different URLs in preview vs production

**Solution:** Use `NEXT_PUBLIC_SITE_URL` to override auto-detection

### Issue: localhost showing in production

**Solution:** Check that `NODE_ENV=production` is set correctly

## Best Practices

1. **Always set `NEXT_PUBLIC_SITE_URL`** for production deployments
2. **Use your actual domain** for better SEO and social sharing
3. **Test metadata** with tools like Facebook Debugger or Twitter Card Validator
4. **Keep environment variables secure** - use platform dashboards, not code
