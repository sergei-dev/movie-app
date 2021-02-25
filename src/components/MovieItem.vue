<template>
  <div class="item" :class="{full: isFullScreenView}">
    <div class="item__inner">
      <div class="item__img-wrap" v-if="poster_path">
        <img :src="'https://image.tmdb.org/t/p/original' + poster_path" alt="" class="item__img">
      </div>
      <div class="item__head">
        <h3 class="item__name">{{ title }}</h3>
      </div>
      <p class="item__descr">{{ overview }}</p>
      <div class="item__count-wrap">
        <button class="item__counter" @click="reduceCount(id)">-</button>
        <span class="item__count-text">{{ count }}</span>
        <button class="item__counter" @click="enlargeCount(id)">+</button>
      </div>
      <div class="item__bottom" v-if="isShowBtnInfo">
        <ButtonComponent
          :text="buttonText"
          @click.native="
            openPopup(true), updateData({ id, index })
          "
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { namespace } from "vuex-class";
const Popups = namespace("Popup");
const Movie = namespace("Movie");

@Component({
  components: {
    ButtonComponent,
  },
})
export default class MovieItem extends Vue {
  @Prop() private id!: number;
  @Prop() private index!: number;
  @Prop() private title!: string;
  @Prop() private overview!: string;
  @Prop() private poster_path!: string;
  @Prop() private count!: number;
  @Prop() private isShowBtnInfo!: boolean;
  @Prop() private isFullScreenView!: boolean;

  public buttonText: string = "Информация";

  @Popups.State
  public isVisible!: boolean;
  public data!: object;

  @Popups.Action
  public openPopup!: (isVisible: boolean) => void;

  @Popups.Action
  public updateData!: (data: object) => void;

  @Movie.Action
  public reduceCount!: (id: number) => void;

  @Movie.Action
  public enlargeCount!: (id: number) => void;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item {
  width: calc(100% / 3);
  display: flex;
  padding: 1vw;

  &.full {
    width: 70%;
    padding: 0;
  }

  &__img-wrap {
    width: 100%;
    position: relative;
    padding-bottom: 60%;
    margin-bottom: 1vw;
    border: 1px solid gray;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid tomato;
    padding: 1vw;
  }

  &__descr {
    margin-bottom: 2vw;
  }

  &__bottom {
    margin-top: auto;
    padding-top: 1vw;
  }

  &__count-wrap {
    margin-top: auto;
    display: flex;
    align-items: center;
  }

  &__counter {
    display: inline-block;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 0.4vw;
    border: 1px solid gray;
    cursor: pointer;
    background: 0 0;
  }

  &__count-text {
    display: block;
    margin: 0 0.5vw;
  }
}
</style>
