<template>
  <div class="Index">

    <router-link v-bind:to="`/builds/new`">Create New Build</router-link>
    <h1>{{ "Build list" }}</h1>
    <div v-for="build in builds" v-bind:key="build.id">
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
      <router-link v-bind:to="`/builds/${build.id}`">View</router-link> |
      <button class="delete button" v-on:click="destroyBuild()">Delete</button>
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
      errors: [],
      builds: []
    };
  },
  created: function() {
    axios.get("/api/builds").then(response => {
      console.log("All Builds:", response.data);
      this.builds = response.data;
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
  }
};
</script>