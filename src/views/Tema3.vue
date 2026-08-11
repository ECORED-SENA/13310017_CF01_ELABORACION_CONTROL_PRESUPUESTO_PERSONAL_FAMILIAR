<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Normativa, ética y requerimientos técnicos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El manejo del presupuesto personal requiere más que la identificación de ingresos, gastos, costos y deudas. También implica reconocer los lineamientos normativos, actuar con responsabilidad frente a la información financiera y aplicar criterios técnicos que permitan organizar los datos de manera clara y verificable. La normativa financiera, la seguridad y salud en el trabajo, los lineamientos ambientales y los principios éticos orientan el uso responsable de los recursos y fortalecen la toma de decisiones en los ámbitos personal, familiar y productivo.
          p.mb-0 La organización del presupuesto personal debe apoyarse en información real, completa y coherente con la situación económica de quien lo elabora. Cuando una persona conoce sus derechos y deberes como consumidor financiero, conserva los soportes de pago, revisa las condiciones de una deuda, registra con veracidad sus ingresos y gastos y promueve el uso responsable de los recursos, puede elaborar un presupuesto más confiable y útil para la planeación financiera.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img1.png', alt='').m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Normativa financiera aplicada a las finanzas personales
      p.mb-5 La normativa financiera aplicada a las finanzas personales permite reconocer derechos, deberes y responsabilidades al utilizar productos, servicios o mecanismos de financiación. En la vida cotidiana, se relaciona con decisiones como abrir una cuenta, solicitar un crédito, realizar compras a cuotas, utilizar una tarjeta, ahorrar en una entidad financiera o revisar información sobre costos, tasas, plazos y condiciones. Las siguientes disposiciones contribuyen a fortalecer el manejo responsable del presupuesto personal y la toma de decisiones financieras:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img2.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Ley 1328 de 2009").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Protege los derechos del consumidor financiero. Su aplicación implica revisar costos, tasas, plazos, condiciones, valor de la cuota, fecha de pago, saldo pendiente y consecuencias del incumplimiento antes de incorporar una obligación al presupuesto.
            .row(titulo="Decreto 457 de 2014").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Promueve la educación económica y financiera para fortalecer decisiones relacionadas con ahorro, crédito, consumo y presupuesto. Desde esta perspectiva, el presupuesto funciona como una herramienta formativa para analizar recursos, riesgos y metas.
            .row(titulo="Decreto 1072 de 2015").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece disposiciones sobre seguridad y salud en el trabajo, relevantes cuando los ingresos dependen de una actividad laboral o productiva.
            .row(titulo="Ley 99 de 1993").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Orienta la gestión y conservación ambiental mediante el uso responsable de recursos y la reducción de desperdicios en gastos personales o productivos.
      p.mb-0 Conocer estas disposiciones permite elaborar un presupuesto más confiable, revisar las condiciones de las obligaciones económicas y tomar decisiones acordes con la normativa vigente.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Seguridad y salud en el trabajo en el manejo de recursos personales
      p La seguridad y salud en el trabajo se relacionan con el presupuesto personal cuando los ingresos dependen de una actividad laboral, independiente, productiva o familiar. Una persona que presta servicios, produce alimentos, vende productos, realiza oficios o trabaja desde casa debe considerar que su capacidad para generar ingresos también depende de condiciones seguras, herramientas adecuadas, prevención de accidentes y cuidado de la salud. Si estos aspectos se descuidan, pueden surgir gastos no previstos, interrupciones en los ingresos o dificultades para cumplir las obligaciones económicas (Decreto 1072 de 2015).
      p.mb-5 Los aspectos relacionados con la seguridad y salud en el trabajo pueden incorporarse al presupuesto como gastos preventivos que contribuyen a proteger la actividad económica y reducir riesgos:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Elementos de protección
                  p.mb-0 El uso de guantes, tapabocas, gafas, delantal o calzado adecuado requiere destinar recursos para su compra, reposición y mantenimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Higiene y limpieza
                  p.mb-0 En actividades relacionadas con alimentos, belleza, servicios personales o trabajo en casa, es necesario incluir productos de limpieza, desinfección y manejo higiénico del espacio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mantenimiento de herramientas
                  p.mb-0 El uso frecuente de equipos, utensilios, máquinas o implementos de trabajo exige programar recursos para mantenimiento preventivo o reparaciones básicas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Condiciones del espacio
                  p.mb-0 Aspectos como iluminación, ventilación, orden, ergonomía y zonas de circulación pueden requerir adecuaciones que favorezcan un entorno de trabajo seguro.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Prevención de accidentes
                  p.mb-0 Los riesgos asociados con cortes, quemaduras, caídas, posturas inadecuadas o manipulación de cargas hacen necesario prever recursos para botiquines, señalización básica u otros elementos preventivos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cuidado de la salud
                  p.mb-0 La fatiga, las jornadas extensas, los movimientos repetitivos o la exposición a riesgos requieren incorporar prácticas de autocuidado y algunos gastos preventivos dentro del presupuesto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img8.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Incorporar estos aspectos al presupuesto permite estimar con mayor precisión los costos asociados a la actividad laboral o productiva y contribuye a proteger tanto la salud como la estabilidad económica.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Lineamientos ambientales y uso responsable de los recursos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2(data-aos="fade-right")
            p.mb-0 Los lineamientos ambientales se relacionan con el presupuesto personal porque el uso de recursos como el agua, la energía, los alimentos, el transporte, los empaques, los materiales y otros bienes de consumo influye directamente en los gastos del hogar. Analizar estos consumos permite identificar desperdicios, reducir costos innecesarios y fortalecer el uso responsable de los recursos disponibles (Ley 99 de 1993).
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img9.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 El uso responsable de los recursos también adquiere importancia cuando una persona desarrolla una actividad independiente o productiva. En estos casos, conviene planificar la compra de insumos, controlar el consumo de materiales, reducir pérdidas y gestionar adecuadamente los residuos para evitar incrementos innecesarios en los costos de operación. 
      p.mb-5 Diversas acciones pueden contribuir al uso responsable de los recursos y favorecer una mejor administración del presupuesto personal: 
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img10.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Agua").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Su consumo influye en el valor de los servicios públicos y en los costos de algunas actividades. Se recomienda revisar fugas, controlar los tiempos de uso y evitar desperdicios.
            .row(titulo="Energía").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incide en el pago de los servicios y en el funcionamiento de equipos o electrodomésticos. Conviene apagar los equipos que no se utilizan, aprovechar la luz natural y revisar consumos elevados.
            .row(titulo="Alimentos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Representan uno de los gastos más frecuentes del hogar. Planificar las compras, organizar las porciones y evitar pérdidas contribuye a optimizar este recurso.
            .row(titulo="Transporte").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede incrementar los gastos variables del presupuesto. Programar recorridos, agrupar diligencias y comparar alternativas de movilidad favorece un mejor aprovechamiento de los recursos.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Insumos y materiales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Forman parte de los costos de actividades independientes o productivas. Es recomendable adquirir únicamente la cantidad necesaria y controlar los inventarios básicos.
            .row(titulo="Empaques y residuos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden generar costos adicionales y desperdicio de materiales. Utilizar empaques adecuados, reducir sobrantes y separar los residuos cuando sea posible contribuye a disminuir estos gastos.
            .row(titulo="Compras personales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden convertirse en gastos no prioritarios. Diferenciar las necesidades de los deseos y evitar las compras impulsivas favorece el equilibrio del presupuesto.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img11.png", alt="" ).m-auto
      p.mb-0 La incorporación de criterios ambientales en la administración de los recursos permite fortalecer el presupuesto personal, reducir desperdicios y promover decisiones económicas más responsables.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Identificación, apropiación e importancia de la normativa
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_3(data-aos="fade-right")
            p.mb-0 Identificar la normativa significa reconocer los lineamientos que se relacionan con las decisiones financieras, laborales, productivas o ambientales que inciden en el presupuesto personal. En este proceso no se espera memorizar normas, sino comprender qué aspectos deben revisarse antes de asumir una obligación, registrar un gasto, adquirir un producto financiero, desarrollar una actividad económica o utilizar recursos que generan costos para el hogar.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img12.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 La apropiación de estos lineamientos se refleja en acciones cotidianas, como conservar los soportes de pago, revisar extractos, verificar tasas de interés, consultar las condiciones de un crédito, registrar las fechas de vencimiento y controlar las obligaciones financieras. Estas prácticas fortalecen la organización del presupuesto y favorecen una toma de decisiones más responsable (Ley 1328 de 2009). 
      p.mb-5 Los principales aspectos normativos que pueden incorporarse al presupuesto personal se sintetizan a continuación:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información financiera clara
                  p.mb-0 Revisar costos, intereses, plazos, cuotas y condiciones para registrar el valor real de las obligaciones antes de asumirlas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Derechos del consumidor financiero
                  p.mb-0 Conocer los derechos relacionados con la atención, la información y la educación financiera antes de utilizar productos o servicios financieros.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Deberes frente a las obligaciones
                  p.mb-0 Identificar fechas de pago, saldos pendientes y consecuencias de la mora para programar oportunamente los compromisos económicos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Soportes financieros
                  p.mb-0 Conservar recibos, facturas, extractos, contratos y comprobantes que respalden la información registrada en el presupuesto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Seguridad en actividades productivas
                  p.mb-0 Incorporar los costos asociados a elementos de protección, mantenimiento de herramientas y condiciones seguras cuando los ingresos dependen de una actividad laboral o independiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Uso responsable de los recursos
                  p.mb-0 Analizar el consumo de agua, energía, materiales, alimentos e insumos para identificar oportunidades de ahorro y reducción de gastos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img18.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La incorporación de estos aspectos fortalece el presupuesto personal, facilita el cumplimiento de las obligaciones y promueve decisiones acordes con la normativa vigente.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Principios éticos en el manejo de la información financiera
      p.mb-5 Los principios éticos orientan la forma en que una persona registra, analiza y utiliza la información relacionada con sus ingresos, gastos, deudas, costos, ahorro y metas. En el presupuesto personal, estos principios se reflejan en acciones como registrar información veraz, reconocer las obligaciones existentes, no ocultar deudas, evitar la sobreestimación de los ingresos y registrar todos los gastos que afectan la situación económica. Cuando la información financiera se administra con criterios éticos, el presupuesto se convierte en una herramienta confiable para la toma de decisiones.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t3/img19.jpg', alt='').m-auto
              .col-xl.fit___box_container
                p.mb-0 La veracidad exige registrar información real y sustentada en datos comprobables. La responsabilidad implica asumir compromisos de acuerdo con la capacidad económica y cumplir oportunamente las obligaciones. La transparencia adquiere especial importancia cuando el presupuesto involucra a varias personas del hogar, ya que favorece acuerdos sobre gastos, ahorro y metas comunes. Por su parte, la prudencia orienta la toma de decisiones, evitando comprometer recursos con ingresos inciertos o asumir obligaciones sin analizar previamente sus consecuencias. Finalmente, la organización y la corresponsabilidad contribuyen a conservar la información financiera y fortalecer la administración compartida de los recursos. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img20.png', alt='').m-auto
      p.mb-5 Los principios éticos que orientan el manejo de la información financiera pueden resumirse de la siguiente manera:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img21.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img22.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Veracidad
                  p.mb-0.text-center Registrar información real y comprobable sobre ingresos, gastos, costos y deudas para facilitar decisiones ajustadas a la realidad económica.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img23.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Responsabilidad
                  p.mb-0.text-center Reconocer las obligaciones y asumir compromisos acordes con la capacidad de pago, programando oportunamente las fechas de vencimiento.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img24.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Transparencia
                  p.mb-0.text-center Compartir y registrar la información financiera relevante cuando el presupuesto involucra a varias personas del hogar.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img25.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Prudencia
                  p.mb-0.text-center Evitar comprometer gastos permanentes con ingresos inciertos o adquirir obligaciones sin analizar previamente sus condiciones.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img26.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Organización
                  p.mb-0.text-center Clasificar y conservar recibos, facturas, extractos, contratos y demás soportes que respaldan la información financiera.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img27.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Corresponsabilidad
                  p.mb-0.text-center Promover decisiones compartidas sobre prioridades, metas, gastos y obligaciones cuando el presupuesto es administrado por varias personas.
          p.mb-0 La aplicación de estos principios fortalece la confiabilidad del presupuesto, favorece una administración responsable de los recursos y contribuye al cumplimiento de las metas financieras personales y familiares.
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.6 Transparencia, responsabilidad y veracidad en el presupuesto personal
      p.mb-5 La transparencia, la responsabilidad y la veracidad son principios que fortalecen la elaboración del presupuesto personal. Su aplicación permite registrar información confiable, analizar la situación económica con mayor precisión y tomar decisiones acordes con la capacidad financiera de la persona o del núcleo familiar. Los siguientes principios contribuyen a fortalecer la organización y el uso responsable de la información financiera:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Transparencia")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img28.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Transparencia
              p.mb-0 Consiste en registrar de manera completa los ingresos, los gastos, las deudas, los costos, las fechas de pago, los saldos pendientes y las metas financieras. Cuando el presupuesto involucra a varias personas del hogar, también favorece el diálogo, la definición de prioridades y la toma de decisiones compartidas.
        .py-3.py-md-4(titulo="Responsabilidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img29.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Responsabilidad
              p.mb-0 Implica reconocer la capacidad real de pago antes de asumir nuevas obligaciones, programar los pagos oportunamente, revisar los compromisos financieros y ajustar los gastos cuando sea necesario para mantener el equilibrio del presupuesto.
        .py-3.py-md-4(titulo="Veracidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img30.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Veracidad
              p.mb-0 Exige que la información registrada corresponda a la realidad económica. Para ello, es recomendable respaldar los datos con recibos, facturas, extractos, comprobantes de pago, registros de ventas o anotaciones periódicas de los gastos.
      p.mb-0 La aplicación conjunta de estos principios fortalece la confiabilidad del presupuesto personal, facilita la planeación financiera y favorece el cumplimiento de las obligaciones y las metas económicas (Ministerio de Educación, 2022).
      Separador
      #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.7 Requerimientos técnicos para el alistamiento presupuestal
      p.mb-5 Los requerimientos técnicos para el alistamiento presupuestal corresponden a las condiciones mínimas necesarias para preparar la información antes de diligenciar un presupuesto personal. Su finalidad es organizar los datos con claridad, coherencia y respaldo, de manera que el presupuesto refleje la realidad económica de la persona o del núcleo familiar y facilite la toma de decisiones. Los aspectos que deben revisarse durante el alistamiento presupuestal se resumen a continuación:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Período de análisis").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define si el presupuesto será semanal, quincenal, mensual o por temporada, permitiendo organizar la información según la frecuencia de los ingresos y los gastos.
            .row(titulo="Identificación de ingresos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registra la fuente, el valor, la frecuencia y la estabilidad de los ingresos para conocer los recursos realmente disponibles.
            .row(titulo="Clasificación de gastos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Organiza los gastos en fijos, variables, eventuales y prioritarios para facilitar la definición de prioridades y el control del consumo.
            .row(titulo="Registro de deudas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluye la cuota, el saldo, el plazo, la tasa de interés cuando aplique y la fecha de pago para controlar las obligaciones financieras.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img31.png", alt="" ).m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img32.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Identificación de costos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reconoce los recursos utilizados para generar ingresos o sostener una actividad económica, evitando confundirlos con el dinero disponible para el hogar.
            .row(titulo="Conservación de soportes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Organiza recibos, facturas, extractos, contratos y comprobantes que respaldan la información financiera registrada.
            .row(titulo="Selección de categorías").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define los grupos de información que integrarán el presupuesto para facilitar su diligenciamiento y análisis.
            .row(titulo="Revisión de coherencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Compara ingresos, gastos, costos, deudas y metas para detectar errores, faltantes o desequilibrios antes de elaborar el presupuesto.
      p La revisión de estos requerimientos permite preparar un presupuesto con información organizada, verificable y acorde con la situación financiera de cada persona o familia.
      p.mb-5 A continuación, se presenta un pódcast que explica la ruta ética y técnica para alistar un presupuesto personal, destacando los principios, procedimientos y criterios necesarios para organizar la información financiera y apoyar la toma de decisiones responsables.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t3/img33.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Ruta ética y técnica para alistar el presupuesto personal"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t3/img34.jpg" ).m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img35.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Los elementos que fortalecen todo el proceso: 
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Educación financiera para comprender la información y tomar decisiones fundamentadas.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Seguridad de la información para proteger los datos personales y financieros.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Uso responsable de los recursos para reducir desperdicios y gastos innecesarios.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Diálogo y corresponsabilidad para fortalecer la planeación financiera del hogar.
          br
          p La integración de los requerimientos técnicos, los principios éticos y la normativa aplicable fortalece el alistamiento del presupuesto personal y proporciona una base confiable para elaborar un presupuesto que facilite la planeación, el control de los recursos y el cumplimiento de las metas financieras.
          br

</template>

<script>
import audio1 from '@/assets/curso/temas/t3/audios/Ruta_etica_tecnica_alistar_presupuesto_personal.mp3'
export default {
  name: 'Tema3',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
