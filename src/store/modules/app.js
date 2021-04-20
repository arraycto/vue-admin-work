
const state = {
  collapseSideBar: false,
  device: 'desktop',
  theme: 'dark'
}

const getters = {
  isCollapseSideBar(state) {
    return state.collapseSideBar
  },
  getTheme() {
    return state.theme
  },
  isMobileScreen() {
    return state.device === 'mobile'
  }
}

const actions = {
  setDevice({ commit }, device) {
    commit('setDevice', device)
  },
  toggleCollapseSideBar({ commit }) {
    commit('toggleCollapseSideBar')
  },
  openCollapseSideBar({ commit }) {
    commit('openCollapseSideBar')
  },
  closeCollapseSideBar({ commit }) {
    commit('closeCollapseSideBar')
  },
  changeTheme({ commit }, themeId) {
    commit('changeTheme', themeId)
  }
}

const mutations = {
  setDevice(state, device) {
    state.device = device
  },
  toggleCollapseSideBar(state) {
    state.collapseSideBar = !state.collapseSideBar
  },
  openCollapseSideBar() {
    state.collapseSideBar = false
  },
  closeCollapseSideBar() {
    state.collapseSideBar = true
  },
  changeTheme(state, themeId) {
    state.theme = themeId
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
