import React from 'react'
import Link from 'next/link'

export default function Settings() {
    const settings = [
        {id: 1, name: "Profile"},
        {id: 2, name: "Account"},
        {id: 3, name: "Security"},
        {id: 4, name: "Notifications"},
        {id: 5, name: "Billing"},
        {id: 6, name: "Help"},
    ]
  return (
    <section style={{
        transition: "all 1s",
        transitionTimingFunction: "ease-in-out",
    }}>
        <div>
            <ul>
                <li className='p-5 pb-2 text-xs text-[#585858]'>
                    <div>Settings</div>
                </li>
                {settings.map((item, index) => (
                    <li key={index} className={`flex items-center p-5 justify-between cursor-pointer`} style={{
                        transition: "all 0.5s",
                    }}>
                        <Link href={`/settings/${item.name}`} className='flex gap-4'>
                            {!close &&
                            <div>
                                <span>{item.name}</span>
                            </div>
                            }
                        </Link>
                    </li>
                ))}
            </ul>
        </div>        
    </section>
  )
}
