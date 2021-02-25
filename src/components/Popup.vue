<template>
  <transition name="modal-fade">
    <div class="popup">
      <div class="popup__overlay" @click="openPopup(false)"></div>
      <div class="popup__content">
        <button class="popup__close" @click="openPopup(false)"></button>
        <MovieItem
          :title="this.movies[data.index].title"
          :overview="this.movies[data.index].overview"
          :poster_path="this.movies[data.index].poster_path"
          :count="this.movies[data.index].count"
          :id="this.movies[data.index].id"
          :isFullScreenView="true"
          :isShowBtnInfo="false"
        />
        <div class="popup__bottom">
          <ButtonComponent :text="closeText" @click.native="openPopup(false)" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Popups = namespace("Popup");
const Movie = namespace("Movie");
import MovieItem from "@/components/MovieItem.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

@Component({
  components: {
    ButtonComponent,
    MovieItem,
  },
})
export default class Popup extends Vue {
  private closeText: string = "close";

  @Movie.State
  public movies!: Array<any>;

  @Popups.State
  public data!: object;

  @Popups.Action
  public openPopup!: (isVisible: boolean) => void;

  @Popups.Action
  public updateData!: (data: object) => void;
}
</script>

<style lang="scss">
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  padding: 15px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  &__overlay {
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  &__content {
    position: relative;
    z-index: 10;
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3vw;
    width: 40vw;
    flex-direction: column;
    margin: auto;
  }

  &__bottom {
    padding-top: 2vw;
    width: 100%;
    display: flex;
  }

  &__close {
    position: absolute;
    top: 20px;
    z-index: 15;
    right: 20px;
    display: block;
    width: 30px;
    height: 30px;
    cursor: pointer;
    background: 0 0;
    border: 0;

    &::after,
    &::before {
      content: "";
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      background: tomato;
      transition: all 0.4s ease-in-out;
    }

    &::after {
      transform: rotate(45deg);
    }

    &::before {
      transform: rotate(-45deg);
    }
  }
}
</style>