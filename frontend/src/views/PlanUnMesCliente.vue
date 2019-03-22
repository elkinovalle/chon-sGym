<template>
    <div>
        hola
    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
