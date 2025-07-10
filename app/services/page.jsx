import Hero from "@/components/Hero";

import React from "react";

export const metadata = {
  title: "Evergreen Landscaping Best Landscaping in Santa Fe NM.",
  description:
    "Evergreen Landscaping in Santa Fe offers a range of commercial and residential landscaping services to meet all your needs.",
};


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
