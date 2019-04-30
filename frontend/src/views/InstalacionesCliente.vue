<template>
   <v-container fluid>
      <v-layout row wrap>
        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container  fill-height fluid>
              <v-layout fill-height>
                <v-flex  justify-center align-center xs12 align-end flexbox>
                  <v-card-title class="headline center font-weight-regular blue darken-4 white--text">ÁREA DE CARDIO</v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-title class="contenido">
              <span class="title center font-weight-regular black--text">Para lograr incrementar la quema de calorías diarias y mantener tu corazón en una excelente condición, podrás disfrutar de todos los aparatos de cardio que dispone Chon's Gym ubicados de manera estratégica para que puedas disfrutar plenamente de tu rutina.
La calidad de cada uno de nuestros aparatos de cardio.</span>
          </v-card-title>
            </v-card-text>
          </v-card>
        </v-flex >
         <v-flex  d-flex xs6 sm6 md6>
          <v-carousel height="400px">
            <v-carousel-item v-for="(item1,i) in items1" :key="i" :src="item1.src">
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>

       <v-layout row wrap>
       <v-flex  d-flex xs6 sm6 md6>
          <v-carousel height="400px">
      <v-carousel-item v-for="(item2,i) in items2" :key="i" :src="item2.src">
      </v-carousel-item>
    </v-carousel>
        </v-flex>
        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container  fill-height fluid>
              <v-layout fill-height>
                <v-flex  justify-center align-center xs12 align-end flexbox>
                  <v-card-title class="headline center font-weight-regular blue darken-4 white--text">ÁREA DE PESAS</v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-title class="contenido">
              <span class="title center font-weight-regular black--text">Podrás ejercitar tus músculos con el equipo más moderno de la región instalado en 500mts cuadrados de espacio con aparatos para todos los grupos musculares, peso integrado y pesos libres con discos de todos los pesos que te ayudaran a tonificar, reafirmar o aumentar tu volumen, logrando la imagen que siempre has deseado, para FIT lo más importante es tu salud y que logres tus objetivos. Aumenta el tono muscular, previene osteoporosis, aumenta tu fuerza y energía y aumento de tu taza metabólica para mayor quema de grasa.</span>
          </v-card-title>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container  fill-height fluid>
              <v-layout fill-height>
                <v-flex  justify-center align-center xs12 align-end flexbox>
                  <v-card-title class="headline center font-weight-regular blue darken-4 white--text">ÁREA DE ZUMBA</v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-title class="contenido">
              <span class="title center font-weight-regular black--text">Para todos los ejercicios de baile en grupo que están disponibles en diversos horarios de nuestro gimnasio</span>
          </v-card-title>
            </v-card-text>
          </v-card>
        </v-flex >
         <v-flex  d-flex xs6 sm6 md6>
          <v-carousel height="400px">
             <v-carousel-item v-for="(item3,i) in items3" :key="i" :src="item3.src">
             </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>

       <v-layout row wrap>
         <v-flex  d-flex xs6 sm6 md6>
          <v-carousel height="400px">
             <v-carousel-item v-for="(item4,i) in items4" :key="i" :src="item4.src">
               </v-carousel-item>
            </v-carousel>
        </v-flex>
        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container  fill-height fluid>
              <v-layout fill-height>
                <v-flex  justify-center align-center xs12 align-end flexbox>
                  <v-card-title class="headline center font-weight-regular blue darken-4 white--text">ÁREA DE VESTUARIO</v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-title class="contenido">
              <span class="title center font-weight-regular black--text">Para facilitar el cambio de vestuario de todos nuestros ususarios y tener un área de privacidad en todo momento</span>
          </v-card-title>
            </v-card-text>
          </v-card>
        </v-flex >
      </v-layout>

       <v-layout row wrap>
        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container  fill-height fluid>
              <v-layout fill-height>
                <v-flex  justify-center align-center xs12 align-end flexbox>
                  <v-card-title class="headline center font-weight-regular blue darken-4 white--text">ÁREA DE CROSSFIT</v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-title class="contenido">
              <span class="title center font-weight-regular black--text">Destinada a todos los ejercicios multifuncionales disponibles en nuestro gimnasio</span>
          </v-card-title>
            </v-card-text>
          </v-card>
        </v-flex >
        <v-flex  d-flex xs6 sm6 md6>
          <v-carousel  height="400px">
            <v-carousel-item v-for="(item5,i) in items5" :key="i" :src="item5.src">
             </v-carousel-item>
            </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>

export default {

  data () {
    return {
      items1: [
        {
          src: 'http://www.fitmexico.mx/wp-content/uploads/bfi_thumb/JM76452-2xjhx8dyd1p3eb87pq3lze.jpg'
        },
        {
          src: 'http://www.fitmexico.mx/wp-content/uploads/bfi_thumb/JM76460-2xjhx8dyd1p3eb87pq3lze.jpg'
        },
        {
          src: 'http://www.fitmexico.mx/wp-content/uploads/bfi_thumb/JM76465-2xjhx8dyd1p3eb87pq3lze.jpg'
        }
      ],
      items2: [
        {
          src: 'http://www.fitmexico.mx/wp-content/uploads/bfi_thumb/JM76427-2xjhx8dyd1p3eb87pq3lze.jpg'
        },
        {
          src: 'http://www.fitmexico.mx/wp-content/uploads/bfi_thumb/JM76426-2xjhx8dyd1p3eb87pq3lze.jpg'
        },
        {
          src: 'http://www.fitmexico.mx/wp-content/uploads/bfi_thumb/JM76409-2xjhx8dyd1p3eb87pq3lze.jpg'
        }
      ],
      items3: [
        {
          src: 'https://nutricioni.com/wp-content/uploads/2018/09/Grupo-de-jovenes-realizando-ejercicios-en-baile.jpg'
        },
        {
          src: 'https://nutricioni.com/wp-content/uploads/2018/08/Grupo-de-hombres-y-mujeres-jovenes-realizando-ejercicios-en-un-sal%C3%B3n.jpg'
        },
        {
          src: 'https://www.cimformacion.com/blog/wp-content/uploads/bailar-zumba-en-el-gimnasio.jpg'
        }
      ],
      items4: [
        {
          src: 'https://es.habcdn.com/photos/project/gallery/reforma-vestuario-1306422.jpg'
        },
        {
          src: 'https://es.habcdn.com/photos/project/gallery/reforma-vestuario-1306419.jpg'
        },
        {
          src: 'https://http2.mlstatic.com/pichincha-zona-bares-oficina-vestuarios-gimnasio-bares-D_NQ_NP_754993-MLA29874866127_042019-F.jpg'
        }
      ],
      items5: [
        {
          src: 'http://aquathermspa.com/wp-content/uploads/2017/03/fitbox.jpg'
        },
        {
          src: 'https://www.cmdsport.com/app/uploads/2015/04/crossfitmadrid.jpg'
        },
        {
          src: 'http://media.diarioveloz.com/adjuntos/120/imagenes/001/491/0001491293.jpg'
        }
      ]
    }
  }
}

</script>

<style lang="stylus" scoped>
.contenido{
  padding 10px 30px!important
}
</style>
