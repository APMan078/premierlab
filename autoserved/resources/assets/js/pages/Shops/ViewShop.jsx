import { connect } from 'react-redux'
import React, { Fragment, useEffect, useState } from 'react'
import {  PageHeader, ListCompletion } from 'components'
import Swal from 'sweetalert2'
import { Link, Redirect } from 'react-router-dom'
import defaultShopAvatar from 'default-shop-avatar.png'
import { getShop as getShopAction } from 'store/action-creators/shops'
import { selectShopDetails } from 'store/selectors/shops'
import { currentUserSelector } from 'store/selectors/session'
import { shopProfileCompletion, shopActivationRequirements } from '../../utils/helper'
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



function ViewShopComponent({ getShop, shops, user, match }) {
  const { user_type } = user

  const query = match.params.slug
  const populateShop = async () => {
    await getShop(query)
  }

  useEffect(() => {
    populateShop()
  }, [])  

  console.log(shops)


  if (!shops[0]) {
    return <Redirect to="/account/shops" />
  }
  const {name, slug, address, city, zip, type, description, contact, payment_method, features, amenities, tools, completion, level, status, operations, avatar, banner } = shops[0]
  const profileItems = shopProfileCompletion(shops[0]).filter(item => !item.done);
  return (
    <Fragment>
      <div className="flex flex-wrap px-10 py-5">
        <div className="w-full">
          <PageHeader title="Details" subTitle="Shop" >
            <Link to={`/account/shops/update/${slug}`} className="ml-2 bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <i className="material-icons">view_module</i>
              <span>Update Shop Details</span>
            </Link>
          </PageHeader>
        </div>
        <div className="w-full md:w-2/3 pr-10">
            <div className="rounded-lg shadow-lg bg-white">
              <div className="float-left">
                <div className="h-48 overflow-hidden">
                  <img className="rounded-t-lg" src={ banner || 'https://via.placeholder.com/975x280.png?text=Your shop background image here' } />
                </div>
                <img
                    className="p-5 w-32 object-fill mx-auto -mt-16 rounded-full"
                    src={avatar || defaultShopAvatar}
                />
              </div>
              <div className="p-5 border-b border-gray-300 text-center">
                <div className="text-3xl">
                  { name ? name : 'Shop Name' }
                </div>
                <div className="text-xs px-5 py-1 my-3 bg-teal-500 text-white w-32 rounded-full m-0 mx-auto">
                  Verified - Tier 2
                </div>
                <div className="text-xs">
                  { type ? type : '-' }
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-5 border-b border-gray-300 ">
                <div className="p-5">
                  Description
                  <p className="text-blue-500">
                    {description ? description : 'none'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-5">
                <div className="p-5">
                  Email
                  <p className="text-blue-500">
                    {user.email}
                  </p>
                </div>
    
                <div className="p-5">
                  Address 
                  <p className="text-blue-500">
                    {address ? address : 'n/a'}
                  </p>
                </div>
    
                <div className="p-5">
                  Phone
                  <p className="text-gray-500">
                    {contact ? contact : 'none'} 
                  </p>
                </div>
    
                <div className="p-5">
                  Payment Method
                  <p className="text-gray-500">
                    {payment_method ? payment_method : 'none'}
                  </p>
                </div>

              </div>
            </div>

            <div className="rounded-lg shadow-lg bg-white mt-5">
              <div className="mx-auto text-gray-700 text-md p-5 border-b rounded-t-lg border-gray-300">
                  Operating Hours
              </div>
              <div className="p-5">
                <table className="w-full">
                  <thead className="bg-gray-300 text-gray-900">
                    <tr>
                      <th className="py-3">Sunday</th>
                      <th className="py-3">Monday</th>
                      <th className="py-3">Tuesday</th>
                      <th className="py-3">Wednesday</th>
                      <th className="py-3">Thursday</th>
                      <th className="py-3">Friday</th>
                      <th className="py-3">Saturday</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      { !operations &&
                        <>  
                          <td className="py-3 text-red-700">Closed</td>
                          <td className="py-3 text-red-700">Closed</td>
                          <td className="py-3 text-red-700">Closed</td>
                          <td className="py-3 text-red-700">Closed</td>
                          <td className="py-3 text-red-700">Closed</td>
                          <td className="py-3 text-red-700">Closed</td>
                          <td className="py-3 text-red-700">Closed</td>
                        </>
                      }
                      { operations && 
                        <>
                          { operations.map((operation, idx) => (
                            <td className={operation.closed ? "py-3 text-red-700" : "py-3 text-gray-700" } key={idx}>
                              {operation.closed ? 'closed' : <><div>{operation.start}</div> <div>{operation.end}</div></> }
                            </td>
                          ))}
                        </>
                      }
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg col-span-1 shadow-lg bg-white mt-5">
                <div className="mx-auto text-gray-700 text-md p-5 border-b rounded-t-lg border-gray-300">
                    Features
                </div>
                { features && 
                  <>
                    { features.map((feature, idx) => (
                      <div key={idx} className="py-2">{feature}</div>
                    ))}
                  </>
                }
                { features ? '' : <div className="px-5 py-2">None</div> }
              </div>

              <div className="rounded-lg col-span-1 shadow-lg bg-white mt-5">
                <div className="mx-auto text-gray-700 text-md p-5 border-b rounded-t-lg border-gray-300">
                    Special Tools
                </div>
                { tools && 
                  <>
                    { tools.map((tool, idx) => (
                      <div key={idx} className="py-2">{tool}</div>
                    ))}
                  </>
                }
                { tools ? '' : <div className="px-5 py-2">None</div> }
              </div>  

              <div className="rounded-lg col-span-1 shadow-lg bg-white mt-5">
                <div className="mx-auto text-gray-700 text-md p-5 border-b rounded-t-lg border-gray-300">
                    Amenities
                </div>
                { amenities && 
                  <>
                    { amenities.map((amenity, idx) => (
                      <div key={idx} className="py-2">{amenity}</div>
                    ))}
                  </>
                }
                { amenities ? '' : <div className="px-5 py-2">None</div> }
              </div>                
            </div>
        </div>
        <div className="w-full md:w-1/3 rounded-lg">
          {profileItems.length !== 0 && (
            <div className="bg-teal-400 text-center rounded-lg text-white py-5 mb-5">Complete profile to enable activation requirements submission.</div>
          )}
          <ListCompletion
            title="Profile Completion"
            list={shopProfileCompletion(shops[0])}
            href={`/account/shop/manage/${slug}`}
          />

          <ListCompletion
            subTitle="Your activation requirements will be verified"
            title="Activation Requirements"
            list={shopActivationRequirements(shops[0].application)}
            points={shops[0].completion ? shops[0].completion * 100 : 0}
            totalPoints={100}
            href={`/account/shops/activation/r4eNV${slug}`}
            enabled={profileItems.length !== 0}
          />    
          
        </div>
      </div>
    </Fragment>
  )
}

export default connect(
  (state, props) => {
    const query = props.match.params.slug
    return ({
      shops: selectShopDetails(state, query),
      user: currentUserSelector(state)
    })
  },
  dispatch => ({
    getShop: id => dispatch(getShopAction(id))
  })
)(ViewShopComponent)