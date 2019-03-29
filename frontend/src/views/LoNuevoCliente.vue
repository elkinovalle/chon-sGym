<template>
<div class="lonuevo">
    <p></p><br>
<v-container fluid>
      <v-layout row wrap>
          <p></p><br>
          <v-flex xs12 sm6 md3>
    </v-flex>
         <v-flex d-flex xs12 sm6 md6 class="campo">
       <v-btn class="botones" flat><h1 class="letras">HARD BODY</h1></v-btn>
       <v-btn class="botones" flat><h1 class="letras">NEUROFITNESS</h1></v-btn>
       <v-btn class="botones" flat><h1 class="letras">PERSONALIZADOS</h1></v-btn>
        </v-flex>
         <v-flex xs12 sm6 md3>
    </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout row wrap>
          <p></p><br>
          <v-flex xs12 sm6 md3>
    </v-flex>
         <v-flex d-flex xs12 sm6 md6 class="campo">
  <h1 class="text-xs white--text display-2">EN CHON´S GYM <br><strong>LO TENEMOS TODO</strong></h1>
        </v-flex>
         <v-flex xs12 sm6 md3>
    </v-flex>
      </v-layout>
       <v-layout row wrap>
          <p></p><br>
          <v-flex xs12 sm6 md3>
    </v-flex>
         <v-flex d-flex xs12 sm6 md6 class="campo">
  <h1 class="text-xs white--text title"><strong>#SALUDEXTREMA</strong></h1>
        </v-flex>
         <v-flex xs12 sm6 md3>
    </v-flex>
      </v-layout>
       <v-layout row wrap>
          <p></p><br>
          <v-flex xs12 sm6 md3>
    </v-flex>
         <v-flex d-flex xs12 sm6 md6 class="campo">
  <p class="text-xs white--text headline">Ahora podrás disfrutar de servicios únicos que harán de tu experiencia algo diferente. Con Hard Vital, NeuroFitness y Plan personalizado podrás cuidar de tu cuerpo y tu mente sin limitaciones ni excusas.</p>
        </v-flex>
         <v-flex xs12 sm6 md3>
    </v-flex>
      </v-layout>
           <v-layout row wrap>
          <p></p><br>
          <v-flex xs12 sm6 md3>
    </v-flex>
         <v-flex d-flex xs12 sm6 md6 class="campo">
        </v-flex>
         <v-flex xs12 sm6 md3>
            <v-btn color="blue darken-4" class="font-weight-black white--text display-1" >Ver planes</v-btn>
    </v-flex>
      </v-layout>
    </v-container>
    <h1 class="text-xs-center white--text display-2">PRUEBA UN NUEVO <strong>ESTILO DE VIDA</strong></h1><br>
<v-container fluid >
   <v-layout row wrap>
    <v-flex xs12 sm6 md12 class="contenedor">
        <v-img  :src="spinning" class="spinning">
        <h1 class="escrito" >Servicio de <strong>Neurofitness</strong></h1>
          <v-btn color="blue darken-4" class="detalles" ><h1 class="letras">Ver más</h1></v-btn>
        </v-img>
          <v-img :src="aerobicos" class="spinning">
        <h1 class="escrito" >AEROBICOS</h1>
        </v-img>
       <v-img :src="crossfit" class="spinning">
        <h1 class="escrito" >CROSSFIT</h1>
        </v-img>
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
      background-image url('../assets/pesas.jpg') !important
      margin-top -14px
  }
  .v-btn.botones{
      height 100px !important
      width 100px
      border solid 4px white
  }
   .v-btn.detalles{
    margin 40px 210px 0px -40px !important
  }
  h1.letras{
       font-size 18px
       color white
  }
    h1.escrito{
       font-size 19px
       color white
  }
  .campo {
    padding 10px !important
  }
</style>
