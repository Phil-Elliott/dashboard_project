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
    <tr className="fileTable-item-container" onClick={checkItem}>
      <div className="fileTable-checkbox">
        <input
          className="fileTable-check"
          type="checkBox"
          checked={itemIsChecked && "checked"}
        />
      </div>
      <td className="fileTable-file-name">{fileName}</td>
      <td className="fileTable-file-type">{fileType}</td>
      <td className="fileTable-create-date">{fileCreateDate}</td>
      <td className="fileTable-published-status">{publishedStatus}</td>
      <td className="fileTable-session-name">{sessionName}</td>
      <td className="fileTable-session-code">{sessionCode}</td>
      <td className="fileTable-session-status">{sessionStatus}</td>
    </tr>
  )
}

export default FileTableItem
