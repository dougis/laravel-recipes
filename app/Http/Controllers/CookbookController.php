<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\Cookbook;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Session;

class CookbookController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $sortField = $request->get('sortField');
        $sortOrder = $request->get('sortOrder');
        $displayCount = $request->get('displayCount');
        $pageTitle = 'Cookbook listing';
        $titleDetail = 'A list of all the cookbooks';
        $cookbooks = Cookbook::all();

        return view('cookbook.index', compact('cookbooks', 'titleDetail', 'pageTitle'));
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $cookbook = Cookbook::findOrFail($id);
        return view('cookbook.show', compact('cookbook'));
    }
}
