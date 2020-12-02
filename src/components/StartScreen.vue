<template>
  <div id="start"
       class="md-layout md-alignment-center-center">
    <div class="md-layout-item">
      <img alt="Vue logo" src="/assets/logo.png" style="height: 30vh;">
      <h1></h1>
      <router-link to="/home/game1">
        <md-button class="md-raised md-secondary">
          <md-icon>play_circle_filled</md-icon> Play Pronoun Correction
        </md-button>
      </router-link>
      <h4></h4>
      <router-link to="/home/resources">
        <md-button class="md-raised md-secondary">
          <md-icon>article</md-icon> Resources
        </md-button>
      </router-link>
      <h4></h4>
      <router-link to="/home/about">
        <md-button class="md-raised md-secondary">
          <md-icon>info</md-icon> About
        </md-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartScreen'
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
</style>
