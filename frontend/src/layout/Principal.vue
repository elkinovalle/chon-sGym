<template>
<div>
  <v-toolbar class="blue darken-4">
    <img src="../assets/Logo-gym.png" alt="">
    <v-toolbar-title class="font-weight-black font-italic white--text display-1">Chon's Gym</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat class="white--text">Planes</v-btn>
      <v-btn flat class="white--text">Clases</v-btn>
      <v-btn flat class="white--text">Lo Nuevo</v-btn>
      <v-btn flat class="white--text">Noticias</v-btn>
      <v-btn flat class="white--text">Tips</v-btn>
      <v-btn flat class="white--text">Contacto</v-btn>
      <v-btn flat class="white--text">Iniciar Sesion</v-btn>
    </v-toolbar-items>
  </v-toolbar>

 <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex d-flex>
            <v-card color="blue-grey" dark tile flat>
              <v-card-text>{{ lorem }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card color="brown" dark tile flat>
              <v-card-text>{{ lorem }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm7>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="indigo lighten-2" dark tile flat>
              <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row>
              <v-flex
                v-for="n in 2"
                :key="n"
                d-flex
              >
                <v-card
                  color="amber lighten-2"
                  tile
                  flat
                >
                  <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm2 child-flex>
        <v-card color="orange lighten-2" tile flat>
          <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm3>
        <v-card color="red lighten-2" dark tile flat>
          <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

 <v-footer dark height="auto" class="blue darken-4">
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
 .v-btn{
    font-size 16px !important
    font-family Helvetica
    font-style italic
  }

</style>
