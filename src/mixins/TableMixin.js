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
      }
    }
  },
  mounted() {
    this.$on('tableHeightChanged', _ => {
      setTimeout(_ => {
        this.tableConfig.height = this.$refs.tableBody ? this.$refs.tableBody.$el.offsetHeight - 10 - 2 : '100%'
      }, 350)
    })
  }
}
