<template>
    <div id="play">
        <md-app md-mode="reveal">
            <MenuBar title="Game 1"/>
        </md-app>
    </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'

export default {
    name: 'Play',
    components: {
        MenuBar
    }
}
</script>