<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normatividad de los procesos paneleros
    p El video que se presenta a continuación, ilustra a nivel general la normativa de los procesos paneleros en Colombia. Observe con atención:

    .row.mt-5.mb-5
      .col-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-segundo.color-acento-contenido.mb-5
      h2 3.1.	Floculantes 

    p.mb-5 El proceso para la limpieza del jugo de caña se hace a través de medios físicos, este evento se conoce como descachazado, aunque presenta algunos problemas debido a la necesidad de realizar limpiezas constantes y una remoción periódica de material floculante de acuerdo con la temperatura existente en la paila recibidora.
    p A continuación, se presenta cada uno de los momentos que constituye este proceso:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Corte y aponte de la caña ")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/T3/corteAponte.svg')
            .col-md-6
              h4 Corte y aponte de la caña 
              p El corte se debe realizar cuando la caña está madura, en ese momento el contenido de azúcares es máximo, de lo contrario los jugos de una caña inmadura o sobre madurada pueden alterar la panela. La actividad conocida como aponte se refiere a la recolección, el transporte hasta el trapiche y almacenamiento de la caña cosechada, procesos previos antes de la extracción de los jugos.
              
      .py-3.py-md-4(titulo="Extracción de jugos")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T3/extraccion.svg')
          .col-md-6
            h4 Extracción de jugos
            p.mb-5 Es una técnica antigua y se originó de la creatividad natural del ser humano, el proceso ocurre cuando la caña pasa a través de un molino de tres mazas (rodillos), los cuales atraviesan los tallos de la caña y los comprime para obtener el jugo o guarapo crudo, que es el insumo principal, además del bagazo húmedo que se emplea como combustible para la hornilla (Amanda & Marcillo, 2002), (Quezada, 2007). 
        
      .py-3.py-md-4(titulo="Pre limpieza de los jugos")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T3/preLimpieza.svg')
          .col-md-6
            h4 Pre limpieza de los jugos
            p.mb-5 La pre limpieza consiste en la eliminación por medios físicos y temperatura ambiente del material que sale con el jugo de caña del molino (tierra, partículas de bagazo, insectos o cera), se filtra por pozuelos y mallas donde se separan los residuos de gran tamaño, por medio de la sedimentación y floculación. En este paso se requieren pre limpiadores construidos en ladrillo con revestimiento de cerámica para facilitar la limpieza y la presencia de microorganismos (también se puede usar recipientes de acero inoxidable). La pre limpieza debe efectuarse de manera continua y puede utilizar el principio de separación por diferencia de densidad entre las impurezas como lodos, bagazo y arenas, para mejorar el producto final.
            p Los pre limpiadores hacen que la fabricación de panela sea de alto valor nutricional, gracias a que carecen de aditivos, lo que lo hace por excelencia un alimento de alta calidad. Entre las ventajas que ofrece este proceso se destacan:
            p a) <b>Retira gran cantidad de impurezas.</b>
            p b) <b>Facilita la clarificación.</b>
            p c) <b>Los jugos pres limpiadores y clarificados quedan transparentes.</b>
            p d) <b>Reduce o elimina la utilización de blanqueadores.</b>

      .py-3.py-md-4(titulo="Limpieza y mantenimiento")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T3/limpiezaMante.svg')
          .col-md-6
            h4 Limpieza y mantenimiento
            p.mb-5 La materia prima debe estar limpia, libre de residuos de tierra, restos de contaminantes y material que viene con la caña, posteriormente se debe sumergir en una solución de agua con cloro produciendo el lavado. Todos los equipos requeridos en el proceso de producción panelera, requieren un adecuado mantenimiento e higiene mínimo cada 6 horas, con el fin de evitar la fermentación de los jugos, evitando el deterioro de la calidad de la panela.

    .titulo-segundo.color-acento-contenido.mb-5
      h2 3.2.	Residuos

    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/T3/residuos.svg')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-5 Los residuos del jugo de la caña son productos de procesos de clarificación, evaporación y concentración. 
            p.mb-5 Generalmente, están hechos de bagazo, bagacillo, cachaza y el aguamiel.
            p.mb-5 A continuación, se presentan cada una de las etapas donde se detalla este proceso y el residuo que se produce del mismo.

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta.color-acento-botones
        | <b>Clarificación, evaporación y concentración de jugos</b>
      p.mb-5 Las etapas de clarificación, evaporación y concentración se llevan a cabo en la hornilla y horno, el cual suministra el calor necesario para evaporar más del 90% del agua contenida en el guarapo para la obtención de la panela.

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T3/clarificacion.svg')

      .tarjeta.tarjeta-rosa.p-3(x="17%" y="98%" numero="1")
        .h5.mb-2 Cámara de combustión
        p Cámara de combustión, aquí se lleva a cabo el proceso de ignición entre el bagazo y el aire.

      .tarjeta.tarjeta-rosa.p-3(x="63%" y="85%" numero="2")
        .h5.mb-2 Ducto de humos 
        p Ducto de humos o conducto de gases, transfiere parte del calor a los jugos a través de las pailas gracias al transporte de gases.

      .tarjeta.tarjeta-rosa.p-3(x="90%" y="18%" numero="3")
        .h5.mb-2 Chimenea
        p Chimenea, crea el tiro necesario para la combustión del bagazo y el transporte de los gases a través del ducto.
      .tarjeta.tarjeta-rosa.p-3(x="41%" y="65%" numero="4")
        .h5.mb-2 Pailas
        p Las pailas o fondos son estructuras metálicas que reciben los jugos y transfieren el calor necesario para realizar la clasificación, evaporación y concentración.  
    
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta.color-acento-botones
        | <b>Manejo y calentamiento de jugos</b>
      p.mb-5 A continuación, se presenta el manejo que debe darse a los jugos de la caña. 

  

      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta-rosa")
        .row(titulo="Manejo de jugos")
          .col-md-6.mb-4.mb-md-0
            p.mb-5 Existen varias formas de pasar los jugos por medio de flujos a través de la hornilla; paralelo, contracorriente y mixto, todo esto depende de la tecnología y costumbres regionales.

        .row(titulo="Calentamiento de jugos")
          .col-md-9.mb-4.mb-md-0
            p.mb-5 Al terminar la pre limpieza se obtiene el jugo sin clarificar, el cual pasa directamente al fondo o paila recibidora a una temperatura ambiente, luego se inicia el calentamiento hasta los 55 oC, esta permite la aceleración de la velocidad del movimiento del jugo facilitando la formación de partículas de gran tamaño y densidad, las cuales deben ser removidas por procesos físicos.
    

</template>

<script>
export default {
  name: 'Tema3',
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
