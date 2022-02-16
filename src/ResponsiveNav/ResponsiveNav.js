import React from "react"
import "./ResponsiveNav.scss"
import { FaSearch, FaHistory } from "react-icons/fa"

const ResponsiveNav = ({ changeClass }) => {
  return (
    <div className="responsive-nav">
      <div className="responsive-nav-left">
        <img className="main-logo" src="./Logo/logo.svg" alt="Logo" />
        <button href="#" className="toggle-button" onClick={changeClass}>
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </button>
      </div>
      <div>
        <FaSearch className="responsive-icons" />
        <FaHistory className="responsive-icons responsive-history-icon" />
      </div>
    </div>
  )
}

export default ResponsiveNav
