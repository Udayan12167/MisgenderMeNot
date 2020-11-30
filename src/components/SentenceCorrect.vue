<template>
  <div id="start"
       class="md-layout md-gutter md-alignment-center-center"
       style="margin-top: 20vh;">
    <div class="md-layout-item md-size-33" id="leftCol">
      <md-card>
        <md-card-media>
          <img :src="imgSrc" alt="Cover"/>
        </md-card-media>
      </md-card>
      <md-divider></md-divider>
      <md-chip class="md-secondary">
        <md-icon>favorite</md-icon>{{ correct_pronoun }}
      </md-chip>
    </div>
    <div class="md-layout-item md-layout md-gutter md-size-66">
      <div class="md-layout-item">
        <md-card class="md-gutter">
          <md-ripple>
            <md-card-header>
              <div class="md-title">Fix the Sentence</div>
            </md-card-header>
            <md-card-content>
              {{ incorrect_sentence }}
            </md-card-content>
          </md-ripple>
        </md-card>
        <md-divider></md-divider>
        <md-card class="md-gutter">
          <md-ripple>
            <md-card-content>
              <md-field>
                <label>Textarea</label>
                <md-textarea v-model="textarea"></md-textarea>
              </md-field>
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import SENTENCES from '../resources/sentences_game_1.json'

export default {
  name: 'SentenceCorrect',
  props: ['sentence_id'],
  data: function() {
    return {
      incorrect_sentence: `Placeholder incorrect sentences`,
      correct_pronoun: `They/Them/Their`,
      imgSrc: `/assets/portrait_1.jpg`
    }
  },
  methods : {
    randomImage : function(){
      return `/assets/image-${Math.floor(Math.random() * (52 - 1) + 1)}.jpg`;
    }
  },
  mounted() {
    console.log(this.sentence_id);
    this.imgSrc = this.randomImage()
    if (this.sentence_id !== undefined) {
      this.incorrect_sentence = SENTENCES[this.sentence_id]['incorrect_sentence']
      this.correct_pronoun = SENTENCES[this.sentence_id]['pronouns']
      this.correct_sentence = SENTENCES[this.sentence_id]['correct_sentence']
    }
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

.md-secondary {
  background-color: #9C27B0 !important;
  color: #ffffff !important;
}

.md-card {
  text-align: left;
  vertical-align: top;
}
</style>
