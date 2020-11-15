<template>
    <div class="menu-container">
        <md-app md-mode="reveal">
            <md-app-toolbar class="md-accent">
                <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">{{ title }}</span>    
            </md-app-toolbar>
            <md-app-drawer :md-active.sync="menuVisible">
                <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

                <md-list>
                    <md-list-item>
                        <md-icon>home</md-icon>
                        <span class="md-list-item-text">Home</span>
                    </md-list-item>
                </md-list>    
            </md-app-drawer>
        </md-app>
    </div>
</template>

<script>
export default {
  name: 'MenuBar',
  props: {
    title: String
  },
  data: () => ({
    menuVisible: false
  })
}
</script>