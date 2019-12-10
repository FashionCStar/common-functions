const state = {
  loggedIn: false,
  user: {},
  token: ''
}

const getters = {
  isLoggedIn: state => {
    return state.loggedIn
  },
  token: state => {
    return state.token
  },
  user: state => {
    return state.user
  }
}

const actions = {
  setUser ({ commit }, auth) {
    return new Promise((resolve, reject) => {
      commit('saveUser', auth)

      localStorage.setItem('user', auth.user)
      resolve()
    })
  },
  setToken ({ commit }, auth) {
    return new Promise((resolve, reject) => {
      commit('setToken', auth)

      localStorage.setItem('token', auth.token)
      resolve()
    })
  },
  login ({ commit }, auth) {
    return new Promise((resolve, reject) => {
      commit('login', auth)

      localStorage.setItem('token', auth.token)
      localStorage.setItem('user', auth.user)
      resolve()
    })
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout')

      localStorage.removeItem('token')
      localStorage.removeItem('user')

      resolve()
    })
  }
}

const mutations = {
  setUser (state, auth) {
    state.user = auth.user
  },
  login (state, auth) {
    state.loggedIn = !!auth.token
    state.token = auth.token
    state.user = auth.user
  },
  setToken (state, auth) {
    state.token = auth.token
  },
  logout (state) {
    state.loggedIn = false
    state.token = ''
    state.user = {}
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
