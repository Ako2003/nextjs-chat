import { IoArrowBackOutline } from "react-icons/io5";
import React from 'react'
import { TiContacts } from "react-icons/ti";
import Link from "next/link";

export default function Contacts({showContacts, setShowContacts, close, setClose, w, setW}) {
  const contacts = [
    {id: 1, name: "Jone", surname: "Smith", icon: <TiContacts size={20} />},
    {id: 2, name: "Doe", surname: "Mark", icon: <TiContacts size={20} />},
    {id: 3, name: "John", surname: "Swift", icon: <TiContacts size={20} />},
  ]
  return (
    <section style={{
      transition: "all 1s",
      transitionTimingFunction: "ease-in-out",
      width: `${w}px`,
    }}>
      {showContacts && 
        <section className={`h-screen border-r-1 relative overflow-y-auto`} style={{
          transition: "all 1s",
          transitionTimingFunction: "ease-in-out",
      }}>
        <div className="m-3 flex gap-2 cursor-pointer" onClick={() => setShowContacts(!showContacts)}>
            <IoArrowBackOutline />
            <p className="text-xs text-[#585858]">Back to main</p>
          </div>
          <div>
              <ul>
                  <li className='p-5 pb-2 text-xs text-[#585858]'>
                      <div>Contacts</div>
                  </li>
                  {contacts.map((item, index) => (
                      <li key={index} className={`flex items-center p-5 justify-between cursor-pointer ${close && "justify-center"}`} style={{
                          transition: "all 0.5s",
                      }}>
                          <Link href={`/user/${item.name}`} className='flex gap-4'>
                              {item.icon}
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
      }
    </section>
  )
}
