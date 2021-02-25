<template>
  <div id="app">
    <MovieList />
    <Popup v-if="isVisible"></Popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { namespace } from "vuex-class";
import MovieList from "@/components/MovieList.vue"
import Popup from "@/components/Popup.vue"
const Popups = namespace("Popup");

@Component({
  components: {
    MovieList,
    Popup
  },
})
export default class App extends Vue {
  @Popups.State
  public isVisible!: boolean
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  padding: 0 1vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
