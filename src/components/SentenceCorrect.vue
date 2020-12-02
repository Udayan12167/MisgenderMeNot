<template>
  <div id="start"
       class="md-layout md-gutter md-alignment-center-center">
    <md-dialog :md-close-on-esc="false"
               :md-click-outside-to-close="false"
               :md-active.sync="showScore">
      <md-dialog-title>Scorecard</md-dialog-title>
      <div class="md-layout md-gutter md-alignment-center-center"
           style="margin-left: 1vw; margin-right: 1vw;">
        <div class="md-layout-item md-size-50">
          <md-card  class="md-primary" md-theme="orange-card" md-with-hover>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Score</div>
              </md-card-header-text>
              <md-card-media>
                <span class="md-display-1">{{ score }}</span>
              </md-card-media>
            </md-card-header>
          </md-card>
        </div>
        <div class="md-layout-item md-size-50">
          <md-card class="md-primary" md-theme="orange-card" md-with-hover>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Best Streak</div>
              </md-card-header-text>
              <md-card-media>
                <span class="md-display-1">{{ maxStreak }}</span>
              </md-card-media>
            </md-card-header>
          </md-card>
        </div>
        <div class="md-layout-item md-size-50">
          <md-button class="md-secondary md-dense md-raised"
                     href="https://docs.google.com/forms/d/e/1FAIpQLSdG2h8seFA-p6YKInGpTjxXk69Vj8w49JCDcf_8gTvoZ2NaYg/viewform">
            <md-icon>feedback</md-icon> Help us improve the game!
          </md-button>
        </div>
        <div class="md-layout-item md-size-50">
          <router-link to="/home/resources">
            <md-button class="md-raised md-secondary"
                       style="float: right;">
              <md-icon>article</md-icon> Don't forget to checkout resources page!
            </md-button>
          </router-link>
        </div>
      </div>
      <md-dialog-actions>
        <router-link to="/home/game1">
          <md-button class="md-primary">
            <md-icon>loop</md-icon> Retry
          </md-button>
        </router-link>
        <router-link to="/home">
          <md-button class="md-primary">
            <md-icon>home</md-icon> Home
          </md-button>
        </router-link>
      </md-dialog-actions>
    </md-dialog>
    <div class="md-layout-item md-layout md-size-100 md-alignment-top-center banner"
      style="height: 10vh;">
      <div class="md-layout-item md-size-100"
           style="margin-bottom: 1vh; align: center;">
        <img alt="Vue logo" src="/assets/logo.png" style="height: 10vh;">
      </div>
    </div>
    <div class="md-layout-item md-layout md-size-100 md-alignment-top-center banner"
         style="height: 13vh;">
      <div class="md-layout-item md-size-100"
          style="margin-bottom: 1vh; text-align: center;">
        <span class="md-display-2" style="color: white;">Pronoun Correction</span>
      </div>
      <div class="md-layout-item md-size-100"
          style="text-align: center;">
        <span class="md-headline">
          Rewrite the sentence using the correct pronouns and grammar!
        </span>
      </div>
    </div>  
    <div class="md-layout-item md-size-33" id="leftCol">
      <md-card>
        <md-card-media class="md-elevation-24">
          <img :src="imgSrc" alt="Cover"/>
        </md-card-media>
      </md-card>
      <md-chip class="md-secondary md-elevation-24">
        <md-icon>favorite</md-icon>{{ correct_pronoun }}
      </md-chip>
    </div>
    <div class="md-layout-item md-layout md-gutter md-size-66">
      <div class="md-layout-item md-size-100"
           style="margin-bottom: 2vh;">
        <div class="md-size-100"
             style="margin-bottom: 2vh;">
          <md-card class="md-elevation-24">
            <md-ripple>
              <md-card-header>
                <div class="md-title">Fix the Sentence</div>
              </md-card-header>
              <md-card-content>
                {{ incorrect_sentence }}
              </md-card-content>
            </md-ripple>
          </md-card>
        </div>
        <div class="md-size-100">
          <md-card class="md-elevation-24">
            <md-ripple>
              <md-card-content>
                <md-field>
                  <md-icon v-bind:style="{ 'color': sentenceIconColor}">{{ sentenceIcon }}</md-icon>
                  <label>Enter your answer here</label>
                  <md-input v-model="input_sentence" md-autogrow :disabled="completed"></md-input>
                </md-field>
                <md-field v-if="showCorrectSentence">
                  <md-icon style="color: green;">check</md-icon>
                  <label>Correct Sentence</label>
                  <md-input v-model="correct_sentence" readonly></md-input>
                </md-field>
              </md-card-content>
              <md-card-actions v-if="!completed">
                <md-button class="md-dense md-raised submit-btn" v-on:click="sentenceCheck">Submit</md-button>
              </md-card-actions>
            </md-ripple>
          </md-card>
        </div>
      </div>
      <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
        <div class="md-layout-item md-size-20">
          <md-card  class="md-primary" md-theme="orange-card" md-with-hover>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Score</div>
              </md-card-header-text>
              <md-card-media>
                <span class="md-display-1">{{ score }}</span>
              </md-card-media>
            </md-card-header>
          </md-card>
        </div>
        <div class="md-layout-item md-size-20">
          <md-card class="md-primary" md-theme="orange-card" md-with-hover>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Streak</div>
              </md-card-header-text>
              <md-card-media>
                <span class="md-display-1">{{ streak }}</span>
              </md-card-media>
            </md-card-header>
          </md-card>
        </div>
      </div>
    </div>
    <div class="md-layout-item md-size-66">
      <md-progress-bar class="md-primary" md-mode="determinate" :md-value="timeFraction"></md-progress-bar>
    </div>
    <div class="md-layout-item md-size-20">
      <span class="md-display-1">{{ formattedTimeLeft }}</span>
    </div>
    <div class="md-layout-item md-size-14">
      <router-link :to="`/home/game1/sentence/${(sentenceId+1)%15}`">
        <md-button class="md-secondary md-dense md-raised" v-if="completed">Next <md-icon>keyboard_arrow_right</md-icon></md-button>
      </router-link>
      <md-button class="md-secondary md-dense md-raised" v-on:click="gameComplete"><md-icon>highlight_off</md-icon>End Game</md-button>
    </div>
  </div>
</template>

<script>
import SENTENCES from '../resources/sentences_game_1.json'

export default {
  name: 'SentenceCorrect',
  data: function() {
    return {
      sentenceId: 0,
      showScore: false,
      incorrect_sentence: `Placeholder incorrect sentence`,
      correct_sentence: `Placeholder correct sentence`,
      correct_pronoun: `They/Them/Their`,
      imgSrc: `/assets/portrait_1.jpg`,
      input_sentence: '',
      showCorrectSentence: false,
      sentenceIcon: `keyboard_arrow_right`,
      sentenceIconColor: `blue`,
      timeLimit: 30,
      timePassed: 0,
      timerInterval: null,
      completed: false
    }
  },
  methods : {
    randomImage : function(){
      return `/assets/image-${Math.floor(Math.random() * (52 - 1) + 1)}.jpg`;
    },
    addScore : function(){
      this.$addScore();
      setTimeout(function(){
        this.$confetti.stop()
      }, 1000);
    },
    resetStreak : function(){
      this.$resetStreak();
    },
    sentenceCheck : function(){
      if (this.correct_sentence === this.input_sentence) {
        this.sentenceIcon = `thumb_up_alt`;
        this.sentenceIconColor = `green`;
        this.addScore();
        this.$confetti.start();
        this.finishedCorrect();
      } else {
        this.sentenceIcon = `warning`;
        this.sentenceIconColor = `red`;
      }
    },
    sentenceCheckFinal : function(){
      if (this.correct_sentence === this.input_sentence) {
        this.sentenceIcon = `thumb_up_alt`;
        this.sentenceIconColor = `green`;
        this.addScore();
        this.$confetti.start();
      } else {
        this.sentenceIcon = `warning`;
        this.sentenceIconColor = `red`;
        this.resetStreak();
      }
    },
    finishedCorrect() {
      clearInterval(this.timerInterval);
      this.completed = true;
    },
    finishedTimed() {
      clearInterval(this.timerInterval);
      this.sentenceCheckFinal();
      if (this.correct_sentence !== this.input_sentence) {
        this.showCorrectSentence = true;
      }
      this.completed = true;
    },
    startTimer() {
      this.timerInterval = setInterval(() => {
        this.timePassed += 1;
        if (!this.timeLeft) {
          this.finishedTimed();
        }
      }, 1000);
    },
    reload() {
      location.reload();
    },
    gameComplete() {
      this.$confetti.start();
      this.showScore = true;
    }
  },
  computed: {
    timeLeft() {
      return this.timeLimit - this.timePassed
    },
    formattedTimeLeft() {
      const timeLeft = this.timeLeft;
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    },
    timeFraction() {
      return (this.timeLeft / this.timeLimit) * 100;
    }
  },
  mounted() {
    this.$confetti.stop();
    this.sentenceId = parseInt(this.$route.params.id);
    console.log(this.sentenceId);
    this.imgSrc = this.randomImage();
    if (this.sentenceId !== undefined) {
      console.log(SENTENCES.length);
      this.incorrect_sentence = SENTENCES[this.sentenceId]['incorrect_sentence']
      this.correct_pronoun = SENTENCES[this.sentenceId]['pronouns']
      this.correct_sentence = SENTENCES[this.sentenceId]['correct_sentence']
    }
    this.startTimer()
  },
  destroyed() {
    this.$confetti.stop();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  color: #ffffff !important;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.submit-btn {
  background-color: #50AC7B !important;
}

.md-secondary {
  background-color: #9C27B0 !important;
  color: #ffffff !important;
  margin: 2vh;
}

.md-card {
  text-align: left;
  vertical-align: top;
  flex-grow: 1;
}
</style>
