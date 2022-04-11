import * as React from "react";

export default function Contact() {
  return (
    <article id="contact-id" className="container mx-auto">
      <div className="flex flex-col m-6">
        <h4 className="text-[#fecb00] font-bold text-4xl mb-2">CONTACT US</h4>
        <form
          id="form-contact"
          action="URL DE FORMSPREE"
          method="POST"
          className="flex flex-col"
        >
          <input
            id="input-email"
            name="email"
            type="email"
            className="p-2 text-bold"
            placeholder="Type your email 📧"
            required
          ></input>

          <textarea
            name="message"
            id="textarea-form-message"
            className="p-2 pb-12 text-black"
            placeholder="Leave your message! 💬"
            required
          />
          <button
            type="submit"
            className="font-bold text-[#fecb00] hover:text-white hover:bg-[#fecb00] rounded-b-sm"
          >
            SEND!
          </button>
        </form>
      </div>
    </article>
  );
}
