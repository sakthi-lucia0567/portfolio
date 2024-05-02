"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={ref}
      id="contact"
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-20"
    >
      <SectionHeading children="Contact me" />
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sakthivela0567@gmail.com">
          sakthivela0567@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col "
        action={async (formData) => {
          console.log(formData);
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          name="email"
          maxLength={75}
          required
          className="borderBlack h-14 rounded-[0.25rem] px-4 outline-black/20"
          placeholder="Your email"
        />
        <textarea
          required
          name="message"
          className="borderBlack my-3 h-52 rounded-[0.25rem] p-4 outline-black/20"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="group flex h-[3rem] w-[8rem] items-center
        justify-center gap-2 rounded-full bg-gray-900 text-white outline-none
        transition-all hover:scale-110 hover:bg-gray-950 focus:scale-100 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
          group-hover:translate-x-1
          "
          />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
