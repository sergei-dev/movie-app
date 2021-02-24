<template>
  <div class="list">
    <!-- {{ updateTitle('hello shit') }} -->
    {{ title }}
    <!-- <MovieItem v-for="movie in movies" :key="movie" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Movie = namespace("Movie");

@Component
export default class MoviesList extends Vue {
  @Movie.State
  public title!: string;
  public movies!: Array<number>;

  @Movie.Getter
  public titleUpperCase!: string;

  @Movie.Action
  public updateMovies!: () => void;

   mounted() {
    console.log(this.movies);
    this.updateMovies();
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
