<template>
  <div class="Index">
    <div class="form-group">
      <input class="form-control" v-model="nameFilter" list="names" type="text" placeholder="Search">
    </div>
    <div>
      <button v-on:click="sortAttribute = 'origin'">Sort by Origin</button>
    </div>
    <h1>{{ "Hero list" }}</h1>
    <div v-for="heroe in heroes" v-bind:key="heroe.id">
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
      <router-link v-bind:to="`/builds/new`">Select Hero</router-link> |
      <router-link v-bind:to="`/heroes/${heroe.name}`">Showcase Info</router-link>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  data: function() {
    return {
      errors: [],
      heroes: [],
      nameFilter: "",
      sortAttribute: "origin"
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