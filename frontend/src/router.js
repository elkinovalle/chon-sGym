import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login.vue'
import GestionClases from '@/views/GestionClases.vue'
import MiPerfilAdmin from '@/views/MiPerfilAdmin.vue'
import Inventario from '@/views/Inventario.vue'
import RegistroCompras from '@/views/RegistroCompras.vue'
import Proveedores from '@/views/Proveedores.vue'
import PlanesCliente from '@/views/PlanesCliente.vue'
import PlanUnMesCliente from '@/views/PlanUnMesCliente.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/gestion-clases',
      name: 'gestion-clases',
      component: GestionClases
    },
    {
      path: '/mi-perfil-admin',
      name: 'mi-perfil-admin',
      component: MiPerfilAdmin
    },
    {
      path: '/inventario',
      name: 'inventario',
      component: Inventario
    },
    {
      path: '/registro-compras',
      name: 'registro-compras',
      component: RegistroCompras
    },
    {
      path: '/proveedores',
      name: 'proveedores',
      component: Proveedores
    },
    {
      path: '/planes-cliente',
      name: 'planes-cliente',
      component: PlanesCliente
    },
    {
      path: '/plan-un-mes-cliente',
      name: 'plan-un-mes-cliente',
      component: PlanUnMesCliente
    }
  ]
})
