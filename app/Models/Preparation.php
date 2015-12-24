<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Preparation
 */
class Preparation extends Model
{

    public $timestamps = true;

    protected $fillable = [
        'description'
    ];

    protected $guarded = [];

    
	/**
	 * @return mixed
	 */
	public function getDescription() {
		return $this->description;
	}


    
	/**
	 * @param $value
	 * @return $this
	 */
	public function setDescription($value) {
		$this->description = $value;
		return $this;
	}



}