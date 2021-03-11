import { routes as constantRoutes } from '@/router'
const state = {
  userId: 0,
  userName: '',
  avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2017%2F1226%2F3b0685e61c1ae93065e5f45a7348058e41f1c671_size1091_w700_h656.gif&refer=http%3A%2F%2Fd.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617935122&t=37e2a9aa01824978dc36373f168ae76e',
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
