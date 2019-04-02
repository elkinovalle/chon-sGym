import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login.vue'
import MiPerfilAdmin from '@/views/MiPerfilAdmin.vue'
import Inventario from '@/views/Inventario.vue'
import RegistroCompras from '@/views/RegistroCompras.vue'
import RegistroEmpleados from '@/views/RegistroEmpleados.vue'
import GestionClases from '@/views/GestionClases.vue'
import Proveedores from '@/views/Proveedores.vue'
import RegistroVentas from '@/views/RegistroVentas.vue'
import Novedades from '@/views/Novedades.vue'
import Tips from '@/views/Tips.vue'
import InstalacionesAdmin from '@/views/InstalacionesAdmin.vue'
import Reportes from '@/views/Reportes.vue'
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
import ShiatsuCliente from '@/views/ShiatsuCliente.vue'
import SpinningCliente from '@/views/SpinningCliente.vue'
import AerobicosCliente from '@/views/AerobicosCliente.vue'
import CrossfitCliente from '@/views/CrossfitCliente.vue'
import EntrenamientoCliente from '@/views/EntrenamientoCliente.vue'
import CardioCliente from '@/views/CardioCliente.vue'
import RumbaCliente from '@/views/RumbaCliente.vue'
import HardCliente from '@/views/HardCliente.vue'
import RegistroCliente from '@/views/RegistroCliente.vue'
import MultiterrenoCliente from '@/views/MultiterrenoCliente.vue'
import LoNuevoCliente from '@/views/LoNuevoCliente.vue'
import NoticiasCliente from '@/views/NoticiasCliente.vue'
import NoticiasBellezaCliente from '@/views/NoticiasBellezaCliente.vue'
import ClaveCliente from '@/views/ClaveCliente.vue'
import PerderGrasaCliente from '@/views/PerderGrasaCliente.vue'
import MissUniversoCliente from '@/views/MissUniversoCliente.vue'
import MembresiasEmpleado from '@/views/MembresiasEmpleado.vue'
import VentasEmpleado from '@/views/VentasEmpleado.vue'
import RutinaEmpleado from '@/views/RutinaEmpleado.vue'
import ValoracionEmpleado from '@/views/ValoracionEmpleado.vue'

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
      path: '/registro-empleados',
      name: 'registro-empleados',
      component: RegistroEmpleados
    },
    {
      path: '/gestion-clases',
      name: 'gestion-clases',
      component: GestionClases
    },
    {
      path: '/proveedores',
      name: 'proveedores',
      component: Proveedores
    },
    {
      path: '/registro-ventas',
      name: 'registro-ventas',
      component: RegistroVentas
    },
    {
      path: '/novedades',
      name: 'novedades',
      component: Novedades
    },
    {
      path: '/tips',
      name: 'tips',
      component: Tips
    },
    {
      path: '/instalaciones',
      name: 'instalaciones',
      component: InstalacionesAdmin
    },
    {
      path: '/reportes',
      name: 'reportes',
      component: Reportes
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
      path: '/spinning-cliente',
      name: 'spinning-cliente',
      component: SpinningCliente
    },
    {
      path: '/aerobicos-cliente',
      name: 'aerobicos-cliente',
      component: AerobicosCliente
    },
    {
      path: '/crossfit-cliente',
      name: 'crossfit-cliente',
      component: CrossfitCliente
    },
    {
      path: '/entrenamiento-cliente',
      name: 'entrenamiento-cliente',
      component: EntrenamientoCliente
    },
    {
      path: '/cardio-cliente',
      name: 'cardio-cliente',
      component: CardioCliente
    },
    {
      path: '/hard-cliente',
      name: 'hard-cliente',
      component: HardCliente
    },
    {
      path: '/rumba-cliente',
      name: 'rumba-cliente',
      component: RumbaCliente
    },
    {
      path: '/multiterreno-cliente',
      name: 'multiterreno-cliente',
      component: MultiterrenoCliente
    },
    {
      path: '/registro-cliente',
      name: 'registro-cliente',
      component: RegistroCliente
    },
    {
      path: '/lo-nuevo-cliente',
      name: 'lo-nuevo-cliente',
      component: LoNuevoCliente
    },
    {
      path: '/noticias-cliente',
      name: 'noticias-cliente',
      component: NoticiasCliente
    },
    {
      path: '/noticias-belleza-cliente',
      name: 'noticias-belleza-cliente',
      component: NoticiasBellezaCliente
    },
    {
      path: '/clave-cliente',
      name: 'clave-cliente',
      component: ClaveCliente
    },
    {
      path: '/perder-grasa-cliente',
      name: 'perder-grasa-cliente',
      component: PerderGrasaCliente
    },
    {
      path: '/miss-universo-cliente',
      name: 'miss-universo-cliente',
      component: MissUniversoCliente
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
    },
    {
      path: '/rutina-empleado',
      name: 'rutina-empleado',
      component: RutinaEmpleado
    },
    {
      path: '/valoracion-empleado',
      name: 'valoracion-empleado',
      component: ValoracionEmpleado
    }
  ]
})
