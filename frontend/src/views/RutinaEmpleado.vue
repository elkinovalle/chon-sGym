<template>
  <div>

      <p class="nombre white--text display-1" >Registrar Rutina de Cliente</p>
      <v-layout row>
        <v-flex m10 class="flexx">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-select
              v-model="select"
              :items="Ejercicios"
              :rules="[v => !!v || 'El campo ejercicio es requerido']"
              label="Ejercicio"
              required
            ></v-select>

            <v-text-field
              v-model="Series"
              :rules="series"
              label="Series"
              required
            ></v-text-field>

            <v-text-field
              v-model="Repeticiones"
              :rules="repeticiones"
              label="Repeticiones"
              required
            ></v-text-field>

            <v-select
              v-model="dias"
              :items="Dias"
              :rules="[v => !!v || 'El campo dias es requerido']"
              label="Dia"
              required
            ></v-select>
            <v-btn
              :disabled="!valid"
              color="success"
              @click="guardar"
            >
              Guardar
            </v-btn>

            <v-btn
              color="error"
              @click="reset"
            >
              Eliminar
            </v-btn>

            <v-btn
              color="warning"
              @click="resetValidation"
            >
              Cancelar
            </v-btn>
          </v-form>
        </v-flex>
      </v-layout>
      <div class="botones">
        <v-btn color="green darken-4" class=" white--text display-1" >Registrar rutina</v-btn>
        <v-btn color="red darken-4" class=" white--text display-1" >Cancelar</v-btn>
      </div>
    <v-container>
      <v-layout row wrap>
      </v-layout>
    </v-container>
      <v-card-title>Membresias
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        ><template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.membresia }}</td>
          <td class="text-xs-right">{{ props.item.pagototal }}</td>
          <td class="text-xs-right">{{ props.item.fecha }}</td>
        </template>
          <v-alert v-slot:no-results :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
      </v-data-table>
  </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'empleado-layout')
  },
  data: () => ({
    valid: true,
    Series: '',
    series: [
      v => !!v || 'Series es Requerido'
    ],
    Repeticiones: '',
    repeticiones: [
      v => !!v || 'Repeticiones es Requerido'
    ],
    select: null,
    Ejercicios: [
      'Sentadillas',
      'Press de Banca',
      'Remo con Mancuerrnas',
      'Press Militar',
      'Flexiones',
      'Peso Muerto'
    ],
    dias: null,
    Dias: [
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado'
    ]
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
<style lang="stylus">
  .flexx{
    background-color rgba(0,0,0,0.7)
    padding 20px
    text-align center
  }
  .botones{
    text-align center
  }
  .nombre{
    text-align center
  }
</style>
