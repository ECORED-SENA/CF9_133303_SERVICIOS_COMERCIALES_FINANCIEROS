export default {
  global: {
    componenteFormativo:
      'Evaluación y optimización de los datos que integran la información',
    descripcionCurso:
      'El manejo de los datos en el entorno mundial juega un papel fundamental en el desarrollo de las actividades cotidianas de empresas y en general del ámbito productivo, económico y social; además, genera grandes ventajas a la gestión de datos; pero, al igual ha traído desventajas ya que se ha aumentado la inseguridad de los datos, convirtiéndose en un problema crítico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        titulo: 'Ingeniería de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Etapas de la ingeniería de requisitos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas de modelado',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ingeniería de <em>software</em>',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Políticas de seguridad',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estándares y normas de referencia',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Riesgos y mecanismos de valuación',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Activos de la información',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Derechos de autor',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Protección de la propiedad intelectual',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Políticas de confidencialidad',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Criterios éticos del tratamiento de los datos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Políticas legales',
            hash: 't_3_4',
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
      tema: 'Riesgos y mecanismos de valuación',
      referencia:
        'INCIBE. (2010). SGSI - 08 Análisis y valoración de riesgos. Metodologías [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=g7EPuzN5Awg',
    },
    {
      tema: 'Protección de la propiedad intelectual',
      referencia:
        'Organización Mundial de la Propiedad Intelectual OMPI. (2021). ¿Qué es la propiedad intelectual? OMPI.',
      tipo: 'Folleto',
      link: 'https://www.wipo.int/edocs/pubdocs/es/wipo_pub_450_2020.pdf',
    },
    {
      tema: 'Principios básicos del derecho de autor y los derechos conexos',
      referencia:
        'Organización Mundial de la Propiedad Intelectual OMPI. (2016). Principios básicos del derecho de autor y los derechos conexos.',
      tipo: 'Folleto',
      link: 'https://www.wipo.int/edocs/pubdocs/es/wipo_pub_909_2016.pdf',
    },
  ],
  glosario: [
    {
      termino: '<em>Banners</em>',
      significado: 'Formato publicitario en Internet.',
    },
    {
      termino: '<em>Business</em>',
      significado: 'Negocio.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'Propiedad que determina que la información solo esté disponible y sea revelada a individuos, entidades o procesos autorizados.',
    },
    {
      termino: '<em>Consumer</em>',
      significado: 'Consumidor.',
    },
    {
      termino: '<em>Core</em>',
      significado:
        'Es una palabra en inglés, cuyo significado es centro o núcleo.',
    },
    {
      termino: 'Fidelización de clientes',
      significado:
        'Proceso para retener consumidores, con el objetivo de que se conviertan en clientes habituales.',
    },
    {
      termino: 'Intrusivo',
      significado: 'Que se impone sin autorización.',
    },
    {
      termino: '<em>Jingle</em>',
      significado: 'sig',
    },
    {
      termino: 'OMPI',
      significado: 'Organización Mundial de Propiedad Intelectual.',
    },
    {
      termino: 'Valuación',
      significado:
        'Cálculo numérico que se realiza con el fin de asignar un valor monetario a un determinado bien, propiedad o inversión.',
    },
  ],
  referencias: [
    {
      referencia:
        'Adventures Digital Agency. (2018). Ante todo, definamos términos ¿Qué es el entorno digital? Blog Adventures.',
      link: 'https://blog.adventures.do/que-es-el-entorno-digital/',
    },
    {
      referencia:
        'Boehm, B. (1979). <em>A spiral model of software development and enhancement. ACM Software Engineering Notes</em>, 11(4), p. 22-42.',
    },
    {
      referencia:
        'Caurin, J. (2018). Políticas de seguridad ¿Qué son las políticas de seguridad? Emprende Pyme.',
      link: 'https://www.emprendepyme.net/politicas-de-seguridad.html ',
    },
    {
      referencia:
        'Decisión Andina 351 de 1993. [Comisión del Acuerdo de Cartagena]. Régimen común sobre derecho de autor y derechos conexos. Diciembre 17 de 1993.',
      link: 'https://www.wipo.int/edocs/lexdocs/laws/es/can/can010es.pdf',
    },
    {
      referencia:
        'Eterovic, J.  y Pagliari, G. (2011). Metodología de análisis de riesgos informáticos. Técnica administrativa.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3718552',
    },
    {
      referencia:
        'Ley 23 de 1982. [Congreso de Colombia]. Sobre derechos de autor. Enero 28 de 1982.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=3431&dt=S',
    },
    {
      referencia:
        'Ley 241 de 2011. [Congreso de Colombia]. Por la cual se regula la responsabilidad por las infracciones al derecho de autor y los derechos conexos en Internet. Abril de 2011.',
      link:
        'http://www.informatica-juridica.com/proyecto-de-ley/proyecto-ley-241-derecho-autor-los-derechos-conexos-internet/',
    },
    {
      referencia:
        'Organización Mundial de la Propiedad Intelectual OMP. (2021). ¿Qué es la propiedad intelectual? OMP.',
      link: 'https://www.wipo.int/edocs/pubdocs/es/wipo_pub_450_2020.pdf',
    },
    {
      referencia:
        'Soriano, M. (2014). Seguridad en redes y seguridad de la información. IMPROVET.',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2022). Reporte sobre la información en materia de propiedad intelectual en Colombia. DNP, DNDA, ICA, Ministerio de Relaciones Exteriores. SIC.',
      link:
        'https://www.sic.gov.co/sites/default/files/files/Proteccion_Competencia/Estudios_Economicos/Documentos_elaborados_Grupo_Estudios_Economicos/Reporte-informacion-en-materia-de-Propiedad-Intelectual-en-Colombia.pdf',
    },
    {
      referencia:
        'Zambrano, S. y Valencia, D. (2017). Seguridad en informática: consideraciones. Dominio de las Ciencias, 3(5), p. 676-678.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/6137824.pdf',
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
        cargo: 'Responsable del equipo de Diseño Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Experto temático',
        centro:
          'Regional Cauca - Centro de Teleinformática y Producción Industrial',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Zulema Yidney León Escobar',
        cargo: 'Experta temática',
        centro:
          'Regional Cauca - Centro de Teleinformática y Producción Industrial',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Experto temático',
        centro:
          'Regional Cauca - Centro de Teleinformática y Producción Industrial',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador Instruccional',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Regional Tolima - Centro Agropecuario La Granja',
      },
      {
        nombre: 'Wilmar Eduardo Amaya Ávila',
        cargo: 'Experto temático',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
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
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle Ospina',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Jhon Fredy Rodriguez Castiblanco',
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
