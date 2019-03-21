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
  <v-content>
    <router-view></router-view>
  </v-content>
 <v-footer dark height="auto" color="blue darken-4">
   <v-container fluid>
      <v-layout row wrap>
         <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="blue darken-4" dark flat>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 md4>
          <v-card color="blue darken-4" dark flat>
            <img src="../assets/lofo-fondo-blanco.png" class='footer_imagen' alt="">
            <v-card-title flat tile class="blue darken-4 white--text text-xs-center-justify">En Chon's Gym contamos con un gimnasio de buen amplitud donde podrás realizar rutinas de ejercicios y encontrar un equipo perfecto para obtener el cuerpo que deseas.</v-card-title>
            <v-card-title flat tile class="blue darken-4 white--text text-xs-center font-weight-black">SÍGUENOS EN NUESTRAS REDES:</v-card-title>
            <v-card-text>
                <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="blue darken-4" dark flat>
              <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
        class="white--text title"
      >
        {{ link }}
      </v-btn>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-card color="blue darken-4" dark flat>
                 <v-btn
        v-for="link2 in links2"
        :key="link2"
        color="white"
        flat
        round
        class="white--text title"
      >
        {{ link2 }}
      </v-btn>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card  dark flat>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm12 md12 child-flex >
      <v-divider></v-divider> <br>
        </v-flex>
            <v-flex class="font-weight-black white--text caption"
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
       COPYRIGHT CHON'S GYM © 2019 · Desarrollo de página web y posicionamiento SEO por ADSI-GROUP · TODOS LOS DERECHOS RESERVADOS · POLÍTICA DE PRIVACIDAD.
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
      'fab fa-youtube',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-instagram'
    ],
    links: [
      'Home',
      'Planes y Tarifas',
      'Clases Grupales',
      'Horarios',
      'Lo Nuevo',
      'Dietas'
    ],
    links2: [
      'Tips',
      'Nuestras instalaciones',
      'Productos',
      'Trabaja con nosotros',
      'Contacto',
      'Reglamento de usuario'
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
    width 80px !important
    margin  0px 180px
    height 60px
<<<<<<< HEAD

=======
>>>>>>> a82f9e3ec2700744987e2c2c0edd44cd0f1a36d1
  }
</style>
