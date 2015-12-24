<!doctype html>
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
    </header>
    <!-- END header -->