import './assets/styles/style.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: require('./components/Page1.vue').default
    }, {
      path: '/register',
      component: require('./components/Page2.vue').default
    }, {
      path: '*',
      redirect: '/'
    }, {
      path: '/connexion',
      component: require('./components/Page3.vue').default
    }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
