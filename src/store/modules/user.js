import { routes as constantRoutes } from '@/router'
import Cookies from 'js-cookie'

const userInfoString = localStorage.getItem('userInfo')
const userInfo = JSON.parse(userInfoString || '{}')
const state = {
  userId: userInfo.userId || '',
  userName: userInfo.userName || '',
  userNickName: userInfo.userNickName || '',
  roleId: userInfo.userId || '',
  roles: userInfo.roles || [],
  avatar: userInfo.avatar || '',
  routes: [],
  token: userInfo.token || ''
}

const getters = {
  getRoutes(state) {
    return state.routes
  },
  isEmptyRoutes(state) {
    return !state.routes || state.routes.length === 0
  },
  getAvatar(state) {
    return state.avatar || require('@/assets/img_avatar_example.gif')
  },
  getUserName(state) {
    return state.userNickName
  },
  getRoles(state) {
    return state.roles
  }
}

const actions = {
  saveUserInfo({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      try {
        commit('SAVE_USER_INFO', userInfo)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
  saveRoutes({ commit }, routes) {
    commit('SAVE_ROUTES', routes)
  },
  logout({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      try {
        dispatch('router/delAllRoute', null, { root: true })
        commit('LOGOUT')
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
}

const mutations = {
  SAVE_USER_INFO(state, userInfo) {
    state.userId = userInfo.userId
    state.userName = userInfo.userName
    state.userNickName = userInfo.userNickName
    state.avatar = userInfo.avatar
    state.roleId = userInfo.roleId
    state.roles = userInfo.roles
    state.token = userInfo.token
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    Cookies.set('admin-token', userInfo.token, {
      expires: 1
    })
  },
  SAVE_ROUTES(state, routes) {
    state.routes = constantRoutes.concat(routes)
  },
  LOGOUT(state) {
    state.userId = ''
    state.userName = ''
    state.userNickName = ''
    state.roleId = ''
    state.roles = []
    state.avatar = ''
    state.routes = []
    state.token = ''
    Cookies.remove('admin-token')
    localStorage.clear()
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
