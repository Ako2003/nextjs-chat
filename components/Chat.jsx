"use client"
import { Avatar } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

export default function Chat() {
    const [value, setValue] = useState('')
    const [messages, setMessages] = useState([
        {id:1, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden I have to add wraping overflow-hidden I have to add wraping overflow-hidden', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', time: '12:00'},
        {id:2, text: 'Lorem ipsum text', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', user: "Emin Bagirov", time: '12:00'},
        {id:3, text: 'This text is a bit longer than the previous, but not enough to be the longest one', user: 'Reyhan Feyziyeva', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', time: '12:00'},
        {id:4, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', time: '12:00'},
        {id:5, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', time: '12:00'},
        {id:6, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', time: '12:00'},
        {id:7, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', time: '12:00'},
        {id:8, text: 'That ', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', time: '12:00'},
    ]);

    const sendMessage = (value) => {
        setMessages([
            ...messages,
            {id: messages.length + 1, text: value, user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', time: '12:00'}
        ])
        setValue('')
    }

    useEffect(() => {
        console.log(messages)
    }, [messages])
  return (
    <section className='grid bg-red-300 border-t-1 relative'>
        {/* <h1 className='absolute bg-slate-700 opacity-90 text-gray-200 px-3 rounded-full top-24 right-[50%]'>Hello</h1> */}
        {messages.map((message) => (
            <div className={`m-4 gap-2 max-w-screen-md ${message.id % 2 ? "justify-self-start" : "justify-self-end"} ${message.id === 1 && 'mt-32'} ${message.id === messages.length && 'mb-20'}`}>
                {message.id % 2 ? 
                <div className='flex items-end gap-2'>
                    <Avatar src={message.src} style={{
                        minWidth: '40px',
                    }} />
                    <div className='text-xs rounded-t-lg rounded-r-lg p-2 pb-3 bg-gray-200'>
                        <p className='text-orange-600 mb-3'>{message.user}</p>
                        <p>{message.text}</p>
                        <p className='flex justify-end text-[#585858]'>{message.time} ✔</p>
                    </div>  
                </div>
                :
                <div className='flex items-end gap-2'>
                    <div className='text-xs rounded-t-lg rounded-r-lg p-2 pb-3 bg-gray-200'>
                        <p className='text-green-300 mb-3'>{message.user}</p>
                        <p>{message.text}</p>
                        <p className='flex justify-end text-[#585858]'>{message.time} ✔</p>
                    </div> 
                    <Avatar src={message.src} style={{
                        minWidth: '40px',
                    }} />
                </div>
                }
            </div>
        ))}

        <div className='fixed bottom-0 w-full'>
            <button className='absolute bottom-5 right-96' onClick={() =>sendMessage(value)}>Send</button>
            <input tabIndex="0" 
                type="text" 
                placeholder='Type a message' 
                className='w-full p-5 border-t-1 border-gray-200'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    </section>
  )
}
