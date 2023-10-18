import React from 'react'
import './hero.scss'
import {motion} from 'framer-motion'

export default function Hero() {

   const textVariants = {
    initial:{
      x:-500,
      opacity:0,
    },
    animate:{
      x:-0,
      opacity:1,
      transition:{
        duration:1,
        staggerChildren:0.1,
      }
    },
    scrollButton:{
      opacity:0,
      y:10,
      transition:{
        duration:2,
        repeat:Infinity
      }
    }
   };

   const SliderVariants = {
    initial:{
      x:0,
    
    },
    animate:{
      x:"220%",
      transition:{
       repeat:Infinity,
       repeatType:"mirror",
       duration: 20,
      }
    },
  }

  return (
   <>
      <div className="hero">
        <div className='wrapper'>
        <motion.div className="text" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Martin The Matrix</motion.h2>
          <motion.h1 variants={textVariants}>Web developer </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button  variants={textVariants}>See the Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          < motion.img variants={textVariants} animate="scrollButton" src="scroll.png" alt="" />
        </motion.div>
        </div>
        <motion.div className="slidingText" variants={SliderVariants} animate="animate" initial="initial">
          Web Developer
        </motion.div>
        <div className="imageC">
          <img src="hero.png" alt="" />
        </div>
      </div>
   </>
  )
}