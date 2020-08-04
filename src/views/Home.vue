<template>
  <div class="home">
    <h1>{{ message }}</h1>

        <!-- #header -->
    <section id="header" style="background-image: url('https://static.tvtropes.org/pmwiki/pub/images/heroes_illust_logo_3.jpg');">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <blockquote>
              <p>The Heroes who defy the world</p>
              <small>FeH</small>
            </blockquote>
          </div>
        </div>
      </div>
      <div class="overlay"></div>
      </section><!-- #header -->
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to the Fire Emblem Heroes Build Website"
    };
  },
  created: function() {},
  methods: {}
};
</script>
