<template>
  <div>
    Usuario
    <input type="text" placeholder="Digite usuario">
  </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'empleado-layout')
  }
}
</script>
