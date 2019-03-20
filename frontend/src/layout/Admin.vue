<template>
  <v-app
    id="inspire"
    dark
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
      <v-list>
        <v-list-tile v-for="item in items" :key="item.text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list>
          <v-list-tile v-for="item in items2" :key="item.text" avatar> //Agregar @Click""
            <v-list-tile-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="rgba(0,0,0,0.9)"
      dense
      fixed
      clipped-left
      app
    >

      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <img src="../assets/lofo-fondo-blanco.png" alt="">
      <v-toolbar-title class="mr-5 align-center">
      <span class="title ">Chon´s Gym</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px"></v-layout>
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
  name: 'admin',
  data: () => ({
    drawer: null,
    items: [
      { icon: 'fas fa-edit', text: 'Mi Perfil' },
      { icon: 'fas fa-box', text: 'Inventario' },
      { icon: 'history', text: 'Registro de compras' },
      { icon: 'featured_play_list', text: 'Gestión de clases' },
      { icon: 'add', text: 'Proveedores' },
      { icon: 'money', text: 'Registro de Ventas' },
      { icon: 'info', text: 'Tips' },
      { icon: 'place', text: 'Instalaciones' },
      { icon: 'event', text: 'Reportes' },
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
    height 40px
    width 40px
  }
  .v-content{
    background-image url("../assets/fondo.jpg") !important
  }
  aside.v-navigation-drawer{
    background-color rgba(0,0,0,0.8) !important
  }
  span.title{
    font-size 40px !important
  }
</style>
