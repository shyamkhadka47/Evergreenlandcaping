

import { phone1 } from "@/utils/sitesetting"
import { Check } from "lucide-react"
import Link from "next/link"

// FAQ data array with 8 questions and answers
const faqData = [
    {
      id: 1,
      question: "How much does landscaping cost in Santa Fe, NM?",
      answer:
        "The cost of landscaping in Santa Fe varies depending on the size of your property, design complexity, and materials used. At Evergreen Landscaping, we provide free estimates tailored to your vision and budget.",
    },
    {
      id: 2,
      question: "Who are the best landscapers in Santa Fe?",
      answer:
        "Evergreen Landscaping is a top-rated landscaping company in Santa Fe, known for custom designs, sustainable practices, and expert installation. Our team is committed to transforming your outdoor space beautifully and efficiently.",
    },
    {
      id: 3,
      question: "What landscaping services are available in Santa Fe?",
      answer:
        "Evergreen Landscaping offers a full range of services in Santa Fe including landscape design, installation, maintenance, irrigation systems, xeriscaping, hardscaping, and seasonal cleanups.",
    },
    {
      id: 4,
      question: "Do I need a permit for landscaping in Santa Fe?",
      answer:
        "Certain landscaping projects in Santa Fe may require permits, especially for grading, irrigation systems, or structural features. Evergreen Landscaping can assist with the permitting process to ensure compliance with local regulations.",
    },
    {
      id: 5,
      question: "Can I get drought-tolerant or xeriscaping in Santa Fe?",
      answer:
        "Absolutely. Evergreen Landscaping specializes in xeriscaping and drought-resistant landscaping that suits Santa Fe's arid climate. We use native plants and smart irrigation systems to conserve water and reduce maintenance.",
    },
    {
      id: 6,
      question: "How often should I schedule landscape maintenance in Santa Fe?",
      answer:
        "In Santa Fe, regular landscape maintenance is key due to seasonal changes and dry conditions. Evergreen Landscaping offers monthly and seasonal maintenance plans to keep your yard looking its best year-round.",
    },
    {
      id: 7,
      question: "Do landscaping companies in Santa Fe offer free consultations?",
      answer:
        "Yes, Evergreen Landscaping offers free initial consultations in Santa Fe. We'll walk through your property, discuss your ideas, and provide recommendations with a no-obligation quote.",
    },
    {
      id: 8,
      question: "Can landscaping increase my property value in Santa Fe?",
      answer:
        "Yes, well-designed landscaping can significantly boost curb appeal and property value in Santa Fe. Evergreen Landscaping creates customized outdoor spaces that enhance your home’s aesthetic and resale potential.",
    },
  ];
  
export default function FAQ() {
  return (
    <section className="bg-gray-50 py-16 ">
      <div className="px-[5%] md:px-[12%]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-primary max-w-2xl mx-auto">
            Find answers to common questions about our landscaping and gardening services
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="rounded-lg p-3 hover:shadow-md transition-shadow duration-200"
            >
              {/* Question with Icon */}
              <div className="flex items-start space-x-4 ">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-btnprimary rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">{faq.question}</h3>
                </div>
              </div>

              {/* Answer */}
              <div className="ml-12">
                <p className="text-primary ">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-3">
          <p className="text-primary mb-4">Still have questions?</p>
          <Link href={`/contact`} className="bg-btnsecondary text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e67a35] transition-colors duration-200">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
