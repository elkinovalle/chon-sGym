<template>
    <div>
      <br><br>
   <v-subheader class="subheader black--text display-1 font-weight-bold ">Planes</v-subheader>
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.titulo"
              box
              label="Plan"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.precio"
              box
              label="Precio"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-textarea
              v-model="editedItem.descripcion"
              box
              label="Descripción del plan"
              clearable
            ></v-textarea>
          </v-flex>

           <v-flex xs12 sm6>
          <v-textarea
              v-model="editedItem.beneficios"
              box
              label="Beneficios"
              clearable
            ></v-textarea>
          </v-flex>
           <v-flex xs12 sm6>
            <material-card class="v-card-profile">
              <v-avatar class="text--center mx-auto d-block" >
                <img class="imagenq" :src="imgUrl" >
              </v-avatar>
              <v-card-text class="margen text-xs-center">
                  <v-form name="formulario" method="post" enctype="form-data">
                    <v-btn class="boton" @click='pickFile' v-model='imageName' prepend-icon='attach_file'>Selecciona imagen del plan</v-btn>
                      <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
                  </v-form>
              </v-card-text>
            </material-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-btn color="green darken-4" class="botones white--text headline" @click="save" >Agregar Plan</v-btn>
          <v-btn color="red darken-4" class="botones white--text headline" >Cancelar</v-btn>
        </v-flex>
        </v-layout>
      </v-container>
    </v-form>
     <v-toolbar flat color="white">
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.titulo" label="Plan"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.precio" label="Precio"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.descripcion" label="Descripción"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.beneficios" label="Cedula"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.titulo }}</td>
        <td class="text-xs-left">{{ props.item.precio }}</td>
        <td class="text-xs-left">{{ props.item.descripcion }}</td>
        <td class="text-xs-left">{{ props.item.beneficios }}</td>
        <td class="text-xs-left">{{ props.item.imgUrl }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>
    </div>
</template>
<script>
export default {
    created() {
        this.$store.commit('SET_LAYOUT', 'admin-layout')
    },
}
</script>
