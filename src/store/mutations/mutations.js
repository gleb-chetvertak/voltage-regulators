// import Vue from 'vue';

export default {
  ADD_PRODUCT_TO_CART: (state, id) => {
    state.cart.push(id);
  },
  REMOVE_PRODUCT_FROM_CART: (state, id) => {
    state.cart = state.cart.filter((p) => p !== id);
  },
  ADD_PRODUCT_TO_COMPARE: (state, id) => {
    state.compare.push(id);
  },
  REMOVE_PRODUCT_FROM_COMPARE: (state, id) => {
    state.compare = state.compare.filter((p) => p !== id);
  },

  // UPDATE_WINDOW_DIMENSIONS: (state, { windowW, windowH }) => {
  //   state.windowDimensions.windowW = windowW;
  //   state.windowDimensions.windowH = windowH;
  // },
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = [...products];
  },
  SET_CATEGORIES_TO_STATE: (state, categories) => {
    state.categories = categories;
  },
  SET_GROUPS_TO_STATE: (state, groups) => {
    state.groups = groups;
  },
  SET_SPECS_TO_STATE: (state, specs) => {
    state.specs = specs;
  },
  // DELETE_PRODUCT_FROM_CART_BY_ID: (state, product) => {
  //   state.cart.forEach((p) => {
  //     if (p.id === product.id) {
  //       let index = null;
  //       index = state.cart.indexOf(p);
  //       product.qty = 0;
  //       state.cart.splice(index, 1);
  //     }
  //   })
  // },
  DELETE_PRODUCT_FROM_COMPARE_BY_ID: (state, product) => {
    state.compare.forEach((p) => {
      if (p.id === product.id) {
        let index = null;
        index = state.compare.indexOf(p);
        state.compare.splice(index, 1);
      }
    });
  },
  INCREMENT_PRODUCT(state, index) {
    state.cart[index].qty += 1;
  },
  DECREMENT_PRODUCT(state, index) {
    if (state.cart[index].qty > 0) {
      state.cart[index].qty -= 1;
    }
  },
  INCREASE_HOME_SLIDE_ID(state) {
    if (state.homeSlideId < 6) {
      state.homeSlideId += 1;
    }
  },
  DECREASE_HOME_SLIDE_ID(state) {
    if (state.homeSlideId > 1) {
      state.homeSlideId -= 1;
    }
  },
  CHANGE_HOME_SLIDE_ID(state, slideNum) {
    state.homeSlideId = slideNum;
  },
};
