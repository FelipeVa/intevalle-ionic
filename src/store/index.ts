import { createStore } from "vuex";

const store = createStore({
   state: {
    count: 1,
   },

    getters: {},

    mutations: {
       incrementCount(state: any) {
           state.count += 1;
       }
    },

    actions: {
       incrementCount({ commit }) {
           commit('incrementCount')
       }
    },
});

export default store;
