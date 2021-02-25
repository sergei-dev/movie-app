import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true })
class Popup extends VuexModule {
  public isVisible: boolean = false
  public data!: object

  @Mutation
  public isOpen(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

  @Mutation
  public setData(data: object): void {
    this.data = data;
  }

  @Action
  public openPopup(isVisible: boolean): void {
    this.context.commit('Popup/isOpen', isVisible, {root: true})
  }

  @Action
  public updateData(data: object): void {
    this.context.commit('Popup/setData', data, {root: true})
  }
}
export default Popup;