<?php

use Illuminate\Http\Request;

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

Route::post('/quote',[
    'uses' =>'QuoteController@postQuote',
    'middleware'=>'auth.jwt'
  ]);
  
  Route::get('/quotes',[
  
   'uses'=>'QuoteController@getQuote',
  
  ]);
  
  Route::put('/quote/{id}',[
      'uses'=>'QuoteController@putQuote',
      'middleware'=>'auth.jwt'
      ]);
  
  
  Route::delete('/quote/{id}',[
      'uses'=>'QuoteController@deleteQuote',
      'middleware'=>'auth.jwt'
  ]);
  
  Route::post('/user/signup',[

    'uses' => 'UserController@Signup'
  ]);
  
  Route::post('/user/signin',[
  
   'uses' =>'UserController@SignIn'
  ]);

  Route::get('/user/profile',[

    'uses' =>'UserController@getProfile',
    'middleware' => 'auth.jwt'
  ]);