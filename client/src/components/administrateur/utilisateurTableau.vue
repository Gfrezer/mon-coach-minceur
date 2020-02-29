<template>
  <div class="tableau">
    <h1>tableau des utilisateurs</h1>
    <h3 v-if="loading">Chargement...</h3>
    <b-table :fields="fields" striped hover :items="users">
      <template v-slot:cell(supprimer)="row">
        <b-button size="sm" @click="supprimer(row.item.id)" class="mr-1">Supprimer ?</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import requestCreate from "src/libs/request";
import requestDelete from "src/libs/request";
import fetchRequest from "src/libs/fetch";
import routes from "src/routes/routes";
export default {
  data: function() {
    return {
      fields: [
        { key: "id", label: "id" },
        { key: "nom", label: "nom", sortable: true, sortDirection: "desc" },
        { key: "prenom", label: "prenom" },
        { key: "email", label: "email" },
        { key: "password", label: "password" },
        { key: "isAdmin", label: "isAdmin" },
        { key: "supprimer", label: "supprimer" },
        { key: "admin ?", label: "Admin ?" }
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
      console.log(this.fields);
      let data = this;
      this.loading = true;

      let request = requestCreate("/user/read", "GET");
      fetchRequest(request).then(function(parsedJson) {
        data.users = parsedJson;
        data.loading = false;
      });
    },

    supprimer: function(id) {
      let request = requestDelete("/user/delete", "POST", { id: id });
      fetchRequest(request).then(response => {
        alert(`Votre compte ` + response.nom + ` est supprimé !`),
          routes.push({ path: "/pagePerso" });
      });
    }
  }
};
</script>

<style src="../../style/utilisateur/tableau.css" scoped></style>
