import { toHump } from '@/utils/utils'

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
      commit('REMOVE_CACHE_LEFT_ROUTE', route)
      resolve()
    })
  },
  delRightRoute({ commit }, route) {
    return new Promise((resolve) => {
      commit('DEL_RIGHT_ROUTE', route)
      commit('REMOVE_CACHE_RIGHT_ROUTE', route)
      resolve()
    })
  },
  delAllRoute({ commit }) {
    return new Promise((resolve) => {
      commit('DEL_ALL_ROUTE')
      commit('REMOVE_ALL_CACHE_ROUTE')
      resolve()
    })
  },
  persistentVisitedRoutes({ commit, rootState }) {
    commit('PERSISTENT_VISITED_ROUTES', rootState)
  },
  restoreVisitedRoutes({ commit, rootState }) {
    commit('RESTORE_VISITED_ROUTES', rootState)
  },
  deleteVisitedRoutes({ commit, rootState }) {
    commit('DELETE_VISITED_ROUTES', rootState)
  },
  delCacheRoute({ commit }, route) {
    return new Promise((resolve, reject) => {
      commit('REMOVE_CACHE_ROUTE', route)
      resolve()
    })
  },
  delAllCacheRoute({ commit }) {
    return new Promise((resolve, reject) => {
      commit('REMOVE_ALL_CACHE_ROUTE')
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
  PERSISTENT_VISITED_ROUTES(state, rootState) {
    if (!rootState) return
    if (!rootState.user.userName) return
    const tempPersistendRoutes = state.visitedRoute.map(it => {
      return {
        fullPath: it.fullPath,
        meta: it.meta,
        name: it.name,
        params: it.params,
        path: it.path,
        query: it.query
      }
    })
    localStorage.setItem(rootState.user.userName + '_visited', JSON.stringify(tempPersistendRoutes))
  },
  RESTORE_VISITED_ROUTES(state, rootState) {
    const originRouteString = localStorage.getItem(rootState.user.userName + '_visited')
    const persistentVisitedRoutes = JSON.parse(originRouteString || '[]')
    persistentVisitedRoutes.forEach(originRoute => {
      if (!state.visitedRoute.find(it => it.fullPath === originRoute.fullPath && it.name === originRoute.name)) {
        state.visitedRoute.push(originRoute)
      }
    })
  },
  DELETE_PERSISTENT_VISITED_ROUTES(state, rootState) {
    if (!rootState) return
    localStorage.removeItem(rootState.user.userName + '_visited')
  },
  ADD_CACHE_ROUTE(state, route) {
    if (route.meta.cacheable) {
      if (!state.cachedRoute) {
        state.cachedRoute = []
      }
      if (!state.cachedRoute.includes(toHump(route.name))) {
        state.cachedRoute.push(toHump(route.name))
      }
    }
  },
  REMOVE_CACHE_ROUTE(state, route) {
    const index = state.cachedRoute.indexOf(toHump(route.name))
    if (index !== -1) {
      state.cachedRoute.splice(index, 1)
    }
  },
  REMOVE_CACHE_LEFT_ROUTE(state, route) {
    const selectIndex = state.cachedRoute.indexOf(toHump(route.name))
    if (selectIndex !== -1) {
      state.cachedRoute = state.cachedRoute.filter((it, index) => {
        return it.meta.affix || index >= selectIndex
      }).map(it => it.name)
    }
  },
  REMOVE_CACHE_RIGHT_ROUTE(state, route) {
    const selectIndex = state.cachedRoute.indexOf(toHump(route.name))
    if (selectIndex !== -1) {
      state.cachedRoute = state.cachedRoute.filter((it, index) => {
        return it.meta.affix || index <= selectIndex
      }).map(it => it.name)
    }
  },
  REMOVE_ALL_CACHE_ROUTE() {
    this.cachedRoute = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
