"use client"
import { Avatar } from '@nextui-org/react'
import React, { useEffect, useRef, useState } from 'react'

export default function Chat() {
    const chatRef = useRef(null)
    const [value, setValue] = useState('')
    const [messages, setMessages] = useState([]);
    const [active, setActive] = useState(false)

    const sendMessage = (value) => {
        if(value === ""){
            return
        }
        setMessages([
            ...messages,
            {id: messages.length + 1, text: value, user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', time: '12:00'}
        ])
        setValue('')
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            if(value === ""){
                return
            }
            setMessages([
                ...messages,
                {id: messages.length + 1, text: value, user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', time: '12:00'}
            ])
            setValue('')
        }
    }

    useEffect(() => {
        if(chatRef.current){
            window.scrollTo(
                0,
                chatRef.current.scrollHeight

            ) // Scroll to the bottom (100px) of the chat
        }
        if(value === ""){
            setActive(false)
        } else {
            setActive(true)
        }
        console.log(messages)
    }, [messages, value])
  return (
    <section onClick={() => {
        window.scrollTo(
            0,
            chatRef.current.scrollHeight
        )}
    
    } ref={chatRef} className='grid bg-red-400 relative max-w-full'>
        {messages.map((message, index) => (
            <div className={`mx-4 my-2 gap-2 max-w-screen-md ${message.id % 2 ? "justify-self-start" : "justify-self-end"} ${message.id === 1 && 'mt-32'} ${message.id === messages.length && 'mb-20'}`} key={index}>
                {message.id % 2 ? 
                <div className='flex items-end gap-2'>
                    <Avatar src={message.src} style={{
                        minWidth: '40px',
                    }} />
                    <div className='text-xs rounded-t-lg rounded-r-lg p-2 pb-3 bg-gray-200 max-w-full'>
                        <p className='text-orange-600 mb-3'>{message.user}</p>
                        <p className='break-words'>{message.text}</p>
                        <p className='flex justify-end text-[#585858]'>{message.time} ✔</p>
                    </div>  
                </div>
                :
                <div className='flex items-end gap-2'>
                    <div className='text-xs rounded-t-lg rounded-r-lg p-2 pb-3 bg-gray-200 max-w-full'>
                        <p className='text-green-300 mb-3'>{message.user}</p>
                        <p className='break-words'>{message.text}</p>
                        <p className='flex justify-end text-[#585858]'>{message.time} ✔</p>
                    </div> 
                    <Avatar src={message.src} style={{
                        minWidth: '40px',
                    }} />
                </div>
                }
            </div>
        ))}

        <div className='flex justify-center'>
            <div className='flex fixed bottom-5 px-3 w-1/2'>
                <input 
                    onKeyDown={handleKeyPress}
                    tabIndex="0" 
                    type="text" 
                    placeholder='Type a message' 
                    className='w-full px-3 py-5 border-2 drop-shadow-2xl shadow-inner border-gray-200 rounded-full'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    autoFocus
                />
                <button className={active? 'active-button' : 'inactive-button'} onClick={() =>sendMessage(value)}>
                    {/* <img src='/send.svg' width={25} style={
                        active ? // if active is true make the image stroke black otherwise gray
                        {stroke: 'black'} :
                        {stroke: 'blue'}
                    }/> */}
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke={active ? "#000000" : "#929292"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </section>
  )
}
