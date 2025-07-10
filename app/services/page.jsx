import Hero from "@/components/Hero";

import React from "react";

const title = "Our Services";
const desc =
  "Evergreen Landscaping offers expert landscaping in Santa Fe, including hardscaping, snow removal, and irrigation systems. We create beautiful, functional outdoor spaces year-round with reliable service, quality craftsmanship, and sustainable solutions tailored to your residential or commercial property.";
const imgsrc = "/2.webp";
const page = () => {
  return (
    <div>
      <Hero title={title} desc={desc} imgsrc={imgsrc} />
    </div>
  );
};

export default page;
