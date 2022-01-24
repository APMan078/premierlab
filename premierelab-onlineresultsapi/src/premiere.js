// Configure existing premiere tables as feathers services
const service = require('feathers-knex')
const hooks = require('./premiere.hooks');
const c_services = require('./premiere.c-services')
 

module.exports = function (app) {
  const db = app.get('knexClient')

  Object.keys(c_services).forEach(key => {
    app.use(`/customers/${key}`, service({
      Model: db,
      paginate: {
        default: 20,
        max: 100
      },
      name: `${key}`,
      id: 'jobno'
    }))
  })

  app.use('/records', service({
    Model: db,
    name: 'masterfile',
    id: 'jobno',
    paginate: {
      default: 20,
      max: 100
    }
  }));

  app.use('/customers', service({
    Model: db,
    name: 'customerdb',
    id: 'pcode',
    paginate: {
      default: 20,
      max: 100
    }
  }));


  app.service('records').hooks(hooks)
};
