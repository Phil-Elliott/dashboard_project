import React, { useState } from "react"
import "./App.scss"
import ResponsiveNav from "./ResponsiveNav/ResponsiveNav"
import Nav from "./Nav/Nav"
import Content from "./Content/Content"

function App() {
  const [navClass, setNavClass] = useState("nav-container active-side-nav")

  const changeClass = () => {
    navClass === "nav-container unactive-side-nav"
      ? setNavClass("nav-container active-side-nav")
      : setNavClass("nav-container unactive-side-nav")
  }

  return (
    <div className="App">
      <ResponsiveNav changeClass={changeClass} />
      <Nav navClass={navClass} />
      <Content />
    </div>
  )
}

export default App

/* 

  Create a responsive nav bar 
    Make left menu thats scrollable
    onClick expand rest of nav
    change hamburger icon to arrow 

*/
