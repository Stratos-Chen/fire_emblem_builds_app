<template>
  <div class="builds-show">
    <!-- content -->
      <div id="content" class="site-content">
        <div id="primary" class="content-area">
          <main id="main" class="site-main" role="main">

            <div class="container">
              <div class="row">
                <div class="col-md-8">

                  <div class="entry-author-bio">
                    <div class="author-bio-avatar">
                      <!-- <img alt="avatar" src="assets/img/danish-image-post-thumbnail-02.jpg" class="avatar avatar-80 photo" height="80" width="80"> -->
                    </div><!-- .author-bio-avatar -->
                    <div class="author-bio-description">
                      <h2>Build Name: {{ build.name }}</h2>
                      <h4>Hero: {{ build.hero_name }}</h4>
                      <p>Weapon: {{ build.weapon_skill_name }}</p>
                      <p>Assist: {{ build.assist }}</p>
                      <p>Special: {{ build.special }}</p>
                      <p>Passive A: {{ build.passivea }}</p>
                      <p>Passive B: {{ build.passiveb }}</p>
                      <p>Passive C: {{ build.passivec }}</p>
                    </div><!-- .author-bio-description -->
                  </div><!-- .entry-author-bio -->

                  <nav class="navigation post-navigation" role="navigation">
                    <h2 class="screen-reader-text">Post navigation</h2>
                    <div class="build-links">
                      <router-link :to="`/builds/${build.id}/edit`"><input name="update" class="btn btn-danish btn-lg btn-block" value="Update"></router-link> <br>
                      <input name="submit" class="btn btn-danish btn-lg btn-block" value="Delete" v-on:click="destroyBuild()"> <br>
                    </div>
                  </nav><!-- .navigation -->
                </div><!-- .col-md-8 -->

                <div class="col-md-4">


                  <section class="widget danish_widget_about">
                    <div class="about-author-container">
                      <!-- <img src="assets/img/danish-image-about.jpg" alt="Danish Brown"> -->
                      <div class="about-author-info">
                        <h2 class="widget-title">Danish Brown</h2>
                        <span class="author-subtitle">Young Designer</span>
                        <div class="author-description">
                          <p>Hello i’m danish. I’m 23 years old. I’m a girl who has long hair, big eyes with nice eyebrows, big…</p>
                        </div><!-- .author-description -->
                      </div><!-- .about-author-info -->
                    </div><!-- .about-author-container -->
                  </section><!-- .danish_widget_about -->
                </div><!-- .col-md-4 -->
              </div><!-- .row -->
            </div><!-- .container -->

          </main><!-- #main -->
        </div><!-- #primary -->
      </div><!-- #content -->
    <!-- <h2>{{ build.name }}</h2>
    <p>Hero: {{ build.hero_name }}</p>
    <div v-if="heroe">
      <ul>
        <p>HP: {{ heroe.hp }}</p>
        <p>Attack: {{ heroe.atk }}</p>
      </ul>
    </div>
    <p>Weapon: {{ build.weapon_skill_name }}</p>
    <p>Assist: {{ build.assist }}</p>
    <p>Special: {{ build.special }}</p>
    <p>Passive A: {{ build.passivea }}</p>
    <p>Passive B: {{ build.passiveb }}</p>
    <p>Passive C: {{ build.passivec }}</p>
    <router-link :to="`/builds/${build.id}/edit`">Update</router-link> |
    <button class="delete button" v-on:click="destroyBuild()">Delete</button> -->
  </div>
  
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      build: {},
      heroe: {}
    };
  },
  created: function() {
    axios.get(`/api/builds/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.build = response.data;
      axios.get(`/api/heroes/${this.build.hero_name}`).then(response => {
        console.log(response.data);
        this.heroe = response.data;
      });
    });
  },
  methods: {
    destroyBuild: function() {
      if (confirm("Are you sure you want to delete this build?")) {
        axios.delete(`/api/builds/${this.build.id}`).then(response => {
          console.log("Successfully destroyed", response.data);
          this.$router.push("/builds");
        });
      }
    }
    //   displayHP: function() {
    //     heroes.each do |hero| {
    //       if (build["hero_name"] === hero["name"]) {
    //         return hero["stats"]["40"]["5"]["hp"][1];
    //       }
    //     }
    //   },
    //   displayAttack: function() {},
    //   displaySpeed: function() {},
    //   displayDefense: function() {},
    //   displayResistance: function() {}
  }
};
</script>
