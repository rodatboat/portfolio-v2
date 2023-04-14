import React from "react";
import { projects } from "../me_config.json";

export default function Projects() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
        <h2 className="text-2xl italic font-black mb-2">Projects</h2>
        {projects.map((p, i) => (
          <>
            <div>T</div>
          </>
        ))}
      </div>
    </>
  );
}
