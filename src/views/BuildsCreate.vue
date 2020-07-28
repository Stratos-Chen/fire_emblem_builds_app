<template>
  <div class="build create">
    <h1>Create a build</h1>

    <div class="build-form">
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      errors: [],
      weaponSkills: [],
      assistSkills: [],
      specialSkills: [],
      passiveASkills: [],
      passiveBSkills: [],
      passiveCSkills: []
    };
  },
  created: function() {
    axios.get("/api/skills").then(response => {
      console.log(response.data);
      this.weaponSkills = this.filterBy(response.data, "weapon", "type").slice(
        0,
        20
      );
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
  },
  methods: {}
};
</script>