import React from 'react'
import { Link } from 'react-router-dom'
import { LOGO } from '../../utils/constants'
export const LogoDashboard = ({ className }) => (
    <Link className="text-white no-underline" to="/account">
      <img className={`block ml-8 h-8 ${className}`} src={LOGO} alt="AutoServed Logo" />
    </Link>
)
