import React, { useState } from "react"

const ModalInputItem = ({ question, answer, id, changeBadgeDetails }) => {
  const [inputData, setInputData] = useState("")

  const change = (e) => {
    setInputData(e)
    changeBadgeDetails(id, e)
  }

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
