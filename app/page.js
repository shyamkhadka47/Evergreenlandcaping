import Aboutus from "@/components/Aboutus";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import GardeningSection from "@/components/GardeningSection";
import HeroSection from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
    {/* <HeroSection/> */}
    <GardeningSection/>
    <Aboutus/>
    <Services/>
    <Gallery/>
    <FAQ/>
    <CTA/>
    
    </>
  );
}
