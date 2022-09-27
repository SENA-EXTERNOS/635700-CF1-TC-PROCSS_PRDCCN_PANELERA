<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/introduccion/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Bienvenido a este recurso educativo, a continuación, conocerá sobre los procedimientos técnicos de producción panelera lo que le permitirá identificar los requerimientos técnicos y normativos que rigen el proceso de producción de panela en el país y los procesos fisicoquímicos de la materia prima.
        <br/>
        <br/>
        p.mb-5 En el siguiente video conocerá a grandes rasgos, la temática que estudiará a lo largo del componente formativo.
        <br/>
        <br/>
        p.mb-3 <b>¡Éxitos en este proceso de aprendizaje!</b>

    .row.mt-5
      .col-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
