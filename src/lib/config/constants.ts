// Helper function to determine the base URL
function getBaseUrl(): string {
  // 1. Custom URL override (highest priority)
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // 2. Vercel auto-detected URL with environment awareness
  if (process.env.VERCEL_URL) {
    const url = `https://${process.env.VERCEL_URL}`;
    // Vercel automatically creates branch-specific URLs
    return url;
  }

  // // 3. Environment-specific fallbacks
  // if (process.env.NODE_ENV === 'production') {
  //   return '';
  // }

  // // Staging is detected via Vercel Git branch, not NODE_ENV
  // if (process.env.VERCEL_GIT_COMMIT_REF === 'staging') {
  //   return '';
  // }

  // 4. Development default
  return 'http://localhost:3000';
}

export const APP_CONFIG = {
  name: 'Minimal Portfolio',
  version: '2.0.0',
  author: 'Loc Mai',
  description: 'A minimal, maintainable portfolio built with Next.js',
  url: getBaseUrl(),
  environment: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  isStaging: process.env.VERCEL_GIT_COMMIT_REF === 'staging',
} as const;

export const THEME_CONFIG = {
  defaultTheme: 'system',
  themes: ['light', 'dark', 'system'],
} as const;

export const ANIMATION_CONFIG = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  },
} as const;

export const LAYOUT_CONFIG = {
  maxWidth: 'max-w-screen-sm',
  spacing: {
    section: 'gap-8',
    element: 'gap-4',
    small: 'gap-2',
  },
  padding: {
    mobile: 'mx-4',
    desktop: 'md:mx-0',
    container: 'my-16',
  },
} as const;

export const EXTERNAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  email: 'mailto:',
} as const;

// Feature flags for environment-specific features
export const FEATURE_FLAGS = {
  analytics: APP_CONFIG.isProduction,
  debugMode: APP_CONFIG.isDevelopment,
  stagingBanner: APP_CONFIG.isStaging,
} as const;

export const DATA_SCHEMAS = {
  experience: {
    required: ['company', 'team', 'role', 'date'],
    optional: [],
  },
  project: {
    required: ['name', 'link', 'description', 'status'],
    optional: [],
  },
  education: {
    required: ['degree', 'institution', 'date'],
    optional: [],
  },
  skill: {
    required: ['type', 'skills'],
    optional: [],
  },
  social: {
    required: ['name', 'link'],
    optional: [],
  },
  header: {
    required: ['firstName', 'lastName', 'about', 'interests'],
    optional: ['current'],
  },
} as const;
