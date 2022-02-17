import React from "react"
import "./Schedule.scss"
import ScheduleItem from "./ScheduleItem"

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const scheduleData = [
  {
    time: "07:00 AM",
    details: "Find Sessions",
  },
  {
    time: "08:00 AM",
    details:
      "BR1058 Exchange Search and knowledge discovery until Storage Technologies",
    exactTime: "08:00 AM - 08:45 AM",
  },
  {
    time: "09:00 AM",
    details: "Find Sessions",
  },
  {
    time: "10:00 AM",
    details: "BR1063 Write Data virtualization by Hadoop",
    exactTime: "10:00 AM - 10:45 AM",
  },
  {
    time: "11:00 AM",
    details: "Find Sessions",
  },
]

const d = new Date()
let day = days[d.getDay()]
let dayNumber = d.getDate()
let month = months[d.getMonth()]
let year = d.getYear() + 1900

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="schedule-header">
        <h1>{day}</h1>
        <p>{`${month} ${dayNumber}, ${year}`}</p>
      </div>
      {scheduleData.map((item, i) => {
        return (
          <ScheduleItem
            key={i}
            time={item.time}
            details={item.details}
            exactTime={item.exactTime}
          />
        )
      })}
    </div>
  )
}

export default Schedule
