"use client";

import { useEffect, useState, useRef } from "react";
import { Tooltip, Button } from "flowbite-react";
import {Avatar, Divider} from "@nextui-org/react";
import { IoPersonAdd } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";



export default function Navbar() {
    const [minWidth, maxWidth, defaultWidth] = [200, 500, 350];
    const [contacts, setContacts] = useState([]);
    const [width, setWidth] = useState(defaultWidth)
    const isResized = useRef(false);

    const menu = [
      {name: "Add Contact", tooltip: "Add a contact", icon: <IoPersonAdd color="white" size={20} className="cursor-pointer"/>},
      {name: "Profile", tooltip: "Profile", icon: <CgProfile color="white" size={20} className="cursor-pointer"/>}
    ]

    // Function to fetch data from the API
    async function fetchData() {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];
        const name = `${user.name.first} ${user.name.last}`;
        const avatar = user.picture.thumbnail;
        return { name: name, surname: user.name.last, avatar: avatar };
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    }
  
    // Function to fetch data multiple times and update state
    async function fetchMultipleTimes(times) {
      const newContacts = [];
      for (let i = 0; i < times; i++) {
        const contact = await fetchData();
        if (contact) {
          newContacts.push(contact);
        }
      }
      setContacts(newContacts);
    }
  
    // Fetch data on component mount
    useEffect(() => {
      fetchMultipleTimes(20); // Fetch data 5 times on component mount
      window.addEventListener("mousemove", (e) => {
        if (!isResized.current) {
          return;
        }
      
        setWidth((previousWidth) => {
          const newWidth = previousWidth + e.movementX / 2;
      
          const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth;
      
          return isWidthInRange ? newWidth : previousWidth;
        });
      });
      window.addEventListener("mouseup", () => {
        isResized.current = false;
      });
    }, []);

  return (
    <section className="flex">
      <div>
        <aside class="w-15 h-screen bg-gray-850">
          <div class="px-3 py-4">
            <ul>
              {menu.map((item, index) => {
                return (
                  <li className="my-5" key={index}>
                    <Tooltip content={item.tooltip} style="light" placement="right">
                      {item.icon}
                    </Tooltip>
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>
      </div>
      <div className="text-white">
        <aside className="h-screen shadow-2xl overflow-y-auto" style={{ width: `${width}px`}} >
          <div class="px-3 py-4 bg-[#202E4B]">
            <a href="https://flowbite.com/" class="flex justify-between ps-2.5 mb-5">
              {width <= 250 ? "" :
              <div className="flex">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
                <span class="text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </div>
              }
              <span class="text-xl font-semibold whitespace-nowrap dark:text-white">Chats</span>
            </a>
            <Divider />
            <ul>
              {contacts.map((contact, index) => {
                return (
                    <li className="focus:bg-gray-200" key={index}>
                      <div style={{ userSelect: 'none'}} 
                        class="flex items-center px-1 py-3 gap-2 rounded-lg hover:bg-gray-600">
                          <Avatar
                              showFallback 
                              src={contact.avatar}
                              
                          />
                          <section>
                            <p style={{ maxWidth: `${width - 75}px`, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {contact.name}
                            </p>
                            <p 
                            className="text-xs text-gray-500"
                            style={{ maxWidth: width - 75, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            Software Engineer with over than 10 year of experience in web development. I'm passionate about new technologies and making things happen.
                            </p>
                          </section>
                      </div>
                    </li>
                )})}
            </ul>
          </div>
        </aside>
      </div>
      <div 
      className="w-2 hover:bg-gray-500 hover:cursor-col-resize"
      onMouseDown={() => {
        isResized.current = true;
      }}/>
    </section>

  )
}
