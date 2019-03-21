<template>
  <div>
    Clase nueva
  </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'Login-layout')
  }
}
</script>
