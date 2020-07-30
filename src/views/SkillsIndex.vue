<template>
  <div class="Index">
    <label> Search by name: </label>
    <div class="form-group">
      <input class="form-control" v-model="nameFilter" list="names" type="text" placeholder="Search">
    </div>
    <!-- <datalist id="names">
      <option v-for="skill in skills">{{ skill.name }}</option>
    </datalist> -->
    <h1>{{ "Skill list" }}</h1>
    <div v-for="skill in filterBy(skills, nameFilter, 'name')" v-bind:key="skill.id">
      <h2>{{ skill.name }}</h2>
      <ul>
        <li>Effect: {{ skill.effect }}</li>
        <li>Movement Restriction: {{ skill.movementRestriction}}</li>
        <li>Weapon Restriction: {{ skill.weaponRestriction }}</li>
        <li>Exclusive: {{ skill.exclusive }}</li>
        <li>range: {{ skill.range }}</li>
        <li>might: {{ skill.might }}</li>
        <li>type: {{ skill.type }}</li>
      </ul>
    </div>
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
      skills: [],
      nameFilter: ""
    };
  },
  created: function() {
    axios.get("/api/skills").then(response => {
      console.log("All Skills:", response.data);
      this.skills = response.data;
    });
  },
  methods: {}
};
</script>