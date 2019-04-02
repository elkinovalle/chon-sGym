<template>
  <div>
     <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="blue darken-4"
    >
      <span>Registro exitoso!</span>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-container grid-list-xl fluid>
        <v-layout wrap>
          <v-flex xs4 sm4>
            <v-text-field
              v-model="form.first"
              :rules="rules.name"
              color="blue darken-4"
              label="Nombres"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs4 sm4>
            <v-text-field
              v-model="form.last"
              :rules="rules.name"
              color="blue darken-4"
              label="Apellidos"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs4 sm4>
            <v-slider
              v-model="form.age"
              :rules="rules.age"
              color="blue darken-4"
              label="Edad"
              hint="ser honesto"
              min="1"
              max="100"
              thumb-label
            ></v-slider>
          </v-flex>
          <v-flex xs4 sm4>
            <v-select
              v-model="form.gender"
              :items="gender"
              :rules="rules.gender"
              color="blue darken-4"
              label="Género"
              required
            ></v-select>
          </v-flex>
          <v-flex xs4 sm4>
            <v-text-field
              v-model="form.adress"
              :rules="rules.name"
              color="blue darken-4"
              label="Dirección"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs4>
        <v-text-field
        color="blue darken-4"
        :rules="rules.name"
          label="Correo electrónico"
        ></v-text-field>
      </v-flex>
          <v-flex xs12>
            <v-checkbox
              v-model="form.terms"
              color="blue darken-4"
            >
              <template v-slot:label>
                <div @click.stop="">
                  Aceptas los
                  <a href="javascript:;" @click.stop="terms = true">términos</a>
                  y
                  <a href="javascript:;" @click.stop="conditions = true">condiciones?</a>
                </div>
              </template>
            </v-checkbox>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn flat @click="resetForm">Cancelar</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!formIsValid"
          flat
          color="blue darken-4"
          type="submit"
        >Registrarse</v-btn>
      </v-card-actions>
    </v-form>
    <v-dialog v-model="terms" width="70%">
      <v-card>
        <v-card-title class="title">Términos</v-card-title>
        <v-card-text v-for="n in 5" :key="n">
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="blue darken-4"
            @click="terms = false"
          >Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="conditions" width="70%">
      <v-card>
        <v-card-title class="title">Conditions</v-card-title>
        <v-card-text v-for="n in 5" :key="n">
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="blue darken-4"
            @click="conditions = false"
          >Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-card>
</div>
</template>
<script>
export default {
  data () {
    const defaultForm = Object.freeze({
      first: '',
      last: '',
      gender: '',
      adress: '',
      age: null,
      terms: false
    })

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        age: [
          val => val >= 15 || `No puedes ingresar!`
        ],
        gender: [val => (val || '').length > 0 || 'Este campo es requerido'],
        name: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      gender: ['Masculino', 'Femenino'],
      conditions: false,
      content: `chon es gay`,
      snackbar: false,
      terms: false,
      defaultForm
    }
  },

  computed: {
    formIsValid () {
      return (
        this.form.first &&
          this.form.last &&
          this.form.gender &&
          this.form.terms
      )
    }
  },

  methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit () {
      this.snackbar = true
      this.resetForm()
    }
  }
}
</script>
