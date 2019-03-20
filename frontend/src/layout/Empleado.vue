<!--<template>
    <h1>Empleado</h1>
</template> -->
<template>
  <v-app
    id="inspire"
    dark
  >
    <v-navigation-drawer
      class="green darken-4"
      v-model="drawer"
      fixed
      clipped
      app

    >
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
      <v-list >
        <v-list-tile v-for="item in items" :key="item.text" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="green darken-4"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <img src="../assets/Logo-gym.png" alt="">
      <v-toolbar-title class="mr-5 align-center ">
        <span class="display-1 font-weight-black font-italic">Chon's Gym</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>code</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn icon large href="https://codepen.io/johnjleider/pen/YeRKwQ" target="_blank" v-on="on">
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { icon: 'person', text: 'Mi Perfil' },
      { icon: 'shopping_cart', text: 'Membresia' },
      { icon: 'history', text: 'Rutina' },
      { icon: 'poll', text: 'Valoracion' },
      { icon: 'money', text: 'Ventas' },
      { icon: 'close', text: 'Salir' }
    ]
  }),
  props: {
    source: String
  }
}
</script>
<style lang="stylus">
  img{
    width 40px
    height 40px
  }
</style>
