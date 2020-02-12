<template>
  <div>
    <b-navbar class="navbarAccueil" type="dark" variant="dark">
      <b-navbar-nav>
        <router-link
          to="/accueil/pourquoi"
          class="nav-item nav-link"
          active-class="active"
          exact
        >Pourquoi ça marche ?</router-link>

        <router-link
          to="/accueil/quiSommesNous"
          class="nav-item nav-link"
          active-class="active"
          exact
        >Qui sommes nous ?</router-link>

        <router-link
          to="/accueil/utilisateurConnection"
          class="nav-item nav-link"
          active-class="active"
          exact
        >Votre espace</router-link>

        <router-link
          to="/utilisateurTableau"
          class="nav-item nav-link"
          active-class="active"
          exact
        >Page tableau</router-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "accueilNavbar"
};
</script>

<style src="../../style/accueil/accueilNavbar.css" scoped></style>
