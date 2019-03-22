<template v-slot:label>
  <div>
    <v-content>
      <h1 class="display-3">Iniciar sesión</h1>
      <v-container fluid fill-height>
        <v-layout align-left justify-left>
          <v-flex xs12 sm8 md5>
              <v-card class="elevation-12">
                <v-toolbar color="black" height="150">
                <img class="Icono" src="../assets/lofo-fondo-blanco.png" alt="">
    <v-toolbar-title class="font-weight-black font-italic white--text display-3">Chon's Gym</v-toolbar-title>
                </v-toolbar>
              <v-card-text class="white">
                <v-form class="black--text">
                  <v-text-field name="user" label="Usuario" type="text" ></v-text-field>
                  <v-text-field id="password" name="password" label="Contraseña" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="white">
                <v-btn color="black" block>
                  <v-icon color="white" class="font-weight-black white--text">Ingresar</v-icon></v-btn>
              </v-card-actions>
            </v-card>
            <v-checkbox class="white"
              v-model="agreement"
              color="blue darken-4" >
              <template v-slot:label>
                <v-toolbar-title class="font-weight-black black--text">Recordarme</v-toolbar-title>
              </template>
            </v-checkbox>

          </v-flex>

        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>

<style lang="stylus">
img.Icono {
  margin: center;
  height: 100px;
}

</style>
