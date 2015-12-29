      <div class="row">
        <div class="large-12 medium-12 small-12 columns text-center">
          <div class="head align-center">
            <h3 class="margin0 fontsans">{{ $recipe->name }}</h3>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="large-4 medium-4 small-12 blog-text columns">
          <div class="ingredients">
            <h5 class="fontsans">Ingredients:</h5>
            <ul class="no-bullet">
<?php
    $ingredientList = preg_split('/\R/', $recipe->ingredients);
    //$ingredientUL = '';
    foreach ($ingredientList as $ingredient)
    {
        if ($ingredient == "")
        {
            $ingredient = '<br />';
        }
        echo '<li>' . $ingredient . '</li>' . "\n";
    }
 ?>

            </ul>
          </div>
        </div>
        <div class="large-8 medium-8 small-12 blog-text columns">
          <h5 class="fontsans">Instructions:</h5>
<?php
    $instructionList = preg_split('/\R/', $recipe->instructions);
    //$ingredientUL = '';
    foreach ($instructionList as $instructionStep)
    {
        if ($instructionStep == "")
        {
            $instructionStep = '<br />';
        }
        echo '<p>' . $instructionStep . '</p>' . "\n";
    }
    // now we check the meals, courses and preparations
    $mealText = '';
    $prepText = "";
    $courseText = "";
    // Set variables for these so we can make them singular or plural based on the number of items
    $mealLabel = 'Meal';
    $prepLabel = 'Preparation';
    $courseLabel = 'Course';

    foreach ($recipe->meals as $currMeal)
    {
      // if we have a second one (or later) then toggle to a plural label
      if ($mealText)
      {
        $mealText .= ", ";
        $mealLabel = 'Meals';
      }
      $mealText .= $currMeal->name;
    }
    foreach ($recipe->preparations as $currPrep)
    {
      // if we have a second one (or later) then toggle to a plural label
      if ($prepText)
      {
        $prepText .= ", ";
        $prepLabel = 'Preparations';
      }
      $prepText .= $currPrep->description;
    }
    foreach ($recipe->courses as $currCourse)
    {
      // if we have a second one (or later) then toggle to a plural label
      if ($courseText)
      {
        $courseLabel = 'Courses';
        $courseText .= ", ";
      }
      $courseText .= $currCourse->name;
    }

 ?>
        </div>
      </div>
    <div class="row">
    <hr />
    </div>
      <div class="row">
        <div class="large-4 medium-4 small-12 blog-text columns">
          <div class="leftFootNotes">
            <h6 class="fontsans"><span class="footNoteLabel">Date Added:</span><span class="footNoteContent">{{ date('F d, Y', strtotime($recipe->date_added)) }}</span></h6>
          </div>
          <div class="leftFootNotes">
            <h6 class="fontsans"><span class="footNoteLabel">Classification:</span><span class="footNoteContent">{{ $recipe->getClassification->name }}</span></h6>
          </div>
          <div class="leftFootNotes">
            <h6 class="fontsans"><span class="footNoteLabel">Source:</span><span class="footNoteContent">{{ $recipe->getSource->name }}</span></h6>
          </div>
          @if ($mealText)
            <div class="leftFootNotes">
              <h6 class="fontsans"><span class="footNoteLabel">{{ $mealLabel }}:</span><span class="footNoteContent">{{ $mealText }}</span></h6>
            </div>
          @endif
          @if ($courseText)
            <div class="leftFootNotes">
              <h6 class="fontsans"><span class="footNoteLabel">{{ $courseLabel }}:</span><span class="footNoteContent">{{ $courseText }}</span></h6>
            </div>
          @endif
        </div>

        <div class="large-8 medium-8 small-12 blog-text columns">
        @if ($prepText)
          <h5 class="fontsans">{{ $prepLabel }}:</h5>
          <p>
          {{ $prepText }}
          </p>
        @endif
          <h5 class="fontsans">Notes:</h5>
          @if ($recipe->notes)
            <p>
<?php
    $noteList = preg_split('/\R/', $recipe->notes);
    foreach ($noteList as $noteLine)
    {
        if ($noteLine == "")
        {
            $noteLine = '<br />';
        }
        echo $noteLine . "\n";
    }
 ?>
            </p>
        @endif
      </div>
      </div>
