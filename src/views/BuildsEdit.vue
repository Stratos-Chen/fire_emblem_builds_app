<template>
  <div class="builds-edit">
    <!-- content -->
    <div id="content" class="site-content">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <h3>Build Edit</h3>

                <form class="comment-form" v-on:submit.prevent="updateBuild()">
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <input
                        type="text"
                        v-model="build.name"
                        class="form-control"
                        placeholder="Enter Build Name : "
                      />
                      <select
                        class="form-control"
                        v-model="build.hero_name"
                        name="archive-dropdown"
                      >
                        <option value="">Select a Hero</option>
                        <option v-for="heroe in heroes">
                          {{ heroe.name }}
                        </option>
                      </select>
                      <select
                        class="form-control"
                        v-model="build.assist"
                        name="archieve-dropdown"
                      >
                        <option value="">Select Assist Skill</option>
                        <option v-for="assistSkill in assistSkills">
                          {{ assistSkill.name }}
                        </option>
                      </select>
                      <select
                        class="form-control"
                        v-model="build.special"
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
                        v-model="build.weapon_skill_name"
                        name="archive-dropdown"
                      >
                        <option value="">Select a Weapon</option>
                        <option v-for="weaponSkill in weaponSkills">
                          {{ weaponSkill.name }}
                        </option>
                      </select>
                      <select
                        class="form-control"
                        v-model="build.passivea"
                        name="archive-dropdown"
                      >
                        <option value="">Select a passive A Skill</option>
                        <option v-for="passiveASkill in passiveASkills">
                          {{ passiveASkill.name }}
                        </option>
                      </select>
                      <select
                        class="form-control"
                        v-model="build.passiveb"
                        name="archive-dropdown"
                      >
                        <option value="">Select a passive B Skill</option>
                        <option v-for="passiveBSkill in passiveBSkills">
                          {{ passiveBSkill.name }}
                        </option>
                      </select>
                      <select
                        class="form-control"
                        v-model="build.passivec"
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
    <!-- HP: {{ hero.hp}}<br>
      Attack: {{ hero.atk }}<br>
      Speed: {{ hero.spd }}<br>
      Defense: {{ hero.def }}<br>
      Resistance: {{ hero.res }}<br> -->

    <!-- effect: {{ weapon.effect }}<br>
      might: {{ weapon.might }}<br> -->

    <!-- effect: {{ assist.effect }}<br> -->

    <!-- effect: {{ special.effect }}<br> -->

    <!-- effect: {{ passivea.effect }}<br> -->

    <!-- effect: {{ passiveb.effect }}<br> -->

    <!-- effect: {{ passivec.effect }}<br> -->
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
      build: {},
      heroes: [],
      weaponSkills: [],
      assistSkills: [],
      specialSkills: [],
      passiveASkills: [],
      passiveBSkills: [],
      passiveCSkills: [],
      // name: "",
      // weapon: "",
      // hero: "",
      // assist: "",
      // special: "",
      // passivea: "",
      // passiveb: "",
      // passivec: ""
    };
  },
  created: function() {
    axios.get(`/api/builds/${this.$route.params.id}`).then((response) => {
      this.build = response.data;
      console.log(this.build);
    });
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
    updateBuild: function() {
      var params = {
        name: this.build.name,
        hero_name: this.build.hero_name,
        weapon_skill_name: this.build.weapon_skill_name,
        assist: this.build.assist,
        special: this.build.special,
        passivea: this.build.passivea,
        passiveb: this.build.passiveb,
        passivec: this.build.passivec,
      };
      axios
        .patch(`api/builds/${this.build.id}`, params)
        .then((response) => {
          this.$router.push(`/builds/${response.data.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
