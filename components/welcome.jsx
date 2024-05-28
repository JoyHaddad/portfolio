"use client";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Welcome() {
  const [startTypeAnimation, setStartTypeAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTypeAnimation(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen bg-hero-pattern">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="flex justify-center font-bold text-4xl pt-80">
          Hello, I'm
        </div>
        <div className="flex justify-center font-bold text-5xl text-custom-light">
          Joy Haddad
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="font-bold pt-16"
      >
        {startTypeAnimation && (
          <TypeAnimation
            className="flex justify-center text-4xl sm:text-5xl"
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
            repeat={Infinity}
          />
        )}
      </motion.div>
    </div>
  );
}
