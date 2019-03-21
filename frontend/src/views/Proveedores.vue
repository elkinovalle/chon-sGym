<template>
  <div>
    Proveedores
  </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  }
}
</script>
