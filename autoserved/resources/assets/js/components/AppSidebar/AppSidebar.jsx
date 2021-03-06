import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, UserCard } from 'components'

export const AppSidebar = props => (
  <div className="bg-white shadow-lg h-16 fixed bottom-0 md:relative md:h-screen z-10 w-full md:w-64">
    <div className="md:mt-5 md:w-64 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
      <Logo />
      <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
        <li className="mr-3 flex-1">
          <Link to="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
            <i className="fas fa-tasks pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Tasks</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
)
