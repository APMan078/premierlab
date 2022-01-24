import React, { Fragment, useEffect } from 'react'
import { useModal } from 'react-context-modals'
import PropTypes from "prop-types";
import { NeutralButton, PageHeader, SmallStats, OverviewAlerts } from 'components'
import colors from "../../utils/colors";
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { selectAllOverview } from 'store/selectors/overview'
import {
  getOverview as getOverviewAction,
} from 'store/action-creators/overview'
import { Link, Redirect } from 'react-router-dom'
import { currentUserSelector } from 'store/selectors/session'

const OverviewComponent = ({ smallStats, getOverview, overview, user}) => {
  const { user_type, vehicle_count } = user
  const [relocate, setRelocate] = React.useState('')

  const populateOverview = async () => {
    await getOverview()
  }

  console.log(user)
  function showAlerts() {
    if(user_type == 'customer' && vehicle_count < 1) {
      Swal.fire({
        title: 'Before we start requesting estimates',
        text: 'We need to make our vehicle profile first',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Create Vehicle Profile'
      }).then(function (result) {
        if (result.value) {
          setRelocate('/account/vehicles/create')
        }
      })
    }
  }


  useEffect(() => {
    populateOverview()
    showAlerts()
  }, [])

  if (relocate != '') {
    return <Redirect from='/account/overview' to={relocate} />
  }

  const ModalExample = props => <div className="p-12">{props.message}</div>

  const { showModal } = useModal()
  console.log(overview)
  console.log(overview.users)
  return (
    <div className="bb-white px-10 py-5">
      <PageHeader title="Dashboard" subTitle="Overview" />
        <section className="charts">
          <div className="clearfix"></div>
            {overview && (
              <>
              {Object.values(overview).map(({ users, id }) => (
                <div key={id} className="grid grid-cols-4 gap-4 -m-2 mt-2">
                  {users.map((stats, idx) => (
                    <div key={idx} className="md:col-span-2 xl:col-span-1 rounded shadow bg-white m-2">
                      <SmallStats
                        id={`small-stats-${idx}`}
                        chartData={Object.values(stats.datasets)}
                        chartLabels={stats.chartLabels}
                        label={stats.label}
                        value={stats.value}
                        percentage={stats.percentage}
                        increase={stats.increase}
                        decrease={stats.decrease}
                      />
                    </div>
                  ))}
                </div>
              ))}
              {Object.values(overview).map(({ operation, id }) => (
                <div key={id} className="grid grid-cols-4 gap-4 -m-2 mt-2">
                  {operation.map((stats, idx) => (
                    <div key={idx} className="md:col-span-2 xl:col-span-1 rounded shadow bg-white m-2">
                      <SmallStats
                        id={`small-stats-${idx}`}
                        chartData={Object.values(stats.datasets)}
                        chartLabels={stats.chartLabels}
                        label={stats.label}
                        value={stats.value}
                        percentage={stats.percentage}
                        increase={stats.increase}
                        decrease={stats.decrease}
                      />
                    </div>
                  ))}
                </div>
              ))}
              </>
            )}

        </section>
    </div>
  )
}

OverviewComponent.propTypes = {
  /**
   * The small stats data.
   */
  smallStats: PropTypes.array
}

OverviewComponent.defaultProps = {
  smallStats: [
    {
      label: "Active Customers",
      value: "2,390",
      percentage: "12.4%",
      increase: true,
      chartLabels: [null, null, null, null, null],
      decrease: false,
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: colors.primary.toRGBA(0.1),
          borderColor: colors.primary.toRGBA(),
          data: [9, 3, 3, 9, 9]
        }
      ]
    },
    {
      label: "Inactive Customers",
      value: "8,391",
      percentage: "7.21%",
      increase: false,
      chartLabels: [null, null, null, null, null],
      decrease: true,
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: colors.success.toRGBA(0.1),
          borderColor: colors.success.toRGBA(),
          data: [3.9, 4, 4, 9, 4]
        }
      ]
    },
    {
      label: "Recurring Customers",
      value: "21,293",
      percentage: "3.71%",
      increase: true,
      chartLabels: [null, null, null, null, null],
      decrease: false,
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: colors.warning.toRGBA(0.1),
          borderColor: colors.warning.toRGBA(),
          data: [6, 6, 9, 3, 3]
        }
      ]
    },
    {
      label: "New Customers",
      value: "6.43",
      percentage: "2.71%",
      increase: false,
      chartLabels: [null, null, null, null, null],
      decrease: true,
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: colors.salmon.toRGBA(0.1),
          borderColor: colors.salmon.toRGBA(),
          data: [0, 9, 3, 3, 3]
        }
      ]
    }
  ]
}

export default connect(
  state => ({
    overview: selectAllOverview(state),
    user: currentUserSelector(state)
  }),
  dispatch => ({
    getOverview: () => dispatch(getOverviewAction()),
  })
)(OverviewComponent)