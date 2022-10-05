export default {
  global: {
    componenteFormativo: 'Procedimientos técnicos de producción panelera',
    descripcionCurso:
      'El ser humano se ha interesado por ingerir alimentos para su beneficio.  A medida que avanza la tecnología, la industria ha mejorado procesos de fabricación de alimentos, especialmente en la preservación, basándose en normas que incluyen técnicas de cultivo, siembra, manipulación, empaque y almacenamiento, sin descuidar el origen de la materia prima.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Requerimiento técnicos y normativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Interpretación de documentos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Normas de producción panelera',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Industria panelera',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procesos fisicoquímicos de la materia prima',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características de la caña',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Azúcares',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normativa de los procesos paneleros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Floculantes',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Residuos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Buenas prácticas de manufactura',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Variedades de caña de azúcar ',
      referencia:
        'Barona Rodríguez, A. F., Antolinez Sandoval, E. Y., López Lopera, J. G., Viveros Valens, C. A., Jiménez Vargas, J., Ángel Sánchez, J. C., Ballesteros Araque, A. L., & Vargas Orozco, G. A. (2021). Comportamiento agroindustrial de seis variedades de ccaña de azúcar (Saccharum spp.) para panela en Barbosa (Colombia). Ciencia y Agricultura, 18(3), 15–28. https://doi.org/10.19053/01228420.v18.n3.2021.1282',
      tipo: 'Artículo',
      link:
        'https://www.redalyc.org/journal/5600/560070818002/560070818002.pdf ',
    },
    {
      tema: 'Evaluación de cultivares de caña de azúcar ',
      referencia:
        'Barona-Rodríguez, A. F., Insuasty-Burbano, O. I., Viveros-Valens, C. A., Ángel-Sánchez, J. C., & Ramírez-Durán, J. (2020). Evaluación de cultivares de caña de azúcar (Saccharum spp.) para producción de panela en el departamento de Boyacá, Colombia. Revista U.D.C.A Actualidad & Divulgación Científica, 23(2), 1–9. https://doi.org/10.31910/rudca.v23.n2.2020.12908',
      tipo: 'Artículo',
      link:
        'https://revistas.udca.edu.co/index.php/ruadc/article/view/1298/1965 ',
    },
    {
      tema: 'Control biológico ',
      referencia:
        'Arias-Gutiérrez, R. (2018). AMAZONÍA EXÓTICA - Natural Antrópica Turística Publisher: Imprenta ESPE AMAZONÍA EXÓTICA - Natural Antrópica Turística (Issue November 2019).',
      tipo: 'Artículo páginas 154 a 165',
      link:
        'https://www.researchgate.net/profile/Matteo-Radice/publication/337005521_AMAZONIA_EXOTICA_-_Natural_Antropica_Turistica_Publisher_Imprenta_ESPE_-_ISBN_978994293210/links/5dc07d424585151435e8be5f/AMAZONIA-EXOTICA-Natural-Antropica-Turistica-Publisher-Imprenta-ESPE-ISBN-978994293210.pdf#page=167 ',
    },
  ],
  glosario: [
    {
      termino: 'Bagazo',
      significado:
        'Cáscara que queda después de que se saca el jugo de la caña de azúcar.',
    },
    {
      termino: 'Cachaza',
      significado:
        'Subproducto en forma de torta de color verde oscuro, obtenida por acción de la temperatura, tiempo de exposición y sustancias floculantes en el momento de la clarificación del jugo en el proceso de elaboración de la panela.',
    },
    {
      termino: 'Caña de azúcar',
      significado:
        'Planta monocotiledónea y gramínea, originaria de la India cuyo tallo leñoso, de uno a cinco metros de altura, que contiene un tejido esponjoso y dulce del que se extrae el jugo para concentrar y obtener azúcar.',
    },
    {
      termino: 'Clarificación',
      significado:
        'Consiste en separar los no azúcares del jugo, en las tinas de clarificación, donde la temperatura es menor que en las tinas de ebullición y punteo.',
    },
    {
      termino: 'Grados Brix (oB)',
      significado: 'Sólidos solubles que están presentes en la solución.',
    },
    {
      termino: 'Ley',
      significado:
        'Regla fija a la que está sometido un fenómeno de la naturaleza.',
    },
    {
      termino: 'Materia prima',
      significado:
        'Producto principal que forma parte de una fórmula. Se incorpora en la fórmula en mayor cantidad, para elaborar cierto producto.',
    },
    {
      termino: 'Norma',
      significado:
        'Regla que se debe seguir o a que se deben ajustar a las conductas, tareas, actividades, etc.',
    },
    {
      termino: 'Panela',
      significado:
        'Endulzante de origen natural, sólido, cristalizado, constituido esencialmente por cristales sueltos de sacarosa, obtenidos a partir de la caña de azúcar mediante procedimientos industriales determinados.',
    },
    {
      termino: 'Producción',
      significado:
        'Fabricación o elaboración de un producto mediante el trabajo.',
    },
    {
      termino: 'Resolución',
      significado:
        'Decreto, providencia, auto o fallo de autoridad gubernativa o judicial.',
    },
    {
      termino: 'Yausabara',
      significado:
        'Nombre científico Pavonia sepium se encuentra en los cultivos y cercas vivas de los terrenos, presenta gran cantidad de gomas y mucilagos por ello es de gran importancia en la industria panelera. La mayoría de las personas la distingue por ser mala hierba.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amanda, I., & Marcillo, A. (2002). Programa Nacional De Transferencia De Tecnología Agropecuaria Pronatta Ministerio De Agricultura Y Desarrollo Rural Funach-Ascapam Guía Para La Elaboración De Panela. 17, 17. ',
      link:
        'http://www.panelamonitor.org/media/docrepo/document/files/guia-para-la-elaboracion-de-panela.pdf ',
    },
    {
      referencia:
        'Duarte-Álvarez, O. J., & González-Villalba, J. D. (2019). Guía técnica del cultivo de la Caña de Azúcar. In Fca Una (Vol. 1). ',
      link:
        'http://www.agr.una.py/fca/index.php/libros/catalog/view/326/27/353-1 ',
    },
    {
      referencia:
        'Fernández del Campo, L. (2019). Cultivo de la caña de azúcar /. Cultivo de La Caña de Azúcar /. ',
      link: 'https://doi.org/10.5962/bhl.title.156871 .',
    },
    {
      referencia:
        'Giraldo Henao, E. (1984). Cultivo de la caña. 34 páginas. or 226-193. ',
      link: 'http://hdl.handle.net/20.500.12324/23969 ',
    },
    {
      referencia:
        'Hidyat. (2015). No Title طرق تدريس اللغة العربية. Экономика Региона, 32 ',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/3586/1042996781.pdf?sequence=3&isAllowed=y',
    },
    {
      referencia:
        'García, H. (n.d.). Corpoica. El cultivo de la caña panelera. Corpoica. ',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/11432/43324_51628.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Investigaci, C. D. E., Ca, D. E. L. A., & Az, D. E. (2003). Catálogo de Variedades Segunda edición. Director, 31.',
      link: '',
    },
    {
      referencia: 'León, A. (2008). Hidratos de carbono. Bioquímica, 14–30. ',
      link: 'www.uhu.es/08007/.../apuntes/2005/pdf/Tema_02_carbohidratos.pdf ',
    },
    {
      referencia:
        'Ortiz, C., Solano, D., Villada, H., Mosquera, S., & Velasco, R. (2011). Extracción y secado de floculantes naturales usados en la clarificación de jugos de caña. Biotecnología En El Sector Agropecuario y Agroindustrial, 9(2), 32–40. ',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S1692-35612011000200004&lng=en&nrm=iso&tlng=es ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
