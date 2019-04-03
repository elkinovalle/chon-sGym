<template>
    <div>
        <v-subheader class="subheader black--text display-1 font-weight-bold" >Instalaciones</v-subheader>
    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  }
}
</script>
