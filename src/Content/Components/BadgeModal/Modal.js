import React from "react"
import "./Modal.scss"

const badgeDetails = [
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
]

const Modal = ({ changeDisplay }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title">Badge Output</h1>
        </div>
        <div className="modal-body">
          {badgeDetails.map((detail) => {
            return (
              <div>
                <h2>{detail.question}</h2>
                <p>{detail.answer}</p>
              </div>
            )
          })}
        </div>
        <div className="modal-footer">
          <button onClick={changeDisplay} className="modal-close-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
