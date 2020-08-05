<template>
  <div class="signup">
    <!-- content -->
    <div id="content" class="site-content">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <h3>Signup</h3>

                <form class="comment-form" v-on:submit.prevent="submit()">
                  <ul>
                    <li class="text-danger" v-for="error in errors">
                      {{ error }}
                    </li>
                  </ul>
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <input
                        type="text"
                        v-model="name"
                        class="form-control"
                        placeholder="Name "
                      />
                      <input
                        type="email"
                        v-model="email"
                        class="form-control"
                        placeholder="Email "
                      />
                    </div>
                    <!-- .col-md-6 -->
                    <div class="col-md-6 col-sm-6">
                      <input
                        type="password"
                        v-model="password"
                        class="form-control"
                        placeholder="Password "
                      />
                      <input
                        type="password"
                        v-model="passwordConfirmation"
                        class="form-control"
                        placeholder="Password Confirmation"
                      />
                    </div>
                    <!-- .col-md-6 -->
                  </div>
                  <!-- .row -->
                  <div class="row">
                    <div class="col-sm-12">
                      <input
                        type="submit"
                        class="btn btn-danish btn-lg btn-block"
                      />
                    </div>
                  </div>
                </form>
                <!-- .comment-form -->
              </div>
              <!-- .col-sm-9 -->
            </div>
            <!-- .row -->
          </div>
          <!-- .container -->
        </main>
        <!-- #main -->
      </div>
      <!-- #primary -->
    </div>
    <!-- #content -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
