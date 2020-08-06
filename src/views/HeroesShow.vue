<template>
  <div class="heroes-show">
    <div id="content" class="site-content">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div class="entry-author-bio">
                  <div class="author-bio-avatar">
                    <!-- <img alt="avatar" src="assets/img/danish-image-post-thumbnail-02.jpg" class="avatar avatar-80 photo" height="80" width="80"> -->
                  </div>
                  <!-- .author-bio-avatar -->
                  <div class="author-bio-description">
                    <h1>{{ heroe.name }}</h1>
                    <h3>Origin game: {{ heroe.origin }}</h3>
                    <p>Weapon type: {{ heroe.weaponType }}</p>
                    <p>Movement Type: {{ heroe.moveType }}</p>
                    <p>HP: {{ heroe.hp }}</p>
                    <p>Atk: {{ heroe.atk }}</p>
                    <p>Spd: {{ heroe.spd }}</p>
                    <p>Def: {{ heroe.def }}</p>
                    <p>Res: {{ heroe.res }}</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <section class="widget danish_widget_about">
                  <div class="about-author-container">
                    <div class="about-author-info">
                      <div class="author-description" v-if="heroe">
                        <img :src="heroe.image_url" alt="" />
                      </div>
                    </div>
                  </div>
                </section>
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
      heroe: {},
    };
  },
  created: function() {
    axios.get(`/api/heroes/${this.$route.params.name}`).then((response) => {
      console.log(response.data);
      this.heroe = response.data;
    });
  },
};
</script>
