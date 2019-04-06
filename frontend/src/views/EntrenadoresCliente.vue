<template>
    <div>
<v-container>
          <v-layout>
          <v-flex d-flex xs12 sm6 md8>
          <h1 class="text-xs black--text display-2 font-italic"><strong>Conoce nuestros entrenadores</strong></h1>
          </v-flex>
          <v-flex d-flex xs12 sm6 md4>
          <v-card flat>
          <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
                </v-card>
          </v-flex>
               </v-layout>
    </v-container>

    <v-container>
          <v-layout>
          <v-flex d-flex xs12 sm6 md8>
          <h1 class="text-xs black--text display-2 font-italic"><strong>Conoce nuestros entrenadores</strong></h1>
          </v-flex>
          <v-flex d-flex xs12 sm6 md4>
          <v-card flat>
          <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
                </v-card>
          </v-flex>
               </v-layout>
    </v-container>
    </div>
</template>
