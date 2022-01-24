<?php

use Illuminate\Http\Request;

Route::group(['middleware' => ['auth:api', 'cors', 'return-json']], function () {
    Route::get('/users/impersonating', '\App\Api\Controllers\UserController@isImpersonating');

    Route::get('/users/me', '\App\Api\Controllers\SessionController@currentUser');
    Route::get('/logout', '\App\Api\Controllers\SessionController@logout');
    
    Route::apiResource('/users', '\App\Api\Controllers\UserController');
    Route::put('/users/{slug}/update-password', '\App\Api\Controllers\UserController@changePassword');
    Route::post('/users/avatar', '\App\Api\Controllers\UserController@uploadAvatar');
    // Route::get('/avatars', '\App\Api\Controllers\AvatarsController@get');
    // Route::post('/avatars', '\App\Api\Controllers\AvatarsController@upload');
    // Route::put('/avatars', '\App\Api\Controllers\AvatarsController@update');
    // Route::delete('/avatars', '\App\Api\Controllers\AvatarsController@delete');
    // Route::impersonate();
    Route::get('/overview', '\App\Api\Controllers\OverviewController@index');
    
    
    
    // Routes for Credits
    Route::get('/users/balance/{slug}', '\App\Api\Controllers\UserController@balance');
    Route::post('/users/deposit', '\App\Api\Controllers\UserController@deposit');
    Route::post('/users/withdraw', '\App\Api\Controllers\UserController@withdraw');

    // Routes for Shops
    Route::get('/shops/types', '\App\Api\Controllers\ShopsController@getShopTypes');
    Route::post('/shops/avatar', '\App\Api\Controllers\ShopsController@uploadAvatar');
    Route::post('/shops/banner', '\App\Api\Controllers\ShopsController@uploadBanner');
    Route::get('/shops/test/{id}', '\App\Api\Controllers\ShopsController@testCreate');
    Route::apiResource('/shops', '\App\Api\Controllers\ShopsController');
    Route::get('/shop/services/active', '\App\Api\Controllers\ShopServicesController@getActiveService');
    Route::apiResource('/shop/services', '\App\Api\Controllers\ShopServicesController');

    Route::apiResource('/applications', '\App\Api\Controllers\ApplicationsController');
    Route::post('/applications/registration', '\App\Api\Controllers\ApplicationsController@uploadRegistrationFile');
    Route::post('/applications/certification', '\App\Api\Controllers\ApplicationsController@uploadCertificationFile');
    Route::post('/applications/permit', '\App\Api\Controllers\ApplicationsController@uploadPermitFile');

    Route::get('/car-schedules/{id}', '\App\Api\Controllers\SchedulesController@getCarSchedule');
    Route::get('/car-schedules/schedule/{id}', '\App\Api\Controllers\SchedulesController@show');
    Route::apiResource('/car-schedules', '\App\Api\Controllers\SchedulesController', ['only' => ['update']]);
    Route::get('/car-makes/select', '\App\Api\Controllers\MasterCarMakesController@getCarMakes');
    Route::apiResource('/car-makes', '\App\Api\Controllers\MasterCarMakesController');
    Route::get('/car-models/select/{id?}', '\App\Api\Controllers\MasterCarModelsController@getCarModels');
    Route::apiResource('/car-models', '\App\Api\Controllers\MasterCarModelsController');
    Route::apiResource('/car-series', '\App\Api\Controllers\MasterCarSeriesController');
    Route::get('/car-trims/select/{id?}', '\App\Api\Controllers\MasterCarTrimsController@getCarTrims');
    Route::apiResource('/car-trims', '\App\Api\Controllers\MasterCarTrimsController');
    Route::apiResource('/services', '\App\Api\Controllers\MasterServiceListsController');
    Route::apiResource('/pms-lists', '\App\Api\Controllers\MasterPmsListsController');
    Route::apiResource('/attendances', '\App\Api\Controllers\AttendancesController')->middleware('employee');

    Route::get('/vehicles/types', '\App\Api\Controllers\VehiclesController@getVehicleTypes');
    Route::get('/vehicles/engines', '\App\Api\Controllers\VehiclesController@getEngineTypes');
    Route::get('/vehicles/colors', '\App\Api\Controllers\VehiclesController@getVehicleColors');
    Route::get('/vehicles/transmission', '\App\Api\Controllers\VehiclesController@getTransmissionTypes');
    Route::apiResource('/vehicles', '\App\Api\Controllers\VehiclesController');

    Route::apiResource('/requests', '\App\Api\Controllers\UserRequestsController');

    Route::apiResource('/customers', '\App\Api\Controllers\CustomersController');
    Route::apiResource('/fleets', '\App\Api\Controllers\FleetsController');
    Route::apiResource('/personnels', '\App\Api\Controllers\PersonnelsController');
    Route::apiResource('/vendors', '\App\Api\Controllers\VendorsController');


    // Route for Work flow
    Route::apiResource('/workflows', '\App\Api\Controllers\WorkflowsControllers')
        ->middleware('workflow');
});

/**
 * Password reset endpoints
 */
Route::post('/forgot-password', '\App\Api\Controllers\PasswordResetController@forgotPassword')->middleware('cors');
Route::post('/reset-password', '\App\Api\Controllers\PasswordResetController@resetPassword')->middleware('cors');

/**
 * These endpoints return JWT's, so make sure to wrap them in the encrypt cookies
 * middleware.
 */
Route::group(['middleware' => ['encryptCookies', 'cors']], function () {
    Route::get('/users/impersonate/leave', '\App\Api\Controllers\UserController@stopImpersonate');
    Route::get('/users/impersonate/{slug}', '\App\Api\Controllers\UserController@impersonate');
    Route::post('/login', '\App\Api\Controllers\SessionController@login');
    Route::post('/signup', '\App\Api\Controllers\UserController@signup');
    Route::post('/signup/{type}', '\App\Api\Controllers\UserController@signup');
});

Route::group(['middleware' => ['encryptCookies', 'cors', 'throttle']], function () {
    Route::get('/users/impersonate/leave', '\App\Api\Controllers\UserController@stopImpersonate');
    Route::get('/users/impersonate/{slug}/{impersonator}', '\App\Api\Controllers\UserController@impersonate');
});



Route::get('/test', function() {
    return 'test';
});

use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;

Route::post('bearer-token', function (Request $request) {
    $request->validate([
        'email' => 'required|string|email',
        'password' => 'required|string',
        'remember_me' => 'boolean'
    ]);
    $credentials = request(['email', 'password']);
    if (!Auth::attempt($credentials))
        return response()->json([
            'message' => 'Unauthorized'
        ], 401);
    $user = $request->user();
    $tokenResult = $user->createToken('Personal Access Token');
    $token = $tokenResult->token;
    if ($request->remember_me)
        $token->expires_at = Carbon::now()->addWeeks(1);
    $token->save();
    return response()->json([
        'access_token' => $tokenResult->accessToken,
        'token_type' => 'Bearer',
        'expires_at' => Carbon::parse(
            $tokenResult->token->expires_at
        )->toDateTimeString()
    ]);
});