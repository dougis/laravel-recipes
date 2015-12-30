@extends('templates.general-page')

@section('PageTitle')
    {{ $pageTitle }}
@stop


@section('page-content')

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
    @foreach ($cookbooks as $currCookbook)
        <div class="large-3 medium-6 small-12 columns" data-equalizer-watch>
            <div class="recipe text-center">
                <a class="recipe-link" href="/cookbook/{{ $currCookbook->id }}"></a>
              <h6 class="fontsans margin0"><a href="/cookbook/{{ $currCookbook->id }}">{{ $currCookbook->name }}</a></h6>
            </div>
          </div>
    @endforeach

    </div>
    </div>
      <!-- END cookbook list -->
    </section>


@stop

