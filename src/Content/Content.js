import React, { useState } from "react"
import "./Content.scss"
import BadgeOutput from "./Components/BadgeOutput/BadgeOutput"
import Schedule from "./Components/Schedule/Schedule"
import FileTable from "./Components/FileTable/FileTable"
import Modal from "./Components/BadgeModal/Modal"

const Content = () => {
  const [display, setDisplay] = useState(false)

  const changeDisplay = () => {
    setDisplay(!display)
  }

  return (
    <div className="content">
      <div className="content-container">
        <div className="top-content">
          <BadgeOutput changeDisplay={changeDisplay} />
          <Schedule />
        </div>
        <FileTable className="fileTable" />
        <Modal changeDisplay={changeDisplay} display={display} />
      </div>
    </div>
  )
}

export default Content
