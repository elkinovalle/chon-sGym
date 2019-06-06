<template>
    <div>
   <v-subheader class="subheader black--text display-1 font-weight-bold ">Ventas</v-subheader>
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-text-field
              v-model="editedItem.serial"
              box
              label="Número de serial o codigo"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              v-model="editedItem.nombre"
              box
              label="Nombre del Producto"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              v-model="editedItem.cantidad"
              box
              label= "Cantidad"
              clearable
              type="number"
            ></v-text-field>
          </v-flex>
           <v-flex xs12 sm6>
            <v-textarea
              v-model="editedItem.descripcion"
              box
              label="Descripción"
              clearable
              height="140px"
            ></v-textarea>
          </v-flex>
            <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.marca"
              box
              label="Marca"
              clearable
            ></v-text-field>
            <v-text-field
              v-model="editedItem.valorUnitario"
              box
              label="Valor Unitario"
              clearable
              type="number"
            ></v-text-field>
          </v-flex>
          <v-btn color="red darken-4" class=" white--text title" >Cancelar</v-btn>
          <v-btn color="green darken-4" class="white--text title" @click="save" >Agregar Producto</v-btn>
        </v-layout>
      </v-container>
    </v-form>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.serial }}</td>
        <td class="text-xs-left">{{ props.item.nombre }}</td>
        <td class="text-xs-left">{{ props.item.descripcion }}</td>
        <td class="text-xs-left">{{ props.item.marca }}</td>
        <td class="text-xs-left">{{ props.item.valorUnitario }}</td>
        <td class="text-xs-left">{{ props.item.cantidad }}</td>
        <td class="text-xs-left">{{ props.item.valorUnitario * props.item.cantidad }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>

    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Serial',
        align: 'center',
        sortable: false,
        value: 'nombre'
      },
      { text: 'Nombre', value: 'nombre' },
      { text: 'Descripción', value: 'descripcion' },
      { text: 'Marca', value: 'marca' },
      { text: 'Valor unitario', value: 'valorUnitario' },
      { text: 'Cantidad', value: 'cantidad' },
      { text: 'Total', value: 'valorTotal' },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      nombre: '',
      serial: '',
      cantidad: '',
      marca: '',
      valorUnitario: '',
      descripcion: '',
      valorTotal: ''
    },
    defaultItem: {
      nombre: '',
      serial: '',
      cantidad: '',
      marca: '',
      valorUnitario: '',
      descripcion: '',
      valorTotal: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    initialize () {
      this.desserts = [
        {
          nombre: '',
          serial: '',
          cantidad: '',
          marca: '',
          valorUnitario: '',
          descripcion: '',
          valorTotal: ''
        }
      ]
    },
    multiplicar () {
      var valorTotal = this.editedItem.valor * this.editedItem.cantidad
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }

}
</script>
<style lang="stylus" scoped>
.container.fill-height {
    background-color: white;
}
.titulo2{
  color white !important
}
</style>
