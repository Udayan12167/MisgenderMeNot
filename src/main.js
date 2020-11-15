import Vue from 'vue'
import App from './App.vue'
import Play from './Play.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)

const NotFound = { template: '<p>Page not found</p>' }

const routes = {
  '/': App,
  '/play': Play,
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
