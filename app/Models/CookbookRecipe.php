<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class CookbookRecipe
 */
class CookbookRecipe extends Model
{

    public $timestamps = true;

    protected $fillable = [
        'cookbook_id',
        'recipe_id'
    ];

    protected $guarded = [];

    
	/**
	 * @return mixed
	 */
	public function getCookbookId() {
		return $this->cookbook_id;
	}

	/**
	 * @return mixed
	 */
	public function getRecipeId() {
		return $this->recipe_id;
	}


    
	/**
	 * @param $value
	 * @return $this
	 */
	public function setCookbookId($value) {
		$this->cookbook_id = $value;
		return $this;
	}

	/**
	 * @param $value
	 * @return $this
	 */
	public function setRecipeId($value) {
		$this->recipe_id = $value;
		return $this;
	}



}