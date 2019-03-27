<template>
<div class="fondo">
    <p></p>
<v-container fluid>
      <v-layout row wrap>
          <v-flex d-flex xs12 sm6 md1 child-flex>
          <v-card color="transparent" dark flat>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md5>
          <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
        <p></p>
        <h1 class="text-xs white--text display-2 font-weight-black">CLASES</h1><br>
        <h1 class="text-xs white--text display-4 font-weight-black">GRUPALES</h1>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md1 offset-xs1>
              <v-card color="transparent" dark flat>
                  <img class="imagen_logo" src="../assets/transport.png" alt=""><br>
                  <p></p>
                  <img class="imagen_logo" src="../assets/sports (2).png" alt=""><br>
                  <p></p>
                  <img class="imagen_logo" src="../assets/sports (3).png" alt="">
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm3 md1>
              <v-card color="transparent" dark flat>
                  <v-btn color="blue darken-4" class="font-weight-black white--text display-1" >Spinning</v-btn><br>
                  <p></p><br>
                  <v-btn color="blue darken-4" class="font-weight-black white--text display-1" >Jaula</v-btn><br>
                  <p></p><br>
                  <v-btn color="blue darken-4" class="font-weight-black white--text display-1" >Aérobicos</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
       <p></p>
        <h1 class="text-xs-center white--text display-2">DESCUBRE NUESTRAS <strong>CLASES GRUPALES</strong></h1><br>
<v-container fluid >
   <v-layout row wrap>
 <v-flex d-flex xs12 sm6 md4 >
          <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md8>
        <v-img height="270px" width="370px" :src="spinning" class="spinning">
        <h1 class="black--text font-weight-black display-2" >SPINNING</h1>
        </v-img>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 m4>
              <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md11>
         <v-img height="270px" width="370px" :src="aerobicos" class="spinning">
        <h1 class="black--text font-weight-black display-2" >AEROBICOS</h1>
        </v-img>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md4>
              <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md8>
        <img class="imagen_gym" src="../assets/cross-fit.jpg" alt="">
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 md3>
              <v-card color="transparent" dark flat>
          </v-card>
        </v-flex>
   </v-layout>
   <p></p><br>
      <v-layout row wrap>
 <v-flex d-flex xs12 sm6 md4 >
          <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md8>
        <img class="imagen_gym" src="../assets/circuitos-de-entrenamiento.jpg" alt="">
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 m4>
              <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md11>
        <img class="imagen_gym" src="../assets/cardio-box.jpg" alt="">
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md4>
              <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md8>
        <img class="imagen_gym" src="../assets/hard-cycling.jpg" alt="">
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 md3>
              <v-card color="transparent" dark flat>
          </v-card>
        </v-flex>
   </v-layout>
    </v-layout>
   <p></p><br>
      <v-layout row wrap>
 <v-flex d-flex xs12 sm6 md4 >
          <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md8>
        <img class="imagen_gym" src="../assets/rumba.jpg" alt="">
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 m4>
              <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md11>
        <img class="imagen_gym" src="../assets/multiterreno.jpg" alt="">
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md4>
              <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md8>
        <img class="imagen_gym" src="../assets/shiatsu.jpg" alt="">
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 md3>
              <v-card color="transparent" dark flat>
          </v-card>
        </v-flex>
   </v-layout>

    </v-container>
</div>

</template>
<script>
import SPINNING from '@/assets/spinning-1.jpg'
import AEROBICOS from '@/assets/aerobicos.jpg'
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  data () {
    return {
      spinning: SPINNING,
      aerobicos: AEROBICOS
    }
  }
}
</script>
<style lang="stylus">
 img.imagen_gym{
    height 270px
    width 370px !important
    margin 0px 20px 0px 20px
  }
  .spinning{
    padding 110px 0px 0px 80px
    margin 0px 20px 0px 20px!important
  }
  img.imagen_logo{
    height 60px
    width 60px !important
    margin 0px 0px 0px 40px
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
  li{
    margin 0px 0px 0px 60px
  }
  article{
    margin 0px 0px 0px 60px
  }
  div.fondo{
      background-image url('../assets/gym.jpg') !important
  }

</style>
