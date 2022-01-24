import React from 'react'
import MaterialIcon from '@material/react-material-icon';
import { AppHeader, AppFooter, AppSidebar, AccountDropdown, SidebarNavItems, NotificationDropdown } from 'components'
import AdminSidebar from '../data/adminSidebar'
import { Link } from 'react-router-dom'
import { LogoDashboard } from 'components'
import moment from 'moment';
import { NavLink } from "react-router-dom";

export const DashboardLayout = props => {

    const sidebar = AdminSidebar

    console.log(sidebar)
    const greetingText = () => {
      const now = moment()
      const currentHour = now.local().hour()
      if (currentHour >= 12 && currentHour <=17) return "Good Afternoon"
      else if (currentHour <= 18) return "Good Evening"
      else return "Good Morning"
    }

    const greetingClass = () => {
      const now = moment()
      const currentHour = now.local().hour()
      if (currentHour >= 12 && currentHour <=17) return "bg-teal-600" /* Afternoon */
      else if (currentHour <= 18) return "bg-blue-900" /* Evening */
      else return "bg-blue-600" /* Morning */
    }

    return (
        <div className="md:flex-1 md:flex xl:overflow-y-hidden h-screen">
            <section id="sidebar" className="bg-gray-100 md:w-64 shadow text-gray-600 overflow-y-scroll hidden md:block">
              <LogoDashboard className="mb-3 mt-3"/>
              <span className="sm:block md:hidden">
                <i className="material-icons">close</i>
              </span>
              <div>
                  <SidebarNavItems></SidebarNavItems>
              </div>
            </section>
            <main className="md:flex-1 md:overflow-x-hidden min-h-screen flex flex-col">
                <header className="hidden md:flex sm:items-center sm:justify-between bg-white md:flex-shrink-0">
                  <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                    <div className="sm:hidden">
                      <button type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                          <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className="sm:block">
                    <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
                      <NotificationDropdown></NotificationDropdown>
                      <Link to="/account/help" title="How it works?" className="px-5 py-3 align-middle border-r-2 border-gray-200 text-gray-500 hover:text-gray-600 cursor-pointer">
                        <div className="nav-link-icon__wrapper">
                          <i className="material-icons">help</i>
                        </div>
                      </Link>
                      <AccountDropdown />
                    </div>
                  </nav>
                </header>
                <section className="flex-grow">
                    <div className="mobile-header bg-white md:hidden">
                      <div className={"block text-center md:hidden py-10 pb-20 text-white " + greetingClass() }>
                        { greetingText() }
                      </div>
                      <div className="block relative w-11/12 m-0 mx-auto md:hidden rounded overflow-hidden shadow-lg p-5 bg-white -m-10">
                          <h2>AutoServed Wallet</h2>
                          <hr className="mt-5 mb-5" />
                          <div className="flex text-sm">
                              <div className="flex-1 text-center item-center">
                                <NavLink activeClassName="active" to="/account/pay" > 
                                  <div className="mx-auto icon-header payable-icon"></div>
                                  Pay
                                </NavLink>
                              </div>
                              <div className="flex-1 text-center item-center">
                                <NavLink activeClassName="active" to="/account/top-up" > 
                                  <div className="mx-auto icon-header topup-icon"></div>
                                  Topup
                                </NavLink>
                              </div>
                              <div className="flex-1 text-center item-center">
                                <NavLink activeClassName="active" to="/account/rewards" > 
                                  <div className="mx-auto icon-header rewards-icon"></div>
                                  Rewards
                                </NavLink>
                              </div>
                              <div className="flex-1 text-center item-center">
                                <NavLink activeClassName="active" to="/account/referrals" > 
                                  <div className="mx-auto icon-header referral-icon"></div>
                                  Referral
                                </NavLink>
                              </div>
                          </div>
                      </div>
                      <div className="flex p-5 mt-12 mb-5 text-sm">
                          <div className="flex-1 text-center item-center">
                            <Link to="/account/referrals" > 
                              <div className="mx-auto icon-56 car-icon"></div>
                              Car
                            </Link>
                          </div>
                          <div className="flex-1 text-center item-center">
                            <Link to="/account/referrals" > 
                              <div className="mx-auto icon-56 pms-icon"></div>
                              PMS
                            </Link>
                          </div>
                          <div className="flex-1 text-center item-center">
                            <Link to="/account/referrals" > 
                              <div className="mx-auto icon-56 changeoil-icon"></div>
                              Change Oil
                            </Link>
                          </div>
                          <div className="flex-1 text-center item-center">
                            <Link to="/account/referrals" > 
                              <div className="mx-auto icon-56 assist-icon"></div>
                              Assist
                            </Link>
                          </div>
                      </div>
                    </div>
                    <div className="mobile-news px-5 bg-white mt-2 py-5 h-screen text-sm md:hidden">
                      <div className="flex -mx-2 my-2">
                        <div className="w-1/2 px-2">
                          <div className="bg-white rounded p-2 shadow-lg">Blog</div>
                        </div>
                        <div className="w-1/2 px-2">
                          <div className="bg-white rounded p-2 shadow-lg">Blog</div>
                        </div>
                      </div>
                      <div className="flex -mx-2 my-2">
                        <div className="w-1/2 px-2">
                          <div className="bg-white rounded p-2 shadow-lg">Blog</div>
                        </div>
                        <div className="w-1/2 px-2">
                          <div className="bg-white rounded p-2 shadow-lg">Blog</div>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-footer w-full pb-1 fixed bottom-0 border-t-2 border-gray-300 bg-white text-sm md:hidden">
                      <div className="flex p-5">
                            <div className="flex-1 text-center content-center">
                              <NavLink activeClassName="active" to="/account/overview" > 
                                <div className="mx-auto icon home-icon"></div>
                                Home
                              </NavLink>
                            </div>
                            <div className="flex-1 text-center content-center">
                              <NavLink activeClassName="active" to="/account/requests" >
                                <div className="mx-auto icon request-icon"></div>
                                Request
                              </NavLink>
                            </div>
                            <div className="flex-1 text-center content-center">
                              <NavLink activeClassName="active" to="/account/estimates" >
                                <div className="mx-auto icon estimate-icon"></div>
                                Estimate
                              </NavLink>
                            </div>
                            <div className="flex-1 text-center content-center">
                              <NavLink activeClassName="active" to="/account/appointments" >

                                <div className="mx-auto icon calendar-icon"></div>
                                Schedule
                              </NavLink>
                            </div>
                            <div className="flex-1 text-center content-center">
                              <NavLink activeClassName="active" to="/account/settings" >

                                <div className="mx-auto icon account-icon"></div>
                                Account
                              </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto px-4 hidden md:block">{props.children}</div>
                </section>
                <footer className="bg-white border-t-2 border-gray-200 p-4 hidden lg:block flex">
                  <div className="flex-1 float-left">
                    <Link className="p-2 text-gray-800" to="#">About</Link>
                    <Link className="p-2 text-gray-800" to="#">Privacy Policy</Link>
                    <Link className="p-2 text-gray-800" to="#">Terms & Conditions</Link>
                    <Link className="p-2 text-gray-800" to="#">Blog</Link>
                  </div>
                  <div className="flex-1 text-gray-800 text-right">Copyright © 2020 AutoServed - Platform v1.0</div>
                </footer>
            </main>
        </div>
        )
} 
