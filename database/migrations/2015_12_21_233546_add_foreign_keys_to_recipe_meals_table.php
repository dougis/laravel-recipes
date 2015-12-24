<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToRecipeMealsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('recipe_meals', function(Blueprint $table)
		{
			$table->foreign('meal_id', 'fk_recipe_meal_pivot_meal_id')->references('id')->on('meals')->onUpdate('CASCADE')->onDelete('RESTRICT');
			$table->foreign('recipe_id', 'fk_recipe_meal_pivot_recipe_id')->references('id')->on('recipes')->onUpdate('CASCADE')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('recipe_meals', function(Blueprint $table)
		{
			$table->dropForeign('fk_recipe_meal_pivot_meal_id');
			$table->dropForeign('fk_recipe_meal_pivot_recipe_id');
		});
	}

}
