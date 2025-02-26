import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-screen z-50 md:flex md:items-center md:justify-between md:p-5 p-2 bg-bg-color drop-shadow-lg">
      <div className="flex justify-between">
        <Image
          className="md:hidden block drop-shadow-lg"
          src="/joy-logo.svg"
          alt="Joy Logo"
          width={180}
          height={180}
          priority
        />
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div className="flex items-center w-full mx-28">
        <Link href="/#hero">
          <Image
            className="hidden md:block drop-shadow-lg"
            src="/joy-logo.svg"
            alt="Joy Logo"
            width={200}
            height={48}
            priority
          />
        </Link>
        <div className="hidden md:flex space-x-7 font-bold ml-auto">
          <Link href="/#projects" className="hover:text-custom-light">
            Projects
          </Link>
          <Link href="/#about" className="hover:text-custom-light">
            About
          </Link>
          <Link href="/#contact" className="hover:text-custom-light">
            Contact
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-custom-light"
          >
            Resume
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col items-start font-bold bg-bg-color p-5 top-full left-0 w-full">
          <Link
            href="/#projects"
            className="hover:text-custom-light py-2"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="/#about"
            className="hover:text-custom-light py-2"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="hover:text-custom-light py-2"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            href="/resume.pdf"
            className="hover:text-custom-light py-2"
            onClick={toggleMenu}
          >
            Resume
          </Link>
        </div>
      )}
    </div>
  );
}
