<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToCookbookRecipesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('cookbook_recipes', function(Blueprint $table)
		{
			$table->foreign('cookbook_id', 'fk_cookbook_recipe_pivot_cookbook_id')->references('id')->on('cookbooks')->onUpdate('CASCADE')->onDelete('RESTRICT');
			$table->foreign('recipe_id', 'fk_cookbook_recipe_pivot_recipe_id')->references('id')->on('recipes')->onUpdate('CASCADE')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('cookbook_recipes', function(Blueprint $table)
		{
			$table->dropForeign('fk_cookbook_recipe_pivot_cookbook_id');
			$table->dropForeign('fk_cookbook_recipe_pivot_recipe_id');
		});
	}

}
