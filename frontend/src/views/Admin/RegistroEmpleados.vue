<template>
   <div>
    <v-subheader class="subheader black--text display-1 font-weight-bold" >Registro de Empleados</v-subheader>
    <v-form ref="form">
      <v-container>
        <v-layout row wrap>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="nombres"
              box
              label="Nombres*"
              clearable
              type="text"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="apellidos"
              box
              label="Apellidos*"
              clearable
              type="text"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="documento"
              box
              label= "No. Documento*"
              clearable
              type="number"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="telefono"
              box
              label="Teléfono*"
              clearable
              mask="phone"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="direccion"
              box
              label="Dirección*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="email"
              box
              label="Correo Electronico*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="cargo"
              box
              label="Cargo*"
              clearable
              type="text"
            ></v-text-field>
          </v-flex>

            <v-flex xs6>
              <v-combobox
                box
                v-model="select"
                :items="items"
              ></v-combobox>
            </v-flex>

        </v-layout>
      </v-container>
       <v-btn color="green darken-4" class=" white--text " @click="save" type="submit" >Registrar Empleado</v-btn>
          <v-btn color="red darken-4" class=" white--text " >Cancelar</v-btn>
    </v-form>
    <v-card>
      <v-card-title class="carta">
       <v-toolbar-title class="titulo2">Registro de Empleados</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
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
          <td class="text-xs-right">{{ props.item.email }}</td>
          <td class="text-xs-right">{{ props.item.sexo }}</td>
          <td class="text-xs-right">{{ props.item.cargo }}</td>

        </template>
        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
        Tu busqueda para "{{ search }}" no se encontro        </v-alert>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import api from '@/plugins/service'
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
    this.getUsers()
  },
  data () {
    return {
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
        { text: 'Correo Electronico', value: 'email' },
        { text: 'Sexo', value: 'sexo' },
        { text: 'Cargo', value: 'cargo' }
      ],
      select: 'Sexo*',
      items: [
        'Masculino',
        'Femenino'
      ]
    }
  },
  methods: {
    async getUsers () {
      const res = await api.get('/user')
    },
    async resetForm () {
      this.$refs.form.reset()
    },
    async save () {
      const res = await api.post('/user',
        {
          userNew: {
            nombre: this.nombres,
            apellido: this.apellidos,
            email: this.email,
            cedula: this.documento,
            telefono: this.telefono,
            cargo: this.cargo,
            password: ''
          }
        })
      this.snackbar = true
      this.resetForm()
      this.close()
    }
  }
}
</script>
<style lang="stylus">
 th.column.sortable.text-xs-left{
   font-size 15px !important
 }
 .carta{
   background-color darkred
 }
 .titulo2{
   color white !important
 }
</style>
