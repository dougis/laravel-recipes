<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRecipesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('recipes', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('name', 50)->unique('recipe_name');
			$table->text('ingredients')->nullable();
			$table->text('instructions')->nullable();
			$table->text('notes')->nullable();
			$table->integer('servings')->nullable()->default(0);
			$table->integer('source_id')->nullable()->default(0)->index('source_id');
			$table->integer('classification_id')->nullable()->default(0)->index('classification_id');
			$table->dateTime('date_added')->nullable();
			$table->string('calories', 50)->nullable();
			$table->string('fat', 50)->nullable();
			$table->string('cholesterol', 50)->nullable();
			$table->string('sodium', 50)->nullable();
			$table->string('protein', 50)->nullable();
			$table->boolean('marked')->nullable();
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
		Schema::drop('recipes');
	}

}
