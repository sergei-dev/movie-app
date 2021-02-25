import Vue from "vue";
import Vuex from "vuex";

import Movie from "./modules/movie";
import Popup from "./modules/popup";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Movie,
    Popup
  }
});