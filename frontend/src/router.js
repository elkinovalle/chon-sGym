import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Cliente/Login.vue'
import EmailAdmin from '@/views/Admin/EmailAdmin.vue'
import Inventario from '@/views/Admin/Inventario.vue'
import RegistroCompras from '@/views/Admin/RegistroCompras.vue'
import RegistroEmpleados from '@/views/RegistroEmpleados.vue'
import GestionClases from '@/views/Admin/GestionClases.vue'
import ProveedoresAdmin from '@/views/Admin/ProveedoresAdmin.vue'
import RegistroVentas from '@/views/Admin/RegistroVentas.vue'
import Novedades from '@/views/Admin/Novedades.vue'
import Tips from '@/views/Admin/Tips.vue'
import InstalacionesAdmin from '@/views/Admin/InstalacionesAdmin.vue'
import Reportes from '@/views/Admin/Reportes.vue'
import PlanesCliente from '@/views/Cliente/PlanesCliente.vue'
import PlanTresMesesCliente from '@/views/Cliente/PlanTresMesesCliente.vue'
import PlanSeisMesesCliente from '@/views/Cliente/PlanSeisMesesCliente.vue'
import PlanDoceMesesCliente from '@/views/Cliente/PlanDoceMesesCliente.vue'
import PlanQuinceMesesCliente from '@/views/Cliente/PlanQuinceMesesCliente.vue'
import HardVitalCliente from '@/views/Cliente/HardVitalCliente.vue'
import NeurofitnessCliente from '@/views/Cliente/NeurofitnessCliente.vue'
import PersonalizadosCliente from '@/views/Cleinte/PersonalizadosCliente.vue'
import ClasesGrupalesCliente from '@/views/Cleinte/ClasesGrupalesCliente.vue'
import ShiatsuCliente from '@/views/Cliente/ShiatsuCliente.vue'
import SpinningCliente from '@/views/Cliente/SpinningCliente.vue'
import AerobicosCliente from '@/views/Cliente/AerobicosCliente.vue'
import CrossfitCliente from '@/views/Cliente/CrossfitCliente.vue'
import EntrenamientoCliente from '@/views/Cliente/EntrenamientoCliente.vue'
import CardioCliente from '@/views/Cliente/CardioCliente.vue'
import RumbaCliente from '@/views/Cliente/RumbaCliente.vue'
import HardCliente from '@/views/Cliente/HardCliente.vue'
import RegistroCliente from '@/views/Cliente/RegistroCliente.vue'
import MultiterrenoCliente from '@/views/Cliente/MultiterrenoCliente.vue'
import LoNuevoCliente from '@/views/Cliente/LoNuevoCliente.vue'
import NoticiasCliente from '@/views/Cliente/NoticiasCliente.vue'
import NoticiasBellezaCliente from '@/views/Cliente/NoticiasBellezaCliente.vue'
import ClaveCliente from '@/views/Cliente/ClaveCliente.vue'
import PerderGrasaCliente from '@/views/Cliente/PerderGrasaCliente.vue'
import MissUniversoCliente from '@/views/Cliente/MissUniversoCliente.vue'
import MenteEquilibrioCliente from '@/views/Cliente/MenteEquilibrioCliente.vue'
import VidaSaludableCliente from '@/views/Cliente/VidaSaludableCliente.vue'
import PilatesCliente from '@/views/Cliente/PilatesCliente.vue'
import MotivarteCliente from '@/views/Cliente/MotivarteCliente.vue'
import BienestarCliente from '@/views/Cliente/BienestarCliente.vue'
import CorrerCliente from '@/views/Cliente/CorrerCliente.vue'
import FisicoCliente from '@/views/Cliente/FisicoCliente.vue'
import NutricionistaCliente from '@/views/Cliente/NutricionistaCliente.vue'
import ActividadFisicaCliente from '@/views/Cliente/ActividadFisicaCliente.vue'
import MasaMuscularCliente from '@/views/Cliente/MasaMuscularCliente.vue'
import HiitCliente from '@/views/Cliente/HiitCliente.vue'
import NuevasRutinasCliente from '@/views/Cliente/NuevasRutinasCliente.vue'
import TipsCliente from '@/views/Cliente/TipsCliente.vue'
import EjercicioFisicoCliente from '@/views/ClienteEjercicioFisicoCliente.vue'
import HidratacionCliente from '@/views/Cliente/HidratacionCliente.vue'
import CarbohidratosCliente from '@/views/Cliente/CarbohidratosCliente.vue'
import MinutosCliente from '@/views/Cliente/MinutosCliente.vue'
import DuermeBienCliente from '@/views/Cliente/DuermeBienCliente.vue'
import CalentamientoCliente from '@/views/Cliente/CalentamientoCliente.vue'
import EstiramientoCliente from '@/views/ClienteEstiramientoCliente.vue'
import PracticarCliente from '@/views/Cliente/PracticarCliente.vue'
import ConsejosCliente from '@/views/Cliente/ConsejosCliente.vue'
import MiPerfilCliente from '@/views/Cliente/MiPerfilCliente.vue'
import EntrenadoresCliente from '@/views/Cliente/EntrenadoresCliente.vue'
import EntrenadorUnoCliente from '@/views/Cliente/EntrenadorUnoCliente.vue'
import EntrenadorDosCliente from '@/views/Cliente/EntrenadorDosCliente.vue'
import EntrenadorTresCliente from '@/views/Cliente/EntrenadorTresCliente.vue'
import EntrenadorCuatroCliente from '@/views/Cliente/EntrenadorCuatroCliente.vue'
import EntrenadorCincoCliente from '@/views/Cliente/EntrenadorCincoCliente.vue'
import EntrenadorSeisCliente from '@/views/Cliente/EntrenadorSeisCliente.vue'
import EntrenadorSieteCliente from '@/views/Cliente/EntrenadorSieteCliente.vue'
import EntrenadorOchoCliente from '@/views/Cliente/EntrenadorOchoCliente.vue'
import MiRutinaCliente from '@/views/Cliente/MiRutinaCliente.vue'
import MiProgresoCliente from '@/views/Cliente/MiProgresoCliente.vue'
import MisReservasCliente from '@/views/Cliente/MisReservasCliente.vue'
import MiDietaCliente from '@/views/Cliente/MiDietaCliente.vue'
import HorariosCliente from '@/views/Cliente/HorariosCliente.vue'
import ContactoCliente from '@/views/Cliente/ContactoCliente.vue'
import UnMesCliente from '@/views/Cliente/UnMesCliente.vue'
import DosMesesCliente from '@/views/Cliente/DosMesesCliente.vue'
import InstalacionesCliente from '@/views/Cliente/InstalacionesCliente.vue'
import TrabajaConNosotrosCliente from '@/views/Cliente/TrabajaConNosotrosCliente.vue'
import MembresiasEmpleado from '@/views/Empleado/MembresiasEmpleado.vue'
import VentasEmpleado from '@/views/Empleado/VentasEmpleado.vue'
import RutinaEmpleado from '@/views/Empleado/RutinaEmpleado.vue'
import ValoracionEmpleado from '@/views/Empleado/ValoracionEmpleado.vue'
import EditarPerfilCliente from '@/views/Cliente/EditarPerfilCliente.vue'
import MiPerfilEmpleado from '@/views/Empleado/MiPerfilEmpleado.vue'
import DietaEmpleado from '@/views/Empleado/DietaEmpleado.vue'
import ReciboMembresia from '@/views/Empleado/ReciboMembresia.vue'
import ProgresoCliente from '@/views/Cliente/ProgresoCliente.vue'
import EnsayoCliente from '@/views/Cliente/EnsayoCliente.vue'
import EditarPerfilAdmin from '@/views/Admin/EditarPerfilAdmin.vue'
import FotosAdmin from '@/views/Admin/FotosAdmin.vue'
import TareasAdmin from '@/views/Admin/TareasAdmin.vue'
import PlanesAdmin from '@/views/Admin/PlanesAdmin.vue'
import ClasesAdmin from '@/views/Admin/ClasesAdmin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/email-admin',
      name: 'email-admin',
      component: EmailAdmin
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
      path: '/proveedores-admin',
      name: 'proveedores-admin',
      component: ProveedoresAdmin
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
      path: '/instalacionesAdmin',
      name: 'instalacionesAdmin',
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
      path: '/un-mes-cliente',
      name: 'un-mes-cliente',
      component: UnMesCliente
    },
    {
      path: '/ensayo-cliente',
      name: 'ensayo-cliente',
      component: EnsayoCliente
    },
    {
      path: '/dos-meses-cliente',
      name: 'dos-meses-cliente',
      component: DosMesesCliente
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
      path: '/mente-equilibrio-cliente',
      name: 'mente-equilibrio-cliente',
      component: MenteEquilibrioCliente
    },
    {
      path: '/miss-universo-cliente',
      name: 'miss-universo-cliente',
      component: MissUniversoCliente
    },
    {
      path: '/motivarte-cliente',
      name: 'motivarte-cliente',
      component: MotivarteCliente
    },
    {
      path: '/vida-saludable-cliente',
      name: 'vida-saludable-cliente',
      component: VidaSaludableCliente
    },
    {
      path: '/pilates-cliente',
      name: 'pilates-cliente',
      component: PilatesCliente
    },
    {
      path: '/bienestar-cliente',
      name: 'bienestar-cliente',
      component: BienestarCliente
    },
    {
      path: '/correr-cliente',
      name: 'correr-cliente',
      component: CorrerCliente
    },
    {
      path: '/fisico-cliente',
      name: 'fisico-cliente',
      component: FisicoCliente
    },
    {
      path: '/nutricionista-cliente',
      name: 'nutricionista-cliente',
      component: NutricionistaCliente
    },
    {
      path: '/nuevas-rutinas-cliente',
      name: 'nuevas-rutinas-cliente',
      component: NuevasRutinasCliente
    },
    {
      path: '/actividad-fisica-cliente',
      name: 'actividad-fisica-cliente',
      component: ActividadFisicaCliente
    },
    {
      path: '/masa-muscular-cliente',
      name: 'masa-muscular-cliente',
      component: MasaMuscularCliente
    },
    {
      path: '/hiit-cliente',
      name: 'hiit-cliente',
      component: HiitCliente
    },
    {
      path: '/tips-cliente',
      name: 'tips-cliente',
      component: TipsCliente
    },
    {
      path: '/ejercicio-fisico-cliente',
      name: 'ejercicio-fisico-cliente',
      component: EjercicioFisicoCliente
    },
    {
      path: '/hidratacion-cliente',
      name: 'hidratacion-cliente',
      component: HidratacionCliente
    },
    {
      path: '/minutos-cliente',
      name: 'minutos-cliente',
      component: MinutosCliente
    },
    {
      path: '/carbohidratos-cliente',
      name: 'carbohidratos-cliente',
      component: CarbohidratosCliente
    },
    {
      path: '/duerme-bien-cliente',
      name: 'duerme-bien-cliente',
      component: DuermeBienCliente
    },
    {
      path: '/calentamiento-cliente',
      name: 'calentamiento-cliente',
      component: CalentamientoCliente
    },
    {
      path: '/estiramiento-cliente',
      name: 'estiramiento-cliente',
      component: EstiramientoCliente
    },
    {
      path: '/practicar-cliente',
      name: 'practicar-cliente',
      component: PracticarCliente
    },
    {
      path: '/consejos-cliente',
      name: 'consejos-cliente',
      component: ConsejosCliente
    },
    {
      path: '/contacto-cliente',
      name: 'contacto-cliente',
      component: ContactoCliente
    },
    {
      path: '/mi-perfil-cliente',
      name: 'mi-perfil-cliente',
      component: MiPerfilCliente
    },
    {
      path: '/mi-progreso-cliente',
      name: 'mi-progreso-cliente',
      component: MiProgresoCliente
    },
    {
      path: '/mi-rutina-cliente',
      name: 'mi-rutina-cliente',
      component: MiRutinaCliente
    },
    {
      path: '/mis-reservas-cliente',
      name: 'mis-reservas-cliente',
      component: MisReservasCliente
    },
    {
      path: '/mi-dieta-cliente',
      name: 'mi-dieta-cliente',
      component: MiDietaCliente
    },
    {
      path: '/horarios-cliente',
      name: 'horarios-cliente',
      component: HorariosCliente
    },
    {
      path: '/entrenadores-cliente',
      name: 'entrenadores-cliente',
      component: EntrenadoresCliente
    },
    {
      path: '/entrenador-uno-cliente',
      name: 'entrenador-uno-cliente',
      component: EntrenadorUnoCliente
    },
    {
      path: '/entrenador-dos-cliente',
      name: 'entrenador-dos-cliente',
      component: EntrenadorDosCliente
    },
    {
      path: '/entrenador-tres-cliente',
      name: 'entrenador-tres-cliente',
      component: EntrenadorTresCliente
    },
    {
      path: '/entrenador-cuatro-cliente',
      name: 'entrenador-cuatro-cliente',
      component: EntrenadorCuatroCliente
    },
    {
      path: '/entrenador-cinco-cliente',
      name: 'entrenador-cinco-cliente',
      component: EntrenadorCincoCliente
    },
    {
      path: '/entrenador-seis-cliente',
      name: 'entrenador-seis-cliente',
      component: EntrenadorSeisCliente
    },
    {
      path: '/entrenador-siete-cliente',
      name: 'entrenador-siete-cliente',
      component: EntrenadorSieteCliente
    },
    {
      path: '/entrenador-ocho-cliente',
      name: 'entrenador-ocho-cliente',
      component: EntrenadorOchoCliente
    },
    {
      path: '/trabaja-con-nosotros-cliente',
      name: 'trabaja-con-nosotros-cliente',
      component: TrabajaConNosotrosCliente
    },
    {
      path: '/instalaciones-cliente',
      name: 'instalaciones-cliente',
      component: InstalacionesCliente
    },
    {
      path: '/membresias-empleado',
      name: 'membresias-empleado',
      component: MembresiasEmpleado
    },
    {
      path: '/dieta-empleado',
      name: 'dieta-empleado',
      component: DietaEmpleado
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
    },
    {
      path: '/Editar-Perfil-Cliente',
      name: 'Editar-Perfil-Cliente',
      component: EditarPerfilCliente
    },
    {
      path: '/mi-perfil-empleado',
      name: 'mi-perfil-empleado',
      component: MiPerfilEmpleado
    },
    {
      path: '/recibo-membresia',
      name: 'recibo-membresia',
      component: ReciboMembresia
    },
    {
      path: '/progreso-cliente',
      name: 'progreso-cliente',
      component: ProgresoCliente
    },
    {
      path: '/editar-perfil-admin',
      name: 'editar-perfil-admin',
      component: EditarPerfilAdmin
    },
    {
      path: '/fotos-admin',
      name: 'fotos-admin',
      component: FotosAdmin
    },
    {
      path: '/tareas-admin',
      name: 'tareas-admin',
      component: TareasAdmin
    },
    {
      path: '/planes-admin',
      name: 'planes-admin',
      component: PlanesAdmin
    },
    {
      path: '/clases-admin',
      name: 'clases-admin',
      component: ClasesAdmin
    }
  ]
})
