import React from 'react'
import Switch from "react-switch"

export const BrandSelect = ({ values, setValues, handleChange, step, progress, nextStep, previousStep }) => {
    const [switcher, setSwitch] = React.useState(false)
    const handleSwitchChange = (event) => {
        setSwitch(switcher === true ? false : true)
    }

    React.useEffect(() => {
        setValues({
            ...values,
            preferrence: [{
                other_brands: switcher
            }]
        })
    }, [switcher])
    return(
        <>
            <div className="p-10 py-5 pt-0">

                <div className="mb-5">
                    <div className="text-2xl my-5">Preferred Oil Brand <span className="text-red-500">*</span></div>
                    <input placeholder="Specify your preferred oil. If any?" value={values.preferred_brand} onChange={(e) => handleChange(e)} className="p-2 rounded w-full border border-gray-300" type="text" name="preferred_brand" />
                </div>
                <div>
                    <div className="text-2xl my-5">Other Preferrence <span className="text-gray-500">(Optional)</span></div>
                    <Switch 
                        uncheckedIcon={false} 
                        checkedIcon={false} 
                        onChange={event => handleSwitchChange(event)} 
                        checked={switcher} 
                    /> 
                    <label className="ml-5 text-gray-800 align-top" htmlFor="type">Open for other brands</label>
                </div>
            </div>
            <div className="pt-5 pb-5 border-t w-full px-10">
                <button onClick={previousStep} className="float-left rounded rounded-r-0 text-sm bg-blue-500 hover:bg-blue-700 px-5 py-2 text-white mb-5">Previous</button>
                <button className="float-right rounded text-sm bg-green-500 hover:bg-green-700 px-5 py-2 text-white mb-5">Submit</button>
                
                <div className="clearfix"></div>
            </div>
        </>
    )
}