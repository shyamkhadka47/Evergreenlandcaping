import { phone1 } from "@/utils/sitesetting";
import { CheckCircle, Leaf, Phone, Star } from "lucide-react";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      {" "}
      <section className="py-16 bg-primary text-[#4ade80] rounded-3xl ">
        <div className="px-[5%] md:px-[10%]">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Evergreen Landscaping?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {` We're committed to delivering exceptional results that exceed your expectations`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Expert Craftsmanship
              </h3>
              <p className="opacity-90">
                50+ years of combined professional landscaping experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="opacity-90">
                Licensed, insured, and committed to excellence
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="opacity-90">
                Sustainable practices and environmentally conscious solutions
              </p>
            </div>

            <div className="text-center">
              <a href={`tel:${phone1}`} className="bg-white/10 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-10 w-10" />
              </a>
              <a href={`tel:${phone1}`} className="text-xl font-semibold mb-2">24/7 Support</a>
              <p className="opacity-90">
                Always available for emergency services and support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
