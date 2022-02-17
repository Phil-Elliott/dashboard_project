import React from "react"
import "./BadgeOutput.scss"
import { FaPencilAlt, FaTrash, FaPrint } from "react-icons/fa"

const BadgeOutput = ({ changeDisplay, badgeDetails }) => {
  return (
    <div className="badge-container">
      <div className="badge-title-container">
        <h1>Badge Output</h1>
        <FaPencilAlt onClick={changeDisplay} className="badge-icon" />
      </div>
      <div className="badge-info-container">
        {badgeDetails.map((detail, i) => {
          return (
            <div key={i}>
              <h2>{detail.question}</h2>
              <p>{detail.answer}</p>
            </div>
          )
        })}
      </div>
      <div className="badge-footer-container">
        <div className="badge-footer-left">
          <h2>Check-in:</h2>
          <p>09/16/16 7:51 AM</p>
        </div>
        <div className="badge-footer-right">
          <FaTrash className="trash-icon badge-icon" />
          <FaPrint className="badge-icon" />
        </div>
      </div>
    </div>
  )
}

export default BadgeOutput
