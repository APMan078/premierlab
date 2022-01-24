import React from 'react'

export const PageHeader = props => {

    return (
        <div>
            <div className="page-header py-6 float-left">
                <span className="text-xs uppercase">{ props.subTitle }</span>
                <h3 className="text-3xl">{ props.title }</h3>
            </div>
            {props.children != 'null' &&
                <div className="py-6 float-right">
                    <div className="float-right">
                        {props.children}
                    </div>
                </div>
            }
            <div className="clearfix"></div>
        </div>
    )
} 
