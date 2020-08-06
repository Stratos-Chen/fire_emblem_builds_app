<template>
  <div class="build create">
    <!-- content -->
    <div id="content" class="site-content">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <h3>Create a build</h3>

                <form class="comment-form" v-on:submit.prevent="createBuild()">
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <input
                        type="text"
                        v-model="build_name"
                        class="form-control"
                        placeholder="Enter Build Name : "
                      />
                      <select
                        class="form-control"
                        v-model="hero"
                        name="archive-dropdown"
                      >
                        <option value="">Select a Hero</option>
                        <option v-for="heroe in heroes">
                          {{ heroe.name }}
                        </option>
                      </select>
                      <select class="form-control" v-model="assist">
                        <option value="">Select Assist Skill</option>
                        <option v-for="assistSkill in assistSkills">
                          {{ assistSkill.name }}
                        </option>
                      </select>
                      <select
                        class="form-control"
                        v-model="special"
                        name="archive-dropdown"
                      >
                        <option value="">Select a Special Skill</option>
                        <option v-for="specialSkill in specialSkills">
                          {{ specialSkill.name }}
                        </option>
                      </select>
                    </div>
                    <!-- .col-md-6 -->
                    <div class="col-md-6 col-sm-6">
                      <select
                        class="form-control"
                        v-model="weapon"
                        name="archive-dropdown"
                      >
                        <option value="">Select a Weapon</option>
                        <option v-for="weaponSkill in weaponSkills">
                          {{ weaponSkill.name }}
                        </option>
                      </select>
                      <select
                        class="form-control"
                        v-model="passivea"
                        name="archive-dropdown"
                      >
                        <option value="">Select a passive A Skill</option>
                        <option v-for="passiveASkill in passiveASkills">
                          {{ passiveASkill.name }}
                        </option>
                      </select>
                      <select
                        class="form-control"
                        v-model="passiveb"
                        name="archive-dropdown"
                      >
                        <option value="">Select a passive B Skill</option>
                        <option v-for="passiveBSkill in passiveBSkills">
                          {{ passiveBSkill.name }}
                        </option>
                      </select>
                      <select
                        class="form-control"
                        v-model="passivec"
                        name="archive-dropdown"
                      >
                        <option value="">Select a passive C Skill</option>
                        <option v-for="passiveCSkill in passiveCSkills">
                          {{ passiveCSkill.name }}
                        </option>
                      </select>
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
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      builds: [],
      errors: [],
      heroes: [],
      weaponSkills: [],
      assistSkills: [],
      specialSkills: [],
      passiveASkills: [],
      passiveBSkills: [],
      passiveCSkills: [],
      selected: "",
      build_name: "",
      weapon: "",
      hero: "",
      assist: "",
      special: "",
      passivea: "",
      passiveb: "",
      passivec: "",
      // hp: "",
      // attack: "",
      // speed: "",
      // defense: "",
      // resistance: ""
    };
  },
  created: function() {
    axios.get("/api/skills").then((response) => {
      console.log(response.data);
      this.weaponSkills = this.filterBy(response.data, "weapon", "type");
      console.log(this.weaponSkills);
      this.assistSkills = this.filterBy(response.data, "assist", "type");
      console.log(this.assistSkills);
      this.specialSkills = this.filterBy(response.data, "special", "type");
      console.log(this.specialSkills);
      this.passiveASkills = this.filterBy(response.data, "passivea", "type");
      console.log(this.passiveASkills);
      this.passiveBSkills = this.filterBy(response.data, "passiveb", "type");
      console.log(this.passiveBSkills);
      this.passiveCSkills = this.filterBy(response.data, "passivec", "type");
      console.log(this.passiveCSkills);
    });
    axios.get("/api/heroes").then((response) => {
      console.log("All Heroes", response.data);
      this.heroes = response.data;
    });
  },
  methods: {
    createBuild: function() {
      var params = {
        name: this.build_name,
        hero_name: this.hero,
        weapon_skill_name: this.weapon,
        assist: this.assist,
        special: this.special,
        passivea: this.passivea,
        passiveb: this.passiveb,
        passivec: this.passivec,
        // hp: this.hero.hp,
        // attack: this.hero.atk + this.weapon.might,
        // speed: this.hero.spd,
        // defense: this.hero.def,
        // resistance: this.hero.res
      };
      axios
        .post("/api/builds", params)
        .then((response) => {
          console.log("Success", response.data);
          this.$router.push("/builds");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
