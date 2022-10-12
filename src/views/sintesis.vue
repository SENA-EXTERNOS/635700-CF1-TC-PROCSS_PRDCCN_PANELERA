<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    figure.mb-5
      .titulo-sexto.color-secundario
        p.mb-0 
          h3 Proceso de producción panelera
          em Síntesis: Procedimientos técnicos de producción panelera

    p En Colombia el sector productivo de panela se extiende en gran parte del territorio, llegando a sitios donde se convierte en el centro de la economía regional. El conocimiento empírico y las costumbres generacionales, han permitido que con el paso del tiempo y gracias a las innovaciones gastronómicas, los procesos productivos paneleros sigan vigentes. Gracias a la inclusión de buenas prácticas de manufactura y de avances normativos, el producto se mantiene libre de residuos y contaminantes, además se puede preservar por tiempo prolongado manteniendo el sabor, el color y la textura.

    figure.mb-5
      .titulo-sexto.color-acento-contenido
        p.mb-0 
          p <b>Figura 4.</b> Procedimientos técnicos en producción panelera

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
