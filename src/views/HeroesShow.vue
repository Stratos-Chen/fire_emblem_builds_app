<template>
  <div class="heroes-show">
    <h2>{{ heroe.name }}</h2>
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