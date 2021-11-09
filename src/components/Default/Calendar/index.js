import React, {useEffect, useState} from "react";
import moment from "moment";
import buildCalender from "./build";
import Left from "./left.svg";
import Right from "./right.svg";

import "./Calendar.scss";

function Calendar(props) {
  const [value, setValue] = useState(moment())
  const [calender, SetCalender] = useState([])

  // var om te zien welke dag het vandaag is (bv maandag)
  const weekDay = moment().isoWeekday()

  useEffect(() => {
    SetCalender(buildCalender(value))
  }, [value])

  function currMonthName() {
    return value.format("MMM")
  }

  function currYear() {
    return value.format("YYYY")
  }

  function prevMonth() {
    return value.clone().subtract(1, "month")
  }

  function nextMonth() {
    return value.clone().add(1, "month")
  }
 
  return (
    <section className="c-calendar">
      <div className="c-cal-header">
        <h2 className="c-cal-title">Calendar</h2>
        <div className="c-cal-monthyear">
          <div onClick={() => setValue(prevMonth())}>
            <img src={Left} className="c-cal-left"/>
          </div>

          <p className="c-cal-selected-month">{currMonthName()} {currYear()}</p>

          <div onClick={() => setValue(nextMonth())}>
            <img src={Right} className="c-cal-right"/>
          </div>
        </div>
      </div>

      <div className="c-calendar-full">
        <div className="c-calendar-week c-calender-weekdays">
          <div className={weekDay === 7 ? 'c-calender-today' : 'c-calendar-weekday'}>S</div>
          <div className={weekDay === 1 ? 'c-calender-today' : 'c-calendar-weekday'}>M</div>
          <div className={weekDay === 2 ? 'c-calender-today' : 'c-calendar-weekday'}>T</div>
          <div className={weekDay === 3 ? 'c-calender-today' : 'c-calendar-weekday'}>W</div>
          <div className={weekDay === 4 ? 'c-calender-today' : 'c-calendar-weekday'}>T</div>
          <div className={weekDay === 5 ? 'c-calender-today' : 'c-calendar-weekday'}>F</div>
          <div className={weekDay === 6 ? 'c-calender-today' : 'c-calendar-weekday'}>S</div>
        </div>
        {calender.map((week, index) => (
          <div key={index} className="c-calendar-week">
            {week.map((day, index) => (

              //checked op de selected dag zo niet dan zien of het in deze maand zit
              <div key={index} className={value.isSame(day, "day") ? "c-calendar-day-selected" : value.isSame(day, "month") ? "c-calendar-day" : "c-calender-day-othermonth"} onClick={() => setValue(day)}>
                <div className={value.isSame(day, "day") ? "c-calender-selected" : ""}>
                  {day.format('D')}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Calendar;
