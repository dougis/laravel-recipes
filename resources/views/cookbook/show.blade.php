@extends('templates.general-page')
@section('PageTitle')
    {{ $cookbook->name }}
@stop
<?php
  $pageNumber = 0;
  $lastChapter = "";
?>

@section('page-content')
  <div class="row">
    <div class="large-12 medium-12 small-12 columns text-center">
      <div class="head align-center">
        <h3 class="margin0 fontsans">{{ $cookbook->name }}</h3>
      </div>
    </div>
  </div>
<div class="cookBookTOC">
<ul class="cookbookContents">
@foreach ($cookbook->recipes as $recipe)
<?php
  $pageNumber++;
  // are we on a new chapter
  if ($lastChapter != $recipe->getClassification->name)
  {
    // do we need to close out the previous one?
    if ($lastChapter != "")
    {
      echo '</ul></li>';
    }
    $lastChapter = $recipe->getClassification->name;
    echo '<li>' . $lastChapter . '<ul class="cookbookChapterEntries">';
  }
?>
  <li>{{ $recipe->name }}...{{ $pageNumber }}</li>
@endforeach
</ul>
</li></ul>
</div>
    <section class="content-padding">
<?php
  $pageNumber = 0;
?>

@foreach ($cookbook->recipes as $recipe)
<?php
  $pageNumber++;
?>
  <div class="pageBreak" >&nbsp;</div>
  @include('recipe.individual-content')
@endforeach

    </section>

@stop

