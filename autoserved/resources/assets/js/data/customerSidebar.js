const customerSidebar = [{
    title: 'Dashboards',
    items: [{
      title: 'Overview',
      to: '/overview',
      htmlBefore: 'donut_large',
      htmlAfter: '',
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
  
  export default customerSidebar