import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = ({ className }) => (
    <Link className="text-white no-underline" to="/account">
      <img className={`block mx-auto h-10 px-2 ${className}`} src="../../../img/autoserved-logo.png" alt="AutoServed Logo" />
    </Link>
)
