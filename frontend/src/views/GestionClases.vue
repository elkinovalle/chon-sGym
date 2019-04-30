<template>
  <div>
    <v-subheader class="subheader black--text display-1 font-weight-bold">Gestión de Clases</v-subheader>
    <v-flex>
      <v-sheet height="500">
        <v-calendar
          :now="today"
          :value="today"
          color="primary"
        >
        <template v-slot:day="{ date }">
          <template v-for="event in eventsMap[date]">
            <v-menu
              :key="event.title"
              v-model="event.open"
              full-width
              offset-x
            >
          <template v-slot:activator="{ on }">
            <div
            v-if="!event.time"
            v-ripple
            class="my-event"
            v-on="on"
            v-html="event.title"
          ></div>
          </template>
          <v-card
            color="black"
            min-width="350px"
            flat
          >
            <v-toolbar
              color="blue"
              dark
            >
              <v-btn icon>
                <v-icon>edit</v-icon>
              </v-btn>
              <v-toolbar-title v-html="event.title"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-title primary-title>
              <span v-html="event.details"></span>
            </v-card-title>
            <v-card-actions>
              <v-btn
                flat
                color="secondary"
              >
              cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
          </template>
        </template>
            </v-calendar>
          </v-sheet>
        </v-flex>
  </div>
</template>
<<<<<<< HEAD
=======

>>>>>>> 6e6b8a625c0b6051844c39f4c59e4dca3cc9b765
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  },
  data: () => ({
    today: '2019-01-08',
    events: [
      {
        title: 'Vacation',
        details: 'Going to the beach!',
        date: '2018-12-30',
        open: false
      },
      {
        title: 'Vacation',
        details: 'Going to the beach!',
        date: '2018-12-31',
        open: false
      },
      {
        title: 'Vacation',
        details: 'Going to the beach!',
        date: '2019-01-01',
        open: false
      },
      {
        title: 'Meeting',
        details: 'Spending time on how we do not have enough time',
        date: '2019-01-07',
        open: false
      },
      {
        title: '30th Birthday',
        details: 'Celebrate responsibly',
        date: '2019-01-03',
        open: false
      },
      {
        title: 'New Year',
        details: 'Eat chocolate until you pass out',
        date: '2019-01-01',
        open: false
      },
      {
        title: 'Conference',
        details: 'Mute myself the whole time and wonder why I am on this call',
        date: '2019-01-21',
        open: false
      },
      {
        title: 'Hackathon',
        details: 'Code like there is no tommorrow',
        date: '2019-02-01',
        open: false
      }
    ]
  }),
  computed: {
    eventsMap () {
      const map = {}
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
      return map
    }
  },
  methods: {
    open (event) {
      alert(event.title)
    }
  }

}
</script>
<style lang="stylus">
  .my-event {
    width 700px
    white-space nowrap
    border-radius 2px
    background-color darkblue
    color white
    border 1px solid white
    font-size 12px
    padding 3px
    cursor pointer
  }
  .flex{
    width 100%
  }
</style>
