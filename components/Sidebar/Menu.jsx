"use client";

import Main from "./Main"
import Contacts from "./Contacts"
import Settings from "./Settings"
import { useState } from "react"



export default function Menu() {
  const [menu, setMenu] = useState("dashboard")
  const [toggle, setToggle] = useState(false)
  const [width, setWidth] = useState(300)

  return(
    <section>
      <div>
        {menu === "dashboard" && <Main setMenu={setMenu} close={toggle} setClose={setToggle} w={width} setW={setWidth}/>}
        {menu === "contacts" && <Contacts setMenu={setMenu} close={toggle} setClose={setToggle} w={width} setW={setWidth}/>}
        {menu === "settings" && <Settings setMenu={setMenu} close={toggle} setClose={setToggle} w={width} setW={setWidth}/>}
      </div>
    </section>
  )
}