export default {
  TOGGLE_PRODUCT_IN_CART({ commit, getters }, id) {
    return getters.IS_PRODUCT_CARTED(id)
      ? commit('REMOVE_PRODUCT_FROM_CART', id)
      : commit('ADD_PRODUCT_TO_CART', id);
  },
  TOGGLE_PRODUCT_IN_COMPARE({ commit, getters }, id) {
    return getters.IS_PRODUCT_COMPARED(id)
      ? commit('REMOVE_PRODUCT_FROM_COMPARE', id)
      : commit('ADD_PRODUCT_TO_COMPARE', id);
  },

  UPDATE_WINDOW_DIMENSIONS({ commit }, { windowW, windowH }) {
    commit('UPDATE_WINDOW_DIMENSIONS', { windowW, windowH });
  },
  ADD_PRODUCT_TO_COMPARE({ commit }, id) {
    commit('ADD_PRODUCT_TO_COMPARE', id);
  },
  REMOVE_PRODUCT_FROM_COMPARE({ commit }, id) {
    commit('REMOVE_PRODUCT_FROM_COMPARE', id);
  },
  INCREMENT_CARTED_PRODUCT({ commit }, index) {
    commit('INCREMENT_PRODUCT', index);
  },
  DECREMENT_CARTED_PRODUCT({ commit }, index) {
    commit('DECREMENT_PRODUCT', index);
  },
  INCREMENT_HOME_SLIDE_ID({ commit }) {
    commit('INCREASE_HOME_SLIDE_ID');
  },
  DECREMENT_HOME_SLIDE_ID({ commit }) {
    commit('DECREASE_HOME_SLIDE_ID');
  },
  CHANGE_HOME_SLIDE_ID({ commit }, slideNum) {
    commit('CHANGE_HOME_SLIDE_ID', slideNum);
  },
};
