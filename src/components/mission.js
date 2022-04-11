import * as React from "react";

export default function Mission() {
  return (
    <article
      id="mission-id"
      className="container mx-auto block sm:flex sm:flex-col sm:justify-center"
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

      <div className="text-center border-2 border-[#fecb00] bg-white rounded mx-6 mb-8 p-6 drop-shadow">
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </div>
    </article>
  );
}
