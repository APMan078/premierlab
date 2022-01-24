const populate = require('feathers-populate-hook');
const c_services = require('./premiere.c-services')
const query = {};

Object.keys(c_services).forEach(key=> {
  query[c_services[key].toString()] = {
    service: `customers/${key}`,
    f_key: 'jobno',
    l_key: 'jobno'
  }
})

query.customer = {
  service: 'customers',
  f_key: 'pcode',
  l_key: 'pcode',
  query: {
    $select: ['fname', 'mname', 'lname']
  },
  one: true
}

module.exports = {
  before: {
    all: [ populate.compatibility()],
    find: [populate(query)],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
