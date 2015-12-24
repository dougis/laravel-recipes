<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class RecipeCourse
 */
class RecipeCourse extends Model
{

    public $timestamps = true;

    protected $fillable = [
        'recipe_id',
        'course_id'
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
	public function getCourseId() {
		return $this->course_id;
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
	public function setCourseId($value) {
		$this->course_id = $value;
		return $this;
	}



}