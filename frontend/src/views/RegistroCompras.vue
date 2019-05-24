<template>
    <div>
   <v-subheader class="subheader black--text display-1 font-weight-bold ">Compras</v-subheader>
    <v-form>
      <v-container>
        <v-layout row wrap>
           <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.nit"
              box
              label="NIT de la empresa"
              clearable
            ></v-text-field>
          </v-flex>

           <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.empresa"
              box
              label="Empresa"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              v-model="editedItem.codigo"
              box
              label="Número de serial o codigo"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              v-model="editedItem.name"
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
              v-model="editedItem.valor"
              box
              label="Valor Unitario"
              clearable
            ></v-text-field>
          </v-flex>
          <v-btn color="red darken-4" class=" white--text title" >Cancelar</v-btn>
          <v-btn color="green darken-4" class=" white--text title" @click="save" >Agregar Producto</v-btn>
        </v-layout>
      </v-container>
    </v-form>
     <v-toolbar flat color="red darken-4">
      <v-toolbar-title class="titulo2">Registro de Ventas</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.codigo" label="Serial"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Nombre"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.descripcion" label="Descripción"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.marca" label="Marca"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.valor" label="Valor Unitario" type="number"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.cantidad" label="Cantidad" type="number"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.nit" label="NIT de la empresa"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.empresa" label="Empresa"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Guardas Cambios</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.codigo }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.descripcion }}</td>
        <td class="text-xs-left">{{ props.item.marca }}</td>
        <td class="text-xs-left">{{ props.item.valor }}</td>
        <td class="text-xs-left">{{ props.item.cantidad }}</td>
        <td class="text-xs-left">{{ props.item.valor * props.item.cantidad }}</td>
        <td class="text-xs-left">{{ props.item.nit }}</td>
        <td class="text-xs-left">{{ props.item.empresa }}</td>
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
        text: 'Codigo',
        align: 'center',
        sortable: false,
        value: 'name'
      },
      { text: 'Nombre', value: 'name' },
      { text: 'Descripción', value: 'descripcion' },
      { text: 'Marca', value: 'marca' },
      { text: 'Valor unitario', value: 'valor' },
      { text: 'Cantidad', value: 'cantidad' },
      { text: 'Total', value: 'total' },
      { text: 'NIT de la empresa', value: 'nit' },
      { text: 'Empresa', value: 'empresa' }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      codigo: '',
      cantidad: '',
      marca: '',
      descripcion: '',
      total: '',
      nit: '',
      empresa: ''
    },
    defaultItem: {
      name: '',
      codigo: '',
      cantidad: '',
      marca: '',
      descripcion: '',
      total: '',
      nit: '',
      empresa: ''
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
          name: '',
          codigo: '',
          cantidad: '',
          marca: '',
          descripcion: '',
          total: '',
          nit: '',
          empresa: ''
        }
      ]
    },
    multiplicar () {
      var total = this.editedItem.valor * this.editedItem.cantidad
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
