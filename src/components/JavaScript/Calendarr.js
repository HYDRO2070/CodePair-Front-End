import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import "../Style_Sheet/Calendarr.css"

const Calendarr = () => {
  return ( <>
  <div className="cal-main">

    <h3>Problems Solving Calendar</h3>
    <Calendar
    tileContent={null}
    calendarType="iso8601"/>
    </div>

</>)
}

export default Calendarr