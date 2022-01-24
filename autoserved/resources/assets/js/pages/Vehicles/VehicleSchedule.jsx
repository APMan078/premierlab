import { connect } from 'react-redux'
import axios from 'axios'
import { compose } from 'recompose'
import { reduxForm, Field } from 'redux-form'
import { useModal } from 'react-context-modals'
import React, { Fragment, useEffect, useState } from 'react'
import { PageHeader, CollapsibleCard } from 'components'
import NumberFormat from 'react-number-format'
import convert from 'color-convert'
import Swal from 'sweetalert2'
import { selectAllSchedules } from 'store/selectors/schedules'
import { currentUserSelector } from 'store/selectors/session'
import {
    getSchedules as getSchedulesAction
  } from 'store/action-creators/schedules'
import {
    getRequests as getRequestsAction,
    updateRequest as updateRequestAction,
    createRequest as createRequestAction,
    deleteRequest as deleteRequestAction,
  } from 'store/action-creators/userRequests'
import { Link, Redirect } from 'react-router-dom'
import defaultProfileImage from 'default-avatar.png'
import { PmsModalComponent } from './Pms-Modal'
import { ChangeOilComponent } from './Change-Oil'


const RequestChangeOilModal = compose(
connect(
  (state, ownProps) => ({
    initialValues: ownProps
  }),
  (dispatch, { hideModal }) => ({
    onSubmit: values => {
      dispatch(createRequestAction(values))
      dispatch(getRequestsAction())
      hideModal()
      Alert('success', 'Change Oil Request Completed')
    }
  })
),
reduxForm({
  form: 'request-change-oil'
})
)(ChangeOilComponent)

const RequestPmsModal = compose(
connect(
  (state, ownProps) => ({
    initialValues: ownProps
  }),
  (dispatch, { hideModal }) => ({
    onSubmit: values => {
      dispatch(createRequest(values))
      dispatch(getRequest())
      hideModal()
      Alert('success', 'PMS Request Completed')
    }
  })
),
reduxForm({
  form: 'request-pms'
})
)(PmsModalComponent)

const Toast = Swal.mixin({
toast: true,
position: 'top-end',
showConfirmButton: false,
timer: 3000
})

const Alert = (type, title) => Toast.fire({
type: type,
title: title
})

function VehicleScheduleComponent({ getSchedules, deleteSchedule, schedules, user, match }) {
    const { user_type } = user
    const query = match.params.slug
    const [request, setRequest] = React.useState()
    const { showModal } = useModal()
    if (user_type != 'admin' && user_type != 'customer') {
      return <Redirect from='/account' to="/account/overview" />
    }

    const populateSchedules = async () => {
        await getSchedules(query)
    }

    useEffect(() => {
      const fetchRequest = async () => {
          const result = await axios(`/api/requests`)
          setRequest(result.data.data[0].additional.mileage);
      }
      populateSchedules()
      fetchRequest()
    }, [])

    console.log(schedules)
    console.log(request)
    const sched_list = schedules[0]
    const request_data = request || {}
    const {car_sched, vehicle} = sched_list || {}
    console.log(car_sched)
    const { type, make_id, model_id, trim_id, car_year, engine_type, transmission, vin, plate_number, current_mileage, address, city, zip, longitude, latitude, slug, car } = vehicle || {}
    const { color, name, mileage, last_serviced, date_purchased, updated_at } = car || {}

    console.log(request_data)
    function markActive(mileage , data) {
      console.log(data)
      if(request_data == mileage) {
        return (
          <button className="rounded bg-blue-500 cursor-not-allowed text-white px-4 py-2 my-2 text-sm">
            <i className="material-icons text-xs">check</i>{' '}Requested
          </button >
        )
      } else {
        return (
          <Link onClick={() => showModal(RequestPmsModal, data) } to="#" className="rounded bg-green-500 hover:bg-green-600 text-white px-4 py-2 my-2 text-sm">
            <i className="material-icons text-xs">build</i>{' '}Request PMS
          </Link>
        )
      }
    }
    return(
        <Fragment>
        <div className="bb-white px-10 py-5">
          <PageHeader title="Schedules" subTitle="My Garage" >
          <Link className="ml-2 bg-gray-300 hover:bg-gray-500 text-gray-700 shadow font-bold py-2 px-4 rounded inline-flex items-center" to="/account/vehicles">
            <i className="material-icons">arrow_back</i> Go Back
          </Link>
          </PageHeader>
          <div className="py-3 flex">
            <div className="w-1/3 pr-5">
              <div className="w-full rounded bg-white shadow-lg">
                <div className="p-10 border-b border-gray-300">
                  <div className="clearfix ml-10">
                      <img
                          className="p-5 rounded-full w-48 object-fill mx-auto"
                          src={defaultProfileImage}
                      />
                  </div>
                  <div className="mx-auto text-gray-700 text-xl p-5 pb-10 text-center">{name || ''}</div>
                  <div className="text-sm mx-auto rounded border border-gray-500 text-center w-32 px-5 py-2">{plate_number || ''}</div>
                  <div className="text-sm mx-auto text-center py-5">
                    <span className="text-blue-500 font-bold">
                      <NumberFormat value={mileage} displayType={'text'} thousandSeparator={true} suffix={' km'} renderText={value => <>{value}</>} />
                    </span>{' '} 
                    since <span className="font-bold">{date_purchased || ''}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="p-5 px-10 text-gray-600">
                      Engine / Transmission
                      <div className="text-gray-700">{transmission || ''}</div>
                  </div>
                  <div className="p-5 px-10 text-gray-600">
                      Last Serviced
                      <div className="text-gray-700">{last_serviced || '-'}</div>
                  </div>
                  <div className="p-5 px-10 text-gray-600">
                      Last Updated
                      <div className="text-gray-700">{updated_at || '-'}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/3">
              <CollapsibleCard className="mb-5" padding="false" title="Available Services" subTitle="You can request these services anytime.">
                <table className="w-full">
                  <thead className="border-t border-b border-gray-300 bg-gray-200">
                    <tr>
                      <th className="py-2">Service Name</th>
                      <th className="py-2">Last Serviced</th>
                      <th className="py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-5 border-b border-gray-300 text-center text-blue-500 font-bold">Change Oil</td>
                      <td className="py-5 border-b border-gray-300 text-center">-</td>
                      <td className="py-5 border-b border-gray-300 text-center">
                        <button onClick={() => {
                          const className="rounded-lg hidden md:block w-1/2 lg:w-2/3 overflow-visible"
                          const header = `Requesting for Change Oil at ${mileage} km`
                          return(
                            showModal(RequestChangeOilModal, { 
                              type, transmission, current_mileage, city, longitude, latitude, car, className, header 
                              })
                          )
                        } } className="rounded bg-green-500 hover:bg-green-600 text-white px-4 py-2 my-2 text-sm">
                          <i className="material-icons text-xs">build</i>{' '}Request Service
                        </button >
                      </td>
                    </tr>
                    <tr>
                      <td className="py-5 border-b border-gray-300 text-center text-blue-500 font-bold">Change Tire</td>
                      <td className="py-5 border-b border-gray-300 text-center">-</td>
                      <td className="py-5 border-b border-gray-300 text-center">
                        <button className="rounded bg-green-500 hover:bg-green-600 text-white px-4 py-2 my-2 text-sm">
                          <i className="material-icons text-xs">build</i>{' '}Request Service
                        </button >
                      </td>
                    </tr>
                    <tr>
                      <td className="py-5 border-b border-gray-300 text-center text-blue-500 font-bold">Change Battery</td>
                      <td className="py-5 border-b border-gray-300 text-center">-</td>
                      <td className="py-5 border-b border-gray-300 text-center">
                        <button className="rounded bg-green-500 hover:bg-green-600 text-white px-4 py-2 my-2 text-sm">
                          <i className="material-icons text-xs">build</i>{' '}Request Service
                        </button >
                      </td>
                    </tr>
                    <tr>
                      <td className="py-5 border-b border-gray-300 text-center text-blue-500 font-bold">Other</td>
                      <td className="py-5 border-b border-gray-300 text-center">-</td>
                      <td className="py-5 border-b border-gray-300 text-center">
                        <div className="my-2">
                          <Link to="#" className="rounded bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm">
                            <i className="material-icons text-xs">build</i>{' '}Request Service
                          </Link >
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CollapsibleCard>
              <CollapsibleCard className="mb-5" padding="false" title="List of Schedules" subTitle="You can only make requests if the expected schedule is less than a year.">
                <table className="w-full">
                  <thead className="border-t border-b border-gray-300 bg-gray-200">
                    <tr>
                      <th className="py-2">Mileage</th>
                      <th className="py-2">Date</th>
                      <th className="py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {car_sched && car_sched.map((item, idx) => {
                    const moment = require('moment');
                    const { schedule, car_id, type, service_id, slug, mileage} = item || {}
                    const className="rounded-lg hidden md:block w-1/2 lg:w-2/3 overflow-visible"

                    const header = `Requesting for PMS ${mileage} km`
                    return(
                      <tr key={idx}>
                        <td className="py-5 border-b border-gray-300 text-center">
                          <NumberFormat value={mileage} displayType={'text'} thousandSeparator={true} suffix={' km'} renderText={value => <>{value}</>} />
                        </td>
                        <td className="py-5 border-b border-gray-300 text-center">
                          {moment(item.schedule).format('MMMM Do YYYY')}
                          <div className="text-sm text-gray-500">Approximately {moment(schedule, "YYYYMMDD").fromNow()}</div>
                        </td>
                        <td className="py-5 border-b border-gray-300 text-center">
                          {idx > 1 ? (
                            <button className="rounded bg-gray-500 cursor-not-allowed text-white px-4 py-2 my-2 text-sm">
                              <i className="material-icons text-xs">build</i>{' '}Request PMS
                            </button >
                          ) : (
                            markActive(mileage, { schedule, car_id, type, service_id, slug, mileage, className, header })
                          )}

                        </td>
                      </tr>
                    )

                    })}
                  </tbody>
                </table>
              </CollapsibleCard>
            </div>
          </div>
        </div>
      </Fragment>
    )
}

  export default connect(
    state => ({
        schedules: selectAllSchedules(state),
        user: currentUserSelector(state)
      }),
      dispatch => ({
        getSchedules: slug => dispatch(getSchedulesAction(slug))
      })
  )(VehicleScheduleComponent)