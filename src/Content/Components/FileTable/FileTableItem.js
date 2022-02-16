import React, { useState, useEffect } from "react"

const FileTableItem = ({
  fileName,
  fileType,
  fileCreateDate,
  publishedStatus,
  sessionName,
  sessionCode,
  sessionStatus,
  checked,
}) => {
  const [itemIsChecked, setItemIsChecked] = useState(false)

  const checkItem = () => {
    setItemIsChecked(!itemIsChecked)
  }

  useEffect(() => {
    checked === true ? setItemIsChecked(true) : setItemIsChecked(false)
  }, [checked])

  return (
    <div className="fileTable-item-container" onClick={checkItem}>
      <div className="fileTable-checkbox">
        <input
          className="fileTable-check"
          type="checkBox"
          checked={itemIsChecked && "checked"}
        />
      </div>
      <p className="fileTable-file-name">{fileName}</p>
      <p className="fileTable-file-type">{fileType}</p>
      <p className="fileTable-create-date">{fileCreateDate}</p>
      <p className="fileTable-published-status">{publishedStatus}</p>
      <p className="fileTable-session-name">{sessionName}</p>
      <p className="fileTable-session-code">{sessionCode}</p>
      <p className="fileTable-session-status">{sessionStatus}</p>
    </div>
  )
}

export default FileTableItem
