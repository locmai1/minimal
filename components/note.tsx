import React from "react";
import data from "@/data/footer.json";

export default function Note() {
  return (
    <>
      <div className="bg-primary/10 p-4 rounded text-center">
        <span className="text-sm text-primary">{data.note}</span>
      </div>
    </>
  );
}
