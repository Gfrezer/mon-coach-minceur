<template>
  <section>
    <div>
      <div class="container-accueil">
        <div class="home_title">
          <h1>Bienvenue sur mon Coachminceur</h1>
          <img src="../../../public/images/mesureTaille.jpg" class="photo_personne" />
          <div v-if="!afficherForm === true && !cacherText && !afficherLaConnect">
            <h2>Manger avec plaisir</h2>
            <h3>
              "Lorem ipsum dolor sit amet, laudem explicari nam id, vel invidunt molestiae ut. Vitae tacimates cu sed. Sed no tamquam propriae definitionem, debet error vim no. Eam ex malis accusam, ad vis quas commune voluptatum, tibique deleniti epicurei duo in. Meliore habemus insolens et qui, ex ius amet facilisi.
              Per quas cetero te, cu per petentium disputando."
            </h3>
            <img src="../../../public/images/platAccueil.jpg" class="photo_plat" />
          </div>
          <div v-if="!afficherForm && !afficherLaConnect">
            <router-view></router-view>
          </div>
          <div v-if="afficherForm">
            <utilisateurFormulaire />
          </div>
          <div v-if="afficherLaConnect">
            <utilisateurConnection />
          </div>
          <p>Site pour perdre du poids</p>
          <div class="fondText"></div>
        </div>
        <accueilNavbar
          @formu="afficheLeFormu"
          @aSavoir="cacherTextAccueil"
          @connect="affichelaConnect"
        />
      </div>
    </div>
  </section>
</template>

<script>
import accueilNavbar from "src/components/accueil/accueilNavbar";
import utilisateurFormulaire from "src/components/utilisateur/utilisateurFormulaire";
import utilisateurConnection from "src/components/utilisateur/utilisateurConnection";
export default {
  components: {
    accueilNavbar,
    utilisateurFormulaire,
    utilisateurConnection
  },

  data: function() {
    return {
      afficherForm: false,
      cacherText: false,
      afficherLaConnect: false
    };
  },
  methods: {
    afficheLeFormu(modalOpenFormulaire) {
      this.afficherForm = modalOpenFormulaire;
      console.log("ceci est parent " + this.afficherForm);
    },

    affichelaConnect(modalOpenConnection) {
      this.afficherLaConnect = modalOpenConnection;
      console.log("ceci est parent " + this.afficherForm);
    },

    cacherTextAccueil(aSavoirBouleen) {
      this.cacherText = aSavoirBouleen;
    }
  }
};
</script>
<style src="../../style/accueil/accueil.css" scoped></style>
