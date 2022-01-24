import { connect } from 'react-redux'
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { PageHeader, CollapsibleCard } from 'components'
import NumberFormat from 'react-number-format'
import Swal from 'sweetalert2'
import { selectAllShop_services } from 'store/selectors/shop_services'
import { currentUserSelector } from 'store/selectors/session'
import {
    getActiveService as getActiveServiceAction,
    getShop_services as getShop_servicesAction,
    updateShop_service as updateShop_serviceAction,
    createShop_service as createShop_serviceAction,
    deleteShop_service as deleteShop_serviceAction,
} from 'store/action-creators/shop_services'
import { selectAllPms_lists } from 'store/selectors/pms_lists'
import {
    getPms_lists as getPms_listsAction,
    updatePms_list as updatePms_listAction,
    createPms_list as createPms_listAction,
    deletePms_list as deletePms_listAction,
  } from 'store/action-creators/pms_lists'
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

function PreventivesComponent({ getPms_lists, deletePms_list, pms_lists, user, shop_services, getShop_services }) {
    const { user_type } = user

    if (user_type != 'admin' && user_type != 'vendor') {
      return <Redirect from='/account' to="/account/overview" />
    }

    const populateShop_services = async () => {
        await getShop_services()
    }

    const populatePms_lists = async () => {
        await getPms_lists()
    }

    useEffect(() => {
        populateShop_services()
    }, [])

    
    useEffect(() => {
        populatePms_lists()
    }, [])



    console.log(shop_services)

    function isActive(query) {
        console.log(query)
        let data = shop_services.filter( pms => pms.meta == query)
        console.log(data)
        if (data.length != 0) {
            return <span className="p-1 rounded px-3 text-xs text-white bg-green-500 font-normal">Completed</span>
        } else {
            return ''
        }
    }
    
    function manageCreate(query, id) {
    let data = shop_services.filter( pms => pms.meta == query)

    if(data.length != 0) {
        return `/account/preventive-services/update/${data.map( item => item.id)}/${id}`
    } else {
        return `/account/preventive-services/create/${id}`
    }
    }
    return(
        <Fragment>
        <div className="bb-white px-10 py-5">
          <PageHeader title="Preventive Services" subTitle="Services" ></PageHeader>
          <div className="w-full">
            <CollapsibleCard title="PMS Mileage">
                {pms_lists.map((pms, idx) => {
                    const id = pms.id
                    const mileage = pms.mileage
                    const change_items = pms.change_items
                    return (
                        <div key={idx} className="flex mb-5">
                            <div className="w-2/3">
                                <div>
                                    <span className="text-blue-500 text-md font-bold mr-5">
                                        <NumberFormat value={mileage} displayType={'text'} thousandSeparator={true} suffix={' km'} renderText={value => <>{value}</>} />
                                    </span>
                                    {isActive(mileage)}
                                    <div className="text-xs text-gray-700 pt-2">{change_items}</div>
                                </div>
                                
                            </div>
                            <div className="w-1/3">
                                <Link to={manageCreate(mileage, id)} >
                                    <div className="w-full rounded py-2 bg-blue-500 text-white text-center">
                                        <i className="material-icons">edit</i> Manage Service
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </CollapsibleCard>
          </div>
        </div>
      </Fragment>
    )
}

  export default connect(
    state => ({
        shop_services: selectAllShop_services(state),
        pms_lists: selectAllPms_lists(state),
        user: currentUserSelector(state)
      }),
      dispatch => ({
        getShop_services: () => dispatch(getShop_servicesAction()),
        getPms_lists: () => dispatch(getPms_listsAction()),
        deletePms_list: id => {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              dispatch(deletePms_listAction(id))
              Alert('success', 'User successfully deleted!')
            }
          })
        }
      })
  )(PreventivesComponent)