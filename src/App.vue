<template>
  <div id="app">
     <div class="site-header-affix-wrapper">
        <header id="masthead" class="site-header header-dark" role="banner">
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <div class="site-branding">
                  <!-- //site-title when you use logo image.
                  <h1 class="site-title title-image"><a href="index.html" rel="home"><img src="assets/img/danish-image-logo.png" alt="Danish."></a></h1>
                  -->
                  <h1 class="site-title"><a href="index.html" rel="home">Danish.</a></h1>
                  <!-- //site-description if you wanna use it.
                  <p class="site-description">Traveler and Young Designer //</p>
                  -->
                </div><!-- .site-branding -->
              </div><!-- .col-sm-4 -->

              <div class="col-sm-9">
                <nav id="site-navigation" class="main-navigation" role="navigation">
                  <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><i class="fa fa-align-left"></i><span class="sr-only">Primary Menu</span></button>

                  <div class="menu-testing-menu-container">
                    <ul id="primary-menu" class="menu nav-menu" aria-expanded="false">
                      <li class="menu-item menu-item-has-children" aria-haspopup="true"><a href="#">Home</a>
                        <ul class="sub-menu">
                          <li class="menu-item"><a href="/">Home </a></li>
                          <li class="menu-item"><a href="index-classic-fullwidth.html">Home classic fullwidth</a></li>
                          <li class="menu-item"><a href="index-classic-fullwidth-alt.html">Home classic fullwidth alt.</a></li>
                          <li class="menu-item"><a href="index-grid-fullwidth.html">Home grid fullwidth</a></li>
                          <li class="menu-item"><a href="index-grid-sidebar.html">Home grid sidebar</a></li>
                          <li class="menu-item"><a href="index-list-fullwidth.html">Home list fullwidth</a></li>
                          <li class="menu-item"><a href="index-list-sidebar.html">Home list sidebar</a></li>
                        </ul>
                      </li>
                      <li class="menu-item"><a href="/builds">Builds List</a></li>
                      <li class="menu-item"><a href="/heroes">Heroes List</a></li>
                      <li class="menu-item"><a href="/skills">Skills List</a></li>
                      <li class="menu-item menu-item-has-children" aria-haspopup="true"><a href="#">Blog</a>
                        <ul class="sub-menu">
                          <li class="menu-item"><a href="post-format.html">Post Formats</a></li>
                          <li class="menu-item"><a href="#">Post Single</a>
                            <ul class="sub-menu">
                              <li class="menu-item"><a href="single.html">Single</a></li>
                              <li class="menu-item"><a href="single-quote.html">Single Quote</a></li>
                              <li class="menu-item"><a href="single-gallery.html">Single Gallery</a></li>
                              <li class="menu-item"><a href="single-video.html">Single Video</a></li>
                              <li class="menu-item"><a href="single-audio.html">Single Audio</a></li>
                              <li class="menu-item"><a href="single-image.html">Single Image</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item menu-item-has-children" aria-haspopup="true"><a href="#">Portfolio</a>
                        <ul class="sub-menu">
                          <li class="menu-item"><a href="portfolio.html">Portfolio</a></li>
                          <li class="menu-item"><a href="single-portfolio.html">Portfolio Single</a></li>
                          <li class="menu-item"><a href="archive-portfolio.html">Portfolio Archive</a></li>
                        </ul>
                      </li>
                      <li class="menu-item menu-item-has-children" aria-haspopup="true"><a href="#">Users</a>
                        <ul class="sub-menu">
                          <li class="menu-item" v-if="!isLoggedIn()"><a href="/signup">Signup</a></li>
                          <li class="menu-item" v-if="!isLoggedIn()"><a href="/login">Login</a></li>
                          <li class="menu-item" v-if="isLoggedIn()"><a href="/logout">Logout</a></li>
                          <li class="menu-item" v-if="isLoggedIn()"><a href="/users/me">User Info</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav><!-- #site-navigation -->
              </div><!-- .col-sm-8 -->
            </div><!-- .row -->
          </div><!-- .container -->
        </header><!-- #masthead -->
      </div><!-- .site-header-affix-wrapper -->

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/builds">Builds List</router-link> |
      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link> |
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link> |
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link> |
      <router-link to="/heroes">Heroes List</router-link> |
      <router-link to="/skills">Skills List</router-link> |
      <router-link v-if="isLoggedIn()" to="/users/me">User Info</router-link> 
    </div> -->
    <router-view/>

     <!-- site-footer -->
      <footer id="colophon" class="site-footer" role="contentinfo">
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <section class="widget widget_tag_cloud">
                <h3 class="widget-title">Tags</h3>
                <div class="tagcloud">
                  <a href="archive.html">beauty</a> <a href="archive.html">destiny</a>
                  <a href="archive.html">happy</a> <a href="archive.html">inspiring</a>
                  <a href="archive.html">live</a> <a href="archive.html">love live</a>
                  <a href="archive.html">tips</a> <a href="archive.html">captions</a>
                </div>
              </section><!-- .widget_tag_cloud -->
            </div><!-- .col-sm-3 -->

            <div class="col-sm-3">
              <section class="widget widget_recent_entries">
                <h3 class="widget-title">Headline</h3>
                <ul>
                  <li>
                    <a href="single.html">Beauty is not just what you see</a>
                    <span class="post-date">May 19, 2016</span>
                  </li>
                  <li>
                    <a href="single.html">You say: Dont leave me, but you are gone. Liar</a>
                    <span class="post-date">May 9, 2016</span>
                  </li>
                  <li>
                    <a href="single.html">You never know how beautiful you are</a>
                    <span class="post-date">May 5, 2016</span>
                  </li>
                </ul>
              </section><!-- .widget_recent_entries -->
            </div><!-- .col-sm-3 -->

            <div class="col-sm-6">
              <section class="widget danish_widget_site_info">
                <div class="site-info">
                  <h4 class="site-brand"><i class="fa fa-recycle"></i> Danish.</h4>
                  <p>1024 Main Street, Jjrn Plrt Btl<br>+62 (123) 456-7890</p>
                  <br>
                  <p class="muted">© 2016 Brand Inc.</p>
                  <a href="#">Terms of Service</a> <span>/</span> <a href="#">Privacy</a>
                </div><!-- .site-info -->
              </section><!-- .danish_widget_site_info -->
            </div><!-- .col-sm-6 -->
          </div><!-- .row -->
        </div><!-- .container -->
      </footer><!-- #site-footer -->
  </div>
</template>

<style>
</style>
<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    }
  }
};
</script>
