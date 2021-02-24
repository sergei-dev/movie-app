import Vue from 'vue'
import Vuex from 'vuex'
import Movie from '@/store/modules/movie'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Movie
  }
})

export default store