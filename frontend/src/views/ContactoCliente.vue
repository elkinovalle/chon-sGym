<template>
<div>

    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm1>
          </v-flex>
          <v-flex xs12 sm2>
          </v-flex>
          <v-flex xs12 sm6>
            <v-card class="carta">
              <v-flex xs12 sm12>
            <v-text-field
              v-model="message1"
              box
              label="Nombres*"
              clearable
            ></v-text-field>
            <v-text-field
              v-model="message2"
              box
              label="Apellidos*"
              clearable
            ></v-text-field>
              </v-flex>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6>

          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message3"
              box
              label= "No. Documento*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message4"
              box
              label="Teléfono*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message5"
              box
              label="Dirección*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message6"
              box
              label="Correo Electronico*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message7"
              box
              label="Cargo*"
              clearable
            ></v-text-field>
          </v-flex>

            <v-flex xs6>
              <v-combobox
                v-model="select"
                :items="items"
              ></v-combobox>
            </v-flex>

        </v-layout>
      </v-container>
    </v-form>
</div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false
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
.carta{
  padding 40px!important
}
</style>
