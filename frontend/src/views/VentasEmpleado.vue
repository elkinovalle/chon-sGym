<template>
    <div>
     <v-subheader class="subheader black--text" >Ventas</v-subheader>
    <v-form>
      <v-container>
        <v-layout row wrap>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message1"
              box
              label="Número de serial o codigo"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message2"
              box
              label="Nombre del Producto"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message3"
              box
              label= "Marca"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message4"
              box
              label="Descripción"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message5"
              box
              label="Cantidad"
              clearable
            ></v-text-field>
          </v-flex>

          <v-btn color="green darken-4" class=" white--text display-1" >Agregar Producto</v-btn>
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
  }

}
</script>
<style lang="stylus">

</style>
