import React, { useEffect, useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar as A, User} from "@nextui-org/react";

export default function Avatar({ image, setImage}) {

    const avatars = [
        {name: "avatar-1", src: "/avatars/avatar-1.png"},
        {name: "avatar-2", src: "/avatars/avatar-2.png"},
        {name: "avatar-3", src: "/avatars/avatar-3.png"},
        {name: "avatar-4", src: "/avatars/avatar-4.png"},
        {name: "avatar-5", src: "/avatars/avatar-5.png"},
        {name: "avatar-6", src: "/avatars/avatar-6.png"},
        {name: "avatar-7", src: "/avatars/avatar-7.png"},
        {name: "avatar-8", src: "/avatars/avatar-8.png"},
        {name: "avatar-9", src: "/avatars/avatar-9.png"},
    ]

    
    // Show the first avatar
    const [selected, setSelected] = useState(
      avatars.find(avatar => avatar.name === "avatar-1").src
    );
    
      useEffect(() => {
        if(image){
          setSelected(image)
          setImage(image)
        } else{
          setImage(selected)
        }
      },[selected, image])
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="right-start">
        <DropdownTrigger>
          <A
            isBordered
            as="button"
            className="transition-transform"
            src={selected}
            alt="Avatar"
            size="lg"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
            {avatars.map((avatar, index) => {
                return (
                    <DropdownItem key={index} onClick={() => {setSelected(avatar.src); setImage(null);}}>
                        <A
                            isBordered
                            src={avatar.src}
                            alt="Avatar"
                            size="lg"
                        />
                    </DropdownItem>
                )
            })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
