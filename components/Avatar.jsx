import React, { useEffect, useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar as A, User} from "@nextui-org/react";

export default function Avatar({ image, setImage}) {

    const avatars = [
        {name: "Zephyr Stone", fileName: "avatar-1", src: "/avatars/avatar-1.png"},
        {name: "Orion Drake", fileName: "avatar-2", src: "/avatars/avatar-2.png"},
        {name: "Seraphina Vale", fileName: "avatar-3", src: "/avatars/avatar-3.png"},
        {name: "Aurora Storm", fileName: "avatar-4", src: "/avatars/avatar-4.png"},
        {name: "Phoenix Knight", fileName: "avatar-5", src: "/avatars/avatar-5.png"},
        {name: "Nova Cascade", fileName: "avatar-6", src: "/avatars/avatar-6.png"},
        {name: "Astrid Nightfall", fileName: "avatar-7", src: "/avatars/avatar-7.png"},
        {name: "Atlas Everest", fileName: "avatar-8", src: "/avatars/avatar-8.png"},
        {name: "Luna Nova", fileName: "avatar-9", src: "/avatars/avatar-9.png"},
    ]

    
    // Show the first avatar
    const [selected, setSelected] = useState(
      avatars.find(avatar => avatar.fileName === "avatar-1").src
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
      <Dropdown size="xs" placement="right-end">
        <DropdownTrigger>
          <A
            isBordered
            as="button"
            className="transition-transform"
            src={selected}
            name="Zephyr Stone"
            alt="Avatar"
            size="lg"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" >
            {avatars.map((avatar, index) => {
              return (
                <DropdownItem className="h-14" key={index} onClick={() => {setSelected(avatar.src); setImage(null);}}>
                        <User
                            isBordered
                            avatarProps={{src: avatar.src}}
                            name={avatar.name}
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
