import * as React from "react";
import { useState } from "react";
import dbServices from "../data/services/services";

export default function Services() {
  const data = dbServices;
  const [services, setServices] = useState([[]]);

  const handleServices = (event) => {
    /* How to add an event to a element: https://stackoverflow.com/questions/48575674/how-to-add-a-keyboard-listener-to-my-onclick-handler */
    const element = event.target;
    const servicesFinded = data.find((item) => item.id === element.id);
    console.log(servicesFinded);

    setServices(servicesFinded);
  };

  return (
    <article id="services-id" className="container mx-auto flex">
      <section id="services-list" className="flex flex-col mx-6">
        {data.map((item) => {
          return (
            <button
              className="bg-white rounded-lg p-2 my-2 drop-shadow"
              key={item.id}
              onClick={handleServices}
              id={item.id}
              // aria-hidden="true"
            >
              {item.title}
            </button>
          );
        })}
      </section>

      <section id="services-description" className="container drop-shadow">
        {services.length == 1 ? (
          <div className="bg-[#fecb00] drop-shadow mr-6 mt-2 p-4 h-full flex justify-center items-center	">
            <div className="text-white font-bold text-2xl">Click for a services 📌</div>
          </div>
        ) : (
          <div className="bg-white drop-shadow mr-6 mt-2 p-4 h-full	">
            <div className="text-[#fecb00] font-bold text-4xl">
              {services?.subTitle}
            </div>
            <div className="mt-2">{services?.description}</div>
          </div>
        )}
      </section>
    </article>
  );
}
