export default {
  PRODUCTS: (state) => state.products,
  PRODUCTS_COUNT: (state) => state.products.length,
  PRODUCT: (state) => (productId) => state.products.filter((p) => p.id === productId)[0],
  ID_OF_YOUNGEST_PRODUCT_IN_GROUP: (state) => (groupId) => {
    const productsInGroup = state.products.filter((p) => p.group_id === groupId);
    return productsInGroup.reduce((min, p) => Math.min(p.id, min), Infinity);
  },
  PRODUCT_SPECS: (state) => (productId) => (
    state.products.filter((p) => p.id === productId)[0].specs
  ),
  PRODUCT_SINGLE_SPEC: (state) => (productId, specId) => {
    const product = state.products.filter((p) => p.id === productId)[0];
    return product.specs.filter((s) => s.specs_id === specId)[0];
  },

  CART: (state) => state.cart,
  CARTED_PRODUCTS_COUNT: (state) => state.cart.length,
  IS_PRODUCT_CARTED: (state) => (productId) => (
    state.cart.filter((p) => p === productId).length
  ),
  CARTED_PRODUCTS_SUM: (state) => {
    let sum = 0;
    state.cart.forEach((pId) => {
      const product = state.products.filter((p) => p.id === pId)[0];
      sum += product.price;
    });
    return sum;
  },

  COMPARE: (state) => state.compare,
  COMPARED_PRODUCTS_COUNT: (state) => state.compare.length,
  IS_PRODUCT_COMPARED: (state) => (productId) => (
    state.compare.filter((p) => p === productId).length
  ),
  CATEGORY_IDS_OF_COMPARED: (state) => {
    let result = [];
    state.compare.forEach((cp) => {
      const product = state.products.filter((p) => p.id === cp)[0];
      const categoryId = product.category_id;
      result = [...new Set([...result, categoryId])];
    });
    return result;
  },
  LAST_ADDED_TO_COMPARE_CATEGORY_ID: (state) => {
    const productId = state.compare[state.compare.length - 1];
    const product = state.products.filter((p) => p.id === productId)[0];
    return product.category_id;
  },
  COMPARED_BY_CATEGORY: (state) => (categoryId) => (
    state.compare.filter((cp) => {
      const product = state.products.filter((p) => p.id === cp)[0];
      return product.category_id === categoryId;
    })
  ),
  COMPARED_BY_CATEGORY_COUNT: (state) => (categoryId) => (
    state.compare.filter((cp) => {
      const product = state.products.filter((p) => p.id === cp)[0];
      return product.category_id === categoryId;
    }).length
  ),

  GROUPS: (state) => state.groups,
  GROUP: (state) => (groupId) => state.groups.filter((g) => g.id === groupId)[0],
  GROUP_OF_PRODUCT: (state) => (productId) => {
    const product = state.products.filter((p) => p.id === productId)[0];
    const groupId = product.group_id;
    return state.groups.filter((g) => g.id === groupId)[0];
  },
  GROUPS_BY_CATEGORY: (state) => (categoryId) => (
    state.groups.filter((g) => g.category_id === categoryId)
  ),
  PRODUCT_SIBLINGS: (state) => (productId) => {
    const product = state.products.filter((p) => p.id === productId)[0];
    const group = state.groups.filter((g) => g.id === product.group_id)[0];
    return state.products.filter((p) => p.group_id === group.id);
  },

  CATEGORIES: (state) => state.categories,
  CATEGORY: (state) => (categoryId) => state.categories.filter((c) => c.id === categoryId)[0],
  CATEGORIES_COUNT: (state) => state.categories.length,

  SPECS: (state) => (categoryId) => state.categories.filter((c) => c.id === categoryId)[0].specs,
  SPEC: (state) => (productId, specId) => {
    const product = state.products.filter((p) => p.id === productId)[0];
    const categoryId = product.category_id;
    const category = state.categories.filter((c) => c.id === categoryId)[0];
    return category.specs.filter((s) => s.id === specId)[0];
  },

  // Not checked

  PRODUCTS_BY_GROUP: (state) => (groupId) => state.products.filter((p) => p.group_id === groupId),
  FILE_TYPES: (state) => state.fileTypes,

  WINDOW_WIDTH(state) {
    return state.windowDimensions.windowW;
  },
  WINDOW_HEIGHT(state) {
    return state.windowDimensions.windowH;
  },
  BREAKPOINT_VALUE: (state) => (b) => state.breakpoints[b],
  HOME_SLIDE_ID(state) {
    return state.homeSlideId;
  },
  FORM(state) {
    return state.form;
  },
};
