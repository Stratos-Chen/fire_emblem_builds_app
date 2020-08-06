<template>
  <div class="Index">
    <!-- <datalist id="names">
      <option v-for="skill in skills">{{ skill.name }}</option>
    </datalist> -->
    <div id="content" class="site-content">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <section class="widget widget_search">
                  <form
                    role="search"
                    method="get"
                    class="search-form"
                    action=""
                  >
                    <label>
                      <span class="screen-reader-text">Search for:</span>
                      <input
                        type="search"
                        v-model="nameFilter"
                        class="search-field"
                        placeholder="Search ..."
                      />
                    </label>
                  </form>
                </section>
              </div>
              <div class="col-md-8">
                <header class="page-header">
                  <h1 class="page-title">Skill list</h1>
                </header>
                <article
                  v-for="skill in filterBy(skills, nameFilter, 'name')"
                  class="post format-standard hentry"
                >
                  <div class="post-container">
                    <div class="post-content">
                      <div class="heading-title heading-small">
                        <h2>{{ skill.name }}</h2>
                      </div>
                      <p>Effect: {{ skill.effect }}</p>
                      <p>
                        Movement Restriction: {{ skill.movementRestriction }}
                      </p>
                      <p>Weapon Restriction: {{ skill.weaponRestriction }}</p>
                      <p>Exclusive: {{ skill.exclusive }}</p>
                      <p>range: {{ skill.range }}</p>
                      <p>might: {{ skill.might }}</p>
                      <p>type: {{ skill.type }}</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      errors: [],
      skills: [],
      nameFilter: "",
    };
  },
  created: function() {
    axios.get("/api/skills").then((response) => {
      console.log("All Skills:", response.data);
      this.skills = response.data;
    });
  },
  methods: {},
};
</script>
