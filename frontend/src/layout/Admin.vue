<template>
  <v-app
    id="inspire"
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
      <v-list>
        <v-list-tile v-for="item in items" :key="item.text" :to="item.link" active-class="activo--text">
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
      color="#9A0101"
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
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
              class="Buton #9A0101"
                  dark
                  v-on="on"
                  flat
              ><v-icon >person</v-icon> Mi Perfil</v-btn>
            </template>
            <v-list >
              <v-list-tile v-for="item in items1" :key="item.text" :to="item.link" active-class=" activo--text">
                <v-list-tile-action>
                  <v-icon medium>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'admin',
  methods: {
    clickButon (value) {
      this.$router.push(value.link)
    }
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: 'fas fa-box', text: 'Inventario', link: 'inventario' },
      { icon: 'history', text: 'Registro de compras', link: 'registro-compras' },
      { icon: 'update', text: 'Registro de Empleados', link: 'registro-empleados' },
      { icon: 'featured_play_list', text: 'Gestión de clases', link: 'gestion-clases' },
      { icon: 'add', text: 'Proveedores', link: 'proveedores' },
      { icon: 'money', text: 'Registro de Ventas', link: 'registro-ventas' },
      { icon: 'present_to_all', text: 'Novedades', link: 'novedades' },
      { icon: 'info', text: 'Tips', link: 'tips' },
      { icon: 'place', text: 'Instalaciones', link: 'instalaciones' },
      { icon: 'event', text: 'Reportes', link: 'reportes' }
    ],
    items1: [
      { icon: 'edit', text: 'Editar Perfil', link: 'editar-perfil-admin' },
      { icon: 'email', text: 'Notificaciones', link: 'email-admin' },
      { icon: 'image', text: 'Fotos', link: 'fotos-admin' },
      { icon: 'list', text: 'Tareas' },
      { icon: 'close', text: 'Salir' }
    ],
    props: {
      source: String
    }
  })
}
</script>
<style lang="stylus">
  img{
  width 60px
  height 45px
  }
   aside.v-navigation-drawer{
    background-color #9A0101 !important
  }
  span.title{
    font-size 40px !important
  }
  .v-navigation-drawer > .v-list:not(.v-list--dense) .v-list__tile {
    font-family Times New Roman, Times, serif
    font-size 22px !important
    height 57.7px
    color white
  }
  div.v-content{
    background-color white !important
  }
  .container.fill-height {
   background-color white
  }
  .act{
    background-color white !important
  }
</style>
