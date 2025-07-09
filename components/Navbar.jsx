"use client";

import { useState } from "react";
import { ChevronDown, Menu, X, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { address, email, phone1, phone2 } from "@/utils/sitesetting";
import { usePathname } from "next/navigation";

// Navigation data arrays
const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const mobileMenuItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about" },

  { name: "Contact", href: "/contact" },
];

const contactInfo = {
  address: address,
  phone1: phone1,
  phone2:phone2,
  email: email,
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname=usePathname()
 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className=" fixed z-[999] top-0  w-full bg-primary h-[100px] px-[5%] md:px-[10%] hidden md:block ">
        <div className="flex mt-[30px] items-center justify-between">
          {/* Logo */}
          <div className="flex items-center ">
            <Link href="/" className="text-white text-2xl font-bold ">
              Evergreen<span className="text-[#4ade80] ml-1">Landscaping</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${pathname==link.href ? "text-btnprimary" : "text-white"} text-lg hover:text-btnprimary transition-colors duration-200 flex items-center space-x-1 relative before:absolute ${pathname==link.href ? "before:w-1/2" : "before:w-0" }  hover:before:w-1/2 before:h-[3px] before:bg-btnsecondary before:bottom-[-10px] before:transition-all  `}
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full h-[100px]"></div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="bg-primary fixed top-0 w-full h-[100px] z-[999] px-[5%] pt-[30px] md:hidden">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-xl font-bold">
            Evergreen<span className="text-[#4ade80] ml-2">Landscaping</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleMobileMenu}
          />

          {/* Mobile Menu Content */}
          <div className="fixed top-0 left-0 w-80 h-full bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-3">
                
                <div>
                  <h2 className="font-bold text-xl text-black">Evergreen</h2>
                  <p className="text-lg text-secondary">Landscaping</p>
                </div>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-500 hover:text-gray-700"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

           
           

            {/* Navigation Menu */}
            <div className="p-6 border-b">
              <ul className="space-y-4">
                {mobileMenuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex w-max relative items-center justify-between py-2  ${ pathname == item.href ? "text-primary" : " text-black"} before:absolute ${pathname == item.href ? "before:w-1/2" : "before:w-0"} hover:before:w-1/2 before:h-[3px] before:bottom-[-5px] before:bg-btnsecondary before:transition-all   hover:text-[#22c55e] transition-colors duration-200`}
                      onClick={toggleMobileMenu}
                    >
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </li>
                ))}

                <div>
                  <Link
                    href="#"
                    className="bg-btnsecondary -ml-2 mt-2 text-white px-8 py-3 rounded-full font-medium hover:bg-[#22c55e] transition-colors duration-200 "
                  >
                    Get A Quote
                  </Link>
                </div>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="p-6">
              <h3 className="font-bold text-black mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#468a40] mt-1 flex-shrink-0" />
                  <p className="text-sm text-black">{contactInfo.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#468a40] flex-shrink-0" />
                  <a href={`tel:${phone1}`} className="text-sm text-black">{contactInfo.phone1}</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#468a40] flex-shrink-0" />
                  <a href={`tel:${phone2}`} className="text-sm text-black">{contactInfo.phone2}</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#468a40] flex-shrink-0" />
                  <a href={`mailto:${email}`} className="text-sm text-black">{contactInfo.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
