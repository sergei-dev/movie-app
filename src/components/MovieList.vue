<template>
  <div class="list">
    <!-- <MovieItem v-for="movie in movies" :key="movie" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MovieItem from "./MovieItem.vue";
import { namespace } from 'vuex-class'
const movie = namespace('movie')

@Component({
  components: {
    MovieItem,
  }
})
export default class MovieList extends Vue {
  @movie.State
  public movies: Array<object>|undefined

  @movie.Action
  public updateMovies!: () => void

  mounted() {
    console.log('mount')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  margin: -3vw;
}
</style>
