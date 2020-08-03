<template>
  <div class="builds-show">
    <h2>{{ build.name }}</h2>
    <p>Hero: {{ build.hero_name }}</p>
    <p>Weapon: {{ build.weapon_skill_name }}</p>
    <p>Assist: {{ build.assist }}</p>
    <p>Special: {{ build.special }}</p>
    <p>Passive A: {{ build.passivea }}</p>
    <p>Passive B: {{ build.passiveb }}</p>
    <p>Passive C: {{ build.passivec }}</p>
    <router-link :to="`/builds/${build.id}/edit`">Update</router-link> |
    <button class="delete button" v-on:click="destroyBuild()">Delete</button>
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
      heroes: []
    };
  },
  created: function() {
    axios.get(`/api/builds/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.build = response.data;
    });
    axios.get("/api/heroes").then(response => {
      console.log("All Heroes", response.data);
      this.heroes = response.data;
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
