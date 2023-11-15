import React from "react";
import data from "@/data/projects.json";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl">Projects</h2>
        <ul className="list-inside">
          {data.map((project, index) => (
            <li key={index}>
              <a
                href={project.link}
                target="_blank"
                className="text-primary underline italic"
              >
                <span>{project.name}</span>
              </a>{" "}
              | <span>{project.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
