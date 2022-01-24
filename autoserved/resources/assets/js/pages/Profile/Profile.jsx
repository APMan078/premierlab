import React, { Fragment, useEffect } from 'react'
import { useModal } from 'react-context-modals'
import { connect } from 'react-redux'
import { currentUserSelector } from 'store/selectors/session'
import defaultProfileImage from 'default-avatar.png'
import defaultShopAvatar from 'default-shop-avatar.png'
import { Link, Redirect } from 'react-router-dom'

const ProfileComponent = ({ user }) => {
    console.log(user)
    const { first_name: firstName, last_name: lastName, avatar, impersonated, email, country, mobile, credit } = user
    const fullName =
    lastName !== undefined ? [firstName, lastName].join(' ') : firstName

    return (
        <>
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 lg:w-1/3 p-2 pt-5 pr-3">
                <div className="pt-5 bg-white rounded shadow-lg mb-5 pb-5">
                    <Link className="w-10 float-right pr-5 text-gray-600 hover:text-gray-700" to="/account/settings">
                        <i className="material-icons">edit</i>
                    </Link>
                    <div className="clearfix ml-10">
                        <img
                            className="p-5 rounded-full w-48 object-fill mx-auto"
                            src={avatar || defaultProfileImage}
                        />
                    </div>
                    <div className="mx-auto text-gray-700 text-xl p-5 pb-10 text-center border-b-2 border-gray-300 mb-5">{fullName}</div>
                    <div className="p-5 pl-10 text-gray-600">
                        Email
                        <div className="text-gray-700">{email}</div>
                    </div>
                    <div className="p-5 pl-10 text-gray-600">
                        Country
                        <div className="text-gray-700">{country || '-'}</div>
                    </div>
                    <div className="p-5 pl-10 text-gray-600">
                        Mobile Number
                        <div className="text-gray-700">{mobile || '-'}</div>
                    </div>
                </div>
                {user.user_type != 'admin' || user.user_type != 'vendor' || user.user_type != 'fleet admin' &&
                    <div className="bg-white rounded shadow-lg mb-5">
                        <div className="mx-auto text-gray-700 text-md p-5 border-b-2 border-gray-300">
                            Managed Shops
                        </div>
                        <div className="p-5 clearfix border-b border-gray-200">
                            <img
                                className="w-12 object-fill float-left mr-5"
                                src={avatar || defaultShopAvatar}
                            />
                            <div className="float-left">
                                <Link to="#" className="text-md text-blue-500 text-gray-500">Shop Name</Link>
                                <p className="text-sm">Service Center</p>
                            </div>
                        </div>
                        <div className="p-5 clearfix border-b border-gray-200">
                            <img
                                className="w-12 object-fill float-left mr-5"
                                src={avatar || defaultShopAvatar}
                            />
                            <div className="float-left">
                                <Link to="#" className="text-md text-blue-500 text-gray-500">Shop Name</Link>
                                <p className="text-sm">Service Center</p>
                            </div>
                        </div>
                        <div className="p-5 clearfix border-b border-gray-200">
                            <img
                                className="w-12 object-fill float-left mr-5"
                                src={avatar || defaultShopAvatar}
                            />
                            <div className="float-left">
                                <Link to="#" className="text-md text-blue-500 text-gray-500">Shop Name</Link>
                                <p className="text-sm">Service Center</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="w-full md:w-2/3 lg:w-2/3 p-2 pt-5">
                {user.user_type != 'admin' &&
                    <div className="p-10 bg-white rounded shadow-lg mb-5">
                        <div className="flex">
                            <div className="flex-1 text-center">
                                <span className="font-bold text-4xl text-green-500">PHP {credit}</span>
                                <p className="uppercase text-md text-gray-500">Wallet Value</p>
                            </div>
                            {user.user_type == 'vendor' &&
                                <div className="flex-1 text-center">
                                    <span className="font-bold text-4xl text-blue-500">3</span>
                                    <p className="uppercase text-md text-gray-500">Shop Owned</p>
                                </div>
                            }
                            {user.user_type == 'customer' &&
                                <div className="flex-1 text-center">
                                    <span className="font-bold text-4xl text-blue-500">3</span>
                                    <p className="uppercase text-md text-gray-500">Cars Owned</p>
                                </div>
                            }
                        </div>
                    </div>
                }
                <div className="bg-white rounded shadow-lg mb-5">
                    <div className="mx-auto text-gray-700 text-md p-5 border-b-2 border-gray-300">
                        Recent Activities
                    </div>
                    <div className="user-activity ml-10 border-b border-l-2 border-gray-300 h-20 pt-4">
                        <i className="material-icons float-left -m-3 mt-3 mr-5 text-gray-600 bg-white">account_circle</i>
                        <div className="activity-details float-left">
                            <span className="text-xs text-gray-500">2 months ago</span>
                            <span className="text-xs rounded-full bg-yellow-500 p-1 ml-4">Updated</span>
                            <p className="text-sm">User has been updated</p>
                        </div>
                    </div>
                    <div className="user-activity ml-10 border-b border-l-2 border-gray-300 h-20 pt-4">
                        <i className="material-icons float-left -m-3 mt-3 mr-5 text-gray-600 bg-white">attach_file</i>
                        <div className="activity-details float-left">
                            <span className="text-xs text-gray-500">2 months ago</span>
                            <span className="text-xs rounded-full bg-green-500 p-1 ml-4">Created</span>
                            <p className="text-sm">A file has been created</p>
                        </div>
                    </div>
                    <div className="user-activity ml-10 border-b border-l-2 border-gray-300 h-20 pt-4">
                        <i className="material-icons float-left -m-3 mt-3 mr-5 text-gray-600 bg-white">attach_file</i>
                        <div className="activity-details float-left">
                            <span className="text-xs text-gray-500">2 months ago</span>
                            <span className="text-xs rounded-full bg-green-500 p-1 ml-4">Created</span>
                            <p className="text-sm">A file has been created</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}


export default connect(
    state => ({
        user: currentUserSelector(state)
    }),
    dispatch => ({ })
)(ProfileComponent)