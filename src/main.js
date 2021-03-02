import Vuelidate from 'vuelidate';
import VueTheMask from 'vue-the-mask';
import firebase from 'firebase/app';

import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.use(Vuelidate);
Vue.use(VueTheMask);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAiBp3xtK4HItAPnSPeY1aNCUhz1mtfS2o',
      authDomain: 'voltaservice-ua.firebaseapp.com',
      databaseURL: 'https://voltaservice-ua.firebaseio.com',
      projectId: 'voltaservice-ua',
      storageBucket: 'voltaservice-ua.appspot.com',
      messagingSenderId: '69882214512',
      appId: '1:69882214512:web:1aea3f921ec958ac2d9cb5',
      measurementId: 'G-PMQ1XB3QSR',
    };
    firebase.initializeApp(firebaseConfig);
  },
}).$mount('#app');
