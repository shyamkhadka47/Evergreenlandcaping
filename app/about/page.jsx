
import Hero from '@/components/Hero'
import React from 'react'

const title="About Us"
const desc="Evergreen Landscaping helps people in Santa Fe make their yards look great. We build with stones (hardscaping), set up watering (irrigation), and remove snow. We love nature and work hard to keep outdoor spaces clean, safe, and happy."
const imgsrc="/5.webp"
const page = () => {
  return (
    <div><Hero title={title} desc={desc} imgsrc={imgsrc}/></div>
  )
}

export default page