import React, { Fragment } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import { PageHeader } from 'components'
import { Card, CardContent } from 'components'
import { linkStyle } from 'constants/styles'

import { UserSettings } from './UserSettings'
import { AppSettingsForm } from './Forms/AppSettingsForm'
import { BillingSettingsForm } from './Forms/BillingSettingsForm'

const CardLink = ({ to, className = '', children }) => {
  return (
    <NavLink
      to={to}
      activeClassName="bg-blue-lightest"
      className={`block border-b border-grey-light p-4 ${linkStyle} ${className}`}
    >
      {children}
    </NavLink>
  )
}
const redirectUserSettings = () => (
  <Redirect from='/account/settings' to="/account/settings/user" />
)
export const SettingsRoutes = ({ match: { url: currentUrl } }) => {
  return (
    <Fragment>
        <div className="bb-white px-10 py-5">
          <PageHeader title="Settings" subTitle="Accounts">
            <NavLink to={`${currentUrl}/user`} className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <i className="material-icons">fingerprint</i>
              <span>Account</span>
            </NavLink>
            <NavLink to={`${currentUrl}/app`} className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <i className="material-icons">touch_app</i>
              <span>Application</span>
            </NavLink>
            <NavLink to={`${currentUrl}/billing`} className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <i className="material-icons">account_balance_wallet</i>
              <span>Billing</span>
            </NavLink>
          </PageHeader>
          <Switch>
              <Route exact path={`${currentUrl}/`} component={redirectUserSettings} />
              <Route
                exact
                path={`${currentUrl}/user`}
                render={() => (
                  <UserSettings />
                )}
              />
              <Route
                exact
                path={`${currentUrl}/app`}
                render={() => (
                  <AppSettingsForm />
                )}
              />
              <Route
                exact
                path={`${currentUrl}/billing`}
                render={() => (
                  <BillingSettingsForm />
                )}
              />
            </Switch>
        </div>
    </Fragment>
  )
}

export default SettingsRoutes
