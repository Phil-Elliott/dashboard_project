import React, { useEffect } from "react"
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

// closes modal with ESC key
const Modal = ({ changeDisplay, display }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      changeDisplay()
    }
  }

  // Allows ESC key to only be used to close
  useEffect(() => {
    if (display === true) {
      document.body.addEventListener("keydown", closeOnEscapeKeyDown)
    }
  }, [display])

  return (
    <div className={`modal ${display ? "show" : ""}`} onClick={changeDisplay}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1 className="modal-title">Edit User</h1>
        </div>
        <div className="modal-body">
          {badgeDetails.map((detail, i) => {
            return (
              <div key={i}>
                <h2>{detail.question}</h2>
                {/* <p>{detail.answer}</p> */}
                <input type="text" placeholder={detail.answer} />
              </div>
            )
          })}
        </div>
        <div className="modal-footer">
          <button onClick={changeDisplay} className="modal-close-btn">
            Close
          </button>
          <button onClick={changeDisplay} className="modal-save-btn">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
