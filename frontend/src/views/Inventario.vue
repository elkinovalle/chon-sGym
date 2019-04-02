<template>
  <div>
    <v-subheader class="subheader black--text" >Inventario</v-subheader>
    <v-form>
      <v-container>
        <v-layout row wrap>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message1"
              box
              label="Número de serial o codigo"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message2"
              box
              label="Nombre del Producto"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message3"
              box
              label= "Marca"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message4"
              box
              label="Descripción"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message5"
              box
              label="Cantidad"
              clearable
            ></v-text-field>
          </v-flex>

          <v-btn color="green darken-4" class=" white--text display-1" >Agregar Producto</v-btn>
          <v-btn color="red darken-4" class=" white--text display-1" >Cancelar</v-btn>

        </v-layout>
      </v-container>
    </v-form>
    <v-card>
      <v-card-title>
        Inventario
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
          <td class="text-xs-right">{{ props.item.codigo }}</td>
          <td class="text-xs-right">{{ props.item.nombre }}</td>
          <td class="text-xs-right">{{ props.item.marca }}</td>
          <td class="text-xs-right">{{ props.item.descripcion }}</td>
          <td class="text-xs-right">{{ props.item.cantidad }}</td>
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
        { text: 'Codigo', value: 'codigo' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Marca', value: 'marca' },
        { text: 'Descripcion', value: 'descripcion' },
        { text: 'Cantidad', value: 'cantidad' }
      ],
      desserts: [
        {
          codigo: 1001,
          nombre: 'Megaplex',
          marca: 'Megaplex',
          descripcion: '10 lbs Vainilla',
          cantidad: '42 unidades'
        },
        {
          codigo: 1002,
          nombre: 'Omega 3',
          marca: 'Megaplex',
          descripcion: '120 tabletas',
          cantidad: '32 unidades'
        },
        {
          codigo: 1003,
          nombre: 'Testo Ultra',
          marca: 'Megaplex',
          descripcion: '1.5 lbs ',
          cantidad: '12 unidades'
        },
        {
          codigo: 1004,
          nombre: 'Megaplex',
          marca: 'Megaplex',
          descripcion: '10 lbs Vainilla',
          cantidad: '23 unidades'
        }
      ]
    }
  }
}

</script>
<style lang="stylus" >
  .subheader{
    text-align center !important
    display 1
  }
  .v-text-field.v-text-field--enclosed {
    --v-primary-base white !important
  }
  .theme--dark.v-text-field--box > .v-input__control > .v-input__slot {
    background rgba(0,0,0,0.8)
  }
  .theme--dark.v-input:not(.v-input--is-disabled) input, .theme--dark.v-input:not(.v-input--is-disabled) textarea {
    color white !important
    font-size 20px
  }
</style>
