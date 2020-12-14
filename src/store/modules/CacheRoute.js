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
  },
  removeRoute({ commit }, route) {
    commit('REMOVE_ROUTE', route)
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
  },
  REMOVE_ROUTE(state, route) {
    if (state.visitedRoute.find(it => it.path === route.path)) {
      state.visitedRoute.splice(state.visitedRoute.indexOf(route), 1)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
