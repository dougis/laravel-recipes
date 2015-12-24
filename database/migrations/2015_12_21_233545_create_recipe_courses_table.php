<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRecipeCoursesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('recipe_courses', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('recipe_id')->default(0)->index('recipe_id');
			$table->integer('course_id')->default(0)->index('course_id');
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
		Schema::drop('recipe_courses');
	}

}
