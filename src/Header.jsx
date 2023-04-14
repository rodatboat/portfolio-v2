import React from "react";

export default function Header() {
  return (
    <>
      <div className="flex-col max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-2">
        <p className="text-green text-2xl">
          Software Engineer @{" "}
          <span className="hover:text-orange underline decoration-orange">
            JPMorgan Chase & Co.
          </span>
        </p>
        <h1 className="text-green text-4xl">
          Hey, I'm <span className="font-semibold">Ro</span>, a software
          engineer. I craft engaging user experiences designed to help people
          meaningfully engage with data.
        </h1>
      </div>
    </>
  );
}
