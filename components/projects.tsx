import { useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll } from "framer-motion";
import Project from "./singleproject";

const Projects = () => {
  return (
    <section className="">
      <SectionHeading children="My Projects" />
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
