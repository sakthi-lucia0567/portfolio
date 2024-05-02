"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-14 max-w-[50rem] scroll-mt-28 text-center sm:mb-10"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ricardo Portia"
              width={159}
              height={150}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full
            border-[0.35rem] border-white object-cover shadow-xl"
            />
            <motion.span
              className="absolute bottom-0  right-0 text-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              ❤️
            </motion.span>
          </motion.div>
        </div>
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Sakthivel.</span> I'm a{" "}
          <span className="font-bold">full-stack developer</span> with{" "}
          <span className="font-bold">2 years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center justify-center gap-4 px-4  text-lg font-medium sm:flex-row "
        >
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition  hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          >
            Contact Me{" "}
            <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </Link>
          <a
            href="/public/CV.pdf"
            download={true}
            className=" borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 text-black  outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
          >
            Download CV{" "}
            <HiDownload className="opacity-70 transition group-hover:translate-x-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/sakthivel/"
            target="_blank"
            className="borderBlack flex items-center gap-2 rounded-full bg-white p-4 text-gray-700 outline-none transition   hover:scale-[1.15] hover:text-gray-950  focus:scale-[1.25] active:scale-105"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/sakthivel"
            target="_blank"
            className="borderBlack flex items-center gap-2 rounded-full bg-white p-4 text-gray-700 outline-none transition hover:scale-[1.15]  hover:text-gray-950    focus:scale-[1.25] active:scale-105"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
