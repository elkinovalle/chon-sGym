<template>
<div>
    <p></p>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md1 child-flex>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
          <v-flex d-flex xs12 sm6 md2>
          <v-card color="white" dark flat>
              <p></p><br>
        <h1 class="text-xs blue--text display-1 font-italic"><strong>Aeróbicos</strong></h1>
        <p class="text-xs blue--text title"><strong>AERÓBICOS</strong></p>
        <span class="text-xs black--text caption justify">El aeróbic o  aeróbicos es un tipo de deporte aeróbico que se realiza al son de la música. El aeróbic reúne todos los beneficios del ejercicio aeróbico o de que quema de grasa, además de ejercitar capacidades físicas como la flexibilidad, coordinación, orientación, ritmo, etc.</span><br>
        <p></p>
        <span class="text-xs black--text caption justify">Las canciones utilizadas marcan la intensidad en cada momento de la clase. Incluyendo en la clase el trabajo  de calentamiento y estiramientos.  De la cual también descienden otras modalidades como son la se step que se trabaja bajo una superficie elevada o banco llamado (step).</span><br>
<p></p><br>
<v-btn color="blue darken-4" class="font-weight-black white--text display-1">Ver Horarios</v-btn>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md6>
          <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md12 offset-xs1>
      <h1 class="text-xs-center black--text display-1">CLASE<strong> GRUPAL</strong></h1>
      <p></p>
        <img class="imagen_clases" src="../assets/aerobicos.jpg" alt="">
        <p></p><br>
        <v-btn color="black" class="font-weight-black white--text display-1">Ver Planes</v-btn>
        <p class="mensaje">*Horarios sujetos a cambios sin previo aviso</p>
        <p></p>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
       <v-flex d-flex xs12 sm6 md4>
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
  }
}
</script>
<style lang="stylus">
 img.imagen_layout{
    height 500px
    width 700px !important
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
    margin 0px 0px 0px 0px
  }
  article{
    margin 0px 0px 0px 60px
  }
  p.mensaje {
    font-size 13px
    margin 0px 0px 0px 440px
    font-family sans-serif
    color rgba(86, 86, 88, 0.877);
  }
</style>
