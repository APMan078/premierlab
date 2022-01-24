import React, {useEffect} from 'react'
import CreatableSelect from 'react-select/creatable'
import { Link } from 'react-router-dom'

export const VehicleDetails = ({
    progress,
    makes,
    models,
    trims,
    handleCreateMake,
    selectMake,
    handleSelectMakeChange,
    handleCreateModel,
    selectModel,
    handleSelectModelChange,
    values,
    handleChange,
    handleCreateTrim,
    selectTrim,
    handleSelectTrimChange,
    nextStep,
    previousStep
}) => {
    console.log(values)

    const toggleCompleted = () => {
        const a = selectMake.value ? 1 : 0
        const b = selectModel.value ? 1 : 0
        const c = selectTrim.value ? 1 : 0
        const d = values.car_year ? 1 : 0
        const total = a + b + c + d
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
                    { toggleCompleted() === 4 || progress === true ? <div className="px-4 py-2 rounded bg-green-500 m-5 text-2xl text-2xl text-white"><i className="material-icons">check</i></div> : <div className="px-5 py-2 rounded bg-gray-300 m-5 text-2xl">2</div> }
                    </div>
                    <div className="flex-auto self-center">
                        <div className="text-lg text-gray-700">Choose car details</div>
                        <div className="text-xs text-gray-700">Provide at least the car make and car model.</div>
                    </div>
                    <div className="flex-initial p-5 self-center">
                        <Link onClick={previousStep} to="#" className="px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded rounded-r-none mr-1">Previous</Link>
                        { toggleCompleted() === 4 ? (
                            <Link onClick={nextStep} to="#" className="px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded rounded-l-none">Next</Link>
                        ) : (
                            <button className="px-5 cursor-not-allowed py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded">Next</button>
                        )}
                        
                    </div>
                </div>
                <div className="p-5 block">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <label htmlFor="type">Car Make</label>
                            <CreatableSelect onCreateOption={handleCreateMake} className="my-3" value={selectMake} onChange={handleSelectMakeChange} name="make_id" options={makes} />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="type">Car Model</label>
                            <CreatableSelect onCreateOption={handleCreateModel} className="my-3" value={selectModel} onChange={handleSelectModelChange} name="model_id" options={models} />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="type">Car Trim</label>
                            <CreatableSelect onCreateOption={handleCreateTrim} className="my-3" value={selectTrim} onChange={handleSelectTrimChange} name="trim_id" options={trims} />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="type">Year Model</label>
                            <input type="text" name="car_year" value={values.car_year ? values.car_year : ''} onChange={handleChange} className="border border-gray-300 p-2 rounded my-3 block w-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}