   <footer id="footer">
      <div id="footer-bottom">
        <div class="row">
          @include('partials.logo-link')
          <div class="large-9 medium-12 small-12 columns">
            <ul id="footernav">
              @include('partials.menu-links')
            </ul>
          </div>
        </div>
      </div>
    </footer>

  <script src="/js/vendor/jquery.js"></script>
  <script src="/js/foundation.min.js"></script>
  <script src="/js/app.js"></script>
  <script src="/js/wow.min.js"></script>
    <script>
      jQuery(document).foundation({
        equalizer: {
            equalize_on_stack: true
        }
      });
      wow = new WOW(
        {
          mobile: false
        }
      )
      wow.init();
$( "#footernav a" ).click( function() {
    $( "#footernav a.active" ).removeClass( "active" );
    $( this ).addClass( "active" );
});
$( "#mainnav a" ).click( function() {
    $( "#mainnav a.active" ).removeClass( "active" );
    $( this ).addClass( "active" );
});

    </script>
  <script src="/js/packery.js"></script>
  <script src="/js/imagesloaded.pkgd.min.js"></script>
  <script src="/js/jquery.flexslider-min.js"></script>
  </body>
</html>
