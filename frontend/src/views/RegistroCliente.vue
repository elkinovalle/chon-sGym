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
        v-model="form.email"
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
      <v-img :src="img1"/>
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
import api from '@/plugins/service'
import img1 from '@/assets/3meses.jpg'
export default {
  data () {
    const defaultForm = Object.freeze({
      first: '',
      last: '',
      email: '',
      gender: '',
      age: null,
      terms: false
    })

    return {
      form: Object.assign({}, defaultForm),
      img1: img1,
      rules: {
        age: [
          val => val >= 15 || `No puedes ingresar!`
        ],
        gender: [val => (val || '').length > 0 || 'Este campo es requerido'],
        name: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      gender: ['Masculino', 'Femenino'],
      conditions: false,
      content: 'chon',
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
          this.form.email &&
          this.form.adress &&
          this.form.terms
      )
    }
  },
  created() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      const res = await api.get('/user')
      
    },
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    async submit () {
      console.log()
      const res = await api.post('/user', {
        userNew: {
          cedula: '1100960489',
          nombre: this.form.first,
          apellido: this.form.last,
          rol: 'Usuarios',
          email: this.form.email,
          genero: 'm',
          contraseña: '1234'
        }
      })
      this.snackbar = true
      this.resetForm()
    }
  }
}
</script>
