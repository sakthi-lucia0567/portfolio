"use client";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section className="mb-28 scroll-mt-28 sm:mb-40" id="experience" ref={ref}>
      <SectionHeading children="Experience" />
      <VerticalTimeline lineColor="" animate={true}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              intersectionObserverProps={{
                threshold: 0.5,
                rootMargin: "0px 0px -200px 0px",
              }}
              visible={true}
              contentStyle={{
                background: "#f3f3f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
              className="vertical-timeline-element--work"
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0 font-normal">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
