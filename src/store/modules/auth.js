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
}

const mutations = {
  user (state, user) {
    state.user = user
  },
  login (state, auth) {
    state.loggedIn = !!auth.token
    state.token = auth.token
    state.user = auth.user
  },
  token (state, token) {
    state.token = token
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
