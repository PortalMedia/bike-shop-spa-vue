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
      shipCost: null
    },
    mutations: {
      // updates the prodcuts array with new qty of repsective item(s)
      increase(state, payload) {
        return state.products[payload].qty++;
      },
      decrease(state, payload) {
        return state.products[payload].qty--;
      },
      setId(state, payload) {
        return state.id = payload
      },
      setDeilveryMethod(state, payload) {
        return state.deliveryMethod = payload
      },
      setProducts(state, payload) {
        return state.products = payload
      },
      setShipCost(state, payload) {
        return state.shipCost = payload
      },
    },
    actions: {
      init(context, payload) {
        context.commit('setId', payload.id)
        context.commit('setDeilveryMethod', payload.deliveryMethod)
        context.commit('setProducts', payload.products)
        context.commit('setShipCost', payload.shipCost)
      },
      increaseQty(context, payload) {
        context.commit('increase', payload);
      },
      decreaseQty(context, payload) {
        context.commit('decrease', payload);
      }
    }
});

export default store;