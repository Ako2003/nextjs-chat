"use client";

import Main from "./Main"
import Contacts from "./Contacts"



export default function Menu() {
  return(
    <section>
      <div className="flex">
        <div>
          <Main />
        </div>
        <div>
          <Contacts />
        </div>
      </div>
    </section>
  )
}