<template>
  <div class="users-show">
    <div id="content" class="site-content">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div class="entry-author-bio">
                  <!-- <div class="author-bio-avatar">                   
                  </div> -->
                  <div class="author-bio-description">
                    <h2>Username: {{ user.username }}</h2>
                    <p>Email: {{ user.email }}</p>

                    <div class="row">
                      <div class="col-md-12">
                        <a href="/users/me/edit" class="btn btn-lg btn-danish"
                          >Update Information</a
                        >
                      </div>

                      <div class="col-md-12">
                        <a href="/builds" class="btn btn-lg btn-danish"
                          >Build List</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      user: {},
    };
  },
  created: function() {
    axios.get(`/api/users/me`).then((response) => {
      console.log(response.data);
      this.user = response.data;
    });
  },
};
</script>
