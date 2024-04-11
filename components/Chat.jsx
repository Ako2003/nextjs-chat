import { Avatar } from '@nextui-org/react'
import React from 'react'

export default function Chat() {
    const messages = [
        {id:1, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'},
        {id:2, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden', user: 'Ravan Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'},
        {id:3, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden', user: 'Reyhan Feyziyeva', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'},
        {id:4, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'},
        {id:5, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'},
        {id:6, text: 'That is my message that has to be wrapped into the border and some shaddow has to be added. Additionally, I have to add wraping overflow-hidden', user: 'Akif Mursalov', src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'},
        
    ]
  return (
    <section className='grid bg-red-300 border-t-1'>
        {messages.map((message, index) => (
            <div className={`p-10 gap-2 w-1/2 ${message.id % 2 ? "justify-self-start pt-15" : "justify-self-end"}`}>
                {message.id % 2 ? 
                <div className='flex items-end gap-2'>
                    <Avatar src={message.src} style={{
                        width: '90px',
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
                        width: '90px',
                    }} />
                </div>
                }
            </div>
        ))}
    </section>
  )
}
