const adminSidebar = [{
  title: 'Dashboards',
  items: [{
    title: 'Overview',
    to: '/overview',
    htmlBefore: 'donut_large',
    htmlAfter: '',
  }, {
    title: 'Shops',
    to: '/shops',
    htmlBefore: 'store',
    htmlAfter: '',
  }, {
    title: 'Services',
    htmlBefore: 'playlist_add_check',
    htmlAfter: '',
    items: [{
      title: 'Preventive Services',
      to: '/preventive-services',
    }, {
      title: 'Corrective Services',
      to: '/corrective-services',
    }]
  }, {
    title: 'Customers',
    htmlBefore: 'group',
    htmlAfter: '',
    items: [{
      title: 'Customers',
      to: '/customers',
      htmlBefore: 'group',
      htmlAfter: '',
    },{
      title: 'Vehicles',
      to: '/vehicles',
      htmlBefore: 'time_to_leave',
      htmlAfter: '',
    }, {
      title: 'Fleet',
      to: '/fleets',
      htmlBefore: 'commute',
      htmlAfter: '',
    }]
  }, {
    title: 'Personnels',
    to: '/personnels',
    htmlBefore: 'how_to_reg',
    htmlAfter: '',
  },{
    title: 'Vendors',
    to: '/vendors',
    htmlBefore: 'store',
    htmlAfter: '',
  },{
    title: 'Appointments',
    to: '/appointments',
    htmlBefore: 'calendar_today',
    htmlAfter: '',
  }, {
    title: 'Requests',
    to: '/requests',
    htmlBefore: 'assignment_return',
    htmlAfter: '',
  }, {
    title: 'Estimates',
    to: '/estimates',
    htmlBefore: 'edit',
    htmlAfter: '',
  }, {
    title: 'Orders',
    to: '/orders',
    htmlBefore: 'receipt',
    htmlAfter: '',
  }, {
    title: 'Payments',
    to: '/payments',
    htmlBefore: 'payment',
    htmlAfter: '',
  }],
},
]

export default adminSidebar