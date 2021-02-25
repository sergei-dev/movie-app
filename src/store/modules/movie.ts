import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import axios from 'axios'

@Module({ namespaced: true })
class Movie extends VuexModule {
  public movies: Array<any> = []

  @Mutation
  public setMovies(movies: Array<any>): void {
    this.movies = movies;
  }

  @Mutation
  public setReduce(id: number): void {
    this.movies.filter(item => {
      if (item.id === id && item.count >= 1) {
        item.count--;
      }
    })
  }

  @Mutation
  public setEnlarge(id: number): void {
    this.movies.filter(item => {
      if (item.id === id) {
        item.count++;
      }
    })
  }

  @Action
  public updateMovies(): void {
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=331809dfe739c8b14228e31bcaf71859')
      .then(response => {
        const result = response.data.results;
        result.forEach((item: { [x: string]: number; }) => {
          item['count'] = 1;
        })
        this.context.commit('Movie/setMovies', result, { root: true })
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => console.log('finally'));
  }

  @Action
  public reduceCount(id: number): void {
    this.context.commit('Movie/setReduce', id, { root: true })
  }

  @Action
  public enlargeCount(id: number): void {
    this.context.commit('Movie/setEnlarge', id, { root: true })
  }
}
export default Movie;