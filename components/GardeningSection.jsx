"use client"
import { phone1 } from "@/utils/sitesetting";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Section data
const sectionData = {
  heading: "You Dream It",
  description:
    "Evergreen Landscaping is dedicated to bringing our customer's dreams to life. We create lush, vibrant, accommodating and water wise landscape solutions. With over 20 years of experience, our dedicated team of skilled professionals is committed to transforming landscapes into breathtaking sanctuaries.",
  buttonText: "Call Us Now",
  buttonHref: phone1,
  customerSatisfaction: {
    percentage: "99%",
    label: "Customer Satisfaction",
    rating: 5,
  },
};

// Customer profile images (using placeholder images)
const customerProfiles = [
  { id: 1, src: "/placeholder.svg?height=40&width=40", alt: "Customer 1" },
  { id: 2, src: "/placeholder.svg?height=40&width=40", alt: "Customer 2" },
  { id: 3, src: "/placeholder.svg?height=40&width=40", alt: "Customer 3" },
];

const sliderImages = ["/work1.webp", "/work2.webp", "/steps.webp"];

export default function GardeningSection() {
  return (
    <section className="bg-[#f5f5f0] mt-[100px] py-8">
      <div className="px-[5%] md:px-[10%]">
        <div className="grid grid-cols-1 lg:grid-cols-[72%_28%] gap-8 items-center">
          {/* Left Side - Image */}
          <div className="">
            <div className="relative">
              <Swiper
                modules={[ Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                
                autoplay={{ delay: 2000 }}
                className="h-[500px] rounded-3xl shadow-2xl overflow-hidden"
              >
                {sliderImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={src}
                      width={600}
                      height={500}
                      priority
                      sizes="(max-width:768px) 33vw 600px"
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-primary/10 to-transparent rounded-3xl z-10"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-4">
            {/* Main Heading */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight capitalize">
                {sectionData.heading}{" "}
                <span className="text-4xl font-bold text-btnprimary leading-tight capitalize">
                  we make it happen.
                </span>{" "}
              </h2>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {sectionData.description}
              </p>
            </div>

            {/* Contact Button */}
            <div>
              <Link
                href={`tel:${sectionData.buttonHref}`}
                className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-[#247260] transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <span className="text-btnsecondary">
                  {sectionData.buttonText}
                </span>
                <ArrowRight className="w-5 h-5 text-btnprimary" />
              </Link>
            </div>

            {/* Customer Satisfaction */}
            <div className="pt-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center   space-x-6">
                {/* Customer Profile Images */}
                <div className="flex -space-x-3 mb-5">
                  {customerProfiles.map((profile) => (
                    <div
                      key={profile.id}
                      className="w-12 h-12 rounded-full border-3 border-white overflow-hidden shadow-md"
                    >
                      <Image
                        src={profile.src || "/placeholder.svg"}
                        width={100}
                        height={100}
                        priority
                        alt={profile.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Satisfaction Stats */}
                <div className="flex items-center space-x-2">
                  <div>
                    <div className="text-4xl lg:text-3xl font-extrabold text-gray-900">
                      {sectionData.customerSatisfaction.percentage}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    {/* Stars */}
                    <div className="flex space-x-1 mb-1">
                      {[...Array(sectionData.customerSatisfaction.rating)].map(
                        (_, index) => (
                          <Star
                            key={index}
                            className="w-4 h-4  xl:w-5 xl:h-5 fill-[#ff8c42] text-[#ff8c42]"
                          />
                        )
                      )}
                    </div>
                    {/* Label */}
                    <div className="text-sm text-gray-600 font-medium">
                      {sectionData.customerSatisfaction.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
