import Vue from 'vue'
import VueRouter from 'vue-router'




Vue.use(VueRouter)
export default new VueRouter({
  // Règles de routage seront complétées dans la section suivante

  mode: 'history',
  routes: [{
      path: '/',
      name: 'accueil',
      component: () => import("../components/accueil.vue")
    },
    {
      path: '/userTableau',
      name: 'userTableau',
      component: () => import("../components/userTableau.vue")
    },
    {
      path: '/userFormulaire',
      name: 'userFormulaire',
      component: () => import("../components/userFormulaire.vue")
    },
    {
      path: '/userPagePrincipale',
      name: 'userPagePrincipale',
      component: () => import("../components/userPagePrincipale.vue")
    }
  ]

})