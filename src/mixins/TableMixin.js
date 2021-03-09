export default {
  data() {
    return {
      dataList: [],
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
      },
      actionModel: null
    }
  },
  mounted() {
    this.$on('tableHeightChanged', _ => {
      setTimeout(_ => {
        this.tableConfig.height = this.$refs.tableBody ? this.$refs.tableBody.$el.offsetHeight - 10 - 2 : '100%'
        this.$refs.table && this.$refs.table.doLayout()
      }, 350)
    })
    this.initSetup && (this.actionModel = this.initSetup())
  },
  methods: {
    pageSizeChanged(pageSize) {
      this.pageModel.pageSize = pageSize
      this.pageModel.currentPage = 1
      if (this.actionModel) {
        this.actionModel.getData()
        return
      }
      if (this.getData) {
        this.getData()
        return
      }
      throw new Error('There is no method called "getData"  to load data')
    },
    currentChanged(currentPage) {
      this.pageModel.currentPage = currentPage
      if (this.actionModel) {
        this.actionModel.getData()
        return
      }
      if (this.getData) {
        this.getData()
        return
      }
      throw new Error('There is no method called "getData"  to load data')
    },
    withPageInfoData(otherParams = {}) {
      return {
        ...otherParams,
        page: this.pageModel.currentPage,
        pageSize: this.pageModel.pageSize
      }
    },
    // search action
    doSearch() {
      console.log(this.generatorFormParams())
    },
    handleSuccess({ data = [], totalSize = 10 }) {
      this.pageModel.totalSize = totalSize
      this.dataList = data
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
