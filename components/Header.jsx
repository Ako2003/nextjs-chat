import React from 'react'
import { Avatar, Card } from "@nextui-org/react";
import { useParams } from "next/navigation";

export default function Header() {
  const params = useParams();
  const location = window.location.href

  return (
    <Card style={{
      position: 'fixed',
      width: 'calc(100% - 300px)',
      top: 0,
      zIndex: 1000,
    }}>
      <section>
        <div className='m-5'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-3'>
              <Avatar src={location.split("=")[1]} size="md" />
              <div>
                <div className='flex items-center gap-2'>
                  <p>{params.id.split('-').join(' ')}</p>
                  <p className='text-xs text-[#585858]'>ID: #ABC123</p>
                </div>
                <p className='text-xs text-[#585858] gap-4'>last active 14:55</p>
              </div>
            </div>
            <div className='mx-5'>
              <img src='/search.svg' width={25}/>
            </div>
          </div>
        </div>
      </section>
    </Card>
  )
}
