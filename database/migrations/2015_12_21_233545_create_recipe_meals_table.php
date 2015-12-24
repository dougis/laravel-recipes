<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRecipeMealsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('recipe_meals', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('recipe_id')->default(0)->index('recipe_id');
			$table->integer('meal_id')->default(0)->index('meal_id');
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('recipe_meals');
	}

}
