<template>
<div class="found">
    <v-content>
      <v-container>
        <h1 class="font-weight-bold white--text display-3">Inicio de sesión</h1>
        <v-layout align-left justify-left>
          <v-flex xs12 sm8 md5>
              <v-card class="elevation-12">
                <v-toolbar color="black" height="150">
                    <img src="../assets/lofo-fondo-blanco.png" alt="" class="symbol">
                <v-toolbar-title class="font-weight-medium white--text display-1">Chon's Gym</v-toolbar-title>
                </v-toolbar>
              <v-card-text class="white">
                <v-form class="black--text">
                  <v-text-field name="user" label="Usuario" type="text" ></v-text-field>
                  <v-text-field id="password" name="password" label="Contraseña" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="white">
                <v-spacer></v-spacer>
                <v-btn round color="black">
                    <v-icon color="white" class="font-weight-black white--text">Iniciar sesión</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
              <v-checkbox class="checkbox-xs-center white--text" v-model="agreement" color="blue darken-4" >
              <template v-slot:label>
                <v-toolbar-title class="font-weight-black black--text">Recordarme</v-toolbar-title>
               </template>
             </v-checkbox>
             <p>¿Olvidó su contraseña?</p>
             <a>¿No tienes cuenta?</a>
            </v-card>
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
img.symbol {
  margin-right 5px
  height 100px
  width 100px !important
}
div.found{
      background-image: url('../assets/gym.jpg');
      margin-bottom: 1px
      margin-top: 1px
      margin-left: -250px
}
h1 {
  margin-left: -10px
}
</style>
