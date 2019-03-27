<template>
  <div>
    <h1>usuario</h1>

  <v-input></v-input>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >

      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.membresia }}</td>
        <td class="text-xs-right">{{ props.item.pagototal }}</td>
        <td class="text-xs-right">{{ props.item.fecha }}</td>
      </template>
    </v-data-table>
    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'empleado-layout')
  },
  data () {
    return {
      headers: [
        {
          text: 'Usuarios',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Membresia', value: 'membresia' },
        { text: 'Pago Total', value: 'pagototal' },
        { text: 'Fecha', value: 'fecha' }

      ],
      desserts: [
        {
          name: '',
          membresia: '',
          pagototal: '',
          fecha: ''
        }

      ]
    }
  }

}
</script>
