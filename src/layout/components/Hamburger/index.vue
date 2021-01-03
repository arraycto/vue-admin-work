<template>
  <div
    class="hamburger-container"
    @click="toggle"
  >
    <svg-icon
      icon-class="hamburger"
      :class="[isOpen ? 'opend' : 'closed' ]"
      class="hamburger"
    />
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isOpen: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggle() {
      this.$store.dispatch('app/toggleCollapseSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger-container {
  .hamburger {
    font-size: 1.2em;
    transform: rotate(0deg);
    transition: transform 0.3s;
  }
  .opend {
    transform: rotate(180deg);
  }
  .closed {
    transform: rotate(0);
  }
}
</style>
