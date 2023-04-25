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
          target="_blank"
        >
          me@ronaldosuarez.dev
        </a>
      </div>
      <div className="flex flex-row justify-between mt-8">
        <div className="flex flex-row space-x-8 w-min">
          <a
            name="linkedin"
            href="https://www.linkedin.com/in/ronaldo-suarez/"
            className="hover:text-secondary"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            name="github"
            href="https://github.com/rodatboat"
            className="hover:text-secondary"
            target="_blank"
          >
            Github
          </a>
          <a
            name="spotify"
            href="https://open.spotify.com/user/ronaldo305"
            className="hover:text-secondary"
            target="_blank"
          >
            Spotify
          </a>
        </div>
        <div>
          <p className="font-thin text-sm">© 2023</p>
        </div>
      </div>
    </div>
  );
}
