@extends('templates.general-page')
@section('PageTitle')
    {{ $recipe->name }}
@stop


@section('page-content')


    <section class="content-padding">
      <div class="row">
        <div class="large-12 medium-12 small-12 columns text-center">
          <div class="head align-center">
            <h3 class="margin0 fontsans">{{ $recipe->name }}</h3>
          </div>
        </div>
      </div>

{{--       <div class="row">
        <div class="large-12 medium-12 small-12 columns">

          <div class="recipe-slider flexslider wow flipInX" data-wow-offset="350">
            <ul class="slides">
              <li>
                  <div class="entry-cover" style="background-image:url(img/entry.jpg);">
                    <a href="" class="like-it"><i class="fa fa-heart-o"></i></a><a href="" class="all"></a>
                  </div>
              </li>
              <li>
                  <div class="entry-cover" style="background-image:url(img/entry2.jpg);">
                    <a href="" class="like-it"><i class="fa fa-heart-o"></i></a><a href="" class="all"></a>
                  </div>
              </li>
              <li>
                  <div class="entry-cover" style="background-image:url(img/entry3.jpg);">
                    <a href="" class="like-it"><i class="fa fa-heart-o"></i></a><a href="" class="all"></a>
                  </div>
              </li>
              <li>
                  <div class="entry-cover" style="background-image:url(img/entry4.jpg);">
                    <a href="" class="like-it"><i class="fa fa-heart-o"></i></a><a href="" class="all"></a>
                  </div>
              </li>
            </ul>
          </div>

        </div>
      </div> --}}

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
          <h5 class="fontsans">Preparation:</h5>
<?php
    $instructionList = preg_split('/\R/', $recipe->instructions);
    //$ingredientUL = '';
    foreach ($instructionList as $instructionStep)
    {
        echo '<p>' . $instructionStep . '</p>' . "\n";
    }
 ?>
        </div>
      </div>
    @if ($recipe->notes)
          <div class="row">
            <div class="large-12 medium-12 small-12 columns blog-text text-justify">
              <h4>Notes:</h4>
            <p>{{ $recipe->notes }}</p>
            </div>
          </div>
    @endif
    </section>

@stop

