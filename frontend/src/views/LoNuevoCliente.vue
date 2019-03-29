<template>
<div class="lonuevo">
    <p></p><br>
<v-container fluid>
      <v-layout row wrap>
          <v-flex d-flex xs12 sm6 md1 child-flex>
          <v-card color="transparent" dark flat>
          </v-card>
        </v-flex>
          <p></p><br>
         <v-flex d-flex xs12 sm6 md12>
       <v-btn class="botones" flat><h1 class="letras">HARD BODY</h1></v-btn>
       <v-btn class="botones" flat><h1 class="letras">HARD BODY</h1></v-btn>
       <v-btn class="botones" flat><h1 class="letras">HARD BODY</h1></v-btn>
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
        <v-img height="240px" width="370px" :src="spinning" class="spinning">
        <h1 class="text-xs-center black--text font-weight-black white--text display-2" >SPINNING</h1>
        </v-img>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 m4>
              <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md11>
         <v-img height="240px" width="370px" :src="aerobicos" class="spinning">
        <h1 class="font-weight-black white--text display-2" >AEROBICOS</h1>
        </v-img>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md4>
              <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md8>
        <v-img height="240px" width="370px" :src="crossfit" class="spinning">
        <h1 class="text-xs-center font-weight-black white--text display-2" >CROSSFIT</h1>
        </v-img>
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
  <v-img height="240px" width="370px" :src="entrenamiento" class="spinning">
        <h1 class="font-weight-black white--text display-1" >CIRCUITO DE <br> ENTRENAMIENTO</h1>
        </v-img>
           </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 m4>
              <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md11>
          <v-img height="240px" width="370px" :src="cardio" class="spinning">
        <h1 class="font-weight-black white--text display-2" >CARDIO BOX</h1>
        </v-img>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md4>
              <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md8>
        <v-img height="240px" width="370px" :src="hard" class="spinning">
        <h1 class="font-weight-black white--text display-1" >HARD CYCLING</h1>
        </v-img>
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
<v-img height="240px" width="370px" :src="rumba" class="spinning">
        <h1 class="text-xs-center font-weight-black white--text display-2" >RUMBA</h1>
        </v-img>
            </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 m4>
              <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md11>
        <v-img height="240px" width="370px" :src="multiterreno" class="spinning">
        <h1 class="font-weight-black white--text display-1" >MULTITERRENO</h1>
        </v-img>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md4>
              <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md8>
        <v-img height="240px" width="370px" :src="shiatsu" class="spinning">
        <h1 class="text-xs-center font-weight-black white--text display-2" >SHIATSU</h1>
        </v-img>
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
import SPINNING from '@/assets/spinning-f.jpg'
import AEROBICOS from '@/assets/aerobicos-f.jpg'
import CROSSFIT from '@/assets/cross-fit-f.jpg'
import ENTRENAMIENTO from '@/assets/circuitos-de-entrenamiento-f.jpg'
import CARDIO from '@/assets/cardio-box-f.jpg'
import HARD from '@/assets/cycling-f.jpg'
import RUMBA from '@/assets/rumba-f.jpg'
import MULTITERRENO from '@/assets/multiterreno-f.jpg'
import SHIATSU from '@/assets/shiatsu-f.jpg'
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  data () {
    return {
      spinning: SPINNING,
      aerobicos: AEROBICOS,
      crossfit: CROSSFIT,
      entrenamiento: ENTRENAMIENTO,
      cardio: CARDIO,
      hard: HARD,
      rumba: RUMBA,
      multiterreno: MULTITERRENO,
      shiatsu: SHIATSU
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
    padding 90px 30px 0px 50px
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
  div.lonuevo{
      background-image url('../assets/wallpapers-gym.jpg') !important
      margin-top -14px
  }
  .v-btn.botones{
      height 100px !important
      width 200px
      border solid 4px black
  }
  h1.letras{
       font-size 26px
       color black
  }
</style>
