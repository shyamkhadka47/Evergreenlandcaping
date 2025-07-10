import { Scissors, Users, Droplets, Calendar, Waves, User } from "lucide-react";
import Link from "next/link";

// Services data array
const servicesData = {
    heading: {
      title: "Our",
      titleAccent: "Service",
    },
    description:
      "At Evergreen Landscaping, we provide a full suite of services to transform, maintain, and enhance your outdoor space with expert care and quality craftsmanship.",
    services: [
      {
        id: 1,
        title: "Hardscaping",
        description:
          "Hardscaping transforms your outdoor space with durable features like patios, walkways, retaining walls, and stone pathways. Our expert team designs and installs custom elements to enhance your landscape's functionality and aesthetics. Using high-quality materials, we create inviting, low-maintenance areas perfect for relaxation and entertainment, adding lasting value to your property.",
        icon: Scissors, // You may want to change the icon to something more relevant if you have
        readMoreLink: "/services",
      },
      {
        id: 2,
        title: "Landscaping",
        description:
          "Our landscaping design and installation service transforms your outdoor space into a stunning, functional oasis. We begin with a comprehensive consultation to understand your vision, preferences, and the unique characteristics of your property. Our expert designers then create a customized plan that balances aesthetics with practicality, incorporating elements such as lush gardens, elegant pathways, and inviting patios.",
        icon: Users,
        readMoreLink: "/services",
      },
      {
        id: 3,
        title: "Water Features",
        description:
          "Evergreen Landscaping offers exceptional services in creating stunning waterfalls, serene riverbeds, picturesque ponds, and elegant fountains. Our skilled team designs and installs these water features to enhance your outdoor space's beauty and tranquility. Using high-quality materials and expert craftsmanship, we transform your landscape into a relaxing oasis, adding value and a unique aesthetic appeal.",
        icon: Droplets,
        readMoreLink: "/services",
      },
      {
        id: 4,
        title: "Maintenance",
        description:
          "Evergreen Landscaping offers comprehensive ground maintenance services to keep your outdoor spaces pristine and healthy. Our expert team provides regular lawn care, pruning, fertilization, and pest control, ensuring your landscape remains vibrant and well-manicured year-round. We use high-quality products and techniques to maintain the beauty and health of your outdoor area.",
        icon: Calendar,
        readMoreLink: "/services",
      },
      {
        id: 5,
        title: "Irrigation",
        description:
          "We design and install state-of-the-art irrigation systems that optimize water usage and promote sustainable growth. Our solutions, including smart irrigation technology, drip systems, and sprinklers, are tailored to meet the specific needs of your landscape, ensuring efficient water conservation and healthy plant growth. Trust us to create a sustainable and thriving outdoor environment.",
        icon: Waves,
        readMoreLink: "/services",
      },
      {
        id: 6,
        title: "Snow Removal",
        description:
          "During the winter months, we provide reliable snow removal services to keep your property safe and accessible. Our team promptly clears driveways, walkways, and parking areas, using professional equipment to handle even the heaviest snowfalls efficiently and effectively. Trust us to ensure your outdoor spaces remain clear, preventing hazards and maintaining functionality throughout the winter season.",
        icon: User,
        readMoreLink: "/services",
      },
    ],
  };
  

export default function Services() {
  return (
    <section
      className="bg-gray-50 pt-6 pb-16 w-full  relative z-10"
      style={{
        background: 'url("/work1.webp")',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize:"cover",
        backgroundRepeat: "no-repeat",
        
       
      }}
    >
        <div className="absolute inset-0 bg-black/55 opacity-70 z-20"></div>
      <div className=" relative px-[5%] md:px-[10%] z-40">
        {/* Section Header */}
        <div className=" mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-btnsecondary">{servicesData.heading.title}</span>{" "}
            <span className="text-btnsecondary">
              {servicesData.heading.titleAccent}
            </span>
          </h2>
          <p className="text-white text-lg leading-relaxed max-w-3xl">
            {servicesData.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white flex flex-col justify-center gap-3 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-x-6 space-y-4">
                  {/* Service Icon */}
                  <div className="">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-green-300" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                     
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                 
                </div>
                <Link
                        href={service.readMoreLink}
                        aria-label="Read More in Services page"
                        className="text-green-400 w-max hover:scale-105  font-medium text-sm whitespace-nowrap px-4 py-2 bg-primary  transition-all duration-300 rounded-full ml-[27px] sm:ml-[87px]"
                      >
                        Read More...
                      </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
