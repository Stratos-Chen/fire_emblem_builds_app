<template>
  <div class="Index">
    <div class="col-md-12">
      <router-link :to="`/builds/new`" class="btn btn-lg btn-danish btn-block"
        >Create New Build</router-link
      >
    </div>
    <div id="content" class="site-content">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <section class="widget widget_search">
                  <form
                    role="search"
                    method="get"
                    class="search-form"
                    action=""
                  >
                    <label>
                      <span class="screen-reader-text">Search for:</span>
                      <input
                        type="search"
                        v-model="nameFilter"
                        class="form-control"
                        placeholder="Search …"
                      />
                    </label>
                  </form>
                  <!-- search-form -->
                </section>
                <!-- .widget_search -->
              </div>
              <!-- .col-md-4 -->
              <div class="col-md-8">
                <header class="page-header">
                  <h1 class="page-title">Build List</h1>
                </header>

                <article
                  v-for="build in filterBy(builds, nameFilter, 'hero_name')"
                  class="post format-standard hentry"
                >
                  <div class="post-container">
                    <div class="post-content">
                      <div class="heading-title heading-small">
                        <h2>
                          <router-link v-bind:to="`/builds/${build.id}`">{{
                            build.name
                          }}</router-link>
                        </h2>
                      </div>
                      <!-- .heading-small -->
                      <p>Name: {{ build.hero_name }}</p>
                      <p>Weapon: {{ build.weapon_skill_name }}</p>
                      <p>Assist: {{ build.assist }}</p>
                      <p>Special: {{ build.special }}</p>
                      <p>Passive A: {{ build.passivea }}</p>
                      <p>Passive B: {{ build.passiveb }}</p>
                      <p>Passive C: {{ build.passivec }}</p>
                    </div>
                    <!-- .post-content -->
                  </div>
                  <!-- .post-container -->
                </article>
                <!-- .post -->
              </div>
              <!-- .col-md-8 -->
            </div>
            <!-- .row -->
          </div>
          <!-- .container -->
        </main>
        <!-- #main -->
      </div>
      <!-- #primary -->
    </div>
    <!-- #content -->
    <!-- <label> Search by hero name: </label>
    <div class="form-group">
      <input class="form-control" v-model="nameFilter" list="names" type="text" placeholder="Search">
    </div>
    <router-link v-bind:to="`/builds/new`">Create New Build</router-link>
    <h1>{{ "Build list" }}</h1>
    <div v-for="build in filterBy(builds, nameFilter, 'hero_name')" v-bind:key="build.id">
      <h2>{{ build.name}}</h2>
      <ul>
        <li>Name: {{ build.hero_name }}</li>
        <li>Weapon: {{ build.weapon_skill_name }}</li>
        <li>Assist: {{ build.assist }}</li>
        <li>Special: {{ build.special }}</li>
        <li>Passive A: {{ build.passivea }}</li>
        <li>Passive B: {{ build.passiveb }}</li>
        <li>Passive C: {{ build.passivec }}</li>
      </ul>
      <router-link v-bind:to="`/builds/${build.id}`">View</router-link> 
    </div> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      errors: [],
      builds: [],
      nameFilter: "",
      name: "",
    };
  },
  created: function() {
    axios.get("/api/builds").then((response) => {
      console.log("All Builds:", response.data);
      this.builds = response.data;
    });
    axios.get("/api/heroes").then((response) => {
      console.log("All Heroes", response.data);
      this.heroes = response.data;
    });
  },
  methods: {},
};
</script>
