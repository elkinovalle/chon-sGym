<template>
  <div>
    <v-card height="100px" flat color="rgba(0,0,0,0.8)">
      <div class="card">
        <img class="imagenAdmin" src="../assets/perfil-admin.jpg" alt="">
         <p class="parrafo">Administrador</p>
      </div>
      <v-card>
      <v-tabs
        v-model="tab"
        background-color="red"
        centered
        dark
        icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>
  
        <v-tab href="#tab-1">
          General
          <v-icon>people</v-icon>
        </v-tab>
  
        <v-tab href="#tab-2">
          Drive
          <v-icon>email</v-icon>
        </v-tab>
  
        <v-tab href="#tab-3">
          Tareas
          <v-icon>fas fa-file</v-icon>
        </v-tab>

        <v-tab href="#tab-4">
          Calendario
          <v-icon>event</v-icon>
        </v-tab>

        <v-tab href="#tab-5">
          Fotos
          <v-icon>image</v-icon>
        </v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="i in 5"
          :key="i"
          :value="'tab-' + i"
        >
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  },
    data () {
    return {
      tab: null,
    }
  }
}
</script>
<style lang="stylus" >
  .imagenAdmin{
    border-radius 50%
    margin-left 10px
    margin-top 5px
    margin-right 0px
    margin-bottom 0px
    height 40px
    width 40px !important
  }
  .parrafo{
    margin-top -48px
    margin-left 80px
  }
</style>
