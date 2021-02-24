import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'

@Module({ 
  namespaced: true, name: 'movie' 
})

class Movie extends VuexModule {
  public movies: Array<object> = []

  @Mutation
  public setMovies(movies: Array<object>): void {
    this.movies = movies
  }

  @Action
  public updateMovies(): void {
    axios
      .get('https://api.themoviedb.org/3/movie/550?api_key=331809dfe739c8b14228e31bcaf71859')
      .then(response => {
        // this.movies = response;
        console.log(response);
        this.context.commit('setMovies', response)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => alert('fdf'));
  }
}

export default Movie