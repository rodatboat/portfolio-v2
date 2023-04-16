import React from "react";

export default function Footer() {
  // https://www.buymeacoffee.com/rollypolly
  return (
    <div>
      <div className="flex flex-row justify-between mt-32">
        <p className="text-lg font-medium">Let's work together →</p>
        <a
          className="text-lg font-bold hover:text-secondary"
          href="mailto:me@ronaldosuarez.dev"
        >
          me@ronaldosuarez.dev
        </a>
      </div>
      <div className="flex flex-row space-x-8 mt-8 w-min mr-auto">
        <a href="https://www.linkedin.com/in/ronaldo-suarez/" className="hover:text-secondary">LinkedIn</a>
        <a href="https://github.com/rodatboat" className="hover:text-secondary">Github</a>
        <a href="https://open.spotify.com/user/ronaldo305" className="hover:text-secondary">Spotify</a>
      </div>
    </div>
  );
}
