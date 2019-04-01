<template>
    <div>
     <v-form>
      <v-container>
        <v-layout row wrap>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message2"
              box
              label="Nombre del Producto"
              clearable
            ></v-text-field>
          </v-flex>

            <v-flex xs6>
            <v-combobox
                v-model="select"
                :items="items"
                label="Seleccione el tipo de plan"
            ></v-combobox>
            </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message3"
              box
              label= "Cantiad"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message4"
              box
              label="Cedula Cliente"
              clearable
            ></v-text-field>
          </v-flex>

          <v-btn color="green darken-4" class=" white--text display-1" >Registrar rutina</v-btn>
          <v-btn color="red darken-4" class=" white--text display-1" >Cancelar</v-btn>

       </v-layout>
      </v-container>
  </v-form>
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
