import * as React from "react";
import IconIg from "../images/social-media-ig.png";
import IconFb from "../images/social-media-fb.png";
import IconLn from "../images/social-media-ln.png";

export default function Footer() {
  return (
    <footer id="footer-id" className="container mx-auto">
      <div className="mx-6 mt-6">
        <div className="bg-[#fecb00] py-10 rounded-t-lg">
          <h6 className="w-full text-center text-white font-bold">inScope</h6>
          <div className="flex justify-center w-full">
            <a href="https://www.instagram.com">
              <img alt="Instagram account" className="max-h-8 m-2" src={IconIg} />
            </a>

            <a href="https://www.facebook.com">
              {" "}
              <img alt="Facebook account" className="max-h-8 m-2" src={IconFb} />
            </a>

            <a href="https://www.linkedin.com">
              <img alt="Linkedin account" className="max-h-8 m-2" src={IconLn} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
