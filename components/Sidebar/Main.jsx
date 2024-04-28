"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import MenuTop from '@/constants/MenuTop.jsx'
import { HiChartPie } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";
import { FaCalendar } from "react-icons/fa6";
import {Avatar, Divider, Tooltip, Button} from "@nextui-org/react";
import {Card, CardBody, CardFooter} from "@nextui-org/react";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";



export default function Main({setMenu, close, setClose, w, setW}) {
    const [theme, setTheme] = useState();
    const sidebarMenu = [
        {name: "Dashboard", icon: <HiChartPie size={20}/>, url: "/dashboard", sidebar: ""},
        {name: "Contacts", icon: <TiContacts size={20} />, url: "#", sidebar: "contacts"},
        {name: "Calendar", icon: <FaCalendar size={20}/>, url: "/calendar", sidebar: ""},
    ]

    const handleMenu = (sidebar) => {
        setMenu(sidebar ? sidebar : "dashboard");
    }

    const handleTheme = () => {
        if (theme === 'dark') {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
            setTheme('light');
        } else {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
            setTheme('dark');
        }
    }

    useEffect(() => {
        console.log(theme)
        setTheme(localStorage.getItem("theme") ? localStorage.getItem('theme') : '');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    },[theme])
    return (
        <Card>
            <section style={{
                    transition: "all 1s",
                    transitionTimingFunction: "ease-in-out",
                    width: `${w}px`,
            }}>
                <section className={`h-screen relative overflow-y-auto`}>
                    <MenuTop close={close} setClose={setClose} setW={setW} />
                    <CardBody>
                        <div>
                            <ul>
                                <li className='p-5 pb-2 text-xs text-[#585858]'>
                                    <div>Main Menu</div>
                                </li>
                                {sidebarMenu.map((item, index) => (
                                    <li key={index} onClick={() => handleMenu(item.sidebar)} className={`flex items-center p-5 cursor-pointer ${close && "justify-center"}`}>
                                        <Link href={`${item.url}`}>
                                            <div className='flex gap-4'>
                                                {item.icon}
                                                {!close &&
                                                    <div>
                                                        <span>{item.name}</span>
                                                    </div>
                                                }
                                            </div>
                                        </Link>
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
                                {sidebarMenu.map((item, index) => (
                                    <li key={index} className={`flex items-center p-5 gap-4 cursor-pointer ${close && "justify-center"}`}>
                                        {item.icon}
                                        {!close &&
                                            <span>{item.name}</span>
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Divider className='absolute bottom-20'/>
                        <div className={`flex items-center justify-between absolute bottom-5 left-7`}>
                            <div className='flex justify-center items-center gap-2'>
                                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="md" />
                                {!close &&
                                    <div>
                                        <p>Akif Mursalov</p>
                                        <p className='text-xs text-[#585858]'>akifmursalov@gmail.com</p>
                                    </div>}
                            </div>
                            <div className='flex'>
                                {theme === 'dark' ? 
                                <div className="cursor-pointer">
                                    <Tooltip content='Light' placement='top'>
                                        <Button onClick={() => handleTheme()} variant="light"><MdOutlineLightMode size={20} /></Button>
                                    </Tooltip>
                                </div>
                                :
                                <div className="cursor-pointer">
                                    <Tooltip content='Dark' placement='top'>
                                    <Button onClick={() => handleTheme()} variant="light"><IoMoon size={20} /></Button>
                                    </Tooltip>
                                </div>
                                }
                            </div>
                        </div>
                    </CardFooter>
                </section>
            </section>
        </Card>
  )
}
