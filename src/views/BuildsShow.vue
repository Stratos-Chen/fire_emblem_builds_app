<template>
  <div class="builds-show">
    <h2>{{ build.name }}</h2>
    <p>Hero: {{ build.hero_name }}</p>
    <ul>
      <li>HP: {{ build.hp }}</li>
    </ul>
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
      heroe: {},
      heroes: []
    };
  },
  created: function() {
    axios.get(`/api/builds/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.build = response.data;
    });
    // axios.get(`/api/heroes/${this.build.hero_name}`).then(response => {
    //   console.log(response.data);
    //   this.heroe = response.data;
    // });
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
