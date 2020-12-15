
const state = {
  collapseSideBar: false,
  tableHeaderHeight: 0
}

const getters = {
  isCollapseSideBar(state) {
    return state.collapseSideBar
  },
  getTableHeaderHeight(state) {
    return state.tableHeaderHeight
  }
}

const actions = {
  toggleCollapseSideBar({ commit }) {
    commit('toggleCollapseSideBar')
  },
  setTableHeaderHeight({ commit }, height) {
    commit('SET_TABLE_HEADER_HEIGHT', height)
  }
}

const mutations = {
  toggleCollapseSideBar(state) {
    state.collapseSideBar = !state.collapseSideBar
  },
  SET_TABLE_HEADER_HEIGHT(state, height) {
    state.tableHeaderHeight = height
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
