<template>
<div>
    
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
    <v-layout row wrap>
      <v-flex xs6>
        <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'La clase es requerida']"
        label="Seleccionar Clase"
        required
        ></v-select>
        
        <v-date-picker v-model="picker" :landscape="true"></v-date-picker>
      </v-flex>
      <v-flex>
        <v-flex xs5>
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
      </v-flex>
        <v-flex xs6>
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
      </v-flex>
        <v-flex xs9>
          <v-slider
            label="Capacidad"
            v-model="slider"
            thumb-label="always"
          ></v-slider>
        </v-flex>
        
      </v-flex>
      
      <v-flex>
        <v-btn
        color='red darken-4 white--text' 
        >Agregar nueva Clase 
          <br>
          <v-icon medium>add</v-icon>
        </v-btn>
      </v-flex>
      
      </v-layout>
      <v-btn
        :disabled="!valid"
        color="success"
        @click="validate"
      >
        Validate
      </v-btn>
  
      <v-btn
        color="error"
        @click="reset"
      >
        Reset Form
      </v-btn>
  
      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </v-form>
    </div>
</template>
<script>
export default {
  created() {
    this.$store.commit('SET_LAYOUT','admin-layout')
  },
  data: () => ({
    
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
      time: null,
      modal2: false,
      picker: new Date().toISOString().substr(0, 10),
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>