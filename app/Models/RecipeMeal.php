<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class RecipeMeal
 */
class RecipeMeal extends Model
{

    public $timestamps = true;

    protected $fillable = [
        'recipe_id',
        'meal_id'
    ];

    protected $guarded = [];

    
	/**
	 * @return mixed
	 */
	public function getRecipeId() {
		return $this->recipe_id;
	}

	/**
	 * @return mixed
	 */
	public function getMealId() {
		return $this->meal_id;
	}


    
	/**
	 * @param $value
	 * @return $this
	 */
	public function setRecipeId($value) {
		$this->recipe_id = $value;
		return $this;
	}

	/**
	 * @param $value
	 * @return $this
	 */
	public function setMealId($value) {
		$this->meal_id = $value;
		return $this;
	}



}