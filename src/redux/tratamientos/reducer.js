import tratamientosActions from './actions'
import { FARMACO_APLICACION_BAÑO, FARMACO_APLICACION_ORAL, COSTO_OPERACIONAL_BAÑO } from '../../helpers/constantes'

const initialState = {
  medicamentos: [
    {
      id: 1,
      nombre: 'Purisan',
      empresa: 'Fish Vet Group SPA',
      formaFarmaceutica: FARMACO_APLICACION_BAÑO,
      principioActivo: 'Azametifos',
      unidad: 'kg',
      costoUnitario: 560,
      costoOperacional: COSTO_OPERACIONAL_BAÑO,
      dosisBaño: 0.002,
      cantidadPorJaula: 0.72,
      duracion: 4,
      mortalidad: 0.06,
      color: '#EF5350',
      activo: false,
      aplicaciones: 1, // cuantas veces seguidas se repite el tratamiento
      factorFarmaco: 6,
      factorMetodo: 1,
      presentacion: 50
    },
    {
      id: 2,
      nombre: 'Slice',
      empresa: 'Intervet Chile Ltda.',
      formaFarmaceutica: FARMACO_APLICACION_ORAL,
      diasDeAdministracion: 1,
      principioActivo: 'Emamectina',
      unidad: 'kg',
      costoUnitario: 180,
      costoOperacional: 0,
      dosis: 500, // dosis practica (mg/kg). dosis real: 50 microgramos/kg al 0.2% 
      duracion: 8,
      mortalidad: 0,
      color: '#BA68C8',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 4,
      factorMetodo: 0.8,
      presentacion: 0.2
    },
    {
      id: 3,
      nombre: 'AMX',
      empresa: 'FAV S.A.',
      formaFarmaceutica: FARMACO_APLICACION_BAÑO,
      principioActivo: 'Deltametrina',
      unidad: 'lt',
      costoUnitario: 500,
      costoOperacional: COSTO_OPERACIONAL_BAÑO,
      dosisBaño: 0.0003,
      cantidadPorJaula: 1.08,
      duracion: 3,
      mortalidad: 0.06,
      color: '#6D4C41',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 6,
      factorMetodo: 1,
      presentacion: 1000
    },
    {
      id: 4,
      nombre: 'Paramove',
      empresa: 'Solvay Peróxidos de Los Andes Industrial y Comercial Ltda.',
      formaFarmaceutica: FARMACO_APLICACION_BAÑO,
      principioActivo: 'Peróxido de hidrógeno',
      unidad: 'kg',
      costoUnitario: 1.3,
      costoOperacional: COSTO_OPERACIONAL_BAÑO,
      dosisBaño: 1250,
      cantidadPorJaula: 4500,
      duracion: 4,
      mortalidad: 0.06,
      color: '#1E88E5',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 0,
      factorMetodo: 0.2,
      presentacion: 50
    },
    {
      id: 5,
      nombre: 'Betamax',
      empresa: 'Eli Lilly Interamérica Inc. y Cía. Ltda.',
      formaFarmaceutica: FARMACO_APLICACION_BAÑO,
      principioActivo: 'Cipermetrina',
      unidad: 'lt',
      costoUnitario: 1000,
      costoOperacional: COSTO_OPERACIONAL_BAÑO,
      dosisBaño: 0.000375,
      cantidadPorJaula: 1.35,
      duracion: 3,
      mortalidad: 0.06,
      color: '#827717',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 4,
      factorMetodo: 1,
      presentacion: 5
    },
    {
      id: 6,
      nombre: 'Imvixa',
      empresa: 'Eli Lilly Interamérica Inc. y Cía. Ltda.',
      formaFarmaceutica: FARMACO_APLICACION_ORAL,
      diasDeAdministracion: 1,
      principioActivo: 'Lufenurón',
      unidad: 'kg',
      costoUnitario: 8000,
      costoOperacional: 0,
      dosis: 35, // mg/kg
      duracion: 28,
      mortalidad: 0,
      color: '#EF7B10',
      activo: true,
      aplicaciones: 1,
      factorFarmaco: 4,
      factorMetodo: 0.8,
      presentacion: 10
    },
    {
      id: 7,
      nombre: 'Alpha Flux',
      empresa: 'Pharmaq AS Chile Ltda.',
      formaFarmaceutica: FARMACO_APLICACION_BAÑO,
      principioActivo: 'Hexaflumuron',
      unidad: 'lt',
      costoUnitario: 700,  // no hay que buscarlo qele qe aksd
      costoOperacional: COSTO_OPERACIONAL_BAÑO,
      dosisBaño: 20,
      cantidadPorJaula: 10,
      duracion: 16,
      mortalidad: 0.12,
      color: '#000066',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 6,
      factorMetodo: 1,
      presentacion: 10000
    },
    {
      id: 8,
      nombre: 'Emamectina 0,2%',
      empresa: 'Intervet Chile Ltda.',
      formaFarmaceutica: FARMACO_APLICACION_ORAL,
      diasDeAdministracion: 1,
      principioActivo: 'Emamectina',
      unidad: 'kg',
      costoUnitario: 180,
      costoOperacional: 0,
      dosis: 500, // (mg/kg)
      duracion: 8,
      mortalidad: 0,
      color: '#BA68C8',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 4,
      factorMetodo: 0.8,
      presentacion: 0.2
    },
    {
      id: 9,
      nombre: 'Deltafav',
      empresa: 'FAV S.A.',
      formaFarmaceutica: FARMACO_APLICACION_BAÑO,
      principioActivo: 'Deltametrina',
      unidad: 'lt',
      costoUnitario: 500,
      costoOperacional: COSTO_OPERACIONAL_BAÑO,
      dosisBaño: 0.0003,
      cantidadPorJaula: 1.08,
      duracion: 3,
      mortalidad: 0.06,
      color: '#6D4C41',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 6,
      factorMetodo: 1,
      presentacion: 1
    },
    {
      id: 10,
      nombre: 'CalFree',
      empresa: 'FAV S.A.',
      formaFarmaceutica: FARMACO_APLICACION_BAÑO,
      principioActivo: 'Azametifos',
      unidad: 'kg',
      costoUnitario: 560,
      costoOperacional: COSTO_OPERACIONAL_BAÑO,
      dosisBaño: 0.0002,
      cantidadPorJaula: 0.72,
      duracion: 4,
      mortalidad: 0.06,
      color: '#EF5350',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 6,
      factorMetodo: 1,
      presentacion: 50
    },
    {
      id: 11,
      nombre: 'Azasure',
      empresa: 'Centrovet Ltda.',
      formaFarmaceutica: FARMACO_APLICACION_BAÑO,
      principioActivo: 'Azametifos',
      unidad: 'kg',
      costoUnitario: 560,
      costoOperacional: COSTO_OPERACIONAL_BAÑO,
      dosisBaño: 0.0002,
      cantidadPorJaula: 0.72,
      duracion: 4,
      mortalidad: 0.06,
      color: '#EF5350',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 6,
      factorMetodo: 1,
      presentacion: 50
    }
  ],
  tratamientos: {
    tradicional: {
    },
    imvixa: {
      // 0: {
      //   idMedicamento: 6,
      //   duracion: 34
      // }
    },
  },
  medicamentosFueronSeleccionados: false
}

const tratamientosReducer = (state = initialState, action) => {
  switch (action.type) {
    case tratamientosActions.AGREGAR_TRATAMIENTO: {
      const { idMedicamento, semana, pesoDeAplicacion, dia, estrategia, duracion, aplicaciones } = action.payload
      return {
        ...state,
        medicamentos: [
          ...state.medicamentos.filter(m => m.id !== idMedicamento),
          {
            ...state.medicamentos.find(m => m.id === idMedicamento),
            duracion,
            aplicaciones
          }
        ],
        tratamientos: {
          ...state.tratamientos,
          [estrategia]: {
            ...state.tratamientos[estrategia],
            ...[...Array(aplicaciones).keys()].reduce((obj, i) => ({...obj, [semana + i * duracion]: {
              pesoDeAplicacion,
              idMedicamento,
              dia,
              duracion
            }}), {})
          }
        }
      }
    }
    case tratamientosActions.ELIMINAR_TRATAMIENTO: {
      const { estrategia, semana } = action.payload
      if (state.tratamientos[estrategia][semana]) {
        return {
          ...state,
          tratamientos:  {
            ...state.tratamientos,
            [estrategia]: Object.keys(state.tratamientos[estrategia]).reduce((object, key) => {
              if (Number(key) !== semana) {
                object[key] = state.tratamientos[estrategia][key]
              }
              return object
            }, {})
          }
        }
      }
      return state
    }
    case tratamientosActions.EDITAR_MEDICAMENTO: {
      const { id, propiedad, valor } = action.payload
      const esBaño = state.medicamentos.find(m => m.id === id).formaFarmaceutica === FARMACO_APLICACION_BAÑO
      // if (propiedad === 'costoOperacional') {
      //   return {
      //     ...state,
      //     medicamentos: state.medicamentos.map(m => esBaño && (m.formaFarmaceutica === FARMACO_APLICACION_BAÑO) ? {
      //       ...m,
      //       costoOperacional: valor
      //     } : m.id !== id ? m : {
      //       ...m,
      //       costoOperacional: valor
      //     })
      //   }
      // }
      return {
        ...state,
        medicamentos: [...state.medicamentos.filter(m => m.id !== id),
          {
            ...state.medicamentos.find(m => m.id === id),
            [propiedad]: valor
          }
        ]
      }
    }
    case tratamientosActions.MARCAR_MEDICAMENTOS_FUERON_SELECCIONADOS: {
      const valor = action.payload
      return {
        ...state,
        medicamentosFueronSeleccionados: valor
      }
    }
    default:
      return state
    case tratamientosActions.REPLICAR_ESTRATEGIA: {
      const { base, objetivo, semanas } = action.payload
      const duracionComidaBase = state.medicamentos.find(m => m.id === state.tratamientos[base][0].idMedicamento).duracion
      const duracionComidaObjetivo = state.medicamentos.find(m => m.id === state.tratamientos[objetivo][0].idMedicamento).duracion
      return {
        ...state,
        tratamientos: {
          ...state.tratamientos,
          [objetivo]: {
            0: state.tratamientos[objetivo][0],
            ...Object.keys(state.tratamientos[base])
              .filter(semana => Number(semana) > 0 && (Number(semana) + duracionComidaObjetivo - duracionComidaBase) <= semanas)
              .reduce((obj, semana) => ({...obj, [Number(semana) + duracionComidaObjetivo - duracionComidaBase]: state.tratamientos[base][semana]}), {})
          }
        }
      }
    }
    case tratamientosActions.AGREGAR_MEDICAMENTO: {
      const { nombre, formaFarmaceutica, principioActivo, costoUnitario, costoOperacional, cantidadPorJaula } = action.payload
      return {
        ...state,
        medicamentos: [
          ...state.medicamentos,
          {
            id: state.medicamentos.sort((m1, m2) => m1.id < m2.id ? 1 : -1)[0].id + 1,
            nombre,
            formaFarmaceutica,
            principioActivo,
            costoUnitario,
            costoOperacional,
            cantidadPorJaula,
            empresa: '',
            unidad: formaFarmaceutica === FARMACO_APLICACION_BAÑO ? 'lt' : 'kg',
            dosisBaño: 1250,
            duracion: 4,
            mortalidad: 0,
            color: '#1E88E5',
            activo: false,
            aplicaciones: 1,
            factorFarmaco: 0,
            factorMetodo: 0
          }
        ]
      }
    }
    case tratamientosActions.ELIMINAR_TODOS_LOS_TRATAMIENTOS: {
      const estrategia = action.payload
      return {
        ...state,
        tratamientos: {
          ...state.tratamientos,
          [estrategia] : {}
        },
      }
    }
  }
}

export default tratamientosReducer