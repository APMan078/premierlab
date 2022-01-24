import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { NavLink } from 'react-router-dom'



export const RegistrationLink = () => {
    const items = [
      {
        title: 'Individual',
        link: '/account/signup'
      },
      {
        title: 'Shop',
        link: '/account/shop/signup'
      },
      {
        title: 'Business',
        link: '/account/fleet/signup'
      }
    ]

    const params = location ? queryString.parse(location.search) : null

    return (
        <div className="flex items-center">
            <div className="mb-4 mx-auto btn-group-sm btn-group">
                {items.map((item,index) => (
                    <NavLink key={index} to={item.link} className="cursor-pointer bg-white font-semibold py-2 px-4 border border-gray-400 no-underline text-xs" activeClassName="active">
                        {item.title}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

