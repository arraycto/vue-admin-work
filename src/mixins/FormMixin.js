export default {
  methods: {
    generatorParams() {
      if (this.formItems && this.formItems.length !== 0) {
        return this.formItems.reduce((pre, cur) => {
          pre[cur.name] = cur.value
          return pre
        }, {})
      }
      return {}
    }
  }
}
