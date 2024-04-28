import { IoArrowBackOutline } from "react-icons/io5";
import React, { useEffect } from 'react'
import {Card, CardBody, CardFooter} from "@nextui-org/react";
import { TiContacts } from "react-icons/ti";
import Link from "next/link";

export default function Contacts({setMenu, close, setClose, w, setW}) {

  const contacts = [
    {id: 1, name: "Jone", surname: "Smith", icon: <TiContacts size={20} />, image:"https://randomuser.me/api/portraits/women/55.jpg", last_message: "Hello, how are you?"},
    {id: 2, name: "Doe", surname: "Mark", icon: <TiContacts size={20} />, image: "https://randomuser.me/api/portraits/men/27.jpg", last_message: "Everything is fine."},
    {id: 3, name: "John", surname: "Swift", icon: <TiContacts size={20} />, image: "https://randomuser.me/api/portraits/men/5.jpg", last_message: "I'm going to the store."},
    {id: 4, name: "Doe", surname: "Mark", icon: <TiContacts size={20} />, image:"https://randomuser.me/api/portraits/lego/8.jpg", last_message: "I'm going to the store. Would you like to come with me?"},
    {id: 5, name: "John", surname: "Swift", icon: <TiContacts size={20} />, image:"https://randomuser.me/api/portraits/men/40.jpg", last_message: "Can you help me with my homework? I'm stuck."},
    {id: 6, name: "Doe", surname: "Mark", icon: <TiContacts size={20} />, image:"https://randomuser.me/api/portraits/women/26.jpg", last_message: "Quick question, do you know how to cook?"},
    {id: 7, name: "John", surname: "Swift", icon: <TiContacts size={20} />, image:"https://randomuser.me/api/portraits/women/43.jpg", last_message: "No, I don't know how to cook. I can teach you if you want."},
    {id: 8, name: "Mark", surname: "Twen", icon: <TiContacts size={20} />, image:"https://randomuser.me/api/portraits/men/38.jpg", last_name: "I want to watch a movie. Do you want to come? I'm going to the cinema. Let me know if you want to come with me. I want to watch a movie. Do you want to come? I'm going to the cinema. Let me know if you want to come with me. I want to watch a movie. Do you want to come? I'm going to the cinema. Let me know if you want to come with me."},
    {id: 9, name: "John", surname: "Swift", icon: <TiContacts size={20} />, image:"https://randomuser.me/api/portraits/men/8.jpg", last_message: "I'm going to the store. Would you like to come with me?"},
    {id: 10, name: "Doe", surname: "Mark", icon: <TiContacts size={20} />, image:"https://randomuser.me/api/portraits/women/8.jpg", last_message: "I love you.❤"},
    {id: 11, name: "John", surname: "Swift", icon: <TiContacts size={20} />, image:"https://randomuser.me/api/portraits/women/72.jpg", last_message: "Love you too.❤❤❤"},
    {id: 12, name: "Doe", surname: "Mark", icon: <TiContacts size={20} />, image:"https://randomuser.me/api/portraits/men/81.jpg", last_message: "Messanger is the best. I love it. I can't live without it."},
    {id: 13, name: "John", surname: "Swift", icon: <TiContacts size={20} />, image:"https://randomuser.me/api/portraits/men/44.jpg", last_message: "I'm going to the store. Would you like to come with me?"},
    {id: 14, name: "Doe", surname: "Mark", icon: <TiContacts size={20} />, image:"https://randomuser.me/api/portraits/lego/7.jpg", last_message: "I'm going to the store. Would you like to come with me?"},
    {id: 15, name: "John", surname: "Swift", icon: <TiContacts size={20} />, image:"https://randomuser.me/api/portraits/women/10.jpg", last_message: "I'm going to the store. Would you like to come with me? I'm going to the store. Would you like to come with me? I'm going to the store. Would you like to come with me? I'm going to the store. Would you like to come with me?I'm going to the store. Would you like to come with me?I'm going to the store. Would you like to come with me?"},
  ]
  return (
    <Card>
      <section style={{
        transition: "all 1s",
        transitionTimingFunction: "ease-in-out",
        width: `${w}px`,
      }}>
        <section className={`h-screen relative overflow-y-auto`}>
        <div className="m-3 flex gap-2 cursor-pointer" onClick={() => setMenu("dashboard")}>
            <IoArrowBackOutline color={"#585858"} />
            <p className="text-xs text-[#585858]">Back to main</p>
          </div>
          <div>
              <ul>
                  <li className='p-5 pb-2 text-xs text-[#585858]'>
                      <div>Contacts</div>
                  </li>
                  {contacts.map((item, index) => (
                      <li key={index} className={`flex items-center p-5 justify-between cursor-pointer hover:bg-[#f4f4f4] dark:hover:bg-[#2e3036]	  focus:opacity-65	 ${close && "justify-center"}`}>
                          <Link href={`/user/${item.name}-${item.surname}?image=${(item.image)}`} className='flex gap-4 items-center'>
                              <img src={item.image} width={50} height={50} className='rounded-full' />
                              {!close &&
                              <div>
                                  <span>{item.name} {item.surname}</span>
                                  <p className="text-xs text-[#585858]">{item.last_message}</p>
                              </div>
                              }
                          </Link>
                      </li>
                  ))}
              </ul>
          </div>
        </section>
      </section>
    </Card>
  )
}
