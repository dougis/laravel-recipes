@extends('templates.general-page')
@section('PageTitle')
    Contact Us
@stop


@section('page-content')
      <div class="row">
        <div class="large-12 medium-12 small-12 columns text-center">
          <div class="head align-center">
            @if(Session::has('message'))
                <h2 class="margin0">{{Session::get('message')}}</h2>
            @else
                <h2 class="margin0">Contact Us</h2>
            @endif
          </div>
        </div>
      </div>
  <div class="row">
    <div class="large-12 medium-12 small-12 columns">
<ul>
    @foreach($errors->all() as $error)
        <li>{{ $error }}</li>
    @endforeach
</ul>
    </div>
    </div>
    <div class="row">
{!! Form::open(array('route' => 'contact.store', 'class' => 'form')) !!}

<div class="form-group">
    {!! Form::label('Your Name') !!}
    {!! Form::text('name', null,
        array('required',
              'class'=>'form-control',
              'placeholder'=>'Your name')) !!}
</div>

<div class="form-group">
    {!! Form::label('Your E-mail Address') !!}
    {!! Form::text('email', null,
        array('required',
              'class'=>'form-control',
              'placeholder'=>'Your e-mail address')) !!}
</div>

<div class="form-group">
    {!! Form::label('Your Message') !!}
    {!! Form::textarea('message', null,
        array('required',
              'class'=>'form-control',
              'placeholder'=>'Your message')) !!}
</div>

<div class="form-group">
    {!! Form::submit('Contact Us!',
      array('class'=>'btn btn-primary')) !!}
</div>
{!! Form::close() !!}
    </div>

@stop