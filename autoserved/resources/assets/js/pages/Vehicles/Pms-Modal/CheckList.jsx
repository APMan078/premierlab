import React, {useEffect} from 'react'
import Switch from "react-switch"
import axios from 'axios'
export const CheckList = ({
    values,
    setValues,
    step,
    progress,
    nextStep,
    check_items,
    clean_items,
    change_items
}) => {


    return (
        <>
        <div className="p-10 py-5 pt-0">
            <div className="p-5 bg-blue-700 text-white rounded text-sm">
                The recommendations below are based on best practices. Refer to your owners manual or qualified technician for vehicle's specific maintenance requirements.
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <div className="text-lg my-3">Check</div>
                  <ul className="list-disc">
                    {check_items.map((item, idx) => {
                      return(
                        <li className="ml-5" key={idx}>
                          <div className="flex mb-3">
                            <span className="flex-auto text-sm">{item}</span>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="col-span-1">
                  <div className="text-lg my-3">Clean</div>
                  <ul className="list-disc">
                    {clean_items.map((item, idx) => {
                      return(
                        <li className="ml-5" key={idx}>
                          <div className="flex mb-3">
                            <span className="flex-auto text-sm">{item}</span>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                  <div className="text-lg my-3">Change</div>
                  <ul className="list-disc">
                    {change_items.map((item, idx) => {
                      return(
                        <li className="ml-5" key={idx}>
                          <div className="flex mb-3">
                            <span className="flex-auto text-sm">{item}</span>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
            </div>
        </div>
        <div className="pt-5 pb-5 border-t w-full px-10">
          <button onClick={nextStep} className="float-right rounded text-sm bg-blue-500 hover:bg-blue-700 px-5 py-2 text-white mb-5">Next</button>
        </div>
        </>
    )
}