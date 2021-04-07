export default {
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      const width = document.body.clientWidth
      if (width < 980) {
        this.$store.dispatch('app/setDevice', 'mobile')
        this.$store.dispatch('app/closeCollapseSideBar')
      } else {
        this.$store.dispatch('app/setDevice', 'desktop')
        this.$store.dispatch('app/openCollapseSideBar')
      }
    }
  }
}
