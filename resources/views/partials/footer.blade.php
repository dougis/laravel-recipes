   <footer id="footer">
   <!--
      <div id="footer-top">
        <div class="row">
          <div class="large-4 medium-4 small-12 columns">
            <h4>Twitter</h4>
            <p><a href="">@GoodFood</a> Nunc convallis sagittis metus, at vehicula orci lacinia a. Maecenas quis mollis dolor, vitae euismod arcu. Praesent nec.</p>
            <p><a href="">@GoodFood</a> Nunc convallis sagittis metus, at vehicula orci lacinia a. Maecenas quis mollis dolor, vitae euismod arcu. Praesent nec.</p>
            <p><a href="">@GoodFood</a> Nunc convallis sagittis metus, at vehicula orci lacinia a. Maecenas quis mollis dolor, vitae euismod arcu. Praesent nec.</p>
          </div>
          <div class="large-4 medium-4 small-12 columns">
            <h4>Recent Comments</h4>
            <p><strong>Morgan Freeman</strong> on <a href="">Where Are These Small Birds Who Like to Sing – Self-Hosted Video Post Type</a></p>
            <p><strong>Nikole Kidman</strong> on <a href="">Just a Little Depressed and What I am Doing About It – Gallery Post Type</a></p>
            <p><strong>Robert Downey Jr.</strong> on <a href="">Isn’t Just a Sequence of Waiting For Things To Be Done! – Slideshow Post Type</a></p>
            <p><strong>Morgan Freeman</strong> on <a href="">Where Are These Small Birds Who Like to Sing – Self-Hosted Video Post Type</a></p>
          </div>
          <div class="large-4 medium-4 small-12 columns">
            <h4>Lorem ipsum dolor</h4>
            <p>There are so many unexpected things I’ve gotten from blogging. Big and small things. A cookbook. A reason to use designer muffin cups. A community. A career. New friends. Offers to try a new line of microalgae.</p>
            <p>But my favourite things however, are those that involve super passionate people wanting to share their awesome</p>
            <p><a href="">Read more...</a></p>
          </div>
        </div>
      </div>
-->
      <div id="footer-bottom">
        <div class="row">
          @include('partials.logo-link')
          <div class="large-9 medium-12 small-12 columns">
            <ul>
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
    </script>
  <script src="/js/packery.js"></script>
  <script src="/js/imagesloaded.pkgd.min.js"></script>
  <script src="/js/jquery.flexslider-min.js"></script>
  </body>
</html>
