import React from "react"
import "./app.scss"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Parallax from "./Components/Parallax/Parallax"
import Services from "./Components/services/Services"
import Portfolio from "./Components/portfolio/Portfolio"
import Contact from "./Components/Contact/Contact"


function App() {

  return (
    <>
       <section>
        <Navbar/>
        <Hero/>
       </section>
         <section><Parallax type="services"/></section>
         <section><Services/></section>
         <section><Parallax type="portfolio"/></section>
           <Portfolio/>
         <section><Contact/></section>
    </>
  )
}

export default App
