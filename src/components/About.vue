<template>
  <div id="about"
       class="md-layout md-gutter md-alignment-center-center">
    <div class="md-layout-item md-layout md-size-100 md-alignment-top-center banner"
      style="height: 13vh;">
      <div class="md-layout-item md-size-100"
           style="margin-bottom: 1vh; align: center;">
        <img alt="Vue logo" src="/assets/logo.png" style="height: 13vh;">
      </div>
    </div>
    <div class="md-layout-item md-layout md-size-100 md-alignment-center-center banner"
      style="height: 10vh;">
      <div class="md-layout-item md-size-100"
           style="margin-bottom: 1vh; text-align: center;">
        <span class="md-display-2" style="color: white;">About</span>
      </div>
    </div>
    <div class="md-layout-item md-layout md-size-100 md-alignment-top-center">
      <div class="md-size-100">
        <md-card class="md-elevation-24">
          <md-card-content class="md-layout md-alignment-center-center md-gutter">
            <div class="md-layout-item md-size-45">
              <md-card class="md-elevation-24">
                <md-card-header>
                  <div class="md-headline">Motivation</div>
                </md-card-header>
                <md-card-content>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
                </md-card-content>
              </md-card>
            </div>
            <div class="md-layout-item md-size-45">
              <md-card class="md-elevation-24">
                <md-card-header>
                  <div class="md-headline">Creators</div>
                </md-card-header>
                <md-card-content>
                  <md-list>
                    <md-list-item>
                      <md-avatar>
                        <img src="https://placeimg.com/40/40/animals" alt="People">
                      </md-avatar>
                      <div class="md-list-item-text">
                        <span>Jennifer Chien </span>
                      </div>
                    </md-list-item>
                    <md-divider class="md-inset"></md-divider>
                    <md-list-item>
                      <md-avatar>
                        <img src="https://placeimg.com/40/40/animals" alt="People">
                      </md-avatar>
                      <div class="md-list-item-text">
                        <span>Mary Anne Smart</span>
                      </div>
                    </md-list-item>
                    <md-divider class="md-inset"></md-divider>
                    <md-list-item>
                      <md-avatar>
                        <img src="https://placeimg.com/40/40/animals" alt="People">
                      </md-avatar>
                      <div class="md-list-item-text">
                        <span>Rebecca Kreitinger</span>
                      </div>
                    </md-list-item>
                    <md-divider class="md-inset"></md-divider>
                    <md-list-item>
                      <md-avatar>
                        <img src="https://placeimg.com/40/40/animals" alt="People">
                      </md-avatar>
                      <div class="md-list-item-text">
                        <span>Sharad Venkateswaran</span>
                      </div>
                    </md-list-item>
                    <md-divider class="md-inset"></md-divider>
                    <md-list-item>
                      <md-avatar>
                        <img src="https://placeimg.com/40/40/animals" alt="People">
                      </md-avatar>
                      <div class="md-list-item-text">
                        <span>Udayan Tandon</span>
                      </div>
                    </md-list-item>
                  </md-list>
                </md-card-content>
              </md-card>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>

</style>
