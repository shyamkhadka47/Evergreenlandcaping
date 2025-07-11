import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import {
  Hammer,
  TreePine,
  Waves,
  Scissors,
  Droplets,
  Snowflake,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export const metadata = {
  title: "Our Services",
  description:
    "Evergreen Landscaping in Santa Fe offers a range of commercial and residential landscaping services to meet all your needs.",
};
const services = [
  {
    id: "hardscaping",
    title: "Hardscaping",
    icon: Hammer,
    description:
      "Hardscaping transforms your outdoor space with durable features like patios, walkways, retaining walls, and stone pathways. Our expert team designs and installs custom elements to enhance your landscape's functionality and aesthetics. Using high-quality materials, we create inviting, low-maintenance areas perfect for relaxation and entertainment, adding lasting value to your property.",
    features: [
      "Custom Patios & Decks",
      "Stone Walkways",
      "Retaining Walls",
      "Outdoor Fire Features",
      "Pergolas & Gazebos",
      "Driveway Installation",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "landscaping",
    title: "Landscaping",
    icon: TreePine,
    description:
      "Our landscaping design and installation service transforms your outdoor space into a stunning, functional oasis. We begin with a comprehensive consultation to understand your vision, preferences, and the unique characteristics of your property. Our expert designers then create a customized plan that balances aesthetics with practicality, incorporating elements such as lush gardens, elegant pathways, and inviting patios.",
    features: [
      "Custom Garden Design",
      "Plant Selection & Installation",
      "Lawn Installation",
      "Landscape Lighting",
      "Mulching & Edging",
      "Seasonal Plantings",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "water-features",
    title: "Water Features",
    icon: Waves,
    description:
      "Evergreen Landscaping offers exceptional services in creating stunning waterfalls, serene riverbeds, picturesque ponds, and elegant fountains. Our skilled team designs and installs these water features to enhance your outdoor space's beauty and tranquility. Using high-quality materials and expert craftsmanship, we transform your landscape into a relaxing oasis, adding value and a unique aesthetic appeal.",
    features: [
      "Custom Waterfalls",
      "Natural Ponds",
      "Decorative Fountains",
      "Stream & Riverbed Design",
      "Water Garden Installation",
      "Pond Maintenance",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    icon: Scissors,
    description:
      "Evergreen Landscaping offers comprehensive ground maintenance services to keep your outdoor spaces pristine and healthy. Our expert team provides regular lawn care, pruning, fertilization, and pest control, ensuring your landscape remains vibrant and well-manicured year-round. We use high-quality products and techniques to maintain the beauty and health of your outdoor area.",
    features: [
      "Regular Lawn Care",
      "Tree & Shrub Pruning",
      "Fertilization Programs",
      "Pest & Disease Control",
      "Weed Management",
      "Seasonal Cleanup",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "irrigation",
    title: "Irrigation",
    icon: Droplets,
    description:
      "We design and install state-of-the-art irrigation systems that optimize water usage and promote sustainable growth. Our solutions, including smart irrigation technology, drip systems, and sprinklers, are tailored to meet the specific needs of your landscape, ensuring efficient water conservation and healthy plant growth. Trust us to create a sustainable and thriving outdoor environment.",
    features: [
      "Smart Irrigation Systems",
      "Drip Irrigation",
      "Sprinkler Installation",
      "Water Conservation Solutions",
      "System Maintenance",
      "Seasonal Adjustments",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "snow-removal",
    title: "Snow Removal",
    icon: Snowflake,
    description:
      "During the winter months, we provide reliable snow removal services to keep your property safe and accessible. Our team promptly clears driveways, walkways, and parking areas, using professional equipment to handle even the heaviest snowfalls efficiently and effectively. Trust us to ensure your outdoor spaces remain clear, preventing hazards and maintaining functionality throughout the winter season.",
    features: [
      "24/7 Snow Removal",
      "Driveway Clearing",
      "Walkway Maintenance",
      "Ice Management",
      "Commercial Services",
      "Emergency Response",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
];

const title = "Our Services";
const desc =
  "Evergreen Landscaping offers expert landscaping in Santa Fe, including hardscaping, snow removal, and irrigation systems. We create beautiful, functional outdoor spaces year-round with reliable service, quality craftsmanship, and sustainable solutions tailored to your residential or commercial property.";
const imgsrc = "/2.webp";
const Page = () => {
  return (
    <div>
      <Hero title={title} desc={desc} imgsrc={imgsrc} />
      <div className="min-h-screen px-[5%] md:px-[10%]">
        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Comprehensive Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {`From design to maintenance, we offer complete landscaping solutions to enhance your property's beauty and
              value`}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="rounded-lg border bg-white text-gray-950 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                      <div className="mx-auto mb-4 p-3 bg-primary rounded-full w-fit">
                        <IconComponent className="h-8 w-8 text-[#4ade80]" />
                      </div>
                      <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-gray-600 text-center mb-4">
                        {service.description.substring(0, 120)}...
                      </p>
                      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-transparent hover:bg-gray-100 hover:text-gray-900 h-10 px-4 py-2 w-full">
                        Learn More Below
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-16 ">
          <div className="">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={service.id} className="mb-24 last:mb-0">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      !isEven ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                        <div className="p-3 bg-primary rounded-full mr-4">
                          <IconComponent className="h-8 w-8 text-[#4ade80]" />
                        </div>
                        <h3 className="text-4xl font-bold text-btnsecondary">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">
                          What We Offer:
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <Link href={"/contact"} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-[#4ade80] hover:bg-green-700 h-10 px-4 py-2">
                          Get Free Estimate
                        </Link>
                        <Link href={"/project"} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-transparent hover:bg-gray-100 hover:text-gray-900 h-10 px-4 py-2">
                          View Portfolio
                        </Link>
                      </div>
                    </div>

                    <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                      <div className="relative">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={600}
                          height={400}
                          className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <WhyChooseUs />

      <CTA />
    </div>
  );
};

export default Page;
