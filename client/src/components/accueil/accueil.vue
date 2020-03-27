<template>
  <section>
    <div>
      <div class="container-accueil">
        <div class="home_title">
          <h1>Bienvenue sur mon Coachminceur</h1>
          <img src="../../../public/images/mesureTaille.jpg" class="photo_personne" />
          <div v-if="!afficherForm === true && !cacherText">
            <h2>Manger avec plaisir</h2>
            <h3>
              "Lorem ipsum dolor sit amet, laudem explicari nam id, vel invidunt molestiae ut. Vitae tacimates cu sed. Sed no tamquam propriae definitionem, debet error vim no. Eam ex malis accusam, ad vis quas commune voluptatum, tibique deleniti epicurei duo in. Meliore habemus insolens et qui, ex ius amet facilisi.
              Per quas cetero te, cu per petentium disputando."
            </h3>
            <img src="../../../public/images/platAccueil.jpg" class="photo_plat" />
          </div>
          <div v-if="!afficherForm">
            <router-view></router-view>
          </div>
          <div v-if="afficherForm">
            <utilisateurFormulaire />
          </div>
          <p>Site pour perdre du poids</p>
          <div class="fondText"></div>
        </div>
        <accueilNavbar @formu="cacherRouterView" @aSavoir="cacherTextAccueil" />
      </div>
    </div>
  </section>
</template>

<script>
import accueilNavbar from "src/components/accueil/accueilNavbar";
import utilisateurFormulaire from "src/components/utilisateur/utilisateurFormulaire";
export default {
  components: {
    accueilNavbar,
    utilisateurFormulaire
  },

  data: function() {
    return {
      afficherForm: false,
      cacherText: false
    };
  },
  methods: {
    cacherRouterView(modalOpenFormulaire) {
      this.afficherForm = modalOpenFormulaire;
      console.log("ceci est parent " + this.afficherForm);
    },

    cacherTextAccueil(aSavoirBouleen) {
      this.cacherText = aSavoirBouleen;
    }
  }
};
</script>
<style src="../../style/accueil/accueil.css" scoped></style>
