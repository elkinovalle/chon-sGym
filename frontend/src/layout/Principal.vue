<template>
<div>
  <v-toolbar class="blue darken-4">
    <img src="../assets/Logo-gym.png" alt="">
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
    <v-card
      flat
      tile
      class="class= blue darken-4 white--text text-xs-center"
    >
    <h1 class="white--text body-1">SIGUENOS EN NUESTRAS REDES:</h1>
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
       <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-card-text class="white--text pt-0">
        <strong class="subheading">Get connected with us on social networks!</strong><br>
        <strong class="subheading">Get connected with us on social networks!</strong>
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text caption">
        &copy;COPYRIGHT CHON'S GYM © 2019 · Desarrollo de página web y posicionamiento SEO por ADSI-GROUP · TODOS LOS DERECHOS RESERVADOS · POLÍTICA DE PRIVACIDAD.
      </v-card-text>
    </v-card>
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

</style>
