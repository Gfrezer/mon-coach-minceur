<template>
  <section>
    <div>
      <div class="container-accueil">
        <div class="home_title">
          <h1>Bienvenue sur mon Coachminceur</h1>
          <img src="../../../public/images/mesureTaille.jpg" class="photo_personne" />
          <router-view></router-view>
          <p>Site pour du poids</p>
          <div class="fondText"></div>
        </div>
        <accueilNavbar />
      </div>
    </div>
  </section>
</template>

<script>
import accueilNavbar from "src/components/accueil/accueilNavbar";

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
