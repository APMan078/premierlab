import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export const ListCompletion = ({
  href,
  list,
  points,
  subTitle,
  totalPoints,
  title,
  enabled
}) => {
  const completedItems = list.filter(item => item.done);
  const shouldUsePoints = points || totalPoints;
  const completion = shouldUsePoints ? points : completedItems.length
      ? (completedItems.length / list.length) * 100 : 0
  
  return (

    <div className="rounded-lg shadow-lg bg-white mt-5">
        <div className="mx-auto text-gray-700 text-md p-5 border-b rounded-t-lg border-gray-300">
            {title}
            <div className="text-sm">{subTitle}</div>
        </div>

        <div className="p-5 text-sm">
            <div className="progress-label float-left">Progress ({completedItems.length}/{list.length})</div>
            <div className="float-right">
                {
                    shouldUsePoints
                    ? points + ' point(s)'
                    : completedItems.length
                    ? (completedItems.length / list.length) * 100
                    : 0
                }
            </div>
            <div className="clearfix"></div>
            <div className="shadow w-full bg-gray-300">
                <div className="bg-blue-500 text-xs leading-none py-1 text-center text-white my-2" style={{ width: completion + '%' }}>
                    {shouldUsePoints
                        ? `${points}`
                        : `${
                            completedItems.length
                                ? (completedItems.length / list.length) * 100
                                : 0
                            } %`}
                </div>
            </div>
            {list.map((item, idx) => {
                const title = item.title
                const done = item.done
                return (
                    <div key={idx}>
                        {done ? (
                            <div className="py-2 line-through text-blue-500 cursor-not-allowed">
                                <i className="material-icons border border-gray-400 text-xs p-2 bg-gray-200 mr-5">check</i> {title}
                            </div>
                        ) : (
                            <div className="py-2 cursor-not-allowed">
                                <i className="material-icons border border-gray-400 text-xs p-2 bg-gray-200 text-gray-200 mr-5">check</i> {title}
                            </div>
                        )}
                    </div>            
                )
            })}
        </div>
        <div className="text-right p-5 text-sm border-t border-gray-300">
            {!enabled && (
                <Link to={href}>Complete Items <i className="material-icons text-xs">chevron_right</i></Link>
            )}
        </div>
    </div>
  )
}

ListCompletion.defaultProps = {
    href: "#",
    list: [],
    enabled: false
  };
  
  ListCompletion.propTypes = {
    href: PropTypes.string,
    list: PropTypes.array,
    points: PropTypes.number,
    subTitle: PropTypes.string,
    totalPoints: PropTypes.number,
    title: PropTypes.string.isRequired,
    enabled: PropTypes.bool
  };
  