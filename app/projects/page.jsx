import CTA from "@/components/CTA";
import Hero from "@/components/Hero";

import dynamic from "next/dynamic";
import React from "react";

export const metadata = {
  title: "Our Projects",
  description:
    "Evergreen Landscaping in Santa Fe offers a range of commercial and residential landscaping services to meet all your needs.",
};

const title = "Our Projects";
const desc =
  "We make gardens in Santa Fe look amazing! We specialize in hardscaping, irrigation systems, water features and maintenance, and help clear snow in winter. Evergreen Landscaping makes outdoor spaces livable, safe, and easy to enjoy.";
const imgsrc = "/3.webp";

const LazyProjectGallery = dynamic(
  () => import("@/components/ProjectGallery"),
  {
    // ssr: false,
    loading: () =>  <p>Loading....</p>
    
  }
);

const Page = () => {
  return (
    <div>
      <Hero title={title} desc={desc} imgsrc={imgsrc} />
      <div className="px-[5%] md:px-[10%] py-16">
        <h2 className="text-btnprimary font-bold text-5xl capitalize">Successfully Completed Works</h2>
        <p className=" py-5 text-lg">Evergreen Landscaping in Santa Fe transforms outdoor spaces with expert care. From patios, irrigation systems, and hardscaping to snow removal and custom water features — we handle every detail. Our completed projects show real results across Santa Fe, New Mexico. Whether it’s a backyard upgrade or a full landscaping solution, we bring beauty, safety, and lasting value to every home and property we work on.</p>
      </div>
      <LazyProjectGallery />
      <CTA/>
    </div>
  );
};

export default Page;
