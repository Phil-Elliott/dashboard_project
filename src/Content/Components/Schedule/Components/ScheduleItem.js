import React from "react"
import { FaPencilAlt, FaTrash } from "react-icons/fa"

const ScheduleItem = ({ time, details, exactTime }) => {
  return (
    <div className="schedule-item">
      <div className="schedule-item-info">
        <p className="schedule-item-time">{time}</p>
        <div>
          {details === "Find Sessions" ? (
            <p className="shedule-details-purple shedule-items-details">
              {details}
            </p>
          ) : (
            <p className="shedule-items-details">{details}</p>
          )}
          <p>{exactTime}</p>
        </div>
      </div>
      {exactTime && (
        <div className="schedule-items-icons">
          <FaPencilAlt className="schedule-item-pencil schedule-item-logo" />
          <FaTrash className="schedule-item-logo" />
        </div>
      )}
    </div>
  )
}

export default ScheduleItem
