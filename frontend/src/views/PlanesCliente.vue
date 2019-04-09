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
            src="https://www.ecestaticos.com/imagestatic/clipping/a31/835/a31835e1af964657c2b853bd8361b264/como-el-gimnasio-esta-arruinando-tu-vida-sexual-sin-que-te-des-cuenta.jpg?mtime=1487867033"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$40.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block to="/plan-un-mes-cliente">Ver detalles</v-btn>
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
            src="https://www.ecestaticos.com/imagestatic/clipping/fcd/f44/fcdf4473a8fe9b5ba0ade682b7b33a6b/los-10-errores-que-cometes-despues-de-hacer-ejercicio.jpg?mtime=1482151811"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$70.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block to="/plan-dos-meses-cliente">Ver detalles</v-btn>
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
            src="https://www.cohensfitnessclub.com/wp-content/uploads/2018/09/Mitos-del-ejercicio-1024x576.jpg"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$100.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block to="/plan-tres-meses-cliente">Ver detalles</v-btn>
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
            src="https://guiafitness.com/wp-content/uploads/que-hacer-antes-ir-gimnasio.jpg"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$180.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block to="/plan-seis-meses-cliente">Ver detalles</v-btn>
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

<v-btn color="blue darken-4" class="font-weight-black white--text caption">TODOS</v-btn><br>
          <v-btn
        color="blue darken-4"
        flat
        round
        class="black--text headline"
        to=""
      >
      GIMNASIO
      </v-btn>
         <v-btn
        color="blue darken-4"
        flat
        round
        class="black--text headline"
        to="/hard-vital-cliente"
      >
      HARD VITAL
      </v-btn>
         <v-btn
        color="blue darken-4"
        flat
        round
        class="black--text headline"
        to="/neurofitness-cliente"
      >
      NEUROFITNESS
      </v-btn>
         <v-btn
        color="blue darken-4"
        flat
        round
        class="black--text headline"
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
            src="https://e.rpp-noticias.io/normal/2017/09/25/262226_488669.jpg"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$300.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block to="/plan-doce-meses-cliente">Ver detalles</v-btn>
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
            src="https://frasesdelavida.com/wp-content/uploads/2018/03/Frases-de-gimnasio.jpg"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$380.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block to="/plan-quince-meses-cliente">Ver detalles</v-btn>
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
            src="https://s28461.pcdn.co/wp-content/uploads/iStock_demaerre-_512051072.jpg"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$80.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block to="/hard-vital-cliente">Ver detalles</v-btn>
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
            src="https://4.bp.blogspot.com/-7w68yEVQy_s/WusOceyfnqI/AAAAAAAAaxA/f5McWeGe_a4dPMZNuA4iDiLjbEfgCCH-QCLcBGAs/s1600/entra-tambien-tu-mente-con-neuro-fitness-1.jpg"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
              <h3 class="headline white--text">$100.000</h3>
            </div>
          </v-card-title>
        </v-card>
      <v-btn color="blue darken-4" class="font-weight-black white--text display-1" block to="/neurofitness-cliente">Ver detalles</v-btn>
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

  })
}
</script>
<style lang="stylus">
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
