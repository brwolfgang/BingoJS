import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    letras: 'bingo',
    qtdeNumeros: 75
  },
  getters: {
    arrayLetras: state => {
      return state.letras.toUpperCase().split('')
    }
  },
  mutations: {
  }
})
