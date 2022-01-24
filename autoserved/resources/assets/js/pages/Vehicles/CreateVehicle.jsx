import { reduxForm, Field } from 'redux-form'
import convert from 'color-convert'
import { connect } from 'react-redux'
import React, { Fragment, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { currentUserSelector } from 'store/selectors/session'
import {
    createVehicle as createVehicleAction,
  } from 'store/action-creators/vehicles'
import Swal from 'sweetalert2'
import {
  MAPS_API_KEY,
} from "../../utils/constants";
import Geocode from "react-geocode";
import axios from 'axios';
import {VehicleLocation, VehicleDetails, AdditionalDetails, ServiceDetails, Success} from './Multi-Step'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  })
  
  const Alert = (type, title) => Toast.fire({
    type: type,
    title: title
  })
  
  const useForm = ({ initialValues, onSubmit, validate }) => {
    const initializeValues = (obj) => JSON.parse(JSON.stringify(obj, (k, v) => (v === null ? '' : v)))
    const [values, setValues] = React.useState(initializeValues(initialValues[0]) || {})
    const [touchedValues, setTouchedValues] = React.useState({})
    const [errors, setErrors] = React.useState({})
    const [address, setAddress] = React.useState(values.address || '')
    const [city, setCity] = React.useState(values.city || '')
    const [longitude, setLongitude] = React.useState(values.longitude ? values.longitude : 120.984222)
    const [latitude, setLatitude] = React.useState(values.latitude ? values.latitude : 14.599512)
  
    const [txtLocation, setTxtLocation] = React.useState(null)
    const [txtSearch, setTxtSearch] = React.useState(null)
    
    const handleSearch = event => {
      const value = event.target.value
      setTxtSearch(value)
      setTxtLocation(txtSearch)
    }
    Geocode.setApiKey(MAPS_API_KEY)
    Geocode.setLanguage("en")
    Geocode.setRegion("ph")
  
    console.log(values)

    const handleMarkerChange = (event) => {

      Geocode.fromLatLng(event.latLng.lat(), event.latLng.lng()).then(
        response => {
          console.log(response.results[0])
          console.log(response.results[0].address_components)
          console.log(response.results[0].formatted_address)
          const addi = response.results[0].address_components
          const newAddress = response.results[0].formatted_address
          
          const city1 = addi.find((element) => {
            const subLocal = element.types.includes('sublocality')
            return subLocal
          })
          const city2 = addi.find((element) => {
            const adminArea = element.types.includes('administrative_area_level_1')
            return adminArea
          })
          const city = city1.long_name + ', ' + city2.long_name
          const zip = addi.find((element) => {
            const data = element.types.includes('postal_code')
            return data
          })
          console.log(city1.long_name)
          console.log(city2.long_name)
          console.log(zip.long_name)
          console.log(values)
          setTxtSearch(newAddress)
          setAddress(newAddress)
          setLatitude(event.latLng.lat())
          setLongitude(event.latLng.lng()) 
          {/* when this is removed fixes the problem with state values being refreshed */}
          setValues(
            {
              ...values,
              address: newAddress,
              latitude: longitude.toString(),
              longitude: latitude.toString(),
              city: city,
              zip: zip.long_name ? zip.long_name : null
            }
          )
        },
        error => {
          console.error(error);
        }
      )
    }
  
    const handleSelectSuggest = (suggestion, geocodedPrediction, originalPrediction) => {
      const { formatted_address: txtLocation, geometry } = suggestion;
      const address = 'address'
      const lat = 'latitude'
      const lng = 'longitude'
      const add = geocodedPrediction.description.split(",")
      const count = add.length
      const city1 = add[count - 3]
      const city2 = add[count - 2]
      setTxtSearch(geocodedPrediction.description)
      console.log(geocodedPrediction)
      setLatitude(geometry.location.lat())
      setLongitude(geometry.location.lng())
      console.log(geometry.location.lat())
      console.log(geometry.location.lng())
      setValues(
        {
          ...values,
          address: geocodedPrediction.description,
          latitude: geometry.location.lng().toString(),
          longitude: geometry.location.lat().toString(),
          city: city1 + ', ' + city2
        }
      )
    }
  
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
        return string
      }
  
    const getLabel = values.type
    const stripLabel = stripString(getLabel)
    const [selectMake, setSelectMake] = React.useState({
        label: '',
        value:''
    })
  
    const handleSelectMakeChange = event => {
      const value = event.value
      const label = event.label
      const name = 'make_id'
      setValues({
        ...values,
        [name]: value
      })
      setSelectMake({
        value: value, label: label
      })
      console.log(value)
      console.log(label)
      console.log(selectMake)
    }
    console.log(selectMake)
    const [selectModel, setSelectModel] = React.useState({
        label: '',
        value:''
    })
    
      const handleSelectModelChange = event => {
        const value = event.value
        const label = event.label
        const name = 'model_id'
        setValues({
          ...values,
          [name]: value
        })
        setSelectModel({
          value: value, label: label
        })
      }
      
      const [selectTrim, setSelectTrim] = React.useState({
        label: '',
        value:''
    })
    
    const handleSelectTrimChange = event => {
      const value = event.value
      const label = event.label
      const name = 'trim_id'
      setValues({
        ...values,
        [name]: value
      })
      setSelectTrim({
        value: value, label: label
      })
    }

    const [selectType, setSelectType] = React.useState({
      label: '',
      value:''
    })
    
    const handleSelectTypeChange = event => {
      const value = event.value
      const label = event.label
      const name = 'type'
      setValues({
        ...values,
        [name]: value
      })
      setSelectType({
        value: value, label: label
      })
    }
    
    const [selectEngine, setSelectEngine] = React.useState({
      label: '',
      value:''
    })
    
    const handleSelectEngineChange = event => {
      const value = event.value
      const label = event.label
      const name = 'engine_type'
      setValues({
        ...values,
        [name]: value
      })
      setSelectEngine({
        value: value, label: label
      })
    }

    const [selectTransmission, setSelectTransmission] = React.useState({
      label: '',
      value:''
    })
  
    const handleSelectTransmissionChange = event => {
      const value = event.value
      const label = event.label
      const name = 'transmission'
      setValues({
        ...values,
        [name]: value
      })
      setSelectTransmission({
        value: value, label: label
      })
    }

    const [selectColor, setSelectColor] = React.useState({
      label: '',
      value:''
    })
  
    const handleSelectColorChange = event => {
      const value = event.value
      const label = event.label
      const name = 'color'
      setValues({
        ...values,
        [name]: value
      })
      setSelectColor({
        value: value, label: label
      })
    }
    const handleChange = event => {
      const target = event.target
      const value = target.type === "checkbox" ? target.checked : target.value
      console.log(value)
      if ( target.type === "checkbox" ) {
        if( target.value === 0 ) {
          const value = false
        } else {
          const value =  true
        }
      } else {
        const value = target.value
      }
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

    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState({
      1: false,
      2: false,
      3: false,
      4: false
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
    
    const handleSubmit = event => {
      event.preventDefault()
      const e = validate(values)
      setErrors({
        ...errors,
        ...e
      })
      console.log('Vehicles:', values);
      onSubmit({ ...values, e })
      setProgress({
        ...progress,
        step: true
      })

      setStep(step + 1)
    }
  
    return {
        values,
        setValues,
        touchedValues,
        errors,
        selectMake,
        selectModel,
        selectTrim,
        selectType,
        selectEngine,
        selectTransmission,
        setSelectMake,
        setSelectModel,
        setSelectTrim,
        setSelectType,
        setSelectEngine,
        setSelectTransmission,
        selectColor,
        setSelectColor,
        handleSelectColorChange,
        handleChange,
        handleSelectMakeChange,
        handleSelectModelChange,
        handleSelectTrimChange,
        handleSelectTypeChange,
        handleSelectEngineChange,
        handleSelectTransmissionChange,
        handleSubmit,
        handleBlur,
        handleSearch,
        handleSelectSuggest,
        handleMarkerChange,
        longitude,
        latitude,
        txtLocation,
        txtSearch,
        step,
        setStep,
        progress,
        nextStep,
        previousStep
    }
  }

function CreateVehicleComponent({onSubmit, user}){

    const initialValues = [{
        type: '',
        make_id: '',
        model_id: '',
        trim_id: '',
        car_year: '',
        engine_type: '',
        transmission: '',
        color: '',
        plate_number: '',
        current_mileage: '',
        date_purchased: '',
        last_serviced: '',
        address: '',
        city: '',
        zip: '',
        longitude: '',
        latitude: ''
    }]
    const { 
        values,
        setValues,
        touchedValues,
        errors,
        selectMake,
        selectModel,
        selectTrim,
        selectType,
        selectEngine,
        selectTransmission,
        setSelectMake,
        setSelectModel,
        setSelectTrim,
        setSelectType,
        setSelectEngine,
        setSelectTransmission,
        selectColor,
        setSelectColor,
        handleSelectColorChange,
        handleChange,
        handleSelectMakeChange,
        handleSelectModelChange,
        handleSelectTrimChange,
        handleSelectTypeChange,
        handleSelectEngineChange,
        handleSelectTransmissionChange,
        handleSubmit,
        handleBlur,
        handleSearch,
        handleSelectSuggest,
        handleMarkerChange,
        longitude,
        latitude,
        txtLocation,
        txtSearch,
        step,
        setStep,
        progress,
        nextStep,
        previousStep } = useForm({
        initialValues,
        onSubmit,
        validate(values) {
          const errors = {}
    
          return errors
        }
      })

    const [makes, setMakes] = useState([])
    const [vTypes, setVTypes] = useState([])
    const [eTypes, setETypes] = useState([])
    const [tTypes, setTTypes] = useState([])


    console.log(makes)
    
    useEffect(() => {
    const fetchMake = async () => {
        const result = await axios(`/api/car-makes/select`)
        setMakes(result.data.data);
    }
    const fetchTypes = async () => {
        const result = await axios(`/api/vehicles/types`)
        setVTypes(result.data);
    }
    const fetchEngines = async () => {
        const result = await axios(`/api/vehicles/engines`)
        setETypes(result.data);
    }
    const fetchTransmission = async () => {
        const result = await axios(`/api/vehicles/transmission`)
        setTTypes(result.data);
    }
    fetchMake()
    fetchTypes()
    fetchEngines()
    fetchTransmission()
    }, [])
    const [models, setModels] = useState([])
    
    useEffect(() => {
    const fetchModel = async () => {
        const result = await axios(`/api/car-models/select/${selectMake.value || ''}`)
        setModels(result.data.data);
    };
    fetchModel()
    }, [selectMake])

    const [trims, setTrims] = useState([])
    console.log(trims)
    useEffect(() => {
    const fetchTrims = async () => {
        const result = await axios(`/api/car-trims/select/${selectModel.value || ''}`)
        setTrims(result.data.data);
    };
    fetchTrims()
    }, [selectModel])

    const handleCreateMake = value => {
        setTimeout(() =>{
            const create = async () => {
                const result = await axios.post(`/api/car-makes`, {
                    name: value,
                    type_id: 1
                })
                const data = result.data.data
                console.log(data)
                setSelectMake({ label: data.name, value: data.id })
            };
            create()
        })
    }

    const handleCreateModel = value => {
        setTimeout(() =>{
            const create = async () => {
                const result = await axios.post(`/api/car-models`, {
                    name: value,
                    make_id: selectMake.value,
                    type_id: 1
                })
                const data = result.data.data
                console.log(data)
                setSelectModel({ label: data.name, value: data.id })
            };
            create()
        })
    }

    const handleCreateTrim = value => {
        setTimeout(() =>{
            const create = async () => {
                const result = await axios.post(`/api/car-trims`, {
                    name: value,
                    model_id: selectModel.value,
                    type_id: 1
                })
                const data = result.data.data
                console.log(data)
                setSelectTrim({ label: data.name, value: data.id })
            };
            create()
        })
    }

    function computeProgress() {
      const first = progress[1] == true ? 25 : 0
      const second = progress[2] == true ? 25 : 0
      const third = progress[3] == true ? 25 : 0
      const forth = progress[4] == true ? 25 : 0
      const total = first + second + third + forth
      return  `${total}%`
    }
    function currentPage(page) {
      if(page == step) {
        return 'col-span-1 text-center py-3 bg-white text-green-500 font-bold'
      } else {
        return progress[page] == true ? 'col-span-1 text-center py-3 bg-white text-gray-800 font-bold' : 'col-span-1 text-center py-3 bg-gray-100 text-gray-500 hover:bg-gray-300 hover:text-gray-60'
      }
    }

    return(
        <Fragment>
            <div className="bb-white px-10 py-10">
                <div className="w-full rounded-lg shadow-lg">
                    <div className="bg-white rounded-t-lg">
                        <div className="progress-label float-left p-5">Completion Progress</div>
                        <div className="float-right p-5">{step}/4</div>
                        <div className="clearfix"></div>
                        <div className="shadow w-full bg-gray-300">
                            <div className="bg-blue-500 text-xs leading-none py-1 text-center text-white" style={{ width: computeProgress() }}></div>
                        </div>
                        <div className="grid grid-cols-4">
                            <div className={currentPage(1)}>Location</div>
                            <div className={currentPage(2)}>General Details</div>
                            <div className={currentPage(3)}>Engine Details</div>
                            <div className={currentPage(4)}>Service Details</div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                      {step == 1 &&
                        <VehicleLocation
                          progress={progress[1]}
                          values={values}
                          nextStep={nextStep}
                          txtSearch={txtSearch}
                          handleChange={handleChange}
                          handleSearch={handleSearch}
                          latitude={latitude}
                          longitude={longitude}
                          handleSelectSuggest={handleSelectSuggest}
                          handleMarkerChange={handleMarkerChange}
                        />                      
                      }
                      {step == 2 && 
                        <VehicleDetails
                          progress={progress[2]}
                        makes={makes}
                        models={models}
                        trims={trims}
                        handleCreateMake={handleCreateMake}
                        selectMake={selectMake}
                        handleSelectMakeChange={handleSelectMakeChange}
                        handleCreateModel={handleCreateModel}
                        selectModel={selectModel}
                        handleSelectModelChange={handleSelectModelChange}
                        values={values}
                        handleChange={handleChange}
                        handleCreateTrim={handleCreateTrim}
                        selectTrim={selectTrim}
                        handleSelectTrimChange={handleSelectTrimChange}
                        nextStep={nextStep}
                        previousStep={previousStep}
                      />                      
                      }
                      {step == 3 &&
                        <AdditionalDetails
                          progress={progress[3]}
                          values={values}
                          handleChange={handleChange}
                          selectType={selectType}
                          handleSelectTypeChange={handleSelectTypeChange}
                          vTypes={vTypes}
                          selectEngine={selectEngine}
                          handleSelectEngineChange={handleSelectEngineChange}
                          eTypes={eTypes}
                          selectTransmission={selectTransmission}
                          handleSelectTransmissionChange={handleSelectTransmissionChange}
                          tTypes={tTypes}
                          selectColor={selectColor}
                          handleSelectColorChange={handleSelectColorChange}
                          nextStep={nextStep}
                          previousStep={previousStep}
                        />
                      }
                      {step == 4 &&
                        <ServiceDetails
                          progress={progress[4]}
                          values={values}
                          setValues={setValues}
                          handleChange={handleChange}
                          nextStep={nextStep}
                          previousStep={previousStep}
                        />
                      }
                      {step == 5 && 
                        <Success
                          values={values}
                        />
                      }
                    </form>
                    <div className="clearfix"></div>
                </div>
            </div>
        </Fragment>
    )
}

const validateFields = values => {
    let errors = {}
    if (!values.address) { errors.txtSearch = 'This field is required' }
    if (!values.make_id) { errors.make_id = 'This field is required' }
    if (!values.model_id) { errors.model_id = 'This field is required' }
    if (!values.trim_id) { errors.trim_id = 'This field is required' }
    if (!values.car_year) { errors.car_year = 'This field is required' }
    if (!values.plate_number) { errors.plate_number = 'This field is required' }
    if (!values.type) { errors.type = 'This field is required' }
    if (!values.engine_type) { errors.engine_type = 'This field is required' }
    if (!values.transmission) { errors.transmission = 'This field is required' }
    if (!values.date_purchased) { errors.date_purchased = 'This field is required' }
    if (!values.last_serviced) { errors.last_serviced = 'This field is required' }
    if (!values.current_mileage > 5000) { errors.current_mileage = 'Mileage needs to be more than 5000' }
    return errors
  }

const CreateVehicle = reduxForm({
    form: 'createVehicle',
    enableReinitialize: true,
    validate: validateFields
  })(CreateVehicleComponent)

export default connect(
    state => {
        return({
            user: currentUserSelector(state)
          }
        )},
    dispatch => ({
        onSubmit: values => {
            console.log(values)
            dispatch(createVehicleAction(values))
            Alert('success', 'Successfully create a new vehicle!')
          }
    })
  )(CreateVehicle)