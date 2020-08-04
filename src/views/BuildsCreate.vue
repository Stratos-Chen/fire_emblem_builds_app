<template>
  <div class="build create">
    <form v-on:submit.prevent="createBuild()">
      <h1>Create a build</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      Build Name:
      <input v-model="build_name" placeholder="input a build name"> <br>
      Hero:
      <select v-model="hero">
        <option v-for="heroe in heroes" v-bind:value="heroe">
          {{ heroe.name }}
        </option> <br>
      </select> <br>
      HP: {{ hero.hp }}<br>
      Attack: {{ hero.atk + weapon.might }}<br>
      Speed: {{ hero.spd }}<br>
      Defense: {{ hero.def }}<br>
      Resistance: {{ hero.res }}<br>
      Weapon Skill:
      <select v-model="weapon">
        <option v-for="weaponSkill in weaponSkills" v-bind:value="weaponSkill">
          {{ weaponSkill.name }}
        </option>
      </select> <br>
      effect: {{ weapon.effect }}<br>
      might: {{ weapon.might }}<br>
      Assist Skill:
      <select v-model="assist">
        <option v-for="assistSkill in assistSkills" v-bind:value="assistSkill">
          {{ assistSkill.name }}
        </option>
      </select> <br>
      effect: {{ assist.effect }}<br>
      Special Skill:
       <select v-model="special">
        <option v-for="specialSkill in specialSkills" v-bind:value="specialSkill">
          {{ specialSkill.name }}
        </option>
      </select> <br>
      effect: {{ special.effect }}<br>
      Passive A Skill:
      <select v-model="passivea">
        <option v-for="passiveASkill in passiveASkills" v-bind:value="passiveASkill">
          {{ passiveASkill.name }}
        </option>
      </select> <br>
      effect: {{ passivea.effect }}<br>
      Passive B Skill:
      <select v-model="passiveb">
        <option v-for="passiveBSkill in passiveBSkills" v-bind:value="passiveBSkill">
          {{ passiveBSkill.name }}
        </option>
      </select> <br>
      effect: {{ passiveb.effect }}<br>
      Passive C Skill:
      <select v-model="passivec">
        <option v-for="passiveCSkill in passiveCSkills" v-bind:value="passiveCSkill">
          {{ passiveCSkill.name }}
        </option>
      </select> <br>
      effect: {{ passivec.effect }}<br>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
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
      hp: "",
      attack: "",
      speed: "",
      defense: "",
      resistance: ""
    };
  },
  created: function() {
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
    createBuild: function() {
      var params = {
        name: this.build_name,
        hero_name: this.hero.name,
        weapon_skill_name: this.weapon.name,
        assist: this.assist.name,
        special: this.special.name,
        passivea: this.passivea.name,
        passiveb: this.passiveb.name,
        passivec: this.passivec.name,
        hp: this.hero.hp,
        attack: this.hero.atk + this.weapon.might,
        speed: this.hero.spd,
        defense: this.hero.def,
        resistance: this.hero.res
      };
      axios
        .post("/api/builds", params)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/builds");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>