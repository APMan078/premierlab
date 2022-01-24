import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import axios from 'axios'

export const AdditionalDetails = ({
    progress,
    values,
    handleChange,
    selectType,
    handleSelectTypeChange,
    vTypes,
    selectEngine,
    handleSelectEngineChange,
    eTypes,
    selectTransmission,
    handleSelectTransmissionChange,
    tTypes,
    selectColor,
    handleSelectColorChange,
    nextStep,
    previousStep
}) => {
    const [colors, setColors] = React.useState([])
    useEffect(() => {
        const fetchColors = async () => {
            const result = await axios(`/api/vehicles/colors`)
            setColors(result.data);
        };
        fetchColors()
    }, [])

    const toggleCompleted = () => {
        const a = values.plate_number != '' ? 0 : 1
        const b = values.vin != '' || values.vin != null ? 0 : 1
        const c = selectType.value != '' ? 0 : 1
        const d = selectEngine.value != '' ? 0 : 1
        const e = selectTransmission.value != '' ? 0 : 1
        const f = selectColor.value != '' ? 0 : 1
        const total = a + b + c + d + e + f
        console.log(total)
        return total
    }

    useEffect(()=> {
        toggleCompleted()
    }, [values])

    return (
    <div className="my-10 px-10 border-b border-gray-200">
        <div className="w-full rounded bg-white shadow-lg">
            <div className="flex border-b border-gray-200">
                <div className="flex-initial self-center">
                { toggleCompleted() == 0 || progress === true ? <div className="px-4 py-2 rounded bg-green-500 m-5 text-2xl text-2xl text-white"><i className="material-icons">check</i></div> : <div className="px-5 py-2 rounded bg-gray-300 m-5 text-2xl">3</div> }
                </div>
                <div className="flex-auto self-center">
                    <div className="text-lg text-gray-700">More car detail</div>
                    <div className="text-xs text-gray-700">Additional Car Details</div>
                </div>
                <div className="flex-initial p-5 self-center">
                    <Link onClick={previousStep} to="#" className="px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded rounded-r-none mr-1">Previous</Link>
                    { toggleCompleted() === 0 ? (
                        <Link onClick={nextStep} to="#" className="px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded rounded-l-none">Next</Link>
                    ) : (
                        <button className="px-5 cursor-not-allowed py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded">Next</button>
                    )}
                </div>
            </div>
            <div className="p-5 block">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <label htmlFor="type">Plate Number</label>
                        <input type="text" name="plate_number" value={values.plate_number ? values.plate_number : ''} onChange={handleChange} className="border border-gray-300 p-2 rounded my-3 block w-full" />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="type">VIN Number</label>
                        <input type="text" name="vin" value={values.vin ? values.vin : ''} onChange={handleChange} className="border border-gray-300 p-2 rounded my-3 block w-full" />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="type">Vehicle Type</label>
                        <Select className="my-3" value={selectType} onChange={handleSelectTypeChange} name="type" options={vTypes} />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="type">Engine Type</label>
                        <Select className="my-3" value={selectEngine} onChange={handleSelectEngineChange} name="engine_type" options={eTypes} />
                    </div>

                    <div className="col-span-1">
                        <label htmlFor="type">Transmission Type</label>
                        <Select className="my-3" value={selectTransmission} onChange={handleSelectTransmissionChange} name="transmission" options={tTypes} />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="type">Color</label>
                        <Select className="my-3" value={selectColor} onChange={handleSelectColorChange} name="color" options={colors} />
                    </div>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>
    </div>
    )
}