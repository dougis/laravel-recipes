<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Meal
 */
class Meal extends Model
{

    public $timestamps = true;

    protected $fillable = [
        'name'
    ];

    protected $guarded = [];

    
	/**
	 * @return mixed
	 */
	public function getName() {
		return $this->name;
	}


    
	/**
	 * @param $value
	 * @return $this
	 */
	public function setName($value) {
		$this->name = $value;
		return $this;
	}



}