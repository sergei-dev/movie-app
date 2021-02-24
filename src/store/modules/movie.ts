import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true })
class Movie extends VuexModule {
  public title: string = '';
  public movies: Array<number> = []

  @Mutation
  public setTitle(newTitle: string): void {
    this.title = newTitle;
  }

  public setMovies(movies: Array<number>): void {
    this.movies = movies;
  }

  @Action
  public updateMovies(): void {
    const list: Array<number> = [1,2,3,4,5,6,7,8,9,10,11]
    this.context.commit('setMovies', list);
  }

  get titleUpperCase(): string{
    return this.title.toUpperCase();
  }
}
export default Movie;