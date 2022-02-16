import React from "react"
import "./Content.scss"
import BadgeOutput from "./Components/BadgeOutput/BadgeOutput"
import Schedule from "./Components/Schedule/Schedule"
import FileTable from "./Components/FileTable/FileTable"

const Content = () => {
  return (
    <div className="content">
      <div className="content-container">
        <div className="top-content">
          <BadgeOutput />
          <Schedule />
        </div>
        <FileTable />
      </div>
    </div>
  )
}

export default Content
