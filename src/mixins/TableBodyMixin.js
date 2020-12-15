import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      cardStyle: {
        top: this.tableHeaderHeight + 'px'
      }
    }
  },
  computed: {
    ...mapGetters({
      tableHeaderHeight: 'app/getTableHeaderHeight'
    })
  },
  watch: {
    tableHeaderHeight(newVal) {
      this.$nextTick(_ => {
        this.cardStyle.top = newVal + 5 + 'px'
      })
    }
  }
}
