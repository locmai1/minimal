import React from "react";
import data from "@/data/footer.json";
import { useTheme } from "next-themes";

export default function Note() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <div
        className={`${
          currentTheme === "light" ? "bg-primary/10" : "bg-primary/30"
        } p-4 rounded text-center`}
      >
        <span className="text-sm text-primary">{data.note}</span>
      </div>
    </>
  );
}
