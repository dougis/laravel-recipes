@extends('templates.general-page')
@section('PageTitle')
    {{ $pageTitle }}
@stop


@section('page-content')


    <section class="content-padding recipes">
      <div class="row">
        <div class="large-12 medium-12 small-12 columns text-center">
          <div class="head align-center">
            <h2 class="margin0">{{ $pageTitle }}</h2>
          </div>
        </div>
      </div>
    <!-- recipe list -->
    <div class="wow bounceInUp" data-wow-offset="250">
    <div class="row" data-equalizer>
    @foreach ($recipes as $currRecipe)
        <div class="large-3 medium-6 small-12 columns" data-equalizer-watch>
            <div class="recipe text-center">
                <a class="recipe-link" href="/recipe/{{ $currRecipe->id }}"></a>
              <h6 class="fontsans margin0"><a href="/recipe/{{ $currRecipe->id }}">{{ $currRecipe->name }}</a></h6>
              @if($sortField == 'date_added')
                Added: {{ date('n/j/Y', strtotime($currRecipe->date_added)) }}
              @endif
            </div>
          </div>
    @endforeach

    </div>
    </div>
    @if ($displayCount != 'all')
      <div class="row" data-equalizer>
          @if($titleDetail)
          <h6 class="fontsans big"><strong>{{ $titleDetail }}</strong></h6>
          @endif
      {!! $recipes->appends(['sortField' => $sortField])->appends(['sortOrder' => $sortOrder])->appends(['displayCount' => $displayCount])->render() !!}
      @endif
      </div>
      @if ($viewAllLink)
      <div class="row" data-equalizer>
      <h6 class="fontsans big"><a class="recipe-link" href="/{!! $viewAllLink !!}">View All</a></h6>
      @endif
      </div>
      <!-- END recipe list -->
    </section>


@stop

