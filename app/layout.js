import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import CallUsNow from "@/components/CallUsNow";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata={
  title:{
    default:"Landscaping in Santa Fe NM.",
    template:" %s | Evergreen Landscaping Best Landscaping in Santa Fe NM."
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color="#ff8f06" showSpinner={false} />
        <Navbar />
        {children}
        <CallUsNow/>
        <Footer />
      </body>
    </html>
  );
}
