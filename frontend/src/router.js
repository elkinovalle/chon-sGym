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
import PlanDosMesesCliente from '@/views/PlanDosMesesCliente.vue'
import PlanTresMesesCliente from '@/views/PlanTresMesesCliente.vue'
import PlanSeisMesesCliente from '@/views/PlanSeisMesesCliente.vue'
import PlanDoceMesesCliente from '@/views/PlanDoceMesesCliente.vue'
import PlanQuinceMesesCliente from '@/views/PlanQuinceMesesCliente.vue'
import HardVitalCliente from '@/views/HardVitalCliente.vue'
import NeurofitnessCliente from '@/views/NeurofitnessCliente.vue'
import PersonalizadosCliente from '@/views/PersonalizadosCliente.vue'
import ClasesGrupalesCliente from '@/views/ClasesGrupalesCliente.vue'
import MembresiasEmpleado from '@/views/MembresiasEmpleado.vue'
import VentasEmpleado from '@/views/VentasEmpleado.vue'
import ShiatsuCliente from '@/views/ShiatsuCliente.vue'

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
    },
    {
      path: '/plan-dos-meses-cliente',
      name: 'plan-dos-meses-cliente',
      component: PlanDosMesesCliente
    },
    {
      path: '/plan-tres-meses-cliente',
      name: 'plan-tres-meses-cliente',
      component: PlanTresMesesCliente
    },
    {
      path: '/plan-seis-meses-cliente',
      name: 'plan-seis-meses-cliente',
      component: PlanSeisMesesCliente
    },
    {
      path: '/plan-doce-meses-cliente',
      name: 'plan-doce-meses-cliente',
      component: PlanDoceMesesCliente
    },
    {
      path: '/plan-quince-meses-cliente',
      name: 'plan-quince-meses-cliente',
      component: PlanQuinceMesesCliente
    },
    {
      path: '/hard-vital-cliente',
      name: 'hard-vital-cliente',
      component: HardVitalCliente
    },
    {
      path: '/neurofitness-cliente',
      name: 'neurofitness-cliente',
      component: NeurofitnessCliente
    },
    {
      path: '/personalizados-cliente',
      name: 'personalizados-cliente',
      component: PersonalizadosCliente
    },
    {
      path: '/clases-grupales-cliente',
      name: 'clases-grupales-cliente',
      component: ClasesGrupalesCliente
    },
    {
      path: '/shiatsu-cliente',
      name: 'shiatsu-cliente',
      component: ShiatsuCliente
    },
    {
      path: '/membresias-empleado',
      name: 'membresias-empleado',
      component: MembresiasEmpleado
    },
    {
      path: '/ventas-empleado',
      name: 'ventas-empleado',
      component: VentasEmpleado
    }
  ]
})
