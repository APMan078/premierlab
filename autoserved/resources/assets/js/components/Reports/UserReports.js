import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { selectAllMembers } from 'store/selectors/members'
import {
  getMembers as getMembersAction
} from 'store/action-creators/members'

export const UserReports = props => {
    const members = props.data
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
    const ref = React.createRef()

    let newDate = new Date()
    let date = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()
    let separator = '/'
    const [counter, setCounter] = React.useState(0)
    function countMe() {
        const newCount = setCounter(counter+1)
        return newCount
    }
    return(
        <div ref={props.target} className="p-10 m-10">
            <section  className="p-10">
                <table>
                    <thead className="border border-gray-400">
                        <tr>
                            <th colSpan="3" className="text-left p-5">AutoServed User Report</th>
                            <th colSpan="3" className="text-right p-5">Date: {`${month<10?`0${month}`:`${month}`}${separator}${date}${separator}${year}`}</th>
                        </tr>
                        <tr className="text-center">
                            
                            <th className="px-2 py-2 border border-gray-400">Full Name</th>
                            <th className="px-2 py-2 border border-gray-400">Email</th>
                            <th className="px-2 py-2 border border-gray-400">Mobile</th>
                            <th className="px-2 py-2 border border-gray-400">Type</th>
                            <th className="px-2 py-2 border border-gray-400">Country</th>
                        </tr>
                    </thead>
                    <tbody className="border border-gray-400">
                        {members.map(({first_name,last_name,email,mobile,user_type,country,slug}) => (
                        <tr className="text-center" key={slug}>
                            <td className="px-2 py-2 border border-gray-400">{first_name} {last_name}</td>
                            <td className="px-2 py-2 border border-gray-400">{email}</td>
                            <td className="px-2 py-2 border border-gray-400">{mobile}</td>
                            <td className="px-2 py-2 border border-gray-400">{user_type}</td>
                            <td className="px-2 py-2 border border-gray-400">{country}</td>
                        </tr>
                        ))}

                    </tbody>
                    <tfoot></tfoot>
                </table>
            </section>
        </div>
    )
}
