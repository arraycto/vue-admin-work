export default {
  data() {
    return {
      tableConfig: {
        stripe: true,
        border: true,
        size: 'small',
        headerCellStyle: {
          backgroundColor: 'rgb(236, 245, 255)',
          color: '#333333'
        },
        height: '100%'
      },
      tableLoading: false,
      pageModel: {
        currentPage: 1,
        pageSize: 10,
        totalSize: 10
      }
    }
  },
  mounted() {
    this.$on('tableHeightChanged', _ => {
      setTimeout(_ => {
        this.tableConfig.height = this.$refs.tableBody ? this.$refs.tableBody.$el.offsetHeight - 10 - 2 : '100%'
        this.$refs.table && this.$refs.table.doLayout()
      }, 350)
    })
  },
  methods: {
    // page action
    pageSizeChanged(pageSize) {
      this.pageModel.pageSize = pageSize
    },
    currentChanged(currentPage) {
      this.pageModel.currentPage = currentPage
    },
    // search action
    doSearch() {
      console.log(this.generatorFormParams())
    },
    generatorFormParams() {
      const originFormParams = this.extraParams && this.extraParams()
      if (this.searchModel) {
        const formParams = this.searchModel.reduce((acc, cur) => {
          acc[cur.name] = cur.value || ''
          return acc
        }, originFormParams || {})
        return formParams
      }
      return {}
    },
    resetSearch() {
      this.searchModel && this.searchModel.forEach(it => { it.value = '' })
    }
  }
}
