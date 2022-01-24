import React from 'react'

import { Card, CardContent } from 'components'
import { Logo } from 'components'
export const FormPageLayout = props => (
  <div className="container mx-auto">
    <div className="flex justify-center md:px-6 md:py-32 h-full md:h-auto ">
      <div className="w-full xl:w-4/4 lg:w-11/12 flex">

        <div
        className="w-full h-screen md:h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
        style={{backgroundImage: "url(" + "https://source.unsplash.com/gbBWpX2sXmU/600x800" + ")" }}
        ></div>

        <div className="w-full h-screen md:h-full lg:w-1/2 bg-white p-5 pl-20 pr-20 pb-20 rounded-lg lg:rounded-l-none">
          <Logo className="mb-3 mt-10"/>
          <h4 className="text-center text-grey-darkest mb-10">{props.title}</h4>
          {props.children}
          <div className="clearfix"></div>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  </div>
)
