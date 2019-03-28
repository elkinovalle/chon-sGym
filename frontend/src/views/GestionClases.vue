<template>
  <!-- <div>
    <v-btn color="#B50000" class="white--text display-1">
      <v-icon left>add</v-icon>
      Crear
    </v-btn>
    <v-btn color="#B50000" class="white--text display-1">
      <v-icon left>check</v-icon>
      Mis Clases
    </v-btn>
    <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar Clase"
          single-line
          hide-details
    ></v-text-field>
    <v-layout row>
      <v-flex xs4 sm4 >
        <v-date-picker v-model="picker" color="#6D0404"></v-date-picker>
      </v-flex>
    </v-layout>
  </div>-->
  <div id="app">
  <v-app id="inspire">
    <v-layout>
      <v-flex>
        <v-sheet height="600" width="900">
          <v-calendar
            ref="calendar"
            :now="today"
            :value="today"
            color="primary"
            type="week"
          >
            <template v-slot:dayHeadere="{ date }">
              <template v-for="event in eventsMap[date]">
                <div
                  v-if="!event.time"
                  :key="event.title"
                  class="my-event"
                  @click="open(event)"
                  v-html="event.title"
                ></div>
              </template>
            </template>
            <template v-slot:dayBody="{ date, timeToY, minutesToPixels }">
              <template v-for="event in eventsMap[date]">
                <div
                  v-if="event.time"
                  :key="event.title"
                  :style="{ top: timeToY(event.time) + 'px', height: minutesToPixels(event.duration) + 'px' }"
                  class="my-event with-time"
                  @click="open(event)"
                  v-html="event.title"
                ></div>
              </template>
            </template>
          </v-calendar>
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-app>
</div>
</template>

<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  },
  // data: () => ({
  //   picker: new Date().toISOString().substr(0, 10)
  // })
  data: () => ({
    today: '2019-01-08',
    events: [
      {
        title: 'Weekly Meeting',
        date: '2019-01-07',
        time: '09:00',
        duration: 45
      },
      {
        title: 'Thomas\' Birthday',
        date: '2019-01-10'
      },
      {
        title: 'Mash Potatoes',
        date: '2019-01-09',
        time: '12:30',
        duration: 180
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
  mounted () {
    this.$refs.calendar.scrollToTime('08:00')
  },
  methods: {
    open (event) {
      alert(event.title)
    }
  }
}
</script>

<style lang="stylus">
  // .v-text-field.v-text-field--enclosed {
  //   --v-primary-base #6D0404
  // }
  // .theme--dark.v-text-field--box > .v-input__control > .v-input__slot {
  //   background rgba(0,0,0,0.3)
  // }
  // .theme--dark.v-input:not(.v-input--is-disabled) input, .theme--dark.v-input:not(.v-input--is-disabled) textarea {
  //   color black
  //   font-size 20px
  // }
  // .v-input{
  //   --v-primary-base darkblue
  // }
  .my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;

  &.with-time {
    position: absolute;
    right: 4px;
    margin-right: 0px;
  }
}
</style>
