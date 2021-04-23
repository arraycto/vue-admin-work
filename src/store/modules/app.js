
const state = {
  collapseSideBar: false,
  device: 'desktop',
  theme: 'dark-side',
  defaultPrimaryColor: 'blue',
  showLogo: true,
  showNavBar: true,
  showTagView: true,
  showSearchBar: true,
  showMessageBar: true,
  showFullScreenBar: true
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
  },
  toggleComponent({ commit }, stateObj) {
    if (stateObj) {
      commit('toggleComponent', stateObj)
    }
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
  },
  toggleComponent(state, stateObj) {
    state[stateObj.name] = stateObj.state
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
