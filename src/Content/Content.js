import React, { useState } from "react"
import "./Content.scss"
import BadgeOutput from "./Components/BadgeOutput/BadgeOutput"
import Schedule from "./Components/Schedule/Schedule"
import FileTable from "./Components/FileTable/FileTable"
import Modal from "./Components/BadgeModal/Modal"

const Content = () => {
  const [display, setDisplay] = useState(false)
  const [badgeDetails, setBadgeDetails] = useState([
    {
      question: "First Name",
      answer: "Allison",
    },
    {
      question: "Preferred First Name for Badge",
      answer: "Al",
    },
    {
      question: "Last Name",
      answer: "Profit",
    },
    {
      question: "Company",
      answer: "Bio-IT World",
    },
    {
      question: "Onsite-Badge Holders",
      answer: "JVA",
    },
    {
      question: "Onsite-Aux",
      answer: 1,
    },
  ])

  let badgeDetailsArr = badgeDetails

  const changeBadgeDetails = (id, answer) => {
    badgeDetailsArr[id].answer = answer
    setBadgeDetails(badgeDetailsArr)
  }

  // displays the modal
  const changeDisplay = () => {
    setDisplay(!display)
  }

  return (
    <div className="content">
      <div className="content-container">
        <div className="top-content">
          <BadgeOutput
            changeDisplay={changeDisplay}
            badgeDetails={badgeDetails}
          />
          <Schedule />
        </div>
        <FileTable className="fileTable" />
        <Modal
          changeDisplay={changeDisplay}
          display={display}
          badgeDetails={badgeDetails}
          changeBadgeDetails={changeBadgeDetails}
        />
      </div>
    </div>
  )
}

export default Content
