import React, { useState, useEffect } from "react"

const ModalInputItem = ({
  question,
  answer,
  id,
  changeBadgeDetails,
  display,
}) => {
  const [inputData, setInputData] = useState("")

  const change = (e) => {
    setInputData(e)
  }

  useEffect(() => {
    changeBadgeDetails(id, inputData)
  }, [inputData])

  useEffect(() => {
    setInputData("")
  }, [display])

  return (
    <div>
      <div>
        <h2>{question}</h2>
        <input
          type="text"
          placeholder={answer}
          value={inputData}
          onChange={(e) => change(e.target.value)}
        />
      </div>
    </div>
  )
}

export default ModalInputItem

// Have original answer stay if the new answer is blank  (useConditional and dont let it go through until the submit bttn happens)
// Have other buttons not submit new answer
