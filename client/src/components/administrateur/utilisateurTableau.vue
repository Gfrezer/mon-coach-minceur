<template>
  <div class="tableau">
    <h1>tableau des utilisateurs</h1>
    <h3 v-if="loading">Chargement...</h3>
    <b-table :fields="fields" striped hover :items="users">
      <template v-slot:cell(supprimer)>
        <b-button size="sm" @click="supprimer" class="mr-1">Supprimer ?</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import requestCreate from "../../libs/request";
import requestDelete from "../../libs/request";
import fetchRequest from "../../libs/fetch";
import routes from "../../routes/routes";
export default {
  data: function() {
    return {
      user: {
        nom: "",
        prenom: "",
        email: "",
        password: ""
      },
      fields: [
        { key: "id", label: "id" },
        { key: "nom", label: "nom", sortable: true, sortDirection: "desc" },
        { key: "prenom", label: "id" },
        { key: "email", label: "email" },
        { key: "password", label: "password" },
        { key: "isAdmin", label: "isAdmin" },
        { key: "supprimer", label: "supprimer" }
      ],
      users: [],
      loading: false
    };
  },

  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      let data = this;
      this.loading = true;
      let request = requestCreate("/user/read", "GET");
      fetchRequest(request).then(function(parsedJson) {
        data.users = parsedJson;
        data.loading = false;
      });
    },

    supprimer: function() {
      let request = requestDelete("/user/delete", "POST", this.user);
      fetchRequest(request).then(response => {
        alert(`Votre compte ` + response + ` est à jour!`),
          routes.push({ path: "/pagePerso" });
      });
    }
  }
};
</script>

<style src="../../style/utilisateur/tableau.css" scoped></style>
