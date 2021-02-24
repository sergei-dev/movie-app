import Vue from "vue";
import Vuex from "vuex";

import Movie from "./modules/movie";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Movie
  }
});