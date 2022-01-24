import React, {useState} from "react";
import { connect } from 'react-redux'
import { currentUserSelector } from 'store/selectors/session'
import AdminSidebar from '../../../data/adminSidebar'
import ShopSidebar from '../../../data/shopSidebar'
import CustomerSidebar from '../../../data/customerSidebar'
import FleetSidebar from '../../../data/fleetSidebar'
import { NavLink, Link } from "react-router-dom";
import SidebarNavItem from "./SidebarNavItem";
const SidebarNavItemsComponent = ({user}) => {
  console.log(user)
  function getSidebar() {
    const { user_type } = user
    if ( user_type == "admin") {
      return AdminSidebar
    } 
    if ( user_type == "vendor") {
      return ShopSidebar
    }
    if ( user_type == "customer") {
      return CustomerSidebar
    }
    if ( user_type == "fleet admin") {
      return FleetSidebar
    }
  }

    const sidebar = getSidebar()

    const [isCollapsed, setCollapsed] = useState(false)
    const collapsedTrueFalse = () => setCollapsed(!isCollapsed)

    return (
        <div className="nav-wrapper">
        {sidebar.map((nav, idx) => (
          <div key={idx}>
            <h6 className="py-1 px-8 border-t-2 border-b-2">{nav.title}</h6>
            {typeof nav.items !== "undefined" && nav.items.length && (
              <ul className="flex-column nav text-sm">
                {nav.items.map((item, idx) => {
                  const hasSubItems = item.items && item.items.length
                  return(
                    <SidebarNavItem key={idx} item={item} />
                  )
                })}
              </ul>
            )}
          </div>
        ))}
        </div>
    )
}

export const SidebarNavItems = connect(
    state => ({
      user: currentUserSelector(state)
    }),
    dispatch => ({})
  )(SidebarNavItemsComponent)
  