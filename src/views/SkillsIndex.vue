<template>
  <div class="Index">
    <h1>{{ "Skill list" }}</h1>
    <div v-for="skill in skills" v-bind:key="skill.id">
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
export default {
  data: function() {
    return {
      skills: []
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