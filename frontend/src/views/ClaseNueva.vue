<template>
  <div>
    Clase nueva
  </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  }
}
</script>
