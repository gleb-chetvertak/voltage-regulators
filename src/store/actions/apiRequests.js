import axios from 'axios';

export default {
  GET_PRODUCTS_FROM_API({ commit, getters }) {
    return !getters.PRODUCTS_COUNT
      ? axios.get('http://localhost:3000/products')
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data);
        })
        .catch((error) => {
          console.log(error);
        })
      : null;
  },
  GET_CATEGORIES_FROM_API({ commit, getters }) {
    return !getters.CATEGORIES_COUNT
      ? axios.get('http://localhost:3000/categories')
        .then((categories) => {
          commit('SET_CATEGORIES_TO_STATE', categories.data);
        })
        .catch((error) => {
          console.log(error);
        })
      : null;
  },
  GET_GROUPS_FROM_API({ commit }) {
    return axios.get('http://localhost:3000/groups')
      .then((groups) => {
        commit('SET_GROUPS_TO_STATE', groups.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

// import firebase from 'firebase/app';

// export default {
//   GET_PRODUCTS_FROM_API({ commit }) {
//     return firebase.database().ref('products').once('value')
//       .then((products) => {
//         commit('SET_PRODUCTS_TO_STATE', products.val());
//         return products.val();
//       })
//       .catch((error) => {
//         console.log(error);
//         return error;
//       });
//   },
//   GET_CATEGORIES_FROM_API({ commit }) {
//     return firebase.database().ref('categories').once('value')
//       .then((categories) => {
//         commit('SET_CATEGORIES_TO_STATE', categories.val());
//         return categories.val();
//       })
//       .catch((error) => {
//         console.log(error);
//         return error;
//       });
//   },
//   GET_GROUPS_FROM_API({ commit }) {
//     return firebase.database().ref('groups').once('value')
//       .then((groups) => {
//         commit('SET_GROUPS_TO_STATE', groups.val());
//         return groups.val();
//       })
//       .catch((error) => {
//         console.log(error);
//         return error;
//       });
//   },
//   // SEND_CONFIG_REQUEST(requestData) {
//   //   firebase.database().ref(`configureRequests/${requestData.id}`).set(requestData);
//   // },
//   // SEND_CONTACT_REQUEST(requestData) {
//   //   firebase.database().ref(`contactRequests/${requestData.id}`).set(requestData);
//   // },
// };
