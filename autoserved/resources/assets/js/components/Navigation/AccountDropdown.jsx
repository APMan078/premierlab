import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { history } from 'utils/history'
import { sessionActions } from 'store/actions'
import { currentUserSelector } from 'store/selectors/session'
import defaultProfileImage from 'default-avatar.png'
import { leaveImpersonate as leaveImpersonateAction } from 'store/action-creators/members'

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

const AccountDropdownComponent = ({   
    user,
    leaveImpersonate,
    className = '',
    logOut }) => {

    if (!user) {
        return null
    }
    
    const { first_name: firstName, last_name: lastName, avatar, impersonated, pin } = user

    const fullName =
    lastName !== undefined ? [firstName, lastName].join(' ') : firstName

    const [isToggled, setToggled] = useState(false)
    const toggleTrueFalse = () => setToggled(!isToggled)

    return (
        <div className={`relative py-2 px-6 ${className}`}>
            <button onClick={toggleTrueFalse} className="relative align-middle mr-2 z-10 inline-block h-8 w-8 rounded-full overflow-hidden focus:outline-none focus:border-white">
                <img
                    className="h-full w-full object-fill"
                    src={avatar || defaultProfileImage}
                />
            </button>
            <a className="z-10 cursor-pointer dropdown-toggle text-gray-800" onClick={toggleTrueFalse} >{fullName}</a>
            {isToggled == true &&
                <button onClick={toggleTrueFalse} tabIndex="-1" style={{top: 0, left: 0}} className="fixed align-middle inset-0 top-0 h-full w-full cursor-default"></button>
            }
            {isToggled == true &&
                    <div className="absolute right-0 mr-3 mt-4 py-2 w-56 bg-white rounded-lg shadow-xl">
                        <div className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                          <span className="text-xs rounded-full bg-yellow-500 p-1 ml-4">Support PIN:</span> {pin}
                        </div>
                        <Link to="/account/profile" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                            <i className="material-icons align-middle mr-2">person</i> Profile
                        </Link>
                        <Link to="/account/settings" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                            <i className="material-icons align-middle mr-2">settings</i> Settings
                        </Link>
                        {impersonated != 'Expired' &&
                            <a href="#" onClick={() => leaveImpersonate()} className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                                <i className="material-icons text-danger align-middle mr-2">input</i>Leave Impersonation
                            </a>                        
                        }
                        <Link to="account/overview" onClick={logOut} className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                            <i className="material-icons text-danger align-middle mr-2">input</i>Sign out
                        </Link>
                    </div>
            }
        </div>
    )
} 

export const AccountDropdown = connect(
    state => ({
      user: currentUserSelector(state)
    }),
    dispatch => ({
      logOut: async () => {
        await axios.get('/api/logout')
  
        dispatch({ type: sessionActions.LOGOUT })
  
        history.push('/account/overview')
      },
      leaveImpersonate: () => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, leave impersonation!'
        }).then((result) => {
          if (result.value) {
            dispatch(leaveImpersonateAction())
            Alert('success', 'Successfully Left Impersonation')
            window.location.reload();
          }
        })
      }
    })
  )(AccountDropdownComponent)