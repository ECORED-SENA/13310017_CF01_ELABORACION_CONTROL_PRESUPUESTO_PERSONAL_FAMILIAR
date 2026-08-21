export default {
  global: {
    Name: 'Diagnóstico y alistamiento del presupuesto personal',
    Description:
      'El reconocimiento de las finanzas personales, la identificación de ingresos, gastos, costos, deudas y necesidades del núcleo familiar, así como la apropiación de conceptos, normativa y formatos presupuestales, son fundamentales para organizar la información financiera personal y preparar un presupuesto acorde con la realidad económica, las prioridades y los objetivos del individuo.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Finanzas personales y diagnóstico inicial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición de finanzas personales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características de las finanzas personales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de finanzas personales',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Aplicación de las finanzas personales en la vida cotidiana',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Hábitos de consumo y manejo del dinero',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Necesidades financieras personales y del núcleo familiar',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Fuentes de ingreso personal y familiar',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Diagnóstico del estado financiero personal',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Presupuesto personal y sus componentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de presupuesto personal',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principios del presupuesto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características del presupuesto personal',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Clases y tipos de presupuesto',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Métodos de elaboración del presupuesto',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Componentes del presupuesto: ingresos, gastos y costos',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Financiación, deudas y obligaciones personales',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Proyecciones presupuestales y variables financieras',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Clasificación de la información financiera personal',
            hash: 't_2_9',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normativa, ética y requerimientos técnicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Normativa financiera aplicada a las finanzas personales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Seguridad y salud en el trabajo en el manejo de recursos personales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Lineamientos ambientales y uso responsable de los recursos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Identificación, apropiación e importancia de la normativa',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Principios éticos en el manejo de la información financiera',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo:
              'Transparencia, responsabilidad y veracidad en el presupuesto personal',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Requerimientos técnicos para el alistamiento presupuestal',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Guía técnica y formatos presupuestales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Definición de guía técnica para elaborar presupuestos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Aplicación de la guía técnica en el presupuesto personal',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Descripción y características de la guía técnica',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Formatos físicos de presupuesto personal',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Formatos electrónicos de presupuesto personal',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Criterios para seleccionar formatos presupuestales',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Organización de soportes e información financiera',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo: 'Diligenciamiento inicial del formato presupuestal',
            hash: 't_4_8',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/13310017_CF01_DU.zip',
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
  glosario: [
    {
      termino: 'Ahorro',
      significado:
        'parte del ingreso que se reserva para atender imprevistos, cumplir metas o fortalecer la estabilidad financiera personal o familiar.',
    },
    {
      termino: 'Alistamiento presupuestal',
      significado:
        'proceso de preparación, organización y verificación de la información financiera antes de diligenciar el presupuesto personal.',
    },
    {
      termino: 'Capacidad de pago',
      significado:
        'dinero disponible que tiene una persona después de cubrir sus gastos básicos, costos, deudas y compromisos prioritarios.',
    },
    {
      termino: 'Costo',
      significado:
        'valor de los recursos necesarios para sostener una actividad o generar ingresos, como insumos, materiales, transporte o herramientas.',
    },
    {
      termino: 'Deuda',
      significado:
        'obligación económica adquirida con una persona, entidad financiera o comercio, que debe pagarse en un plazo determinado.',
    },
    {
      termino: 'Diagnóstico financiero',
      significado:
        'revisión inicial de ingresos, gastos, costos, deudas, hábitos de consumo y necesidades para conocer la situación económica real.',
    },
    {
      termino: 'Financiación',
      significado:
        'mecanismo que permite adquirir bienes, servicios o recursos mediante pagos futuros, generalmente asociados a cuotas, plazos e intereses.',
    },
    {
      termino: 'Finanzas personales',
      significado:
        'conjunto de decisiones y prácticas relacionadas con la administración del dinero, los ingresos, gastos, ahorro, deudas y metas personales.',
    },
    {
      termino: 'Formato presupuestal',
      significado:
        'herramienta física o electrónica utilizada para registrar, clasificar y controlar la información financiera personal o familiar.',
    },
    {
      termino: 'Gasto',
      significado:
        'salida de dinero destinada a cubrir necesidades, obligaciones o consumos personales y familiares.',
    },
    {
      termino: 'Hoja electrónica',
      significado:
        'herramienta digital que permite organizar datos financieros en filas y columnas, aplicar fórmulas y calcular totales o saldos.',
    },
    {
      termino: 'Ingreso',
      significado:
        'entrada de dinero que recibe una persona o familia por salario, ventas, servicios, apoyos, pensiones u otras fuentes.',
    },
    {
      termino: 'Interés',
      significado:
        'valor que se paga por usar dinero prestado o que se recibe como rendimiento por ahorrar o invertir recursos.',
    },
    {
      termino: 'Presupuesto personal',
      significado:
        'herramienta de planeación que organiza ingresos, gastos, costos, deudas, ahorro y metas para controlar el uso del dinero.',
    },
    {
      termino: 'Soporte financiero',
      significado:
        'documento físico o digital que respalda un movimiento económico, como recibos, facturas, extractos, comprobantes o contratos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asobancaria. (s. f.). Banca de las Oportunidades: Capítulo presupuesto. ',
      link: '',
    },
    {
      referencia: 'Banco de la República. (s. f.). Talleres Banrep Educa. ',
      link: 'https://www.banrep.gov.co/es/servicios-temas/10596',
    },
    {
      referencia:
        'Congreso de Colombia. (2009, 15 de julio). Ley 1328 de 2009, por la cual se dictan normas en materia financiera, de seguros, del mercado de valores y otras disposiciones. Función Pública. ',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36841',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993, 22 de diciembre). Ley 99 de 1993, por la cual se crea el Ministerio del Medio Ambiente, se reordena el sector público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental (SINA) y se dictan otras disposiciones. Función Pública. ',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=297',
    },
    {
      referencia:
        'Escobar R., D. (2024). Conocimientos y habilidades para la gestión eficaz de las finanzas personales en mujeres pertenecientes a FAVISDESC en la ciudad de Florencia, Caquetá [Trabajo de grado, Universidad Nacional Abierta y a Distancia]. Repositorio Institucional UNAD. ',
      link: 'https://repository.unad.edu.co/handle/10596/67436',
    },
    {
      referencia:
        'López, G. (2026). Las finanzas personales: Un concepto que va más allá de su estructura.',
      link: '',
    },
    {
      referencia: 'Microsoft. (s. f.). Ayuda y formación de Excel. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2022). Mi plan vida y futuro. Orientaciones pedagógicas para la educación económica y financiera. ',
      link: 'https://www.mineducacion.gov.co/1780/articles-340033_Orientaciones_Edu_economica_financiera_vfinal.pdf',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2014, 5 de marzo). Decreto 457 de 2014. Función Pública. ',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=66298',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015, 26 de mayo). Decreto 1072 de 2015. Decreto Único Reglamentario del Sector Trabajo. Función Pública. ',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=72173',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Jose Calderon Gutierrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
