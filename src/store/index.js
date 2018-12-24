import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movies'
import subject from './modules/subject'
import search from './modules/search'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    movie,
    subject,
    search
  }
})
