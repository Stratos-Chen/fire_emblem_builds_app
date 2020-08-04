<template>
  <div class="Index">
    <div class="col-md-8">
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
      <section class="widget widget_search">
        <form role="search" method="get" class="search-form" action="">
          <label>
            <span class="screen-reader-text">Search for:</span>
            <input class="search-field" v-model="nameFilter" list="names" type="search" placeholder="Search ..." value="">
          </label>
        </form>
      </section>
    </div>
    
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