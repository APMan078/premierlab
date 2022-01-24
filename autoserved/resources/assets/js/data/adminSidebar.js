const adminSidebar = [{
  title: 'Dashboards',
  items: [{
    title: 'Overview',
    to: '/overview',
    htmlBefore: 'donut_large',
    htmlAfter: '',
  }, {
    title: 'Account',
    htmlBefore: 'people',
    htmlAfter: '',
    items: [{
      title: 'Users',
      to: '/users',
    }, {
      title: 'Shops',
      to: '/shops',
    }, {
      title: 'Customers',
      to: '/customers',
    }, {
      title: 'Fleets',
      to: '/fleets',
    }, {
      title: 'Vendors',
      to: '/vendors',
    }]
  }, {
    title: 'Master List',
    htmlBefore: 'pageview',
    htmlAfter: '',
    items: [{
      title: 'Car Makes',
      to: '/car-makes',
    }, {
      title: 'Car Models',
      to: '/car-models',
    },{
      title: 'Car Series',
      to: '/car-series',
    },{
      title: 'Car Trims',
      to: '/car-trims',
    },{
      title: 'Services',
      to: '/services',
    },{
      title: 'Preventive Services',
      to: '/pms-lists',
    }]
  }, {
    title: 'Vehicles',
    to: '/vehicles',
    htmlBefore: 'directions_car',
    htmlAfter: '',
  }],
},
{
  title: 'Work Orders',
  items: [{
    title: 'Appointments',
    htmlBefore: 'calendar_today',
    to: '/appointments',
  }, {
    title: 'Estimates',
    htmlBefore: 'edit',
    to: '/estimates',
  }, {
    title: 'Requests',
    htmlBefore: 'edit',
    to: '/requests',
  },{
    title: 'Orders',
    htmlBefore: 'assignment',
    to: '/orders',
  }],
}, {
  title: 'Billing',
  items: [{
    title: 'Payments',
    htmlBefore: 'payment',
    to: '/payments',
  },
  {
    title: 'Reports',
    htmlBefore: 'business_center',
    to: '/reports',
  }],
},
]

export default adminSidebar