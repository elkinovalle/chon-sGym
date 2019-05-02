<template>
  <div class="grande">
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
                  <v-tabs  grow color="black">
                    <v-tab class="upper">Principal</v-tab>
                    <v-tab class="upper" >Drive</v-tab>
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
                    <v-layout row wrap>

                        <v-flex xs12 lg12 mb9>

                          <material-card class="v-card-profile">
                              <v-card-text class="text-xs-center">
                                  Seleccionar foto de Perfil
                                  <v-form name="formulario" method="post" enctype="form-data">
                                      <input type="file" name="adjunto" accept=".jpg,.jpeg,.png,.gif" multiple>
                                  </v-form>
                              </v-card-text>
                          </material-card>
                        </v-flex>
                      </v-layout>
                      <v-layout row wrap>
                        <v-flex xs12 lg12 mb12>
                          <v-expansion-panel popout>
                            <v-expansion-panel-content>
                              <template v-slot:header>
                                <div >Editar Nombre</div>
                              </template>
                              <v-flex xs12 sm8 md12>
                                <v-card >
                                  <v-card-text color="black">
                                    <v-form>
                                      <v-text-field  label="Nombre"></v-text-field>
                                      <v-text-field label="Apellido"></v-text-field>
                                    </v-form>
                                  </v-card-text>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn >Cancelar</v-btn>
                                    <v-btn >Listo</v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-flex>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-flex>
                      </v-layout>
                      <v-layout row wrap>
                        <v-flex xs12 lg12 mb12>
                          <v-expansion-panel popout>
                            <v-expansion-panel-content>
                              <template v-slot:header>
                                <div >Genero</div>
                              </template>
                              <v-flex xs12 sm8 md12>
                                <v-card >
                                  <v-card-text color="black">
                                    <v-form>
                                      <v-container fluid>
                                        <v-radio-group v-model="radios" :mandatory="false">
                                          <v-radio label="Femenino" value="genero-1"></v-radio>
                                          <v-radio label="Masculino" value="genero-2"></v-radio>
                                        </v-radio-group>
                                      </v-container>
                                    </v-form>
                                  </v-card-text>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn >Cancelar</v-btn>
                                    <v-btn >Listo</v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-flex>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-flex>
                      </v-layout>
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
  methods: {
    clickMenu (value) {
      this.$router.push(value.link)
    },
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  },
  data () {
    return {
      genero: 'genero-1'
    }
  }
}
</script>
<style lang="stylus" scoped>
  .imagenAdmin{
    border-radius 50% !important
    margin 15px
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
    height 180px
    width 180px !important
    margin 20px
  }
  .v-expansion-panel__header {
    background-color: black
  }
  .Select{
    margin-left 42px
  }
  .colorletra{
    color white !important
  }
  .grande{
    width 1000px
  }
</style>
