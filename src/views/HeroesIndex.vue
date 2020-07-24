<template>
  <div class="Index">
    <h1>{{ "hero list" }}</h1>
    <div v-for="heroe in heroes" v-bind:key="heroe.id">
      <h2>{{ heroe.name }}</h2>
      <ul>
        <li>Weapon type: {{ heroe.weaponType }}</li>
        <li>Movement Type: {{ heroe.moveType }}</li>
        <li>HP: {{ heroe.hp }}</li>
        <li>Atk: {{ heroe.atk }}</li>
        <li>Spd: {{ heroe.spd }}</li>
        <li>Def: {{ heroe.def }}</li>
        <li>Res: {{ heroe.res }}</li>
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
      heroes: []
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