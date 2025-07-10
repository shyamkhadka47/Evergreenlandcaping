import Hero from "@/components/Hero";
import React from "react";


export const metadata = {
  title: "Evergreen Landscaping Best Landscaping in Santa Fe NM.",
  description:
    "Evergreen Landscaping in Santa Fe offers a range of commercial and residential landscaping services to meet all your needs.",
};


const title = "Our Projects";
const desc =
  "We helped make a yard in Santa Fe look amazing! We added strong rocks (hardscaping), a smart watering system (irrigation), and helped clear snow in winter. Evergreen Landscaping makes outdoor spaces pretty, safe, and easy to enjoy.";
const imgsrc = "/3.webp";
const page = () => {
  return (
    <div>
      <Hero title={title} desc={desc} imgsrc={imgsrc} />
    </div>
  );
};

export default page;
