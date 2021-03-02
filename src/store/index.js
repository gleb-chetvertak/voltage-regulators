import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

import state from './state/state';
import mutations from './mutations/mutations';
import apiRequests from './actions/apiRequests';
import commonActions from './actions/commonActions';
import getters from './getters/getters';

// import configRequest from './all-in-one/configRequest';

const actions = { ...apiRequests, ...commonActions };
// const allInOne = {...configRequest};

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state,
  mutations,
  actions,
  getters,
  // allInOne
});
