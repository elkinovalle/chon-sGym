<template>
<div id="app">
  <v-app id="inspire">
    <div>
      <v-toolbar flat color="white">
        <v-toolbar-title>Tabla de contenido</v-toolbar-title>
        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Agregar Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md3>
                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md3>
                    <v-text-field v-model="editedItem.codigo" label="Código"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md3>
                    <v-text-field v-model="editedItem.nombre" label="Nombre"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md3>
                    <v-text-field v-model="editedItem.marca" label="Marca"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md3>
                    <v-text-field v-model="editedItem.descripcion" label="Descripción"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md3>
                    <v-text-field v-model="editedItem.cantidad" label="Cantidad"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" flat @click="save">Guardar</v-btn>
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
          <td class="text-xs-right">{{ props.item.codigo }}</td>
          <td class="text-xs-right">{{ props.item.nombre }}</td>
          <td class="text-xs-right">{{ props.item.marca }}</td>
          <td class="text-xs-right">{{ props.item.descripcion }}</td>
          <td class="text-xs-right">{{ props.item.cantidad }}</td>
          <td class="justify-center layout px-0">
            <v-icon
              small
              class="mr-2"
              @click="editItem(props.item)"
            >
              Editar
            </v-icon>
            <v-icon
              small
              @click="deleteItem(props.item)"
            >
              Borrar
            </v-icon>
          </td>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reiniciar</v-btn>
        </template>
      </v-data-table>
    </div>
  </v-app>
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
        text: '',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Código', value: 'codigo' },
      { text: 'Nombre', value: 'nombre' },
      { text: 'Marca', value: 'marca' },
      { text: 'Descripción', value: 'descripcion' },
      { text: 'Cantidad', value: 'cantidad' },
      { text: 'Opciones', value: 'name', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      codigo: 0,
      nombre: 0,
      marca: 0,
      descripcion: 0,
      cantidad: 0
    },
    defaultItem: {
      codigo: 0,
      nombre: 0,
      marca: 0,
      descripcion: 0,
      cantidad: 0

    }
  }),

  computed: {
    formTitle () {
      //return this.editedIndex = 1 ? 'Nuevo Item' : 'Editar Item'
    }
  },
 
  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          codigo: 1001,
          nombre: 'Megaplex',
          marca: 'Megaplex',
          descripcion: '10 Lbs Vainilla',
          cantidad: '25 unidades'
        },
        {
          codigo: 1002,
          nombre: 'Omega 3',
          marca: 'Megaplex',
          descripcion: '120 Tabletas',
          cantidad: '35 unidades'
        },
        {
          codigo: 1003,
          nombre: 'Testo Ultra',
          marca: 'Megaplex',
          descripcion: '1.5 Lbs ',
          cantidad: '50 unidades'
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
      confirm('Esta seguro de eliminar este item?') && this.desserts.splice(index, 1)
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
