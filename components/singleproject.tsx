"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Project({
  project,
}: {
  project: (typeof projectsData)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 rounded-lg last:mb-0 sm:mb-8"
    >
      <section className=" borderBlack  relative max-w-[42rem] overflow-hidden rounded-[0.50rem] bg-gray-400  transition hover:bg-gray-200  group-even:even:pl-8 sm:h-[20rem] sm:pr-8">
        <div className="flex h-full flex-col px-5 py-4 pb-7 pt-4 group-even:ml-[18rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
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
          className="group-even:-right-[initial] 
          group:even:group-hover:rotate-2 absolute -right-40 
          top-8 w-[28.25rem] rounded-t-lg shadow-2xl 
          transition group-even:-left-40 
          group-hover:-translate-x-3 
          group-hover:translate-y-3
          group-hover:-rotate-2 
          group-hover:scale-[1.04]         
          group-even:group-hover:translate-x-3 
          group-even:group-hover:translate-y-3"
        />
      </section>
    </motion.div>
  );
}
