import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import ReactToPdf from "react-to-pdf";
import Swal from 'sweetalert2'
import { selectAllMembers } from 'store/selectors/members'
import { CSVLink, CSVDownload } from "react-csv";
import ReactToPrint from 'react-to-print';
import {
  getMembers as getMembersAction
} from 'store/action-creators/members'

const PdfReports = ({members, getMembers}) => {
    const headers = [
        { label: "Full Name", key: "fullname" },
        { label: "Email", key: "email" },
        { label: "Mobile", key: "mobile" },
        { label: "Type", key: "type" },
        { label: "Country", key: "country" }
      ];
      
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
    const options = {
        orientation: 'portrait',
        unit: 'in'
    }
    const populateMembers = async () => {
        await getMembers()
      }
    
      useEffect(() => {
        populateMembers()
      }, [])

      let newDate = new Date()
      let date = newDate.getDate()
      let month = newDate.getMonth() + 1
      let year = newDate.getFullYear()
      let fileSeparator = "-"
      let separator = '/'
    return(
        <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1"></div>
            <div className="col-span-4">
                <div className="m-10">
                    <ReactToPdf targetRef={ref} options={options} onComplete={
                        (() => {
                            Swal.fire(
                                'Generating report',
                                'Your PDF report is now ready!',
                                'success'
                            )
                        })
                    } filename={`report-users-${month<10?`0${month}`:`${month}`}${separator}${date}${separator}${year}.pdf`}>
                        {({toPdf}) => (
                            <button className="ml-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={toPdf} >Generate pdf</button>
                        )}
                    </ReactToPdf>
                    <CSVLink className="ml-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={
                        (() => {
                            Swal.fire(
                                'Generating report',
                                'Your CSV report is now ready!',
                                'success'
                            )
                        })
                    } filename={`report-users-${month<10?`0${month}`:`${month}`}${separator}${date}${separator}${year}.csv`} data={members} headers={headers}>
                        Generate CSV
                    </CSVLink>
                    <ReactToPrint
                        trigger={() => <button className="ml-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" >Print</button>}
                        content={() => ref.current}
                    />
                    <section ref={ref} className="p-10">
                        <table className="bg-white">
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
                            <tbody>
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
            </div>
        </div>
    )
}

export default connect(
    state => ({
        members: selectAllMembers(state),
    }),
    dispatch => ({
        getMembers: () => dispatch(getMembersAction())
    })
  )(PdfReports)