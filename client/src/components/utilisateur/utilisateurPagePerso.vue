<template>
  <div class="formulaire">
    <b-button v-if="connecter()" @click="logout">Déconnectez-vous</b-button>
    <b-form @submit="onSubmit">
      <h4>Pas encore membre ?</h4>
      <h6>Formulaire d'inscription</h6>

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

      <b-form-group id="input-group-1" label="maintenance:" label-for="maintenance">
        <b-form-input
          id="input-4"
          type="number"
          v-model="calculateur.maintenance"
          required
          placeholder="maintenance"
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

      <b-form-group id="input-group-1" label="objectif Prise Masse:" label-for="objectifPriseMasse">
        <b-form-input
          id="input-7"
          type="number"
          v-model="calculateur.objectifPriseMasse"
          required
          placeholder="objectifPriseMasse"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="objectif Seche:" label-for="objectifSeche">
        <b-form-input
          id="input-8"
          type="number"
          v-model="calculateur.objectifSeche"
          required
          placeholder="objectifSeche"
        ></b-form-input>
      </b-form-group>

      <b-button class="boutonFormulaire" type="submit" variant="primary">Validez</b-button>
      <router-link to="/utilisateurConnection">Connectez-vous !</router-link>
    </b-form>
  </div>
</template>

<script>
import newRequest from "../../libs/request";
import requestCreate from "../../libs/request";
import fetchRequest from "../../libs/fetch";
import routes from "../../routes/routes";
export default {
  name: "utilisateurPagePerso",
  data: function() {
    return {
      calculateur: {
        poids: 0,
        tauxDeGraisse: 0,
        multiplicateurActivite: 0,
        maintenance: 0,
        surplusPriseMasse: 0,
        deficiteSeche: 0,
        objectifPriseMasse: 0,
        objectifSeche: 0
      }
    };
  },
  methods: {
    logout(evt) {
      evt.preventDefault();
      let request = newRequest("/user/logout", "GET");
      let self = this;
      fetchRequest(request).then(response => {
        window.localStorage.removeItem("user");
        self.$forceUpdate();
        console.log("reponse à ma requete" + response);
        alert(`Vous etes déconnecté !`);
        routes.push({ path: "/accueil/utilisateurConnection" });
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
          routes.push({ path: "/accueil" });
      });
    }
  }
};
</script>

<style src="../../style/utilisateur/utilisateurFormulaire.css" scoped></style>
