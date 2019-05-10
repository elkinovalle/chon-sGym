<template>
  <div>
    <v-subheader class="subheader black--text display-1 font-weight-bold"  >Novedades</v-subheader>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-text-field
          v-model="message1"
          box
          label="Titulo de la noticia"
          clearable
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm12>
        <v-textarea
          box
          label="Contenido"
          value=""
        ></v-textarea>
      </v-flex>
      <v-flex xs4>
        <v-form name="formulario" method="post" enctype="form-data"
        ><v-chip @click='pickFile' v-model='imageName' class="label"
        >Seleccione Una Imagen
        <!-- <v-btn  @click='pickFile' v-model='imageName'  type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked"
              color="#000B3E"
              class="boton"
            ><v-icon center dark>cloud_upload</v-icon>
        </v-btn> -->
        </v-chip>
        </v-form>
      </v-flex>
      <v-flex xs4 >
        <v-chip class="label"
        label
        >Seleccione Un Video
        </v-chip>
        <v-btn
              color="#000B3E"
              class="boton"
              @click="loader = 'loading3'"
            ><v-icon center dark>cloud_upload</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs4 >
        <v-chip class="label"
        label
        >Seleccione Un Link
        </v-chip>
        <v-btn
              color="#000B3E"
              class="boton"
              @click="loader = 'loading3'"
            ><v-icon center dark>cloud_upload</v-icon>
        </v-btn>
      </v-flex>
      <v-btn
        color="#000B3E"
        class=" white--text "
      >Publicar Noticia</v-btn>                     <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">

      <v-btn
        color="red darken-4"
        @click="loader = 'loading3'"
        class=" white--text "
      >Cancelar</v-btn>
    </v-layout>
    <v-card>
      <v-card-title>
        Novedades
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
          <td class="text-xs-right">{{ props.item.titulo }}</td>
          <td class="text-xs-right">{{ props.item.contenido }}</td>
          <td class="text-xs-right">{{ props.item.imagen }}</td>
          <td class="text-xs-right">{{ props.item.video }}</td>
          <td class="text-xs-right">{{ props.item.link }}</td>
        </template>
        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
          Tu busqueda para "{{ search }}" no encontró resultados.
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
  
  methods: {
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
    }
  },
  resetForm () {
    this.form = Object.assign({}, this.defaultForm)
    this.$refs.form.reset()
  },
  submit () {
    this.snackbar = true
    this.resetForm()
  },
  data () {
    
    
    return {
      search: '',
      headers: [
        {
          align: 'left',
          sortable: false
        },
        { text: 'Titulo', value: 'titulo' },
        { text: 'Contenido', value: 'contenido' },
        { text: 'Imagen', value: 'imagen' },
        { text: 'Video', value: 'video' },
        { text: 'Link', value: 'link' }
      ],
      desserts: [
        {
          titulo: 'bienestar',
          contenido: 'para estar saludable',
          imagen: 'C:UserAprendizPicture1',
          video: 'C:UserAprendizVideo1'
        },
        {
          titulo: 'bienestar',
          contenido: 'para estar saludable',
          imagen: 'C:UserAprendizPicture2',
          video: 'C:UserAprendizVideo2'
        },
        {
          titulo: 'bienestar',
          contenido: 'para estar saludable',
          imagen: 'C:UserAprendizPicture3',
          video: 'C:UserAprendizVideo3'
        },
        {
          titulo: 'bienestar',
          contenido: 'para estar saludable',
          imagen: 'C:UserAprendizPicture4',
          video: 'C:UserAprendizVideo4'
        }
      ]
    },
    {imgUrl: 'data:image/png;base64,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',
    imageName: ''}
  }
}
</script>
<style lang="stylus" scoped>
  .boton{
    margin-left -10px
    height 31.8px
  }
  .label{
    font-size 15px
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
