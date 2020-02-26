<template>
  <section>
    <div>
      <div class="container-accueil">
        <b-button v-if="connecter()" @click="logout">Déconnectez-vous</b-button>

        <div class="home_title">
          <img src="../../../public/images/fond_1.jpg" class="photo_parquet" />
          <h1>Page Administrateur</h1>

          <div class="fondText"></div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>



<script>
import newRequest from "src/libs/request";
import fetchRequest from "src/libs/fetch";
import routes from "src/routes/routes";
//import utilisateurTableau from "src/components/administrateur/utilisateurTableau";
export default {
  components: {
    //utilisateurTableau
  },

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






