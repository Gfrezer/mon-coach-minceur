import Vue from 'vue'
import VueRouter from 'vue-router'




Vue.use(VueRouter)
export default new VueRouter({
  // Règles de routage seront complétées dans la section suivante

  mode: 'history',
  routes: [{
      //ACCUEIL
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
    //ADMINISTRATEUR
    {
      path: '/adminPagePerso',
      name: 'adminPagePerso',
      component: () => import("../components/administrateur/adminPagePerso.vue"),
      beforeEnter(to, from, next) {
        const user = JSON.parse(window.localStorage.getItem("user"));
        if (user && user.isAdmin) {
          next();
        } else {
          next({
            name: "utilisateurConnection"
          });
        }
      },

      children: [{
          path: '/adminPagePerso',
          name: 'utilisateurTableau',
          component: () => import("../components/administrateur/utilisateurTableau.vue")
        },
        {
          path: 'compte',
          name: 'adminPageCompte',
          component: () => import("../components/administrateur/adminPageCompte.vue")
        },


      ],
    },
    //UTILISATEUR
    {
      path: '/utilisateurPagePerso',
      name: 'utilisateurPagePerso',
      component: () => import("../components/utilisateur/utilisateurPagePerso.vue"),
      beforeEnter: (to, from, next) => {
        console.log("methode route appelée");
        next();
      },

      children: [{
        path: '/utilisateurPagePerso',
        name: 'resultatMaintenance',
        component: () => import("../components/utilisateur/resultatMaintenance.vue")
      }],
    },


    //ERREURS
    {
      path: '/erreur401',
      name: 'erreur401',
      component: () => import("../components/erreurs/erreur401.vue")
    }
  ]

});