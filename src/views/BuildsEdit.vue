<template>
  <div class="builds-edit">
    <form v-on:submit.prevent="updateBuild()">
      <h1>Build Edit</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      Build Name:
      <input v-model="build.name" placeholder="input a build name"> <br>
      Hero:
      <select v-model="build.hero_name">
        <option v-for="heroe in heroes" v-bind:hero_name="heroe.name">
          {{ heroe.name }}
        </option>
      </select> <br>
      <!-- HP: {{ hero.hp}}<br>
      Attack: {{ hero.atk }}<br>
      Speed: {{ hero.spd }}<br>
      Defense: {{ hero.def }}<br>
      Resistance: {{ hero.res }}<br> -->
      Weapon Skill:
      <select v-model="build.weapon_skill_name">
        <option v-for="weaponSkill in weaponSkills" v-bind:weapon_skill="weaponSkill.name">
          {{ weaponSkill.name }}
        </option>
      </select> <br>
      <!-- effect: {{ weapon.effect }}<br>
      might: {{ weapon.might }}<br> -->
      Assist Skill:
      <select v-model="build.assist">
        <option v-for="assistSkill in assistSkills" v-bind:assist="assistSkill.name">
          {{ assistSkill.name }}
        </option>
      </select> <br>
      <!-- effect: {{ assist.effect }}<br> -->
      Special Skill:
       <select v-model="build.special">
        <option v-for="specialSkill in specialSkills" v-bind:special="specialSkill.name">
          {{ specialSkill.name }}
        </option>
      </select> <br>
      <!-- effect: {{ special.effect }}<br> -->
      Passive A Skill:
      <select v-model="build.passivea">
        <option v-for="passiveASkill in passiveASkills" v-bind:passivea="passiveASkill.name">
          {{ passiveASkill.name }}
        </option>
      </select> <br>
      <!-- effect: {{ passivea.effect }}<br> -->
      Passive B Skill:
      <select v-model="build.passiveb">
        <option v-for="passiveBSkill in passiveBSkills" v-bind:passiveb="passiveBSkill.name">
          {{ passiveBSkill.name }}
        </option>
      </select> <br>
      <!-- effect: {{ passiveb.effect }}<br> -->
      Passive C Skill:
      <select v-model="build.passivec">
        <option v-for="passiveCSkill in passiveCSkills" v-bind:passivec="passiveCSkill.name">
          {{ passiveCSkill.name }}
        </option>
      </select> <br>
      <!-- effect: {{ passivec.effect }}<br> -->
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
  
</template>

<style>
</style>

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
      passiveCSkills: []
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
    axios.get(`/api/builds/${this.$route.params.id}`).then(response => {
      this.build = response.data;
      console.log(this.build);
    });
    axios.get("/api/skills").then(response => {
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
    axios.get("/api/heroes").then(response => {
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
        passivec: this.build.passivec
      };
      axios
        .patch(`api/builds/${this.build.id}`, params)
        .then(response => {
          this.$router.push(`/builds/${response.data.id}`);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>