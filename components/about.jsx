import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="h-screen -mt-32 -mb-10" id="about">
      <div className="mx-32">
        <div className="text-4xl font-bold mb-10">About</div>
        <div className="flex items-center">
          <Image
            style={{ borderRadius: "60px", borderWidth: "6px" }}
            className="border border-4 border-custom-dark max-w-sm"
            src="/joy-about.svg"
            alt="Joy photo"
            width={380}
            height={200}
            priority
          />
          <div className="text-custom-light text-lg font-normal ml-32">
            ♥ I am a <span className="font-bold">Computer Science</span> with
            Business applications college student
            <br />
            <br />♥ I am a{" "}
            <span className="font-bold">full-stack web developer</span>. For the
            front-end I use <span className="font-bold">react</span> and{" "}
            <span className="font-bold">tailwind css</span> for styling. For the
            back-end I use{" "}
            <span className="font-bold">MongoDB, PostgreSQL, Express</span> and{" "}
            <span className="font-bold">AWS/GCP</span> for cloud storage.
            <br />
            <br />♥ I am an object oriented programmer and I like to code with{" "}
            <span className="font-bold">C++</span> and{" "}
            <span className="font-bold">Python</span>.
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="text-xl font-bold mt-10 mb-5">Hackathons</div>
            <div className="flex max-w-sm justify-between">
              <Link href="https://rosehack.com">
                {" "}
                <Image
                  className="bg-custom-dark p-2 px-5 mr-10 rounded-2xl cursor-pointer hover:bg-opacity-75 hover:border-2 hover:border-custom-pink"
                  src="/rosehack-logo.svg"
                  alt="Joy photo"
                  width={100}
                  height={75}
                  priority
                />{" "}
              </Link>
              <Link href="https://bearhack.com" className="m-0 p-0">
                <Image
                  className="bg-custom-dark p-2 mr-10 rounded-2xl cursor-pointer hover:bg-opacity-75 hover:border-2 hover:border-custom-pink"
                  src="/bearhack-logo.webp"
                  alt="Joy photo"
                  width={100}
                  height={75}
                  priority
                />
              </Link>
              <Link href="https://cutiehack.com" className="m-0 p-0">
                <Image
                  className="bg-custom-dark p-2 rounded-2xl cursor-pointer hover:bg-opacity-75 hover:border-2 hover:border-custom-pink"
                  src="/cutiehack-logo.svg"
                  alt="Joy photo"
                  width={100}
                  height={75}
                  priority
                />{" "}
              </Link>
            </div>
          </div>
          <div>
            <div className="text-xl font-bold mt-10 mb-5 ml-32">Education</div>
            <div className="ml-32 mt-5 text-custom-light">
              <div className="mb-2 flex">
                ♥ B.S. Computer Science @ UCR
                <div style={{ marginLeft: "388px" }}>2024</div>
              </div>
              <div className="flex">
                ♥ GED Computer Science @ Saddleback
                <div style={{ marginLeft: "330px" }}>2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
