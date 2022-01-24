import { connect } from 'react-redux'
import React, { Fragment, useEffect, useState } from 'react'
import { reduxForm } from 'redux-form'
import {  PageHeader, OperatingHours, AvatarUpload, BannerUpload, DynamicList } from 'components'
import Swal from 'sweetalert2'
import { selectShopDetails } from 'store/selectors/shops'
import { currentUserSelector } from 'store/selectors/session'
import { 
  getShop as getShopAction,
  updateShop as updateShopAction,
  deleteShop as deleteShopAction 

} from 'store/action-creators/shops'
import { Link, Redirect } from 'react-router-dom'
import Select from 'react-select'
import GoogleMap from "react-google-map";
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGooglePlacesSuggest from "react-google-places-suggest";
import {
  MAPS_API_KEY,
} from "../../utils/constants";
import axios from 'axios';
import Geocode from "react-geocode";

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
  const [values, setValues] = React.useState(initializeValues(initialValues) || {})
  const [touchedValues, setTouchedValues] = React.useState({})
  const [errors, setErrors] = React.useState({})
  const [address, setAddress] = React.useState(values.address || '')
  const [city, setCity] = React.useState(values.city || '')
  const [longitude, setLongitude] = React.useState(values.longitude ? parseFloat(values.longitude) : 120.984222)
  const [latitude, setLatitude] = React.useState(values.latitude ? parseFloat(values.latitude) : 14.599512)

  const [txtLocation, setTxtLocation] = React.useState(values.address ? values.address : null)
  const [txtSearch, setTxtSearch] = React.useState(values.address ? values.address : null)
  
  const handleSearch = event => {
    const value = event.target.value
    setTxtSearch(value)
    setTxtLocation(txtSearch)
  }
  Geocode.setApiKey(MAPS_API_KEY)
  Geocode.setLanguage("en")
  Geocode.setRegion("ph")

  console.log(values)

  console.log(values.operations)
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
  }

  const getLabel = values.type


  const selectTypes = () => {
    const dataType = []
    if(Array.isArray(values.type)) {
      values.type.map((val, idx) => {
        const stripLabel = stripString(val)
        const label = capitalizeFirstLetter(stripLabel)
        dataType[idx] = {
          label: label,
          value: val
        }
        return dataType
      })
    } else {
      const stripLabel = stripString(values.type)
      const label = capitalizeFirstLetter(stripLabel)
      const dataType = {
        label: label,
        value: values.type
      }
      return dataType
    }
    return dataType
  }
  console.log(selectTypes)
  const [select, setSelect] = React.useState(selectTypes)
  const payment_types = () => {
    const ret = []
    if(Array.isArray(values.payment_method)) {
      values.payment_method.map((val, idx) => {
        const stripLabel = stripString(val)
        const label = capitalizeFirstLetter(stripLabel)
        ret[idx] = {
          label: label,
          value: val
        }
        return ret
      })
    } else {
      const stripLabel = stripString(values.payment_method)
      const label = capitalizeFirstLetter(stripLabel)
      const ret = {
        label: label,
        value: values.payment_method
      }
      return ret
    }
    return ret
  }
  console.log(payment_types)
  const [payments, setPayments] = React.useState(payment_types)
  const handleSelectChange = event => {
    console.log(event)
    setSelect({event})
    const value = event.map((val, idx) => {
      return val.value
    })

    const name = 'type'
    setValues({
      ...values,
      [name]: value
    })

  }

  const handlePaymentChange = event => {
    console.log(event)
    setPayments({event})
    const value = event.map((val, idx) => {
      return val.value
    })

    const name = 'payment_method'
    setValues({
      ...values,
      [name]: value
    })

  }
  console.log(select)
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

  const handleSubmit = event => {
    event.preventDefault()
    const e = validate(values)
    setErrors({
      ...errors,
      ...e
    })
    console.log('preventives:', values);
    onSubmit({ ...values, e })
  }

  const bannerUploadHandler = fileData => {
    console.log(fileData)
  }

  const avatarUploadHandler = fileData => {
    console.log(fileData)
  }

  const handleOperatingHours = days => {
    const name = 'operations'
    setValues({
      ...values,
      [name]: days
    })
  }

  const handleDynamicList = (fields, type) => {
    const name = type
    setValues({
      ...values,
      [name]: fields
    })
  }

  return {
    values,
    setValues,
    touchedValues,
    errors,
    select,
    handleChange,
    handleSelectChange,
    handleSubmit,
    handleBlur,
    handleSearch,
    handleSelectSuggest,
    handleMarkerChange,
    bannerUploadHandler,
    avatarUploadHandler,
    handleOperatingHours,
    handleDynamicList,
    longitude,
    latitude,
    txtLocation,
    txtSearch,
    payments,
    setPayments,
    handlePaymentChange
  }
}

function UpdateShopComponent({ onSubmit, match, getShop, shops, user }) {
  const { user_type } = user

  const initialValues = shops[0]

  if (!initialValues) {
    return <Redirect to="/account/shops" />
  }
  const query = match.params.slug
  const { 
    values, 
    setValues,
    touchedValues, 
    select, 
    errors, 
    handleChange, 
    handleSelectChange, 
    handleSubmit, 
    handleBlur, 
    handleSearch,
    handleSelectSuggest,
    handleMarkerChange,
    bannerUploadHandler,
    avatarUploadHandler,
    handleOperatingHours,
    handleDynamicList,
    payments,
    setPayments,
    handlePaymentChange,
    longitude,
    latitude,
    txtLocation,
    txtSearch } = useForm({
    initialValues,
    onSubmit,
    validate(values) {
      const errors = {}

      return errors
    }
  })

  const populateShop = async () => {
    await getShop(query)
  }

  useEffect(() => {
    populateShop()
  }, [])  

  console.log(values)

  if (user_type == 'customer' || user_type == 'fleet') {
    return <Redirect from='/account' to="/account/overview" />
  }



  const [types, setTypes] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/api/shops/types`)
      setTypes(result.data.data);
    };
    fetchData()
  }, [])

  const paymentTypes = [
    {
      label: "Cash",
      value: "cash"
    },{
      label: "Credit Card",
      value: "credit card"
    },{
      label: "Bank Transfer",
      value: "bank transfer"      
    }, {
      label: "Check",
      value: "check"
    }, {
      label: "Online Payment",
      value: "online payment"
    }, {
      label: "Over The Conter",
      value: "counter"
    }, {
      label: "Terms",
      value: "terms"
    }
  ]
  console.log(select)
  console.log(payments)
  return (
    <Fragment>
      <div className="flex flex-wrap px-10 py-5">
        <div className="w-full">
          <PageHeader title="Details" subTitle="Shop" >
            <Link to={`/account/shops/`} className="ml-2 bg-gray-300 hover:bg-gray-500 text-gray-700 shadow font-bold py-2 px-4 rounded inline-flex items-center">
              <i className="material-icons text-sm mr-3">arrow_back</i>
              <span>Go Back</span>
            </Link>
            <Link to="#" onClick={handleSubmit} className="ml-2 bg-green-500 hover:bg-green-600 text-white shadow font-bold py-2 px-4 rounded inline-flex items-center">
              <i className="material-icons text-sm mr-3">save_alt</i>
              <span>Save</span>
            </Link>
          </PageHeader>
        </div>
        <div className="w-full lg:w-2/3 lg:pr-10 mb-5">
          <form onSubmit={handleSubmit}>
            <div className="rounded-lg shadow-lg bg-white">
              <BannerUpload uploadHandler={bannerUploadHandler} name="banner" value={values.banner ? values.banner : null} />
              <div className="flex py-5 border-b border-gray-300">
                <div className="w-2/3 p-5">
                  <div className="text-md">General Settings</div>
                  <div className="text-sm">Update your shop profile details.</div>

                  <div className="grid grid-cols-2 mt-4">
                    <div className="col-span-2 pr-5 py-1">
                      <label htmlFor="name">Shop Name</label>
                      <input type="text" name="name" value={values.name ? values.name : ''} onChange={handleChange} className="border border-gray-300 p-2 rounded my-3 block w-full" />
                    </div>
                    <div className="col-span-1 pr-5 py-1">
                      <label htmlFor="type">Shop Type</label>
                      <Select className="my-3" isMulti value={select} onChange={handleSelectChange} name="type" options={values.type.length > 2 ? select[0] : types} />
                    </div>
                    <div className="col-span-1 pr-5 py-1">
                      <label htmlFor="type">Payment Type</label>
                      <Select className="my-3" isMulti value={payments} onChange={handlePaymentChange} name="payment_method" options={values.payment_method.length > 2 ? payments[0] : paymentTypes} />
                    </div>
                    <div className="col-span-2 pr-5 py-1">
                      <label htmlFor="contact">Mobile Number</label>
                      <div className="flex border border-gray-300 rounded my-3">
                        <span className="p-2 border-gray-300 inline-flex text-gray-400 border-r">+63</span>
                        <input type="text" value={values.contact ? values.contact : ''} onChange={handleChange}  name="contact" className="p-2 flex-1" />
                      </div>
                    </div>
                    <div className="col-span-2 pr-5 py-1">
                      <label htmlFor="description">Description</label>
                      <textarea name="description" value={values.description ? values.description : ''} onChange={handleChange}  rows="4" cols="50" className="border border-gray-300 p-2 rounded my-3 block w-full"></textarea>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-5">
                  <div className="text-center">
                    Shop Logo
                  </div>
                  <AvatarUpload uploadHandler={avatarUploadHandler} type="shop" className="mt-10" name="avatar" value={values.avatar ? values.avatar : null} />
                </div>
              </div>

              <div className="p-5 border-b border-gray-300">
                <div className="text-md">Location Settings</div>
                <div className="text-sm">Setup your shop's location.</div>
                <div className="py-1 block my-5">
                  <label htmlFor="address">Shop Address</label>
                  <div className="border border-gray-300 rounded my-3">
                    <ReactGoogleMapLoader
                      params={{
                        key: MAPS_API_KEY,
                        libraries: "places,geocode"
                      }}
                      render={googleMaps =>
                        googleMaps && (
                          <ReactGooglePlacesSuggest
                            autocompletionRequest={{
                              input: txtSearch || ""
                            }}
                            googleMaps={googleMaps}
                            onSelectSuggest={handleSelectSuggest}
                          >
                            <div className="flex">
                              <span className="p-2 border-gray-300 inline-flex text-gray-400 border-r flex-initial"><i className="material-icons">location_on</i></span>
                              <input placeholder="Search shop location" type="text" name="txtSearch" value={txtSearch || ''} className="p-2 flex-1" onChange={handleSearch} />
                            </div>
                          </ReactGooglePlacesSuggest>
                        )
                      }
                    />
                  </div>
                  <div className="flex border border-gray-300 rounded my-3">

                    <ReactGoogleMapLoader
                      params={{
                        key: MAPS_API_KEY,
                        libraries: "places,geocode"
                      }}
                      render={googleMaps =>
                        googleMaps &&
                        latitude &&
                        longitude && (
                          <div
                            style={{
                              height: "50vh",
                              width: "100%"
                            }}
                          >
                            <GoogleMap
                              autoFitBounds
                              googleMaps={googleMaps}
                              zoom={16}
                              coordinates={[
                                {
                                  position: {
                                    lat: latitude,
                                    lng: longitude
                                  },
                                  draggable: true,
                                  onLoaded: (googleMaps, map, marker) => {
                                    // Set Marker animation
                                    marker.setAnimation(googleMaps.Animation.BOUNCE)
                                    google.maps.event.addListener(marker, 'dragend', function(event) {
                                      
                                      handleMarkerChange(event)
                                    })
                                  }
                                }
                              ]}
                            />
                          </div>
                        )
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 mt-4">
                    <div className="col-span-1 pr-5 py-1">
                      <label htmlFor="latitude">Latitude</label>
                      <div className="w-full p-5 my-3 block border border-gray-300 rounded">{latitude}</div>
                    </div>
                    <div className="col-span-1 pr-5 py-1">
                      <label htmlFor="type">Longitude</label>
                      <div className="w-full p-5 my-3 block border border-gray-300 rounded">{longitude}</div>
                    </div>
                  </div>
                </div>
              </div>

              <OperatingHours value={values.operations} handleChange={handleOperatingHours}  />

            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="rounded-lg shadow-lg bg-white mb-5">
            <div className="mx-auto text-gray-700 text-md p-5 border-b rounded-t-lg border-gray-300">
                  Amenities
            </div>
            <div className="p-5">
              <DynamicList type="amenities" value={values.amenities}  handleChange={handleDynamicList} />
            </div>
          </div>

          <div className="rounded-lg shadow-lg bg-white mb-5">
            <div className="mx-auto text-gray-700 text-md p-5 border-b rounded-t-lg border-gray-300">
                  Features
            </div>
            <div className="p-5">
              <DynamicList type="features" value={values.features}  handleChange={handleDynamicList} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const validateFields = values => {
  let errors = {}

  return errors
}

const UpdateShop = reduxForm({
  form: 'updateService',
  enableReinitialize: true,
  validate: validateFields
})(UpdateShopComponent)

export default connect(
  (state, props) => {
    const query = props.match.params.slug
    return({
        shops: selectShopDetails(state, query),
        user: currentUserSelector(state)
      }
    )},
  dispatch => ({
    getShop: id => dispatch(getShopAction(id)),
    deleteShop: id => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          dispatch(deleteShopAction(id))
          Alert('success', 'User successfully deleted!')
        }
      })
    },
    onSubmit: values => {
      dispatch(updateShopAction(values))
      Alert('success', 'PMS successfully updated!')
    }
  })
)(UpdateShop)