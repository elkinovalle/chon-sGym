<template>
<div>
    <p></p>
        <h1 class="text-xs-center display-1">CONOCE NUESTROS <strong>PLANES</strong></h1>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md1 child-flex>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
          <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="white" dark flat>
        <p class="text-xs blue--text headline">PLANES Y <br><strong>TARIFAS</strong></p>
        <p class="text-xs blue--text title"><strong>¡Cumple tus metas!</strong></p><br>
        <span class="text-xs black--text subheading"><strong>En CHON'S GYM te ayudaremos a cumplir tu
meta, realizando planes y rutinas
personalizadas para adelgazar, fortalecer o
definir, también tendrás consejos
alimenticios para que complementes y logres
un mayor avance hacia tus objetivos.
</strong></span>
          </v-card>
        </v-flex>

         <v-flex d-flex xs12 sm6 md2>
          <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-toolbar color="blue darken-4" class="text-xs-center" dark dense>
        <v-toolbar-title class="text display-1">UN MES</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
        <img class="imagen_layout" src="../assets/un_mes.jpg" alt="">
      <v-toolbar color="black" class="text-xs-center" dark dense>
        <v-toolbar-title class="text display-1">$40.000</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block>Ver detalles</v-btn>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 md2>
              <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-toolbar color="blue darken-4" class="text-xs-center" dark dense>
        <v-toolbar-title class="text headline">DOS MESES</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
        <img class="imagen_layout" src="../assets/dos_meses.jpg" alt="">
      <v-toolbar color="black" class="text-xs-center" dark dense>
        <v-toolbar-title class="text display-1">$70.000</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block>Ver detalles</v-btn>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md2>
              <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-toolbar color="blue darken-4" class="text-xs-center" dark dense>
        <v-toolbar-title class="text headline">TRES MESES</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
        <img class="imagen_layout" src="../assets/3meses.jpg" alt="">
      <v-toolbar color="black" class="text-xs-center" dark dense>
        <v-toolbar-title class="text display-1">$100.000</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block>Ver detalles</v-btn>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
           <v-flex d-flex xs12 sm3 md2>
              <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-toolbar color="blue darken-4" class="text-xs-center" dark dense>
        <v-toolbar-title class="text headline">SEIS MESES</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
        <img class="imagen_layout" src="../assets/6_meses.jpg" alt="">
      <v-toolbar color="black" class="text-xs-center" dark dense>
        <v-toolbar-title class="text display-1">$180.000</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block>Ver detalles</v-btn>
    </v-flex>
  </v-layout>
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

<v-btn color="blue darken-4" class="font-weight-black white--text caption">TODOS</v-btn>
          <v-btn
        v-for="link in links"
        :key="link"
        color="blue darken-4"
        flat
        round
        class="black--text title"
      >
        {{ link }}
      </v-btn>
          </v-card>
        </v-flex>

         <v-flex d-flex xs12 sm6 md2>
          <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-toolbar color="blue darken-4" class="text-xs-center" dark dense>
        <v-toolbar-title class="text title">DOCE MESES</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
        <img class="imagen_layout" src="../assets/12_meses.jpg" alt="">
      <v-toolbar color="black" class="text-xs-center" dark dense>
        <v-toolbar-title class="text display-1">$320.000</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block>Ver detalles</v-btn>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 md2>
              <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-toolbar color="blue darken-4" class="text-xs-center" dark dense>
        <v-toolbar-title class="text title">Quince Meses</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
        <img class="imagen_layout" src="../assets/15_meses.jpg" alt="">
      <v-toolbar color="black" class="text-xs-center" dark dense>
        <v-toolbar-title class="text display-1">$400.000</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block>Ver detalles</v-btn>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md2>
              <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-toolbar color="blue darken-4" class="text-xs-center" dark dense>
        <v-toolbar-title class="text headline">HARD VITAL</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
        <img class="imagen_layout" src="../assets/hard-vital.png" alt="">
      <v-toolbar color="black" class="text-xs-center" dark dense>
        <v-toolbar-title class="text display-1">$80.000</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block>Ver detalles</v-btn>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
           <v-flex d-flex xs12 sm3 md2>
              <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-toolbar color="blue darken-4" class="text-xs-center" dark dense>
        <v-toolbar-title class="text headline">NeuroFitness</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
        <img class="imagen_layout" src="../assets/neurofitness.jpg" alt="">
      <v-toolbar color="black" class="text-xs-center" dark dense>
        <v-toolbar-title class="text display-1">$100.000</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block>Ver detalles</v-btn>
    </v-flex>
  </v-layout>
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
    links: [
      'GIMNASIO',
      'HARD VITAL',
      'NEUROFITNESS',
      'PERSONALIZADOS'
    ]
  })
}
</script>
<style lang="stylus">
 img.imagen_layout{
    height 170px
    width 190px !important
  }
</style>
