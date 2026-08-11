<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Guía técnica y formatos presupuestales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_3(data-aos="fade-right")
            p.mb-0 La guía técnica para la elaboración del presupuesto personal permite organizar el proceso presupuestal mediante pasos claros, criterios de clasificación y el uso adecuado de formatos. Su aplicación facilita que la información financiera se prepare de manera ordenada, desde la identificación de las necesidades personales hasta el registro de ingresos, gastos, costos y deudas en un formato que apoye la toma de decisiones.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img1.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Los formatos presupuestales, tanto físicos como electrónicos, cumplen una función práctica porque permiten registrar, clasificar, calcular y revisar la información financiera de una persona o de un núcleo familiar. La elección del formato depende de la frecuencia de los ingresos, el tipo de gastos, el nivel de detalle requerido y la disponibilidad de herramientas para su elaboración.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Definición de guía técnica para elaborar presupuestos
      p.mb-5 La guía técnica para elaborar presupuestos es un procedimiento organizado que orienta la preparación, clasificación y registro de la información financiera necesaria para construir un presupuesto personal. En este contexto, no corresponde a un documento normativo específico, sino a una ruta de trabajo que facilita la organización de los datos antes de diligenciar un formato presupuestal.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Su aplicación permite evitar que el presupuesto se elabore de manera improvisada. Para ello, es necesario reconocer las necesidades, identificar las fuentes de ingreso, clasificar los gastos, registrar las deudas, identificar los costos, definir el período de análisis y reunir los soportes que respaldan la información financiera.
      p.mb-0 La guía técnica también establece una secuencia lógica de trabajo. Primero se analiza la situación financiera de la persona o del núcleo familiar; después se organizan los componentes del presupuesto; posteriormente se selecciona el formato más adecuado y, finalmente, se registran los datos necesarios para elaborar el presupuesto. Esta organización facilita el control de los recursos y fortalece la toma de decisiones financieras.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Aplicación de la guía técnica en el presupuesto personal
      .bg___color_4
        .px-5
          p.mb-5 La aplicación de la guía técnica permite transformar el diagnóstico financiero en un presupuesto organizado. Antes de registrar valores, es necesario reunir la información, clasificarla y verificar que sea completa, de manera que el presupuesto refleje la situación económica real de la persona o del núcleo familiar. La ruta de trabajo para aplicar esta guía puede desarrollarse mediante los siguientes pasos.
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Definir el período del presupuesto
                    p.mb-0 Establecer si el presupuesto será semanal, quincenal, mensual o por temporada para organizar la información de acuerdo con la frecuencia de los ingresos y los gastos.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img3.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img4.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Reunir los soportes financieros
                    p.mb-0 Organizar recibos, facturas, extractos, comprobantes y registros que respalden la información financiera.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificar los ingresos
                    p.mb-0 Reconocer las fuentes, los valores y la frecuencia de las entradas de dinero para determinar los recursos disponibles.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img5.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img6.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Clasificar los gastos
                    p.mb-0 Separar los gastos en fijos, variables, eventuales y prioritarios para facilitar su análisis y control.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registrar las deudas y los costos
                    p.mb-0 Identificar las obligaciones financieras y los recursos necesarios para desarrollar actividades productivas o generar ingresos.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img7.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img8.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Seleccionar el formato
                    p.mb-0 Elegir el formato físico o electrónico que mejor se adapte a las necesidades y características del presupuesto.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Verificar la información
                    p.mb-0 Revisar que los datos registrados sean completos, coherentes y acordes con la realidad financiera antes de diligenciar el presupuesto.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img9.png', alt='' style="width: 300px").m-auto
          p.mb-0 Seguir esta secuencia facilita la preparación del presupuesto, reduce errores en el registro de la información y contribuye a elaborar un formato confiable para la planeación y el control de los recursos financieros.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Descripción y características de la guía técnica
      p.mb-5 La guía técnica orienta la preparación del presupuesto personal mediante una secuencia organizada de actividades que facilita clasificar, verificar y registrar la información financiera. Su propósito es asegurar que los datos utilizados sean completos, coherentes y estén respaldados antes de diligenciar el formato presupuestal. Las características de una guía técnica permiten comprender cómo contribuye al alistamiento y la elaboración del presupuesto personal:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Clara")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Clara
              p.mb-0 Presenta instrucciones comprensibles para identificar qué información debe registrarse y en qué categoría debe ubicarse.
        .py-3.py-md-4(titulo="Ordenada")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ordenada
              p.mb-0 Desarrolla una secuencia lógica que inicia con el diagnóstico financiero, continúa con la clasificación de la información y finaliza con la revisión de los datos.
        .py-3.py-md-4(titulo="Flexible")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Flexible
              p.mb-0 Se adapta a diferentes realidades económicas, permitiendo trabajar con ingresos fijos, variables o actividades independientes.
        .py-3.py-md-4(titulo="Verificable")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Verificable
              p.mb-0 Utiliza información respaldada por recibos, facturas, extractos, comprobantes o registros de gastos para garantizar su confiabilidad.
        .py-3.py-md-4(titulo="Aplicable")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Aplicable
              p.mb-0 Facilita decisiones relacionadas con pagos, ahorro, deudas, costos y control de los gastos.
        .py-3.py-md-4(titulo="Preventiva")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Preventiva
              p.mb-0 Permite identificar datos faltantes, gastos omitidos o ingresos inciertos antes de elaborar el presupuesto.
      p.mb-0 Estas características favorecen la elaboración de presupuestos organizados, confiables y ajustados a la realidad financiera de cada persona o núcleo familiar.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Formatos físicos de presupuesto personal
      p Los formatos físicos de presupuesto personal corresponden a registros elaborados en cuadernos, libretas, planillas impresas, fichas o formularios diligenciados manualmente. Constituyen una alternativa práctica para organizar la información financiera sin depender de equipos electrónicos o conexión a internet y resultan especialmente útiles para quienes prefieren llevar un registro escrito de sus ingresos, gastos y demás movimientos económicos.
      p.mb-5 Estos formatos pueden organizarse por fechas, categorías o secciones, según las necesidades de cada persona. También permiten conservar los soportes financieros junto con los registros, lo que facilita la revisión y el seguimiento del presupuesto. Existen diferentes alternativas para registrar y organizar la información financiera antes de elaborar el presupuesto:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Cuaderno de ingresos y gastos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registra las entradas y salidas de dinero por fecha. Se recomienda para llevar un control diario o semanal y conviene anotar cada movimiento el mismo día en que ocurre.
            .row(titulo="Planilla impresa mensual").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Organiza ingresos, gastos, deudas, ahorro y saldo del mes. Es útil para obtener una visión general del período y debe diligenciarse con datos reales, revisando los totales al finalizar el mes.
            .row(titulo="Carpeta de soportes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Conserva recibos, facturas, comprobantes, extractos y contratos. Se recomienda para verificar la información registrada y organizar los documentos por fecha o tipo de gasto.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img16.png", alt="" ).m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img17.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Lista de deudas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registra el valor total, la cuota, el saldo, la fecha de pago y las observaciones. Resulta adecuada cuando existen créditos, préstamos o compras a cuotas y requiere actualizar el saldo después de cada pago.
            .row(titulo="Registro de ahorro").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite controlar la meta de ahorro, el valor esperado, los abonos y el saldo acumulado. Es útil para hacer seguimiento al cumplimiento de un objetivo financiero.
            .row(titulo="Control de gastos variables").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registra compras frecuentes, gastos pequeños o consumos no planificados. Se recomienda cuando se desea identificar en qué se está utilizando el dinero y detectar oportunidades de reducción de gastos.
      p.mb-0 La selección del formato físico depende de las necesidades de organización, el nivel de detalle requerido y los hábitos de registro de cada persona. Lo importante es que facilite el seguimiento de la información financiera y sirva como apoyo para la elaboración del presupuesto personal.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Formatos electrónicos de presupuesto personal
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Los formatos electrónicos de presupuesto personal son herramientas digitales que permiten registrar, organizar, calcular y revisar la información financiera de una persona o de un núcleo familiar. Pueden elaborarse mediante hojas de cálculo, aplicaciones móviles, plantillas prediseñadas o documentos digitales que facilitan el control de ingresos, gastos, deudas, ahorro y metas. Su principal ventaja consiste en automatizar los cálculos, actualizar la información con facilidad y facilitar el seguimiento del presupuesto.
          p.mb-0 La elección del formato depende de las necesidades de cada persona, el nivel de detalle requerido y la facilidad para utilizar herramientas digitales. Lo importante es que el formato permita registrar información real, mantener un control permanente de los movimientos financieros y apoyar la toma de decisiones. Las siguientes opciones permiten organizar el presupuesto personal mediante herramientas digitales:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img18.png', alt='').m-auto
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t4/img19.png', alt='' style="max-width: 350px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img20.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Hoja de cálculo básica
              p.mb-0.text-center Permite registrar ingresos, gastos, deudas y ahorro mediante filas y columnas. Es útil para controlar el presupuesto mensual de forma sencilla.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img21.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Plantilla de presupuesto
              p.mb-0.text-center Incluye categorías prediseñadas y fórmulas básicas que facilitan el registro sin necesidad de crear el formato desde cero.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img22.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Aplicación móvil financiera
              p.mb-0.text-center Permite registrar movimientos directamente desde el teléfono móvil y hacer seguimiento frecuente a los gastos diarios.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img23.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Formato digital familiar
              p.mb-0.text-center Integra los ingresos y gastos de varias personas del hogar para organizar responsabilidades económicas compartidas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img24.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Control electrónico de deudas
              p.mb-0.text-center Registra cuotas, fechas de pago, saldos y observaciones, facilitando el seguimiento de créditos, préstamos o compras a cuotas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img25.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Formato para metas y ahorro
              p.mb-0.text-center Permite proyectar valores, plazos y avances para hacer seguimiento a objetivos como educación, vivienda, fondo de emergencia o inversión.
      p.mb-5 La selección del formato debe responder a las necesidades de organización y facilitar el registro continuo de la información financiera.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img40.svg" style="max-width: 60px").m-auto
        .col
          h3 Ejemplo práctico
      p Laura Gómez vive con su hijo y desea organizar su presupuesto del mes de julio de 2026. Durante este periodo recibe un salario de #[b $ 1.500.000] y obtiene #[b $ 250.000] adicionales por la venta de postres. Sus gastos corresponden a arriendo por #[b $ 500.000], servicios de agua y energía por #[b $ 180.000], transporte por #[b $ 120.000], alimentación por #[b $ 320.000], cuota de préstamo por #[b $ 150.000] y ahorro para fondo de emergencia por #[b $ 100.000].
      p.mb-5 Para elaborar la hoja de cálculo, se crean columnas para la fecha, la categoría, el concepto, los ingresos, los gastos y el saldo acumulado. En cada fila se registra un movimiento financiero, ubicando los ingresos y los gastos en sus respectivas columnas. El saldo acumulado se obtiene sumando los ingresos y restando los gastos conforme se registran los movimientos. Al finalizar el periodo, Laura registra ingresos por #[b $ 1.750.000], gastos por #[b $ 1.370.000] y un saldo disponible de #[b $ 380.000]. La siguiente información ejemplifica el registro de un presupuesto personal en una hoja de cálculo.
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Ejemplo de hoja de cálculo para presupuesto personal
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Fecha
                      th.ajuste-border-tabla.texto-left Categoría
                      th.ajuste-border-tabla.texto-left Concepto
                      th.ajuste-border-tabla.texto-left Ingresos
                      th.ajuste-border-tabla.texto-left Gastos
                      th.texto-left Saldo acumulado
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 01/07/2026
                      td.ajuste-border-tabla.texto-left Ingreso
                      td.ajuste-border-tabla.texto-left Salario
                      td.ajuste-border-tabla.texto-left $ 1.500.000
                      td.ajuste-border-tabla.texto-left 
                      td.texto-left $ 1.500.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 03/07/2026
                      td.ajuste-border-tabla.texto-left Ingreso
                      td.ajuste-border-tabla.texto-left Venta de postres
                      td.ajuste-border-tabla.texto-left $ 250.000
                      td.ajuste-border-tabla.texto-left 
                      td.texto-left $ 1.750.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 05/07/2026
                      td.ajuste-border-tabla.texto-left Vivienda
                      td.ajuste-border-tabla.texto-left Arriendo
                      td.ajuste-border-tabla.texto-left 
                      td.ajuste-border-tabla.texto-left $ 500.000
                      td.texto-left $ 1.250.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 06/07/2026
                      td.ajuste-border-tabla.texto-left Servicios
                      td.ajuste-border-tabla.texto-left Agua y energía
                      td.ajuste-border-tabla.texto-left 
                      td.ajuste-border-tabla.texto-left $ 180.000
                      td.texto-left $ 1.070.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 08/07/2026
                      td.ajuste-border-tabla.texto-left Transporte
                      td.ajuste-border-tabla.texto-left Pasajes
                      td.ajuste-border-tabla.texto-left 
                      td.ajuste-border-tabla.texto-left $ 120.000
                      td.texto-left $ 950.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 10/07/2026
                      td.ajuste-border-tabla.texto-left Alimentación
                      td.ajuste-border-tabla.texto-left Mercado
                      td.ajuste-border-tabla.texto-left 
                      td.ajuste-border-tabla.texto-left $ 320.000
                      td.texto-left $ 630.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 12/07/2026
                      td.ajuste-border-tabla.texto-left Deuda
                      td.ajuste-border-tabla.texto-left Cuota préstamo
                      td.ajuste-border-tabla.texto-left 
                      td.ajuste-border-tabla.texto-left $ 150.000
                      td.texto-left $ 480.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 15/07/2026
                      td.ajuste-border-tabla.texto-left Ahorro
                      td.ajuste-border-tabla.texto-left Fondo de emergencia
                      td.ajuste-border-tabla.texto-left 
                      td.ajuste-border-tabla.texto-left $ 100.000
                      td.texto-left $ 380.000
                    tr.ajuste-color-tabla
                      td(colspan="3").ajuste-border-tabla.texto-left.text-weight-bold Totales
                      td.ajuste-border-tabla.texto-left.text-weight-bold $ 1.750.000
                      td.ajuste-border-tabla.texto-left.text-weight-bold $ 1.370.000
                      td.texto-left.text-weight-bold $ 380.000
          p.mb-0 Este ejemplo presenta  cómo un formato electrónico facilita el registro ordenado de los movimientos financieros y permite conocer, de manera inmediata, el saldo disponible para la toma de decisiones. 
      Separador
      #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.6 Criterios para seleccionar formatos presupuestales
      p.mb-5 La selección del formato presupuestal debe responder a las necesidades, condiciones y hábitos de la persona que organizará sus finanzas. Antes de elegir un formato físico o electrónico, conviene analizar aspectos como la frecuencia de los ingresos, la cantidad de gastos, la existencia de deudas, el desarrollo de actividades independientes, la necesidad de realizar cálculos y la facilidad para mantener actualizada la información. Los siguientes criterios facilitan la elección del formato más adecuado para organizar el presupuesto personal:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img26.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Facilidad de uso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Evaluar el nivel de comodidad para registrar la información. Si se prefiere el registro manual, puede utilizarse un cuaderno, una planilla impresa o un formato sencillo.
            .row(titulo="Acceso a tecnología").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Considerar la disponibilidad de computador, teléfono móvil o conexión a internet. Cuando existen estas herramientas, una hoja de cálculo o una plantilla electrónica puede facilitar el seguimiento del presupuesto.
            .row(titulo="Frecuencia de los ingresos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identificar si los ingresos son diarios, semanales, quincenales, mensuales o variables para seleccionar un formato acorde con el período de registro.
            .row(titulo="Cantidad de gastos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Analizar el número de categorías y movimientos que deben controlarse. Un presupuesto con numerosos movimientos requiere un formato más detallado.
            .row(titulo="Existencia de deudas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Revisar si existen créditos, préstamos, compras a cuotas u otras obligaciones. En estos casos, conviene utilizar un formato que incluya cuotas, fechas de pago y saldos pendientes.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Metas de ahorro").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determinar si es necesario hacer seguimiento al cumplimiento de objetivos financieros mediante registros de aportes y saldo acumulado.
            .row(titulo="Actividad independiente").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Verificar si se desarrollan actividades que requieren separar ingresos, costos y dinero disponible para el hogar.
            .row(titulo="Necesidad de cálculos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cuando se requiere realizar sumas, diferencias, saldos o proyecciones con frecuencia, resulta conveniente utilizar una hoja de cálculo o una plantilla electrónica.
            .row(titulo="Seguridad de la información").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Proteger los datos personales y financieros mediante archivos con contraseña, copias de respaldo o una adecuada organización de los documentos físicos.
            .row(titulo="Constancia en el registro").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Elegir un formato que pueda actualizarse con facilidad y favorezca el registro continuo de la información financiera.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img27.png", alt="" ).m-auto
      p.mb-0 Seleccionar un formato acorde con las necesidades y posibilidades de cada persona facilita la organización del presupuesto y favorece el seguimiento permanente de la información financiera.
      Separador
      #t_4_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.7 Organización de soportes e información financiera
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_4(data-aos="fade-right")
            p.mb-0 La organización de los soportes financieros consiste en reunir, clasificar y conservar los documentos que respaldan los ingresos, los gastos, las deudas, los costos y los pagos registrados en el presupuesto personal. Estos documentos permiten verificar la información financiera y reducen el riesgo de elaborar el presupuesto con datos incompletos o basados únicamente en la memoria.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img28.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Los soportes deben organizarse según el período presupuestal y clasificarse por categorías, de manera que sea más sencillo identificar los movimientos financieros y trasladar la información al presupuesto. Tanto en formatos físicos como electrónicos, es importante que los documentos sean fáciles de consultar, estén protegidos y permitan comprobar los datos registrados. Los principales soportes financieros y su organización pueden resumirse de la siguiente manera.
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img29.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img30.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Comprobante de pago laboral
                  p.mb-0.text-center Respalda salarios, honorarios u otros pagos recibidos. Se clasifica como ingreso y conviene organizarlo por mes y por fuente de ingreso.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img31.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Registro de ventas
                  p.mb-0.text-center Sustenta los ingresos obtenidos por ventas o prestación de servicios. Debe registrar la fecha, el valor y la actividad que generó el ingreso.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img32.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Recibo de arriendo
                  p.mb-0.text-center Corresponde al pago de vivienda y se clasifica como gasto fijo. Es recomendable conservarlo junto con los demás pagos mensuales obligatorios.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img33.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Factura de servicios públicos
                  p.mb-0.text-center Respalda los pagos de agua, energía, gas, internet o telefonía. Puede clasificarse como gasto fijo o variable y compararse entre períodos para identificar cambios en el consumo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img34.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Factura de mercado
                  p.mb-0.text-center Sustenta las compras de alimentos y productos básicos. Permite revisar la frecuencia y el valor de las compras destinadas a la alimentación.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img35.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Recibo de transporte
                  p.mb-0.text-center Respalda los gastos de pasajes, combustible u otros medios de movilidad. Conviene organizarlo por semana o por mes.
          p.mb-5 Además de los documentos relacionados con los ingresos y los gastos, es importante conservar otros soportes que permiten verificar movimientos financieros, controlar las obligaciones económicas y hacer seguimiento al ahorro.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Extracto bancario")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img36.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Extracto bancario
              p.mb-0 Registra movimientos, pagos, retiros y consignaciones. Permite verificar que la información coincida con los registros del presupuesto.
        .py-3.py-md-4(titulo="Contrato o documento de crédito")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img37.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Contrato o documento de crédito
              p.mb-0 Contiene el valor, el plazo, la cuota, la tasa y las condiciones de una obligación financiera. Debe conservarse junto con el seguimiento de pagos y saldos pendientes.
        .py-3.py-md-4(titulo="Factura de insumos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img38.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Factura de insumos
              p.mb-0 Respalda los costos asociados a actividades productivas o independientes. Es importante mantenerla separada de los gastos personales del hogar.
        .py-3.py-md-4(titulo="Comprobante de ahorro")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img39.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Comprobante de ahorro
              p.mb-0 Sustenta los aportes realizados a cuentas, fondos o metas de ahorro. Conviene registrar el valor, la fecha y el propósito de cada aporte.
      p.mb-0 Una adecuada organización de los soportes financieros fortalece la confiabilidad del presupuesto, facilita la verificación de la información y mejora el control de los recursos personales y familiares.
      Separador
      #t_4_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.8 Diligenciamiento inicial del formato presupuestal
      p El diligenciamiento inicial del formato presupuestal consiste en trasladar la información previamente organizada al formato seleccionado, ya sea físico o electrónico. En esta etapa, cada dato debe registrarse en la categoría correspondiente para que el presupuesto refleje de manera clara la situación financiera de la persona o del núcleo familiar.
      p.mb-5 Antes de iniciar el registro, es importante verificar que el período del presupuesto esté definido, que las categorías respondan a la realidad económica y que la información haya sido revisada y respaldada con sus respectivos soportes. Esto permite elaborar un presupuesto más preciso y facilita el seguimiento de los recursos disponibles. La secuencia de registro contribuye a mantener el orden de la información y a reducir errores durante el diligenciamiento:
      .bg___color_5
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Período del presupuesto
                    p.mb-0 Definir si el presupuesto corresponde a una semana, quincena, mes o temporada.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img40.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img41.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Ingresos
                    p.mb-0 Registrar y diferenciar los ingresos fijos, variables y ocasionales.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Gastos fijos
                    p.mb-0 Incluir pagos periódicos, como arriendo, servicios públicos, cuotas o transporte habitual.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img42.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img43.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Gastos variables
                    p.mb-0 Registrar alimentación, compras, recreación, imprevistos y otros consumos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Deudas
                    p.mb-0 Incorporar la cuota, la fecha de pago, el saldo pendiente y las observaciones necesarias.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img44.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img45.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Costos
                    p.mb-0 Registrar los insumos, materiales, transporte u otros recursos utilizados para generar ingresos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Ahorro
                    p.mb-0 Registrar el valor destinado al fondo de emergencia, metas o inversión.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img46.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img47.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Metas financieras
                    p.mb-0 Anotar el objetivo, el valor estimado, el plazo y el avance alcanzado.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Saldo disponible
                    p.mb-0 Calcular el dinero restante después de descontar gastos, costos, deudas y ahorro de los ingresos.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img48.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img49.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Revisión final
                    p.mb-0 Verificar que la información esté completa y coincida con los soportes financieros.
      p.mb-5 Seguir este orden facilita el registro de la información y permite elaborar un presupuesto organizado y coherente con la realidad económica.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img40.svg" style="max-width: 60px").m-auto
        .col
          h3 Ejemplo práctico
      p.mb-5 Carlos Ramírez desea elaborar su presupuesto correspondiente al mes de agosto. Durante este período recibe un salario mensual de #[b $ 1.800.000] y obtiene #[b $ 300.000] adicionales por trabajos de reparación. Sus compromisos incluyen #[b $ 600.000] de arriendo, #[b $ 220.000] de servicios públicos, #[b $ 350.000] de alimentación, #[b $ 160.000] de transporte, #[b $ 200.000] por una cuota de crédito, #[b $ 100.000] destinados a materiales para los trabajos de reparación y #[b $ 150.000] para ahorro. Con esta información organiza su presupuesto para identificar los ingresos, las salidas de dinero y el saldo disponible. Esta tabla presenta un ejemplo del registro inicial de ingresos, gastos, costos, deudas, ahorro y saldo disponible durante un período mensual.
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-7
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Ejemplo de diligenciamiento inicial del presupuesto personal
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Categoría
                      th.ajuste-border-tabla.texto-left Concepto
                      th.texto-left Valor
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingreso fijo
                      td.ajuste-border-tabla.texto-left Salario mensual
                      td.texto-left $ 1.800.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingreso variable
                      td.ajuste-border-tabla.texto-left Trabajos de reparación
                      td.texto-left $ 300.000
                    tr
                      td(colspan="2").ajuste-border-tabla.texto-left.text-weight-bold Total ingresos
                      td.texto-left.text-weight-bold $ 2.100.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gasto fijo
                      td.ajuste-border-tabla.texto-left Arriendo
                      td.texto-left $ 600.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gasto fijo
                      td.ajuste-border-tabla.texto-left Servicios públicos
                      td.texto-left $ 220.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gasto variable
                      td.ajuste-border-tabla.texto-left Alimentación
                      td.texto-left $ 350.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gasto variable
                      td.ajuste-border-tabla.texto-left Transporte
                      td.texto-left $ 160.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Deuda
                      td.ajuste-border-tabla.texto-left Cuota de crédito
                      td.texto-left $ 200.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costo
                      td.ajuste-border-tabla.texto-left Materiales para reparación
                      td.texto-left $ 100.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ahorro
                      td.ajuste-border-tabla.texto-left Reserva mensual
                      td.texto-left $ 150.000
                    tr
                      td(colspan="2").ajuste-border-tabla.texto-left.text-weight-bold Total salidas
                      td.texto-left.text-weight-bold  $ 1.780.000
                    tr.ajuste-color-tabla
                      td(colspan="2").ajuste-border-tabla.texto-left.text-weight-bold Saldo disponible
                      td.texto-left.text-weight-bold  $ 320.000
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_2.fit___box_5(data-aos="fade-right")
                p.mb-0 Este ejemplo evidencia cómo la organización de la información permite conocer con claridad los recursos disponibles después de atender las principales obligaciones financieras. Además de las hojas de cálculo, existen aplicaciones móviles que facilitan el seguimiento del presupuesto desde dispositivos móviles. Estas herramientas permiten registrar movimientos diarios, clasificar gastos, revisar saldos, programar pagos, controlar deudas y hacer seguimiento a las metas de ahorro, especialmente cuando se realizan compras frecuentes o se manejan ingresos variables.
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t4/img50.jpg', alt='').m-auto
            .col-xl-4.fit___bottom
              figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
              p.mb-0 El uso de guías técnicas y formatos presupuestales fortalece la organización de la información financiera y facilita la elaboración de presupuestos claros, verificables y acordes con la realidad económica. La clasificación de los datos, la conservación de los soportes y el diligenciamiento organizado del formato constituyen la base para planificar, controlar los recursos y tomar decisiones financieras responsables.
      .call___to_action(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t4/img51.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Herramientas y conceptos básicos para el alistamiento
            p.mb-0 Se invita a leer el documento #[b Herramientas y conceptos básicos para el alistamiento], donde se aborda la preparación del presupuesto personal mediante el uso de herramientas digitales y conceptos fundamentales de matemática financiera.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Herramientas_conceptos_basicos_para_alistamiento.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
