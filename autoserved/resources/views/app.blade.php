<!DOCTYPE html>
<html lang="en">
<head>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    @env('production')
      <link href="{{ mix('app.css') }}" rel="stylesheet" />
    @endenv

    @env('local')
      <link href="{{ asset('/css/app.css') }}" rel="stylesheet" />
    @endenv
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
</head>
<body class="font-sans bg-gray-200 m-0 p-0">
  <div id="app" class="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">

  </div>

  @env('production')
  <script charset="utf8" src="{{ mix('app.js') }}"></script>
  <script charset="utf8" src="{{ mix('vendors~app.js') }}"></script>
  @endenv

  @env('local')
  <script charset="utf8" src="{{ asset('/js/app.js') }}"></script>
  <script charset="utf8" src="{{ asset('/js/vendors~app.js') }}"></script>
  @endenv
</body>
</html>
