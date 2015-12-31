<?php
  if(!isset($showSearchBox))
  {
    $showSearchBox = false;
  }
?>

<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@yield('PageTitle')</title>
    <link rel="stylesheet" href="/css/style.css" />
    <script src="/js/vendor/modernizr.js"></script>
  </head>
  <body>
    <!-- header -->
    <header id="header">
      <nav class="wow fadeInDown">
        <div class="row">
          @include('partials.logo-link')
          <div class="large-9 medium-12 small-12 columns">
            <span id="showmobilemenu" class="hide-for-large-up">Menu</span>
            <ul id="mainnav">
              @include('partials.menu-links')
            </ul>
          </div>
        </div>
      </nav>
      @if($showSearchBox == true)
    <section class="content-padding recipes">
          <section id="search-box">
      <form id="findrecipe">
        <div class="row collapse">
          <div class="large-10 medium-10 small-8 columns"><input type="text" placeholder="find a recipe"></div>
          <div class="large-2 medium-2 small-4 columns"><input type="submit" value=""></div>
        </div>
      </form>
      </section>
      @endif
    </header>
    <!-- END header -->