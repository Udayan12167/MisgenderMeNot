<template>
  <div class="parent">
    <md-app md-mode="reveal">
        <md-app-toolbar class="md-accent">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">Misgender Me Not</span>
        </md-app-toolbar>
        <md-app-drawer :md-active.sync="menuVisible">
            <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

            <md-list>
                <md-list-item>
                    <md-icon>home</md-icon>
                    <span class="md-list-item-text">
                      <router-link to="/home">Home</router-link>
                    </span>
                </md-list-item>
            </md-list>
        </md-app-drawer>
        <md-app-content>
          <router-view class="child"></router-view>
        </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuVisible: false
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #50ac7b;
}
</style>
