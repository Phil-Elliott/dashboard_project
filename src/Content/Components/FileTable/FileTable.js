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

  const changeChecked = () => {
    setChecked(!checked)
  }

  return (
    <div className="fileTable-container ">
      <div className="fileTable-header-container fileTable-item-container">
        <div className="fileTable-checkbox">
          <input
            onClick={changeChecked}
            className="fileTable-check"
            type="checkBox"
          />
        </div>
        <p className="fileTable-file-name">File Name</p>
        <p className="fileTable-file-type">File Type</p>
        <p className="fileTable-create-date">File Create Date</p>
        <p className="fileTable-published-status">Published Status</p>
        <p className="fileTable-session-name">Session Name</p>
        <p className="fileTable-session-code">Session Code</p>
        <p className="fileTable-session-status">Session Status</p>
      </div>
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
    </div>
  )
}

export default FileTable

/* 
  put header inside and have clicked if classname is header or whatever 
  can then click full header 



*/
