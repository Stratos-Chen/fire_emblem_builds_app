<template>
  <div class="Index">
    <h1>{{ "build list" }}</h1>
    <div v-for="build in builds" v-bind:key="build.id">
      <h2>{{ build.hero_name }}</h2>
      <ul>
        <li>Weapon: {{ build.weapon_skill_name }}</li>
        <li>Assist: {{ build.assist }}</li>
        <li>Special: {{ build.special }}</li>
        <li>Passive A: {{ build.passivea }}</li>
        <li>Passive B: {{ build.passiveb }}</li>
        <li>Passive C: {{ build.passivec }}</li>
      </ul>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      builds: []
    };
  },
  created: function() {
    axios.get("/api/builds").then(response => {
      console.log("All Builds:", response.data);
      this.builds = response.data;
    });
  },
  methods: {}
};
</script>