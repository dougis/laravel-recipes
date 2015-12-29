@extends('templates.general-page')
@section('PageTitle')
    {{ $recipe->name }}
@stop


@section('page-content')


    <section class="content-padding">
@include('recipe.individual-content')
    </section>

@stop

