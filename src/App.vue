<template>
  <div class="parent">
    <md-app md-mode="reveal" style="min-height: 100vh;">
        <md-app-toolbar class="md-primary">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                <md-icon>menu</md-icon>
            </md-button>
            <md-title md-alignment="centered">Misgender Me Not</md-title>
        </md-app-toolbar>
        <md-app-drawer :md-active.sync="menuVisible">
            <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
            <md-list>
                <md-list-item>
                  <router-link to="/home">
                    <md-icon>home</md-icon>
                    <span class="md-list-item-text">
                      Home
                    </span>
                  </router-link>
                </md-list-item>
                <md-list-item>
                  <router-link to="/home/resources">
                    <md-icon>article</md-icon>
                    <span class="md-list-item-text">
                      Resources
                    </span>
                  </router-link>
                </md-list-item>
            </md-list>
        </md-app-drawer>
        <md-app-content md-theme="default" class="md-accent">
          <transition :name="transitionName" mode="out-in">
            <router-view id="router-child" :key="$route.fullPath"></router-view>
          </transition>
        </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuVisible: false,
      transitionName: 'slide-fade'
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
