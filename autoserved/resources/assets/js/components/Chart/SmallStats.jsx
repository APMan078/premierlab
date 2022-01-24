import React, { useEffect } from 'react'
import Chart from "../../utils/chart";
import PropTypes from "prop-types";
import shortid from "shortid";
import classNames from "classnames";

export const SmallStats = props => {
    const canvasRef = React.createRef()

    useEffect(() => {
        const chartOptions = {
            ...
            {
                maintainAspectRatio: true,
                responsive: true,
                legend: {
                display: false
            },
            tooltips: {
            enabled: false,
            custom: false
            },
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0.33
                }
            },
            scales: {
                xAxes: [
                    {
                    gridLines: false,
                    ticks: {
                        display: false
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: false,
                        scaleLabel: false,
                        ticks: {
                        display: false,
                        isplay: false,
                        // Avoid getting the graph line cut of at the top of the canvas.
                        // Chart.js bug link: https://github.com/chartjs/Chart.js/issues/4790
                        suggestedMax: Math.max(...props.chartData[0].data) + 1
                        }
                    }
                ]
            }
        },
        ...props.chartOptions
        };
    
        const chartConfig = {
            ...
            {
                type: "line",
                data:   {
                        ...{
                                labels: props.chartLabels
                            },
                        ...{
                                datasets: props.chartData
                            }
                        },
                options: chartOptions
            },
            ...props.chartConfig
        }
    
        new Chart(canvasRef.current, chartConfig)
    })

    const { variation, label, value, percentage, increase } = props

    const cardClasses = classNames(
      "stats-small",
      variation && `stats-small--${variation}`
    )

    const cardBodyClasses = classNames(
      variation === "1" ? "p-0 d-flex" : "px-0 pb-0"
    )

    const innerWrapperClasses = classNames(
      "d-flex",
      variation === "1" ? "flex-column m-auto" : "px-3"
    )

    const dataFieldClasses = classNames(
      "stats-small__data",
      variation === "1" && "text-center"
    )

    const labelClasses = classNames(
      "stats-small__label",
      "text-uppercase",
      variation !== "1" && "mb-1"
    )

    const valueClasses = classNames(
      "stats-small__value",
      "count",
      variation === "1" ? "my-3" : "m-0"
    )

    const innerDataFieldClasses = classNames(
      "stats-small__data",
      variation !== "1" && "text-right align-items-center"
    )

    const percentageClasses = classNames(
      "stats-small__percentage",
      `stats-small__percentage--${increase ? "increase" : "decrease"}`
    )

    const canvasHeight = variation === "1" ? 120 : 60

    return (
        <>
        <div className="p-5">
            <div className="float-left">
                <div className="uppercase text-xs">{label}</div>
                <div className="text-lg">{value}</div>
            </div>
            <div className="float-right">
                <div className="text-green-500">
                <div className="inline-block item-icon-wrapper align-middle pt-1 pr-1">
                    <i className="material-icons">arrow_drop_down</i>
                </div>
                <span>{percentage}</span>
                </div>
            </div>
        </div>
        <div className="w-full" >
            <canvas
                height={canvasHeight}
                ref={canvasRef}
                className={`stats-small-${shortid()}`}
            />
        </div>
        </>
    )
}

SmallStats.propTypes = {

  variation: PropTypes.string,

  label: PropTypes.string,

  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  increase: PropTypes.bool,

  chartConfig: PropTypes.object,

  chartOptions: PropTypes.object,

  chartData: PropTypes.array.isRequired,

  chartLabels: PropTypes.array
}

SmallStats.defaultProps = {
    increase: true,
    percentage: 0,
    value: 0,
    label: "Label",
    chartOptions: Object.create(null),
    chartConfig: Object.create(null),
    chartData: [],
    chartLabels: []    
}