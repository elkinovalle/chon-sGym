<template>
  <div>
    <v-subheader class="subheader black--text display-1 font-weight-bold" >Tips</v-subheader>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-text-field
          v-model="message1"
          box
          label="Titulo del Tip"
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
        <v-chip class="label"
        label
        >Seleccione Una Imagen
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
        @click="loader = 'loading3'"
        class=" white--text"
      >Publicar Tips</v-btn>
      <v-btn
        color="red darken-4"
        @click="loader = 'loading3'"
        class=" white--text "
      >Cancelar</v-btn>
    </v-layout>
    <v-card>
      <v-card-title>
       Tips
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
    }
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
