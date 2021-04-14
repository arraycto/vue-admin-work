const pageEvents = {
  setTotalSize(size) {
    this.pageModel.totalSize = size
  }
}

export const PageModelMixin = {
  data() {
    return {
      pageModel: {
        currentPage: 1,
        pageSize: 10,
        totalSize: 0
      }
    }
  },
  methods: {
    pageSizeChanged(pageSize) {
      this.pageModel.pageSize = pageSize
      this.pageModel.currentPage = 1
      this.publishEvent('pageChanged', this.pageModel)
    },
    currentChanged(currentPage) {
      this.pageModel.currentPage = currentPage
      this.publishEvent('pageChanged', this.pageModel)
    },
    withPageInfoData(otherParams = {}) {
      return {
        ...otherParams,
        page: this.pageModel.currentPage,
        pageSize: this.pageModel.pageSize
      }
    }
  },
  created() {
    this.registeEvent(pageEvents)
  }
}

const tableEvents = {
  pageChanged() {
    this.getData()
  }
}

export default {
  data() {
    return {
      dataList: [],
      tableConfig: {
        stripe: false,
        border: false,
        size: 'small',
        // headerCellStyle: {
        //   backgroundColor: 'rgb(236, 245, 255)',
        //   color: '#333333'
        // },
        height: '100%'
      },
      tableLoading: false,
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
  },
  methods: {
    handleSuccess({ data = [], totalSize = 10 }) {
      this.publishEvent('setTotalSize', totalSize)
      this.dataList = data
    }
  },
  created() {
    this.registeEvent(tableEvents)
  }
}
