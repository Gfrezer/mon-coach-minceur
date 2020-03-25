<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>Mon Coach Minceur</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="A Savoir" right>
          <b-dropdown-item>
            <a href="https://www.google.com">
              LES ALIMENTS
              <br />ENTIERS
            </a>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link
              :to="{name:'pourquoi'}"
              class="nav-item"
              active-class="active"
              exact
            >POURQUOI CA MARCHE ?</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link :to="{name:'quiSommesNous'}" class="nav-item" active-class="active" exact>
              QUI SOMMES
              <br />NOUS ?
            </router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Les Avis</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right>
            <b-button>Inscription</b-button>
            <b-button>connection</b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
 

<script>
export default {
  name: "accueilNavbar"
};
</script>

<style src="../../style/accueil/accueilNavbar.css" scoped></style>
