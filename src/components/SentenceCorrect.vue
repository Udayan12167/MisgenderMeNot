<template>
  <div id="start"
       class="md-layout md-gutter md-alignment-center-center"
       style="margin-top: 20vh;">
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
      <div class="md-layout-item">
        <md-field>
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
        </md-field>
        <md-field>
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
        </md-field>
      </div>
    </div>
    <div class="md-layout-item md-size-66">
      <md-progress-bar class="md-primary" md-mode="determinate" :md-value="timeFraction"></md-progress-bar>
    </div>
    <div class="md-layout-item md-size-20">
      <span class="md-display-1">{{ formattedTimeLeft }}</span>
    </div>
    <div class="md-layout-item md-size-14" v-if="completed">
      <router-link :to="`/home/game1/sentence/${(sentenceId+1)%15}`">
        <md-button class="md-secondary md-dense md-raised submit-btn">Next <md-icon>keyboard_arrow_right</md-icon></md-button>
      </router-link>
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
    sentenceCheck : function(){
      if (this.correct_sentence === this.input_sentence) {
        this.sentenceIcon = `thumb_up_alt`;
        this.sentenceIconColor = `green`;
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
        this.$confetti.start();
      } else {
        this.sentenceIcon = `warning`;
        this.sentenceIconColor = `red`;
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
