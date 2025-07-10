
import Hero from '@/components/Hero'
import React from 'react'

const title="Contact Us"
const desc="Have questions about landscaping in Santa Fe? Want help with hardscaping, irrigation, or snow removal? Contact Evergreen Landscaping! We’re ready to listen and help make your outdoor space beautiful and safe all year long. Call or message us today!."
const imgsrc="/4.webp"
const page = () => {
  return (
    <div><Hero title={title} desc={desc} imgsrc={imgsrc}/></div>
  )
}

export default page