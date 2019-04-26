<template>
<div>
           <v-flex d-flex xs12 sm6 md12>
        </v-flex>
<v-container fluid>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md2>
        </v-flex>
  <v-flex d-flex xs12 sm6 md8>
    <div>
      <v-tabs v-model="active" color="blue darken-4" dark slider-color="yellow" >
        <v-tab ripple> reservas activas</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <template v-for="n in 8">
              <v-flex xs12 :key="n" mb-3>
                <v-card color="green" class="white--text">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">Tipo de clase: Spinning</div>
                          <div  class="mb-4">fecha de la reserva: 25/05/2019 </div>
                          <div  class=" mb-4">Hora de inicio: 10:00 a.m. </div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div  class="headline mb-4">Lugar: Chon's Gym</div>
                          <div  class="mb-4">Entrenador: <br>Octavio Carvajal </div>
                          <div  class=" mb-4">Hora de finalizaciín: 11:00 a.m. </div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="reservas" contain></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel>
                        <v-expansion-panel-content >
                          <template v-slot:header>
                            <div>Recomendaciones</div>
                          </template>
                          <v-card>
                            <v-card-text>
                              *Llegar puntual <br>
                              *Vestir ropa cómoda y adecuada<br>
                              *Llevar hidratación<br>
                              *En caso de no poder asistir informar con anticipación<br>
                            </v-card-text>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>
              </template >
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab ripple> reservas canceladas</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <template v-for="n in 8">
              <v-flex xs12 :key="n" mb-3>
                <v-card color="red" class="white--text">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                           <div class="headline mb-4">Tipo de clase: Spinning</div>
                          <div  class="mb-4">fecha de la reserva: 25/05/2019 </div>
                          <div  class=" mb-4">Hora de inicio: 10:00 a.m. </div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div  class="headline mb-4">Lugar: Chon's Gym</div>
                          <div  class="mb-4">Entrenador: <br>Octavio Carvajal </div>
                          <div  class=" mb-4">Hora de finalizaciín: 11:00 a.m. </div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="reservas" contain></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel>
                        <v-expansion-panel-content >
                          <template v-slot:header>
                            <div>Recomendaciones</div>
                          </template>
                          <v-card>
                            <v-card-text>
                              *Llegar puntual <br>
                              *Vestir ropa cómoda y adecuada<br>
                              *Llevar hidratación<br>
                              *En caso de no poder asistir informar con anticipación<br>
                            </v-card-text>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>
              </template >
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab ripple> historial de reservas</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text> <template v-for="n in 8">
              <v-flex xs12 :key="n" mb-3>
                <v-card color="orange" class="white--text">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">Tipo de clase: Spinning</div>
                          <div  class="mb-4">fecha de la reserva: 25/05/2019 </div>
                          <div  class=" mb-4">Hora de inicio: 10:00 a.m. </div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div  class="headline mb-4">Lugar: Chon's Gym</div>
                          <div  class="mb-4">Entrenador: <br>Octavio Carvajal </div>
                          <div  class=" mb-4">Hora de finalizaciín: 11:00 a.m. </div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="reservas" contain></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel>
                        <v-expansion-panel-content >
                          <template v-slot:header>
                               <div>Recomendaciones</div>
                          </template>
                          <v-card>
                            <v-card-text>
                              *Llegar puntual <br>
                              *Vestir ropa cómoda y adecuada<br>
                              *Llevar hidratación<br>
                              *En caso de no poder asistir informar con anticipación<br>
                            </v-card-text>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>
              </template >
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-flex>
  <v-flex d-flex xs12 sm6 md2>
        </v-flex>
      </v-layout>
</v-container>
</div>
</template>

<script lang="stylus" scoped>
import RESERVAS from '@/assets/3meses.jpg'
export default {
  name: 'inicio',
  data () {
    return {
      reservas: RESERVAS,
      active: null
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  methods: {
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  }
}
</script>

<style lang="stylus">
</style>
