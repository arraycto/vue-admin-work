
const state = {
  collapseSideBar: false,
  theme: 2
}

const getters = {
  isCollapseSideBar(state) {
    return state.collapseSideBar
  },
  getTheme() {
    return state.theme
  }
}

const actions = {
  toggleCollapseSideBar({ commit }) {
    commit('toggleCollapseSideBar')
  },
  changeTheme({ commit }, themeId) {
    commit('changeTheme', themeId)
  }
}

const mutations = {
  toggleCollapseSideBar(state) {
    state.collapseSideBar = !state.collapseSideBar
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
