

import { address, email, phone1, phone2 } from "@/utils/sitesetting"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

// Footer data arrays
const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Service", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

const contactInfo = [
    {
      icon: MapPin,
      text: address,
      href: "#",
    },
  {
    icon: Phone,
    text: phone1,
    href: `tel:${phone1}`,
  },
  {
    icon: Phone,
    text: phone2,
    href: `tel:${phone2}`,
  },
  {
    icon: Mail,
    text: email,
    customstyle:"break-all",
    href: `mailto:${email}`,
  },
]

const companyTagline =
  "Evergreen Landscaping in Santa Fe helps make your yard nice and safe. We do patios, water systems, snow removal, and more. If you want great landscaping in Santa Fe, we’re here to help you enjoy your outdoor space."

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 ">
      <div className="px-[5%] md:px-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              Evergreen<p className="text-[#4ade80]">Landscaping</p>
            </Link>

            {/* Tagline */}
            <p className="text-gray-300 text-sm mb-6 leading-relaxed font-semibold">{companyTagline}</p>

            Social Media Icons
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 bg-white bg-opacity-20 rounded-sm flex items-center justify-center hover:bg-[#4ade80] transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1 lg:ml-20 font-bold">
            <h3 className="text-white font-bold text-lg mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#4ade80] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="lg:col-span-1 font-bold">
            <h3 className="text-white font-bold text-lg mb-6">CONTACT US</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <div key={index} className="flex items-start space-x-3">
                   <a  href={contact.href} className="flex gap-2">
                   <IconComponent className="w-4 h-4 text-[#4ade80] mt-1 flex-shrink-0" />
                   
                   <span
                    
                     className={`text-gray-300 hover:text-[#4ade80] transition-colors duration-200 text-sm ${contact.customstyle ? contact.customstyle : ""} `}
                   >
                     {contact.text}
                   </span>
                   </a>
                    
                  </div>
                )
              })}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1 lg:ml-20 font-bold">
            <h3 className="text-white font-bold text-lg mb-6">Working Hours</h3>

            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"  ].map((el,i)=>(<>
            <div key={i} className="grid grid-cols-[100px_1fr]">
                <p>{el}</p>
                <p className={`${el == "Saturday" || el =="Sunday" ? "text-red-500" : " text-[#4ade80]"} ml-[-10px] font-normal`}>{`${el == "Saturday" || el =="Sunday" ? "Closed" :"8AM-5PM"}`}</p>
            </div>
            </>))}
          
          </div>
        </div>

        {/* Bottom Border/Copyright */}
        <div className="border-t border-white border-opacity-20 mt-12 pt-8  font-semibold">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
            <p className=" text-md text-btnsecondary">© 2025 Evergreen Landscaping. All rights reserved.</p>
            <div className="flex space-x-6">
             
              <Link href="https://designtechjoy.com" className="border-[2px] border-btnsecondary py-2 px-1 rounded-md text-[#4ade80] text-sm transition-colors duration-200">
              Designed & Developed By Design Tech Joy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
