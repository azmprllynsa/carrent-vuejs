import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLogin: {},
    adminLogin: {},
    rentallerDetail: {},
    modalLogin: false,
    allCar: {}
  },
  getters: {
    isLogin: (state) => localStorage.id !== undefined
  },
  mutations: {
    SET_USER_LOGIN (state, data) {
      state.userLogin = data
    },
    SET_RENTALLER_DETAIL (state, data) {
      state.rentallerDetail = data
    },
    MODAL_LOGIN_ON (state) {
      state.modalLogin = true
    },
    MODAL_LOGIN_OFF (state) {
      state.modalLogin = false
    },
    GET_CAR (state, data) {
      state.allCar = data
    }
  },
  actions: {
    getApi ({ commit }, proto) {
      Axios.get(`${process.env.VUE_APP_API + proto.url}`)
        .then(res => {
          const dataLogin = res.data.data
          commit(proto.mutation, dataLogin)
        })
        .catch(err => {
          console.log(err)
        })
    },
    postApi ({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.post(`${process.env.VUE_APP_API + proto.url}`, proto.data)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    patchApi ({ commit }, proto) {
      return new Promise((resolve, reject) => {
        console.log(proto.data)
        Axios.patch(`${process.env.VUE_APP_API + proto.url}`, proto.data)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    }
  },
  modules: {
  }
})
