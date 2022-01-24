import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Schedule } from '../Pms-Modal'
import { BrandSelect } from './Brand'
export const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = React.useState(initialValues || {})

  const [touchedValues, setTouchedValues] = React.useState({})
  const [errors, setErrors] = React.useState({})

  const handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleBlur = event => {
    const target = event.target
    const name = target.name
    setTouchedValues({
      ...touchedValues,
      [name]: true
    })
    const e = validate(values)
    setErrors({
      ...errors,
      ...e
    })
  }

  const handleSubmit = event => {

    const e = validate(values)
    setErrors({
      ...errors,
      ...e
    })

    onSubmit({ ...values, e })
  }

  const [select, setSelect] = React.useState([])
  console.log(select)
  const handleSelectChange = event => {
    const value = event.value
    const label = event.label
    const name = 'type_id'
    setValues({
      ...values,
      [name]: value
    })
    setSelect({
      value: value, label: label
    })
  }

  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState({
    1: false,
    2: false,
    3: false
  })
  
  const nextStep = e => {
    e.preventDefault()
    const page = step
    setProgress({
      ...progress,
      [page]: true
    })

    setStep(step + 1)
  }

  const previousStep = e => {
    e.preventDefault()
    setStep(step - 1)
  }
  return {
    values,
    setValues,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleSelectChange,
    select,
    step,
    setStep,
    progress,
    nextStep,
    previousStep
  }
}

export const ChangeBatteryComponent = ({ onSubmit, initialValues }) => {
    initialValues['battery_size'] = ''
    initialValues['preferred_schedule'] = ''
    const { 
      values,
      setValues, 
      touchedValues, 
      errors, 
      handleChange, 
      handleSubmit, 
      handleBlur, 
      handleSelectChange, 
      select,     
      step,
      setStep,
      progress,
      nextStep,
      previousStep } = useForm({
      initialValues,
      onSubmit,
      validate(values) {
        const errors = {}
    
        if (values.name === "") {
          errors.name = "Please specify a name"
        }
    
        return errors
      }
    })
    function computeProgress() {
      const first = progress[1] == true ? 35 : 0
      const second = progress[2] == true ? 35 : 0
      const third = progress[3] == true ? 30 : 0
      const total = first + second
      return  `${total}%`
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="flex-grow">
            <div className="pt-5 pb-5 border-b w-full">
              <div className="px-10 text-base text-gray-700">{values.header}</div>
            </div>
            <div className="p-10 py-5 pb-0">
              <div className="progress-label float-left px-0 pt-0">Completion Progress</div>
              <div className="float-right px-0 py-0">{step}/3</div>
              <div className="clearfix"></div>
              <div className="shadow w-full bg-gray-300 my-3">
                  <div className="bg-blue-500 text-xs leading-none py-1 text-center text-white" style={{ width: computeProgress() }}></div>
              </div>
            </div>
            {step == 1 &&
                <Schedule
                    values={values} 
                    setValues={setValues}
                    handleChange={handleChange} 
                    step={step}
                    progress={progress}
                    nextStep={nextStep}
                    previousStep={previousStep}
                />
            }
            {step == 2 &&
                <BrandSelect
                    values={values}
                    setValues={setValues}
                    handleChange={handleChange} 
                    step={step}
                    progress={progress}
                    nextStep={nextStep}
                    previousStep={previousStep}
                />
            }
          </div>
        </form>
      )
    }