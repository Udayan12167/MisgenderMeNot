<template>
    <div id="game1-config" class="select" v-bind:style="{ backgroundColor: '#50ac7b'}" style="height: 500px">
    <br>
      <img class="center" alt="Vue logo" src="/assets/logo.png" style="height: 10vh;">
      <h1 class="md-display-2" style="color: white;">Pronoun Correction</h1>
        <div id = "checkbox" style="width: 48%; color: #435760; float: left; background: #73bd95;">
          <h2> Select the pronouns you want to practice: </h2>
          <input type="checkbox" id="He/Him/His" value="He/Him/His" v-model="checkedPronouns">
          <label for="He/Him/His">He/Him/His</label>
          <br><br>
          <input type="checkbox" id="She/Her/Hers" value="She/Her/Hers" v-model="checkedPronouns">
          <label for="She/Her/Hers">She/Her/Hers</label>
          <br><br>
          <input type="checkbox" id="They/Them/Theirs" value="They/Them/Theirs" v-model="checkedPronouns">
          <label for="They/Them/Theirs">They/Them/Theirs</label>
          <br><br>
          <input type="checkbox" id="Ze/Zem/Zir" value="Ze/Zem/Zir" v-model="checkedPronouns">
          <label for="Ze/Zem/Zir">Ze/Zem/Zir</label>
          <br><br>
          <input type="checkbox" id="No_pronouns" value="No_pronouns" v-model="checkedPronouns">
          <label for="No_pronouns">No pronouns (names only)</label>
          <br><br>

          <span>Checked pronouns: {{ checkedPronouns }}</span>
      </div>

      <div id="level" style="margin-left: 52%;  background: #73bd95; color: #435760;">
      <hr style="height:2px; visibility:hidden;" />
      <h2> Chose your difficulty </h2>
          <md-button v-on:click="difficulty = 1" class="md-raised md-accent" style="background-color: #4caf50;">
            Easy
          </md-button>
          <md-button v-on:click="difficulty = 2" class="md-raised md-accent" style="background-color: #fbc02d;">
            Medium
          </md-button>
          <md-button v-on:click="difficulty = 3" class="md-raised md-accent" style="background-color: #f44336s;">
            Hard
          </md-button>

          <p> The selected level is {{ difficulty }} </p>
      </div>
<br><br>
      <div id = "start">
          <router-link to="game1/sentence/0">
            <md-button class="md-raised md-secondary" style="font-size: 23px; min-height: 60px; min-width: 160px">
              START
            </md-button>
          </router-link>
      </div>
</div>

</template>



<script>
export default {
    name: 'Select',
    data: function()  {
      return {
          counter: 0,
          checkedPronouns: [],
          difficulty: 0,
          sentence_id: 0
      }
    },
    mounted() {
      this.$resetScore();
    }
}
</script>

<style scoped>
.md-secondary {
  background-color: #9C27B0 !important;
  color: #ffffff !important;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
