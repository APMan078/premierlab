import React, {useEffect} from 'react'
import DatePicker from 'react-date-picker'
import { Link } from 'react-router-dom'

export const ServiceDetails = ({progress, values, setValues, handleChange, nextStep, previousStep}) => {

    const [datePurchased, setDatePurchased ] = React.useState()
    const [lastServed, setLastServed ] = React.useState()
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
          date = str.split(" ");
      
        return [date[3], mnths[date[1]], date[2]].join("-");
      }

    const handleDateChange = date => {
        console.log(date)
        const newDate = convertDate(date.toString())
        const name = 'date_purchased'
        setDatePurchased(date)
        setValues({
            ...values,
            [name]: newDate
        })
    }
    const handleServicedChange = date => {
        const newDate = convertDate(date.toString())
        const name = 'last_serviced'
        setLastServed(date)
        setValues({
            ...values,
            [name]: newDate
        })
    }
    
    console.log(values)
    console.log(values.date_purchased)
    console.log(values.last_serviced)
    console.log(values.current_mileage)
    const toggleCompleted = () => {
        const a = values.date_purchased != '' ? 0 : 1
        const b = values.last_serviced != '' ? 0 : 1
        const c = values.current_mileage != '' && values.current_mileage > 5000 ? 0 : 1
        const total = a + b + c
        console.log(total)
        return total
    }

    const onHandleSubmit = () => {

    }

    useEffect(()=> {
        toggleCompleted()
    }, [values])
    return (
        <div className="my-10 px-10 border-b border-gray-200">
            <div className="w-full rounded bg-white shadow-lg">
                <div className="flex border-b border-gray-200">
                    <div className="flex-initial self-center">
                    { toggleCompleted() < 1 || progress === true ? <div className="px-4 py-2 rounded bg-green-500 m-5 text-2xl text-2xl text-white"><i className="material-icons">check</i></div> : <div className="px-5 py-2 rounded bg-gray-300 m-5 text-2xl">4</div> }
                    </div>
                    <div className="flex-auto self-center">
                        <div className="text-lg text-gray-700">Service detail</div>
                        <div className="text-xs text-gray-700">Additional Service Details</div>
                    </div>
                    <div className="flex-initial p-5 self-center">
                        <Link onClick={previousStep} to="#" className="px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded rounded-r-none mr-1">Previous</Link>
                        { toggleCompleted() === 0 ? (
                            <button type="submit" className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded rounded-l-none">Save Vehicle</button>
                        ) : (
                            <button className="px-5 cursor-not-allowed py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded">Save Vehicle</button>
                        )}
                    </div>
                </div>
                <div className="p-5 block">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <label htmlFor="type">Date Purchased</label>
                            <DatePicker name="date_purchased" value={datePurchased ? datePurchased : ''} onChange={handleDateChange} className="border border-gray-300 p-2 rounded my-3 block w-full" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="type">Last Serviced</label>
                            <DatePicker name="last_serviced" value={lastServed ? lastServed : ''} onChange={handleServicedChange} className="border border-gray-300 p-2 rounded my-3 block w-full" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="type">Current Mileage</label>
                            <input type="number" name="current_mileage" value={values.current_mileage ? values.current_mileage : ''} onChange={handleChange} className="border border-gray-300 p-2 rounded my-3 block w-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}