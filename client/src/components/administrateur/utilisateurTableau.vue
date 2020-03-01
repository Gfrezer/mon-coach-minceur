<template>
  <div class="tableau">
    <h1>tableau des utilisateurs</h1>
    <h3 v-if="loading">Chargement...</h3>
    <b-table :fields="fields" striped hover :items="users">
      <template v-slot:cell(supprimer)="row">
        <b-button size="sm" @click="supprimer(row.item.id)" class="mr-1">Supprimer ?</b-button>
      </template>
      <template v-slot:cell(isAdmin)="row">
        <b-form-checkbox
          :id="'checkbox-'+row.item.id"
          @input="toggleAdmin(row.item.id,row.item.isAdmin,row.item.nom)"
          :name="'checkbox-'+row.item.id"
          v-model="row.item.isAdmin"
        ></b-form-checkbox>
        <div>
          Admin:
          <strong>{{ row.item.isAdmin }}</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import newRequest from "src/libs/request";
import fetchRequest from "src/libs/fetch";
//import routes from "src/routes/routes";
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
      console.log(this.fields);
      let data = this;
      this.loading = true;

      let requestCreate = newRequest("/user/read", "GET");
      fetchRequest(requestCreate).then(function(parsedJson) {
        data.users = parsedJson;
        data.loading = false;
      });
    },

    supprimer: function(id) {
      let requestDelete = newRequest("/user/delete", "POST", { id: id });
      fetchRequest(requestDelete).then(response => {
        if (response.delete == "ok") {
          console.log(`compte ${id} supprimé`);
          //this.users = this.users.filter(x => x.id != id);
          this.fetchData();
        }
      });
    },

    toggleAdmin: function(id, isAdmin) {
      let requestAdmin = newRequest("/user/toggleAdmin", "POST", {
        id: id,
        isAdmin
      });
      fetchRequest(requestAdmin).then(response => {
        alert(`Vous etes Mrs ` + response.nom + ` Administrateur !`);
      });
    }
  }
};
</script>

<style src="../../style/utilisateur/tableau.css" scoped></style>
