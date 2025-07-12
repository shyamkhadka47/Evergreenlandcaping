

import { phone1 } from "@/utils/sitesetting"
import { Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// CTA Banner data
const ctaData = {
  heading: "Looking For An Experience Landscaper?",
  phoneNumber:phone1,
  phoneLink: `tel:${phone1}`,
  buttonText: "Contact Us",
  buttonLink: "/contact",
  gardenerImage: {
    src: "/ourwork6.webp",
    alt: "Professional female gardener with pruning tools",
  },
}

export default function CTA() {
  return (
    <section className="bg-btnprimary py-8 rounded-tl-3xl rounded-tr-3xl">
      <div className="px-[5%] md:px-[10%]">
        <div className="flex flex-col gap-3 sm:flex-row items-center justify-between">
          {/* Left - Gardener Image */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="w-48 h-32 overflow-hidden">
              <Image
              width={300}
              height={200}
                src={ctaData.gardenerImage.src || "/placeholder.svg"}
                alt={ctaData.gardenerImage.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Center - Heading */}
          <div className="flex-1 text-center lg:text-left lg:px-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">{ctaData.heading}</h2>
          </div>

          {/* Right - Contact Info */}
          <div className="flex flex-col items-center lg:items-end space-y-4 flex-shrink-0">
            {/* Phone Number */}
            <a  href={ctaData.phoneLink} className="flex items-center space-x-3">
              <span className="w-8 h-8 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </span>
              <span
               
                className="text-white text-2xl lg:text-3xl font-bold hover:text-white/90 transition-colors duration-200"
              >
                {ctaData.phoneNumber}
              </span>
            </a>

            {/* Contact Button */}
            <div>
              <Link
                href={ctaData.buttonLink}
                className="inline-flex items-center space-x-3 bg-primary text-btnsecondary  px-8 py-4 rounded-full font-bold text-lg  hover:text-white  hover:scale-110 duration-500 transition-all shadow-lg"
              >
                <span>{ctaData.buttonText}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
