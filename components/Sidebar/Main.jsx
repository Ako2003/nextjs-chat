import React, { useState } from 'react'
import {Avatar, Divider} from "@nextui-org/react";
import { HiChartPie } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";
import { FaCalendar } from "react-icons/fa6";
import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuUnfoldLine } from "react-icons/ri";






export default function Main() {
    const [toggle, setToggle] = useState(false)
    const [width, setWidth] = useState('300')
    const menu = [
        {name: "Dashboard", icon: <HiChartPie size={20}/>},
        {name: "Contacts", icon: <TiContacts size={20} />},
        {name: "Calendar", icon: <FaCalendar size={20}/>},
    ]

    const handleToggle = () => {
        setWidth(toggle ? '300' : '0')
        setToggle(!toggle)
    }
  return (
    <section className={`h-screen border-r-1 relative w-[${width}px]`}>
        <div className='flex items-center justify-between'>
            <div className='flex m-5 gap-3 items-center'>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="md" />
                {!toggle && <strong>LOGO</strong>}
            </div>
            { toggle ? 
                <RiMenuUnfoldLine className='m-5 cursor-pointer' onClick={handleToggle} size={20} />
                :
                <RiMenuFoldLine className='m-5 cursor-pointer' onClick={handleToggle} size={20} />
            }
        </div>
        <Divider />
        <div>
            <ul>
                <li className='p-5 pb-2 text-xs text-[#585858]'>
                    <div>Main Menu</div>
                </li>
                {menu.map((item, index) => (
                    <li key={index} className={`flex items-center p-5 gap-4 ${toggle && "justify-center"}`}>
                        {item.icon}
                        {!toggle &&
                            <span>{item.name}</span>
                        }
                    </li>
                ))}
            </ul>
        </div>
        <Divider />
        <div>
            <ul>
                <li className='p-5 pb-2 text-xs text-[#585858]'>
                    <div>Futures</div>
                </li>
                {menu.map((item, index) => (
                    <li key={index} className={`flex items-center p-5 gap-4 ${toggle && "justify-center"}`}>
                        {item.icon}
                        {!toggle &&
                            <span>{item.name}</span>
                        }
                    </li>
                ))}
            </ul>
        </div>
        <Divider className='absolute bottom-20'/>
        <div className={`absolute bottom-5 mx-5 ${toggle && "left-7"}`}>
            <div className='flex justify-center items-center gap-2'>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="md" />
                {!toggle &&
                    <div>
                        <p>Akif Mursalov</p>
                        <p className='text-xs text-[#585858]'>akifmursalov@gmail.com</p>
                    </div>}
            </div>
        </div>
    </section>
  )
}
