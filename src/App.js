import React, { useState } from "react"
import "./App.scss"
import ResponsiveNav from "./ResponsiveNav/ResponsiveNav"
import Nav from "./Nav/Nav"
import Content from "./Content/Content"

function App() {
  const [navClass, setNavClass] = useState("nav-container unactive-side-nav")

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
