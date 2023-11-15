import React, { useState, useEffect } from "react";
import data from "@/data/header.json";
import { useTheme } from "next-themes";

export function Interests() {
  return (
    <>
      <div className="flex gap-2">
        {data.interests.map((interest, index) => (
          <div
            key={index}
            className="px-2 py-1 text-sm rounded-md text-primary bg-primary/10"
            aria-label="Interest"
          >
            {interest}
          </div>
        ))}
      </div>
    </>
  );
}

export function LightIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 hover:cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
}

export function DarkIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 hover:cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );
}

export function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <div className="flex items-center">
        {currentTheme === "dark" ? (
          <DarkIcon onClick={() => setTheme("light")} />
        ) : (
          <LightIcon onClick={() => setTheme("dark")} />
        )}
      </div>
    </>
  );
}

export default function Header() {
  return (
    <>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h1 className="text-4xl font-medium">
              {data.firstName}{" "}
              <span className="text-primary">{data.lastName}</span>
            </h1>
            <ThemeButton />
          </div>
          <p>
            {data.current.role} |{" "}
            <span className="font-bold">
              {data.current.company} | {data.current.team}
            </span>{" "}
            <span className="ml-1 px-2 leading-6 py-1 text-xs rounded-md text-primary bg-primary/10">
              <span>CURRENT</span>
            </span>
          </p>
          <p>Hello! 👋 </p>
          <p className="text-justify">{data.about}</p>
          <Interests />
        </div>
      </div>
    </>
  );
}
