import * as React from "react";

export default function Header() {
  return (
    <article className="container mx-auto">
      <header id="header-id" className="">
        <h2 id="header-h2" className="text-white font-bold text-6xl	 drop-shadow">
          IN TRANSLATE WE TRUST
        </h2>
        <img
          id="header-img"
          src="/static/header.jpg"
          className="w-full max-h-fit "
        ></img>
      </header>
    </article>
  );
}
