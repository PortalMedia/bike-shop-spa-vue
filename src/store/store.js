import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 * Init store with default values
 * will be populated with response from the api before mount
 */
const store = new Vuex.Store({
    state: {
      id: null,
      deliveryMethod: '',
      products: [],
      shiptCost: null
    },
    mutations: {
      // updates the prodcuts array with new qty of repsective item(s)
      update(state, payload) {
        
      }
    },
    actions: {
      increaseQty(context, payload) {
        context.commit('update', update);
      },
      decreaseQty(context, payload) {
        context.commit('update', update);
      }
    }
});

export default store;