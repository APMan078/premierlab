const knex = require('knex');
//const { addColors } = require('winston/lib/winston/config');
const config = require('../config/default.json');
//const dbConfig = config.get('postgres');

//console.log(config.postgres)
module.exports = function (app) {  
  const { client, connection } = config.postgres;
  //const { client, connection } = config.get('postgres');
  const db = knex({ client, connection });
  app.set('knexClient', db);
};


