<template>
  <div class="formulaire" id="modalFormulaire" v-show="value">
    <b-form @submit="onSubmit">
      <h4>Pas encore membre ?</h4>
      <h6>Formulaire d'inscription</h6>
      <b-form-group id="input-group-1" label="Nom:" label-for="nom">
        <b-form-input id="input-1" type="text" v-model="user.nom" required placeholder="Nom"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="prenom:" label-for="prenom">
        <b-form-input id="input-2" type="text" v-model="user.prenom" required placeholder="prenom"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="email:" label-for="email">
        <b-form-input id="input-3" type="text" v-model="user.email" required placeholder="email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="password:" label-for="password">
        <b-form-input
          id="input-4"
          type="password"
          v-model="user.password"
          required
          placeholder="password"
        ></b-form-input>
      </b-form-group>

      <b-button class="boutonFormulaire" type="submit" variant="primary">Validez</b-button>
      <router-link to="/utilisateurConnection">Connectez-vous !</router-link>
    </b-form>
  </div>
</template>

<script>
import requestCreate from "src/libs/request";
import fetchRequest from "src/libs/fetch";
import routes from "src/routes/routes";
export default {
  name: "utilisateurFormulaire",

  props: {
    value: {
      required: true
    }
  },

  data: function() {
    return {
      user: {
        nom: "",
        prenom: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      //let data = this;
      let request = requestCreate("/user/create", "POST", this.user);
      //this.user.prenom = "tata";
      // Call REST web service with fetch API
      fetchRequest(request).then(response => {
        // this.user.prenom = "toto " + response.nom;
        alert(`Votre compte ` + response.nom + ` est à jour!`),
          routes.push({ path: "/accueil/utilisateurConnection" });
      });
    }
  }
};
</script>


<style  src="../../style/utilisateur/utilisateurFormulaire.css" >
</style>

   