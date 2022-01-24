import React, {useEffect} from 'react'
import DatePicker from 'react-date-picker'
import Select from 'react-select'
import { Link } from 'react-router-dom'

export const ScheduleFields = ({values, setValues, type}) => {
    const [fields, setFields] = React.useState(values.preferred_schedule || [{
      date: '',
      time: ''
    }])
    const [date, setDate] = React.useState([])
    function convertDate(str) {
      const mnths = {
          Jan: "01",
          Feb: "02",
          Mar: "03",
          Apr: "04",
          May: "05",
          Jun: "06",
          Jul: "07",
          Aug: "08",
          Sep: "09",
          Oct: "10",
          Nov: "11",
          Dec: "12"
        },
        date = str.split(" ")
    
      return [date[3], mnths[date[1]], date[2]].join("-");
    }
    const [errors, setErrors] = React.useState(false)
    
    const handleListChange = (i, event, type) => {
      console.log(i)
      console.log(event)
      const list = [...fields];
      
      if(type === 'date') {
        const newDate = convertDate(event.toString())
        list[i] = {
          date: newDate,
          time: fields[i].time
        }
        setFields(list)
        console.log(newDate)
        console.log(new Date(newDate))
      } else if(type === 'time') {
        list[i] = {
          date: fields[i].date,
          time: {
            label: event.label,
            value: event.value
          }
        }
        setFields(list)
        setValues({
          ...values,
          preferred_schedule: list
        })
        console.log(fields)
      }
      
    }
  
    const handleAdd = () => {
      const list = [...fields]
      const count = list.length
      const last = count - 1
      if( count < 3 && list[last].date != '' && list[last].time != '') {
        list.push({
          date: '',
          time: ''
        });
        setFields(list);
        setValues({
          ...values,
          preferred_schedule: fields
        })
        setErrors(false)
      } else {
        setErrors(true)
      }

    }
  
    const handleRemove = (i) => {
      const list = [...fields];
      list.splice(i, 1);
      setFields(list);
      setValues({
        ...values
      })
    }

    const handleDateChange = (i, date) => {
      console.log(event)
    }

    const timeSlot = [
        { label: "AM", value: "am"},
        { label: "PM", value: "pm"},
        { label: "Anytime", value: "anytime"},
    ]

    const handleTimeChange = (i, event) => {
      console.log(event)
  }
    return(
        <>
        {fields.map((field, idx) => {
            const date = field.date !=  '' ? new Date(field.date) : '' 
            console.log(date)
            console.log(field.date)
            return(
                <div key={idx} className="flex mb-1">
                    <div className="flex-grow pr-5">
                      <DatePicker 
                        name="preferred_schedule['date']" 
                        value={date ? date : ''} 
                        onChange={ e => handleListChange(idx, e, 'date')} 
                        className="border border-gray-300 p-2 rounded my-3 block w-full" 
                        format="y-MM-dd"
                        minDate={new Date()}
                      />
                    </div>

                    <div className="flex-grow">
                      <Select placeholder="Select a Time Slot" className="my-3" value={field.time ? field.time : ''} onChange={ e => handleListChange(idx, e, 'time')} name="preferred_schedule['time']" options={timeSlot} />
                    </div>

                    { idx < 1 ? (
                      <div className="flex-grow-0">
                        <button
                        type="button"
                        onClick={() => handleAdd(idx)}
                        className="p-3 my-3 py-2 bg-green-500 text-white ml-3"
                        >
                          <i className="material-icons text-xs">add</i>
                        </button>
                      </div>
                    ) : (
                      <div className="flex-grow-0">
                        <button
                        type="button"
                        onClick={() => handleRemove(idx)}
                        className="p-3 my-3 py-2 bg-red-500 text-white ml-3"
                        >
                          <i className="material-icons text-xs">remove</i>
                        </button>
                      </div>
                    )}
                </div>
            )
        })}
        {fields.length < 3 ? (
          <></>
        ) : (
          <>
            <span className="text-gray-500 mb-5">( You can only select up to 3 schedule. )</span>
          </>
        )}
        { errors 
          ? <span className="text-red-500 mb-5">( Please select a date and time slot )</span>
          : ''
        }

      </>
    )
}