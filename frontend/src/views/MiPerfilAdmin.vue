<template>

<div>
    <v-layout
    align-center
    justify-space-around
    wrap
  >

    <v-avatar color="black ">
      <v-icon dark>account_circle</v-icon>
    </v-avatar>

    <v-avatar>
      <img
        src="../assets/perfil.jpg"
        alt="John"
      >
    </v-avatar>

    <v-badge overlap>
      <template v-slot:badge>
        <span>3</span>
      </template>

      <v-avatar
        color="purple red--after"
      >
        <v-icon dark>notifications</v-icon>
      </v-avatar>
    </v-badge>

    <v-avatar color="teal">
      <span class="white--text headline">C</span>
    </v-avatar>

    <v-avatar color="red">
      <span class="white--text headline">J</span>
    </v-avatar>
  </v-layout>

<v-layout
    column
    justify-center
  >
    <subheader class='subheader'> Mi perfil </subheader>

    <v-expansion-panel popout >
      <v-expansion-panel-content
        v-for="(message, i) in messages"
        :key="i"
        hide-actions
        class="grey darken-1"
      >
        <template v-slot:header>
          <v-layout
            align-center
            row
            spacer
          >
            <v-flex xs4 sm2 md1>
              <v-avatar
                size="70px"
              >
                <img
                  v-if="message.avatar"
                  src="../assets/perfil.jpg"
                  alt="Avatar"
                >
                <v-icon
                  v-else
                  :color="message.color"
                  v-text="message.icon"
                ></v-icon>
              </v-avatar>
            </v-flex>

            <v-flex sm5 md3 hidden-xs-only>
              <strong v-html="message.name"></strong>
              <span
                v-if="message.total"
                class="black--text"
              >
                &nbsp;({{ message.total }})
              </span>
            </v-flex>

            <v-flex no-wrap xs5 sm3>
              <v-chip
                v-if="message.new"
                :color="`${message.color} black`"
                class="ml-0"
                label
                small
              >
                {{ message.new }} new
              </v-chip>
              <strong v-html="message.title" ></strong>
            </v-flex>

            <v-flex
              v-if="message.excerpt"
              class="black--text"
              ellipsis
              hidden-sm-and-down
            >
              &mdash;
              {{ message.excerpt }}
            </v-flex>
             <v-flex xs4 sm2 md1>

            </v-flex>

          </v-layout>
        </template>

        <v-card>
          <v-divider></v-divider>
          <v-card-text  class="black">
            <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

            <!-- <v-container fluid grid-list-sm>
    <v-layout>
      <v-flex xs6 sm4>
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        ></v-img>
      </v-flex>

      <v-flex xs6 sm4>
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
          <div class="fill-height bottom-gradient"></div>
        </v-img>
      </v-flex>

      <v-flex xs6 sm4>
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
          <div class="fill-height repeating-gradient"></div>
        </v-img>
      </v-flex>
    </v-layout>
  </v-container> -->
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
</div>

</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  },
  data: () => ({
    messages: [
      {
        avatar: '../assets/perfil.jpg',
        name: 'Wilder Ruiz',
        title: 'Cliente',
        excerpt: 'Thank you for joining our community...'
      },
      {
        color: 'blue darken-4',
        icon: 'battery_charging_full',
        name: 'Mi rutina'
      },
      {
        color: 'green darken-4',
        icon: 'local_offer',
        name: 'Proceso',
        title: '',
        exceprt: 'New deals available, Join Today'
      },
      {

        name: 'Entrenadores ',
        title: '',
        excerpt: ''
      }
    ],
    items: [
      {
        src: '../assets/foto1.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
    ],

    lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
  })
}
</script>
<style lang='stylus'>
 .flex{
   color black
   font-size 20px
   font-family 'Lucida Sans'
 }
 .subheader{
   color black
   font-size 30px
   text-align center
   font-family 'Lucida Sans'
 }

</style>
