<template>
    <div>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="editarNombre" >
              <v-toolbar >
                <v-toolbar-title>Cambiar Nombre</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon >
                  <v-icon>cancel</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text color="black">
                <v-form>
                  <v-text-field  label="Nombre"></v-text-field>
                  <v-text-field label="Apellido"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn >Cancelar</v-btn>
                <v-btn >Listo</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      
    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  }
}
</script>
<style lang="stylus" scoped>
    .editarNombre{
        background-color rgba(0,0,0,0.7) !important
    }
</style>

