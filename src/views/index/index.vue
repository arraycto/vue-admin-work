<template>
  <div>
    index
  </div>
</template>

<script>
export default {
  name: 'Index',
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$get({
        url: this.$urlPath.test,
        data: {
          test: 'test'
        }
      }).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
