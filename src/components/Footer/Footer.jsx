import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-10 bg-white">
      <div className="container flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-0">
        <div className="w-full md:w-[70%] text-center md:text-left">
          <p className="text-black text-sm md:text-base">
            © 2035 МЕГАБИТ. Сайт создан на{" "}
            <a
              href="#"
              className="text-gray-400 hover:text-black duration-300 underline"
            >
              Wix.com
            </a>
          </p>
        </div>

        <div className="w-full md:w-[30%] flex justify-center md:justify-end gap-4 mt-4 md:mt-0">
          <Facebook className="text-black w-6 h-6 md:w-[30px] md:h-[30px] cursor-pointer hover:text-gray-400 duration-300" />
          <Twitter className="text-black w-6 h-6 md:w-[30px] md:h-[30px] cursor-pointer hover:text-gray-400 duration-300" />
        <a href="https://www.instagram.com/suren_7707/"> <Instagram  className="text-black w-6 h-6 md:w-[30px] md:h-[30px] cursor-pointer hover:text-gray-400 duration-300" /></a>  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
