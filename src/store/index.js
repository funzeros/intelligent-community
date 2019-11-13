import Vue from 'vue';
import Vuex from 'vuex';
import find from './find';
import register from './register';
import comvote from './comvote';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    find,
    register,
    comvote
  }
})
