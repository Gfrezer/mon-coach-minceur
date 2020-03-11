<template>
  <div class="resultat">
    <h4>MAINTENANCE</h4>
    <h6>resultat</h6>
    <template>
      <b-table :fields="fields"></b-table>
      <ul id="example-1">
        <li>{{calculateur.poids}}</li>
        <li>{{calculateur.tauxDeGraisse}}</li>
        <li>{{maintenanceCalc}}</li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  props: ["calculateur", "maintenance", "objectifPriseMasse", "ObjectifSeche"],

  data: function() {
    return {
      fields: [
        { key: "maintenance", label: "maintenance" },
        { key: "objectifPriseMasse", label: "Objectif Prise de Masse" },
        { key: "ObjectifSèche", label: "Objectif sèche" }
      ]
    };
  },
  computed: {
    // un accesseur (getter) calculé
    maintenanceCalc: function() {
      // `this` pointe sur l'instance vm
      return this.calculateur.poids + 25;
    }
  },
  methods: {
    calculer() {
      let poids, txGraisse, multiAcvtivite, maintenance, objectifPriseMasse;
      poids = this.calculateur.poids;
      txGraisse = this.calculateur.tauxDeGraisse;
      multiAcvtivite = this.calculateur.multiplicateurActivite;
      //calcule maintenance
      maintenance = (370 + 21, 6 * (1 - txGraisse) * poids) * multiAcvtivite;
      this.maintenance = maintenance;
      //calcule objectif prise de masse
      objectifPriseMasse = (1 + multiAcvtivite) * poids;
      this.objectifPriseMasse = objectifPriseMasse;
    }
  }
};
</script>


<style src="../../style/utilisateur/resultatMaintenance.css" >
</style>
        