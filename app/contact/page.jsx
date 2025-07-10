"use client";
import Hero from "@/components/Hero";
import { address, email, phone1, phone2 } from "@/utils/sitesetting";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaMapPin,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export const metadata = {
  title: "Evergreen Landscaping Best Landscaping in Santa Fe NM.",
  description:
    "Evergreen Landscaping in Santa Fe offers a range of commercial and residential landscaping services to meet all your needs.",
};



const title = "Contact Us";
const desc =
  "Have questions about landscaping in Santa Fe? Want help with hardscaping, irrigation, or snow removal? Contact Evergreen Landscaping! We’re ready to listen and help make your outdoor space beautiful and safe all year long. Call or message us today!.";
const imgsrc = "/4.webp";
const Page = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [status, setStatus] = useState(false);
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success(responseData.success);
        setData({ name: "", email: "", number: "", message: "" }); // Reset form
        setStatus(false);
      } else {
        toast.error(responseData.error);
        setStatus(false);
      }
    } catch (error) {
      setStatus(false);
    }
  };

  return (
    <div>
      <Hero title={title} desc={desc} imgsrc={imgsrc} />

      <div className="px-5% md:px-[10%]">
        <div className="container mx-auto px-[5%] md:px-[10% ] my-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Contact Us
          </h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg  focus:ring-secondary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg  focus:ring-secondary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="number" className="block mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={data.number}
                    onChange={handleChange}
                    pattern="^\d{10}$"
                    title="Enter Your Phone Number"
                    maxLength={10}
                    className="w-full px-4 py-2 border rounded-lg  focus:ring-secondary"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 capitalize font-medium"
                  >
                    describe your project{" "}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg  focus:ring-secondary"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status}
                  className={`${
                    status ? "bg-slate-400 text-secondary w-full" : "w-full"
                  } "w-full bg-secondary hover:text-primary text-white font-bold py-2 px-4 rounded-lg"`}
                >
                  {status ? "Sending Email..." : "Send Message"}
                </button>
              </form>
            </div>
            <div className="lg:w-1/2 bg-btnprimary/10 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapPin className="w-6 h-6 text-secondary mr-2 mt-1" />
                  <p>{`${address}`}</p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="w-6 h-6 text-secondary mr-2" />
                  <Link href={`tel:${phone1}`}>Phone: {phone1}</Link>
                </div>
                <div className="flex items-center">
                  <FaPhone className="w-6 h-6 text-secondary mr-2" />
                  <Link href={`tel:${phone2}`}>Phone: {phone2}</Link>
                </div>

                <div className="flex items-center">
                  <FaEnvelope className="w-6 h-6 text-secondary mr-2" />
                  <Link href={`mailto:${email}`}>Email: {email}</Link>
                </div>
                <div style={{ marginTop: "30px" }}>
                  <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                  <div className="flex flex-col justify-center gap-3">
                    <div className="flex  items-center space-y-3">
                      <FaClock className="w-6 h-6 text-secondary mr-2 mt-4" />
                      <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="w-6 h-6 text-secondary mr-2 mt-1" />
                      <span>Saturday: Closed</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="w-6 h-6 text-secondary mr-2 mt-1" />
                      <span>Sunday: Closed</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="text-secondary hover:text-green-700"
                    >
                      <FaFacebook className="w-6 h-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="text-secondary hover:text-green-700"
                    >
                      <FaTwitter className="w-6 h-6" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="#"
                      className="text-secondary hover:text-green-700"
                    >
                      <FaInstagram className="w-6 h-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
