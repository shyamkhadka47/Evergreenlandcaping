import Aboutus from "@/components/Aboutus";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import GardeningSection from "@/components/GardeningSection";
import Hero from "@/components/Hero";

import Services from "@/components/Services";

const title = "We care for every detail.";
const desc =
  "Evergreen Landscaping specializes in professional landscaping in Santa Fe, offering expert hardscaping, efficient irrigation systems, and reliable snow removal services to create stunning, low-maintenance outdoor spaces for homes and businesses year-round.";
const imgsrc = "/ourwork4.webp";


export default function Home() {
  return (
    <>
   <Hero title={title} desc={desc} imgsrc={imgsrc}/>
    <GardeningSection/>
    <Aboutus/>
    <Services/>
    <Gallery/>
    <FAQ/>
    <CTA/>
    
    </>
  );
}
