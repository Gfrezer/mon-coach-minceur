import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes/routes'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);





new Vue({
  vuerouter: VueRouter,
  router: routes,
  render: h => h(App),
}).$mount('#app')