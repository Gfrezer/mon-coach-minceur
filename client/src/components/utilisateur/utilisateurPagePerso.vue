<template>
  <div class="formulairePerso">
    <!--router view faire apparaitre lorsque resultat fait-->
    <ul id="example-1">
      <resultatMaintenance :calculateur="calculateur" :monId="monId" />
    </ul>
    <b-button v-if="connecter()" @click="logout">Déconnectez-vous</b-button>
    <b-form @submit="onSubmit">
      <h4>Que faire ?</h4>
      <h6>Veillez rentrer vos valeurs</h6>

      <b-form-group id="input-group-1" label="Poids:" label-for="poids">
        <b-form-input
          id="poids"
          type="number"
          v-model="calculateur.poids"
          required
          placeholder="VotrePoids(kg)"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="taux De Graisse:" label-for="tauxDeGraisse">
        <b-form-input
          id="txGraisse"
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
          id="multiAcvtivite"
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
import resultatMaintenance from "./resultatMaintenance";

export default {
  name: "utilisateurPagePerso",
  components: {
    resultatMaintenance
  },
  data: function() {
    return {
      maintenance: "",
      objectifPriseMasse: "",
      monId: 0,

      calculateur: {
        poids: 0,
        tauxDeGraisse: 0,
        multiplicateurActivite: 0,
        surplusPriseMasse: 0,
        deficiteSeche: 0
      }
    };
  },
  created() {
    this.fetchData();
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
    fetchData() {
      let request = newRequest("/calculateur/read", "GET");

      fetchRequest(request).then(response => {
        console.log(response);
      });
    },

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
        this.monId = response.id;
        console.log("mon id" + this.monId);
        alert(`Votre poids de ` + response.poids + ` kgs est à jour!`);
      });
    }
  }
};
</script>


<style src="../../style/utilisateur/pagePerso.css" >