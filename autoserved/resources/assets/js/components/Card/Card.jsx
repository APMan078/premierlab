import React from 'react'
import { Link } from 'react-router-dom'
export const Card = ({ title, children, className = '' }) => (
  <div
    className={`rounded overflow-hidden shadow border border-grey-light bg-white text-grey-darker ${className}`}
  >
    {title && (
      <div className="text-lg font-bold py-3 px-4 border-b border-grey-light">
        {title}
      </div>
    )}
    {children}
  </div>
)

export const CollapsibleCard = ({ title, subTitle = '', children, className = '', collapse = '', padding = true }) => {
  const [toggle, setToggle] = React.useState(collapse)
  const [icon, setIcon] = React.useState("arrow_drop_down")
  const handleToggle = () => {
    setToggle(toggle === "hidden" ? "" : "hidden")
    setIcon(icon === "arrow_drop_down" ? "arrow_drop_up" : "arrow_drop_down")
  }
  return (
    <div className={`rounded-lg shadow-lg bg-white ${className}`}>
        <div className="mx-auto text-gray-700 text-md border-b rounded-t-lg border-gray-300">
            {title && (
                <>
                  <div className="float-left p-5 pb-3">
                    <span className="font-bold">{title}</span>
                    {subTitle != '' &&
                      <p>{subTitle}</p>
                    }
                  </div>
                  <div className="float-right p-5 pb-3">
                    <Link to="#" onClick={handleToggle}>
                      <i className="material-icons">{icon}</i>
                    </Link>
                  </div>
                  <div className="clearfix"></div>
                </>
            )}
        </div>                
        <div className={`${padding == true ? 'p-5' : ''} ${toggle}`}>
            {children}
        </div>
    </div>
  )
} 

export const CardContent = ({ className = '', children }) => (
  <div className={`p-8 ${className}`}>{children}</div>
)

export const CardListItem = ({ children }) => (
  <div className="p-4 border-b border-grey-light">{children}</div>
)
