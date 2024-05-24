import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Welcome() {
  return (
    <div className="h-screen bg-hero-pattern">
      <div className="flex justify-center font-bold text-4xl pt-80">
        Hello, I'm
      </div>
      <div className="flex justify-center font-bold text-5xl text-custom-light">
        Joy Haddad
      </div>
      <div className="font-bold pt-16">
        <TypeAnimation
          className="flex justify-center"
          sequence={[
            "I'm a <developer/>",
            1000,
            "I'm a debugger",
            1000,
            "I'm a child of God",
            1000,
          ]}
          speed={5}
          deletionSpeed={5}
          style={{ fontSize: "3em" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}
