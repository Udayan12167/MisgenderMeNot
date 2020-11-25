<template>
  <div id="start"
       class="md-layout md-gutter md-alignment-center-center"
       style="margin-top: 20vh;">
    <div class="md-layout-item md-size-33" id="leftCol">
      <md-card>
        <md-card-media>
          <img src="../assets/portrait_1.jpg" alt="Cover">
        </md-card-media>
      </md-card>
      <md-divider></md-divider>
      <md-chip class="md-secondary">
        <md-icon>favorite</md-icon>He/Him/His
      </md-chip>
    </div>
    <div class="md-layout-item md-layout md-gutter md-size-66"
         v-bind:style="rightColHeight">
      <div class="md-layout-item">
        <md-card class="md-gutter">
          <md-ripple>
            <md-card-header>
              <div class="md-title">Fix the Sentence</div>
            </md-card-header>
            <md-card-content>
              Sentence goes here
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
export default {
  name: 'SentenceCorrect',
  data: function () {
        return {
            rightColHeight: { },
        }
    },
    methods: {
        matchHeight() {
            var heightString = this.$refs.leftCol.clientHeight + 'px';
            this.rightColHeight = {'height': heightString}; 
        }
    },
    mounted() {
        this.matchHeight();
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
  display: inline-block;
  vertical-align: top;
}
</style>
