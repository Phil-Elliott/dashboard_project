import React, { useState, useEffect } from "react"
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

  let badgeDetailsArr = [
    {
      question: "First Name",
      answer: "",
    },
    {
      question: "Preferred First Name for Badge",
      answer: "",
    },
    {
      question: "Last Name",
      answer: "",
    },
    {
      question: "Company",
      answer: "",
    },
    {
      question: "Onsite-Badge Holders",
      answer: "",
    },
    {
      question: "Onsite-Aux",
      answer: "",
    },
  ]

  // Changes the answers in the badgeDetailsArr to what is typed in the input
  const changeBadgeDetails = (id, answer) => {
    badgeDetailsArr[id].answer = answer
    console.log(badgeDetailsArr[id].answer)
  }

  // displays the modal
  const changeDisplay = () => {
    setDisplay(!display)
  }

  // Saves the data that was typed - from clicking save btn or pressing enter
  const saveChanges = () => {
    setBadgeDetails(
      badgeDetails.map((item, i) => {
        return badgeDetailsArr[i].answer ? (item = badgeDetailsArr[i]) : item
      })
    )
    changeDisplay()
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
          saveChanges={saveChanges}
        />
      </div>
    </div>
  )
}

export default Content
