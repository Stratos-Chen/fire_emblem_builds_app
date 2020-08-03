<template>
  <div class="Index">
    <label> Search by hero name: </label>
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
      builds: [],
      nameFilter: "",
      name: ""
    };
  },
  created: function() {
    axios.get("/api/builds").then(response => {
      console.log("All Builds:", response.data);
      this.builds = response.data;
    });
    axios.get("/api/heroes").then(response => {
      console.log("All Heroes", response.data);
      this.heroes = response.data;
    });
  },
  methods: {}
};
</script>