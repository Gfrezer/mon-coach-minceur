<template>
  <div>
    <b-container fluid class="container-form">
      <b-row class="my-1" v-for="type in types" :key="type">
        <b-col sm="3">
          <label :for="`type-${type}`">
            Type
            <code>{{ type }}</code>:
          </label>
        </b-col>
        <b-col sm="9">
          <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: [
        "Poids(kg)",
        "Votre Taux de graisse",
        "Multiplicateur d'activité",
        "Maintenance",
        "Surplus prise de masse",
        "Déficit sèche",
        "Objectif Prise de masse",
        "Objectif sèche"
      ]
    };
  }
};
</script>

<style style src="../../style/utilisateur/pagePerso.css" scoped></style>
