import React from "react";
import { connect } from 'react-redux'
import { currentUserSelector } from 'store/selectors/session'
import AdminSidebar from '../../../data/adminSidebar'
import ShopSidebar from '../../../data/shopSidebar'
import { NavLink } from "react-router-dom";

const SidebarNavItemsBackupComponent = (user) => {
    console.log(user)
    const sidebar = AdminSidebar
    if (user.user_type == 'admin') {
        const sidebar = AdminSidebar
    } else {
        const sidebar = ShopSidebar
    }

    return (
        <div className="nav-wrapper">
        {sidebar.map((nav, idx) => (
          <div key={idx}>
            <h6 className="py-1 px-8 border-t-2 border-b-2">{nav.title}</h6>
            {typeof nav.items !== "undefined" && nav.items.length && (
              <ul className="flex-column nav text-sm">
                {nav.items.map((item, idx) => (
                    <li key={idx} className="relative">
                        <NavLink activeClassName="active" to={`/account${item.to}`} className="block text-gray-800 hover:text-blue-500 hover:bg-gray-200 px-5 py-3">
                            <div className="inline-block item-icon-wrapper align-middle pt-1 pr-3">
                                <i className="material-icons">{item.htmlBefore}</i>
                            </div>
                            <span>{item.title}</span>
                        </NavLink>
                    </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        </div>
    )
}

export const SidebarNavItemsBackup = connect(
    state => ({
      user: currentUserSelector(state)
    }),
    dispatch => ({})
  )(SidebarNavItemsbackupComponent)
  