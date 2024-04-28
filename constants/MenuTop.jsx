import React from 'react'
import {Avatar, Divider} from "@nextui-org/react";
import {RiMenuFoldLine, RiMenuUnfoldLine} from "react-icons/ri";

export default function MenuTop({close, setClose, setW}) {
    const handleClose = () => {
        setW(close ? 300 : 100)
        setClose(!close)
    }
    return (
        <div className='w-full'>
            <div className='flex items-center justify-between'>
                {!close && 
                    <div className='flex m-5 gap-3 items-center' >
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="md" />
                        <strong >LOGO</strong>
                    </div>
                }
                { close ? 
                    <RiMenuUnfoldLine className='flex justify-end mx-9 my-5 cursor-pointer' onClick={handleClose} size={20} />
                    :
                    <RiMenuFoldLine className='m-5 cursor-pointer' onClick={handleClose} size={20} />
                }
            </div>
            <Divider />
        </div>
    )
}
