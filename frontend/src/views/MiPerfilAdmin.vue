<template>
  <div>
    <v-layout
      align-center
      justify-space-around
      wrap
    >
      <v-avatar color="dark blue">
        <v-icon dark>account_circle</v-icon>
      </v-avatar>
      <v-avatar>
        <img
          src="../assets/perfil-admin.jpg"
        >
      </v-avatar>
      <v-badge color="black" overlap>
        <template v-slot:badge>
          <span>5</span>
        </template>
        <v-avatar
          color="dark red blue--after"
        >
          <v-icon dark>notifications</v-icon>
        </v-avatar>
      </v-badge>
      <v-avatar color="teal">
        <span class="white--text headline">C</span>
      </v-avatar>

      <v-avatar color="red">
        <span class="white--text headline">J</span>
      </v-avatar>
    </v-layout>
    <div class="fotoAdmin">
      <img  class="imagenPerfil" src="../assets/perfil-admin.jpg">
    </div>
    </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  }
}
</script>
<style lang="stylus" >
  .fotoAdmin{
    background-image: url('../assets/fotoportada.jpg')
    margin-top 20px
    text-align center
    height 200px
  }
  .imagenPerfil{
    height 200px
    width 200px !important
    margin-top 100px
    border solid black 5px
  }
  div.fotoAdmin{
    background-image: url('../assets/fotoportada.jpg')
    margin 30px 70px
    height 250px
    width 500px !important
  }
</style>
