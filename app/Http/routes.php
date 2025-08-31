<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


foreach (File::AllFiles(__DIR__ . '/Routes') as $partial)
{
    require $partial->getPathname();
}


Route::get('/', function () {
    //return view('home');
    return Redirect::route('recipe.index', array('sortField' => 'date_added', 'sortOrder' => 'desc', 'displayCount' => 30));
});

Route::get('/reset-cache', function () {
    \Artisan::call('optimize:clear');
    return "Cache cleared!";
});
