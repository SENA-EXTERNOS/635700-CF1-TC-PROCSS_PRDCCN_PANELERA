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
    
    Separador

    #t_3_1.titulo-segundo.color-acento-contenido.mb-5
      h2 3.1.	Floculantes 

    p.mb-5 El proceso para la limpieza del jugo de caña se hace a través de medios físicos, este evento se conoce como descachazado, aunque presenta algunos problemas debido a la necesidad de realizar limpiezas constantes y una remoción periódica de material floculante de acuerdo con la temperatura existente en la paila recibidora.
    p A continuación, se presenta cada uno de los momentos que constituye este proceso:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Corte y aponte de la caña ")
          .row.align-items-center.justify-content-between
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/T3/img-1.svg')
            .col-md-6
              p El corte se debe realizar cuando la caña está madura, en ese momento el contenido de azúcares es máximo, de lo contrario los jugos de una caña inmadura o sobre madurada pueden alterar la panela. La actividad conocida como aponte se refiere a la recolección, el transporte hasta el trapiche y almacenamiento de la caña cosechada, procesos previos antes de la extracción de los jugos.
              
      .py-3.py-md-4(titulo="Extracción de jugos")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T3/img-2.svg')
          .col-md-6
            p Es una técnica antigua y se originó de la creatividad natural del ser humano, el proceso ocurre cuando la caña pasa a través de un molino de tres mazas (rodillos), los cuales atraviesan los tallos de la caña y los comprime para obtener el jugo o guarapo crudo, que es el insumo principal, además del bagazo húmedo que se emplea como combustible para la hornilla (Amanda & Marcillo, 2002), (Quezada, 2007). 
        
      .py-3.py-md-4(titulo="Pre limpieza de los jugos")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T3/img-3.svg')
          .col-md-6
            p La pre limpieza consiste en la eliminación por medios físicos y temperatura ambiente del material que sale con el jugo de caña del molino (tierra, partículas de bagazo, insectos o cera), se filtra por pozuelos y mallas donde se separan los residuos de gran tamaño, por medio de la sedimentación y floculación. En este paso se requieren pre limpiadores construidos en ladrillo con revestimiento de cerámica para facilitar la limpieza y la presencia de microorganismos (también se puede usar recipientes de acero inoxidable). La pre limpieza debe efectuarse de manera continua y puede utilizar el principio de separación por diferencia de densidad entre las impurezas como lodos, bagazo y arenas, para mejorar el producto final.
            p Los pre limpiadores hacen que la fabricación de panela sea de alto valor nutricional, gracias a que carecen de aditivos, lo que lo hace por excelencia un alimento de alta calidad. Entre las ventajas que ofrece este proceso se destacan:
            p a) <b>Retira gran cantidad de impurezas.</b>
            p b) <b>Facilita la clarificación.</b>
            p c) <b>Los jugos pres limpiadores y clarificados quedan transparentes.</b>
            p d) <b>Reduce o elimina la utilización de blanqueadores.</b>

      .py-3.py-md-4(titulo="Limpieza y mantenimiento")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T3/img-4.svg')
          .col-md-6
            p La materia prima debe estar limpia, libre de residuos de tierra, restos de contaminantes y material que viene con la caña, posteriormente se debe sumergir en una solución de agua con cloro produciendo el lavado. Todos los equipos requeridos en el proceso de producción panelera, requieren un adecuado mantenimiento e higiene mínimo cada 6 horas, con el fin de evitar la fermentación de los jugos, evitando el deterioro de la calidad de la panela.
    
    Separador

    #t_3_2.titulo-segundo.color-acento-contenido.mb-5
      h2 3.2.	Residuos
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4(data-aos='fade-right')
          figure
            img(src='@/assets/curso/temas/T3/img-5.svg', style='width:190px; margin: auto')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Los residuos del jugo de la caña son productos de procesos de clarificación, evaporación y concentración. 
            p Generalmente, están hechos de bagazo, bagacillo, cachaza y el aguamiel.
            p A continuación, se presentan cada una de las etapas donde se detalla este proceso y el residuo que se produce del mismo.

    h3 
      i.fas.fa-square.cac.me-4
      | Clarificación, evaporación y concentración de jugos

    p Las etapas de clarificación, evaporación y concentración se llevan a cabo en la hornilla y horno, el cual suministra el calor necesario para evaporar más del 90% del agua contenida en el guarapo para la obtención de la panela.

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T3/img-6.svg')

      .tarjeta.tarjeta-amarillo.p-3(x="17%" y="98%" numero="1")
        .h5.mb-2 Cámara de combustión
        p Cámara de combustión, aquí se lleva a cabo el proceso de ignición entre el bagazo y el aire.

      .tarjeta.tarjeta-amarillo.p-3(x="63%" y="85%" numero="2")
        .h5.mb-2 Ducto de humos 
        p Ducto de humos o conducto de gases, transfiere parte del calor a los jugos a través de las pailas gracias al transporte de gases.

      .tarjeta.tarjeta-amarillo.p-3(x="90%" y="18%" numero="3")
        .h5.mb-2 Chimenea
        p Chimenea, crea el tiro necesario para la combustión del bagazo y el transporte de los gases a través del ducto.
      .tarjeta.tarjeta-amarillo.p-3(x="41%" y="65%" numero="4")
        .h5.mb-2 Pailas
        p Las pailas o fondos son estructuras metálicas que reciben los jugos y transfieren el calor necesario para realizar la clasificación, evaporación y concentración.  
    
    h3 
      i.fas.fa-square.cac.me-4
      | Manejo y calentamiento de jugos
    p.mb-5 A continuación, se presenta el manejo que debe darse a los jugos de la caña. 

    .row.mt-5
      .col-8 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta-amarillo")
          .row(titulo="Manejo de jugos")
            .col-md-12.mb-4.mb-md-0
              p.mb-5 Existen varias formas de pasar los jugos por medio de flujos a través de la hornilla; paralelo, contracorriente y mixto, todo esto depende de la tecnología y costumbres regionales.

          .row(titulo="Calentamiento de jugos")
            .col-md-12.mb-4.mb-md-0
              p.mb-5 Al terminar la pre limpieza se obtiene el jugo sin clarificar, el cual pasa directamente al fondo o paila recibidora a una temperatura ambiente, luego se inicia el calentamiento hasta los 55 oC, esta permite la aceleración de la velocidad del movimiento del jugo facilitando la formación de partículas de gran tamaño y densidad, las cuales deben ser removidas por procesos físicos.
        
      .col-4
        figure
          img(src='@/assets/curso/temas/T3/img-7.svg')
        
  
      
    
    h3 
      i.fas.fa-square.cac.me-4
      | <b>Clarificación</b>
    p.mb-5 En este paso se eliminan los sólidos en suspensión, las sustancias coloides y algunos compuestos colorantes presentes en los jugos, especialmente los que se generan en el proceso de elaboración, debido a la aglomeración de partículas.
    p <b>A continuación, se presentan cada una de las actividades que se deben desarrollar para esta fase.</b> 

    .tarjeta.tarjeta-rosa.p-4.mb-5
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-between
          .col-md-6.mb-4.mb-md-0
            p Inicialmente se emplea la paila clarificadora de la hornilla, mediante la coagulación-floculación de las impurezas presentes en el jugo, por efecto combinado de la temperatura, tiempo y acción de los agentes clarificantes.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-8.svg', alt='Texto que describa la imagen')

        .row.align-items-center.justify-content-between
          .col-md-6.mb-4.mb-md-0
            p Los clarificantes se pueden dividir en químicos y naturales. Dentro de estos están: el sulfoclarol o hidrosulfito de sodio (Na2S2O4) conocido como ditionito de sodio o hiposulfito de sodio, también está la sementina, el carbonato de calcio o caliza (CaCO3), óxido de calcio o cal viva (CaO), hidróxido de calcio o cal apagada Ca (OH)2, entre otras. En los naturales hace referencia a las plantas utilizadas para purificar, como la cáscara de balso, raíz de abrojo y la yausabara.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-9.svg', alt='Texto que describa la imagen')

        .row.align-items-center.justify-content-between
          .col-md-6.mb-4.mb-md-0
            p Los clarificantes se pueden dividir en químicos y naturales. Dentro de estos están: el sulfoclarol o hidrosulfito de sodio (Na2S2O4) conocido como ditionito de sodio o hiposulfito de sodio, también está la sementina, el carbonato de calcio o caliza (CaCO3), óxido de calcio o cal viva (CaO), hidróxido de calcio o cal apagada Ca (OH)2, entre otras. En los naturales hace referencia a las plantas utilizadas para purificar, como la cáscara de balso, raíz de abrojo y la yausabara.
        
          .col-md-6
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  b Tabla 2.
                  br
                  em Composición del proceso de clarificación
              img(src='@/assets/curso/temas/T3/img-10.svg', alt='Texto que describa la imagen')

        .row.align-items-center.justify-content-between
          .col-md-6.mb-4.mb-md-0
            p Las impurezas que flotan, coloquialmente conocidas como cachaza negra, son retiradas manualmente y se depositan en las cachaceras; aquí se hace la remoción, separando los jugos de fondo del recipiente y luego regresan a la paila clarificadora para continuar el proceso, mientras la cachaza se lleva a la paila cachacera donde se concentra hasta formar el melote.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T3/img-11.svg', alt='Texto que describa la imagen')
        
    h3 
      i.fas.fa-square.cac.me-4
      | Extracción y forma de aplicación del mucílago

    figure.mb-5
      .titulo-sexto.color-acento-contenido
        p.mb-0 
          b Figura 3.
          br
          em Extracción y forma de aplicación del mucílago
      img(src='@/assets/curso/temas/T3/img-12.svg', alt='Texto que describa la imagen')

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido.mb-5
      h2 3.3.	Buenas prácticas de manufactura

    .row
      .col-lg-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/T3/img-14.svg')
          .tarjeta
            .p-4
              p.mb-5 Colombia, es un país donde la agricultura es una de las principales fuentes económicas, este sector se ha venido renovando a través de estrategias para optimizar y cualificar los procesos desde el punto de vista normativos y de producción, haciendo énfasis en la manufactura, la salud y seguridad en el trabajo, entre otros.
              p Las buenas prácticas de manufactura, contribuyen en el sector panelero mediante la mejora continua de la industria a través del trabajo ocupacional y ambiental, que lleva a minimizar dichos riesgos, lo que se refleja en menores costos de producción y fortalece la rentabilidad del producto y la optimización del mismo. (Investigaci et al., 2003).
    .row
      .col-6-lg-6
        .cajon.color-secundario.p-4.mb-5
          p <b>¡Muy bien!</b> Ha finalizado el estudio de este componente formativo a través del cual ha aprendido sobre los procedimientos técnicos de producción panelera. Ahora lo invitamos a estudiar la síntesis donde podrá recordar de forma general los saberes que se han desarrollado, a realizar la actividad de aprendizaje donde podrá colocar a prueba lo aprendido, consultar el material complementario que le servirá como refuerzo y profundización y estudiar el glosario.  


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
