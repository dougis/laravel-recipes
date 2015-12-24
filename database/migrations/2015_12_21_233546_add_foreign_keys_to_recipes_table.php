<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToRecipesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('recipes', function(Blueprint $table)
		{
			$table->foreign('classification_id', 'fk_recipes_classification_id')->references('id')->on('classifications')->onUpdate('CASCADE')->onDelete('RESTRICT');
			$table->foreign('source_id', 'fk_recipes_source_id')->references('id')->on('sources')->onUpdate('CASCADE')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('recipes', function(Blueprint $table)
		{
			$table->dropForeign('fk_recipes_classification_id');
			$table->dropForeign('fk_recipes_source_id');
		});
	}

}
