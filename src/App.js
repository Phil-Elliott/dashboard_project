import React from "react"
import "./App.scss"
import Nav from "./Nav/Nav"
import Content from "./Content/Content"

function App() {
  return (
    <div className="App">
      <Nav />
      <Content />
    </div>
  )
}

export default App

/* 

  Create a responsive nav bar 
    Create top nav 
    Have hamburger button 
    Make left menu thats scrollable
    onClick expand rest of nav
    change hamburger icon to arrow 

*/
