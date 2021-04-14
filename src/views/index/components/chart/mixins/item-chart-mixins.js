import { mapGetters } from 'vuex'

export default {
  methods: {
    getInstance(ele) {
      let instance = this.$echarts.getInstanceByDom(ele)
      if (!instance) {
        instance = this.$echarts.init(ele, this.themeId === 'dark' ? 'dark' : 'light')
      }
      return instance
    }
  },
  computed: {
    ...mapGetters({
      themeId: 'app/getTheme'
    })
  }
}
