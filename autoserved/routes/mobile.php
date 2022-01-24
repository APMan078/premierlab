<?php

// Customer mobile endpoints
Route::group(['prefix' => 'customer'], function () {
	Route::post('login', 'SessionController@customerLogin');
	Route::post('signup', '\App\Api\Controllers\UserController@signUp');

	// Only customer user types can access.
	Route::group(['middleware' => ['auth:api', 'customer']], function () {
		Route::get('current_user', 'SessionController@currentUser');
		Route::post('logout', 'SessionController@logout');
		
		// Customer vehicle API endpoints
		Route::apiResource('vehicles', 'VehicleController');
		Route::apiResource('vehicle-updates', 'VehicleNewsController');
		Route::apiResource('requests', 'UserRequestController');
		Route::apiResource('appointments', 'AppointmentController');
	});
});