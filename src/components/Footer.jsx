import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="md:flex-row justify-between flex-col">
          <div>
            <p className="font-semibold text-gray text-xs">
              More ways to shop:{" "}
              <span className="underline text-blue">Find an Apple Store </span>
              or <span className="underline text-blue">
                other retailer
              </span>{" "}
              near you.
            </p>
            <p className="font-semibold text-gray text-xs">
              Or call 000800-040-1966
            </p>
          </div>
          <div>
            <p className="hiw-subtitle" style={{ paddingBottom: "0.4rem" }}>
              Made by{" "}
              <a
                class="normal-link"
                href="https://saranshseth.me/"
                target="_blank"
              >
                Saransh Seth
              </a>
            </p>
            <p className="font-semibold text-center md:text-left text-gray-200 text-s">
              For educational purpose only
            </p>
          </div>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="md:flex hidden">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
