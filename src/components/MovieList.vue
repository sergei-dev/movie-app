<template>
  <div class="list-wrap">
    <div class="list">
      <MovieItem
        v-for="(movie, index) in movies"
        :title="movie.title"
        :poster_path="movie.poster_path"
        :isShowBtnInfo="true"
        :count="movie.count"
        :overview="movie.overview"
        :id="movie.id"
        :index="index"
        :key="movie.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import MovieItem from "@/components/MovieItem.vue";
const Movie = namespace("Movie");

@Component({
  components: {
    MovieItem,
  },
})
export default class MoviesList extends Vue {
  @Movie.State
  public movies!: Array<any>;

  @Movie.Action
  public updateMovies!: () => void;

  mounted() {
    this.updateMovies();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list-wrap {
  padding: 3vw 0;
  display: flex;
  justify-content: center;
}

.list {
  display: flex;
  flex-wrap: wrap;
  margin: -1vw;
  max-width: 1500px;
}
</style>
