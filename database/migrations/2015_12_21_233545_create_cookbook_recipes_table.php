<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCookbookRecipesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('cookbook_recipes', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('cookbook_id')->default(0)->index('fk_cookbook_id');
			$table->integer('recipe_id')->default(0)->index('fk_recipe_id');
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
		Schema::drop('cookbook_recipes');
	}

}
