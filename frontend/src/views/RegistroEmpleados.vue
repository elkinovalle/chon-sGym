<template>
   <div>
    <v-subheader class="subheader black--text display-1 font-weight-bold" >Registro de Empleados</v-subheader>
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
              v-model="message6"
              box
              label="Correo Electronico*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message7"
              box
              label="Cargo*"
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
       <v-btn color="green darken-4" class=" white--text display-1" >Registrar Empleado</v-btn>
          <v-btn color="red darken-4" class=" white--text display-1" >Cancelar</v-btn>
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
          <td class="text-xs-right">{{ props.item.cargo }}</td>

        </template>
        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
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
        { text: 'Cargo', value: 'cargo' }
      ],
      desserts: [
        {
          documento: '100245210',
          nombres: 'jose',
          apellidos: 'arturo',
          telefono: '3121514214',
          direccion: 'cra 3 #1-16',
          correo: 'qwetyuior@gmail.com',
          sexo: 'masculino',
          cargo: 'Entrenador fitness'
        },
        {
          documento: '100245210',
          nombres: 'jose',
          apellidos: 'arturo',
          telefono: '3121514214',
          direccion: 'cra 3 #1-16',
          correo: 'qwetyuior@gmail.com',
          sexo: 'masculino',
          cargo: 'Entrenador fitness'
        },
        {
          documento: '100245210',
          nombres: 'jose',
          apellidos: 'arturo',
          telefono: '3121514214',
          direccion: 'cra 3 #1-16',
          correo: 'qwetyuior@gmail.com',
          sexo: 'masculino',
          cargo: 'Entrenador fitness'
        },
        {
          documento: '100245210',
          nombres: 'jose',
          apellidos: 'arturo',
          telefono: '3121514214',
          direccion: 'cra 3 #1-16',
          correo: 'qwetyuior@gmail.com',
          sexo: 'masculino',
          cargo: 'Entrenador fitness'
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
<style lang="stylus">
 th.column.sortable.text-xs-left{
   font-size 15px !important
 }
</style>
