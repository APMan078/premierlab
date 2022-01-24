import { Provider } from 'react-redux'
import React, { lazy, Suspense } from 'react'
import { ModalProvider } from 'react-context-modals'
import { Route, Switch, Redirect, Router } from 'react-router-dom'
import { AuthGuard, FlashMessageRoot } from 'components'
import { history } from 'utils/history'
import { store } from 'store/create-store'
import { DashboardLayout, FormPageLayout } from 'layouts'
import { PdfReports } from 'pages/Reports/PdfReports'
const LogIn = lazy(() => import('pages/LogIn/LogIn'))
const SignUp = lazy(() => import('pages/SignUp/SignUp'))
const FleetSignUp = lazy(() => import('pages/SignUp/Fleet/FleetSignUp'))
const ShopSignUp = lazy(() => import('pages/SignUp/Shop/ShopSignUp'))
const Overview = lazy(() => import('pages/Overview/Overview'))
const NotFound = lazy(() => import('pages/NotFound/NotFound'))
const SettingsRoutes = lazy(() => import('pages/Settings/SettingsRoutes'))
const PasswordReset = lazy(() => import('pages/PasswordReset/PasswordReset'))
const ForgotPassword = lazy(() => import('pages/ForgotPassword/ForgotPassword'))

const Users = lazy(() => import('pages/Users/Users'))
const Profile = lazy(() => import('pages/Profile/Profile'))
const Shops = lazy(() => import('pages/Shops/Shops'))
const ViewShop = lazy(() => import('pages/Shops/ViewShop'))
const UpdateShop = lazy(() => import('pages/Shops/UpdateShop'))
const ActivateShop = lazy(() => import('pages/Shops/ShopActivation'))
const UserPdf = lazy(() => import('pages/Reports/PdfReports'))


const Makes = lazy(() => import('pages/Makes/Makes'))
const Models = lazy(() => import('pages/Models/Models'))
const Series = lazy(() => import('pages/Series/Series'))
const Trims = lazy(() => import('pages/Trims/Trims'))
const Services = lazy(() => import('pages/Services/Services'))
const PmsLists = lazy(() => import('pages/PmsLists/PmsLists'))
const UpdatePmsList = lazy(() => import('pages/PmsLists/UpdatePmsList'))
const CreatePmsList = lazy(() => import('pages/PmsLists/CreatePmsList'))

const PreventiveServices = lazy(() => import('pages/PreventiveServices/Preventives'))
const UpdatePreventiveServices = lazy(() => import('pages/PreventiveServices/UpdatePreventive'))
const CreatePreventiveServices = lazy(() => import('pages/PreventiveServices/CreatePreventive'))

const Vehicles = lazy(() => import('pages/Vehicles/Vehicles'))
const CreateVehicle = lazy(() => import('pages/Vehicles/CreateVehicle'))
const VehicleSchedules = lazy(() => import('pages/Vehicles/VehicleSchedule'))

const Requests = lazy(() => import('pages/Requests/Requests'))
const withDashboard = ContentComponent => {
  return props => (
    <AuthGuard>
      <DashboardLayout>
        <ContentComponent {...props} />
      </DashboardLayout>
    </AuthGuard>
  )
}

const Loading = () => (
  <div className="flex h-screen items-center">
    <div className="w-screen text-3xl text-center text-grey">Loading...</div>
  </div>
)

const redirectOverview = () => (
  <Redirect from='/account' to="/account/overview" />
)

const OverviewWithDashboard = withDashboard(Overview)
const SettingsWithDashboard = withDashboard(SettingsRoutes)
const UsersWithDashboard = withDashboard(Users)
const ProfileWithDashboard = withDashboard(Profile)
const UserPdfWithDashboard = withDashboard(UserPdf)
const ShopsWithDashboard =  withDashboard(Shops)
const ViewShopWithDashboard =  withDashboard(ViewShop)
const UpdateShopWithDashboard =  withDashboard(UpdateShop)
const ActivateShopWithDashboard =  withDashboard(ActivateShop)

const MakesWithDashboard = withDashboard(Makes)
const ModelsWithDashboard = withDashboard(Models)
const SeriesWithDashboard = withDashboard(Series)
const TrimsWithDashboard = withDashboard(Trims)
const ServicesWithDashboard = withDashboard(Services)
const PmsListsWithDashboard = withDashboard(PmsLists)
const UpdatePmsListWithDashboard = withDashboard(UpdatePmsList)
const CreatePmsListWithDashboard = withDashboard(CreatePmsList)
const PreventiveServicesWithDashboard = withDashboard(PreventiveServices)
const UpdatePreventiveServiceWithDashboard = withDashboard(UpdatePreventiveServices)
const CreatePreventiveServiceWithDashboard = withDashboard(CreatePreventiveServices)

const VehiclesWithDashboard = withDashboard(Vehicles)
const CreateVehicleWithDashboard = withDashboard(CreateVehicle)
const VehicleSchedulesWithDashboard = withDashboard(VehicleSchedules)

const RequestsWithDashboard = withDashboard(Requests)
export const App = () => (
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <FlashMessageRoot />
      <Router history={history}>
        <ModalProvider>
          <Switch>
            <Route
              exact
              path="/account/login"
              render={() => (
                <FormPageLayout title="Log-in to your Account">
                  <LogIn />
                </FormPageLayout>
              )}
            />
            <Route
              exact
              path="/account/signup"
              render={() => (
                <FormPageLayout title="Create New Account">
                  <SignUp />
                </FormPageLayout>
              )}
            />
            <Route
              exact
              path="/account/fleet/signup"
              render={() => (
                <FormPageLayout title="Create New Account">
                  <FleetSignUp />
                </FormPageLayout>
              )}
            />
            <Route
              exact
              path="/account/shop/signup"
              render={() => (
                <FormPageLayout title="Create New Account">
                  <ShopSignUp />
                </FormPageLayout>
              )}
            />
            <Route
              exact
              path="/account/forgot-password"
              render={() => (
                <FormPageLayout title="Forgot Password">
                  <ForgotPassword />
                </FormPageLayout>
              )}
            />
            <Route
              exact
              path="/account/reset-password/:resetToken"
              render={() => (
                <FormPageLayout title="Reset Password">
                  <PasswordReset />
                </FormPageLayout>
              )}
            />

            {/* Dashboard routes */}
            <Route exact path="/account" component={redirectOverview} />
            <Route exact path="/account/overview" component={OverviewWithDashboard} />
            <Route exact path="/account/users" component={UsersWithDashboard} />
            <Route exact path="/account/profile" component={ProfileWithDashboard} />
            <Route exact path="/account/shops" component={ShopsWithDashboard} />
            <Route exact path="/account/shops/:slug" component={ViewShopWithDashboard} />
            <Route exact path="/account/shops/activation/:slug" component={ActivateShopWithDashboard} />
            <Route exact path="/account/shops/update/:slug" component={UpdateShopWithDashboard} />
            <Route path="/account/settings" component={SettingsWithDashboard} />
            {/* Report route */}
            <Route exact path="/account/users/export" component={UserPdfWithDashboard} />
            {/* Masterlist route */}
            <Route exact path="/account/car-makes" component={MakesWithDashboard} />
            <Route exact path="/account/car-models" component={ModelsWithDashboard} />
            <Route exact path="/account/car-series" component={SeriesWithDashboard} />
            <Route exact path="/account/car-trims" component={TrimsWithDashboard} />
            <Route exact path="/account/services" component={ServicesWithDashboard} />
            <Route exact path="/account/pms-lists" component={PmsListsWithDashboard} />
            <Route exact path="/account/pms-lists/update/:id" component={UpdatePmsListWithDashboard} />
            <Route exact path="/account/pms-lists/create" component={CreatePmsListWithDashboard} />
            <Route exact path="/account/preventive-services" component={PreventiveServicesWithDashboard} />
            <Route exact path="/account/preventive-services/update/:id/:pms" component={UpdatePreventiveServiceWithDashboard} />
            <Route exact path="/account/preventive-services/create/:id" component={CreatePreventiveServiceWithDashboard} />

            <Route exact path="/account/vehicles" component={VehiclesWithDashboard} />
            <Route exact path="/account/vehicles/create" component={CreateVehicleWithDashboard} />
            <Route exact path="/account/vehicle/schedules/:slug" component={VehicleSchedulesWithDashboard} />

            <Route exact path="/account/requests" component={RequestsWithDashboard} />
            {/* 404 route */}
            <Route path="*" exact={true} render={() => <NotFound />} />
          </Switch>
        </ModalProvider>
      </Router>
    </Suspense>
  </Provider>
)
