<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Recipe
 */
class Recipe extends Model
{

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


	/**
	 * @return mixed
	 */
	public function getName() {
		return $this->name;
	}

	/**
	 * @return mixed
	 */
	public function getIngredients() {
		return $this->ingredients;
	}

	/**
	 * @return mixed
	 */
	public function getInstructions() {
		return $this->instructions;
	}

	/**
	 * @return mixed
	 */
	public function getNotes() {
		return $this->notes;
	}

	/**
	 * @return mixed
	 */
	public function getServings() {
		return $this->servings;
	}

	/**
	 * @return mixed
	 */
	public function getSourceId() {
		return $this->source_id;
	}

	/**
	 * @return mixed
	 */
	public function getClassificationId() {
		return $this->classification_id;
	}

	/**
	 * @return mixed
	 */
	public function getDateAdded() {
		return $this->date_added;
	}

	/**
	 * @return mixed
	 */
	public function getCalories() {
		return $this->calories;
	}

	/**
	 * @return mixed
	 */
	public function getFat() {
		return $this->fat;
	}

	/**
	 * @return mixed
	 */
	public function getCholesterol() {
		return $this->cholesterol;
	}

	/**
	 * @return mixed
	 */
	public function getSodium() {
		return $this->sodium;
	}

	/**
	 * @return mixed
	 */
	public function getProtein() {
		return $this->protein;
	}

	/**
	 * @return mixed
	 */
	public function getMarked() {
		return $this->marked;
	}



	/**
	 * @param $value
	 * @return $this
	 */
	public function setName($value) {
		$this->name = $value;
		return $this;
	}

	/**
	 * @param $value
	 * @return $this
	 */
	public function setIngredients($value) {
		$this->ingredients = $value;
		return $this;
	}

	/**
	 * @param $value
	 * @return $this
	 */
	public function setInstructions($value) {
		$this->instructions = $value;
		return $this;
	}

	/**
	 * @param $value
	 * @return $this
	 */
	public function setNotes($value) {
		$this->notes = $value;
		return $this;
	}

	/**
	 * @param $value
	 * @return $this
	 */
	public function setServings($value) {
		$this->servings = $value;
		return $this;
	}

	/**
	 * @param $value
	 * @return $this
	 */
	public function setSourceId($value) {
		$this->source_id = $value;
		return $this;
	}

	/**
	 * @param $value
	 * @return $this
	 */
	public function setClassificationId($value) {
		$this->classification_id = $value;
		return $this;
	}


	/**
	 * @param $value
	 * @return $this
	 */
	public function setCalories($value) {
		$this->calories = $value;
		return $this;
	}

	/**
	 * @param $value
	 * @return $this
	 */
	public function setFat($value) {
		$this->fat = $value;
		return $this;
	}

	/**
	 * @param $value
	 * @return $this
	 */
	public function setCholesterol($value) {
		$this->cholesterol = $value;
		return $this;
	}

	/**
	 * @param $value
	 * @return $this
	 */
	public function setSodium($value) {
		$this->sodium = $value;
		return $this;
	}

	/**
	 * @param $value
	 * @return $this
	 */
	public function setProtein($value) {
		$this->protein = $value;
		return $this;
	}

	/**
	 * @param $value
	 * @return $this
	 */
	public function setMarked($value) {
		$this->marked = $value;
		return $this;
	}



}