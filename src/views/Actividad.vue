<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Diagnóstico y alistamiento del presupuesto personal',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de los conceptos relacionados con las finanzas personales, el diagnóstico financiero, la identificación de ingresos, gastos, deudas y soportes financieros, así como los principios y elementos necesarios para el alistamiento y la elaboración del presupuesto personal.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué permite identificar el diagnóstico financiero personal?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El valor de los impuestos nacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La utilidad neta de una empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La situación económica real de una persona o familia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La nómina mensual de una organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. <em>Board</em> del <em>software</em> EAGLE.',
        },
        {
          id: 2,
          texto: '¿Cuál es el propósito de las finanzas personales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Administrar los recursos económicos para cubrir necesidades, obligaciones y metas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elaborar únicamente estados financieros empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calcular inventarios y costos industriales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar solo compras realizadas en efectivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes elementos corresponde a un ingreso fijo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una bonificación ocasional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una venta esporádica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un salario mensual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un préstamo solicitado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'Un ingreso variable es aquel que:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se recibe siempre por el mismo valor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambia según ventas, turnos, comisiones o servicios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo se recibe una vez al año.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Corresponde a una deuda familiar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál de los siguientes gastos se considera fijo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compra ocasional de postres.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Salida recreativa no planeada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compra impulsiva de ropa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Arriendo mensual.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué caracteriza a un gasto variable?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tiene siempre el mismo valor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se paga solo una vez en la vida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambia según el consumo o las decisiones personales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No debe registrarse en el presupuesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Por qué es importante diferenciar necesidades y deseos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque permite priorizar los gastos indispensables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque todos los deseos deben pagarse primero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque las necesidades se pueden ignorar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque evita registrar los gastos familiares.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál acción ayuda a mejorar los hábitos de consumo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comprar sin revisar precios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrar los gastos frecuentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Usar crédito sin planeación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gastar antes de separar pagos básicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué es un presupuesto personal?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un documento exclusivo para empresas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un cálculo de impuestos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una herramienta para organizar ingresos, gastos, deudas, ahorro y metas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una lista de productos deseados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'El principio de realismo en el presupuesto significa:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar valores aproximados sin verificar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Anotar únicamente los ingresos más altos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Omitir gastos pequeños para equilibrar el presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar información cercana a la situación económica real.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál es un componente básico del presupuesto personal?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inventario empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ingresos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Depreciación industrial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nómina de empleados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Por qué deben registrarse las deudas en el presupuesto?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque aumentan el ingreso disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque permiten conocer cuotas, fechas, saldos y compromisos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque reemplazan el ahorro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque no afectan la capacidad de pago.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué debe revisarse antes de aceptar una financiación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el valor de la primera cuota.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El color del formato presupuestal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuota, plazo, tasa, valor total y capacidad de pago.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Únicamente la fecha de compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué es un soporte financiero?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un documento que respalda un movimiento económico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una meta sin valor definido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una opinión sobre el dinero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un deseo de compra futura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de los siguientes documentos puede ser un soporte financiero?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lista de compras personales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comentario verbal sin registro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Publicidad de una tienda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recibo de servicios públicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: 'La guía técnica para elaborar presupuestos se entiende como:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una ruta organizada para preparar, clasificar y registrar información financiera.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una norma tributaria empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un documento exclusivo para bancos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una lista de compras personales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cuándo puede ser útil un formato físico de presupuesto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando no se desea registrar ningún gasto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuando la persona prefiere registrar información en papel o cuaderno.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cuando se necesita eliminar soportes financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando solo se quieren anotar deseos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cuál es una ventaja de usar una hoja electrónica?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evita registrar ingresos y gastos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elimina las deudas automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realiza cálculos automáticos y permite actualizar datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplaza la revisión del presupuesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué representa la capacidad de pago?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El total de ingresos sin descontar compromisos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El valor máximo que una persona desea gastar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El dinero recibido de forma ocasional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El dinero disponible después de cubrir gastos, costos, deudas y obligaciones prioritarias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Para qué sirve la lista de verificación antes de elaborar el presupuesto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para confirmar que la información esté completa, organizada y lista para registrarse.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para reemplazar los soportes financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para evitar clasificar ingresos y gastos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para registrar solo gastos variables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
