import React from "react"
import "./Nav.scss"
import {
  FaSearch,
  FaHistory,
  FaHome,
  FaCompass,
  FaAddressBook,
  FaDesktop,
  FaUserFriends,
  FaFolder,
  FaElementor,
  FaBookOpen,
  FaCity,
  FaChartBar,
  FaAngleDoubleRight,
} from "react-icons/fa"

const iconLinks = [
  <FaCompass />,
  <FaAddressBook />,
  <FaDesktop />,
  <FaUserFriends />,
  <FaFolder />,
  <FaElementor />,
  <FaBookOpen />,
  <FaCity />,
  <FaChartBar />,
]

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-main-top">
          <img src="./Logo/logo.svg" alt="Logo" />
          <FaSearch className="top-icons" />
          <FaHistory className="top-icons" />
          <span className="border"></span>
          <div style={{ paddingTop: "1.25rem" }} className="nav-icon">
            <FaHome />
          </div>
          {iconLinks.map((icon, i) => {
            return <div className="nav-icon">{icon}</div>
          })}
        </div>
        <div className="nav-bottom">
          <span className="border"></span>
          <FaAngleDoubleRight />
        </div>
      </div>
    </div>
  )
}

export default Nav

/*
  create mixins 
  fix up bottom - (try to use less code)
  should i break up the code a little (maybe not nest everything )


*/
