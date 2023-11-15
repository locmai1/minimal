import React from "react";
import data from "@/data/experiences.json";

export default function Experiences() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl">Experiences</h2>
        <ul className="list-inside">
          {data.map((experience, index) => (
            <li key={index}>
              <span className="font-medium">{experience.role}</span> |{" "}
              <span className="italic">{experience.company}</span> |{" "}
              <span className="text-primary">{experience.team}</span> |{" "}
              <span>{experience.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
