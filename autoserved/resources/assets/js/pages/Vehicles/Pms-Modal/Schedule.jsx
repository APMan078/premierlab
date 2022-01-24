import React from 'react'
import Select from 'react-select'
import {ScheduleFields} from 'components'
export const Schedule = ({
    values,
    setValues,
    step,
    progress,
    nextStep,
    previousStep
}) => {
    function capitalizeFirstLetter(string) {
        if(string) {
          return string[0].toUpperCase() + string.slice(1);
        }
        return string
      }
    
      function stripString(string) {
        if(string) {
          return string.replace('_', ' ')
        }
      }

    const oil_types = () => {
        const ret = []
        if(Array.isArray(values.oil_types)) {
          values.oil_types.map((val, idx) => {
            const stripLabel = stripString(val)
            const label = capitalizeFirstLetter(stripLabel)
            ret[idx] = {
              label: label,
              value: val
            }
            return ret
          })
        } else {
          const stripLabel = stripString(values.oil_types)
          const label = capitalizeFirstLetter(stripLabel)
          const ret = {
            label: label,
            value: values.oil_types
          }
          return ret
        }
        return ret
      }
    const [oil, setOil] = React.useState('')
    const types = [
        {label: "Regular Oil", value: "regular_oil"},
        {label: "Semi Synthetic", value: "semi_synthetic"},
        {label: "Fully Synthetic", value: "fully_synthetic"},
        {label: "Shop Recommendation", value: "shop_recommendation"}
    ]
    const handleSelectChange = (event) => {
        const value = event.value
        const label = event.label
        setOil({
            label: label,
            value: value
        })
        setValues({
          ...values,
          oil_type: value
        })
    }
    return(
        <>
        <div className="p-10 py-5 pt-0">
            <div className="text-2xl">Select your preferred schedule (at most 3 time slots) <span className="text-red-500">*</span></div>
            <div className="text-xs text-gray-700">
                We suggest to set a schedule a month before the expected scheduled date
            </div>
            <ScheduleFields
                values={values}
                setValues={setValues}
                type="preferred_schedule"
            />
            <div className="text-2xl mt-5">Select Oil Type <span className="text-red-500">*</span></div>
            <Select 
                placeholder="Select an Oil Type"
                value={oil}
                name="oil_type"
                onChange={e => handleSelectChange(e)} 
                className="py-2 rounded my-3 block w-full" 
                options={types}
            />
        </div>
        <div className="pt-5 pb-5 border-t w-full px-10">
            <button onClick={previousStep} className="float-left rounded rounded-r-0 text-sm bg-blue-500 hover:bg-blue-700 px-5 py-2 text-white mb-5">Previous</button>
            {values.preferred_schedule != '' && values.oil_type != '' ? (
              <button onClick={nextStep} className="float-right rounded text-sm bg-blue-500 hover:bg-blue-700 px-5 py-2 text-white mb-5">Next</button>
            ) : (
              <div className="float-right rounded text-sm bg-gray-500 hover:bg-gray-700 px-5 py-2 text-white mb-5 cursor-not-allowed">Next</div>
            )}
            
            <div className="clearfix"></div>
        </div>
        </>
    )
}