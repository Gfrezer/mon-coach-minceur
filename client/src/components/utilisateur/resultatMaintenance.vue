<template>
  <div class="resultat">
    <b-form v-if="valideparCalculateur" @onSubmit="onSubmit">
      <h4>MAINTENANCE</h4>
      <h6>resultat</h6>

      <h3>Maintenance:</h3>
      <h5>{{maintenanceCalc}}</h5>

      <h3>Objectif prise de masse:</h3>
      <h5>{{priseDeMasseCalc}}</h5>

      <h3>Objectif sèche:</h3>
      <h5>{{objectiSecheCalc}}</h5>
    </b-form>
  </div>
</template>

<script>
import requestCreate from "src/libs/request";
import fetchRequest from "src/libs/fetch";
import routes from "src/routes/routes";

export default {
  props: ["calculateur", "monId"],

  data: function() {
    return {};
  },

  computed: {
    maintenanceCalc: function() {
      return (
        (370 +
          21.6 *
            (1 - this.calculateur.tauxDeGraisse / 100) *
            this.calculateur.poids) *
        this.calculateur.multiplicateurActivite
      );
    },

    priseDeMasseCalc: function() {
      return (
        (1 + this.calculateur.surplusPriseMasse / 100) * this.maintenanceCalc
      );
    },
    objectiSecheCalc: function() {
      return (1 + this.calculateur.deficiteSeche / 100) * this.maintenanceCalc;
    },

    valideparCalculateur: function() {
      console.log(this.monId);
      return this.monId ? true : false;
    }
  },

  method: {
    onSubmit: function(evt) {
      evt.preventDefault();
      console.log("mon id resultat maintenance est " + this.monId);
      let request = requestCreate("/resultat/maintenance", "POST", {
        maintenanceCalc: this.maintenanceCalc,
        priseDeMasseCalc: this.priseDeMasseCalc,
        objectiSecheCalc: this.objectiSecheCalc,
        idTrouve: this.monId
      });

      fetchRequest(request).then(() => {
        alert(`votre maintenance est à jour!`),
          routes.push({ path: "/utilisateurPagePerso" });
      });
    }
  }
};
</script>


<style src="../../style/utilisateur/resultatMaintenance.css" >
</style>



        onSubmit(evt) {
      evt.preventDefault();
      console.log("mon id resultat maintenance est " + this.monId);
      let request = requestCreate("/resultat/maintenance", "POST", {
        maintenanceCalc: this.maintenanceCalc,
        priseDeMasseCalc: this.priseDeMasseCalc,
        objectiSecheCalc: this.objectiSecheCalc,
        idTrouve: this.monId
      });

      fetchRequest(request).then(() => {
        alert(`votre maintenance est à jour!`),
          routes.push({ path: "/utilisateurPagePerso" });
      })
      //return
    }    