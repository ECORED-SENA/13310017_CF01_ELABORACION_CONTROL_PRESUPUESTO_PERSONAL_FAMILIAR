<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5  El reconocimiento de las #[b finanzas personales] permite comprender la manera en que una persona o un núcleo familiar obtiene, administra y distribuye sus recursos económicos para atender sus necesidades, cumplir sus compromisos y alcanzar sus metas. En este sentido, identificar los #[b ingresos, gastos, costos, deudas, hábitos de consumo y prioridades familiares] constituye un paso fundamental para conocer la #[b situación financiera real] y tomar decisiones más responsables sobre el uso del dinero. La #[b educación económica y financiera] contribuye a que las personas relacionen sus decisiones cotidianas con su bienestar, fortalezcan su capacidad de análisis y desarrollen criterios para #[b planear, ahorrar y organizar sus recursos] de acuerdo con sus condiciones de vida (Ministerio de Educación Nacional, 2022).
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.jpg', alt='').m-auto
              .col-xl.fit___box_container
                p.mb-0 El #[b presupuesto personal] se convierte en una herramienta práctica para organizar la información financiera, comparar los #[b recursos disponibles] con las obligaciones asumidas y establecer #[b límites de gasto] acordes con la realidad económica. Su elaboración inicia con el #[b alistamiento de la información básica], la clasificación de ingresos y egresos, la identificación de las necesidades personales y familiares, y la selección de #[b formatos físicos o electrónicos] que faciliten el registro y seguimiento de la información. Esta organización permite visualizar el destino del dinero, identificar desequilibrios financieros, anticipar pagos, establecer #[b metas de ahorro] y respaldar la toma de decisiones relacionadas con la financiación, la inversión o la reducción de gastos innecesarios.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
      p.mb-0 La apropiación de #[b conceptos presupuestales] y de los #[b lineamientos normativos] fortalece la capacidad para gestionar las finanzas personales con #[b responsabilidad, transparencia y criterio]. Conocer los #[b derechos y deberes del consumidor financiero], así como la importancia de recibir información clara sobre los productos, servicios, costos y riesgos, permite tomar decisiones más informadas y evitar compromisos que afecten la #[b estabilidad económica]. Por ello, el #[b diagnóstico y el alistamiento del presupuesto personal] no solo favorecen la organización de los recursos económicos, sino que también contribuyen a prevenir el sobreendeudamiento, planificar metas personales y familiares, utilizar adecuadamente las herramientas financieras y consolidar #[b hábitos que promuevan el bienestar económico] (Ley 1328 de 2009).
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
