<template>
  <div class="formulaire">
    <b-form @submit="onSubmit">
      <h4>MEMBRE</h4>
      <h6>Veillez vous identifiez</h6>
      <b-form-group id="input-group-1" label="Nom:" label-for="nom">
        <b-form-input id="aliment" type="text" v-model="user.nom" required placeholder="Nom"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="prenom:" label-for="prenom">
        <b-form-input id="input-2" type="text" v-model="user.prenom" required placeholder="prenom"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="email:" label-for="email">
        <b-form-input id="input-3" type="text" v-model="user.email" required placeholder="email"></b-form-input>
      </b-form-group>

      <b-button class="boutonFormulaire" type="submit" variant="primary">Validez</b-button>
      <router-link to="/userTableau">Pas encore inscrit ?</router-link>
    </b-form>
  </div>
</template>

<script>
import requestCreate from "../libs/request";
import fetchRequest from "../libs/fetch";
import routes from "../routes/routes";
export default {
  name: "userformulaire",
  data: function() {
    return {
      user: {
        nom: "",
        prenom: "",
        email: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      let request = requestCreate("/user/create", "POST", this.user);
      // Call REST web service with fetch API
      fetchRequest(request).then(data => {
        alert(`Votre compte ` + data.nom + ` est à jour!`),
          routes.push({ path: "/userPagePrincipale" });
      });
    }
  }
};
</script>


<style  src="../style/userFormulaire.css">
</style>

   