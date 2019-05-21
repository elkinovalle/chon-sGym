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
    data () {
      return {
        bottomNav: 3
      }
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
