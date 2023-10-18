import React, { useState } from 'react'
import './sidebar.scss'
import Links from "../Sidebar/links/Links"
import ToggleButton from "../Sidebar/togglebutton/ToggleButton"
import { motion } from 'framer-motion'

export default function Sidebar() {

   const[Show,SetShow] =useState(false)

  const varianrs = {
     open:{
      clipPath: "circle(1200px at 50px 50px)",
      trasition:{
        type:"spring",
        stiffness:20,
      }
     },
     closed:{
      clipPath: "circle(30px at 50px 50px)",
      trasition:{
         deley:0.5,
         type: "spring",
         stiffness:"400",
         damping:40
      }
     }
  }
  const [open, setOpen] = useState(false);

  return (
    <>
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
          <motion.div className="bg" variants={varianrs}>
          <Links/>
          </motion.div>
          <ToggleButton setOpen={setOpen}/>
        </motion.div>
    </>
  )
}
