<template>
    <div>
      <v-form>
      <v-container>
        <h1>Test de valoracion</h1>
        <v-layout row wrap>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message1"
              box
              label="Edad*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message2"
              box
              label="Apellidos*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message3"
              box
              label= "No. Documento*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message4"
              box
              label="Teléfono*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message5"
              box
              label="Dirección*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message6"
              box
              label="Correo Electronico*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message7"
              box
              label="Empresa*"
              clearable
            ></v-text-field>
          </v-flex>
          </v-layout>
          </v-container>
       </v-form>

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
.theme--dark.v-label{
  color white
}
</style>
