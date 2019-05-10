<template>
  <v-container grid-list-xl>
    <v-layout
      wrap
      justify-space-between
    >
      <v-flex
        xs12
        md4
      >
        <v-form ref="form">
          <v-text-field
            v-model="password"
            :rules="rules"
            label=""
          ></v-text-field>
        </v-form>
      </v-flex>

      <v-flex
        xs12
        md6
      >
        <v-text-field
          v-model="passwordConfirmado"
          label=""
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    allowSpaces: false,
    passwordConfirmado: '',
    password: ''
  }),

  computed: {
    rules () {
      const rules = []
      if (!this.allowSpaces) {
        const rule =
            v => (v || '').indexOf(' ') < 0 ||
              'No spaces are allowed'
        rules.push(rule)
      }

      if (this.passwordConfirmado) {
        const rule = v => (!!v && v) === this.passwordConfirmado || 'Values do not match'
        rules.push(rule)
      }
      return rules
    }
  },
  watch: {
    passwordConfirmado: 'validateField',
    password: 'validateField'
  },
  methods: {
    validateField () {
      this.$refs.form.validate()
    }
  }
}
</script>
