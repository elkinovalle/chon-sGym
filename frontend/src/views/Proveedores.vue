<template>
  <div>
    <v-subheader class="subheader black--text display-1 font-weight-bold" >Registro de Proveedores</v-subheader>
    <v-form>
      <v-container>
        <v-layout row wrap>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message1"
              box
              label="Nombres*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message2"
              box
              label="Apellidos*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message3"
              box
              label= "No. Documento*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message4"
              box
              label="Teléfono*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message5"
              box
              label="Dirección*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="form.email"
              :rules="rules.email"
              label="Correo electrónico"
              box
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message7"
              box
              label="Empresa*"
              clearable
            ></v-text-field>
          </v-flex>

            <v-flex xs6>
              <v-combobox
                v-model="select"
                :items="items"
              ></v-combobox>
            </v-flex>

        </v-layout>
      </v-container>
       <v-btn color="green darken-4" class=" white--text" >Registrar Proveedor</v-btn>
          <v-btn color="red darken-4" class=" white--text " >Cancelar</v-btn>
    </v-form>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      >
        <template v-slot:items="props">
          <td></td>
          <td class="text-xs-right">{{ props.item.documento }}</td>
          <td class="text-xs-right">{{ props.item.nombres }}</td>
          <td class="text-xs-right">{{ props.item.apellidos }}</td>
          <td class="text-xs-right">{{ props.item.telefono }}</td>
          <td class="text-xs-right">{{ props.item.direccion }}</td>
          <td class="text-xs-right">{{ props.item.correo }}</td>
          <td class="text-xs-right">{{ props.item.sexo }}</td>
          <td class="text-xs-right">{{ props.item.empresa }}</td>

        </template>
        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
         Tu busqueda para "{{ search }}" no se encontro
        </v-alert>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import api from '@/plugins/service'
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  },
  data () {
    return {
      rules: {
     email: [v => (v || '').match(/@/) || 'Por favor ingrese su e-mail']
      },
      search: '',
      headers: [
        {
          align: 'left',
          sortable: false
        },
        { text: 'Documento', value: 'documento' },
        { text: 'Nombres', value: 'nombres' },
        { text: 'Apellidos', value: 'apellidos' },
        { text: 'Telefono', value: 'telefono' },
        { text: 'Direccion', value: 'direccion' },
        { text: 'Correo Electronico', value: 'correo' },
        { text: 'Sexo', value: 'sexo' },
        { text: 'Empresa', value: 'empresa' }
      ],
      desserts: [
        {
          documento: '100245210',
          nombres: 'jeffreyM',
          apellidos: 'muñoz',
          telefono: '3121514214',
          direccion: 'cra 3 #1-16',
          correo: 'qwetyuior@gmail.com',
          sexo: 'masculino',
          empresa: 'BodyTech'
        },
        {
          documento: '100245210',
          nombres: 'jeffrey',
          apellidos: 'muñoz',
          telefono: '3121514214',
          direccion: 'cra 3 #1-16',
          correo: 'qwetyuior@gmail.com',
          sexo: 'masculino',
          empresa: 'BodyTech'
        },
        {
          documento: '100245210',
          nombres: 'jeffrey',
          apellidos: 'muñoz',
          telefono: '3121514214',
          direccion: 'cra 3 #1-16',
          correo: 'qwetyuior@gmail.com',
          sexo: 'masculino',
          empresa: 'BodyTech'
        },
        {
          documento: '100245210',
          nombres: 'jeffrey',
          apellidos: 'muñoz',
          telefono: '3121514214',
          direccion: 'cra 3 #1-16',
          correo: 'qwetyuior@gmail.com',
          sexo: 'masculino',
          empresa: 'BodyTech'
        }
      ],
      select: 'Sexo*',
      items: [
        'Masculino',
        'Femenino'
      ]
    }
  } 

}
</script>
<style lang="stylus" scoped>
  .subheader{
    text-align center !important
    display 1
  }
  .v-text-field.v-text-field--enclosed {
    --v-primary-base white
  }
  .theme--dark.v-text-field--box > .v-input__control > .v-input__slot {
    background rgba(0,0,0,0.8)
  }
  .theme--dark.v-input:not(.v-input--is-disabled) input, .theme--dark.v-input:not(.v-input--is-disabled) textarea {
    color white
    font-size 20px
  }
  .v-input{
    --v-primary-base white
  }
  .flex.xs6 {
    background: rgba(0,0,0,0.8);
    height: 56px;
    margin: 8px 0px 0px 0px;
  }
  .theme--dark.v-label {
    color white
  }
  div.v-card__title{
    background-color: darkred;
  }
</style>
