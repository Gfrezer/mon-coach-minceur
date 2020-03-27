<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>Mon Coach Minceur</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <div @mouseover="onOver" @mouseleave="onLeave">
          <b-nav-item-dropdown text="A Savoir" right ref="dropdown">
            <b-dropdown-item>
              <router-link
                :to="{name:'alimentEntiers'}"
                class="nav-item"
                active-class="active"
                exact
              >
                <span @click="pourFermer">LES ALIMENTS ENTIERS</span>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link :to="{name:'pourquoi'}" class="nav-item" active-class="active" exact>
                <span @click="pourFermer">POURQUOI CA MARCHE ?</span>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link
                :to="{name:'quiSommesNous'}"
                class="nav-item"
                active-class="active"
                exact
              >
                <span @click="pourFermer">QUI SOMMES NOUS ?</span>
              </router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
      </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Les Avis</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right>
            <b-button class="btn" @click="openModalFormu">Inscription</b-button>

            <b-button class="btn" @click="openModalConnection">connection</b-button>
            <seConnecter v-model="modalOpenConnection"></seConnecter>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
 

<script>
import seConnecter from "../utilisateur/utilisateurConnection";
export default {
  name: "accueilNavbar",
  components: {
    seConnecter
  },

  data() {
    return {
      modalOpenFormulaire: false,
      modalOpenConnection: false
    };
  },
  methods: {
    pourFermer() {
      this.$emit("aSavoir", this.pourFermer);
    },

    onOver() {
      this.$refs.dropdown.visible = true;
    },
    onLeave() {
      this.$refs.dropdown.visible = false;
    },
    openModalFormu() {
      if (this.modalOpenConnection === false) {
        this.modalOpenFormulaire = !this.modalOpenFormulaire;
        this.$emit("event", this.modalOpenFormulaire);
      }
    },
    openModalConnection() {
      if (this.modalOpenFormulaire === false) {
        this.modalOpenConnection = !this.modalOpenConnection;
        this.$emit("event", this.modalOpenConnection);
      }
    }
  }
};
</script>

<style src="../../style/accueil/accueilNavbar.css" scoped></style>
