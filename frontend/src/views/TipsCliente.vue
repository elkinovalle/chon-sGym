<template>
<div class="noticia">
    <p></p><br>
<v-container fluid>
      <v-layout row wrap>
          <v-flex d-flex xs12 sm6 md1 child-flex>
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
         <v-flex d-flex xs12 sm6 md1 child-flex>
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
        <v-img  :src="ejercicio" class="spinning" @click="clickEjercicio">
        </v-img>
          <v-img :src="hidratacion" class="spinning" @click="clickHidratacion">
        </v-img>
       <v-img :src="minutos" class="spinning" @click="clickMinutos">
        </v-img>
    </v-flex>
   </v-layout>
   <v-layout>
           <v-flex xs12 sm6 md1>
    </v-flex>
    <v-flex xs12 sm6 md3>
      <h1 class="text-xs-center white--text subheading justify font-weight-black">EJERCICIO FÍSICO</h1>
    </v-flex>
         <v-flex xs12 sm6 md4>
       <h1 class="text-xs-center white--text subheading justify font-weight-black">HIDRATACIÓN</h1>
       </v-flex>
          <v-flex xs12 sm6 md3>
       <h1 class="text-xs-center white--text subheading justify font-weight-black">20 MINUTOS DE CARDIO</h1>
    </v-flex>
            <v-flex xs12 sm6 md1>
    </v-flex>
       </v-layout>
      <v-layout row wrap>
 <v-flex xs12 sm6 md12 class="contenedor">
        <v-img :src="consume" class="spinning" @click="clickConsume">
        </v-img>
          <v-img :src="duerme" class="spinning" @click="clickDuerme">
        </v-img>
       <v-img :src="calentamiento" class="spinning" @click="clickCalentamiento">
        </v-img>
    </v-flex>
       </v-layout>
       <v-layout>
           <v-flex xs12 sm6 md1>
    </v-flex>
    <v-flex xs12 sm6 md3>
      <h1 class="text-xs-center white--text subheading justify font-weight-black">CONSUME CARBOHIDRATOS</h1>
    </v-flex>
         <v-flex xs12 sm6 md4>
       <h1 class="text-xs-center white--text subheading justify font-weight-black">DUERME BIEN</h1>
       </v-flex>
          <v-flex xs12 sm6 md3>
       <h1 class="text-xs-center white--text subheading justify font-weight-black">EJERCICIOS DE CALENTAMIENTO</h1>
    </v-flex>
            <v-flex xs12 sm6 md1>
    </v-flex>
       </v-layout>
     <v-layout row wrap>
 <v-flex xs12 sm6 md12 class="contenedor">
        <v-img :src="estiramiento" class="spinning" @click="clickEstiramiento">
        </v-img>
          <v-img :src="practicar" class="spinning" @click="clickPracticar">
        </v-img>
       <v-img :src="consejos" class="spinning" @click="clickConsejos">
        </v-img>
    </v-flex>
   </v-layout>
   <v-layout>
           <v-flex xs12 sm6 md1>
    </v-flex>
    <v-flex xs12 sm6 md3>
      <h1 class="text-xs-center white--text subheading justify font-weight-black">IMPORTANCIA DEL ESTIRAMIENTO</h1>
    </v-flex>
         <v-flex xs12 sm6 md4>
       <h1 class="text-xs-center white--text subheading justify font-weight-black">¿QUIÉN PUEDE PRACTICAR CROSSFIT?</h1>
       </v-flex>
          <v-flex xs12 sm6 md3>
       <h1 class="text-xs-center white--text subheading justify font-weight-black">CONSEJOS PARA BAJAR DE PESO</h1>
    </v-flex>
            <v-flex xs12 sm6 md1>
    </v-flex>
       </v-layout>
    </v-container>
</div>
</template>
<script>
import EJERCICIO from '@/assets/ejercicio-fisico.jpg'
import HIDRATACION from '@/assets/hidratacion.jpg'
import MINUTOS from '@/assets/cardio.jpg'
import CONSUME from '@/assets/carbohidratos.jpg'
import DUERME from '@/assets/dormir-bien.jpg'
import CALENTAMIENTO from '@/assets/calentar.jpg'
import ESTIRAMIENTO from '@/assets/estiramiento.jpg'
import PRACTICAR from '@/assets/practicar_crossfit.jpg'
import CONSEJOS from '@/assets/bajar_peso.jpg'
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  methods: {
    clickEjercicio (value) {
      this.$router.push('/ejercicio-fisico-cliente')
    },
    clickHidratacion (value) {
      this.$router.push('/hidratacion-cliente')
    },
    clickMinutos (value) {
      this.$router.push('/minutos-cliente')
    },
    clickConsume (value) {
      this.$router.push('/carbohidratos-cliente')
    },
    clickDuerme (value) {
      this.$router.push('/duerme-bien-cliente')
    },
    clickCalentamiento (value) {
      this.$router.push('/calentamiento-cliente')
    },
    clickEstiramiento (value) {
      this.$router.push('/estiramiento-cliente')
    },
    clickPracticar (value) {
      this.$router.push('/practicar-cliente')
    },
    clickConsejos (value) {
      this.$router.push('/consejos-cliente')
    }
  },
  data () {
    return {
      ejercicio: EJERCICIO,
      hidratacion: HIDRATACION,
      minutos: MINUTOS,
      consume: CONSUME,
      duerme: DUERME,
      calentamiento: CALENTAMIENTO,
      estiramiento: ESTIRAMIENTO,
      practicar: PRACTICAR,
      consejos: CONSEJOS
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
