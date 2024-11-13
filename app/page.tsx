'use client';

import Header from '@/components/header';
import Education from '@/components/education';
import Experiences from '@/components/experiences';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Socials from '@/components/socials';
import Footer from '@/components/footer';
import Note from '@/components/note';
import { ThemeProvider } from 'next-themes';

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="max-w-screen-sm mx-auto selection:bg-primary selection:text-white">
        <div className="flex flex-col gap-8 mx-4 my-16 md:mx-0">
          <Header />
          <Education />
          <Experiences />
          <Projects />
          <Skills />
          <Socials />
          <Footer />
          <Note />
        </div>
      </main>
    </ThemeProvider>
  );
}
