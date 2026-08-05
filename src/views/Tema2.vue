<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Presupuesto personal y sus componentes
      p.mb-5 El presupuesto personal es una herramienta que permite #[b organizar la información económica] de una persona o de un núcleo familiar para comprender la relación entre los recursos que recibe y los compromisos que debe atender. Su importancia radica en que transforma los ingresos, los gastos, los costos, las deudas y las metas en una estructura organizada que facilita la planeación financiera y la toma de decisiones. Cuando se elabora con información real y actualizada, permite identificar si los recursos disponibles son suficientes, reconocer los gastos que requieren ajustes y verificar si las obligaciones asumidas corresponden a la capacidad económica.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img1.jpg', alt='').m-auto
              .col-xl.fit___box_container
                p.mb-0 La aplicación del presupuesto personal favorece el control de los recursos y contribuye a prevenir desequilibrios financieros, especialmente cuando existen ingresos variables, gastos no planificados o deudas acumuladas. Además, facilita la planificación de decisiones relacionadas con el ahorro, la financiación, la inversión o la reducción de gastos, de acuerdo con las necesidades y prioridades del hogar. Por esta razón, comprender sus componentes, principios y formas de organización constituye un paso fundamental para elaborar un presupuesto coherente con la realidad económica y fortalecer el manejo de las finanzas personales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img2.png', alt='').m-auto
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Concepto de presupuesto personal
      p.mb-5 El presupuesto personal es una herramienta de planeación que permite organizar #[b los ingresos, los gastos, las deudas, el ahorro y las metas] financieras de una persona o de un núcleo familiar durante un periodo determinado. Su principal utilidad consiste en registrar de manera ordenada cuánto dinero ingresa, cuánto dinero se destina a los diferentes compromisos económicos y qué recursos pueden asignarse al ahorro o al cumplimiento de objetivos futuros. En este sentido, el presupuesto no debe entenderse únicamente como una relación de cifras, sino como un instrumento que orienta la toma de decisiones sobre el uso responsable del dinero.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img3.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 En las finanzas personales, el presupuesto permite transformar la información obtenida durante el diagnóstico financiero en un #[b plan de organización económica]. Después de identificar los ingresos, los gastos, las necesidades y las deudas, es posible distribuir los recursos de acuerdo con las prioridades y la capacidad real de pago. De esta manera, el presupuesto cumple una función preventiva al evitar que los gastos superen el ingreso disponible y una función proyectiva al orientar recursos hacia el logro de metas personales o familiares (Ministerio de Educación, 2022).
      p.mb-0 El presupuesto personal constituye, por tanto, una herramienta de apoyo para administrar los recursos de manera organizada, facilitar el seguimiento de la situación financiera y promover decisiones acordes con las posibilidades económicas de cada persona o núcleo familiar.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Principios del presupuesto
      p.mb-5 Los principios del presupuesto son orientaciones que permiten elaborarlo de manera organizada, realista y útil. En el ámbito personal, estos principios favorecen que la información registrada sea clara, completa y coherente con la situación económica de la persona o del núcleo familiar. Un #[b presupuesto elaborado] sin estos criterios puede convertirse en un formato con datos registrados, pero sin capacidad para orientar la toma de decisiones. Por ello, antes de elaborarlo, es importante conocer los principios que orientan su construcción y aplicación. Los principales principios que orientan la organización de un presupuesto personal y su aplicación en el manejo de las finanzas cotidianas se presentan a continuación:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Realismo
                  p.mb-0 Consiste en registrar ingresos y gastos con valores verificables y acordes con la situación económica real, evitando estimaciones optimistas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Organización
                  p.mb-0 Implica clasificar la información financiera en categorías, como ingresos, gastos fijos, gastos variables, deudas, ahorro y metas, para facilitar su análisis.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Equilibrio
                  p.mb-0 Busca que los gastos no superen los ingresos disponibles, permitiendo ajustar los consumos cuando sea necesario.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Periodicidad
                  p.mb-0 Establece un periodo para planificar y revisar el presupuesto, el cual puede ser semanal, quincenal o mensual, según las necesidades de la persona o la familia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Control
                  p.mb-0 Permite comparar lo planeado con lo ejecutado para identificar diferencias y realizar los ajustes necesarios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Flexibilidad
                  p.mb-0 Facilita modificar el presupuesto cuando cambian los ingresos, los precios, las necesidades o cualquier otra condición económica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La aplicación de estos principios fortalece la utilidad del presupuesto como herramienta para planificar, controlar y ajustar el manejo de los recursos económicos.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Características del presupuesto personal
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_2(data-aos="fade-right")
            p.mb-0 El presupuesto personal se caracteriza por ser una herramienta planificada, ordenada, medible, ajustable, personalizada y orientada a la toma de decisiones. Estas características permiten organizar la información financiera, hacer seguimiento al uso de los recursos y adaptar el presupuesto a las condiciones económicas de cada persona o núcleo familiar.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img10.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Una característica fundamental del presupuesto personal es que debe responder a la realidad de quien lo elabora. No existe un único presupuesto válido para todas las personas, porque cada hogar tiene ingresos, gastos, responsabilidades, deudas, necesidades y metas diferentes. Por ejemplo, una persona con ingresos fijos puede programar sus pagos con mayor estabilidad, mientras que una persona con ingresos variables debe administrar sus recursos con mayor prudencia y reservar dinero para los periodos de menor ingreso (Escobar R., 2024). 
      p.mb-5 Las siguientes características permiten comprender cómo el presupuesto personal facilita la planeación, el control y la toma de decisiones financieras: 
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img11.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Planificado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Anticipa el uso de los recursos antes de realizar los gastos. Por ejemplo, separar dinero para arriendo, alimentación y transporte antes de efectuar otros consumos.
            .row(titulo="Ordenado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Clasifica los ingresos, los gastos y las obligaciones en categorías que facilitan su organización y seguimiento.
            .row(titulo="Medible").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite comparar los valores presupuestados con los gastos reales para identificar diferencias y realizar ajustes.
            .row(titulo="Ajustable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede modificarse cuando cambian los ingresos, los gastos u otras condiciones económicas. Por ejemplo, reducir gastos variables cuando disminuye el ingreso.
            .row(titulo="Personalizado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se adapta a la realidad económica, las responsabilidades y las necesidades de cada persona o familia.
            .row(titulo="Orientado a decisiones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita establecer prioridades, como pagar una deuda, ahorrar o aplazar una compra según la disponibilidad de recursos.
      p.mb-0 Estas características permiten que el presupuesto personal sea una herramienta flexible y útil para administrar los recursos de acuerdo con las condiciones y objetivos financieros de cada persona o núcleo familiar.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Clases y tipos de presupuesto
      p.mb-5 Las clases y tipos de presupuesto permiten seleccionar el formato más adecuado de acuerdo con las necesidades financieras de una persona o de un núcleo familiar. Su elección depende del propósito que se desea alcanzar, de la estabilidad de los ingresos, del nivel de las obligaciones económicas y de las metas definidas. Contar con diferentes alternativas facilita adaptar la planeación financiera a cada situación. Los distintos tipos de presupuesto responden a necesidades específicas y contribuyen a organizar de manera más eficiente la administración de los recursos:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presupuesto mensual
                  p.mb-0 Organiza los ingresos y los gastos de cada mes. Se recomienda cuando los ingresos y las obligaciones se reciben y pagan mensualmente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presupuesto semanal
                  p.mb-0 Facilita el control de gastos frecuentes o diarios. Es útil cuando se requiere hacer seguimiento a consumos pequeños y repetitivos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presupuesto familiar
                  p.mb-0 Integra los ingresos, los gastos y las responsabilidades económicas del hogar. Se utiliza cuando varias personas comparten el presupuesto familiar.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presupuesto por metas
                  p.mb-0 Permite planificar recursos para alcanzar un objetivo específico, como estudiar, adquirir una vivienda, comprar herramientas o realizar una inversión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presupuesto de deuda
                  p.mb-0 Organiza las cuotas, las fechas de pago y los saldos pendientes. Se recomienda cuando existen créditos, préstamos o compras financiadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presupuesto de emergencia
                  p.mb-0 Destina recursos para atender situaciones imprevistas. Su propósito es conformar un fondo de respaldo que fortalezca la estabilidad financiera.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presupuesto de control de gastos
                  p.mb-0 Ayuda a identificar y reducir los gastos que no son prioritarios. Resulta conveniente cuando los egresos superan o afectan el ingreso disponible.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img18.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La elección del tipo de presupuesto debe responder a la realidad financiera de cada persona o familia, de manera que facilite el cumplimiento de las obligaciones, el control de los recursos y el logro de las metas propuestas.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Métodos de elaboración del presupuesto
      p.mb-5 Los métodos de elaboración del presupuesto corresponden a diferentes formas de organizar la información financiera para distribuir adecuadamente los recursos disponibles. En el contexto personal, estos métodos deben ser sencillos, comprensibles y ajustarse a la realidad económica de cada persona o familia. La selección del método depende del propósito financiero, la estabilidad de los ingresos y las necesidades que se buscan atender. Cada método ofrece una forma diferente de organizar el presupuesto y responde a situaciones financieras específicas:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img19.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img20.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Método por ingresos y gastos
                  p.mb-0.text-center Parte de los ingresos disponibles y distribuye los recursos entre los diferentes gastos. Es apropiado para organizar el presupuesto mensual.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img21.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Método por prioridades
                  p.mb-0.text-center Ordena primero los gastos indispensables y las obligaciones económicas. Resulta útil cuando los recursos son limitados y es necesario establecer prioridades.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img22.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Método por metas
                  p.mb-0.text-center Define un objetivo, el valor necesario para alcanzarlo y el plazo previsto. Facilita el ahorro orientado al cumplimiento de una meta específica.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img23.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Método de control de gastos
                  p.mb-0.text-center Registra los consumos durante un periodo para identificar oportunidades de ajuste y mejorar el uso de los recursos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img24.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Método de reducción de deuda
                  p.mb-0.text-center Prioriza el pago de cuotas, saldos y fechas de vencimiento. Se recomienda cuando las obligaciones financieras afectan el ingreso disponible.
          p.mb-0 La elección del método depende de las necesidades financieras de cada persona y puede ajustarse conforme cambien los ingresos, los gastos o las metas establecidas.
      Separador
      #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.6 Componentes del presupuesto: ingresos, gastos y costos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_1(data-aos="fade-right")
            p.mb-0 Los componentes del presupuesto personal permiten organizar la información financiera necesaria para planificar el uso de los recursos. Entre ellos se encuentran los ingresos, los gastos, los costos, el ahorro y las deudas. Identificar cada uno de estos elementos facilita conocer la situación económica, establecer prioridades y elaborar un presupuesto acorde con la realidad financiera (López, 2026).
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img25.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 En el presupuesto personal, los ingresos pueden clasificarse como fijos, variables u ocasionales; los gastos pueden organizarse en fijos y variables; y los costos adquieren especial importancia cuando la persona desarrolla actividades independientes, presta servicios o administra un pequeño emprendimiento. Diferenciar estos componentes evita confundir el dinero recibido con los recursos realmente disponibles para el hogar. 
      p.mb-5 Los principales componentes del presupuesto personal y su función dentro de la organización financiera se resumen a continuación:
      SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t2/img26.png').m-auto
          h4.mb-3.estilo-text Ingresos
          p.mb-0.text-center Corresponden a las entradas de dinero recibidas durante un periodo. Incluyen salario, ventas, pensión, apoyo familiar, honorarios u otras fuentes de ingreso.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t2/img27.png').m-auto
          h4.mb-3.estilo-text Gastos fijos
          p.mb-0.text-center Son pagos periódicos y relativamente estables, como arriendo, servicios públicos, cuotas o transporte habitual.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t2/img28.png').m-auto
          h4.mb-3.estilo-text Gastos variables
          p.mb-0.text-center Comprenden los pagos que cambian según el consumo o las decisiones personales, como alimentación, recreación, compras personales o imprevistos.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t2/img29.png').m-auto
          h4.mb-3.estilo-text Costos
          p.mb-0.text-center Son los recursos necesarios para sostener una actividad o generar ingresos, como insumos, empaques, materiales, transporte o herramientas.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t2/img30.png').m-auto
          h4.mb-3.estilo-text Ahorro
          p.mb-0.text-center Corresponde a la parte del ingreso que se reserva para atender emergencias o cumplir metas financieras, como educación, vivienda o inversión.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t2/img31.png').m-auto
          h4.mb-3.estilo-text Deudas
          p.mb-0.text-center Incluyen las obligaciones adquiridas con personas o entidades, como créditos, préstamos o compras a cuotas.
      p.mb-0 La identificación de estos componentes permite elaborar un presupuesto más preciso, facilitar el control de los recursos y fortalecer la toma de decisiones financieras.
      Separador
      #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.7 Financiación, deudas y obligaciones personales
      p.mb-5 La financiación permite acceder a recursos para cubrir una #[b necesidad, adquirir un bien, desarrollar una actividad o atender una situación específica]; sin embargo, también genera compromisos de pago. En las finanzas personales puede presentarse mediante #[b créditos, préstamos familiares, compras a cuotas, tarjetas de crédito, créditos educativos, créditos de consumo u otras obligaciones]. Antes de asumir una financiación, es importante revisar el valor total de la obligación, la cuota, el plazo, la tasa de interés, los costos asociados y la capacidad real de pago (Congreso de Colombia, 2009).
      .bg___color_2
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img32.png', alt='').m-auto
            .col-xl
              .row.mb-3
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t2/img33.svg', alt='').m-auto
                .col-xl
                  p.mb-0 Las deudas no siempre representan una situación negativa. Pueden contribuir a satisfacer una necesidad importante o mejorar las condiciones de vida cuando se adquieren de manera responsable. No obstante, se convierten en un riesgo si se asumen sin planeación, si las cuotas superan la capacidad de pago o si se utilizan para cubrir gastos cotidianos sin una fuente estable de ingresos. Por ello, el presupuesto debe registrar las obligaciones financieras con información que facilite su seguimiento y cumplimiento oportuno.
              p.mb-0 La información relacionada con las deudas y las obligaciones personales puede organizarse mediante un registro que facilite el seguimiento de los pagos, los saldos pendientes y las fechas de vencimiento:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Registro de deudas y obligaciones personales
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Obligación
                      th.ajuste-border-tabla.texto-left Valor total
                      th.ajuste-border-tabla.texto-left Cuota mensual
                      th.ajuste-border-tabla.texto-left Fecha de pago
                      th.ajuste-border-tabla.texto-left Saldo pendiente
                      th.texto-left Observación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Crédito de consumo
                      td.ajuste-border-tabla.texto-left $2.000.000
                      td.ajuste-border-tabla.texto-left $180.000
                      td.ajuste-border-tabla.texto-left Día 15
                      td.ajuste-border-tabla.texto-left $1.400.000
                      td.texto-left Priorizar el pago puntual.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Préstamo familiar
                      td.ajuste-border-tabla.texto-left $600.000
                      td.ajuste-border-tabla.texto-left $100.000
                      td.ajuste-border-tabla.texto-left Día 30
                      td.ajuste-border-tabla.texto-left $300.000
                      td.texto-left Acordar fechas claras.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra a cuotas
                      td.ajuste-border-tabla.texto-left $480.000
                      td.ajuste-border-tabla.texto-left $80.000
                      td.ajuste-border-tabla.texto-left Día 10
                      td.ajuste-border-tabla.texto-left $240.000
                      td.texto-left Evitar nuevas compras a cuotas.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Servicio pendiente
                      td.ajuste-border-tabla.texto-left $150.000
                      td.ajuste-border-tabla.texto-left $150.000
                      td.ajuste-border-tabla.texto-left Día 5
                      td.ajuste-border-tabla.texto-left $150.000
                      td.texto-left Pago inmediato para evitar recargos.
          p.mb-0 Registrar las obligaciones financieras permite conocer el nivel de endeudamiento, programar los pagos y disminuir el riesgo de incumplimientos que afecten la estabilidad económica.
      Separador
      #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.8 Proyecciones presupuestales y variables financieras
      p Las proyecciones presupuestales permiten anticipar el comportamiento de los ingresos, los gastos, las deudas, el ahorro y las metas en periodos futuros. Su finalidad es prever si los recursos serán suficientes para cubrir las obligaciones, identificar posibles faltantes y realizar ajustes antes de que se presenten dificultades. En el ámbito personal, estas proyecciones pueden elaborarse para una semana, un mes, un trimestre o un año, según las características de los ingresos y los objetivos financieros.
      p.mb-5 Las variables financieras corresponden a factores que pueden modificar el presupuesto durante el periodo de planeación. Reconocerlas facilita anticipar su efecto y adoptar medidas que contribuyan a mantener el equilibrio financiero. Las principales variables que pueden afectar el presupuesto personal y algunas acciones para reducir su impacto se resumen a continuación:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Disminución del ingreso
                  p.mb-0 Puede dificultar el cubrimiento de los gastos fijos. Se recomienda reducir los gastos variables y priorizar las obligaciones básicas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aumento de precios
                  p.mb-0 Incrementa los gastos de alimentación, transporte o servicios. Conviene revisar los consumos y comparar alternativas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Nueva deuda
                  p.mb-0 Reduce el ingreso disponible. Antes de asumirla, es importante evaluar la capacidad de pago.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img36.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gasto de salud
                  p.mb-0 Genera una salida de dinero no programada. Mantener un fondo para imprevistos ayuda a disminuir su impacto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img37.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Temporada escolar
                  p.mb-0 Aumenta los gastos familiares. Es recomendable proyectar con anticipación los costos de matrículas, útiles y transporte.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img38.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ingreso variable
                  p.mb-0 Dificulta comprometer pagos permanentes. Calcular promedios y reservar recursos durante los meses de mayor ingreso favorece la estabilidad financiera.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img39.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Anticipar estas variables permite elaborar un presupuesto más flexible y fortalece la capacidad para responder a los cambios que pueden presentarse en la economía personal o familiar.
      Separador
      #t_2_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.9 Clasificación de la información financiera personal
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La clasificación de la información financiera personal consiste en organizar los datos económicos en categorías que faciliten la elaboración del presupuesto. Este proceso permite transformar registros dispersos en información útil para analizar la situación financiera y tomar decisiones. Para ello, es necesario identificar ingresos, gastos fijos, gastos variables, costos, deudas, ahorro, metas y soportes, ya que cada uno cumple una función dentro del presupuesto y contribuye a reconocer los recursos disponibles y las obligaciones que deben atenderse.
          .box___style_1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img40.jpg', alt='').m-auto
              .col-xl.fit___box_container
                p.mb-0 Clasificar la información también facilita la selección del formato presupuestal más adecuado. Una persona con ingresos fijos y gastos estables puede utilizar un formato mensual sencillo; quien tiene ingresos variables puede requerir un formato que permita registrar promedios y variaciones; una familia con múltiples obligaciones puede necesitar un mayor nivel de detalle; y una persona que desarrolla una actividad productiva deberá incorporar una sección destinada al registro de costos. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img41.png', alt='').m-auto
      p.mb-5 Las categorías que conviene organizar antes de diligenciar un presupuesto personal se resumen a continuación:
      .bg___color_3
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img42.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img43.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ingresos
                  p.mb-0.text-center Registrar la fuente, el valor y la frecuencia. Esta información permite determinar los recursos disponibles.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img44.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Gastos fijos
                  p.mb-0.text-center Incluir los pagos periódicos y obligatorios para priorizar los compromisos básicos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img45.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Gastos variables
                  p.mb-0.text-center Registrar los consumos que cambian según las decisiones personales, con el fin de identificar posibles ajustes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img46.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Costos
                  p.mb-0.text-center Incorporar los recursos utilizados para sostener una actividad o generar ingresos, lo que facilita calcular el dinero realmente disponible.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img47.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Deudas
                  p.mb-0.text-center Registrar cuotas, saldos, fechas y plazos para hacer seguimiento a las obligaciones financieras.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img48.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ahorro
                  p.mb-0.text-center Indicar el valor reservado y el propósito, favoreciendo el cumplimiento de metas y la atención de imprevistos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img49.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Metas
                  p.mb-0.text-center Definir el objetivo, el valor estimado y el plazo para orientar las decisiones financieras.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img50.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Soportes
                  p.mb-0.text-center Conservar recibos, facturas, extractos y comprobantes para respaldar y verificar la información registrada.
          p La organización de esta información constituye la base para elaborar un presupuesto coherente con la realidad económica y facilita el seguimiento de los recursos disponibles.
          p.mb-5 Una vez clasificada la información financiera personal, el siguiente paso consiste en organizarla en una secuencia lógica que facilite su incorporación al presupuesto. Este proceso permite avanzar desde el registro de datos hasta la consolidación de un formato que apoye la planeación, el control y la toma de decisiones financieras. La ruta de organización del presupuesto personal puede desarrollarse mediante las siguientes etapas:
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificar los ingresos
                    p.mb-0 Reconocer todas las fuentes de ingreso, su valor y la frecuencia con la que se reciben.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img51.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img52.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Clasificar los gastos
                    p.mb-0 Organizar los gastos en fijos y variables, de acuerdo con su prioridad y necesidad.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registrar las deudas
                    p.mb-0 Identificar las obligaciones, su valor, la cuota, la fecha de pago y el saldo pendiente.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img53.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img54.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Definir el ahorro y las metas
                    p.mb-0 Establecer un monto destinado al ahorro y fijar metas financieras de corto, mediano o largo plazo.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Organizar la información en un formato presupuestal
                    p.mb-0 Registrar todos los datos en el formato seleccionado para facilitar la planeación, el control y la toma de decisiones.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img55.png', alt='' style="width: 300px").m-auto
          p Como resultado de este proceso, se obtiene información financiera organizada que facilita la elaboración del presupuesto y contribuye a un manejo más responsable de los recursos económicos.
          p.mb-0 El presupuesto personal permite organizar la información financiera para tomar decisiones acordes con la realidad económica de cada persona o familia. Para elaborarlo adecuadamente, es necesario comprender su concepto, sus principios, sus características, sus clases, sus métodos y sus componentes; además, es importante reconocer los ingresos, los gastos, los costos, las deudas, las alternativas de financiación y las variables que pueden afectar su cumplimiento. Este proceso proporciona las bases para seleccionar el formato presupuestal más adecuado y administrarlo de manera organizada y responsable.

</template>

<script>
export default {
  name: 'Tema2',
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
