<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToRecipeCoursesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('recipe_courses', function(Blueprint $table)
		{
			$table->foreign('course_id', 'fk_recipe_course_pivot_course_id')->references('id')->on('courses')->onUpdate('CASCADE')->onDelete('RESTRICT');
			$table->foreign('recipe_id', 'fk_recipe_course_pivot_recipe_id')->references('id')->on('recipes')->onUpdate('CASCADE')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('recipe_courses', function(Blueprint $table)
		{
			$table->dropForeign('fk_recipe_course_pivot_course_id');
			$table->dropForeign('fk_recipe_course_pivot_recipe_id');
		});
	}

}
