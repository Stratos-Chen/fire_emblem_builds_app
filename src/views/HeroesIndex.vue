<template>
  <div class="Index">
    <!-- content -->
      <div id="content" class="site-content">
        <div id="primary" class="content-area">
          <main id="main" class="site-main" role="main">
            

            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <section class="widget widget_search">
                    <form role="search" method="get" class="search-form" action="">
                    <label>
                      <span class="screen-reader-text">Search for:</span>
                      <input type="search" class="search-field" placeholder="Search …" value="" name="s" title="Search for:">
                    </label>
                    <input v-model="nameFilter" type="submit" class="search-submit" value="Search">
                    </form><!-- search-form -->
                  </section><!-- .widget_search -->
                </div><!-- .col-md-4 -->  
                <div class="col-md-8">
                  <header class="page-header">
                    <h1 class="page-title">Hero List</h1>
                  </header>
         
                  <article v-for="heroe in filterBy(heroes, nameFilter, 'name')" class="post format-standard hentry">
                    <div class="post-container">
                      <div class="post-content">
                        <div class="heading-title heading-small">
                          <h2><router-link v-bind:to="`/heroes/${heroe.name}`">{{ heroe.name }}</router-link></h2>
                        </div><!-- .heading-small -->
                        <p>Origin game: {{ heroe.origin }}</p>
                        <p>Weapon type: {{ heroe.weaponType }}</p>
                        <p>Movement Type: {{ heroe.moveType }}</p>
                        <p>HP: {{ heroe.hp }}</p>
                        <p>Atk: {{ heroe.atk }}</p>
                        <p>Spd: {{ heroe.spd }}</p>
                        <p>Def: {{ heroe.def }}</p>
                        <p>Res: {{ heroe.res }}</p>
                      </div><!-- .post-content -->
                    </div><!-- .post-container -->
                  </article><!-- .post -->

                </div><!-- .col-md-8 -->
              
              </div><!-- .row -->
            </div><!-- .container -->

          </main><!-- #main -->
        </div><!-- #primary -->
      </div><!-- #content -->
    <!-- <div class="col-md-8">
      <h1>{{ "Hero list" }}</h1>
      <div v-for="heroe in filterBy(heroes, nameFilter, 'name')" v-bind:key="heroe.id">
        <h2>{{ heroe.name }}</h2>
        <ul>
          <li>Origin game: {{ heroe.origin }}</li>
          <li>Weapon type: {{ heroe.weaponType }}</li>
          <li>Movement Type: {{ heroe.moveType }}</li>
          <li>HP: {{ heroe.hp }}</li>
          <li>Atk: {{ heroe.atk }}</li>
          <li>Spd: {{ heroe.spd }}</li>
          <li>Def: {{ heroe.def }}</li>
          <li>Res: {{ heroe.res }}</li>
        </ul>
        <router-link v-bind:to="`/heroes/${heroe.name}`">Showcase Info</router-link>
      </div>
    </div>
    <div class="col-md-4">
      <label> Search By Name: </label> 
      <section>
        <input class="search-field" v-model="nameFilter" list="names" type="text" placeholder="Search ..." value="">
      </section>
    </div> -->
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      errors: [],
      heroes: [],
      nameFilter: ""
    };
  },
  created: function() {
    axios.get("/api/heroes").then(response => {
      console.log("All Heroes:", response.data);
      this.heroes = response.data;
    });
  },
  methods: {}
};
</script>