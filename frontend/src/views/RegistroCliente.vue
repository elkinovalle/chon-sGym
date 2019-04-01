<template>
    <div>
  <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="success"
    >
      <span>Registration successful!</span>
      <v-icon dark>check_circle</v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-container grid-list-xl fluid>
        <v-layout wrap>
          <v-flex xs6 sm3>
            <v-text-field
              v-model="form.first"
              :rules="rules.name"
              color="blue darken-4"
              label="Nombres"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs6 sm3>
            <v-text-field
              v-model="form.last"
              :rules="rules.name"
              color="blue darken-4"
              label="Apellidos"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm5>
            <v-textarea
              color="blue darken-4"
            >
              <template v-slot:label>
                <div>
                  sexo
                </div>
              </template>
            </v-textarea>
          </v-flex>
          <v-flex xs5 sm3>
            <v-select
              v-model="form.genero"
              :items="genero"
              :rules="genero"
              color="blue darken-4"
              label="Género"
              required
            ></v-select>
          </v-flex>
          <v-layout row>
      <v-flex xs4>
        <v-subheader>Suffix for email domain</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          label="Email address"
          value="ejemplo"
          suffix="@gmail.com"
        ></v-text-field>
      </v-flex>
    </v-layout>

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
          color="primary"
          type="submit"
        >Registrar</v-btn>
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
            color="purple"
            @click="terms = false"
          >Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="conditions" width="70%">
      <v-card>
        <v-card-title class="title">Condiciones</v-card-title>
        <v-card-text v-for="n in 5" :key="n">
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="purple"
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
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  data () {
    const defaultForm = Object.freeze({
      first: '',
      last: '',
      bio: '',
      favoriteAnimal: '',
      age: null,
      terms: false
    })

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        age: [
          val => val < 10 || `I don't believe you!`
        ],
        animal: [val => (val || '').length > 0 || 'This field is required'],
        name: [val => (val || '').length > 0 || 'This field is required']
      },

      conditions: false,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
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
          this.form.favoriteAnimal &&
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
