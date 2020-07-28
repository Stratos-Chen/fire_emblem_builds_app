<template>
  <div class="heroes-show">
    <h2>{{ heroe.name }}</h2>
    <p>Origin game: {{ heroe.origin }} </p>
    <p>Weapon type: {{ heroe.weaponType }}</p>
    <p>Movement Type: {{ heroe.moveType }}</p>
    <p>HP: {{ heroe.hp }}</p>
    <p>Atk: {{ heroe.atk }}</p>
    <p>Spd: {{ heroe.spd }}</p>
    <p>Def: {{ heroe.def }}</p>
    <p>Res: {{ heroe.res }}</p>
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