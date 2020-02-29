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
          path: 'pourquoiCaMarche',
          name: 'pourquoi',
          component: () => import("../components/accueil/pourquoi.vue")
        },
        {
          path: 'quisommesNousIci',
          name: 'quiSommesNous',
          component: () => import("../components/accueil/quiSommesNous.vue")
        },
      ]
    },
    {
      path: '/adminPagePerso',
      name: 'adminPagePerso',
      component: () => import("../components/administrateur/adminPagePerso.vue"),

      children: [{
        path: '',
        name: 'utilisateurTableau',
        component: () => import("../components/administrateur/utilisateurTableau.vue")
      }],
    },

    {
      path: '/pagePerso',
      name: 'pagePerso',
      component: () => import("../components/utilisateur/utilisateurPagePerso.vue")
    },


    //ERREURS
    {
      path: '/erreur401',
      name: 'erreur401',
      component: () => import("../components/erreurs/erreur401.vue")
    }
  ]

});