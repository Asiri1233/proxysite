import Banners from '@/components/Banner'
import GetProxies from '@/components/GetProxies'
import React from 'react'

const page = () => {
  return (
    <div className=' w-full flex'>
      <div className='mx-auto mt-2rem'>
        <div className='flex gap-2 flex-col md:flex-row items-center'>
      <Banners url="https://i.imgur.com/gyoAm7J.jpeg" link="https://www.pixelmp.store/"/>
      <Banners url="https://media.discordapp.net/attachments/1106796662170591353/1126278898129305650/image.png" link="https://www.pixelmp.store/"/>

        </div>
        <div>
          <GetProxies />
        </div>

      </div>
    </div>
  )
}

export default page