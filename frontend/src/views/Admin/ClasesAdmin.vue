<template>
    <div>
      <br><br>
   <v-subheader class="subheader black--text display-1 font-weight-bold ">Clases</v-subheader>
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.titulo"
              box
              label="Nombre de la clase"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-combobox
              v-model="editedItem.tipo"
              :items="items"
              box
              label="Tipo de ejercicio"
              clearable
            ></v-combobox>
          </v-flex>

          <v-flex xs12 sm4>
            <v-textarea
              v-model="editedItem.descripcion"
              box
              label="Descripción de la clase"
              clearable
              height="200px"
            ></v-textarea>
          </v-flex>

           <v-flex xs12 sm4>
          <v-textarea
              v-model="editedItem.beneficios"
              box
              label="Beneficios"
              clearable
              height="200px"
            ></v-textarea>
          </v-flex>

             <v-flex xs12 sm4>
         <v-card
      class="mx-auto"
      max-width="600"
    >
      <v-toolbar
        card
        dense
      >
        <v-toolbar-title>
          <span class="subheading">CAPACIDAD</span>
        </v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-layout
          justify-space-between
          mb-3
        >
          <v-flex text-xs-left>
            <span
              class="display-2 font-weight-light"
              v-text="bpm"
            ></span>
            <span class="subheading font-weight-light mr-1"> Personas</span>
            <v-fade-transition>
              <v-avatar
                v-if="isPlaying"
                :color="color"
                :style="{
                  animationDuration: animationDuration
                }"
                class="mb-1 v-avatar--metronome"
                size="12"
              ></v-avatar>
            </v-fade-transition>
          </v-flex>
          <v-flex text-xs-right>
            <v-btn
              :color="color"
              dark
              depressed
              fab
              @click="toggle"
              class="esfera"
            >
              <v-icon>
                {{ isPlaying ? 'mdi-pause' : 'mdi-play' }}
              </v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-slider
          v-model="bpm"
          :color="color"
          always-dirty
          min="1"
          max="35"
        >
          <template v-slot:prepend>
            <v-icon
              :color="color"
              @click="decrement"
            >
              mdi-minus
            </v-icon>
          </template>

          <template v-slot:append>
            <v-icon
              :color="color"
              @click="increment"
            >
              mdi-plus
            </v-icon>
          </template>
        </v-slider>
      </v-card-text>
    </v-card>
          </v-flex>

           <v-flex xs12 sm6>
            <material-card class="v-card-profile">
              <v-avatar class="text--center mx-auto d-block" >
                <img class="imagenq" :src="imgUrl" >
              </v-avatar>
              <v-card-text class="margen text-xs-center">
                  <v-form name="formulario" method="post" enctype="form-data">
                    <v-btn class="boton" @click='pickFile' v-model='imageName' prepend-icon='attach_file'>Selecciona imagen de la clase</v-btn>
                      <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
                  </v-form>
              </v-card-text>
            </material-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-btn color="green darken-4" class="botones white--text headline" @click="save" >Agregar Clase</v-btn>
          <v-btn color="red darken-4" class="botones white--text headline" >Cancelar</v-btn>
        </v-flex>
        </v-layout>
      </v-container>
    </v-form>
     <v-toolbar flat color="red darken-4">
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
                  <v-text-field v-model="editedItem.titulo" label="Título de la clase"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.tipo" label="Tipo de ejercicio"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.descripcion" label="Descripción"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.beneficios" label="Beneficios"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="bpm" label="Capacidad"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Guardar cambios</v-btn>
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
        <td class="text-xs-center">{{ props.item.titulo }}</td>
        <td class="text-xs-left">{{ props.item.tipo }}</td>
        <td class="text-xs-left">{{ props.item.descripcion }}</td>
        <td class="text-xs-left">{{ props.item.beneficios }}</td>
        <td class="text-xs-left">{{ props.item.bpm }}</td>
        <td class="text-xs-left">{{ props.item.imgUrl }}</td>
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
import api from '@/plugins/service'
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
    this.getPlans()
  },
  data: () => ({
    dialog: false,
    imgUrl: 'data:image/png;base64,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',
    imageName: '',
    items: [
      'Spinning',
      'Aérobicos',
      'Jaula'
    ],
    headers: [
      {
        text: 'Titulo',
        align: 'center',
        sortable: false,
        value: 'name'
      },
      { text: 'Tipo de ejercicio', value: 'tipo' },
      { text: 'Descripción', value: 'descripcion' },
      { text: 'Beneficios', value: 'beneficios' },
      { text: 'Capacidad', value: 'bpm' },
      { text: 'Imagen', value: 'imgUrl' }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      tipo: '',
      descripcion: '',
      beneficios: '',
      titulo: '',
      bpm: '',
      imgUrl: ''
    },
    defaultItem: {
      tipo: '',
      descripcion: '',
      beneficios: '',
      titulo: '',
      bpm: '',
      imgUrl: ''

    },
    bpm: 0,
    interval: null,
    isPlaying: false

  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Editar Item'
    },
    color () {
      if (this.bpm < 6) return 'blue'
      if (this.bpm < 12) return 'teal'
      if (this.bpm < 18) return 'green'
      if (this.bpm < 24) return 'amber'
      if (this.bpm < 30) return 'orange'
      return 'red'
    },
    animationDuration () {
      return `${60 / this.bpm}s`
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: { async getPlans () {
    const res = await api.get('/plan')
  },
  resetForm () {
    this.$refs.form.reset()
  },
  async submit () {
    const res = await api.post('/plan',
      {
        planNew: {
          nombre: this.editedItem.titulo,
          descripcion: this.editedItem.descripcion,
          tipo: this.editedItem.tipo,
          beneficio: this.editedItem.beneficios
        }
      })
    this.snackbar = true
    this.resetForm()
  },
  pickFile () {
    this.$refs.image.click()
  },
  onFilePicked (e) {
    const files = e.target.files
    if (files[0] !== undefined) {
      this.imageName = files[0].name
      if (this.imageName.lastIndexOf('.') <= 0) {
        return
      }
      const fr = new FileReader()
      fr.readAsDataURL(files[0])
      fr.addEventListener('load', () => {
        this.imgUrl = fr.result
        // this.imageFile = files[0] // this is an image file that can be sent to server...
      })
    } else {
      this.imageName = ''
      // this.imageFile = ''
      this.imageUrl = ''
    }
  },
  initialize () {
    this.desserts = [
      {
        tipo: '',
        descripcion: '',
        titulo: '',
        beneficios: '',
        bpm: '',
        imgUrl: ''
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
    confirm('Estás seguro que deseas elimiar este item?') && this.desserts.splice(index, 1)
  },

  close () {
    this.dialog = false
    setTimeout(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    }, 300)
  },
  decrement () {
    this.bpm--
  },
  increment () {
    this.bpm++
  },
  toggle () {
    this.isPlaying = !this.isPlaying
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
@keyframes metronome-example {
  from {
    transform: scale(.5);
  }

  to {
    transform: scale(1);
  }
}

.v-avatar--metronome {
  animation-name: metronome-example;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.container.fill-height {
    background-color: white;
}
.imagenq{
  width 150px !important
  height 150px !important
  margin 0px 0px 0px -100px
  border-radius 0%
}
.boton{
  margin 110px 110px 0px 0px
}
.botones{
  height 70px
  width 300px
  margin 10px 0px 30px 150px
}
.esfera{
  margin-top -5px
  height 50px
  width 50px
}
</style>
