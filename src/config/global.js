export default {
  global: {
    componenteFormativo:
      'Protocolos de bioseguridad: implementación y puesta en marcha ',
    descripcionCurso:
      'Se propone, de acuerdo con las medidas establecidas por el gobierno nacional y los principios de bioseguridad, el protocolo aplicable al sector transporte, para reconocer estrategias de prevención y manejo de situaciones de riesgo.',
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal2.png'),
    fondoContenido: require('@/assets/curso/banner-contenido.png'),
    fondoBannerInterno: require('@/assets/curso/00.png'),
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
        titulo: 'Transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Modalidades',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Bioseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Protocolos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Implementación ',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Álvarez, F. (2010). Riesgos Biológicos y bioseguridad. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Barragán-Coca, M., Palaguachi-Sumba, J., Ortega-Ortega, M. y Paguay-García, M. (2020). Lineamientos que adoptaron los países de Ecuador, Colombia, Perú y Argentina para evitar la propagación del COVID-19 en el transporte público. Polo del Conocimiento, 5(10), p. 948-962. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7659424',
    },
    {
      referencia:
        'Betancourt, J., Lores, L., Calzadilla, W., Cruz, G. y Marrero, A. (2014). Necesidad de legislar como contravenciones, las violaciones de normas de bioseguridad e higiene y epidemiología hospitalaria. Correo Científico Médico, 18(1). ',
      link:
        'http://scielo.sld.cu/scielo.php?pid=s1560-43812014000100010&script=sci_arttext&tlng=en',
    },
    {
      referencia:
        'Celi, S. (2018). Análisis del comportamiento del transporte público a nivel mundial. Revista ESPACIOS, 39(18), p.',
      link:
        'https://repositorio.uisek.edu.ec/bitstream/123456789/3042/1/07981015%20CELI%20SANTIAGO%2020-01-2018.pdf ',
    },
    {
      referencia:
        'Mintransporte. (2020). Guía y ABC - Medidas para la contención del Coronavirus COVID-19. Gov.co.',
      link: 'https://www.mintransporte.gov.co/publicaciones/8309/guia-y-abc/ ',
    },
    {
      referencia:
        'Mora, L. (2014). Logística del transporte y distribución de carga. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Quintero, J., Ramírez, Y. y Cortázar, A. (2020). Transporte fluvial en Colombia: operación, infraestructura, ambiente, normativa y potencial de desarrollo. Revista Ciudades, Estados y Política, 7(1), p. 49-68.',
      link: 'https://revistas.unal.edu.co/index.php/revcep/article/view/72778 ',
    },
  ],
  glosario: [
    {
      termino: 'Autocuidado',
      significado:
        'Según la OMS, comprende todo lo que hacemos por nosotros mismos, de forma voluntaria, para establecer y mantener la salud, prevenir y manejar la enfermedad.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Medidas preventivas que tienen por objeto minimizar o eliminar el factor de riesgo biológico que pueda llegar a afectar la salud, el medio ambiente o la vida de las personas.',
    },
    {
      termino: 'Contagio',
      significado:
        'Transmisión de una enfermedad por contacto con el agente patógeno que la causa.',
    },
    {
      termino: 'Covid-19',
      significado:
        'Enfermedad causada por el nuevo coronavirus, que afecta las vías respiratorias. ',
    },
    {
      termino: 'Riesgo',
      significado:
        'Probabilidad de que ocurra un efecto nocivo para la salud y la gravedad de dicho efecto, como consecuencia de un peligro.',
    },
  ],
  complementario: [
    {
      texto:
        'Red de Clínicas San Pablo. (2016). La higiene de manos - OMS [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NMmAj1EKdVo',
    },
    {
      texto:
        'VIRTUOSSO.COM. (2020). COVID 19, Medidas De Prevención Contra el Coronavirus [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cOEfBmqFAqU',
    },
    {
      texto:
        'Sánchez, R. y Weikert, F. (2020). Logística internacional pospandemia. Análisis de las industrias aéreas y de transporte marítimo de contenedores. Naciones Unidas. ',
      tipo: 'Artículo',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/46656/S2000789_es.pdf?sequence=1&isAllowed=y',
    },
    {
      texto:
        'MinSaludCol. (2020a). Prevenir el coronavirus empieza por tus manos [Video]. YouTube.',
      tipo: 'Video',
      link: ['https://youtu.be/9Kruo_oTw8w'],
    },
    {
      texto:
        'Canal enfermero - Consejo General Enfermería. (2021). Ventilación contra el COVID-19 [Video]. YouTube. ',
      tipo: 'Video',
      link: ['https://www.youtube.com/watch?v=5wT5Pcq9IBw'],
    },
    {
      texto:
        'MinSaludCol. (2020b). Qué es el distanciamiento físico y por qué es importante  [Video]. YouTube.  ',
      tipo: 'Video',
      link: ['https://www.youtube.com/watch?v=xh19Oq_5E1Y'],
    },
    {
      texto:
        'Resolución 777 de 2021. [Ministerio de Salud y Protección Social]. Por medio de la cual se definen los criterios y condiciones para el desarrollo de las actividades económicas, sociales y del Estado y se adopta el protocolo de bioseguridad para la ejecución de estas. Junio 2 de 2021.',
      tipo: 'Resolucion',
      descarga: 'downloads/resolucion-777.pdf',
    },
    {
      texto:
        'OMS. (2012). Reglamento sanitario Internacional. Manual para la inspección de buques y emisión de certificados de sanidad a bordo. ',
      tipo: 'Reglamento',
      link: 'downloads/reglamento.pdf',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Paula Daniela Díaz León',
        cargo: 'Experta temática',
        centro: 'CENIGRAF - Regional Distrito Capital',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
