<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 
      .row.justify-content-center
        .col-lg-12.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El diagnóstico y alistamiento del presupuesto personal permite organizar las finanzas de una persona o núcleo familiar a partir de la identificación de ingresos, gastos, costos, deudas, necesidades, hábitos de consumo y componentes presupuestales. Además, integra criterios normativos, éticos y técnicos para registrar información real, seleccionar formatos físicos o electrónicos, utilizar herramientas digitales y aplicar conceptos básicos de matemática financiera. De esta manera, se prepara la información necesaria para construir un presupuesto coherente con la realidad económica, útil para planear, controlar recursos y tomar decisiones responsables frente al manejo del dinero.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
