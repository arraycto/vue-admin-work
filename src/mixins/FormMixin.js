export default {
  methods: {
    checkParams() {
      return this.formItems.every(it => {
        return it.validator ? (it.validator.call(this, it, this.formItems.find(item => it.associateName === item.name))) : true
      })
    },
    generatorParams() {
      if (this.formItems && this.formItems.length !== 0) {
        return this.formItems.reduce((pre, cur) => {
          pre[cur.name] = cur.value
          return pre
        }, {})
      }
      return {}
    },
    resetParams() {
      this.formItems && (this.formItems.forEach(it => it.value === ''))
    }
  }
}
