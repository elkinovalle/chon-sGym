<template>
<div>
    <p></p>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md1 child-flex>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
          <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="white" dark flat>
        <h1 class="text-xs blue--text headline">PLANES Y <br><strong>TARIFAS</strong></h1><br>
        <p class="text-xs blue--text title"><strong>¡Cumple tus metas!</strong></p>
        <span class="text-xs black--text body-1"><strong>En CHON'S GYM te ayudaremos a cumplir tu
meta, realizando planes y rutinas
personalizadas para adelgazar, fortalecer o
definir, también tendrás consejos
alimenticios para que complementes y logres
un mayor avance hacia tus objetivos.
</strong></span>
<v-spacer></v-spacer><br>
<p></p><hr>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md3>
          <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10 offset-xs2>
      <v-toolbar color="black" class="text-xs-center" dark dense>
        <v-toolbar-title class="text headline">Descripción del plan</v-toolbar-title>
      </v-toolbar>
        <img class="imagen_layout" src="../assets/un_mes.jpg" alt="">
       <p class="texto"><strong>Cero Estrés <br> Plan Mensual Subtotal 40.000<br> Total a pagar 40.000
</strong></p>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md5>
              <v-card color="white" dark flat>
                <h1 class="text-xs-center black--text headline">CONOCE NUESTRAS <strong>INSTALACIONES</strong></h1>
   <v-layout>
    <v-flex xs12 sm6 md10 offset-xs1>
      <v-card color="white" drak flat>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 6"
              :key="n"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
  <h2 class="text-xs-center blue--text title">Ver más</h2>
          </v-card>
        </v-flex>
       <v-flex d-flex xs12 sm6 md1>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md1 child-flex>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
          <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="white" dark flat>
        <h1 class="text-xs blue--text title"><strong>HORARIOS</strong></h1><br>
        <h2 class="text-xs black--text body-1"><strong>LUN-JUE: 3AM a 11PM</strong></h2>
        <h3 class="text-xs black--text body-1"><strong>VIE: 3AM a 10PM</strong></h3>
        <p class="text-xs black--text body-1"><strong>SAB-DOM-FEST: 6AM a 6PM</strong></p>
  <img class="imagen_logo" src="../assets/Logo-gym.png" alt="">
  <p></p>
        <h2 class="text-xs black--text body-1"><strong>Dirección: Cra 9 #28-56</strong></h2>
        <h3 class="text-xs black--text body-1"><strong>Télefono: 31857420</strong></h3>
        <p class="text-xs black--text body-1"><strong>Correo: chonsgym@gmail.com</strong></p>
          </v-card>
        </v-flex>

         <v-flex d-flex xs12 sm6 md3>
          <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10 offset-xs2>
      <v-toolbar color="black" class="text-xs-center" dark dense>
        <v-toolbar-title class="text headline">Descripción del plan</v-toolbar-title>
      </v-toolbar>
        <img class="imagen_layout" src="../assets/un_mes.jpg" alt="">
       <p class="texto"><strong>Cero Estrés <br> Plan Mensual Subtotal 40.000<br> Total a pagar 40.000
</strong></p>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>

                <v-flex d-flex xs12 sm3 md5>
              <v-card color="white" dark flat>
                <h1 class="text-xs-center black--text headline">CONOCE NUESTRAS <strong>INSTALACIONES</strong></h1>
   <v-layout>
    <v-flex xs12 sm6 md10 offset-xs1>
      <v-card color="white" drak flat>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 6"
              :key="n"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>

  </v-layout>
  <h2 class="text-xs-center blue--text title">Ver más</h2>
          </v-card>
        </v-flex>

       <v-flex d-flex xs12 sm6 md1>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</div>

</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  data: () => ({
    imagenes: [
    ]
  })
}
</script>
<style lang="stylus">
 img.imagen_layout{
    height 260px
    width 285px !important
  }
  img.imagen_logo{
    height 160px
    width 160px !important
  }
  p.texto{
    background-color silver !important
    text-align center
    border solid 2px
    font-size 16px
    margin -5px 0px 0px -1px
    padding 10px
    font-family sans-serif
  }
</style>
