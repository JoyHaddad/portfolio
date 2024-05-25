import Navbar from "@/components/navbar";
import Welcome from "@/components/welcome";
import Projects from "@/components/projects";
import snapChefImg from "../public/snapchef-img.png";
import fitnessImg from "../public/fitness-img.png";
import mediSearchImg from "../public/medisearch-img.png";
import About from "@/components/about";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div id="hero">
        <Navbar />
        <Welcome />
        <div className="h-screen pt-16">
          <motion.div
            initial={{ x: -1000 }}
            whileInView={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              duration: 0.5,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="text-4xl mx-0 font-bold mb-10 sm:mx-32"
            id="projects"
          >
            Projects
          </motion.div>
          <div className="mx-0 sm:mx-32 flex sm:flex-row flex-col justify-between">
            <Projects
              projectImage={snapChefImg}
              project={{
                title: "SnapChef",
                description:
                  "Social media web app dedicated to sharing and discovering recipes!",
                tag1: "Next.js",
                tag2: "MongoDB",
                tag3: "Tailwind",
                projectImage: "test",
                link: "https://snapchefapp.vercel.app/",
              }}
            />
            <Projects
              projectImage={fitnessImg}
              project={{
                title: "Fitness Tracker",
                description:
                  "Android/ios app for creating workout plans and tracking exercise PR!",
                tag1: "ReactNative",
                tag2: "SQL",
                tag3: "FastAPI",
                link: "https://github.com/ale18V/Fitcker",
              }}
            />
            <Projects
              projectImage={mediSearchImg}
              project={{
                title: "MediSearch",
                description:
                  "Search engine for any medication details and warnings listed from the FDA!",
                tag1: "Next.js",
                tag2: "OpenFDA",
                tag3: "Tailwind",
                link: "https://medisearchapp.vercel.app/",
              }}
            />
          </div>
        </div>
        <div></div>
        <About />
        <Footer />
      </div>
    </div>
  );
}
