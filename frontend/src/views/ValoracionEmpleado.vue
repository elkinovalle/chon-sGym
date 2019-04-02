<template>
    <div>

          <v-btn color="green darken-4" class=" white--text display-1" >Registrar rutina</v-btn>
          <v-btn color="red darken-4" class=" white--text display-1" >Cancelar</v-btn>

    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'empleado-layout')
  },
  data () {
    return {
      select: 'Masaje',
      items: [
        'Masaje',
        'Hidroterapia',
        'Plan 1 mes',
        'Plan 3 meses'
      ]
    }
  }

}
</script>
<style lang="stylus">

</style>
