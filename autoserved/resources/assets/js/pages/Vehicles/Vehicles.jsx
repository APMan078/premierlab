import { connect } from 'react-redux'
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { PageHeader, DataTable } from 'components'
import NumberFormat from 'react-number-format'
import convert from 'color-convert'
import Swal from 'sweetalert2'
import { selectAllVehicles } from 'store/selectors/vehicles'
import { currentUserSelector } from 'store/selectors/session'
import {
    getVehicles as getVehiclesAction,
    updateVehicle as updateVehicleAction,
    createVehicle as createVehicleAction,
    deleteVehicle as deleteVehicleAction,
  } from 'store/action-creators/vehicles'
import { Link, Redirect } from 'react-router-dom'

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

function VehicleComponent({ getVehicles, deleteVehicle, vehicles, user }) {
    const { user_type } = user

    if (user_type != 'admin' && user_type != 'customer') {
      return <Redirect from='/account' to="/account/overview" />
    }

    const populateVehicles = async () => {
        await getVehicles()
    }

    useEffect(() => {
        populateVehicles()
    }, [])

    console.log(vehicles)

    const columns = React.useMemo(
      () => [
        {
          id: "car_details",
          accessor: 'car.name',
          Cell: row => {
            const car = row.row.original.car
            const color = car.color
            const name = car.name
            const mileage = car.mileage
            const last_serviced = car.last_serviced
            const date_purchased = car.date_purchased
            const icon = convert.keyword.hex(color)
            console.log(row)
            return(
              <div className="flex py-5">
                <div className="flex-initial content-center mr-5 self-center">
                  <div className="p-2 rounded-full text-white text-center align-middle" style={{backgroundColor: '#' + icon, width: '45px'}}>
                    <i className="material-icons">directions_car</i>
                  </div>
                </div>
                <div className="flex-auto">
                  <div className="grid grid-cols-3 gap-1">
                    <div className="col-span-3 text-blue-500 font-bold">{name}</div>
                    <div className="col-span-1 text-sm text-gray-700">Current Mileage: {mileage}</div>
                    <div className="col-span-1 text-sm text-gray-700">Date Purchased: {date_purchased}</div>
                    <div className="col-span-1 text-sm text-gray-700">Last Serviced: {last_serviced}</div>
                  </div>
                </div>
              </div>


            )
          },
          Header: 'Car Details',
          sortable: true,
          width: 45
        },
        {
          id: "plate_number",
          accessor: 'plate_number',
          className: 'md:hidden xl:table-cell text-center',
          Cell: row => {
            const plate_number = row.row.original.plate_number
            return(
              <div className="rounded border border-gray-700 px-3 py-2 text-xs">{plate_number}</div>
            )
          },
          Header: 'Plate Number',
          sortable: true,
          width: 45
        },
        {
          id: "type",
          accessor: 'type',
          className: 'md:hidden xl:table-cell text-center text-sm',
          Cell: row => {
            const type = row.row.original.type
            return(
              <div className="text-gray-700">{type.toUpperCase()}</div>
            )
          },
          Header: 'Vehicle Type',
          sortable: true,
          width: 45
        },     
        {
          id: "action",
          accessor: 'id',
          Cell: row => {
            const id = row.row.original.id
            const name = row.row.original.name
            const type_id = row.row.original.type_id
            const header = 'Update Car Make'
            const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible"
            const update = "Update Car Make"
            console.log(row)
            return (
              <div className="float-left">
                <Link className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-4 rounded" to={`/account/vehicle/schedules/${id}`}>
                  Schedule
                </Link>{' '}
                <Link className="bg-orange-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-4 rounded" to="#">
                  Edit
                </Link>{' '}
                <Link className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-4 rounded" onClick={() => deleteMake(id)} to="#">
                  Delete
                </Link>
              </div>
            )
          },
          Header: 'Action',
          sortable: false,
          width: 45
        },
      ],
      []
    )
  
  
    const [filteredData, setFilteredData] = useState(vehicles)
    const handleSetData = vehicles => {
      setFilteredData(vehicles)
    }

    return(
        <Fragment>
        <div className="bb-white px-10 py-5">
          <PageHeader title="Vehicles" subTitle="My Garage" >
          <Link className="ml-2 bg-blue-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded inline-flex items-center" to="/account/vehicles/create">
            <i className="material-icons">add</i> Create New Vehicle
          </Link>
          </PageHeader>
          <DataTable columns={columns} data={vehicles} />
        </div>
      </Fragment>
    )
}

  export default connect(
    state => ({
        vehicles: selectAllVehicles(state),
        user: currentUserSelector(state)
      }),
      dispatch => ({
        getVehicles: () => dispatch(getVehiclesAction()),
        deleteVehicle: id => {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              dispatch(deleteVehicleAction(id))
              Alert('success', 'User successfully deleted!')
            }
          })
        }
      })
  )(VehicleComponent)