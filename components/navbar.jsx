import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed w-screen z-10 flex items-center justify-between p-5 bg-bg-color drop-shadow-lg">
      <div className="flex items-center w-full mx-24">
        <Image
          className="drop-shadow-lg"
          src="/joy-logo.svg"
          alt="Joy Logo"
          width={200}
          height={48}
          priority
        />
        <div className="flex space-x-7 font-bold ml-auto">
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
            href="https://storage.googleapis.com/backend-challenge-bucket/JoyHaddad_Resume.pdf"
            className="hover:text-custom-light"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
