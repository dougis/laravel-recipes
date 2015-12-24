<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class RecipePreparation
 */
class RecipePreparation extends Model
{

    public $timestamps = true;

    protected $fillable = [
        'recipe_id',
        'preparation_id'
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
	public function getPreparationId() {
		return $this->preparation_id;
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
	public function setPreparationId($value) {
		$this->preparation_id = $value;
		return $this;
	}



}