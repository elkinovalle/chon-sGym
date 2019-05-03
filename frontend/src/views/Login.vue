<template>
<div class="found">
    <v-content>
      <v-container>
        <h1 class="text-xs-center font-weight-bold white--text display-3">Iniciar sesión</h1>
        <v-layout align-left justify-left>
          <v-flex d-flex xs12 sm6 md2>
        </v-flex>
          <v-flex xs12 sm8 md8>
              <v-card class="elevation-12">
                <v-toolbar color="blue darken-4" height="150">
                    <img src="../assets/lofo-fondo-blanco.png" alt="" class="symbol">
                <v-toolbar-title class="font-weight-medium white--text display-1">Chon's Gym</v-toolbar-title>
                </v-toolbar>
              <v-card-text class="contenedor white">
                <v-form class="black--text">
                  <v-text-field name="user" label="Usuario" type="text" ></v-text-field>
                  <v-text-field id="password" name="password" label="Contraseña" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="white">
                <v-spacer></v-spacer>
               <v-checkbox class="checkbox-xs-center white--text" v-model="agreement" color="blue darken-4" >
              <template v-slot:label>
                <v-toolbar-title class="text-xs-center black--text body-1">Recordarme</v-toolbar-title>
               </template>
             </v-checkbox>
                </v-card-actions>
              <v-card class="carta" flat>
                <v-btn round color="blue darken-4" class="font-weight-black white--text black" to="/planes-cliente">Iniciar sesión
                    </v-btn>
              </v-card>
              <br>
              <v-card class="carta" flat>
              <a class="black--text body-1" @click="clickPush('/instalaciones-cliente')">¿Olvidó su contraseña?</a>
              </v-card>
              <br>
               <v-divider></v-divider>
               <br>
              <v-card class="carta" flat>
              <a class="izquierda black--text subheading" @click="clickPush('/instalaciones-cliente')">¿No tienes cuenta? </a>
              <a href="#" class="derecha blue--text title" @click="clickPush('/registro-cliente')"> Regístrate</a>
              </v-card>
              <br><br>
            </v-card>
          </v-flex>
           <v-flex d-flex xs12 sm6 md2>
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
  },
  methods: {
    clickPush (value) {
      this.$router.push(value)
    }
  }
}

</script>

<style lang="stylus" scoped>
img.symbol {
  margin-right 5px
  height 100px
  width 100px !important
}
div.found{
      background-image url('../assets/gym.jpg');
      margin-bottom 1px
      margin-top 1px
      margin-left -150px
}
h1 {
  margin-left: -10px
}
.contenedor{
  padding 10px 50px
}
.carta{
  text-align center
}
.derecha{
  margin-left 5px
}
.izquierda{
  margin-right 5px
}
</style>
