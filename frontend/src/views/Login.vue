<template v-slot:label>
<<<<<<< HEAD
<div class="fondo">
=======
  <div>
>>>>>>> 6d5fd16e64a6409fb003056f5c57bdb6ffb63c1e
    <v-content>

      <v-container fluid fll-height>
        

        <v-layout align-left justify-left>
          <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="black" height="250">
                  <v-toolbar-title>
                    <img class="Icono" src="../assets/lofo-fondo-blanco.png" alt="">
                  </v-toolbar-title>
                <v-toolbar-title class="font-weight-medium white--text display-3">Chon's Gym</v-toolbar-title>
                </v-toolbar>
              <v-card-text class="white">
                <v-form class="black--text">
                  <v-text-field name="user" label="Usuario" type="text" ></v-text-field>
                  <v-text-field id="password" name="password" label="Contraseña" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="white">
                <v-spacer></v-spacer>
                <v-btn color="black">
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
img.Icono {
  margin-left 10px;
  height: 85px;
  width 85px !important
}
div.fondo{
      background-image: url('../assets/spinning-1.jpg');

