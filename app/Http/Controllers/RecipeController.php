<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Session;

class RecipeController extends Controller
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
        $pageTitle = 'Recipe listing';
        $pageText = '';
        $viewAllLink = '';
        if ($sortOrder != 'desc')
        {
            $sortOrder = 'asc';
            $orderLabel = "Ascending";
        }
        else
        {
            $orderLabel = "Descending";
        }

        if ($sortField != 'date_added')
        {
            $sortField = 'name';
            $sortLabel = $sortField;
        }
        else
        {
            $sortLabel = "date added";
            $pageTitle = 'Recent recipes';
        }
        if ($displayCount != 'all')
        {
            $displayCount = intval($displayCount, 10);
            if ($displayCount < 30)
            {
                $displayCount = 30;
            }
            $countLabel = '';
            $recipes = Recipe::orderBy($sortField, $sortOrder)->paginate($displayCount);
            $pageText = " (page " . $recipes->currentPage() . ' of ' . $recipes->lastPage() . ')';
            $viewAllLink = $request->path() . '?sortOrder=' . $sortOrder . '&sortField=' . $sortField;
        }
        else // if they asked for all, get all
        {
            $recipes = Recipe::orderBy($sortField, $sortOrder)->get();
            $countLabel = 'All';
        }

        $titleDetail = $countLabel .' sorted by ' . $sortLabel . $pageText;
        //$recipes = Recipe::all();

        //return view('recipe.index', [$recipes, $displayCount, $sortLabel, $orderLabel, $sortField, $sortOrder, $displayCount]);
        //return view('recipe.index', [$recipes, $displayCount, $sortLabel, $orderLabel, $sortField, $sortOrder, $displayCount]);
        return view('recipe.index', compact('recipes', 'sortField', 'sortOrder', 'displayCount', 'titleDetail', 'pageTitle', 'viewAllLink'));
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $recipe = Recipe::findOrFail($id);

        return view('recipe.show', compact('recipe'));
    }
}
