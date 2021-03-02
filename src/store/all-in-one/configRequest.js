import firebase from 'firebase/app'

export default {
  state: {},
  mutations: {},
  actions: {
    SEND_CONFIG_REQUEST({id, name, tel}) {
      console.log(id, name, tel);
      const request = firebase.database().ref('configureRequests/1').set({
        id: id,
        name: name,
        tel: tel
      });
      console.log(request);
    }
  },
  getters: {}
}