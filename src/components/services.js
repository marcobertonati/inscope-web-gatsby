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
    <article id="services-id" className="container mx-auto">
      <div className="flex mx-6">
        <section id="services-list" className="flex flex-col">
          {data.map((item) => {
            return (
              <button
                className="bg-white rounded-lg p-2 mb-2 drop-shadow"
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

        <section id="services-description" className="drop-shadow w-full">
          {services.length === 1 ? (
            <p className="bg-[#fecb00] drop-shadow text-white font-bold text-xl ml-4 p-4 h-full">
                Click for a services 📌
            </p>
          ) : (
            <div className="bg-white drop-shadow ml-4 p-4 h-full">
              <div className="text-[#fecb00] font-bold text-4xl">
                {services?.subTitle}
              </div>
              <div className="mt-2">{services?.description}</div>
            </div>
          )}
        </section>
      </div>
    </article>
  );
}
