import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Welcome from "@/components/welcome";
import Projects from "@/components/projects";
import snapChefImg from "../public/snapchef-img.png";
import fitnessImg from "../public/fitness-img.png";
import mediSearchImg from "../public/medisearch-img.png";
import About from "@/components/about";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div id="hero">
      <Navbar />
      <Welcome />
      <div className="h-screen pt-16">
        <div className="text-4xl mx-32 font-bold mb-10" id="projects">
          Projects
        </div>
        <div className="mx-32 flex justify-between">
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
  );
}
