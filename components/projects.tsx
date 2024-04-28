import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

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

function Project({ project }: { project: (typeof projectsData)[number] }) {
  return (
    <section className="relative max-w-[42rem] overflow-hidden border border-black/5 bg-gray-400 sm:h-[20rem] sm:pr-8">
      <div className="flex h-full flex-col px-5 py-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
        <h3 className="text-2xl font-semibold ">{project.title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
          {project.tags.map((tag, index) => (
            <li
              key={index}
              className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={project.imageUrl}
        alt={project.title}
        quality={95}
        className="absolute -right-40 top-8 w-[28.25rem] rounded-t-lg shadow-2xl"
      />
    </section>
  );
}

export default Projects;
