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
      <span>Cambios guardados!</span>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit"
      v-model="form"
      >

      <v-container grid-list-xl fluid>
        <v-layout wrap>
          <v-flex sm5>
          <v-flex sm11>

            <v-text-field
              box
              v-model="form.first"
              :rules="rules.name"
              color="blue darken-4"
              label="Nombres"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs4 sm11>
            <v-text-field
              v-model="form.last"
              :rules="rules.name"
              color="blue darken-4"
              box
              label="Apellidos"
              required
            ></v-text-field>
          </v-flex>
          <v-flex sm11>
            <v-text-field
              v-model="form.cc"
              box
              :rules="rules.name"
              color="blue darken-4"
              label="CC/TI"
              required
            ></v-text-field>
          </v-flex>
          <v-flex sm11>
            <v-text-field
              v-model="form.gender"
              :rules="rules.gender"
              box
              color="blue darken-4"
              label="Teléfono"
              mask="phone"
              required
            ></v-text-field>
          </v-flex>
          <v-flex sm11>
            <v-text-field
              box
              v-model="form.adress"
              :rules="rules.name"
              color="blue darken-4"
              label="Dirección"
              required
            ></v-text-field>
          </v-flex>
          <v-flex sm11>
        <v-text-field
        box
        v-model="form.email"
        color="blue darken-4"
        :rules="rules.name"
          label="Correo electrónico"
          type="email"
        ></v-text-field>
      </v-flex>
      </v-flex>
      <div class="portada">
      <img class="edit" src="../assets/perfilGym.jpg" alt="">
      <img class="logo" src="../assets/iconocam.jpg" alt="">
      <h1 class="centro">
      <v-flex sm6 class="py-2">
            <v-btn-toggle v-model="text">
              <v-btn flat value="left" color="white" class="blue darken-4">
                Fotos
              </v-btn>
              <v-btn flat value="center" color="white" class="blue darken-4">
                Dieta
              </v-btn>
              <v-btn flat value="right" color="white" class="blue darken-4">
                Más
              </v-btn>
            </v-btn-toggle>
          </v-flex>
          </h1>
      </div>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn @click="resetForm">Cancelar</v-btn>
        <v-spacer></v-spacer>
        <v-btn
        class="white--text"
          :enabled="!formIsValid"
          color="blue darken-4"
          type="submit"
        >Guardar cambios</v-btn>
      </v-card-actions>
    </v-form>
    </v-card>
    <p></p><br><hr>
       <p></p><br>
       <h2 class="Text">Terminamos este mes con un super regalo.
PLAN TRIMESTRE pagas 1 entran 2, debes cumplir tus propositos ahora, no lo dejes pasar</h2>
<v-spacer></v-spacer>
<v-btn flat color="blue darken-4" class="right">Ver planes</v-btn>
</div>
</template>
<script>
export default {
  data () {
    const defaultForm = Object.freeze({
      first: '',
      last: '',
      id: '',
      email: '',
      gender: '',
      age: null

    })

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        email: v => (v || '').match(/@/) || 'Por favor ingrese su e-mail',
        gender: [val => (val || '').length > 0 || 'Este campo es requerido'],
        name: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      snackbar: false,
      defaultForm
    }
  },

  computed: {
    formIsValid () {
      return (
        this.form.first &&
          this.form.last &&
          this.form.id &&
          this.form.gender &&
          this.form.email &&
          this.form.adress &&
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

<style lang="stylus">

img.edit{
  width 200px !important
  height 200px
  margin 10px 20px
  border solid 1px white
  }
  img.logo{
  width 45px !important
  height 50px
  margin 5px -70px
  }
  div.portada{
    background-image: url('../assets/fotoportada.jpg')
    margin 30px 70px
    height 250px
    width 500px !important
  }
  h1.centro{
    margin 50px 140px
  }
  h2.Text{
    margin-left 20px
  }

</style>
