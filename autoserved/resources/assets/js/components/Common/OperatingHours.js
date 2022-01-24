import React from "react";
import Switch from "react-switch"
import {Slider} from 'components'

export const OperatingHours = ({value, handleChange}) => {

    const prevStateRef = React.useRef()
    React.useEffect(() => {
      prevStateRef.current = days
    })

    const prevState = prevStateRef.current;
    const [days, setDays] = React.useState( value || [
        {
            name: 'Sunday',
            start: "9:00 AM",
            end: "5:00 PM",
            closed: true,
            step: 1
        },
        {
            name: 'Monday',
            start: "9:00 AM",
            end: "5:00 PM",
            closed: false,
            step: 1
        },
        {
            name: 'Tuesday',
            start: "9:00 AM",
            end: "5:00 PM",
            closed: false,
            step: 1
        },
        {
            name: 'Wednesday',
            start: "9:00 AM",
            end: "5:00 PM",
            closed: false,
            step: 1
        },
        {
            name: 'Thursday',
            start: "9:00 AM",
            end: "5:00 PM",
            closed: false,
            step: 1
        },
        {
            name: 'Friday',
            start: "9:00 AM",
            end: "5:00 PM",
            closed: false,
            step: 1
        },
        {
            name: 'Saturday',
            start: "9:00 AM",
            end: "5:00 PM",
            closed: false,
            step: 1
        }
    ])

    console.log(days)
    const handleSwitchChange = (event, targetDay) => {
        setDays(
            days.map(day => {
              if (day.name === targetDay.name) {
                return { ...day, closed: event ? false : true, updated: true }
              } else {
                return day
              }
            })
        )
        handleChange(days)
    }
    
    const handleTimeChange = (time, targetDay) => {
        setDays(
            days.map(day => {
              if (day.name === targetDay.name) {
                return { ...day, start: time.start, end: time.end, updated: true }
              } else {
                return day
              }
            })
        )
        handleChange(days)
    }


    return (
        <div className="p-5 border-b border-gray-300">
            <div className="text-md">Operating Hours</div>
            <div className="text-sm">Toggle switch using the label</div>

            <div className="grid grid-cols-1">
                {days.map((day, idx) => {

                    return (
                        <div key={idx} className="col-span-1 flex mt-8">
                            <label className="flex-initial w-48">
                                <Switch uncheckedIcon={false} checkedIcon={false} onChange={event => handleSwitchChange(event, day)} checked={day.closed ? false : true} /> 
                                <div className="inline-block">
                                    <p className="float-left pl-2">{day.name}</p>
                                </div>
                            </label>
                            <Slider
                                disabled={day.closed}
                                draggableTrack={true}
                                start={day.start}
                                end={day.end}
                                name={day.name}
                                onChange={time => handleTimeChange(time, day)}
                                step={day.step}
                                className="flex-initial"
                                />
                        </div>
                    )
                })}
            </div>

      </div>
    )
}