"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <>
      <section
        ref={ref}
        id="skills"
        className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      >
        <SectionHeading children="My Skills" />
        <ul
          className="flex flex-wrap justify-center gap-2
        text-lg font-medium text-gray-800"
        >
          {skillsData.map((skill, index) => (
            <motion.li
              variants={fadeInAnimationsVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
              key={index}
              className="rounded-xl border border-black/[0.1]
            bg-white px-5 py-3"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Skills;
