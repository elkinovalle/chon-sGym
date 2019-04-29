<template>
  <div>
    <v-layout class="layout1" row >
      <v-flex xs2 sm2 md2 >
        <v-card flat color="black" >
          <img class="imagenAdmin" src="../assets/perfil-admin.jpg" alt="">
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md10>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex xs12 sm6 md10>
                <v-card color="black">
                  <v-card-text class="administrador">Jeffrey Muñoz</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm6 md10>
                  <v-tabs grow color="black">
                    <v-tab class="upper">Principal</v-tab>
                    <v-tab class="upper">Drive</v-tab>
                    <v-tab class="upper">Tareas</v-tab>
                    <v-tab class="upper">Calendario</v-tab>
                    <v-tab class="upper">Fotos</v-tab>
                  </v-tabs>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <label class="labelad">Jeffrey Muñoz</label>
    <v-layout  class="layout1">
      <v-flex xs2 sm2 md3 >
        <v-card flat color="black" >
          <img class="adminimg" src="../assets/perfil-admin.jpg" alt="">
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md9>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex xs12 sm6 md12>
                <v-card color="black">
                  <label class="administrador">INFORMACION DE CONTACTO</label>
                </v-card>
              </v-flex>
              <v-flex xs12 sm6 md12>
                <v-card xs6 sm6 md6 color="black">
                  <v-card-text  class="administrador">Correo Electronico:</v-card-text>
                  <label class="administrador">INFORMACION GENERAL</label>
                  <v-card class="administrador" color="black" >
                      <v-list class="layout1" subheader>
                        <v-list-tile
                          v-for="item in items"
                          :key="item.title"
                          @click="clickMenu(item)"
                        >
                          <v-list-tile-content>
                            <v-list-tile-title v-html="item.title1"></v-list-tile-title>
                          </v-list-tile-content>
                          
                          <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                          </v-list-tile-content>
              
                          <v-list-tile-action>
                            <v-icon>keyboard_arrow_right</v-icon>
                          </v-list-tile-action>
                        </v-list-tile>
                      </v-list>
                  </v-card>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  },
  data () {
    return {
      items: [
      { title1: 'Foto', title: 'Agrega una foto para personalizar tu cuenta',link:'editar-imagen'},
        { title1: 'Nombre',title: 'Ingresa tu nombre' },
        { title1: 'Genero',title: 'Selecciona tu genero'}
      ]
    }
  },
  methods: {
    clickMenu (value) {
      this.$router.push(value.link)
    }
  }
}
</script>
<style lang="stylus" >
  .imagenAdmin{
    border-radius 50% !important
    margin-top 15px
    margin-bottom  15px
    height 65px
    width 65px !important
  }
  .administrador{
    font-size 15px
    text-align left
  }
  .layout1{
     background-color black !important
  }
  .upper{
   text-transform capitalize
  }
  .labelad{
    font-size 30px
    color black
    margin-left 10px
  }
  .adminimg{
    height 200px
    width 200px !important
    margin 20px
  }
</style>
