<?php

Route::resource('cookbook', 'CookbookController',
                ['only' => ['index', 'show']]);