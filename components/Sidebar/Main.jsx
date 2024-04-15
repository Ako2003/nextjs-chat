import React from 'react'
import MenuTop from '@/constants/MenuTop.jsx'
import {Avatar, Divider, Tooltip} from "@nextui-org/react";
import { HiChartPie } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";
import { FaCalendar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export default function Main({hideMain, setHideMain, close, setClose, w, setW}) {
    const menu = [
        {name: "Dashboard", icon: <HiChartPie size={20}/>},
        {name: "Contacts", icon: <TiContacts size={20} />},
        {name: "Calendar", icon: <FaCalendar size={20}/>},
    ]

    const handleHide = () => {
        setHideMain(!hideMain)
    }

  return (
      <section style={{
            transition: "all 1s",
            transitionTimingFunction: "ease-in-out",
            width: `${w}px`,
      }}>
        <MenuTop close={close} setClose={setClose} setW={setW} />
        {!hideMain &&
        <section className={`h-screen border-r-1 relative overflow-y-auto`} style={{
            transition: "all 1s",
            transitionTimingFunction: "ease-in-out",
        }}>
            <div>
                <ul>
                    <li className='p-5 pb-2 text-xs text-[#585858]'>
                        <div>Main Menu</div>
                    </li>
                    {menu.map((item, index) => (
                        <li key={index} onClick={() => handleHide()} className={`flex items-center p-5 cursor-pointer ${close && "justify-center"}`} style={{
                            transition: "all 0.5s",
                        }}>
                            <div className='flex gap-4'>
                                {item.icon}
                                {!close &&
                                <div>
                                    <span>{item.name}</span>
                                </div>
                                }
                            </div>
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
                        <li key={index} className={`flex items-center p-5 gap-4 cursor-pointer ${close && "justify-center"}`}>
                            {item.icon}
                            {!close &&
                                <span>{item.name}</span>
                            }
                        </li>
                    ))}
                </ul>
            </div>
            <Divider className='absolute bottom-20'/>
            <div className={`absolute bottom-5 left-7`}>
                <div className='flex justify-center items-center gap-2'>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="md" />
                    {!close &&
                        <div>
                            <p>Akif Mursalov</p>
                            <p className='text-xs text-[#585858]'>akifmursalov@gmail.com</p>
                        </div>}
                </div>
            </div>
        </section>
}
        </section>
  )
}
