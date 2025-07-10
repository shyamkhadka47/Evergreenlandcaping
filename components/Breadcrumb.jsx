"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  return (
    <div className=" flex gap-2 mb-5">
      <Link href={"/"} aria-label="Homepage" className=" text-2xl font-bold text-green-300">
        Home
      </Link>
      <Link
        href={pathname}
        className="font-semibold  text-2xl capitalize text-white "
      >
        {pathname =="/" ? <></>: "/"}
       <span className="underline underline-offset-2"> {pathname.slice(1)}</span>
      </Link>
    </div>
  );
}
