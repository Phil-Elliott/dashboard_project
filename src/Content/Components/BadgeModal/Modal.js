import React, { useEffect } from "react"
import "./Modal.scss"
import ModalInputItem from "./ModalInputItem"

// closes modal with ESC key
const Modal = ({
  changeDisplay,
  display,
  badgeDetails,
  changeBadgeDetails,
  saveChanges,
}) => {
  // Allows ESC key to only be used to close
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      changeDisplay()
    }
  }

  // Allows for enter key to save details
  const saveOnEnterKeyDown = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      console.log("Enter key was pressed. Run your function.")
      // event.preventDefault()
      saveChanges()
    }
  }

  useEffect(() => {
    if (display === true) {
      document.body.addEventListener("keydown", closeOnEscapeKeyDown)
      document.body.addEventListener("keydown", saveOnEnterKeyDown)
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
                display={display}
              />
            )
          })}
        </div>
        <div className="modal-footer">
          <button onClick={changeDisplay} className="modal-close-btn">
            Close
          </button>
          <button
            onClick={saveChanges}
            className="modal-save-btn"
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
