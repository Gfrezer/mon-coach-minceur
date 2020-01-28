<template>
  <div>
    <section>
      <div class="container">
        <div class="home_title">
          <div class="photo_1">
            <div class="row">
              <div class="col-md-6">
                <h1>Mon Compte</h1>
              </div>
            </div>

            <div class="row">
              <div class="col-md-2">
                <router-link to="/userFormulaire">Formulaire d'inscription</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
<style>
.home_title {
  position: relative;
  top: 40px;
}

.home_title h1 {
  position: relative;
  top: 20px;
  font-family: "Lobster";
  font-size: 500%;
  color: azure;
  margin-left: 2%;
}

.photo_1 {
  background-color: brown;
  width: 100%;
  background-size: cover;
  height: 500px;
}
</style>
