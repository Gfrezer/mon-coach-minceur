<template>
  <div class="formulaire">
    <b-form @submit="login">
      <h4>MEMBRE</h4>
      <h6>Veillez vous identifiez</h6>

      <b-form-group id="input-group-1" label="email:" label-for="email">
        <b-form-input
          id="input-1"
          type="text"
          v-model="email"
          required
          placeholder="email"
          :state="validationEmail"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="password:" label-for="password">
        <b-form-input
          id="input-2"
          type="password"
          v-model="password"
          required
          placeholder="password"
          :state="validationPswd"
        ></b-form-input>
      </b-form-group>

      <b-button class="boutonConnection" type="submit" variant="primary">Validez</b-button>

      <router-link to="/accueil/utilisateurFormulaire">Pas encore inscrit ?</router-link>
    </b-form>
  </div>
</template>

<script>
import newRequest from "../../libs/request";
import fetchRequest from "../../libs/fetch";
import routes from "../../routes/routes";

export default {
  name: "utilisateurFormulaire",

  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    validationEmail() {
      return (
        this.email.length > 5 &&
        this.email.indexOf("@") > -1 &&
        this.email.indexOf(".") > -1
      );
    },
    validationPswd() {
      return this.password.length > 2;
    }
  },
  methods: {
    login(evt) {
      evt.preventDefault();
      if (this.password.length > 0) {
        let requestLogin = newRequest("/user/login", "POST", {
          email: this.email,
          password: this.password
        });
        fetchRequest(requestLogin).then(response => {
          window.localStorage.setItem("user", response.nom);
          alert(`Vous etes ` + response.nom);
          console.log(response);
          if (response.isAdmin === true) {
            routes.push({ path: "/adminPagePerso" });
          } else routes.push({ path: "/pagePerso" });
        });
      }
    }
  }
};
</script>

<style src="../../style/utilisateur/utilisateurConnection.css" scoped></style>
