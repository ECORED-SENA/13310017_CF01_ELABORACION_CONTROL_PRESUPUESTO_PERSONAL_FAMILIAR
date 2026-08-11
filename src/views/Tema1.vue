<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Finanzas personales y diagnóstico inicial
      p.mb-5 El manejo de las finanzas personales parte del reconocimiento de la realidad económica de una persona o de un núcleo familiar. Antes de elaborar un presupuesto, es necesario comprender cómo se reciben los ingresos, en qué se utilizan los recursos, cuáles son las necesidades prioritarias, qué obligaciones existen y qué hábitos influyen en la forma de consumir, ahorrar o endeudarse. Este diagnóstico inicial permite organizar la información financiera y establecer una base confiable para tomar decisiones acordes con la capacidad económica real.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 En la vida cotidiana, muchas personas identifican sus dificultades financieras únicamente cuando el dinero no alcanza para cubrir todos los pagos del mes. Sin embargo, el problema no siempre está relacionado con el nivel de ingresos, sino también con la ausencia de registro, la falta de planeación, el uso inadecuado del crédito, la acumulación de pequeños gastos o la confusión entre necesidades y deseos. Por esta razón, el diagnóstico inicial permite pasar de una percepción general del dinero a una comprensión ordenada de la situación financiera personal.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Definición de finanzas personales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2(data-aos="fade-right")
            p.mb-0 Las finanzas personales pueden entenderse como el conjunto de decisiones, conocimientos, hábitos y herramientas que utiliza una persona para administrar sus recursos económicos de acuerdo con sus necesidades, responsabilidades y metas. Esta administración comprende la identificación de ingresos, gastos, ahorro, deudas, consumo, inversión, protección frente a imprevistos y planeación de objetivos futuros. Desde esta perspectiva, las finanzas personales no se limitan a recibir dinero, sino que implican organizarlo, distribuirlo y utilizarlo de manera responsable (López, 2026).
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img2.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 El concepto de finanzas personales también se relaciona con la capacidad de tomar decisiones informadas. Una persona toma decisiones financieras cuando elige qué comprar, cuándo pagar, cuánto ahorrar, si adquiere una deuda, si utiliza un producto financiero o si aplaza un gasto para atender una necesidad más urgente. En consecuencia, aprender sobre finanzas personales permite analizar las consecuencias de cada decisión y reconocer que el uso del dinero influye en el bienestar individual y familiar (Ministerio de Educación, 2022).
      p.mb-5 Desde una perspectiva aplicada, las finanzas personales ayudan a responder preguntas concretas, tales como:
      .bg___carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img4.svg' style="max-width: 90px").m-auto
              h4.mb-0.estilo-text ¿Cuánto dinero se recibe al mes?
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img5.svg' style="max-width: 90px").m-auto
              h4.mb-0.estilo-text ¿Cuáles son los gastos indispensables?
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img6.svg' style="max-width: 90px").m-auto
              h4.mb-0.estilo-text ¿Qué deudas existen?
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img7.svg' style="max-width: 90px").m-auto
              h4.mb-0.estilo-text ¿Qué pagos no pueden aplazarse?
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img8.svg' style="max-width: 90px").m-auto
              h4.mb-0.estilo-text ¿Qué gastos pueden reducirse?
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img9.svg' style="max-width: 90px").m-auto
              h4.mb-0.estilo-text ¿Cuánto es posible ahorrar?
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img10.svg' style="max-width: 90px").m-auto
              h4.mb-0.estilo-text ¿Qué metas son alcanzables con los ingresos actuales?
          p.mb-0 Responder estas preguntas facilita el inicio del proceso de organización financiera y permite reunir la información necesaria para elaborar posteriormente un presupuesto personal.
          Separador
          #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.2 Características de las finanzas personales
      p.mb-5 Las finanzas personales presentan diversas características que explican su importancia en la administración de los recursos económicos. Estas características permiten comprender cómo las decisiones financieras influyen tanto en las necesidades del presente como en la planificación del futuro. Las principales características de las finanzas personales se describen a continuación, junto con su alcance en la administración de los recursos económicos: 
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Práctica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Práctica
              p.mb-0 Se refleja en las decisiones cotidianas relacionadas con el uso del dinero. Incluye acciones como pagar compras, ahorrar, utilizar crédito, priorizar obligaciones o comparar precios antes de adquirir un bien o servicio.
        .py-3.py-md-4(titulo="Preventiva")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Preventiva
              p.mb-0 Permite anticipar dificultades financieras antes de que se conviertan en problemas de mayor impacto. Facilita reconocer gastos fijos, deudas y fechas de pago, así como identificar la necesidad de crear un ahorro para atender imprevistos.
        .py-3.py-md-4(titulo="Proyectiva")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Proyectiva
              p.mb-0 Relaciona el uso actual del dinero con el logro de metas futuras, como estudiar, adquirir vivienda, emprender, pagar deudas o conformar un fondo de emergencia. Para alcanzarlas es necesario considerar los ingresos, los gastos, el nivel de endeudamiento y el tiempo disponible.
        .py-3.py-md-4(titulo="Dinámica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Dinámica
              p.mb-0 Cambia según las condiciones de vida de cada persona. Variaciones en los ingresos, nuevas deudas, cambios familiares, enfermedades, desempleo o actividades productivas pueden modificar la situación financiera y hacer necesaria la actualización del presupuesto (Escobar R., 2024).
        .py-3.py-md-4(titulo="Personalizada")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Personalizada
              p.mb-0 Responde a las condiciones económicas, familiares y sociales de cada persona. Por ello, no existe un único modelo de administración financiera, sino que cada presupuesto debe ajustarse a los ingresos, gastos, deudas y prioridades particulares.
      p.mb-0 Estas características evidencian que las finanzas personales constituyen un proceso continuo de organización, análisis y toma de decisiones, cuyo propósito es favorecer un manejo responsable de los recursos y fortalecer la estabilidad económica en diferentes etapas de la vida.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Tipos de finanzas personales
      p.mb-5 Las finanzas personales pueden organizarse según el tipo de decisión que una persona toma frente a la administración de sus recursos. Esta clasificación facilita comprender que el manejo del dinero incluye decisiones relacionadas con la obtención de ingresos, el uso de los recursos, la prevención de riesgos y la planificación de metas futuras. La siguiente clasificación resume los principales tipos de finanzas personales y su finalidad dentro de la administración de los recursos económicos:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Finanzas de ingreso
                  p.mb-0 Corresponden a las fuentes de recursos que recibe una persona o una familia, como salarios, honorarios, ventas, actividades independientes, pensiones, subsidios, arriendos o apoyos familiares. Identificarlas permite conocer con qué recursos se cuenta para cubrir los gastos y planificar objetivos financieros.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Finanzas de consumo
                  p.mb-0 Se relacionan con el uso del dinero para adquirir bienes y servicios, como alimentación, vivienda, transporte, salud, educación, servicios públicos, recreación y vestuario. Su análisis permite diferenciar los gastos indispensables de aquellos que pueden reducirse, aplazarse o eliminarse según la capacidad económica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Finanzas de protección
                  p.mb-0 Están orientadas a prevenir riesgos económicos mediante el ahorro para emergencias, la planeación de pagos, el uso responsable del crédito y la prevención del sobreendeudamiento. Su finalidad es disminuir el impacto financiero de situaciones imprevistas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Finanzas de proyección
                  p.mb-0 Se enfocan en el cumplimiento de metas de mediano y largo plazo, como estudiar, mejorar la vivienda, invertir, emprender o construir patrimonio. Para ello, requieren definir objetivos, estimar costos, establecer plazos y destinar recursos de forma periódica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img19.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Cada uno de estos tipos cumple una función específica dentro de la administración financiera y, en conjunto, contribuye a un manejo más organizado y sostenible de los recursos personales y familiares.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Aplicación de las finanzas personales en la vida cotidiana
      p.mb-5 A continuación, se presenta un video que explica cómo las finanzas personales se reflejan en las decisiones económicas cotidianas, destacando la importancia de la planificación, el presupuesto, el uso responsable del crédito y la adecuada administración de los recursos financieros.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. Las finanzas personales en la vida cotidiana
      p.mb-5 El siguiente ejemplo reúne algunas situaciones cotidianas en las que se aplican las finanzas personales:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img20.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Distribución del ingreso mensual
            p.mb-0.text-center Priorizar gastos básicos, ahorro y pago de obligaciones mediante un presupuesto.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t1/img21.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Uso del crédito
            p.mb-0.text-center Evaluar la capacidad de pago antes de asumir una deuda y conocer los costos asociados.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img22.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Administración de un negocio familiar o actividad independiente
            p.mb-0.text-center Separar los recursos personales de los recursos del negocio para identificar las ganancias reales.
      p.mb-5 Estas situaciones evidencian que la administración financiera depende de decisiones cotidianas que contribuyen a mantener el equilibrio económico y a cumplir las metas personales y familiares.
      .box___style_1(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img23.png', alt='').m-auto
          .col-xl.fit___box_container
            h5 Ejemplo aplicado
            p.mb-0 Una persona recibe #[b $ 1.800.000] mensuales y, además, vende productos durante los fines de semana. Si no separa el dinero obtenido por las ventas, puede considerar que dispone de más recursos para gastos personales. Sin embargo, antes de utilizar esos ingresos, debe descontar el costo de los insumos, el transporte, los empaques y la reposición de mercancía. Al aplicar principios de finanzas personales, identifica qué recursos pertenecen al hogar, cuáles corresponden a la actividad económica y cuánto dinero está realmente disponible para ahorrar, pagar deudas o atender las necesidades familiares.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Hábitos de consumo y manejo del dinero
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2(data-aos="fade-right")
            p.mb-0 Los hábitos de consumo corresponden a los comportamientos que una persona repite al utilizar sus recursos económicos. Algunos favorecen #[b la estabilidad financiera], mientras que otros pueden generar dificultades para administrar el dinero. Identificarlos constituye una parte fundamental del diagnóstico financiero, ya que permite reconocer prácticas que fortalecen o afectan el cumplimiento de las metas económicas.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img24.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 El manejo del dinero requiere prestar atención tanto a los gastos de mayor valor como a aquellos que, aunque son pequeños, se realizan con frecuencia. #[b Compras no planificadas, domicilios, recargas, refrigerios o gastos] por impulso pueden acumularse y reducir la capacidad de ahorro sin que la persona lo advierta.
      p.mb-5 Asimismo, administrar adecuadamente el dinero implica establecer límites para cada categoría de gasto y definir prioridades. Separar primero los recursos destinados a #[b vivienda, alimentación, servicios públicos, transporte, ahorro y obligaciones financieras] facilita mantener el control del presupuesto y reduce el riesgo de utilizar el dinero en gastos que no son prioritarios. La siguiente relación presenta algunos hábitos de consumo, sus posibles efectos y acciones que contribuyen a mejorar la organización financiera:
      SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t1/img25.png').m-auto
          h4.mb-3.estilo-text No registrar los gastos diarios
          p.mb-0.text-center Dificulta conocer el destino del dinero. Como medida de mejora, se recomienda registrar los gastos durante, al menos, un mes.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t1/img26.png').m-auto
          h4.mb-3.estilo-text Comprar por impulso
          p.mb-0.text-center Reduce los recursos disponibles para necesidades prioritarias. Se aconseja esperar antes de comprar y comparar precios.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t1/img27.png').m-auto
          h4.mb-3.estilo-text Usar el crédito sin planeación
          p.mb-0.text-center Compromete ingresos futuros. Es recomendable evaluar previamente la capacidad de pago.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t1/img28.png').m-auto
          h4.mb-3.estilo-text No separar dinero para el ahorro
          p.mb-0.text-center Aumenta la dependencia de préstamos ante imprevistos. Se sugiere destinar una parte del ingreso al ahorro desde el inicio del mes.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t1/img29.png').m-auto
          h4.mb-3.estilo-text Mezclar los recursos personales con los del negocio
          p.mb-0.text-center Genera confusión entre ingresos y ganancias. La mejor práctica consiste en administrar ambos recursos por separado.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t1/img30.png').m-auto
          h4.mb-3.estilo-text Pagar las obligaciones fuera de plazo
          p.mb-0.text-center Puede ocasionar intereses, mora o recargos. Programar las fechas de pago ayuda a evitar estos costos adicionales.
      p.mb-0 Reconocer los hábitos de consumo permite fortalecer el manejo del dinero y facilita la construcción de un presupuesto acorde con la realidad económica de cada persona o familia.
      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.6 Necesidades financieras personales y del núcleo familiar
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Las necesidades financieras personales y del núcleo familiar corresponden a los requerimientos económicos que deben atenderse para garantizar condiciones básicas de #[b vida, bienestar y cumplimiento de las responsabilidades familiares]. Identificarlas permite establecer prioridades, diferenciar los gastos indispensables de aquellos que pueden aplazarse y organizar el presupuesto de acuerdo con la realidad económica de cada hogar.
          p.mb-0 Su análisis debe considerar aspectos como la composición del hogar, la existencia de personas dependientes, la actividad laboral, las obligaciones financieras y las metas familiares. Por esta razón, el diagnóstico financiero debe construirse con información propia y no a partir de modelos generales. La siguiente clasificación reúne las principales necesidades financieras que se presentan en el ámbito personal y familiar: 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img31.png', alt='').m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img32.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Básica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a los gastos indispensables para la vida diaria, como alimentación, vivienda, salud y servicios públicos. Constituye la prioridad principal dentro del presupuesto.
            .row(titulo="Familiar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende los recursos destinados al sostenimiento del hogar, como educación, transporte, comunicación y cuidado de personas dependientes. Su prioridad depende de las características del núcleo familiar.
            .row(titulo="Financiera").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluye las obligaciones adquiridas, como créditos, préstamos y cuotas pendientes. Debe atenderse oportunamente para evitar intereses o sobreendeudamiento.
            .row(titulo="Preventiva").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Agrupa los recursos destinados al ahorro, el fondo de emergencia y otros mecanismos de protección frente a situaciones imprevistas.
            .row(titulo="Proyectiva").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se orienta al logro de objetivos futuros, como educación, vivienda, emprendimiento, adquisición de herramientas o fortalecimiento del patrimonio familiar.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_1(data-aos="fade-right")
            p.mb-0 Además de esta clasificación, es importante diferenciar las #[b necesidades] de los #[b deseos]. Mientras una necesidad responde a un requerimiento prioritario para el bienestar personal o familiar, un deseo corresponde a un consumo que puede generar satisfacción, pero que no siempre resulta indispensable. Esta diferencia facilita la toma de decisiones cuando los recursos son limitados.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img33.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 También conviene distinguir entre #[b gastos periódicos y gastos eventuales]. Los primeros se repiten con frecuencia, como alimentación, arriendo, transporte o servicios públicos, mientras que los segundos surgen en momentos específicos, como matrículas, útiles escolares, reparaciones, medicamentos o emergencias. Anticipar ambos tipos de gasto contribuye a mantener el equilibrio del presupuesto familiar.
      Separador
      #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.7 Fuentes de ingreso personal y familiar
      p Las fuentes de ingreso personal y familiar corresponden a todas las entradas de dinero o recursos que recibe una persona o un núcleo familiar durante un periodo determinado. Pueden provenir de salarios, honorarios, ventas, prestación de servicios, actividades productivas, pensiones, arriendos, subsidios, apoyos familiares, rendimientos, devoluciones o ingresos ocasionales. Identificarlas es fundamental para conocer con qué recursos se cuenta antes de clasificar los gastos y elaborar un presupuesto.
      p.mb-5 Para facilitar su análisis, los ingresos pueden clasificarse en #[b fijos, variables y ocasionales]. Esta clasificación permite reconocer la estabilidad de los recursos disponibles y evitar comprometer gastos permanentes con ingresos que no se reciben de manera constante:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img34.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Fijo
            p.mb-0.text-center Se recibe de manera periódica y con un valor relativamente estable, como un salario mensual o una pensión.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t1/img35.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Variable
            p.mb-0.text-center Cambia según las ventas, las comisiones, las temporadas, las cosechas o la prestación de servicios.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img36.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Ocasional
            p.mb-0.text-center Corresponde a recursos que no se reciben de forma permanente, como una bonificación, una ayuda puntual, una devolución o una venta extraordinaria.
      p.mb-5 En el diagnóstico financiero también es necesario diferenciar el #[b ingreso total] del #[b ingreso disponible], ya que ambos cumplen funciones distintas al momento de elaborar el presupuesto.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img37.jpg')})` }")
        .bloque-texto-g__texto.p-4
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Ingreso total:] corresponde a todo el dinero que se recibe durante un periodo determinado.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Ingreso disponible:] es el recurso que queda después de atender las obligaciones prioritarias, los costos necesarios y los compromisos previamente adquiridos. Por ejemplo, una persona puede recibir un millón quinientos mil pesos al mes; sin embargo, si una parte de ese dinero está destinada al pago de deudas, al arriendo o a los costos de una actividad independiente, el valor realmente disponible para nuevas decisiones será menor.
          br
      .bg___color_1
        .px-5
          p Cuando existen ingresos variables, el diagnóstico debe realizarse con mayor prudencia. En estos casos, conviene revisar varios meses para identificar promedios, temporadas de mayores ingresos, periodos de menor entrada de dinero y gastos que se mantienen independientemente de los recursos recibidos. Este análisis permite elaborar un presupuesto más realista y reducir el riesgo de incumplir las obligaciones financieras cuando los ingresos disminuyen.
          p.mb-5 La siguiente tabla presenta las principales fuentes de ingreso personal y familiar, su frecuencia y la recomendación para incorporarlas al presupuesto.
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Clasificación de fuentes de ingreso
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Fuente de ingreso
                      th.ajuste-border-tabla.texto-left Tipo
                      th.ajuste-border-tabla.texto-left Frecuencia
                      th.texto-left Recomendación para el presupuesto
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Salario mensual
                      td.ajuste-border-tabla.texto-left Fijo
                      td.ajuste-border-tabla.texto-left Mensual
                      td.texto-left Puede servir como base para gastos permanentes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pensión
                      td.ajuste-border-tabla.texto-left Fijo
                      td.ajuste-border-tabla.texto-left Mensual
                      td.texto-left Permite programar pagos recurrentes.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ventas por temporada
                      td.ajuste-border-tabla.texto-left Variable
                      td.ajuste-border-tabla.texto-left Semanal, mensual o por temporada
                      td.texto-left Debe calcularse con prudencia y revisar promedios.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Servicios por encargo
                      td.ajuste-border-tabla.texto-left Variable
                      td.ajuste-border-tabla.texto-left Según demanda
                      td.texto-left No debe comprometer gastos fijos sin respaldo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Bonificación
                      td.ajuste-border-tabla.texto-left Ocasional
                      td.ajuste-border-tabla.texto-left Eventual
                      td.texto-left Puede destinarse a ahorro, deuda o meta puntual.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Apoyo familiar
                      td.ajuste-border-tabla.texto-left Ocasional o variable
                      td.ajuste-border-tabla.texto-left Según acuerdo
                      td.texto-left Debe registrarse, pero no depender totalmente de él si no es seguro.
          p.mb-0 La identificación y clasificación de las fuentes de ingreso facilita la elaboración de un presupuesto acorde con la realidad económica de cada persona o familia y contribuye a una mejor planificación de los recursos disponibles.
          Separador
          #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.8 Diagnóstico del estado financiero personal
          p.mb-5  El diagnóstico del estado financiero personal es el proceso mediante el cual se #[b recopila, clasifica y analiza la información económica de una persona o de un núcleo familiar] para conocer su situación actual. Este diagnóstico permite identificar cuánto dinero ingresa, cuáles son las fuentes de ingreso, cuánto se gasta, qué gastos son prioritarios, qué deudas existen, cuál es la capacidad de ahorro y qué decisiones deben revisarse antes de elaborar el presupuesto.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_1(data-aos="zoom-in").mb-3
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t1/img38.jpg', alt='').m-auto
                  .col-xl.fit___box_container
                    p.mb-0 Para realizar el diagnóstico, se recomienda tomar como referencia #[b un periodo de un mes], ya que muchos ingresos y gastos se organizan en ciclos mensuales. Durante este tiempo es importante registrar las entradas de dinero, los pagos realizados, las compras, las deudas, las cuotas, los gastos familiares, los costos asociados a actividades productivas y cualquier movimiento que afecte la economía personal. Esta información puede apoyarse en recibos, facturas, extractos, comprobantes, agendas, libretas o registros digitales.
              p.mb-0 El diagnóstico también permite diferenciar la situación aparente de la situación real. La situación aparente corresponde a la percepción que tiene una persona sobre sus finanzas, por ejemplo, pensar que el dinero no alcanza únicamente porque el ingreso es bajo. La situación real se obtiene al analizar la información registrada y puede evidenciar otras causas, como gastos no registrados, deudas pequeñas acumuladas, compras impulsivas, pagos atrasados, costos no calculados o la falta de separación entre el dinero personal y el destinado a una actividad económica.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t1/img39.png', alt='').m-auto
      .bg___color_1
        .px-5
          p.mb-5 Un diagnóstico completo requiere organizar la información en categorías que faciliten su análisis y posterior utilización en la elaboración del presupuesto. Esta matriz presenta las principales categorías que deben revisarse durante el diagnóstico financiero inicial, la información que conviene registrar, las preguntas de análisis y las decisiones que pueden tomarse a partir de ellas.
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Matriz para el diagnóstico financiero inicial
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Categoría
                      th.ajuste-border-tabla.texto-left Información que debe registrarse
                      th.ajuste-border-tabla.texto-left Pregunta de análisis
                      th.texto-left Decisión que facilita
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos
                      td.ajuste-border-tabla.texto-left Valor, fuente y frecuencia.
                      td.ajuste-border-tabla.texto-left ¿Cuánto dinero recibo y cada cuánto?
                      td.texto-left Definir recursos disponibles.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos fijos
                      td.ajuste-border-tabla.texto-left Pagos periódicos y obligatorios.
                      td.ajuste-border-tabla.texto-left ¿Qué pagos se repiten cada mes?
                      td.texto-left Priorizar compromisos básicos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos variables
                      td.ajuste-border-tabla.texto-left Consumos que cambian según decisiones o necesidades.
                      td.ajuste-border-tabla.texto-left ¿Qué gastos puedo ajustar?
                      td.texto-left Identificar oportunidades de control.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Deudas
                      td.ajuste-border-tabla.texto-left Valor total, cuota, plazo y fecha de pago.
                      td.ajuste-border-tabla.texto-left ¿Cuánto ingreso está comprometido?
                      td.texto-left Evaluar capacidad de pago.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos
                      td.ajuste-border-tabla.texto-left Recursos usados para sostener una actividad o necesidad.
                      td.ajuste-border-tabla.texto-left ¿Qué debo descontar antes de usar el ingreso?
                      td.texto-left Calcular el dinero realmente disponible.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ahorro
                      td.ajuste-border-tabla.texto-left Valor reservado y propósito.
                      td.ajuste-border-tabla.texto-left ¿Estoy separando dinero para el futuro?
                      td.texto-left Protegerse ante imprevistos y cumplir metas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Necesidades
                      td.ajuste-border-tabla.texto-left Gastos prioritarios personales o familiares.
                      td.ajuste-border-tabla.texto-left ¿Qué no puedo dejar de cubrir?
                      td.texto-left Ordenar prioridades.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Metas
                      td.ajuste-border-tabla.texto-left Objetivos personales o familiares.
                      td.ajuste-border-tabla.texto-left ¿Qué quiero lograr y cuánto cuesta?
                      td.texto-left Preparar decisiones futuras.
          p.mb-5 La información organizada mediante esta matriz constituye la base para elaborar un presupuesto ajustado a la realidad económica de cada persona o núcleo familiar.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img40.svg" style="max-width: 60px").m-auto
            .col
              h3 Ejemplo aplicado al diagnóstico inicial
          p.mb-5 Laura vive con su pareja y un hijo. Recibe un salario mensual de #[b $ 1.600.000] y, algunos fines de semana, obtiene ingresos adicionales por la venta de almuerzos. Antes de elaborar su presupuesto, registra durante un mes sus ingresos y gastos. Identifica que paga #[b $ 500.000] de arriendo, #[b $ 210.000] de servicios públicos, #[b $ 350.000] de alimentación, #[b $ 180.000] de transporte, #[b $ 160.000] por una deuda, #[b $ 90.000] de comunicación y cerca de #[b $ 250.000] en compras no planificadas. También identifica que, cuando vende almuerzos, no separa el costo de los ingredientes, los empaques, el gas y el transporte, por lo que desconoce la ganancia real obtenida.
          .box___style_1(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img41.png', alt='').m-auto
              .col-xl.fit___box_container
                p.mb-0 Con el diagnóstico, Laura identifica que sus ingresos fijos cubren los gastos básicos, pero las compras no planificadas reducen su capacidad de ahorro. Además, reconoce que la deuda mensual debe mantenerse dentro de su capacidad de pago y que el dinero obtenido por la venta de almuerzos no puede considerarse ingreso disponible hasta descontar los costos de producción. A partir de esta información, puede elaborar un presupuesto más realista, separar los recursos del hogar de los destinados a la actividad económica, reducir los gastos variables y establecer una meta de ahorro mensual.
          p.mb-0 El diagnóstico inicial no reemplaza el presupuesto; por el contrario, constituye el punto de partida para su elaboración. Su función es organizar la información financiera y convertir los datos disponibles en información útil para tomar decisiones acordes con la realidad económica, las obligaciones y las metas de cada persona o núcleo familiar.
      
</template>

<script>
export default {
  name: 'Tema1',
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
