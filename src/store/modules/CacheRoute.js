
const state = {
  visitedRoute: [],
  cachedRoute: []
}

const getters = {
  getVisistedRoute(state) {
    return state.visitedRoute
  }
}

const actions = {
  addRoute({ commit }, route) {
    commit('ADD_ROUTE', route)
    commit('ADD_CACHE_ROUTE', route)
  },
  removeRoute({ commit }, route) {
    commit('REMOVE_ROUTE', route)
    commit('REMOVE_CACHE_ROUTE', route)
  },
  delLeftRoute({ commit }, route) {
    return new Promise((resolve) => {
      commit('DEL_LEFT_ROUTE', route)
      resolve()
    })
  },
  delRightRoute({ commit }, route) {
    return new Promise((resolve) => {
      commit('DEL_RIGHT_ROUTE', route)
      resolve()
    })
  },
  delAllRoute({ commit }, route) {
    return new Promise((resolve) => {
      commit('DEL_ALL_ROUTE', route)
      resolve()
    })
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
  },
  DEL_LEFT_ROUTE(state, route) {
    const selectIndex = state.visitedRoute.indexOf(route)
    if (selectIndex !== -1) {
      state.visitedRoute = state.visitedRoute.filter((it, index) => {
        return it.meta.affix || index >= selectIndex
      })
    }
  },
  DEL_RIGHT_ROUTE(state, route) {
    const selectIndex = state.visitedRoute.indexOf(route)
    if (selectIndex !== -1) {
      state.visitedRoute = state.visitedRoute.filter((it, index) => {
        return it.meta.affix || index <= selectIndex
      })
    }
  },
  DEL_ALL_ROUTE(state) {
    state.visitedRoute = state.visitedRoute.filter((it, index) => {
      return it.meta.affix
    })
  },
  ADD_CACHE_ROUTE(state, route) {
    if (route.meta.cacheable) {
      if (!state.cachedRoute) {
        state.cachedRoute = []
      }
      if (!state.cachedRoute.includes(route.name)) {
        state.cachedRoute.push(route.name)
      }
    }
  },
  REMOVE_CACHE_ROUTE(state, route) {
    const index = state.cachedRoute.indexOf(route.name)
    if (index !== -1) {
      state.cachedRoute.splice(index, 1)
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
