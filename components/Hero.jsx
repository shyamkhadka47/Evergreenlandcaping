import { phone1 } from "@/utils/sitesetting";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "./Breadcrumb";

export default function Hero({ title, desc, imgsrc }) {
  return (
    <>
      <section className="flex-col items-start w-full h-[600px] sm:h-[400px] mt-[100px] relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#000000d9_30%,_#16a34a8a_60%,_transparent_100%)] z-[9]"></div>
        <Image
          src={imgsrc}
          width={600}
          height={400}
          alt="Landscaping in santa fe"
          className="w-full h-full object-cover"
        />

        <div className="px-[5%] md:px-[10%]  ">
          <div className="absolute z-40 max-w-3xl h-[300px]  top-12 flex flex-col gap-4 items-start pt-5">
            <Breadcrumb />
            <p className=" text-5xl text-btnsecondary font-bold capitalize">
              {title}
            </p>
            <h1 className="text-white text-lg">{desc}</h1>
            <div className="flex gap-2">
              <Link
                href={`tel:${phone1}`}
                className="py-3 px-4 rounded-lg bg-btnprimary text-white font-bold"
              >
                Call Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
