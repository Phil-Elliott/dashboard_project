import React, { useState } from "react"
import "./FileTable.scss"
import FileTableItem from "./FileTableItem"

const tableData = [
  {
    fileName: "New Microsoft PowerPoint Presentation_1504734033671001aMvB.pptx",
    fileType: "Presentation",
    fileCreateDate: "September 06, 2017 | 02:40 PM",
    publishedStatus: "Not Published",
    sessionName: "Reject Data integration until Column-oriented databases",
    sessionCode: "BR1000",
    sessionStatus: "Accepted",
  },
  {
    fileName: "Portugal (2)_151215423334140018toT.ppx",
    fileType: "Presentation",
    fileCreateDate: "December 01, 2017 | 10:50 AM",
    publishedStatus: "Not Published",
    sessionName: "Promise Data virtualization for Hadoop",
    sessionCode: "BR1003",
    sessionStatus: "Accepted",
  },
  {
    fileName: "Portugal (2)_151215423334140018toT_1512162178268001wXbS.ppx",
    fileType: "Presentation",
    fileCreateDate: "December 01, 2017 | 01:02 PM",
    publishedStatus: "Not Published",
    sessionName: "Promise Data virtualization for Hadoop",
    sessionCode: "BR1003",
    sessionStatus: "Accepted",
  },
  {
    fileName: "Session Scanning Training.pptx",
    fileType: "Presentation",
    fileCreateDate: "April 16, 2018 | 10:36 AM",
    publishedStatus: "Not Published",
    sessionName: "Reach in-memory data fabric unlike PIG",
    sessionCode: "BR1005",
    sessionStatus: "Accepted",
  },
  {
    fileName: "PPT TEST2_1498603851830001mOeD_1517269636907001D3OS.pptx",
    fileType: "Presentation",
    fileCreateDate: "April 16, 2018 | 12:50 PM",
    publishedStatus: "Not Published",
    sessionName: "Reach in-memory data fabric unlike PIG",
    sessionCode: "BR1005",
    sessionStatus: "Accepted",
  },
  {
    fileName: "Presentation1_1499782389871001Qvcf.pptx",
    fileType: "Presentation",
    fileCreateDate: "July 11, 2017 | 07:13 AM",
    publishedStatus: "Not Published",
    sessionName: "Particpate Stream analytics throughout SkyTree",
    sessionCode: "BR1019",
    sessionStatus: "Accepted",
  },
  {
    fileName: "Sweet Preso.pptx",
    fileType: "Presentation",
    fileCreateDate: "November 13, 2017 | 02:59 PM",
    publishedStatus: "Published",
    sessionName: "Add Data integration upon Column-oriented databases",
    sessionCode: "BR1020",
    sessionStatus: "Accepted",
  },
]

const FileTable = () => {
  const [checked, setChecked] = useState(false)

  // checks or unchecks all checkboxs
  const changeChecked = () => {
    setChecked(!checked)
  }

  return (
    <div className="fileTable">
      <table className="fileTable-container ">
        <tbody>
          <tr
            className="fileTable-header-container fileTable-item-container"
            onClick={changeChecked}
          >
            <td className="fileTable-checkbox">
              <input
                aria-label="checkbox"
                className="fileTable-check"
                type="checkBox"
                checked={checked && "checked"}
                onChange={changeChecked}
              />
            </td>
            <td className="fileTable-file-name">File Name</td>
            <td className="fileTable-file-type">File Type</td>
            <td className="fileTable-create-date">File Create Date</td>
            <td className="fileTable-published-status">Published Status</td>
            <td className="fileTable-session-name">Session Name</td>
            <td className="fileTable-session-code">Session Code</td>
            <td className="fileTable-session-status">Session Status</td>
          </tr>
          {tableData.map((item, i) => {
            return (
              <FileTableItem
                key={item.fileName}
                fileName={item.fileName}
                fileType={item.fileType}
                fileCreateDate={item.fileCreateDate}
                publishedStatus={item.publishedStatus}
                sessionName={item.sessionName}
                sessionCode={item.sessionCode}
                sessionStatus={item.sessionStatus}
                checked={checked}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default FileTable
