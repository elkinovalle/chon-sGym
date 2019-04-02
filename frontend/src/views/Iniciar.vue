<template>
<div class="fondo">
    <v-content>
      <v-container>
        <v-layout align-left justify-left>
          <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                  <v-toolbar color="black" height="150">
                       <img class="logo" src="../assets/lofo-fondo-blanco.png" alt="">
                <v-toolbar-title class="font-weight-medium white--text display-2">Chon's Gym</v-toolbar-title>
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
img.logo {
  margin-left 100px
  height: 300px


}
div.fondo{
      background-image: url('../assets/spinning-1.jpg');
