import React, { useEffect } from "react"
import "./Modal.scss"
import ModalInputItem from "./ModalInputItem"

// closes modal with ESC key
const Modal = ({
  changeDisplay,
  display,
  badgeDetails,
  changeBadgeDetails,
}) => {
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
              <ModalInputItem
                key={i}
                id={i}
                question={detail.question}
                answer={detail.answer}
                changeBadgeDetails={changeBadgeDetails}
              />
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
