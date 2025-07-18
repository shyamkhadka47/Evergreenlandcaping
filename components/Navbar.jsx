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
  phone2: phone2,
  email: email,
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className=" fixed z-[999] top-0  w-full bg-primary h-[100px] px-[5%] md:px-[10%] hidden md:block ">
        <div className="flex mt-[30px] gap-3 items-center justify-between">
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
                className={`${
                  pathname == link.href ? "text-btnprimary" : "text-white"
                } text-lg hover:text-btnprimary transition-colors duration-200 flex items-center space-x-1 relative before:absolute ${
                  pathname == link.href ? "before:w-1/2" : "before:w-0"
                }  hover:before:w-1/2 before:h-[3px] before:bg-btnsecondary before:bottom-[-10px] before:transition-all  `}
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
      
        <div className={`fixed inset-0 z-50 md:hidden transition-all h-screen duration-150 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 h-screen"
            onClick={toggleMobileMenu}
          />

          {/* Mobile Menu Content */}
          <div
            className={`fixed transform transition-transform duration-500 ease-in-out left-0 w-[65%] h-full bg-primary shadow-xl mt-[100px] ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } `}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-3">
                <div>
                  <p className="font-bold text-xl text-white">Evergreen</p>
                  <p className="text-lg text-btnprimary font-bold">
                    Landscaping
                  </p>
                </div>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-white"
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
                      className={`flex w-max relative items-center justify-between py-2 text-white  ${
                        pathname == item.href ? "text-primary" : " text-black"
                      } before:absolute ${
                        pathname == item.href ? "before:w-1/2" : "before:w-0"
                      } hover:before:w-1/2 before:h-[3px] before:bottom-[-5px] before:bg-btnsecondary before:transition-all   hover:text-[#22c55e] transition-colors duration-200`}
                      onClick={toggleMobileMenu}
                    >
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </li>
                ))}

                <li>
                  <Link
                    href="#"
                    className="bg-btnsecondary -ml-2 mt-2 text-white px-8 py-3 rounded-full font-medium hover:bg-[#22c55e] transition-colors duration-200 "
                  >
                    Get A Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="p-6">
              <p className="font-bold text-white mb-4">Contact Info</p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-btnprimary  mt-1 flex-shrink-0" />
                  <p className="text-sm text-white">{contactInfo.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-btnprimary  flex-shrink-0" />
                  <a href={`tel:${phone1}`} className="text-sm text-white">
                    {contactInfo.phone1}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-btnprimary  flex-shrink-0" />
                  <a href={`tel:${phone2}`} className="text-sm text-white">
                    {contactInfo.phone2}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-btnprimary  flex-shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    className="text-sm text-white break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
