<template>
  <div>
   <v-subheader class="subheader black--text display-1 font-weight-bold " >Registro Compras</v-subheader>
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.codigo"
              box
              label="Número de serial o codigo"
              clearable
            ></v-text-field>
          </v-flex>

           <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.nombre"
              box
              label="Nombre del Producto"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.marca"
              box
              label= "Marca"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.descripcion"
              box
              label="Descripción"
              clearable
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.cantidad"
              box
              label="Cantidad"
              clearable
              type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm3>
            <v-text-field
              v-model="editedItem.valor_unitario"
              box
              label="valor_unitario"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm3>
            <v-text-field
              v-model="editedItem.total"
              box
              label="Total"
              clearable
            ></v-text-field>
          </v-flex>

          <v-btn color="green darken-4" class=" white--text " @click="save" >Agregar Producto</v-btn>
          <v-btn color="red darken-4" class=" white--text " >Cancelar</v-btn>

           </v-layout>
            </v-container>
    </v-form>
    <v-toolbar flat color="red darken-4">
      <v-toolbar-title class="titulo2">Registro de Compras</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.codigo" label="codigo"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.producto" label="producto"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.marca" label="marca"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.descripcion" label="descripcion"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.cantidad" label="cantidad"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
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
        <td class="text-xs-right">{{ props.item.codigo}}</td>
        <td class="text-xs-right">{{ props.item.nombre}}</td>
        <td class="text-xs-right">{{ props.item.marca }}</td>
        <td class="text-xs-right">{{ props.item.descripcion }}</td>
        <td class="text-xs-right">{{ props.item.cantidad }}</td>
        <td class="text-xs-right">{{ props.item.valor_unitario}}</td>
        <td class="text-xs-right">{{ props.item.total}}</td>
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
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import api from '@/plugins/service'
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'codigo ',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'producto', value: 'producto' },
      { text: 'marca', value: 'marca' },
      { text: 'descripcion', value: 'descripcion' },
      { text: 'cantidad', value: 'cantidad' },
      { text: 'valor_unitario', value: 'valor_unitario' },
      { text: 'valor_total', value: 'valor_total', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      codigo: '',
      producto: '',
      marca: '',
      descripcion: '',
      cantidad: '',
      valor_unitario: '',
      valor_total: ''
    },
    defaultItem: {
      codigo: '',
      producto: '',
      marca: '',
      descripcion: '',
      cantidad: '',
      valor_unitario: '',
      valor_total: ''
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
   methods: { async getClasses () {
    const res = await api.get('/class')
  },
  resetForm () {
    this.$refs.form.reset()
  },
  async save () {
    const res = await api.post('/class',
      {
        classNew: {
          codigo:this.editedItem.codigo,
          nombre: this.editedItem.titulo,
          marca: this.editedItem.marca,
          descripcion: this.editedItem.descripcion,
          cantidad:this.editedItem.cantidad,
          valor_unitario:this.editedItem.valor_unitario
        }
      })
    this.snackbar = true
    this.resetForm()
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
.titulo2{
  color white !important
}
</style>
