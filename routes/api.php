<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Auth::routes(['verify' => true]);
Route::get('login', ['as' => 'login', 'uses' => 'UserController@login']);
Route::post('loginUser', 'UserController@login');
Route::post('register', 'UserController@register');
Route::post('validateUser', 'UserController@validateUser');
Route::post('registerUser', 'UserController@register');
Route::post('sendVerifyEmail', 'UserController@sendVerifyEmail');
Route::post('sendVerifyPhone', 'UserController@sendVerifyPhone');
Route::post('uploadUserAvatar', 'UserController@uploadUserAvatar');
Route::post('forgotPassword', 'ResetPasswordController@sendPasswordResetEmail');
Route::post('resetPassword', 'ResetPasswordController@resetPassword');
//Route::post('confirmUser', 'UserController@confirmUser')->middleware('auth:api');
Route::group(['middleware' => 'auth:api'], function () {
  Route::post('/confirmUser', 'UserController@confirmUser');
  Route::get('/my-profile', 'UserController@myProfile');
  Route::post('/update-profile', 'UserController@updateProfile');
  Route::post('/create-buyer', 'BuyerController@createBuyer');
  Route::post('/get-buyers', 'BuyerController@getBuyers');
  Route::get('/get-buyer-by-id', 'BuyerController@getBuyerByID');
  Route::post('/update-buyer', 'BuyerController@updateBuyer');
  Route::post('/remove-buyer', 'BuyerController@removeBuyer');
  Route::get('/my-bookings', 'UserController@getBookings');
  Route::resource('/booking', 'BookingController');
  Route::get('/booking/by-date/{date}', 'BookingController@getBookingsOfDay');
  Route::resource('/room', 'MeetingRoomController');
});
