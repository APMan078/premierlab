import React, { useState } from "react"
import { NavLink, Link } from "react-router-dom"

const SidebarNavItemComponent = ({item, idx}) => {
    const hasSubItems = item.items && item.items.length
    const [isCollapsed, setCollapsed] = useState("hidden")
    function collapsedTrueFalse() {
        setCollapsed(isCollapsed === "hidden" ? "block" : "hidden");
      }
      console.log(isCollapsed)
    return (
        <li key={idx} className="relative">
            <NavLink 
            activeClassName="active" 
            to={hasSubItems ? "#" : `/account${item.to}`}
            onClick={collapsedTrueFalse}
            className={`block text-gray-800 hover:text-blue-500 hover:bg-gray-200 px-5 py-3`}
            >
            {item.htmlBefore && (
                <div className="inline-block item-icon-wrapper align-middle pt-1 pr-3">
                    <i className="material-icons">{item.htmlBefore}</i>
                </div>
            )}
            <span>{item.title}</span>
            {hasSubItems && (
                <div className="float-right mt-1">
                <i className="material-icons">keyboard_arrow_down</i>
                </div>
            )}
            </NavLink>
            {hasSubItems && (
                <div tabIndex="-1" role="menu" className={`collapse shadow-inner ${isCollapsed}`} style={{ top: 0}}>
                    {item.items.map((subItem, idx) => (
                    <NavLink 
                        activeClassName="active" 
                        onClick={collapsedTrueFalse} 
                        className={`block border-b border-gray-200 text-gray-800 hover:text-blue-500 hover:bg-gray-200 px-5 py-3 pl-10`} 
                        key={idx} 
                        to={`/account${subItem.to}`}>
                        {subItem.title}
                    </NavLink>
                    ))}
                </div>
            )}

</li>
    )
}

export default SidebarNavItemComponent
  