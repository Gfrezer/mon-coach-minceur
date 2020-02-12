import Vue from 'vue'
import VueRouter from 'vue-router'




Vue.use(VueRouter)
export default new VueRouter({
  // Règles de routage seront complétées dans la section suivante

  mode: 'history',
  routes: [{
      path: "/",
      redirect: "/accueil"
    },
    {
      path: '/accueil',
      name: 'accueil',
      component: () => import("../components/accueil/accueil.vue"),
      children: [{
          path: 'utilisateurConnection',
          name: 'utilisateurConnection',
          component: () => import("../components/utilisateur/utilisateurConnection.vue")
        },
        {
          path: 'utilisateurFormulaire',
          name: 'utilisateurFormulaire',
          component: () => import("../components/utilisateur/utilisateurFormulaire.vue")
        },
        {
          path: 'pourquoi',
          name: 'pourquoi',
          component: () => import("../components/accueil/pourquoi.vue")
        },
        {
          path: 'quisommesNous',
          name: 'quisommesNous',
          component: () => import("../components/accueil/quiSommesNous.vue")
        },
      ]
    },



    {
      path: '/utilisateurTableau',
      name: 'utilisateurTableau',
      component: () => import("../components/utilisateur/utilisateurTableau.vue")
    },
    {
      path: '/pagePerso',
      name: 'pagePerso',
      component: () => import("../components/utilisateur/utilisateurPagePerso.vue")
    }
  ]

});