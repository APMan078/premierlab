import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'


const NotificationDropdownComponent = ({className = ''}) => {

    const [hasNotification, setNotification] = useState(false)
    const notifyTrueFalse = () => setNotification(!hasNotification)
    console.log(hasNotification)
    return (
        <div className={`relative px-5 py-3 border-r-2 border-l-2 border-gray-200  ${className}`}>
            <button onClick={notifyTrueFalse} className="relative align-middle z-10 inline-block h-8 w-8 overflow-hidden text-gray-500 hover:text-gray-600 cursor-pointer">
                <div className="nav-link-icon__wrapper">
                    <i className="material-icons">notifications</i>
                    <span className="badge badge-danger badge-pill">5</span>
                </div>
            </button>
            {hasNotification == true &&
                <button onClick={notifyTrueFalse} tabIndex="-1" style={{top: 0, left: 0}} className="fixed align-middle inset-0 top-0 h-full w-full cursor-default"></button>
            }
            {hasNotification == true &&
                <div className="absolute right-0 mt-2 py-2 w-86 bg-white rounded-lg shadow-xl">
                    <Link to="/account/requests" tabindex="0" className="dropdown-item">
                        <div className="inline-block w-10 h-2 align-top pl-2 text-gray-800">
                            <div className="notification__icon">
                                <i className="material-icons">assignment_return</i>
                            </div>
                        </div>
                        <div className="inline-block w-72 text-gray-800">
                            <span className="mb-0 notification__category capitalize text-xs">new other services request</span>
                            <p className="mb-0 text-muted text-sm"><small>10 hours ago</small></p>
                            <div className="rounded-full bg-blue p-1 bg-primary absolute right-0 mr-5 mt-4 top-0"></div>
                            <p className="text-base">A new service request has been created. Check it out!</p>
                        </div>
                    </Link>
                </div>
            }
        </div>
    )
} 

export const NotificationDropdown = connect(
    state => ({}),
    dispatch => ({})
  )(NotificationDropdownComponent)