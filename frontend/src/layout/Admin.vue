<template>
  <v-app
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
      <v-layout row style="max-width: 650px"></v-layout>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
              class="Buton #9A0101"
                  dark
                  v-on="on"
                  flat
              ><v-icon >person</v-icon> Mi Perfil</v-btn>
            </template>
            <v-list class="lista" >
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
            <router-view></router-view>
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
      { icon: 'fas fa-box', text: 'Planes', link: 'planes-admin' },
      { icon: 'fas fa-box', text: 'Clases', link: 'clases-admin' },
      { icon: 'history', text: 'Registro de compras', link: 'registro-compras' },
      { icon: 'update', text: 'Registro de Empleados', link: 'registro-empleados' },
<<<<<<< HEAD
      { icon: 'featured_play_list', text: 'Gestión de clases', link: 'gestion-clases' },
=======
      { icon: 'featured_play_list', text: 'Gestión de reservas', link: 'gestion-clases' },
>>>>>>> 8936878f8cff190688a64145132a55324ad2ef40
      { icon: 'add', text: 'Proveedores', link: 'proveedores-admin' },
      { icon: 'money', text: 'Registro de Ventas', link: 'registro-ventas' },
      { icon: 'present_to_all', text: 'Novedades', link: 'novedades' },
      { icon: 'info', text: 'Tips', link: 'tips' },
      { icon: 'place', text: 'Instalaciones', link: 'instalacionesAdmin' },
      { icon: 'event', text: 'Reportes', link: 'reportes' }
    ],
    items1: [
      { icon: 'edit', text: 'Editar Perfil', link: 'editar-perfil-admin' },
      { icon: 'email', text: 'Notificaciones', link: 'email-admin' },
      { icon: 'image', text: 'Fotos', link: 'fotos-admin' },
      { icon: 'list', text: 'Tareas', link: 'tareas-admin' },
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
    color white
  }
  .v-navigation-drawer > .v-list:not(.v-list--dense) .v-list__tile {
    font-size 18px !important
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
  .v-icon{
    color white
  }
  .theme--light.v-icon {
    color: white;
  }
  .v-toolbar__content > *:first-child.v-btn--icon, .v-toolbar__extension > *:first-child.v-btn--icon {
      color: white;
  }
  .lista{
    background-color grey !important
  }
</style>
