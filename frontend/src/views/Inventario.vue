<template>
  <div>
      <v-subheader class="subheader black--text display-1 font-weight-bold" >Inventario</v-subheader>
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
    <v-toolbar flat color="red darken-4">
      <v-toolbar-title>Inventario</v-toolbar-title>
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
                  <v-text-field v-model="editedItem.name" label="codigo"></v-text-field>
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
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.producto}}</td>
        <td class="text-xs-right">{{ props.item.marca }}</td>
        <td class="text-xs-right">{{ props.item.descripcion }}</td>
        <td class="text-xs-right">{{ props.item.cantidad }}</td>
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
    codigo: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      producto: 0,
      marca: 0,
      descripcion: 0,
      cantidad: 0,
      valor_unitario: 0,
      valor_total: 0
    },
    defaultItem: {
      name: '',
      producto: 0,
      marca: 0,
      descripcion: 0,
      cantidad: 0,
      valor_unitario: 0
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
          name: 52,
          producto: 'proteina',
          marca: 0,
          descripcion: 0,
          cantidad: 0,
          valor_unitario: 0,
          valor_total: 0
        },
        {
          name: 52,
          producto: 0,
          marca: 0,
          descripcion: 0,
          cantidad: 0,
          valor_unitario: 0
        },
        {
          name: 52,
          producto: 0,
          marca: 0,
          descripcion: 0,
          cantidad: 0,
          valor_unitario: 0
        },
        {
          name: 52,
          producto: 0,
          marca: 0,
          descripcion: 0,
          cantidad: 0,
          valor_unitario: 0
        },
        {
          name: 52,
          producto: 0,
          marca: 0,
          descripcion: 0,
          cantidad: 0,
          valor_unitario: 0
        },
        {
          name: 52,
          producto: 0,
          marca: 0,
          descripcion: 0,
          cantidad: 0,
          valor_unitario: 0
        },
        {
          name: 52,
          producto: 0,
          marca: 0,
          descripcion: 0,
          cantidad: 0,
          valor_unitario: 0
        },
        {
          name: 52,
          producto: 0,
          marca: 0,
          descripcion: 0,
          cantidad: 0,
          valor_unitario: 0
        },
        {
          name: 52,
          producto: 0,
          marca: 0,
          descripcion: 0,
          cantidad: 0,
          valor_unitario: 0
        },
        {
          name: 52,
          producto: 0,
          marca: 0,
          descripcion: 0,
          cantidad: 0,
          valor_unitario: 0
        }
      ]
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
<style lang="stylus">
  .subheader{
    text-align center !important
    display 4
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
>>>>>>> d1a73602e487f2d3827a43abd15831d6626c0ebb
