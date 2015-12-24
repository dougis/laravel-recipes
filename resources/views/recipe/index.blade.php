@extends('templates.general-page')
@section('PageTitle')
    Leigh's Cookbooks and recipes
@stop


@section('page-content')


    <section class="content-padding recipes">
      <div class="row">
        <div class="large-12 medium-12 small-12 columns text-center">
          <div class="head align-center">
            <h2 class="margin0">All recipes</h2>
            <h6 class="fontsans big"><strong>All recipes</strong></h6>
          </div>
        </div>
      </div>
    <!-- recipe list -->
    <div class="wow bounceInUp" data-wow-offset="250">
    <div class="row" data-equalizer>
    @foreach ($recipes as $currRecipe)
        <div class="large-3 medium-6 small-12 columns" data-equalizer-watch>
            <div class="recipe text-center">
              {{-- <div class="recipe-cover"> --}}
                <!--<a href="" class="like"><i class="fa fa-heart-o"></i> 2054</a>
                <a href="/recipe/{{ $currRecipe->id }}" class="type">Dessert</a>-->
                <a class="recipe-link" href="/recipe/{{ $currRecipe->id }}"></a>
                {{-- <img src="img/food1.jpg" alt=""> --}}
              {{-- </div> --}}
              <h6 class="fontsans margin0"><a href="/recipe/{{ $currRecipe->id }}">{{ $currRecipe->name }}</a></h6>
            </div>
          </div>
    @endforeach
    </div>
    </div>

      <!-- END recipe list -->
    </section>

    <section class="fullwidth">
      <div class="row collapse" data-equalizer>
        <div class="large-6 medium-6 small-12 columns">
          <div class="myphoto wow bounceInLeft" style="background:url(img/myphoto.jpg) no-repeat center center;" data-wow-offset="350" data-equalizer-watch>
            <a href=""></a>
          </div>
        </div>

        <div class="large-6 medium-6 small-12 columns">
          <div class="aboutme" data-equalizer-watch>
            <div class="head align-left">
              <h2 class="margin0">Leigh</h2>
              <h6 class="fontsans big"><strong>An online spot to save our recipes and cookbooks</strong></h6>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <a href="about.html" class="button">Read more</a>
          </div>
        </div>
      </div>
    </section>

    <section class="content-padding">
      <div class="row">
        <div class="large-12 medium-12 small-12 columns text-center">
          <div class="head align-center">
            <h2 class="margin0">Blog</h2>
            <h6 class="fontsans big"><strong>recent posts</strong></h6>
          </div>
        </div>
      </div>

      <div class="wow bounceInUp">
      </div>

      <div class="row collapse">
        <div class="large-12 mecoim-12 small-12 columns text-center">
          <div class="all"><a href="blog.html" class="button dark">See all blog entries</a></div>
        </div>
      </div>
    </section>

@stop

