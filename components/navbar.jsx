import React from "react";
import Image from "next/image";

export default function Navbar() {
  // Function to handle smooth scrolling
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed w-screen z-10 flex items-center justify-between p-5 bg-bg-color drop-shadow-lg">
      <div className="flex items-center w-full mx-24">
        <a href="/#hero" onClick={(e) => handleScroll(e, "hero")}>
          <Image
            className="drop-shadow-lg"
            src="/joy-logo.svg"
            alt="Joy Logo"
            width={200}
            height={48}
            priority
          />
        </a>
        <div className="flex space-x-7 font-bold ml-auto">
          <a
            href="/#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="hover:text-custom-light"
          >
            Projects
          </a>
          <a
            href="/#about"
            onClick={(e) => handleScroll(e, "about")}
            className="hover:text-custom-light"
          >
            About
          </a>
          <a
            href="/#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="hover:text-custom-light"
          >
            Contact
          </a>
          <a
            href="https://storage.googleapis.com/backend-challenge-bucket/JoyHaddad_Resume.pdf"
            className="hover:text-custom-light"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
