import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoDocker } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  const scaleAnimation = {
    hover: {
      scale: 1.1, // Scale the icon up to 110%
      transition: {
        yoyo: Infinity, // Make the animation repeat indefinitely
        duration: 0.3, // Duration of each bounce
        ease: "easeOut", // Use an "easeOut" easing for a smooth effect
      },
    },
  };

  return (
    <div className="sm:h-screen sm:-mt-32 mt:0 mb-10" id="about">
      <div className="mx-6 sm:mx-32">
        <motion.div
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            duration: 0.5,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-10"
        >
          About
        </motion.div>
        <div className="flex sm:flex-row flex-col items-center">
          <Image
            style={{ borderRadius: "60px", borderWidth: "6px" }}
            className="border border-4 border-custom-dark max-w-sm"
            src="/joy-about.jpg"
            alt="Joy photo"
            width={500}
            height={400}
            priority
          />
          <br />
          <div className="text-custom-light text-lg font-normal sm:ml-32 ml-0">
            ♥ I am a <span className="font-bold">Computer Science </span>
            graduate with expertise in{" "}
            <span className="font-bold">fullstack development</span> and{" "}
            <span className="font-bold">UI/UX design</span>.
            <br />
            <br />♥ I have a solid understanding of{" "}
            <span className="font-bold">
              relational database management systems
            </span>{" "}
            and experience integrating them with cloud platforms such as{" "}
            <span className="font-bold">AWS</span> and{" "}
            <span className="font-bold">GCP</span>
            <br />
            <br />♥ In my free time I like to play violin, piano, sing and play
            video games.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div>
            <div className="text-xl font-bold mt-10 mb-5">Hackathons</div>
            <div className="flex max-w-sm justify-between">
              <Link href="https://rosehack.com">
                {" "}
                <Image
                  className="bg-custom-dark p-2 px-5 mr-10 rounded-2xl cursor-pointer hover:bg-opacity-75 hover:border-2 hover:border-custom-pink"
                  src="/rosehack-logo.svg"
                  alt="Rosehack Logo"
                  width={100}
                  height={75}
                  priority
                />{" "}
              </Link>
              <Link href="https://bearhack.com" className="m-0 p-0">
                <Image
                  className="bg-custom-dark p-2 mr-10 rounded-2xl cursor-pointer hover:bg-opacity-75 hover:border-2 hover:border-custom-pink"
                  src="/bearhack-logo.webp"
                  alt="Bearhack Logo"
                  width={100}
                  height={75}
                  priority
                />
              </Link>
              <Link href="https://cutiehack.com" className="m-0 p-0">
                <Image
                  className="bg-custom-dark p-2 rounded-2xl cursor-pointer hover:bg-opacity-75 hover:border-2 hover:border-custom-pink"
                  src="/cutiehack-logo.svg"
                  alt="Cutiehack Logo"
                  width={100}
                  height={75}
                  priority
                />{" "}
              </Link>
            </div>
          </div>
          <div>
            <div className="text-xl font-bold mt-10 mb-5 ml-0 sm:ml-32">
              Education
            </div>
            <div className="sm:ml-32 ml-0 mt-5 text-custom-light">
              <div className="mb-2 flex flex-col sm:flex-row">
                <span>♥ B.S. Computer Science @ UCR</span>
                <div className="mt-2 sm:mt-0 sm:ml-97">2024</div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span>♥ GED Computer Science @ Saddleback</span>
                <div className="mt-2 sm:mt-0 sm:ml-82">2022</div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="font-bold text-xl mb-5">Skills</div>
        <div className="sm:flex sm:justify-between grid grid-cols-5 gap-6">
          {[
            SiCplusplus,
            FaPython,
            RiJavaLine,
            IoLogoJavascript,
            FaReact,
            SiNextdotjs,
            RiTailwindCssFill,
            IoLogoDocker,
            BiLogoPostgresql,
            FaAws,
            SiFastapi,
          ].map((Icon, index) => (
            <motion.div
              className="p-2 bg-custom-dark rounded-xl cursor-pointer"
              key={index}
              whileHover="hover"
              variants={scaleAnimation}
            >
              <Icon className="text-custom-pink w-10 h-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
