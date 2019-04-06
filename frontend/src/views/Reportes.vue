<template>
    <div>
      <v-subheader class="subheader black--text display-1 font-weight-bold" >Reportes</v-subheader>
      <v-row></v-row>
    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  }
}
</script>
