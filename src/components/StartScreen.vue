<template>
  <div id="start"
       class="md-layout md-alignment-center-center"
       style="margin-top: 20vh;">
    <div class="md-layout-item">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>Misgender Me Not</h1>
      <md-button class="md-raised md-accent">
        <router-link to="/home/play">Play</router-link>
      </md-button>
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
</style>
