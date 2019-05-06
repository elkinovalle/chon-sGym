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
        <h1 class="text-xs blue--text headline">PLANES Y <br><strong>TARIFAS</strong></h1><br>
        <p class="text-xs blue--text title"><strong>¡Cumple tus metas!</strong></p>
        <span class="text-xs black--text caption"><strong>En CHON'S GYM te ayudaremos a cumplir tu
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
      <v-card>
          <v-card-title class="blue">
            <div>
              <h3 class="headline white--text">UN MES</h3>
            </div>
          </v-card-title>
          <v-img
           :src="img1"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$40.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text title" block to="/un-mes-cliente">Ver detalles</v-btn>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 md2>
              <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-card>
          <v-card-title class="blue">
            <div>
              <h3 class="headline white--text">DOS MESES</h3>
            </div>
          </v-card-title>
          <v-img
            :src="img2"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$70.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text title" block to="/dos-meses-cliente">Ver detalles</v-btn>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md2>
              <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-card>
          <v-card-title class="blue">
            <div>
              <h3 class="headline white--text">TRES MESES</h3>
            </div>
          </v-card-title>
          <v-img
            :src="img3"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$100.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text title" block to="/plan-tres-meses-cliente">Ver detalles</v-btn>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
           <v-flex d-flex xs12 sm3 md2>
              <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-card>
          <v-card-title class="blue">
            <div>
              <h3 class="headline white--text">SEIS MESES</h3>
            </div>
          </v-card-title>
          <v-img
           :src="img4"
           aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$180.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text title" block to="/plan-seis-meses-cliente">Ver detalles</v-btn>
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

<v-btn color="blue darken-4" class="font-weight-black white--text title">TODOS</v-btn><br>
          <v-btn
        color="blue darken-4"
        flat
        round
        class="black--text subheading font-italic font-weight-black "
        to="/instalaciones-cliente"
      >
      GIMNASIO
      </v-btn>
         <v-btn
        color="blue darken-4"
        flat
        round
        class="black--text subheading font-italic font-weight-black"
        to="/hard-vital-cliente"
      >
      HARD VITAL
      </v-btn>
         <v-btn
        color="blue darken-4"
        flat
        round
        class="black--text subheading font-italic font-weight-black"
        to="/neurofitness-cliente"
      >
      NEUROFITNESS
      </v-btn>
         <v-btn
        color="blue darken-4"
        flat
        round
        class="black--text subheading font-italic font-weight-black"
        to="/personalizados-cliente"
      >
      PERSONALIZADOS
      </v-btn>
          </v-card>
        </v-flex>

         <v-flex d-flex xs12 sm6 md2>
          <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-card>
          <v-card-title class="blue">
            <div>
              <h3 class="title white--text">DOCE MESES</h3>
            </div>
          </v-card-title>
          <v-img
            :src="img5"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$300.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text title" block to="/plan-doce-meses-cliente">Ver detalles</v-btn>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 md2>
              <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-card>
          <v-card-title class="blue">
            <div>
              <h3 class="title white--text">QUINCE MESES</h3>
            </div>
          </v-card-title>
          <v-img
            :src="img6"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$380.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text title" block to="/plan-quince-meses-cliente">Ver detalles</v-btn>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md2>
              <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-card>
          <v-card-title class="blue">
            <div>
              <h3 class="title white--text">HARD VITAL</h3>
            </div>
          </v-card-title>
          <v-img
            :src="img7"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$80.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text title" block to="/hard-vital-cliente">Ver detalles</v-btn>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
           <v-flex d-flex xs12 sm3 md2
           >
              <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
      <v-card>
          <v-card-title class="blue">
            <div>
              <h3 class="title white--text">NEUROFITNESS</h3>
            </div>
          </v-card-title>
          <v-img
            :src="img8"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$100.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text title" block to="/neurofitness-cliente">Ver detalles</v-btn>
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
import img1 from '@/assets/1mes.jpg'
import img2 from '@/assets/2meses.jpg'
import img3 from '@/assets/3meses.jpg'
import img4 from '@/assets/6_meses.jpg'
import img5 from '@/assets/12_meses.jpg'
import img6 from '@/assets/15_meses.jpg'
import img7 from '@/assets/hard_vital.jpg'
import img8 from '@/assets/neurofitness.jpg'
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  data () {
    return {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      img5: img5,
      img6: img6,
      img7: img7,
      img8: img8
    }
  }

}
</script>
<style lang="stylus" scoped>
 img.imagen_plan{
    height 170px
    width 190px !important
  }
.black{
  background-color black
  text-align center!important
}
.blue{
  background-color #0d47a1!important
}
</style>
