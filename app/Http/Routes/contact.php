<?php

Route::resource('contact', 'ContactController',
                ['only' => ['index', 'store']]);