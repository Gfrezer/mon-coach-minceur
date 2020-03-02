<template>
  <div class="formulairePerso">
    <!--router view faire apparaitre lorsque resultat fait-->
    <router-view></router-view>
    <b-button v-if="connecter()" @click="logout">Déconnectez-vous</b-button>
    <b-form @submit="onSubmit">
      <h4>Que faire ?</h4>
      <h6>Veillez rentrer vos valeurs</h6>

      <b-form-group id="input-group-1" label="Poids:" label-for="poids">
        <b-form-input
          id="input-1"
          type="number"
          v-model="calculateur.poids"
          required
          placeholder="VotrePoids(kg)"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="taux De Graisse:" label-for="tauxDeGraisse">
        <b-form-input
          id="input-1"
          type="number"
          v-model="calculateur.tauxDeGraisse"
          required
          placeholder="VotretauxDeGraisse"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="multiplicateurActivite:"
        label-for="multiplicateurActivite"
      >
        <b-form-input
          id="input-3"
          type="number"
          v-model="calculateur.multiplicateurActivite"
          required
          placeholder="multiplicateur Activite"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="surplus Prise Masse:" label-for="surplusPriseMasse">
        <b-form-input
          id="input-5"
          type="number"
          v-model="calculateur.surplusPriseMasse"
          required
          placeholder="surplusPriseMasse"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="deficite Seche:" label-for="deficiteSeche">
        <b-form-input
          id="input-6"
          type="number"
          v-model="calculateur.deficiteSeche"
          required
          placeholder="deficiteSeche"
        ></b-form-input>
      </b-form-group>

      <b-button class="boutonFormulaire" type="submit" variant="primary">Validez</b-button>
    </b-form>
  </div>
</template>

<script>
import newRequest from "src/libs/request";
import requestCreate from "src/libs/request";
import fetchRequest from "src/libs/fetch";
import routes from "src/routes/routes";
export default {
  name: "utilisateurPagePerso",
  data: function() {
    return {
      calculateur: {
        poids: 0,
        tauxDeGraisse: 0,
        multiplicateurActivite: 0,
        surplusPriseMasse: 0,
        deficiteSeche: 0
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    if (window.localStorage.getItem("user")) {
      next();
    } else {
      next({
        name: "utilisateurConnection"
      });
    }
  },
  methods: {
    logout(evt) {
      evt.preventDefault();
      let request = newRequest("/user/logout", "GET");

      fetchRequest(request).then(() => {
        window.localStorage.removeItem("user");
        routes.push({ path: "/accueil" });
      });
    },

    connecter() {
      return window.localStorage.getItem("user") ? true : false;
    },

    onSubmit(evt) {
      evt.preventDefault();
      //let data = this;
      let request = requestCreate(
        "/calculateur/poids",
        "POST",
        this.calculateur
      );
      //this.user.prenom = "tata";
      // Call REST web service with fetch API
      fetchRequest(request).then(response => {
        console.log(response);
        // this.user.prenom = "toto " + response.nom;
        alert(`Votre poids de ` + response.poids + ` kgs est à jour!`),
          routes.push({ path: "/PagePerso" });
      });
    }
  }
};
</script>


<style src="../../style/utilisateur/pagePerso.css" >