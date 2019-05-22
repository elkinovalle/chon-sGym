<template>
<div class="margin">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
    <v-layout>
      <v-flex xs4>
        <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'La clase es requerida']"
        label="Seleccionar Clase"
        required
        ></v-select>

        <v-flex>
          <v-textarea
            name="input-7-1"
            label="Descripción de la clase"
            value=""
              required
          ></v-textarea>
        </v-flex>
        <v-label>Seleccione la Fecha</v-label>
         <v-date-picker locale="es" v-model="picker" :landscape="true"></v-date-picker>
      </v-flex>
      <v-flex xs1></v-flex>
        <v-flex xs4>
        <v-dialog
          ref="dialog"
          v-model="modal2"
          :return-value.sync="time"
          persistent
          lazy
          full-width
          width="300px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="time"
              label="Hora de Inicio"
              prepend-icon="access_time"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="modal2"
            v-model="time"
            full-width
          >
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="modal2 = false">Cancelar</v-btn>
            <v-btn flat color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
          </v-time-picker>
        </v-dialog>
        <v-dialog
          ref="dialog"
          v-model="modal2"
          :return-value.sync="time"
          persistent
          lazy
          full-width
          width="300px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="time"
              label="Hora de Fin"
              prepend-icon="access_time"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="modal2"
            v-model="time"
            full-width
          >
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="modal2 = false">Cancelar</v-btn>
            <v-btn flat color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
          </v-time-picker>
        </v-dialog>
        <v-slider
            label="Capacidad"
            v-model="slider"
            thumb-label="always"
          ></v-slider>
          <v-btn
        color="success"
        @click="validate"
      >
       Crear clase
      </v-btn>

      <v-btn
        color="error"
        @click="reset"
      >
        Borrar Datos
      </v-btn>
      </v-flex>
      <v-flex xs2>
        <v-btn
        color='red darken-4 white--text'
        to="/crear-clase-nueva"
        >Agregar nueva Clase
          <br>
          <v-icon medium>add</v-icon>
        </v-btn>
      </v-flex>
      </v-layout>

    </v-form>
    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  },
  data: () => ({
    menu2: false,
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    time: null,
    modal2: false,
    picker: new Date().toISOString().substr(0, 10)
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
<style lang="stylus" scoped>
  .margin{
    margin 20px
  }
</style>
