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

const Nav = ({ navClass }) => {
  return (
    <div className="nav">
      <div className={navClass}>
        <div className="nav-main-top">
          <img src="./Logo/logo.svg" alt="Logo" />
          <FaSearch className="top-icons" />
          <FaHistory className="top-icons" />
          <span className="border"></span>
          <div
            style={{ paddingTop: "1.25rem" }}
            className="nav-icon nav-icon-home"
          >
            <FaHome />
          </div>
          {iconLinks.map((icon, i) => {
            return (
              <div key={i} className="nav-icon">
                {icon}
              </div>
            )
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
