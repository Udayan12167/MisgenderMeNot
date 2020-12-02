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
import SENTENCES from './resources/sentences_game_1.json'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueConfetti)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    $score: 0,
    $streak: 0,
    $maxStreak: 0,
    $sentences: []
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
    },
    load$sentences: function(state) {
      state.$sentences = [...SENTENCES];
    },
    shuffle$sentences: function(state) {
      var currentIndex = state.$sentences.length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = state.$sentences[currentIndex];
        state.$sentences[currentIndex] = state.$sentences[randomIndex];
        state.$sentences[randomIndex] = temporaryValue;
      }
    },
    filter$sentences: function(state, pronounList) {
      state.$sentences = state.$sentences.filter(
        function (ele) {
          var pronoun;
          for (pronoun of pronounList) {
            if(ele['pronouns'].toLowerCase().includes(pronoun.toLowerCase())) {
              return true;
            }
          }
          return false;
      });
    }
  }
});

Vue.mixin({
  computed: {
    score: function() { return this.$store.state.$score },
    maxStreak: function() { return this.$store.state.$maxStreak },
    streak: function() { return this.$store.state.$streak },
    sentences: function() { return this.$store.state.$sentences}
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
    },
    $loadSentences: function() {
      return this.$store.commit('load$sentences');
    },
    $shuffleSentences: function() {
      return this.$store.commit('shuffle$sentences')
    },
    $filterSentences: function(pronounList) {
      return this.$store.commit('filter$sentences', pronounList);
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
