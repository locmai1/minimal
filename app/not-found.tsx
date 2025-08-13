'use client';

import { ThemeProvider } from 'next-themes';
import Link from 'next/link';
import ErrorDisplay from '@/src/components/ui/error-display';
import { LAYOUT_CONFIG } from '@/src/lib/config/constants';

export default function NotFound() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main
        className={`${LAYOUT_CONFIG.maxWidth} mx-auto selection:bg-primary selection:text-white animate-fade-in`}
      >
        <div
          className={`flex flex-col ${LAYOUT_CONFIG.spacing.section} ${LAYOUT_CONFIG.padding.mobile} ${LAYOUT_CONFIG.padding.container} ${LAYOUT_CONFIG.padding.desktop}`}
        >
          <ErrorDisplay
            title="404 - Page Not Found"
            message="The page you're looking for doesn't exist. You'll be automatically redirected to the homepage, or you can click the button below."
            actionText="Return Home"
            autoRedirect={true}
            redirectDelay={5}
            redirectPath="/"
          />

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Or explore these sections:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                href="/#education"
                className="text-primary hover:text-primary-600 text-sm underline transition-colors"
              >
                Education
              </Link>
              <Link
                href="/#experiences"
                className="text-primary hover:text-primary-600 text-sm underline transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/#projects"
                className="text-primary hover:text-primary-600 text-sm underline transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/#skills"
                className="text-primary hover:text-primary-600 text-sm underline transition-colors"
              >
                Skills
              </Link>
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
