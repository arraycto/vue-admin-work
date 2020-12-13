const state = {
  visitedRoute: []
}

const getters = {
  getVisistedRoute(state) {
    return state.visitedRoute
  }
}

const actions = {
  addRoute({ commit }, route) {
    commit('ADD_ROUTE', route)
  }
}

const mutations = {
  ADD_ROUTE(state, route) {
    if (!state.visitedRoute) {
      state.visitedRoute = []
    }
    if (state.visitedRoute.find(it => it.path === route.path)) {
      return
    }
    state.visitedRoute.push(route)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
