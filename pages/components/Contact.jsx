import React from "react";

export default function Contact() {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center items-start md:items-center justify-between py-10 rounded-xl"
        id="contact"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Let's work together
          <span className="hidden md:inline-block">→</span>
        </h2>
        <a href="mailto:me@ronaldosuarez.dev">
          <h2 className="text-3xl text-white hover:text-primary hover:-translate-x-1 transition-all duration-300 pr-2">
            me@ronaldosuarez.dev
          </h2>
        </a>
      </div>
    </>
  );
}
