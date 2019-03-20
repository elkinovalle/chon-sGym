<template>
<div>
  <v-toolbar class="blue darken-4">
    <img src="../assets/lofo-fondo-blanco.png" alt="">
    <v-toolbar-title class="font-weight-black font-italic white--text display-1">Chon's Gym</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat class="white--text">Planes</v-btn>
      <v-btn flat class="white--text">Clases</v-btn>
      <v-btn flat class="white--text">Lo Nuevo</v-btn>
      <v-btn flat class="white--text">Noticias</v-btn>
      <v-btn flat class="white--text">Tips</v-btn>
      <v-btn flat class="white--text">Contacto</v-btn>
      <v-btn flat class="white--text">Iniciar Sesion</v-btn>
    </v-toolbar-items>
  </v-toolbar>

 <v-footer dark height="auto" >
   <v-container fluid>
      <v-layout row wrap>
         <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="blue darken-4" dark>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 md4>
          <v-card color="blue darken-4" dark flat="true">
            <img src="../assets/lofo-fondo-blanco.png" class='footer_imagen' alt="">
            <v-card-title flat tile class="blue darken-4 white--text text-xs-center-justify">En Chon's Gym contamos con un gimnasio de buen amplitud donde podrás realizar rutinas de ejercicios y encontrar un equipo perfecto para obtener el cuerpo que deseas.</v-card-title>
            <v-card-title flat tile class="blue darken-4 white--text text-xs-center font-weight-black">SÍGUENOS EN NUESTRAS REDES:</v-card-title>
            <v-card-text>
                <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="green lighten-2" dark>
              <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2>
          <v-card color="blue lighten-2" dark>
            <v-card-text></v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="blue darken-4" dark>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
  </div>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-youtube',
      'fab fa-instagram'
    ],
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us'
    ]
  })

}
</script>
<style lang="stylus">
 .v-btn{
    font-size 16px !important
    font-family Helvetica
    font-style italic
  }
  img.footer_imagen{
    margin  0px 50px !important
    height 60px
    width 60px
  }
</style>
