import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default function createStore () {
  return new Vuex.Store({
    state: {
      items: []
    },
    actions: {
      fetchItem ({ commit }) {
        return axios({
          url: 'https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=1001'
        }).then(data => {
          commit('setItem', data.data.movies)
        })
      }
    },
    mutations: {
      setItem (state, items) {
        state.items = items
      }
    }
  })
}