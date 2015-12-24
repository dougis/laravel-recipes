<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToRecipePreparationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('recipe_preparations', function(Blueprint $table)
		{
			$table->foreign('preparation_id', 'fk_recipe_preparation_pivot_meal_id')->references('id')->on('preparations')->onUpdate('CASCADE')->onDelete('RESTRICT');
			$table->foreign('recipe_id', 'fk_recipe_preparation_pivot_recipe_id')->references('id')->on('recipes')->onUpdate('CASCADE')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('recipe_preparations', function(Blueprint $table)
		{
			$table->dropForeign('fk_recipe_preparation_pivot_meal_id');
			$table->dropForeign('fk_recipe_preparation_pivot_recipe_id');
		});
	}

}
