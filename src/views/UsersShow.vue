<template>
  <div class = "users-show">
    <h2>Username: {{ user.username }}</h2>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      user: {}
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  }
};
</script>