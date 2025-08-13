'use client';

import { ThemeProvider } from 'next-themes';
import ErrorDisplay from '@/src/components/ui/error-display';
import { LAYOUT_CONFIG } from '@/src/lib/config/constants';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <main
            className={`${LAYOUT_CONFIG.maxWidth} mx-auto selection:bg-primary selection:text-white animate-fade-in`}
          >
            <div
              className={`flex flex-col ${LAYOUT_CONFIG.spacing.section} ${LAYOUT_CONFIG.padding.mobile} ${LAYOUT_CONFIG.padding.container} ${LAYOUT_CONFIG.padding.desktop}`}
            >
              <ErrorDisplay
                title="Global Error"
                message="A critical error occurred. Please try refreshing the page or return to the homepage."
                actionText="Try Again"
                onAction={reset}
              />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
