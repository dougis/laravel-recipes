<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactFormRequest;
use Session;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return view('contact.index');
    }
    public function store(ContactFormRequest $request)
    {

        \Mail::send('emails.contact',
            array(
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'user_message' => $request->get('message')
            ), function($message)
        {
            //$message->from($request->get('email'));
            $message->from($config['admin_email']);
            $message->to($config['admin_email'], 'Admin')->subject('Recipe site Feedback');
        });
        return \Redirect::route('contact.index')
        ->with('message', 'Thanks for contacting us!');

    }
}
