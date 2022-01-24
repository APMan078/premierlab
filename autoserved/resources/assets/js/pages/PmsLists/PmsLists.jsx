import { connect } from 'react-redux'
import React, { Fragment, useEffect, useState } from 'react'
import { useModal } from 'react-context-modals'
import { PageHeader } from 'components'
import NumberFormat from 'react-number-format'
import makeData from '../../makeData'
import Swal from 'sweetalert2'
import { selectAllPms_lists } from 'store/selectors/pms_lists'
import { currentUserSelector } from 'store/selectors/session'
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



function PmsListsComponent({ getPms_lists, deletePms_list, pms_lists, user }) {
  const { user_type } = user

  if (user_type != 'admin' && user_type != 'vendor') {
    return <Redirect from='/account' to="/account/overview" />
  }
  const { showModal } = useModal()
  const populatePms_lists = async () => {
    await getPms_lists()
  }

  useEffect(() => {
    populatePms_lists()
  }, [])

  console.log(pms_lists)


  return (
    <Fragment>
      <div className="bb-white px-10 py-5">
        <PageHeader title="Pms_list" subTitle="Accounts" ></PageHeader>
        <div className="w-full">
          <div className="bg-white rounded shadow-lg mb-5">
            <div className="p-5 grid grid-cols-6 gap-4">
              {pms_lists.map((list, idx) => {
                console.log(list.mileage)
                return (
                  <Link key={idx} className="col-span-1 bg-green-500 py-10 text-white text-center" to={`/account/pms-lists/update/${list.id}`}>
                    <NumberFormat value={list.mileage} displayType={'text'} thousandSeparator={true} prefix={'PMS '} suffix={' KM'} renderText={value => <div>{value}</div>} />
                  </Link>
                )
              })}
                  <Link className="col-span-1 bg-gray-500 hover:bg-gray-600 py-10 text-white text-center" to={`/account/pms-lists/create`}>
                    <i className="material-icons text-white text-4xl">add</i>
                  </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default connect(
  state => ({
    pms_lists: selectAllPms_lists(state),
    user: currentUserSelector(state)
  }),
  dispatch => ({
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
)(PmsListsComponent)