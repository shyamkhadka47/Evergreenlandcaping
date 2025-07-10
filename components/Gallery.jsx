import Image from "next/image";
import Link from "next/link";

// Gallery data
const galleryData = {
  heading: {
    title: "Our Recent Work",
    
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit sagittis. Nunc eget congue velit. Vestibulum et volutpat tincidunt eget at leo. Vivamus hendrerit.",
  items: [
    {
      id: 1,
      type: "image",
      src: "/work1.webp",
      alt: "Lush backyard created through expert landscaping in Santa Fe",
    },
    {
      id: 2,
      type: "image",
      src: "/work2.webp",
      alt: "Custom stonework and garden design as part of Santa Fe landscaping project",
    },
    {
      id: 3,
      type: "image",
      src: "/steps.webp",
      alt: "Modern outdoor steps featured in a Santa Fe landscaping design",
    },
    {
      id: 4,
      type: "image",
      src: "/work3.webp",
      alt: "Drought-friendly landscaping in Santa Fe using native plants",
    },
    {
      id: 5,
      type: "image",
      src: "/ourwork4.webp",
      alt: "Front yard makeover showing quality landscaping in Santa Fe",
    },
    {
      id: 6,
      type: "image",
      src: "/work5.webp",
      alt: "Santa Fe landscaping team building a natural rock garden",
    },
    {
      id: 7,
      type: "image",
      src: "/ourwork6.webp",
      alt: "Well-maintained Santa Fe landscape with decorative gravel and shrubs",
    },
    {
      id: 8,
      type: "image",
      src: "/ourwork7.webp",
      alt: "Residential landscaping in Santa Fe featuring xeriscape techniques",
    },
    {
      id: 9,
      type: "image",
      src: "/ourwork8.webp",
      alt: "Backyard landscaping in Santa Fe with patio and native vegetation",
    },
  ],
};

export default function Gallery() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">{galleryData.heading.title}</span>{" "}
            
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            {galleryData.description}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.items.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={item.src || "/placeholder.svg"}
                  width={400}
                  height={300}
                  alt={item.alt}
                  quality={60}
                  sizes="320px"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Gallery Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-[#164545] transition-colors duration-200"
          >
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
