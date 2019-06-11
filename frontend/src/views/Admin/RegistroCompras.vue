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
              v-model="editedItem.codigo"
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
          <v-btn color="green darken-4" class=" white--text title" @click="save" >{{buttonText}}</v-btn>
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
      :items="products"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.nit }}</td>
        <td class="text-xs-center">{{ props.item.empresa }}</td>
        <td class="text-xs-center">{{ props.item.codigo }}</td>
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.cantidad }}</td>
        <td class="text-xs-center">{{ props.item.descripcion }}</td>
        <td class="text-xs-center">{{ props.item.marca }}</td>
        <td class="text-xs-center">{{ props.item.valorUnitario }}</td>
        <td class="justify-center layout px-0">
          <v-btn
            class="font-weight-black white--text body-2"
            color="blue darken-1"
            @click="editItem(props.item)"
          >Editar</v-btn>
          <v-btn
            class="font-weight-black white--text body-2"
            color="blue darken-1"
            @click="deleteItem(props.item)"
          >Eliminar</v-btn>
        </td>
      </template>
    </v-data-table>

    </div>
</template>
<script>
import api from '@/plugins/service'
import Swal from 'sweetalert2'
import {mapState} from 'vuex'
export default {

  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
    this.getProducts()
  },
  data () {
    return {
    dialog: false,
    buttonText: 'Registrar producto',
    headers: [
      {
        text: 'nit',
        align: 'center',
        sortable: false,
        value: 'nit'
      },
      { text: 'Empresa', value: 'empresa' },
      { text: 'codigo', value: 'codigo' },
      { text: 'Nombre', value: 'name' },
      { text: 'Cantidad', value: 'cantidad' },
      { text: 'Descripción', value: 'descripcion' },
      { text: 'Marca', value: 'marca' },
      { text: 'Valor unitario', value: 'valor' }
    ],
    editedIndex: -1,
    editedItem: {
      nit: '',
      empresa: '',
      serial: '',
      nombre: '',
      cantidad: '',
      descripcion: '',
      marca: '',
      valorUnitario: ''
    },
    defaultItem: {
     nit: '',
      empresa: '',
      serial: '',
      nombre: '',
      cantidad: '',
      descripcion: '',
      marca: '',
      valorUnitario: ''
    }
   }
  },

  computed: {
    ...mapState(['products'])
  },
  methods: {
    async getProducts () {
      const { data: products } = await api.get('/product')
      this.$store.commit('SET_PRODUCTS', products)
      console.log(products);
      
    },
     resetForm () {
      this.editedItem = {}
    },
    async save () {
      const alert = await Swal.fire({
        title: 'se ha registrado el producto',
        timer: 3000
      })
      if (this.buttonText === 'Registrar producto') {
        const { data: product } = await api.post('/product',
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
      let clonProduct = [...this.products]
        clonProduct.push(product)
        this.$store.commit('SET_PRODUCTS', clonProduct)
        this.snackbar = true
        this.resetForm()
      } else {
       const { data: product } = await api.put(`/product/${this.editedItem.uuid}`,{
         productUpdate:{
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
       let clonProduct = [...this.products]
        clonProduct[this.editedIndex] = product
        this.$store.commit('SET_PRODUCT', clonProduct)
        this.buttonText = 'Registrar producto'
        this.resetForm()
      }
    },
    initialize () {
      this.products = [
        {
          nit: '',
          empresa: '',
          serial: '',
          nombre: '',
          cantidad: '',
          descripcion: '',
          marca: '',
          valorUnitario: ''
        }
      ]
    },
    editItem (item) {
      this.buttonTexr = 'Actualizar'
      this.editedIndex = this.products.indexOf(item)
      this.editeditem = Object.assign({}, item)
      this.dialog = true
    },
     async deleteItem (item) {
      const sw = await Swal.fire({
        title: 'Estas seguro?',
        text: `Eliminaras el registro del producto ${item.nombres}`,
        type: 'question',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar'
      })
      if (sw.value) {
        try {
          const { data: product } = await api.delete(`/product/${item.uuid}`)
          Swal.fire(
            'Eliminado!',
            'El registro se ha eliminado',
            'success'
          )
          let clonProduct = [...this.products]
          const index = this.product.indexOf(item)
          clonProduct.splice(index, 1)
          this.$store.commit('SET_PRODUCT', clonProduct)
        } catch (error) {
          console.error(error)
        }
      }
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
.container.fill-height {
    background-color: white;
}
.titulo2{
  color white !important
}

</style>
