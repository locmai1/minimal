'use client';

import { Header, Footer, StagingBanner } from '@/src/components/layout';
import {
  Education,
  Experiences,
  Projects,
  Skills,
  Socials,
  Note,
  ErrorBoundary,
} from '@/src/components/features';
import { ThemeProvider } from 'next-themes';
import { LAYOUT_CONFIG } from '@/src/lib/config/constants';

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ErrorBoundary>
        <StagingBanner />
        <main
          className={`${LAYOUT_CONFIG.maxWidth} mx-auto selection:bg-primary selection:text-white animate-fade-in`}
        >
          <div
            className={`flex flex-col ${LAYOUT_CONFIG.spacing.section} ${LAYOUT_CONFIG.padding.mobile} ${LAYOUT_CONFIG.padding.container} ${LAYOUT_CONFIG.padding.desktop}`}
          >
            <ErrorBoundary fallback={<div className="text-center p-4">Failed to load header</div>}>
              <div className="section-animate">
                <Header />
              </div>
            </ErrorBoundary>

            <ErrorBoundary
              fallback={<div className="text-center p-4">Failed to load education</div>}
            >
              <div className="section-animate">
                <Education />
              </div>
            </ErrorBoundary>

            <ErrorBoundary
              fallback={<div className="text-center p-4">Failed to load experiences</div>}
            >
              <div className="section-animate">
                <Experiences />
              </div>
            </ErrorBoundary>

            <ErrorBoundary
              fallback={<div className="text-center p-4">Failed to load projects</div>}
            >
              <div className="section-animate">
                <Projects />
              </div>
            </ErrorBoundary>

            <ErrorBoundary fallback={<div className="text-center p-4">Failed to load skills</div>}>
              <div className="section-animate">
                <Skills />
              </div>
            </ErrorBoundary>

            <ErrorBoundary
              fallback={<div className="text-center p-4">Failed to load social links</div>}
            >
              <div className="section-animate">
                <Socials />
              </div>
            </ErrorBoundary>

            <ErrorBoundary fallback={<div className="text-center p-4">Failed to load contact</div>}>
              <div className="section-animate">
                <Footer />
              </div>
            </ErrorBoundary>

            <ErrorBoundary fallback={<div className="text-center p-4">Failed to load note</div>}>
              <div className="section-animate">
                <Note />
              </div>
            </ErrorBoundary>
          </div>
        </main>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
