<template>
    <div>
       <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar flat>
          <v-btn icon>
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>Albumes</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-subheader></v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="i in 8" :key="i" xs3>
              <img :src="`https://randomuser.me/api/portraits/men/${i + 50}.jpg`" class="image" alt="lorem" width="500%" height="200%">
            </v-flex>
          </v-layout>
        </v-container>
        <v-subheader></v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="i in 8" :key="i" xs3>
              <img :src="`https://randomuser.me/api/portraits/women/${i + 45}.jpg`" class="image" alt="lorem" width="200%" height="200%">
            </v-flex>
          </v-layout>
        </v-container>
        <v-footer class="mt-9"></v-footer>
      </v-card>
    </v-flex>
  </v-layout>
  <material-card class="v-card-profile">
                <v-card-text class="text-xs-center">
                    <v-form name="formulario" method="post" enctype="form-data">
                        <input type="file" name="adjunto" accept=".png, .jpg" multiple>
                    </v-form>
                </v-card-text>
            </material-card>
    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  }
}
</script>
<style lang="stylus">
</style>
