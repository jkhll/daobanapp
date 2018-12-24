import jsonp from 'jsonp'
// import { resolve } from 'url'

const state = {
  resData: ''
}

const mutations = {
  increment (state, playload) {
    state.resData = playload.data
  }
}
const actions = {
  toSearch ({ commit }, playload) {
    jsonp(`https://api.douban.com/v2/movie/search?q=${playload.q}&count=3`, (err, data) => {
      if (err) {
        throw new Error(err)
      }
      commit('increment', { data })
    })
  }
}

export default {
  actions,
  mutations,
  state
}
