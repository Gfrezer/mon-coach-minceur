 <template>
  <div>
    <b-navbar class="navbarAccueil" type="dark" variant="dark">
      <b-navbar-nav>
        <router-link to="/userformulaire" class="nav-item nav-link" active-class="active" exact>
          Home
          >
        </router-link>
        <b-nav-item href="#">Pourquoi cela marche</b-nav-item>
        <b-nav-item href="#">qui sommes nous?</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: "accueilNavbar"
};
</script>


<style  src="../style/accueilNavbar.css"  scoped>
</style>
