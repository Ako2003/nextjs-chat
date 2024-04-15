import React from 'react'
import {Avatar} from "@nextui-org/react";

export default function Header() {
  return (
    <section className='fixed bg-[white] w-full z-10'>
      <div className='m-5'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-3'>
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" size="md" />
            <div>
              <div className='flex items-center gap-2'>
                <p>Akif Mursalov</p>
                <p className='text-xs text-[#585858]'>ID: #ABC123</p>
              </div>
              <p className='text-xs text-[#585858] gap-4'>last active 14:55</p>
            </div>
          </div>
          <div className='mx-24'>
            <img src='/search.svg' width={20}/>
          </div>
        </div>
      </div>
    </section>
  )
}
