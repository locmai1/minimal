import React from "react";
import data from "@/data/skills.json";

export default function Skills() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl">Skills</h2>
        <div className="flex flex-col gap-2">
          {data.map((type, index) => (
            <div className="flex flex-wrap gap-2" key={index}>
              {type.skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-2 py-1 text-sm rounded-md text-primary bg-primary/10"
                  aria-label="Skill"
                >
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
