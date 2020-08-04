<template>
  <div class="heroes-show">
    <h1>{{ heroe.name }}</h1>
    <ul>
      <li>Origin game: {{ heroe.origin }} </li>
      <li>Weapon type: {{ heroe.weaponType }}</li>
      <li>Movement Type: {{ heroe.moveType }}</li>
      <li>HP: {{ heroe.hp }}</li>
      <li>Atk: {{ heroe.atk }}</li>
      <li>Spd: {{ heroe.spd }}</li>
      <li>Def: {{ heroe.def }}</li>
      <li>Res: {{ heroe.res }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      heroe: {}
    };
  },
  created: function() {
    axios.get(`/api/heroes/${this.$route.params.name}`).then(response => {
      console.log(response.data);
      this.heroe = response.data;
    });
  }
};
</script>