# premiere-online-results

> Premiere Online Results
## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/premiere-online-results
    npm install
    ```

3. Start your app

    ```
    node src/app.js
    ```

## Initial configurations

Enter DB connection string @ `config/default.json`

## Querying

Once the app is running, perform a GET call by sending an HTTP request to
`http://localhost:3030/records`

Query parameters get processed before the join so joined parameter lookups still don't work.

`http://localhost:3030/records?$skip=[records skipped] to skip pages`

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
