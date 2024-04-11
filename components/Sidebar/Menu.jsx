"use client";

import Main from "./Main"
import Contacts from "./Contacts"
import { useState } from "react"



export default function Menu() {
  const [switched, setSwitched] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [width, setWidth] = useState(300)

  return(
    <section>
      <div>
        <Main hideMain={switched} setHideMain={setSwitched} close={toggle} setClose={setToggle} w={width} setW={setWidth}/>
        <Contacts showContacts={switched} setShowContacts={setSwitched} close={toggle} setClose={setToggle} w={width} setW={setWidth}/>
      </div>
    </section>
  )
}