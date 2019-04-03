<template>
<div class="noticia">
    <p></p><br>
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
        <h1 class="text-xs white--text display-2 font-weight-black">CONSEJOS</h1><br>
        <h1 class="text-xs white--text display-4 font-weight-black">SALUDABLES</h1>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md3 offset-xs1>
              <v-card color="transparent" dark flat>
        <h2 class="text-xs white--text display-1 justify"><strong>En Chon's Gym te damos opciones para motivarte</strong></h2>
        <p></p>
        <span class="text-xs white--text title justify">Es recurrente y una de las mejores opciones que puedes tomar para iniciar el compromiso y la disciplina de asistir al gimnasio; nosotros contamos con planes mensuales para que puedas hacer un pago adelantado del disfrute de nuestras instalaciones, clases grupales, zonas húmedas y máquinas de entrenamiento.</span>
        <p></p>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

<v-container fluid >
   <v-layout row wrap>
    <v-flex xs12 sm6 md12 class="contenedor">
        <v-img  :src="spinning" class="spinning" @click="clickSpinning">
        </v-img>
          <v-img :src="aerobicos" class="spinning" @click="clickAerobicos">
        </v-img>
       <v-img :src="crossfit" class="spinning" @click="clickCrossfit">
        </v-img>
    </v-flex>
   </v-layout>
      <v-layout row wrap>
 <v-flex xs12 sm6 md12 class="contenedor">
        <v-img :src="cardio" class="spinning" @click="clickCardio">
        </v-img>
          <v-img :src="hard" class="spinning" @click="clickHard">
        </v-img>
       <v-img :src="rumba" class="spinning" @click="clickRumba">
        </v-img>
    </v-flex>
       </v-layout>
       <v-layout>
           <v-flex xs12 sm6 md1>
    </v-flex>
    <v-flex xs12 sm6 md3>
      <h1 class="text-xs-center white--text subheading justify font-weight-thin">CONSUME CARBOHIDRATOS</h1>
    </v-flex>
         <v-flex xs12 sm6 md4>
       <h1 class="text-xs-center white--text subheading justify">CONSUME CARBOHIDRATOS</h1>
       </v-flex>
          <v-flex xs12 sm6 md3>
       <h1 class="text-xs-center white--text subheading justify">CONSUME CARBOHIDRATOS</h1>
    </v-flex>
            <v-flex xs12 sm6 md1>
    </v-flex>
       </v-layout>
     <v-layout row wrap>
 <v-flex xs12 sm6 md12 class="contenedor">
        <v-img :src="multiterreno" class="spinning" @click="clickMulti">
        </v-img>
          <v-img :src="entrenamiento" class="spinning" @click="clickEntrenamiento">
        </v-img>
       <v-img :src="shiatsu" class="spinning" @click="clickShiatsu">
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
  methods: {
    clickSpinning (value) {
      this.$router.push('/spinning-cliente')
    },
    clickAerobicos (value) {
      this.$router.push('/aerobicos-cliente')
    },
    clickCrossfit (value) {
      this.$router.push('/crossfit-cliente')
    },
    clickCardio (value) {
      this.$router.push('/cardio-cliente')
    },
    clickHard (value) {
      this.$router.push('/hard-cliente')
    },
    clickRumba (value) {
      this.$router.push('/rumba-cliente')
    },
    clickMulti (value) {
      this.$router.push('/multiterreno-cliente')
    },
    clickEntrenamiento (value) {
      this.$router.push('/entrenamiento-cliente')
    },
    clickShiatsu (value) {
      this.$router.push('/shiatsu-cliente')
    }
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
    padding 40px 30px 0px 50px
    display inline-block
    height 215px
    width 350px
    &:hover{
      cursor pointer
    }
  }
  img.imagen_icon{
    height 60px
    width 60px !important
    margin 0px 0px 0px 40px
  }
  h1.escrito{
    text-align center
    font-size 30px
    color white
    margin -200px 0px 0px 0px
    padding 10px
    font-family sans-serif
  }
  h1.centro{
    text-align center
    font-size 15px
    color white
    font-family sans-serif
    margin-top -20px
  }

  li{
    margin 0px 0px 0px 60px
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
  article{
    margin 0px 0px 0px 60px
  }
  div.fondo{
      background-image url('../assets/gym.jpg') !important
      margin-top -14px
  }
  .contenedor{
    padding 20px
    text-align center
  }
</style>

// <Grid rows="*.auto"
            <Div row=0>

            </Div>

        </Grid>>
