<template>
  <div class="users-edit">
    <form v-on:submit.prevent="updateUser()">
      <h1>Update User Information</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Username:</label>
        <input type="text" class="form-control" v-model="user.username">
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="text" class="form-control" v-model="user.email">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="user.password">
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="passwordConfirmation">
      </div>
      <input type="submit" class="btn btn-primary" value="Update">
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      user: {},
      passwordConfirmation: ""
    };
  },
  created: function() {
    axios.get(`/api/users/me`).then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
    updateUser: function() {
      var params = {
        email: this.user.email,
        username: this.user.username,
        password: this.user.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .patch(`api/users/me`, params)
        .then(response => {
          this.$router.push(`/users/${response.data.id}`);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>