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
        data-aos="fade-right",:style="{'background-image': `url(${require('@/assets/curso/introduccion/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-4 Apreciado aprendiz, bienvenido a este componente formativo, donde conocerá sobre las generalidades y aspectos claves de los procedimientos técnicos de la producción panelera. El estudio responsable de este componente, le permitirá identificar los requerimientos técnicos y normativos que rigen el proceso de producción de panela en el país y los procesos físicoquímicos de la materia prima.
        <br/>
        <br/>
        p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.


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
