<template>
  <section>
    <div>
      <div class="container-accueil">
        <div class="home_title">
          <img src="../../../public/images/parquet.jpg" class="photo_parquet" />
          <h1>Bienvenue sur mon Coachminceur</h1>
          <img src="../../../public/images/mesureTaille.jpg" class="photo_personne" />
          <p>
            site pour
            <br />du poids
          </p>
          <div class="fondText"></div>
        </div>
        <router-view></router-view>
        <accueilNavbar />
      </div>
    </div>
  </section>
</template>

<script>
import accueilNavbar from "../accueil/accueilNavbar";

export default {
  components: {
    accueilNavbar
  },
  // data() {
  //   return {
  //     connected: false
  //   };
  // },
  methods: {}
};
</script>
<style src="../../style/accueil/accueil.css" scoped></style>
