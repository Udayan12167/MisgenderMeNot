import Vue from 'vue'
import App from './App.vue'
import Play from './components/Play.vue'
import StartScreen from './components/StartScreen.vue'
import Resources from './components/Resources.vue'
import NotFound from './components/NotFound.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: App,
      children: [
        { path: '', component: StartScreen },
        { path: 'play', component: Play },
        {path: 'resources', component: Resources},
        { path: "*", component: NotFound }
      ]
    },
    { path: "*", redirect: '/home' }
  ]
})

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <router-view class="main"></router-view>
    </div>
  `,
  components: {
    App,
    StartScreen,
    Play
  },
  router
})
