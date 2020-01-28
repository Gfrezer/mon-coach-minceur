<template>
  <div>
    <h1>tableau des utilisateurs</h1>
    <h3 v-if="loading">Chargement...</h3>
    <b-table striped hover :items="users"></b-table>
  </div>
</template>


<script>
import requestCreate from "../libs/request";
import fetchRequest from "../libs/fetch";
export default {
  data: function() {
    return {
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
      let request = requestCreate("/user", "GET");
      fetchRequest(request).then(function(parsedJson) {
        data.users = parsedJson;
        data.loading = false;
      });
    }
  }
};
</script>





<style>
</style>