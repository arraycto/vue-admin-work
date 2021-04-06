import { routes as constantRoutes } from '@/router'
const state = {
  userId: 0,
  userName: 'admin',
  avatar: require('@/assets/img_avatar_example.gif'),
  routes: []
}

const getters = {
  getRoutes(state) {
    return state.routes
  },
  isEmptyRoutes(state) {
    return !state.routes || state.routes.length === 0
  },
  getAvatar(state) {
    return state.avatar
  },
  getUserName(state) {
    return state.userName
  }
}

const actions = {
  saveUserInfo({ commit }, userInfo) {
    commit('SAVE_USER_INFO', userInfo)
  },
  saveRoutes({ commit }, routes) {
    commit('SAVE_ROUTES', routes)
  }
}

const mutations = {
  SAVE_USER_INFO(state, userInfo) {
    state.userId = userInfo.userId
    state.userName = userInfo.userName
    state.avatar = userInfo.avatar
  },
  SAVE_ROUTES(state, routes) {
    state.routes = constantRoutes.concat(routes)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
