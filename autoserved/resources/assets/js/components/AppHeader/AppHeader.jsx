import React from 'react'
import { Link } from 'react-router-dom'
export const AppHeader = props => (
<nav className="bg-white pt-2 md:pt-1 pb-1 px-1 mt-0 h-10 fixed w-full z-20 top-0">
  <div className="flex flex-wrap items-center">
    <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
      <Link to="/account">
        <span className="text-xl pl-2"><i className="em em-grinning"></i></span>
      </Link>
    </div>
  </div>
</nav>
)
