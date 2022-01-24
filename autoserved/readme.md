## Features

- Laravel Passport API authentication
- Laravel React User Impersonation
- Route level code splitting using React Lazy/Suspense
- Login/signup functionality implemented and tested
- Webpack configuration for development and production
- React/Redux single page application using React Router
- Some basic components already built in resources/assets/js/components
- Simple form building using [Formik](https://github.com/jaredpalmer/formik 'Formik')
- Component library and interactive component building via [Storybook](https://storybook.js.org/ 'Storybook')
- Hot module reloading for your React components using Webpack Dev Server and [React Hot Module Reloader](https://gaearon.github.io/react-hot-loader/ 'React Hot Module Reloader')
- Tailwind CSS for utility class styling (see [https://tailwindcss.com](https://tailwindcss.com))
- Support for scoped styling using React CSS modules using [Gajus React CSS Modules](https://github.com/gajus/react-css-modules 'Gajus React CSS Modules')
- Continous build integration via [Travis CI](https://travis-ci.org/ 'Travis CI')
- Automatic code style fixing with [Prettier](https://prettier.io/)

## Installation

- Fill out a .env file in the project root using the .env.example file as a template
- Install composer dependencies using `composer install`
- Run `php artisan key:generate` `php artisan migrate` `php artisan passport:install` and `php artisan storage:link`
- Install NPM dependencies using `npm install`
- Make sure to create two databases, one main and one for running the tests, then run `php artisan migrate`
- If you want to use the webpack dev server, make sure that the proxy entry in the weback.dev.js points to the server that's running your Laravel installation.
- Use the initial db seed `php artisan db:seed` ( Note: this is only for the master list, users and for the platform )
- No seeders where made for the SMS yet

## Additional Manual Seeder

- Run php artisan db:seed --class=PreventiveServicesTableSeeder and specify shop id to generate preventive services


## React stuff
- React files are located at `resources/assets/js`
- do `npm run dev` to compile js and css files
- Reducers, Selectors and Actions can be found at `resources/assets/js/store`
- The sidebar menu data can be found at `resources/assets/js/data/`
- The routes is located at `resources/assets/js/app.jsx`

## To-Do Lists for the Platform side
- Create Preventive Services frontend
- Finish Requests for Vehicle Schedule
- Front end for View and Update for vehicle
- Estimate backend and frontend
- Appointments backend and frontend
- Payments backend and frontend
- Customer reviews

## To-Do lists for the SMS
- Need to create the following entities
- Please refer to [Andersao L5 Repository](https://github.com/andersao/l5-repository/ 'L5 Repository') for creating entities
- example: `php artisan make:entity Post`
- bind: `php artisan make:bindings Posts`
- - Fleets - ( Connect controller to user for creation )
- - Fleet Members
- - Shop Fleets
- - Vendors - ( Connect controller to user for creation )
- - Shop Vendors
- - Work Flow
- - Estimates ( need to sync with the platform data )
- - Orders ( can be work order or purchase order )
- - Invoice
- - Payments

## Additional features for the SMS ( to - follow )
- Need to create the following entities
- - Inventories
- - Time Clock
- - Payroll
- - Journal
- - Banking

## Collection API via Insomnia
- To create bearer token for Shop, Admin and Customer just go to Authentication and Get Bearer Token
