"use client"
import React from 'react'
import Header from '@/components/Header';
import Menu from '@/components/Sidebar/Menu';
import Chat from '@/components/Chat';

export default function page() {
  return (
    <section>
      <Header />
      <Chat />
    </section>
  )
}
