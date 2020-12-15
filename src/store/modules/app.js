
const state = {
  collapseSideBar: false
}

const getters = {
  isCollapseSideBar(state) {
    return state.collapseSideBar
  }
}

const actions = {
  toggleCollapseSideBar({ commit }) {
    commit('toggleCollapseSideBar')
  }
}

const mutations = {
  toggleCollapseSideBar(state) {
    state.collapseSideBar = !state.collapseSideBar
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
