import Vue from 'vue'
import App from './App.vue'
import Play from './components/Play.vue'
import SentenceCorrect from './components/SentenceCorrect.vue'
import StartScreen from './components/StartScreen.vue'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9842a80... in line styling + hacks to dodge merge conflicts
import Select from './components/Select.vue'
// import NotFound from './NotFound.vue'
=======
import Resources from './components/Resources.vue'
import NotFound from './components/NotFound.vue'
>>>>>>> 0e9d899... add Resources page, adjust routing
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import './assets/theme.scss'
import VueRouter from 'vue-router'
import VueConfetti from 'vue-confetti'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueConfetti)

Vue.mixin({
  data: function() {
    return {
      score: 0,
      multiplier: 0
    }
  }
})

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: App,
      children: [
        { path: '', component: StartScreen },
        { path: 'play', component: Play },
        { path: 'game1', component: Select},
<<<<<<< HEAD
        { path: 'game1/sentence/:id', name: 'SentenceCorrect', component: SentenceCorrect},
        {path: 'resources', component: Resources},
        { path: "*", component: NotFound }
=======
        { path: 'game1/sentence', component: SentenceCorrect}
>>>>>>> 9842a80... in line styling + hacks to dodge merge conflicts
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
  data: {
    checkedPronouns: [],
    difficulty: 0,
    counter: 0
  },
  components: {
    App,
    StartScreen,
    Play
  },
  router
})
