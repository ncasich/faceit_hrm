<?php

Route::resource('dictionary', 'DictionaryController');
Route::get('dictionaries/{dic_type}', ['as' => 'dictionary.type', 'uses' => 'DictionaryController@getType']);

Route::resource('event', 'EventController');
Route::get('event/types', ['as' => 'event.types', 'uses' => 'EventController@getTypes']);

Route::get('companies', ['as' => 'companies', 'uses' => 'CompanyController@index']);
Route::resource('company', 'CompanyController');

Route::get('users', ['as' => 'users', 'uses' => 'UserController@index']);
Route::resource('user', 'UserController');

Route::get('vacancies', ['as' => 'users', 'uses' => 'VacancyController@index']);
Route::resource('vacancy', 'VacancyController');