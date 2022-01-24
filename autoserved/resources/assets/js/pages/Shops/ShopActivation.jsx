import { connect } from 'react-redux'
import React, { Fragment, useEffect, useState } from 'react'
import {  PageHeader, FileUpload, DynamicList } from 'components'
import Swal from 'sweetalert2'
import { selectShopDetails } from 'store/selectors/shops'
import { currentUserSelector } from 'store/selectors/session'
import { Link, Redirect } from 'react-router-dom'
import defaultShopAvatar from 'default-shop-avatar.png'
import { 
  getShops as getShopsAction,
  getShop as getShopAction,
  updateShop as updateShopAction,
  deleteShop as deleteShopAction 

} from 'store/action-creators/shops'
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

const useForm = ({ initialValues, validate }) => {
  const initializeValues = (obj) => JSON.parse(JSON.stringify(obj, (k, v) => (v === null ? '' : v)))
  const [values, setValues] = React.useState(initializeValues(initialValues) || {})
  const [touchedValues, setTouchedValues] = React.useState({})
  const [errors, setErrors] = React.useState({})
  
  const handleChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    console.log(value)
    if ( target.type === "checkbox" ) {
      if( target.value === 0 ) {
        const value = false
      } else {
        const value =  true
      }
    } else {
      const value = target.value
    }
    const name = target.name
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleBlur = event => {
    const target = event.target
    const name = target.name
    setTouchedValues({
      ...touchedValues,
      [name]: true
    })
    const e = validate(values)
    setErrors({
      ...errors,
      ...e
    })
  }

  const onSubmit = event => {

  }
  const handleSubmit = event => {
    event.preventDefault()
    const e = validate(values)
    setErrors({
      ...errors,
      ...e
    })
    console.log('Application:', values);
    onSubmit({ ...values, e })
  }

  const certificationUploadHandler = fileData => {
    console.log(fileData)
  }

  const registrationUploadHandler = fileData => {
    console.log(fileData)
  }

  const permitUploadHandler = fileData => {
    console.log(fileData)
  }

  const handleDynamicList = (fields, type) => {
    const name = type
    setValues({
      ...values,
      [name]: fields
    })
  }

  return {
    values,
    setValues,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleDynamicList,
    certificationUploadHandler,
    registrationUploadHandler,
    permitUploadHandler
  }
}

function ShopActivationComponent({ getShops, deleteShop, impersonateShop, shops, user }) {
  const { user_type } = user
  const initialValues = [{}]
  const { 
    values,
    setValues,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleDynamicList,
    certificationUploadHandler,
    registrationUploadHandler,
    permitUploadHandler } = useForm({
    initialValues,
    validate(values) {
      const errors = {}

      return errors
    }
  })
  
  return (
    <Fragment>
      <div className="px-10 py-5">
        <div className="w-full">
          <PageHeader title="Activation Requirements" subTitle="Shop" >
            <Link to={`/account/shops/`} className="ml-2 bg-gray-100 hover:bg-gray-200 text-gray-700 shadow font-bold py-2 px-4 rounded inline-flex items-center">
              <i className="material-icons text-xs mr-5">arrow_back</i>
              <span>Go Back</span>
            </Link>
          </PageHeader>
        </div>
        <div className="w-full rounded-lg bg-white shadow-lg py-10">
            <table className="w-full border border-gray-300">
                <thead className="bg-gray-100 border border-gray-300">
                    <tr>
                        <th className="md:hidden lg:table-cell"></th>
                        <th className="py-3">Name</th>
                        <th>Size</th>
                        <th className="md:hidden lg:table-cell">File Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="py-5 text-center">
                    <tr className="p-2">
                        <td className="border border-gray-300 md:hidden lg:table-cell"><i className="material-icons rounded-full p-3 bg-gray-200 border border-gray-400 text-sm text-gray-700">insert_drive_file</i></td>
                        <td className="border border-gray-300">
                            <div className="text-xl">BIR Certificate of Registration</div>
                            <div className="text-xs">Last updated 6 months ago</div>
                        </td>
                        <td className="border border-gray-300">-</td>
                        <td className="border border-gray-300 md:hidden lg:table-cell">-</td>
                        <td className="py-5 border border-gray-300">
                          <FileUpload uploadHandler={certificationUploadHandler} name="certification" value={values.certification ? values.certification : null} />
                        </td>
                    </tr>
                    <tr className="p-2">
                        <td className="border border-gray-300 md:hidden lg:table-cell"><i className="material-icons rounded-full p-3 bg-gray-200 border border-gray-400 text-sm text-gray-700">insert_drive_file</i></td>
                        <td className="border border-gray-300">
                            <div className="text-xl">Mayor's Permit</div>
                            <div className="text-xs">Last updated 6 months ago</div>
                        </td>
                        <td className="border border-gray-300">-</td>
                        <td className="border border-gray-300 md:hidden lg:table-cell">-</td>
                        <td className="py-5 border border-gray-300">
                        <FileUpload uploadHandler={permitUploadHandler} name="permit" value={values.permit ? values.permit : null} />
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 md:hidden lg:table-cell"><i className="material-icons rounded-full p-3 bg-gray-200 border border-gray-400 text-sm text-gray-700">insert_drive_file</i></td>
                        <td className="border border-gray-300">
                            <div className="text-xl">SEC/DTI Certificate of Registration</div>
                            <div className="text-xs">Last updated 6 months ago</div>
                        </td>
                        <td className="border border-gray-300">-</td>
                        <td className="border border-gray-300 md:hidden lg:table-cell">-</td>
                        <td className="py-5 border border-gray-300">
                        <FileUpload uploadHandler={registrationUploadHandler} name="registration" value={values.registration ? values.registration : null} />
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="5" className="text-right text-sm text-gray-600 py-3 px-10">Maximum file size per file: 5MB - (JPEG, PNG, PDF, DOCX)</td>
                    </tr>
                </tfoot>
            </table>
        </div>

        <div className="w-full rounded-lg bg-white shadow-lg py-2 mt-10">
            <div className="text-lg px-5 py-3 border-b border-gray-300">Additional Information</div>
            <div className="px-5 py-3 grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <label># of Lifters</label>
                    <input className="w-full rounded border border-gray-300 px-3 py-2 my-3" type="number" name="lifters" onChange={(() => {})} value="0" />
                </div>
                <div className="col-span-1">
                    &nbsp;
                </div>
                <div className="col-span-1">
                    <label>Certification</label>
                    <div className="mt-2">
                      <DynamicList type="merch_cert" value={values.merch_cert || [[]]}  handleChange={handleDynamicList} />
                    </div>
                </div>
                <div className="col-span-1">
                    <label>Special Tools</label>
                    <div className="mt-2">
                      <DynamicList type="special_tools" value={values.special_tools || [[]]}  handleChange={handleDynamicList} />
                    </div>
                </div>            
            </div>
            <div className="p-5 py-2 border-t border-gray-300">
                <button type="submit" className="float-right bg-green-500 hover:bg-green-600 text-white px-5 py-2 my-3 rounded-lg">Save Changes</button>
            </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </Fragment>
  )
}

export default connect(
  (state, props) => {
    const query = props.match.params.slug
    return({
        shops: selectShopDetails(state, query),
        user: currentUserSelector(state)
      }
    )},
  dispatch => ({
    getShops: () => dispatch(getShopsAction())
  })
)(ShopActivationComponent)