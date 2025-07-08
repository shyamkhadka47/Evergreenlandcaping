"use client";

import { Check, ArrowRight, Scissors, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Section data
const aboutData = {
  label: "WHY CHOOSE US",
  heading: "Evergreen Landscaping In Santa Fe",
  description:
    "Evergreen Landscaping is a passionate company that creates beautiful, sustainable outdoor spaces. Run by two brother's Jesus and Victor Vega, with a commitment to quality and customer satisfaction, we provide a wide range of services including landscape design, installation, maintenance, hardscaping, water features and irrigation.",
  features: [
    "Maintenance",
    "Irrigation",
    "Snow Removal",
    "Hardscaping",
    "Landscaping",
    "Water Features",
  ],
  buttonText: "About Us",
  //   experienceYears: "15",
  //   experienceText: "Years of Experiences",
};

export default function Aboutus() {
  return (
    <section className="bg-white py-16  overflow-hidden">
      <div className="px-[5%] md:px-[10%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-1 lg:order-0">
            {/* About Us Label */}
            <div>
              <span className="inline-block bg-btnsecondary text-white text-3xl font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
                {aboutData.label}
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {aboutData.heading}
              </h2>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {aboutData.description}
              </p>
            </div>

            {/* Features List - Two Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutData.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#ff8c42] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <div>
              <Link href={"/about"} className="inline-flex items-center space-x-2 bg-btnprimary text-white px-8 py-4 rounded-full font-semibold hover:bg-[#16a34a] transition-colors duration-200">
                <span>{aboutData.buttonText}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="relative order-0 lg:order-1 ">
            {/* Content Container */}
            <div className="relative rounded-[3rem]">
              {/* Main Image */}
              <div className="flex justify-center items-center h-full">
                <div className="relative w-[850px] h-auto ">
                  <Image
                    src="/businesscard.webp"
                    width={700}
                    height={400}
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 700px"
                    alt="Professional landscaper with gardening tools"
                    className=" w-full h-full object-contain rounded-3xl "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
