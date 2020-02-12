<template>
  <section>
    <div>
      <div class="container-accueil">
        <b-button v-if="connecter()" @click="logout">Déconnectez-vous</b-button>

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
import newRequest from "../../libs/request";
import fetchRequest from "../../libs/fetch";
import routes from "../../routes/routes";
export default {
  components: {
    accueilNavbar
  },
  // data() {
  //   return {
  //     connected: false
  //   };
  // },
  methods: {
    logout(evt) {
      evt.preventDefault();
      let request = newRequest("/user/logout", "GET");
      let self = this;
      fetchRequest(request).then(response => {
        window.localStorage.removeItem("user");
        self.$forceUpdate();
        console.log("reponse à ma requete" + response.nom);
        alert(`Vous etes déconnecté !`);
        routes.push({ path: "/accueil/utilisateurConnection" });
      });
    },
    connecter() {
      return window.localStorage.getItem("user") ? true : false;
    }
  }
};
</script>
<style src="../../style/accueil/accueil.css" scoped></style>
