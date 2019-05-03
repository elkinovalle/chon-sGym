<template>
  <div>
    <v-card flat>
      <br><br>
    <h1 class="text-xs-center black--text display-1">REGÍSTRATE CON <strong>NOSOTROS</strong></h1><br>
    </v-card>
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
           <v-flex d-flex xs12 sm12 md1>
           </v-flex>
          <v-flex d-flex xs12 sm12 md10>
            <h1 class="text-xs-left black--text headline font-italic">CREA TU <strong>CUENTA</strong></h1><br>
          </v-flex>
          <v-flex d-flex xs12 sm12 md1>
           </v-flex>
           <v-flex d-flex xs12 sm12 md1>
           </v-flex>
          <v-flex xs4 sm4>
            <v-text-field
              v-model="form.first"
              :rules="rules.name"
              color="blue darken-4"
              label="Nombres"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs4 sm4 offset-xs1>
            <v-text-field
              v-model="form.last"
              :rules="rules.name"
              color="blue darken-4"
              label="Apellidos"
              required
            ></v-text-field>
          </v-flex>
          <v-flex d-flex xs12 sm12 md2>
           </v-flex>
           <v-flex d-flex xs12 sm12 md1>
           </v-flex>
          <v-flex xs4 sm4>
            <v-text-field
              v-model="form.cedula"
              color="blue darken-4"
              label="Cédula"
            ></v-text-field>
          </v-flex>
          <v-flex xs4 sm4 offset-xs1>
        <v-text-field
           v-model="form.nickname"
           color="blue darken-4"
           :rules="rules.name"
           label="Nombre de usuario"
        ></v-text-field>
      </v-flex>
<v-flex d-flex xs12 sm12 md2>
           </v-flex>
           <v-flex d-flex xs12 sm12 md1>
           </v-flex>
          <v-flex xs4 sm4>
            <v-text-field
              v-model="form.password"
              :rules="rules.name"
              color="blue darken-4"
              label="Contraseña"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs4 sm4 offset-xs1>
        <v-text-field
           v-model="form.password"
           color="blue darken-4"
           :rules="rules.name"
           label="Confirmar contraseña"
        ></v-text-field>
      </v-flex>
          <v-flex d-flex xs12 sm12 md2>
           </v-flex>
           <v-flex d-flex xs12 sm12 md1>
           </v-flex>
          <v-flex xs4 sm4>
            <v-text-field
           v-model="form.email"
           color="blue darken-4"
           :rules="rules.email"
           label="Correo electrónico"
        ></v-text-field>
          </v-flex>
          <v-flex xs4 sm4 offset-xs1>
            <v-select
              v-model="form.gender"
              :items="gender"
              :rules="rules.gender"
              color="blue darken-4"
              label="Género"
              required
            ></v-select>
          </v-flex>
          <v-flex d-flex xs12 sm12 md2>
           </v-flex>
           <v-flex d-flex xs12 sm12 md1>
           </v-flex>
          <v-flex xs4 sm4>
            <v-text-field
              v-model="form.direccion"
              color="blue darken-4"
              label="Dirección"
            ></v-text-field>
          </v-flex>
          <v-flex xs4 sm4 offset-xs1>
      <v-slider
              v-model="form.age"
              :rules="rules.age"
              color="blue darken-4"
              label="Edad"
              hint="Sé honesto"
              min="1"
              max="100"
              thumb-label
            ></v-slider>
      </v-flex>
      <v-flex d-flex xs12 sm12 md2>
           </v-flex>
           <v-flex d-flex xs12 sm12 md1>
           </v-flex>
          <v-flex xs4 sm4>
            <v-text-field
              v-model="form.telefono"
              :rules="rules.name"
              color="blue darken-4"
              label="Teléfono"
              mask="phone"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs4 sm4 offset-xs1>
        <v-text-field
           v-model="form.ciudad"
           color="blue darken-4"
           label="Ciudad"
        ></v-text-field>
      </v-flex>
      <v-flex d-flex xs12 sm12 md5>
           </v-flex>
          <v-flex xs4>
               <v-checkbox
          v-model="agreement"
          :rules="[rules.required]"
          color="blue darken-3"
      >
        <template v-slot:label>
          Acepto los&nbsp;
          <a href="#" @click.stop.prevent="dialog = true">Términos</a>
          &nbsp;y&nbsp;
          <a href="#" @click.stop.prevent="dialog = true">Condiciones</a>*
        </template>
      </v-checkbox>
          </v-flex>
          <v-flex d-flex xs12 sm12 md3>
           </v-flex>
        </v-layout>
      </v-container>
      <v-layout>
      <v-flex d-flex xs12 sm12 md3>
           </v-flex>
           <v-flex d-flex xs12 sm12 md6>
      <v-card-actions>
        <v-btn class="font-weight-black title font-italic" flat @click="resetForm">Cancelar</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!formIsValid"
          flat
          color="blue darken-4"
          type="submit"
          class="font-weight-black title font-italic"
        >Registrarse</v-btn>
      </v-card-actions>
       </v-flex>
       <v-flex d-flex xs12 sm12 md3>
           </v-flex>
           </v-layout>
    </v-form>
    <v-dialog
      v-model="dialog"
      absolute
      max-width="800"
      persistent>
       <v-card>
        <v-card-title class="headline grey lighten-3">Políticas de privacidad</v-card-title>
        <v-card-text>
          <span class="text-xs black--text subheading justify">La protección y el buen manejo de la información personal de sus afiliados son muy importantes para el Gimnasio Chon's Gym, por cuanto las mismas le permiten atender de mejor manera las necesidades que ellos tienen, así como cumplir con las obligaciones a su cargo. Es por ello que el Gimnasio Chon's Gym ha diseñado políticas y procedimientos que en conjunto con la presente autorización permiten hacer uso de sus datos personales conforme a la ley. Así, lo invitamos a leer cuidadosamente el siguiente texto, mediante el cual autoriza el tratamiento de su información personal.</span>
        <p></p>
        <span class="text-xs black--text subheading justify">1. En relación con mis Datos Personales: Mediante este documento, en mi calidad de titular de la información o representante legal del mismo, autorizo al Gimnasio Chon's Gym a dar tratamiento a mis datos personales para: </span>
        <p></p>
        <span class="text-xs black--text subheading justify">a) El desarrollo de su objeto social y de la relación contractual que nos vincula, lo que supone el ejercicio de sus derechos y deberes dentro de los que están, sin limitarse a ellos, la atención de mis solicitudes, la generación de estados de cuenta, la realización de actividades de cobranza, entre otros. </span>
        <p></p>
        <span class="text-xs black--text subheading justify">b) La administración de los productos o servicios comercializados a través del Gimnasio Chon's Gym de los que soy titular </span>
        <p></p>
        <span class="text-xs black--text subheading justify">c) La estructuración de ofertas comerciales y la remisión de información comercial sobre productos y/o servicios a través de los canales o medios que el Gimnasio Chon's Gym establezca para tal fin.  </span>
        <p></p>
        <span class="text-xs black--text subheading justify">d) La adopción de medidas tendientes a la prevención de actividades ilícitas. </span>
        <p></p>
        <span class="text-xs black--text subheading justify">La presente autorización se hace extensiva a quien represente los derechos del Gimnasio Chon's Gym, a quien éste contrate para el ejercicio de los mismos o a quien éste ceda sus derechos, sus obligaciones o su posición contractual a cualquier título, en relación con los productos o servicios de los que soy titular. Así mismo, a las Entidades que forman parte de la Organización y a los terceros con quien el Gimnasio Chon's Gym o esas Entidades establezcan alianzas comerciales, a partir de las cuales se ofrezcan productos o servicios que puedan ser de su interés. </span>
        <p></p>
        <span class="text-xs black--text subheading justify">Esta autorización permanecerá vigente, hasta tanto sea revocada y podrá ser revocada en los eventos previstos en la ley, y siempre y cuando no exista ningún tipo de relación con el Gimnasio Chon's Gym o no se encuentre vigente algún producto o servicio derivado de esta autorización.</span>
        <p></p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            flat
            @click="agreement = false, dialog = false"
          >
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="white--text"
            color="blue darken-3"
            @click="agreement = true, dialog = false"
          >
            Acepto
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-card>
</div>
</template>
<script>
import api from '@/plugins/service'
export default {
  data () {
    const defaultForm = Object.freeze({
      first: '',
      last: '',
      email: '',
      gender: '',
      nickname: '',
      password: '',
      cedula: '',
      direccion: '',
      telefono: '',
      ciudad: '',
      isLoading: false,
      gender: '',
      age: null,
      dialog: false
    })

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        age: [
          val => val >= 15 || `No puedes ingresar!`
        ],
        gender: [val => (val || '').length > 0 || 'Este campo es requerido'],
        name: [val => (val || '').length > 0 || 'Este campo es requerido'],
        email: [v => (v || '').match(/@/) || 'Por favor ingrese su e-mail']
      },
      gender: ['Masculino', 'Femenino'],
      snackbar: false,
      agreement: false,
      dialog: false,
      defaultForm
    }
  },

  computed: {
    formIsValid () {
      return (
        this.form.email &&
          this.form.password &&
          this.form.dialog
      )
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
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

<style lang="stylus" scoped>

</style>
