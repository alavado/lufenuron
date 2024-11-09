import tratamientosActions from './actions'
import { FARMACO_APLICACION_BAÑO, FARMACO_APLICACION_ORAL, COSTO_OPERACIONAL_BAÑO } from '../../helpers/constantes'

const initialState = {
  medicamentos: [
    {
      id: 1,
      nombre: 'Azametifos',
      nombreComercial : 'Purisan',
      empresa: 'Fish Vet Group SPA',
      formaFarmaceutica: FARMACO_APLICACION_BAÑO,
      principioActivo: 'Azametifos',
      unidad: 'kg',
      costoUnitario: 400,
      costoUnitarioInf: 400,
      costoUnitarioSup: 400,
      costoOperacional: COSTO_OPERACIONAL_BAÑO,    
      unidadDosis: 'mg/m3',
      cantidadPorJaula: 200, // dosis producto mg por m3
      duracion: 4,
      mortalidad: 0,
      color: '#EF5350',
      activo: false,
      aplicaciones: 1, // cuantas veces seguidas se repite el tratamiento
      factorFarmaco: 6,
      factorMetodo: 1,
      presentacion: 50, // porcentaje de g por litro o kg
      esImvixa: false,
      carencia: 10
    },
    {
      id: 2,
      nombre: 'Imvixa',
      empresa: 'Eli Lilly Interamérica Inc. y Cía. Ltda.',
      formaFarmaceutica: FARMACO_APLICACION_ORAL,
      diasDeAdministracion: 1,
      principioActivo: 'Lufenurón',
      unidad: 'kg',
      costoUnitario: 4500,
      costoUnitarioInf: 4500,
      costoUnitarioSup: 4500,
      costoOperacional: 0,
      dosis: 350, // mg/kg
      unidadDosis: 'mg/kg',
      duracion: 28,
      mortalidad: 0,
      color: '#EF7B10',
      activo: true,
      aplicaciones: 1,
      factorFarmaco: 4,
      factorMetodo: 0.8,
      presentacion: 10,
      esImvixa: true,
      carencia: 2050
    },
    {
      id: 3,
      nombre: 'Slice',
      nombreComercial: 'Slice',
      empresa: 'MSD Salud Animal',
      formaFarmaceutica: FARMACO_APLICACION_ORAL,
      diasDeAdministracion: 1,
      principioActivo: 'Emamectina',
      unidad: 'kg',
      costoUnitario: 140,
      costoUnitarioInf: 140,
      costoUnitarioSup: 140,
      costoOperacional: 0,
      dosis: 175, // dosis practica (mg/kg). dosis real: 50 microgramos/kg al 0.2% 
      unidadDosis: 'mg/kg',
      duracion: 8,
      mortalidad: 0,
      color: '#09558c',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 4,
      factorMetodo: 0.8,
      presentacion: 0.2,
      esImvixa: false,
      carencia: 900
    },
    {
      id: 4,
      nombre: 'Emamectina',
      empresa: 'Intervet Chile Ltda.',
      formaFarmaceutica: FARMACO_APLICACION_ORAL,
      diasDeAdministracion: 1,
      principioActivo: 'Emamectina',
      unidad: 'kg',
      costoUnitario: 100,
      costoUnitarioInf: 100,
      costoUnitarioSup: 100,
      costoOperacional: 0,
      dosis: 175, // (mg/kg)
      unidadDosis: 'mg/kg',
      duracion: 8,
      mortalidad: 0,
      color: '#BA68C8',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 4,
      factorMetodo: 0.8,
      presentacion: 0.2,
      esImvixa: false,
      carencia: 900
    },
    {
      id: 5,
      nombre: 'Deltametrina',
      nombreComercial: 'AMX',
      empresa: 'FAV S.A.',
      formaFarmaceutica: FARMACO_APLICACION_BAÑO,
      principioActivo: 'Deltametrina',
      unidad: 'lt',
      costoUnitario: 700,
      costoUnitarioInf: 700,
      costoUnitarioSup: 700,
      costoOperacional: COSTO_OPERACIONAL_BAÑO,
      unidadDosis: 'ml/m3',
      cantidadPorJaula: 0.3,
      duracion: 3,
      mortalidad: 0,
      color: '#6D4C41',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 6,
      factorMetodo: 1,
      presentacion: 1,
      esImvixa: false,
      carencia: 30
    },
    {
      id: 6,
      nombre: 'Peróxido de hidrógeno',
      nombreComercial: 'Paramove',
      empresa: 'Solvay Peróxidos de Los Andes Industrial y Comercial Ltda.',
      formaFarmaceutica: FARMACO_APLICACION_BAÑO,
      principioActivo: 'Peróxido de hidrógeno',
      unidad: 'kg',
      costoUnitario: 1.5,
      costoUnitarioInf: 1.5,
      costoUnitarioSup: 1.5,
      costoOperacional: 7000,
      unidadDosis: 'mg/m3',
      cantidadPorJaula: 800000,
      duracion: 4,
      mortalidad: 0,
      color: '#1E88E5',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 0,
      factorMetodo: 0.2,
      presentacion: 50,
      esImvixa: false,
      carencia: 0
    },
    // {
    //   id: 5,
    //   nombre: 'Betamax',
    //   empresa: 'Eli Lilly Interamérica Inc. y Cía. Ltda.',
    //   formaFarmaceutica: FARMACO_APLICACION_BAÑO,
    //   principioActivo: 'Cipermetrina',
    //   unidad: 'lt',
    //   costoUnitario: 1000,
    //   costoOperacional: COSTO_OPERACIONAL_BAÑO,
    //  
    //   cantidadPorJaula: 1.35,
    //   duracion: 3,
    //   mortalidad: 0.06,
    //   color: '#827717',
    //   activo: false,
    //   aplicaciones: 1,
    //   factorFarmaco: 4,
    //   factorMetodo: 1,
    //   presentacion: 5
    // },
    {
      id: 7,
      nombre: 'Hexaflumurón',
      nombreComercial: 'Alpha Flux',
      empresa: 'Pharmaq AS Chile Ltda.',
      formaFarmaceutica: FARMACO_APLICACION_BAÑO,
      principioActivo: 'Hexaflumurón',
      unidad: 'lt',
      costoUnitario: 450,
      costoUnitarioInf: 450,
      costoUnitarioSup: 450,
      costoOperacional: COSTO_OPERACIONAL_BAÑO,
      unidadDosis: 'ml/m3',
      cantidadPorJaula: 20,
      duracion: 16,
      mortalidad: 0.12,
      color: '#000066',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 6,
      factorMetodo: 1,
      presentacion: 10,
      esImvixa: false,
      carencia: 1923
    },
    {
      id: 8,
      nombre: 'Lyptus Plus',
      nombreComercial: 'Lyptus Plus',
      empresa: 'Sudvet Corp.',
      formaFarmaceutica: FARMACO_APLICACION_BAÑO,
      principioActivo: 'Aceites esenciales (No Farm)',
      unidad: 'lt',
      costoUnitario: 2750,
      costoUnitarioInf: 2750,
      costoUnitarioSup: 2750,
      costoOperacional: COSTO_OPERACIONAL_BAÑO,
      unidadDosis: 'ml/m3',
      cantidadPorJaula: 0.1,
      duracion: 16,
      mortalidad: 0.06,
      color: '#fff063',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 6,
      factorMetodo: 1,
      presentacion: 10,
      esImvixa: false,
      carencia: 0
    },
    {
      id: 9,
      nombre: 'Rosseus Plus',
      nombreComercial: 'Rosseus Plus',
      empresa: 'Sudvet Corp.',
      formaFarmaceutica: FARMACO_APLICACION_BAÑO,
      principioActivo: 'Aceites esenciales (No Farm)',
      unidad: 'lt',
      costoUnitario: 180,
      costoUnitarioInf: 180,
      costoUnitarioSup: 180,
      costoOperacional: COSTO_OPERACIONAL_BAÑO,
      unidadDosis: 'ml/m3',
      cantidadPorJaula: 5,
      duracion: 16,
      mortalidad: 0,
      color: '#bfed33',
      activo: false,
      aplicaciones: 1,
      factorFarmaco: 6,
      factorMetodo: 1,
      presentacion: 10,
      esImvixa: false,
      carencia: 0
    },
    // {
    //   id: 9,
    //   nombre: 'Deltafav',
    //   empresa: 'FAV S.A.',
    //   formaFarmaceutica: FARMACO_APLICACION_BAÑO,
    //   principioActivo: 'Deltametrina',
    //   unidad: 'lt',
    //   costoUnitario: 500,
    //   costoOperacional: COSTO_OPERACIONAL_BAÑO,
    //   unidadDosis: 'ml/m3',
    //   cantidadPorJaula: 0.3,
    //   duracion: 3,
    //   mortalidad: 0.06,
    //   color: '#6D4C41',
    //   activo: false,
    //   aplicaciones: 1,
    //   factorFarmaco: 6,
    //   factorMetodo: 1,
    //   presentacion: 1,
    //   esImvixa: false
    // },
    // {
    //   id: 10,
    //   nombre: 'CalFree',
    //   empresa: 'FAV S.A.',
    //   formaFarmaceutica: FARMACO_APLICACION_BAÑO,
    //   principioActivo: 'Azametifos',
    //   unidad: 'kg',
    //   costoUnitario: 560,
    //   costoOperacional: COSTO_OPERACIONAL_BAÑO,
    //   unidadDosis: 'mg/m3',
    //   cantidadPorJaula: 200,
    //   duracion: 4,
    //   mortalidad: 0.06,
    //   color: '#EF5350',
    //   activo: false,
    //   aplicaciones: 1,
    //   factorFarmaco: 6,
    //   factorMetodo: 1,
    //   presentacion: 50,
    //   esImvixa: false
    // },
    // {
    //   id: 11,
    //   nombre: 'Azasure',
    //   empresa: 'Centrovet Ltda.',
    //   formaFarmaceutica: FARMACO_APLICACION_BAÑO,
    //   principioActivo: 'Azametifos',
    //   unidad: 'kg',
    //   costoUnitario: 650,
    //   costoOperacional: COSTO_OPERACIONAL_BAÑO,
    //   unidadDosis: 'mg/m3',
    //   cantidadPorJaula: 200,
    //   duracion: 4,
    //   mortalidad: 0.06,
    //   color: '#EF5350',
    //   activo: false,
    //   aplicaciones: 1,
    //   factorFarmaco: 6,
    //   factorMetodo: 1,
    //   presentacion: 50,
    //   esImvixa: false
    // }
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
      const medicamento = state.medicamentos.find(m => m.id === id)
      if (propiedad === 'costoUnitarioInf') {
        return {
          ...state,
          medicamentos: [...state.medicamentos.filter(m => m.id !== id),
            {
              ...medicamento,
              costoUnitarioInf: valor,
              costoUnitario: (valor + medicamento['costoUnitarioSup']) / 2,
            }
          ]
        }
      }
      if (propiedad === 'costoUnitarioSup') {
        return {
          ...state,
          medicamentos: [...state.medicamentos.filter(m => m.id !== id),
            {
              ...medicamento,
              costoUnitarioSup: valor,
              costoUnitario: (medicamento['costoUnitarioInf'] + valor) / 2,
            }
          ]
        }
      }
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
      const semanaPrimerBaño = Object.keys(state.tratamientos[base]).find(semana => {
        const idMedicamento = state.tratamientos[base][semana].idMedicamento
        const medicamento = state.medicamentos.find(({ id }) => id === idMedicamento)
        return medicamento.formaFarmaceutica === FARMACO_APLICACION_BAÑO
      })
      const duracionTratamientoBase = Number(semanaPrimerBaño)
      const duracionComidaObjetivo = (state.tratamientos[objetivo][0] && state.medicamentos.find(m => m.id === state.tratamientos[objetivo][0].idMedicamento).duracion) || 1
      const semanasTratamientosOralesObjetivo = Object.keys(state.tratamientos[objetivo]).filter(semana => {
        const idMedicamento = state.tratamientos[objetivo][semana].idMedicamento
        const medicamento = state.medicamentos.find(({ id }) => id === idMedicamento)
        return medicamento.formaFarmaceutica === FARMACO_APLICACION_ORAL
      })
      return {
        ...state,
        tratamientos: {
          ...state.tratamientos,
          [objetivo]: {
            ...semanasTratamientosOralesObjetivo.reduce((obj, semana) => ({...obj, [semana]: state.tratamientos[objetivo][semana]}), {}),
            ...Object.keys(state.tratamientos[base]) 
              .filter(semana => Number(semana) >= duracionTratamientoBase && (Number(semana) + duracionComidaObjetivo - duracionTratamientoBase) <= semanas)
              .reduce((obj, semana) => ({...obj, [Number(semana) + duracionComidaObjetivo - duracionTratamientoBase]: state.tratamientos[base][semana]}), {})
          }
        }
      }
    }
    case tratamientosActions.AGREGAR_MEDICAMENTO: {
      const medicamento = action.payload
      console.log('AGREGAR', {medicamento})
      return {
        ...state,
        medicamentos: [
          ...state.medicamentos,
          {
            id: state.medicamentos.sort((m1, m2) => m1.id < m2.id ? 1 : -1)[0].id + 1,
            empresa: '',
            unidad: medicamento.formaFarmaceutica === FARMACO_APLICACION_BAÑO ? 'lt' : 'kg',
            unidadDosis: medicamento.formaFarmaceutica === FARMACO_APLICACION_BAÑO ? 'mg/m3' : 'mg/kg',
            duracion: 4,
            color: '#b1006a',
            activo: false,
            aplicaciones: 1,
            factorFarmaco: 0,
            factorMetodo: 0,
            costoUnitario: (medicamento.costoUnitarioInf + medicamento.costoUnitarioSup) / 2,
            ...medicamento
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