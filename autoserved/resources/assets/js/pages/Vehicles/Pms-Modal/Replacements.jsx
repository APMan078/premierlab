import React, {useEffect} from 'react'
import Select from 'react-select'
import Switch from "react-switch"

export const Replacements = ({
    values,
    value,
    setValues,
    handleChange,
    handleSubmit,
    change_items,
    step,
    progress,
    nextStep,
    previousStep
}) => {

    const types = [
        {   
            label: 'OEM',
            value: 'oem',
        },
        {   
            label: 'Replacement',
            value: 'replacement',
        },
        {   
            label: 'Shop Recommendation',
            value: 'recommendation',
        },        
    ]
    const [fields, setFields] = React.useState(values.replacements || [])
    const [errors, setErrors] = React.useState(true)
    const count = change_items.length
    const checkErrors = () => {
        console.log(fields.length)
        fields.length != change_items.length ? setErrors(true) : setErrors(false)
    }

    const handleSelectChange = (i, event) => {
        const value = event.value
        const label = event.label
        const list = [...fields]
        list[i] = {
            label: label,
            value: value
        }
        setFields(list)
        setValues({
          ...values,
          replacements: list
        })
        setSwitch({
            ...switcher, 
            oem: false,
            replacement: false, 
            recommendation: false
        })

    }


    const onSubmit = () => {
        console.log(fields.length)
        console.log(change_items.length)
        fields.length != change_items.length ? setErrors(true) : setErrors(false)
        if (errors === false) {
            handleSubmit()
        } 
    }

    const [switcher, setSwitch] = React.useState(
        {
            oem: false,
            replacement: false,
            recommendation: false
        }
    )

    const handleSwitchChange = (event, type) => {
        if(type === 'oem') {
            setSwitch({
                ...switcher, 
                oem: switcher.oem === true ? false : true, 
                replacement: false,
                recommendation: false
            })
            

        } else if (type === 'replacement') {
            setSwitch({
                ...switcher, 
                oem: false,
                replacement: switcher.replacement === true ? false : true, 
                recommendation: false
            })

        } else if (type === 'recommendation') {
            setSwitch({
                ...switcher, 
                oem: false,
                replacement: false,
                recommendation: switcher.recommendation === true ? false : true
            })
        }
    }

    const setAllToOem = () => {
        const list = [...fields]
        setFields([])
        if ( switcher.oem === true) {
            for (let i = 0; i < change_items.length; i++) {
                list.push({
                    label: 'OEM',
                    value: 'oem'
                  })
                setFields(list)
                setValues({
                ...values,
                replacements: list
                })
            }
        } else {
            setFields([])
            setValues({
            ...values,
            replacements: []
            })
        }
    }

    const setAllToReplacement = () => {
        const list = [...fields]
        setFields([])
        if ( switcher.replacement === true) {
            for (let i = 0; i < count; i++) {
                list.push({
                    label: 'Replacement',
                    value: 'replacement'
                });
                setFields(list)
                setValues({
                    ...values,
                    replacements: list
                    })
            }
        } else {
            setFields([])
            setValues({
            ...values,
            replacements: []
            })
        }
    }

    const setAllToRecommendation = () => {
        const list = [...fields]
        setFields([])
        if ( switcher.recommendation === true) {
            for (let i = 0; i < count; i++) {
                list.push({
                    label: 'Recommendation',
                    value: 'recommendation'
                });
                setFields(list)
                setValues({
                    ...values,
                    replacements: list
                    })
            }
        } else {
            setFields([])
            setValues({
            ...values,
            replacements: []
            })
        }
    }
    useEffect(()=> {
        fields.length != change_items.length ? setErrors(true) : setErrors(false)
        console.log(values)
        console.log(fields)
        console.log(switcher)
    }, [fields])
    useEffect(() => {
        setAllToOem()
    }, [switcher.oem])
    useEffect(() => {
        setAllToReplacement()
    }, [switcher.replacement])
    useEffect(() => {
        setAllToRecommendation()
    }, [switcher.recommendation])
    
    
    return(
        <div className="p-10 py-5 pt-0">
            <div className="text-2xl mb-5">Select Replacement Types <span className="text-red-500">*</span></div>
            <div className="flex">
                <div className="w-2/3 pr-20">
                        {change_items.map((item, idx) => {
                            return(
                                <div key={idx}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-1 self-center">
                                            <label className="text-gray-800" htmlFor="type">{item}</label>
                                        </div>
                                        <div key={idx} className="col-span-1">
                                            <Select 
                                                placeholder="Select a Replacement Type"
                                                name={`replacements[${idx}]`} 
                                                onChange={e => handleSelectChange(idx, e)} 
                                                className="py-2 rounded block w-full" 
                                                options={types}
                                                value={fields[idx] || ''}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
                <div className="w-1/3">
                    <div className="text-gray-700 mb-10">Select types to all (optional)</div>
                    <div className="mb-5"> 
                        <Switch 
                            uncheckedIcon={false} 
                            checkedIcon={false} 
                            onChange={event => handleSwitchChange(event, "oem")} 
                            checked={switcher.oem} 
                        /> 
                        <label className="ml-5 text-gray-800 align-top" htmlFor="type">All OEM</label>
                    </div>
                    <div className="mb-5"> 
                        <Switch 
                            uncheckedIcon={false} 
                            checkedIcon={false} 
                            onChange={event => handleSwitchChange(event, "replacement")} 
                            checked={switcher.replacement} 
                        /> 
                        <label className="ml-5 text-gray-800 align-top" htmlFor="type">All Replacement</label>
                    </div>
                    <div className="mb-5"> 
                        <Switch 
                            uncheckedIcon={false} 
                            checkedIcon={false} 
                            onChange={event => handleSwitchChange(event, "recommendation")} 
                            checked={switcher.recommendation} 
                        /> 
                        <label className="ml-5 text-gray-800 align-top" htmlFor="type">All Shop Recommendation</label>
                    </div>                   
                </div>
            </div>

            <div className="pt-5 pb-5 border-t w-full">
                <button onClick={previousStep} className="float-left rounded rounded-r-0 text-sm bg-blue-500 hover:bg-blue-700 px-5 py-2 text-white mb-5">Previous</button>
                {errors ? (
                    <div className="float-right rounded text-sm bg-gray-500 hover:bg-gray-700 px-5 py-2 text-white mb-5 cursor-not-allowed">Submit</div>
                ): (
                    <button onClick={onSubmit} className="float-right rounded text-sm bg-green-500 hover:bg-green-700 px-5 py-2 text-white mb-5">Submit</button>
                )}
                <div className="clearfix"></div>
            </div>
        </div>
    )
}