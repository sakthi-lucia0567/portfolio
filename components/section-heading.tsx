import React from "react";

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="mb-8 text-3xl font-medium capitalize">{children}</h2>;
};

export default SectionHeading;
