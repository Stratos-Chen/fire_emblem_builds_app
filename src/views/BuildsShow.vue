<template>
  <div class="builds-show">
    <h2>{{ build.name }}</h2>
    <p>Hero Name: {{ build.hero_name }}</p>
    <p>Weapon: {{ build.weapon_skill_name }}</p>
    <p>Assist: {{ build.assist }}</p>
    <p>Special: {{ build.special }}</p>
    <p>Passive A: {{ build.passivea }}</p>
    <p>Passive B: {{ build.passiveb }}</p>
    <p>Passive C: {{ build.passivec }}</p>
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
      build: {}
    };
  },
  created: function() {
    axios.get(`/api/builds/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.build = response.data;
    });
  },
  methods: {}
};
</script>
