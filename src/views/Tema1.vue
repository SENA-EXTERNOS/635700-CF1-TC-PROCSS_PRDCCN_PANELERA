<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Requerimientos técnicos y normativos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(data-aos='fade-right')(
        :style="{'background-image': `url(${require('@/assets/curso/temas/T1/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia, la cultura gastronómica emplea la panela para la producción de alimentos. Este producto se encuentra en: bebidas, postres, platos fuertes, entre otros; por eso la importancia, no solo de conocer la variedad de usos como producto natural orgánico de alta fuente nutritiva, sino también entender todo el proceso de producción, abarcando los requerimientos para el procesamiento, embalaje y almacenamiento.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido.mb-5
      h2 Interpretación de documentos

    .tarjeta.tarjeta-amarillo.p-4.mb-5
      .row.align-items-center
        .col-md-9.mb-3.mb-md-0
          p A nivel nacional, el sector panelero se caracteriza por ser uno de los más importantes de la producción agropecuaria; es por esta razón, se ha convertido en el eje central de la economía campesina y de los pequeños y grandes productores. El proceso de fabricación está altamente ligado a las costumbres regionales, por lo que se considera uno de los alimentos principales en la canasta familiar, práctica que ha perdurado por generaciones.

          p La tradición en la cocción de la panela, se mantiene vigente con el paso del tiempo. No obstante, desde la entrada en vigencia de la resolución 779 de 2006, considerada como la principal normativa del contexto productivo, este sector se enfrenta a nuevas políticas como introducir tecnología de punta, habituar las prácticas técnicas, mejoras en la infraestructura y aspectos físicos en los trapiches; sin descuidar, desde luego, la preocupación por la preservación del bienestar de los actores del proceso.

          p.mb-0 De acuerdo con lo anterior, es importante analizar el marco legal para el sistema de producción panelera, identificando y entendiendo las políticas de estricto cumplimiento para la obtención de la panela en óptimas condiciones para la venta y consumo, sin dejar de lado las buenas prácticas de manufactura donde prime el bienestar del trabajador.

        .col-md-3(data-aos='fade-left')
          figure
            img(src='@/assets/curso/temas/T1/img-1.svg', alt='Campesino')

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido.mb-5
      h2 Normas de producción panelera

    p.mb-5 A continuación, se presentan las normas que rigen la producción panelera en Colombia. Consulte y conozca cada norma presentada, haciendo clic sobre los enlaces propuestos:


    PasosA.color-acento-contenido.mb-3
      .row
        .col.mb-4.mb-md-0
          h4 Resolución Número 2546 de 2004
          p Por la cual se establece el reglamento técnico de emergencia, se señalan los requisitos sanitarios que se deben cumplir en la producción y comercialización de la panela para el consumo humano, y se dictan otras disposiciones. En esta resolución, se determina que la panela es un producto con un importante valor nutricional y de alto uso, especialmente en la dieta de la población infantil y la población con bajos recursos económicos.
          .row
            .col-lg-8.col-md-10.col-12
              a.anexo.mb-4.mb-lg-2.mr-3-custom(href="https://www.minsalud.gov.co/Normatividad_Nuevo/RESOLUCI%C3%93N%202546%20DE%202004.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web:</b> Minsalud - Normatividad
        .col-md-2.d-none.d-md-inline
          figure
            img(src='@/assets/curso/temas/T1/img-2.svg')


      .row
        .col-md-2.mb-4.mb-md-0.d-none.d-md-inline
          figure
            img(src='@/assets/curso/temas/T1/img-2.svg')
        .col.mb-4.mb-md-0.text-start
          h4 Resolución número 000247 de 2021
          p Hace referencia a la reglamentación sobre las cantidades máximas de producción y las características del negocio, para los productos elaborados a base de panela y mieles vírgenes y sus derivados. Producción, generalmente, realizada por campesinos y/o artesanos dentro de la categoría (A) – artesanal, y se dictan otras disposiciones.
          .row
            .col-lg-8.col-md-10.col-12.text-start
              a.anexo.mb-3.mb-lg-2.mr-3-custom(href="https://www.minagricultura.gov.co/Normatividad/Resoluciones/RESOLUCI%C3%93N%20NO.%20000247%20DE%202021.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web:</b> Minagricultura - Normatividad


      .row
        .col.mb-4.mb-md-0
          h4 Decreto 1594 de 1984
          p El contenido, reglamenta parcialmente el capítulo l, Título I de la Ley 09 de 1979, así como el Capítulo II del Título VI - Parte III - Libro II y el Título III de la Parte III Libro I del Decreto 2811 de 1974 en cuanto a usos del agua y residuos líquidos.
          .row
            .col-lg-8.col-md-10.col-12
              a.anexo.mb-4.mb-lg-2.mr-3-custom(href=" https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=18617" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web:</b> Función Pública
        .col-md-2.d-none.d-md-inline
          figure
            img(src='@/assets/curso/temas/T1/img-2.svg')


      .row
        .col-md-2.mb-4.mb-md-0.d-none.d-md-inline
          figure
            img(src='@/assets/curso/temas/T1/img-2.svg')
        .col.mb-4.mb-md-0.text-start
          h4 Resolución número 229 de 2012
          p La normativa en mención, fija un precio de referencia para la liquidación de la cuota de fomento panelero para el segundo semestre de 2020.
          .row
            .col-lg-8.col-md-10.col-12.text-start
              a.anexo.mb-4.mb-lg-2.mr-3-custom(href="http://www.avancejuridico.com/actualidad/documentosoficiales/2012/48500/r_ma_0229_2012.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web:</b> Minagricultura - Resoluciones



      .row
        .col.mb-4.mb-md-0
          h4 Resolución número 258 de 2010
          p El texto dictamina el apoyo que se otorga al transporte de mieles paneleras producidas en algunas zonas del país.
          .row
            .col-lg-8.col-md-10.col-12
              a.anexo.mb-4.mb-lg-2.mr-3-custom(href="https://xperta.legis.co/visor/legcol/legcol_8bc1596095ad20c6e0430a01015120c6/coleccion-de-legislacion-colombiana/resolucion-258-de-2010" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web:</b> Colección De Legislación Colombiana
        .col-md-2.d-none.d-md-inline
          figure
            img(src='@/assets/curso/temas/T1/img-2.svg')


      .row
        .col-md-2.mb-4.mb-md-5.d-none.d-md-inline
          figure
            img(src='@/assets/curso/temas/T1/img-2.svg')
        .col.mb-4.mb-md-0.text-start
          h4 Resolución 3462 de 2008
          p Por la cual se modifica el parágrafo del artículo 9° y el artículo 15 de la Resolución 779 de 2006 y se dictan otras disposiciones.
          .row
            .col-lg-8.col-md-10.col-12.text-start
              a.anexo.mb-4.mb-lg-2(href="https://fedepanela.org.co/gremio/descargas/resolucion-3462-de-2008/" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web:</b> FedePanela

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido.mb-5
        h2 Industria panelera

    p.mb-5 En el siguiente espacio, se dan a conocer las normas que rigen a la industria panelera en Colombia. Para profundizar en la línea de estudio o investigación, consulte los enlaces dispuestos a continuación:

    PasosA.color-acento-contenido.mb-3
      .row
        .col.mb-4.mb-md-0
          h4 Ley 2005 del 02 de diciembre de 2019
          p El presente proyecto de ley busca generar incentivos tendientes a ampliar la demanda de panela y mieles vírgenes, así como diversificar la producción y comercialización de sus derivados. De igual forma, se dictan disposiciones adicionales con el fin de proteger y fortalecer, de manera especial, la producción y el bienestar de pequeños y medianos productores.
          .row
            .col-lg-8.col-md-10.col-12
              a.anexo.mb-4.mb-lg-2.mr-3-custom(href=" https://www.studocu.com/co/document/instituto-universitario-de-la-paz/metodologia-de-investigacion-social-cualitativa-1/ley-2005-del-02-de-diciembre-de-2019-panela/22665699" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web:</b> Instituto Universitario De La Paz
        .col-md-2.d-none.d-md-inline
          figure
            img(src='@/assets/curso/temas/T1/img-2.svg')


      .row
        .col-md-2.mb-4.mb-md-0.d-none.d-md-inline
          figure
            img(src='@/assets/curso/temas/T1/img-2.svg')
        .col.mb-4.mb-md-0.text-start
          h4 Decreto 948 de 1995
          p Se centra en la reglamentación parcial, la Ley 23 de 1973, los artículos 33, 73, 74, 75 y 76 del Decreto - Ley 2811 de 1974; los artículos 41, 42, 43, 44, 45, 48 y 49 de la Ley 9 de 1979; y la Ley 99 de 1993, en relación con la prevención y control de la contaminación atmosférica y la protección de la calidad del aire.
          .row
            .col-lg-8.col-md-10.col-12.text-start
              a.anexo.mb-4.mb-lg-2.mr-3-custom(href="https://www.icbf.gov.co/cargues/avance/docs/decreto_0948_1995.htm" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web:</b> ICBF


      .row
        .col.mb-4.mb-md-0
          h4 Resolución 779 de 2006
          p Por la cual se establece el reglamento técnico sobre los requisitos sanitarios que se deben cumplir en la producción y comercialización de la panela para consumo humano y se dictan otras disposiciones. Dicha disposición fue modificada por el Gobierno Nacional mediante la Resolución 4121 de 2011, pero en ambos documentos se resalta la importancia de los espacios debidamente aseados y los insumos que garanticen la calidad del producto. A continuación, exponemos algunas de las normas que rigen a los trapiches colombianos.
          .row
            .col-lg-8.col-md-10.col-12
              a.anexo.mb-4.mb-lg-2.mr-3-custom(href=" https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resolucion-779-de-2006.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web:</b> Minsalud - Biblioteca Digital
        .col-md-2.d-none.d-md-inline
          figure
            img(src='@/assets/curso/temas/T1/img-2.svg')


      .row
        .col-md-2.mb-4.mb-md-0.d-none.d-md-inline
          figure
            img(src='@/assets/curso/temas/T1/img-2.svg')
        .col.mb-4.mb-md-0.text-start
          h4 Resolución número 4121 de 2011
          p Por la cual se modifica parcialmente la Resolución 779 de 2006, modificadas por las Resoluciones 3462 de 2008 y 3544 de 2009.
          .row
            .col-lg-8.col-md-10.col-12.text-start
              a.anexo.mb-4.mb-lg-2.mr-3-custom(href="https://www.minsalud.gov.co/Normatividad_Nuevo/RESOLUCI%C3%93N%204121%20DE%202011.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web:</b> Minsalud - Normatividad



      .row
        .col.mb-4.mb-md-0
          h4 Resolución número 3544 de 2009
          p Por la cual se modifican los artículos 11 y 13 de la Resolución 779 de 2006.
          .row
            .col-lg-8.col-md-10.col-12
              a.anexo.mb-4.mb-lg-2.mr-3-custom(href=" https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resolucion-3544-de-2009.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web:</b> Minsalud - Biblioteca Digital
        .col-md-2.d-none.d-md-inline
          figure
            img(src='@/assets/curso/temas/T1/img-2.svg')


      .row
        .col-md-2.mb-4.mb-md-5.d-none.d-md-inline
          figure
            img(src='@/assets/curso/temas/T1/img-2.svg')
        .col.mb-4.mb-md-0.text-start
          h4 Resolución 16379 de 2003
          p Por la cual se modifica el parágrafo del artículo 9° y el artículo 15 de la Resolución 779 de 2006 y se dictan otras disposiciones.
          .row
            .col-lg-8.col-md-10.col-12.text-start
              a.anexo.mb-4.mb-lg-2.mr-3-custom(href="https://www.mincit.gov.co/getattachment/7385e884-376c-4a42-87fd-65e47215c1f5/Resolucion-16379-de-2003-Por-la-cual-se-reglamenta.aspx" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web:</b> Ministerio de Comercio


      .row
        .col.mb-4.mb-md-0
          h4 Resolución 0485 de 2005
          p Por la cual se establece el reglamento técnico sobre los requisitos de rotulado o etiquetado que deben cumplir los alimentos envasados y materias primas de alimentos para consumo humano.
          .row
            .col-lg-8.col-md-10.col-12
              a.anexo.mb-4.mb-lg-2.mr-3-custom(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resoluci%C3%B3n_0485_de_2005.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web:</b> Minsalud - Biblioteca Digital
        .col-md-2.d-none.d-md-inline
          figure
            img(src='@/assets/curso/temas/T1/img-2.svg')


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
