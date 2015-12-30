@extends('templates.general-page')
@section('PageTitle')
    {{ $cookbook->name }}
@stop


@section('page-content')


    <section class="content-padding">
@foreach ($cookbook->recipes as $recipe)
  <div class="pageBreak" >&nbsp;</div>
  @include('recipe.individual-content')
@endforeach
</div>
    </section>

@stop

