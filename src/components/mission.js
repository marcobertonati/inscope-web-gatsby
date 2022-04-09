import * as React from "react";

export default function Mission() {
  return (
    <article
      id="mission-id"
      className="container mx-auto block sm:flex sm:justify-center"
    >
      <ul className="contain block sm:flex sm:justify-center">
        <li className="flex flex-col justify-content bg-[#fecb00] rounded m-6 p-6 drop-shadow">
          <p className="text-[#212121] font-bold">MISSION 🏁</p>
          <p className="text-[#212121] font-light">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet.
          </p>
        </li>
        <li className="flex flex-col justify-content bg-[#fecb00] rounded m-6 p-6 drop-shadow">
          <p className="text-[#212121] font-bold">VISION 🔎</p>
          <p className="text-[#212121] font-light">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet.
          </p>
        </li>
        <li className="flex flex-col justify-content bg-[#fecb00] rounded m-6 p-6 drop-shadow">
          <p className="text-[#212121] font-bold">VALUE 💡</p>
          <p className="text-[#212121] font-light">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet.
          </p>
        </li>
      </ul>
    </article>
  );
}
