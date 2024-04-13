import { Avatar } from '@nextui-org/react'
import React from 'react'

export default function Chat() {
    const messages = [
        {id:1, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden I have to add wraping overflow-hidden I have to add wraping overflow-hidden', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'},
        {id:2, text: 'Lorem ipsum text', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'},
        {id:3, text: 'This text is a bit longer than the previous, but not enough to be the longest one', user: 'Reyhan Feyziyeva', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'},
        {id:4, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'},
        {id:5, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'},
        {id:6, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'},
        {id:7, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'}
    ]
  return (
    <section className='grid bg-red-300 border-t-1 relative'>
        {/* <h1 className='absolute bg-slate-700 opacity-90 text-gray-200 px-3 rounded-full top-24 right-[50%]'>Hello</h1> */}
        {messages.map((message) => (
            <div className={`p-10 gap-2 max-w-screen-sm ${message.id % 2 ? "justify-self-start pt-15" : "justify-self-end"} ${message.id === 1 && 'mt-20'} ${message.id === 7 && 'mb-20'}`}>
                {message.id % 2 ? 
                <div className='flex items-end gap-2'>
                    <Avatar src={message.src} style={{
                        minWidth: '40px',
                    }} />
                    <div className='text-xs rounded-t-lg rounded-r-lg p-2 pb-3 bg-gray-200'>
                        <h1 className='text-base mb-3'>{message.user}</h1>
                        <p>{message.text}</p>
                    </div>  
                </div>
                :
                <div className='flex items-end gap-2'>
                    <div className='text-xs rounded-t-lg rounded-r-lg p-2 pb-3 bg-gray-200'>
                        <h1 className='text-base mb-3'>{message.user}</h1>
                        <p>{message.text}</p>
                    </div> 
                    <Avatar src={message.src} style={{
                        minWidth: '40px',
                    }} />
                </div>
                }
            </div>
        ))}

        <div className='fixed bottom-0 w-full'>
            <input type="text" placeholder='Type a message' className='w-full p-5 border-t-1 border-gray-200'/>
        </div>
    </section>
  )
}
