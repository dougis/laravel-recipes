<?php

namespace App\Models;
use Sofa\Eloquence\Eloquence;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Recipe
 */
class Recipe extends Model
{
	use Eloquence;

    public $timestamps = true;

    protected $fillable = [
        'name',
        'ingredients',
        'instructions',
        'notes',
        'servings',
        'source_id',
        'classification_id',
        'date_added',
        'calories',
        'fat',
        'cholesterol',
        'sodium',
        'protein',
        'marked'
    ];

    protected $guarded = [];

	// no need for this, but you can define default searchable columns:
	protected $searchableColumns = ['name', 'ingredients'];
	/**
	 * @return mixed
	 */
	public function getSource() {
		return $this->hasOne('App\Models\Source', 'id', 'source_id');
	}

	/**
	 * @return mixed
	 */
	public function getClassification() {
		return $this->hasOne('App\Models\Classification', 'id', 'classification_id');
	}

    public function meals()
    {
    	return $this->belongsToMany('App\Models\Meal', 'recipe_meals');
    }

    public function preparations()
    {
    	return $this->belongsToMany('App\Models\Preparation', 'recipe_preparations');
    }

    public function courses()
    {
    	return $this->belongsToMany('App\Models\Course', 'recipe_courses');
    }
}