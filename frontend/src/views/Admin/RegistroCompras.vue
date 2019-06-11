<template>
    <div>
   <v-subheader class="subheader black--text display-1 font-weight-bold ">Compras</v-subheader>
     <v-form ref="form">
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
          <v-flex xs12 sm12>
          <v-btn
              color="green darken-4"
              class="botones white--text headline"
              @click="save"
            >{{ btnText }}</v-btn>
           <v-btn
              color="red darken-4"
              class="botones white--text headline"
              @click="resetForm"
            >Cancelar</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
     <v-card>
       <v-card-title>
      <v-toolbar-title class="titulo2">Registro de Ventas</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
       <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar"
          hide-details
          single-line
          color="accent"
        ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="products"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.nit }}</td>
        <td class="text-xs-center">{{ props.item.empresa }}</td>
        <td class="text-xs-center">{{ props.item.serial }}</td>
        <td class="text-xs-center">{{ props.item.nombre }}</td>
        <td class="text-xs-center">{{ props.item.marca }}</td>
        <td class="text-xs-center">{{ props.item.descripcion }}</td>
        <td class="text-xs-center">{{ props.item.valorUnitario }}</td>
        <td class="text-xs-center">{{ props.item.cantidad }}</td>
        <td class="text-xs-left">{{ props.item.valorUnitario * props.item.cantidad }}</td>
        <td class="justify-center layout px-0">
           <v-btn
            class="font-weight-black white--text body-2"
            color="blue darken-1"
            @click="editItem(props.item)"
          >Editar</v-btn>
          <v-btn
            class="font-weight-black white--text body-2"
            color="red darken-4"
            @click="deleteItem(props.item)"
          >Eliminar</v-btn>
        </td>
      </template>
      <v-alert v-slot:no-results :value="true" color="error" icon="warning">
         Tu busqueda para "{{ search }}" no se encontró
        </v-alert>
    </v-data-table>
     </v-card>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import uuid from 'uuid/v4'
import Swal from 'sweetalert2'
import api from '@/plugins/service'
export default {

  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
    this.getProducts()
  },
  data: () => ({
    dialog: false,
    btnText: 'Agregar Compra',
    headers: [
      {
        text: 'nit',
        align: 'center',
        sortable: false,
        value: 'nit'
      },
      { text: 'Empresa', value: 'empresa' },
      { text: 'codigo', value: 'serial' },
      { text: 'Nombre', value: 'nombre' },
      { text: 'Marca', value: 'marca' },
      { text: 'Descripción', value: 'descripcion' },
      { text: 'Valor unitario', value: 'valorUnitario' },
      { text: 'Cantidad', value: 'cantidad' },
      { text: 'Total', value: 'valorTotal' }
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
   
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    initialize () {
      this.desserts = [

      ]
    },
    async getProducts () {
      const res = await api.get('/product')
    },
    async resetForm () {
      this.$refs.form.resetForm()
    },
    async save () {
      const res = await api.post('/product',
        {
          productNew: {
            nit: this.editedItem.nit,
            empresa: this.editedItem.empresa,
            serial: this.editedItem.codigo,
            nombre: this.editedItem.name,
            cantidad: this.editedItem.cantidad,
            descripcion: this.editedItem.descripcion,
            marca: this.editedItem.marca,
            valorUnitario: this.editedItem.valor
          }
        })
      this.snackbar = true
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.resetForm()

      this.close()
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
    }
  }

}
</script>
<style lang="stylus" scoped>
div.v-card__title{
    background-color darkred
}
.container.fill-height {
    background-color: white;
}
.titulo2{
  color white !important
}

.boton {
  margin: 110px 110px 0px 0px;
}

.botones {
  height: 70px;
  width: 300px;
  margin: 10px 0px 30px 150px;
}
</style>
