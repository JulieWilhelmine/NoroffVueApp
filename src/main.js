import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Recipes from './recipePage.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Recipes',
      component: Recipes
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
