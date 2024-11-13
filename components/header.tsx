import React from 'react';
import useCurrentTheme from '@/hooks/useCurrentTheme';
import data from '@/data/header.json';

export default function Header() {
  const { setTheme, isDarkMode } = useCurrentTheme();
  const { firstName, lastName, current, about, interests } = data;

  return (
    <div className="flex flex-col-reverse gap-8 md:flex-row">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="text-4xl font-medium">
            {firstName} <span className="text-primary">{lastName}</span>
          </h1>
          <div className="flex items-center">
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setTheme('light')}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setTheme('dark')}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </div>
        </div>
        <p>
          {current.role} |{' '}
          <span className="font-bold">
            {current.company} | {current.team}
          </span>{' '}
          <span
            className={`ml-1 px-2 leading-6 py-1 text-xs rounded-md text-primary ${isDarkMode ? 'bg-primary/30' : 'bg-primary/10'}`}
          >
            <span className="font-semibold">CURRENT</span>
          </span>
        </p>
        <p>Hello! 👋 </p>
        <p className="text-justify">{about}</p>
        <div className="flex gap-2 md:flex-row flex-col">
          <span className="font-medium leading-7">Interested in</span>
          <div className="flex gap-2">
            {interests.map((interest, index) => (
              <div
                key={index}
                className={`px-2 py-1 text-sm rounded-md text-primary ${isDarkMode ? 'bg-primary/30' : 'bg-primary/10'}`}
                aria-label="Interest"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
