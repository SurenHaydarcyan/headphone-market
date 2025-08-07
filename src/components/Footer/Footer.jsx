import { Facebook, Instagram } from "lucide-react";
import React from "react";
import { PiTelegramLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-white py-6 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="text-center md:text-left text-sm text-black">
          © 2035 МЕГАБИТ. Сайт создан на{" "}
          <a
            href="https://ru.wix.com/"
            className="text-gray-500 hover:text-black underline transition"
          >
            Wix.com
          </a>
        </div>

        <div className="flex justify-center md:justify-end gap-4">
          <a
            href="https://www.facebook.com/share/1FgQUbrc9e"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="text-black w-6 h-6 md:w-7 md:h-7 cursor-pointer hover:text-gray-400 transition" />
          </a>
          <a
            href="https://t.me/Haydarcyan1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiTelegramLogo className="text-black w-6 h-6 md:w-7 md:h-7 cursor-pointer hover:text-gray-400 transition" />
          </a>
          <a
            href="https://www.instagram.com/suren_7707/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="text-black w-6 h-6 md:w-7 md:h-7 cursor-pointer hover:text-gray-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
