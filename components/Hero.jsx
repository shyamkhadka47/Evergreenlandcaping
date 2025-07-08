import Image from "next/image";

export default function HeroSection({ bannervideo }) {
  return (
    <div className="relative my-[30px] md:mt-[120px] container mx-auto  max-w-[90vw] h-[600px] md:h-[450px] rounded-2xl overflow-hidden">
      {/* Background Image */}
      {
        <div className="absolute inset-0  w-full h-full">
          <video
            src="/Bob Haozous.mp4"
            muted
            autoPlay
            playsInline
            loop
            className="w-full h-full object-cover"
          ></video>

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-btnprimary/30 to-transparent"></div>
        </div>
      }

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-tight mb-6">
            {`Native American Storyteller Reflecting Culture, Identity, and History`}
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
            {`Discover the powerful sculptures and multimedia art by Bob Haozous, capturing the essence of history, humor, and modern life.`}
          </p>
        </div>
      </div>
    </div>
  );
}
