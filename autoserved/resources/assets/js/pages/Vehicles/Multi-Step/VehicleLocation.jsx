import React, {useEffect} from 'react'
import GoogleMap from "react-google-map";
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGooglePlacesSuggest from "react-google-places-suggest";
import {
    MAPS_API_KEY,
  } from "../../../utils/constants";
import { Link } from 'react-router-dom'

export const VehicleLocation = ({nextStep, txtSearch, handleChange, handleMarkerChange, handleSelectSuggest, handleSearch, latitude, longitude, values, progress} ) => {

    console.log(values)
    const toggleCompleted = () => {
        if(txtSearch === null) {
            return false
        } else {
            return true
        }
    }

    useEffect(()=> {
        toggleCompleted()
    }, [values])

    return (
        <div className="my-10 px-10 border-b border-gray-200">
        <div className="w-full rounded bg-white shadow-lg">
            <div className="flex border-b border-gray-200">
                <div className="flex-initial self-center">
                    { toggleCompleted() === true || progress === true ? <div className="px-4 py-2 rounded bg-green-500 m-5 text-2xl text-2xl text-white"><i className="material-icons">check</i></div> : <div className="px-5 py-2 rounded bg-gray-300 m-5 text-2xl">1</div> }
                </div>
                <div className="flex-auto self-center">
                    <div className="text-lg text-gray-700">Specify your car's location</div>
                    <div className="text-xs text-gray-700">We will use this information to enhance your experience</div>
                </div>
                <div className="flex-initial p-5 self-center">
                    { toggleCompleted() === true ? (
                        <Link to="#" onClick={nextStep} className="px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">Next</Link>
                    ) : (
                        <button className="px-5 cursor-not-allowed py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded">Next</button>
                    )}
                </div>
            </div>
            <div className="p-5 block">
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
            </div>
        </div>
    </div>
    )
} 