<template>
    <div>
        <h1 class="grey"> Mis tareas </h1>
        <material-card class="v-card-profile">
              <v-avatar class=" text--center mx-auto d-block" >
                <img class="imagenq" :src="imgUrl" >
              </v-avatar>
            </material-card>
<v-card height="500px" width="1000px">
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute
      dark
      shift
    >
      <v-btn dark>
        <span>Video</span>
        <v-icon>ondemand_video</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Music</span>
        <v-icon>music_note</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Book</span>
        <v-icon>book</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Image</span>
        <v-icon>image</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
    </div>
</template>
<script>
export default {
<<<<<<< HEAD
    data () {
      return {
        bottomNav: 3
      }
=======
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  },
  data: () => ({
    imgUrl: 'data:image/png;base64,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',
    imageName: ''

  }),
  methods: {
    pickFile () {
      this.$refs.image.click()
>>>>>>> 15b214a482e40bd3ec54d8902cbe9c8e6c8e254a
    },

    computed: {
      color () {
        switch (this.bottomNav) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
        }
      }
    }
  }
</script>
<style>
</style>
