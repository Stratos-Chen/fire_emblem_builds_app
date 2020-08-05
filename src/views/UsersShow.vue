<template>
  <div class="users-show">
    <!-- <div id="content" class="site-content">
        <div id="primary" class="content-area">
          <main id="main" class="site-main" role="main">

            <div class="container">
              <div class="row">
                <div class="col-md-8">

                  <div class="entry-author-bio">
                    <div class="author-bio-avatar">
                    </div> -->
    <h2>Username: {{ user.username }}</h2>
    <p>Email: {{ user.email }}</p>
    
    <router-link :to="`/users/me/edit`">Update Information</router-link> <br>

    <button><router-link :to="`/builds`">Build List</router-link></button>
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
    axios.get(`/api/users/me`).then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  }
};
</script>