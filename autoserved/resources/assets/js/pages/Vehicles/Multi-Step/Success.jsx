import React from 'react'
import { Link } from 'react-router-dom'

export const Success = () => {

    return (
        <div className="my-10 px-10 border-b border-gray-200">
            <div className="w-full rounded bg-white shadow-lg">
                <div className="flex border-b border-gray-200">
                    <div className="flex-initial self-center">
                    <div className="px-4 py-2 rounded bg-green-500 m-5 text-2xl text-2xl text-white"><i className="material-icons">check</i></div>
                    </div>
                    <div className="flex-auto self-center">
                        <div className="text-lg text-gray-700">Submitted Vehicle Detail</div>
                        <div className="text-xs text-gray-700">You have successfully created a vehicle profile</div>
                    </div>
                    <div className="flex-initial p-5 self-center">
                        <Link onClick={previousStep} to="#" className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded">Create another vehicle</Link>
                    </div>
                </div>
                <div className="p-5 block">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            Left
                        </div>
                        <div className="col-span-1">
                            <div className="flex">
                                <div className="flex-initial mr-5">
                                <div className="p-2 rounded-full text-white text-center align-middle" style={{backgroundColor: '#' + convert.keyword.hex("black"), width: '45px'}}>
                                    <i className="material-icons">directions_car</i>
                                </div>
                                </div>
                                <div className="flex-auto">
                                <div>
                                    2006 Aston Martin Cygnet AT Gasoline 1.3 CVT (98 hp)
                                </div>
                                <span>2006 Aston Martin Cygnet AT Gasoline 1.3 CVT (98 hp)</span>
                                </div>
                            </div>
                            <div className="flex pl-16">
                                <div className="flex-initial mr-5">LAT</div>
                                <div className="flex-auto">LNG</div>
                            </div>
                            <div className="flex pl-16">
                                <div className="flex-initial mr-5">VIN</div>
                                <div className="flex-auto">Plate Number</div>
                            </div>
                            <div className="flex pl-16">
                                <div className="flex-initial mr-5">Date Purchased: 2019-06-12</div>
                                <div className="flex-auto">Last Serviced: 2019-06-12</div>
                            </div>                             
                            <div className="pl-16">Current Mileage: 85242</div>
                            <Link to="/account/vehicles/schedule" className="rounded bg-blue-500 hover:bg-blue-700 text-white px-4 py-2">View Schedule</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}