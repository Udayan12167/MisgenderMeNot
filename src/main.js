import Vue from 'vue'
import App from './App.vue'
import Play from './components/Play.vue'
import SentenceCorrect from './components/SentenceCorrect.vue'
import StartScreen from './components/StartScreen.vue'
import Select from './components/Select.vue'
import Resources from './components/Resources.vue'
import About from './components/About.vue'
import NotFound from './components/NotFound.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import './assets/theme.scss'
import VueRouter from 'vue-router'
import VueConfetti from 'vue-confetti'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueConfetti)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    $score: 0,
    $streak: 0,
    $maxStreak: 0
  },
  mutations: {
    add$score: function(state) {
      state.$streak += 1;
      if (state.$streak>state.$maxStreak) {
        state.$maxStreak = state.$streak;
      }
      state.$score += state.$streak;
    },
    reset$state: function(state) {
      state.$streak = 0;
      state.$maxStreak = 0;
      state.$score = 0;
    },
    reset$streak: function(state) {
      state.$streak = 0;
    } 
  }
});

Vue.mixin({
  computed: {
    score: function() { return this.$store.state.$score },
    maxStreak: function() { return this.$store.state.$maxStreak },
    streak: function() { return this.$store.state.$streak }
  },
  methods: {
    $addScore: function() {
      return this.$store.commit('add$score');
    },
    $resetScore: function () {
      return this.$store.commit('reset$state');
    },
    $resetStreak: function() {
      return this.$store.commit('reset$streak');
    }
  },
})

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: App,
      children: [
        { path: '', component: StartScreen },
        { path: 'play', component: Play },
        { path: 'game1', component: Select},
        { path: 'game1/sentence/:id', name: 'SentenceCorrect', component: SentenceCorrect},
        { path: 'resources', component: Resources},
        { path: 'about', component: About },
        { path: "*", component: NotFound }
      ]
    },
    { path: "*", redirect: '/home' }
  ]
})

new Vue({
  store: store,
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
