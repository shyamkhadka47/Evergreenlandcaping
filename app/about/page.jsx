import { ArrowRight, Users, TreePine, CheckCircle, Shield } from "lucide-react";
import Hero from "@/components/Hero";
import React from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import Link from "next/link";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata={
  title:"About Us",
  description:"Evergreen Landscaping in Santa Fe offers a range of commercial and residential landscaping services to meet all your needs."
}

const title = "About Us";
const desc =
  "Evergreen Landscaping helps people in Santa Fe make their yards look great. We build with stones (hardscaping), set up watering (irrigation), and remove snow. We love nature and work hard to keep outdoor spaces clean, safe, and happy.";
const imgsrc = "/5.webp";

export default function Page(){
  const founderServices = [
    "Lawn Care & Maintenance",
    "Custom Garden Design",
    "Irrigation Systems",
    "Seasonal Clean-ups",
  ];

  return (
    <div>
      <Hero title={title} desc={desc} imgsrc={imgsrc} />

      <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden">
        <div className="px-[5%] md:px-[10%]">
      <h2 className="text-5xl capitalize font-bold gradient-text text-btnprimary mb-16 text-center leading-tight">
                  we make your garden a place to live.
                </h2>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side - Images and Stats */}
            <div className="flex-1 relative">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  
                  <Image
                    src="/23.webp"
                    alt="Jesus and Victor Vega - Founders"
                    width={900}
                    height={700}
                    className="w-full h-full object-cover "
                  />
                  {/* <div className="absolute bottom-6 right-6 bg-orange-500 text-white rounded-2xl p-6 shadow-2xl">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-3">25+</div>
                      <div className="text-sm font-semibold">
                        Years of
                        <br />
                        Experience
                      </div>
                    </div>
                  </div> */}
                </div>

                {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-2xl ">
                  <div className="text-white text-center">
                    <div className="text-xs font-bold">Landscaping</div>
                    <div className="text-xs">EXPERTS</div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 space-y-8">
              <div>
                

                <p className="text-lg text-gray-600 leading-relaxed mb-3">
                  Welcome to Evergreen Landscapes, where passion for nature
                  meets professional excellence. Founded by brothers Jesus and
                  Victor Vega, our company has been transforming outdoor spaces
                  since 1996.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-3">
                  {` Jesus and Victor grew up with a love for the outdoors and a deep appreciation for the beauty 
                  of well-maintained landscapes. Combining their skills and vision, they decided to turn their 
                  passion into a thriving business. With Jesus's expertise in design and Victor's hands-on 
                  approach to landscaping, they create stunning and sustainable environments that bring joy to our clients.`}
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-3">
                  At Evergreen Landscapes, we specialize in a range of services
                  including lawn care, garden design, irrigation systems, and
                  seasonal clean-ups. Our commitment to quality and customer
                  satisfaction drives us to deliver exceptional results every
                  time. Join us in making your outdoor space a beautiful
                  extension of your home. Trust Evergreen Landscapes to bring
                  your vision to life.
                </p>
              </div>

              <div className="space-y-4">
                {founderServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-lg font-medium text-primary">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link href={"/projects"} className="bg-primary w-max hover:bg-green-700 text-btnsecondary hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl flex items-center">
                 See Our Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <p className="text-5xl font-bold text-primary mb-4">
                Jesus & Victor Vega
              </p>
              <p className="text-3xl text-primary">
                Founders, Evergreen Landscapes
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Jesus Vega */}
              <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm rounded-2xl">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-4 rounded-2xl hidden sm:block">
                      <Users className=" w-8 h-8  text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Jesus Vega
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {`Evergreen Landscaping, owned by Jesus Vega and Victor Vega, combines over 50 years of expertise 
                        with a passion for beautiful, sustainable outdoor spaces. We specialize in transforming gardens 
                        and landscapes with a focus on quality and personalized service. Whether it's a complete redesign 
                        or a simple enhancement, our team brings meticulous care and creativity to every project. Trust 
                        Evergreen Landscaping to make your outdoor vision a reality. Contact us today to start your transformation!`}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-btnprimary/15 px-4 py-2 rounded-full">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">
                          Design Expert
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Victor Vega */}
              <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm rounded-2xl">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-4 rounded-2xl hidden sm:block">
                      <TreePine className="  w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Victor Vega
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {` Evergreen Landscaping, owned by Jesus Vega and Victor Vega, combines over 50 years of expertise 
                        with a passion for beautiful, sustainable outdoor spaces. We specialize in transforming gardens 
                        and landscapes with a focus on quality and personalized service. Whether it's a complete redesign 
                        or a simple enhancement, our team brings meticulous care and creativity to every project. Trust 
                        Evergreen Landscaping to make your outdoor vision a reality. Contact us today to start your transformation!`}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-btnprimary/15 px-4 py-2 rounded-full">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">
                          Landscape Specialist
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs/>
      <CTA/>
    </div>
  );
};

