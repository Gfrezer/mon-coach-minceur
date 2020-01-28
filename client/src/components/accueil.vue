<template>
  <section>
    <div>
      <div class="container-accueil">
        <div class="home_title">
          <img src="../../public/images/parquet.jpg" class="photo_parquet" />
          <h1>Bienvenue sur mon Coachminceur</h1>
          <img src="../../public/images/mesureTaille.jpg" class="photo_personne" />
          <router-view></router-view>
          <p>
            site pour
            <br />du poids
          </p>
        </div>
        <accueilNavbar />

        <!--<userFormulaire class="formulaireAccueil"></userFormulaire>-->
      </div>
    </div>
  </section>
</template>

<script>
import accueilNavbar from "./accueilNavbar";

export default {
  components: {
    accueilNavbar
  }
};
</script>
<style>
@import "../style/accueil.css";
</style>
