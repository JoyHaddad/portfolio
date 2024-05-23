import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-32">
      <hr className="bg-custom-pink" id="contact" />
      <br />
      <div className="flex justify-center">
        <div className="text-custom-light">
          <span className="font-bold">©</span> 2024 | Made with {"<"}3 by Joy
          Haddad using Next.js
          <div className="mx-28 my-6 flex justify-center justify-between">
            <Link href="https://www.linkedin.com/in/joyhhaddad/">
              <Image
                className="bg-custom-dark p-2 rounded-xl cursor-pointer hover:bg-opacity-75 hover:border hover:border-custom-pink"
                src="/linkedin-logo.svg"
                alt="Linkedin Logo"
                width={50}
                height={50}
                priority
              />{" "}
            </Link>
            <Link href="https://github.com/JoyHaddad/">
              <Image
                className="bg-custom-dark p-2 rounded-xl cursor-pointer hover:bg-opacity-75 hover:border hover:border-custom-pink"
                src="/github-logo.svg"
                alt="Github Logo"
                width={50}
                height={50}
                priority
              />{" "}
            </Link>
            <Link href="mailto:joy4haddad@gmail.com">
              <Image
                className="bg-custom-dark p-2 rounded-xl cursor-pointer hover:bg-opacity-75 hover:border hover:border-custom-pink"
                src="/gmail-logo.svg"
                alt="Gmail Logo"
                width={50}
                height={50}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
