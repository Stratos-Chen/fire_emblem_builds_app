<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/builds">Builds List</router-link> |
      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link> |
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link> |
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link> |
      <router-link to="/heroes">Heroes List</router-link> |
      <router-link to="/skills">Skills List</router-link> |
      <router-link v-if="isLoggedIn()" to="/users/me">User Info</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>
<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    }
  }
};
</script>
