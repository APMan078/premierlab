

/* eslint-disable no-console, no-unused-vars */
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const configuration = require('@feathersjs/configuration');
const knex = require('./knex');
 
const premiere = require('./premiere')

// Creates an ExpressJS compatible Feathers application
const app = express(feathers());
app.configure(configuration());


// Enable security, CORS, compression, favicon and body parsing
app.use(helmet());
app.use(cors());
app.use(compress());

// Parse HTTP JSON bodies
app.use(express.json());
// Parse URL-encoded params
app.use(express.urlencoded({
  extended: true
}));
// Host static files from the current folder
app.use(express.static(__dirname));
// Add REST API support
app.configure(express.rest());
// Configure Socket.io real-time APIs
app.configure(socketio());

// Register a nicer error handler than the default Express one
app.use(express.errorHandler());
 
app.configure(knex);


app.configure(premiere)

// Add any new real-time connection to the `everybody` channel
app.on('connection', connection =>
  app.channel('everybody').join(connection)
);

import { Fragment } from "react";
import Get2DEchoData from "../src/component/Get2DEchoData";
function App(){
  return(
    <Fragment>
      <div className="container">
        <Get2DEchoData/>
      </div>
    </Fragment>
  )
}

// Publish all events to the `everybody` channel
app.publish(data => app.channel('everybody'));

// Start the server
app.listen(3030).on('listening', () =>
  console.log('Premiere server listening on localhost:3030')
);



