import { phone1 } from '@/utils/sitesetting';
import Link from 'next/link'
import React from 'react'

import { MdPhone } from 'react-icons/md';


const CallUsNow = () => {
  return (
    <div className='bg-[#4ade80] w-[10px] h-[10px] rounded-full z-[9999] p-8 fixed right-0 top-[50%] flex justify-center items-center'> <Link href={`tel:${phone1}`}> <MdPhone size={30} className='text-primary text-4xl' aria-label='Call Us Now'/> </Link></div>
  )
}

export default CallUsNow