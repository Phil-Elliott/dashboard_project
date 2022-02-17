import React, { useState } from "react"
import "./ResponsiveNav.scss"
import { FaSearch, FaHistory, FaArrowLeft, FaArrowRight } from "react-icons/fa"

const ResponsiveNav = ({ changeClass }) => {
  const [navLogo, setNavLogo] = useState("ham")

  const changeLogo = (logo) => {
    setNavLogo(logo)
  }

  return (
    <div className="responsive-nav">
      <div className="responsive-nav-left">
        <img className="main-logo" src="./Logo/logo.svg" alt="Logo" />
        <button
          className="toggle-button"
          aria-label="display nav button"
          onClick={changeClass}
        >
          {navLogo === "ham" ? (
            <div className="toggle-button" onClick={() => changeLogo("left")}>
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
            </div>
          ) : navLogo === "left" ? (
            <FaArrowLeft
              className="arrow-logo"
              onClick={() => changeLogo("right")}
            />
          ) : (
            <FaArrowRight
              className="arrow-logo"
              onClick={() => changeLogo("left")}
            />
          )}
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
