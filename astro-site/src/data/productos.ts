export interface Producto {
  slug: string;
  nombre: string;
  tag?: string;
  eyebrow: string;
  h1: string;
  intro: string;
  hero: string;
  heroFit?: 'contain';
  statement?: string;
  stats?: { titulo: string; items: [string, string][]; cta: string };
  features?: { titulo: string; items: [string, string][]; nota?: string };
  brochure?: string;
  beneficios?: boolean;
  detalle?: { titulo: string; texto: string; img: string; interior?: string; hint?: string };
  hibrido?: boolean;
  software?: boolean;
  industrias?: boolean;
  pulse?: { eyebrow: string; titulo: string; items: [string, string][] };
  tecnico?: { titulo: string; items: [string, string][]; img: string };
  aplicaciones?: { titulo: string; texto: string; items: [string, string][]; img: string };
  assurance?: [string, string, string][];
}

export const PRODUCTOS_ORDEN = ['ampd-200', 'ampd-400', 'enertainer', 'ampd-silo', 'software'] as const;

export const PRODUCTOS: Record<string, Producto> = {
  'enertainer': {
    slug: 'enertainer',
    nombre: 'Enertainer',
    eyebrow: 'Limpio. Silencioso. Conectado.',
    h1: 'Enertainer: el primer ESS del mundo para entornos exigentes',
    intro: 'Nuestro sistema avanzado de almacenamiento de energía en baterías (ESS) de generación original, que sigue entregando energía limpia y confiable a las industrias pesadas del mundo desde 2019 y acumula más de 1.500.000 horas de operación sin incidentes.',
    hero: '/img/productos/enertainer-hero.jpg',
    statement: 'Lanzado en 2019, el Enertainer es nuestro sistema de almacenamiento original, diseñado sin concesiones. Construido para rendir en entornos industriales duros, dinámicos y con poco espacio, está disponible en múltiples configuraciones y es ideal para proyectos que requieren mayor salida AC.',
    stats: {
      titulo: 'Sé parte de la solución hoy',
      items: [['400+', 'Enertainers'], ['300+', 'Proyectos principales'], ['100.000+', 'toneladas de CO₂ evitadas'], ['1.000+', 'años de disponibilidad operativa']],
      cta: 'Habla con Enerterra'
    },
    features: {
      titulo: 'Rendimiento',
      items: [
        ['Salida del sistema', 'Hasta 525 kW / 525 kVA (427 kW / 437 kVA continua)'],
        ['Probado', 'En cientos de proyectos, con más de 1,5 millones de horas de operación en terreno'],
        ['Rango de temperatura', 'Operación de −20 a +45 °C de temperatura ambiente'],
        ['Protección de ingreso', 'Diseñado a IP45'],
        ['Hecho para durar', 'Vida útil esperada de 10 años'],
        ['Baja mantención', 'Promedio de 1 a 2 inspecciones anuales por Enertainer']
      ]
    },
    brochure: 'https://cdn.prod.website-files.com/5ede58eb58c141f86a3a423c/677c8ebbf7a584e0fb5967e7_15734-AMPD_Product_Company_Brochure_HRF.pdf',
    beneficios: true,
    detalle: {
      titulo: 'Revolucionando las faenas con energía sin restricciones',
      texto: 'El Enertainer es un sistema avanzado de almacenamiento de energía que entrega energía sin diésel para proyectos de industria pesada. Disponible en varias configuraciones, está diseñado sin concesiones para las necesidades duras, dinámicas y con poco espacio de las faenas.',
      img: '/img/productos/enertainer-render.png',
      interior: '/img/productos/enertainer-interior.png',
      hint: 'Pasa el cursor para ver el interior'
    },
    software: true,
    industrias: true,
    hibrido: true
  },
  'ampd-400': {
    slug: 'ampd-400',
    nombre: 'Ampd 400',
    tag: 'NextGen',
    eyebrow: 'Mejora la energía de tu faena',
    h1: 'El futuro de la energía móvil: Ampd 400',
    intro: 'El Ampd 400 es uno de los modelos insignia de nuestra gama NextGen. Rediseñadas desde cero, estas unidades permiten la máxima flexibilidad y libertad energética para las industrias más exigentes del mundo.',
    hero: '/img/productos/ampd-400-hero.avif',
    statement: 'Ya sea que alimentes una obra remota o un proyecto de infraestructura crítica, nuestros sistemas están diseñados con la seguridad, la durabilidad y la robustez en su núcleo.',
    features: {
      titulo: 'Rendimiento sin igual',
      items: [
        ['Sistema de refrigeración', 'Refrigeración líquida → hasta +55 °C ambiente'],
        ['Protección de ingreso', 'Hasta IP55, sin intercambio de aire interno-externo'],
        ['Salida del sistema', 'Hasta 585 kW / 595 kVA (386 kW / 428 kVA continua)'],
        ['Química del subsistema', 'Subsistema de baterías LFP, hasta 430 kWh'],
        ['Integración solar', 'Controlador MPPT solar DC directo de 60 kW integrado*'],
        ['Compatibilidad', 'Paralelo con generadores']
      ],
      nota: '*Característica opcional'
    },
    brochure: 'https://cdn.prod.website-files.com/5ede58eb58c141f86a3a423c/69934ed435ea1f106f1b2eee_Ampd%20-%20NextGen%20Products%20Brochure%20(2).pdf',
    software: true,
    industrias: true,
    assurance: [
      ['Tecnología de baterías de primer nivel', 'El Ampd 400 utiliza celdas LFP de CATL, el fabricante líder mundial, con una vida útil líder en la industria de 9.000 ciclos al 100 % de profundidad de descarga.', '/img/productos/icon-battery.avif'],
      ['Certificación global', 'Todos nuestros productos NextGen están certificados según normas IEC y UL por SGS, el organismo de certificación de productos más reconocido a nivel global para la industria ESS.', '/img/productos/icon-certification.avif'],
      ['Confiabilidad validada', 'A través de cientos de horas en terreno y pruebas exhaustivas, nos aseguramos de que cada unidad esté libre de problemas y completamente funcional desde el primer día.', '/img/productos/icon-reliability.avif'],
      ['Soporte local, garantía global', 'Disfruta de 5 años de garantía en partes, respaldada por equipos de servicio locales y stock en la región.', '/img/productos/icon-support.avif']
    ]
  },
  'ampd-200': {
    slug: 'ampd-200',
    nombre: 'Ampd 200',
    tag: 'NextGen',
    eyebrow: 'Mejora la energía de tu faena',
    h1: 'El futuro de la energía móvil: Ampd 200',
    intro: 'El Ampd 200 es uno de los modelos insignia de nuestra gama NextGen. Rediseñadas desde cero, estas unidades permiten la máxima flexibilidad y libertad energética para las industrias más exigentes del mundo.',
    hero: '/img/productos/ampd-200-hero.avif',
    statement: 'Ya sea que alimentes una obra remota o un proyecto de infraestructura crítica, nuestros sistemas están diseñados con la seguridad, la durabilidad y la robustez en su núcleo.',
    features: {
      titulo: 'Rendimiento sin igual',
      items: [
        ['Sistema de refrigeración', 'Refrigeración líquida → hasta +55 °C ambiente'],
        ['Protección de ingreso', 'Hasta IP55, sin intercambio de aire interno-externo'],
        ['Salida del sistema', 'Hasta 292 kW / 297 kVA (193 kW / 214 kVA continua)'],
        ['Química del subsistema', 'Subsistema de baterías LFP, hasta 215 kWh'],
        ['Integración solar', 'Controlador MPPT solar DC directo de 60 kW integrado (característica opcional)'],
        ['Compatibilidad', 'Paralelo con generadores']
      ]
    },
    brochure: 'https://cdn.prod.website-files.com/5ede58eb58c141f86a3a423c/69934ed435ea1f106f1b2eee_Ampd%20-%20NextGen%20Products%20Brochure%20(2).pdf',
    software: true,
    industrias: true,
    assurance: [
      ['Tecnología de baterías de primer nivel', 'El Ampd 200 utiliza celdas LFP de CATL, el fabricante líder mundial, con una vida útil líder en la industria de 9.000 ciclos al 100 % de profundidad de descarga.', '/img/productos/icon-battery.avif'],
      ['Certificación global', 'Nuestros productos NextGen están certificados según normas IEC y UL por SGS, el organismo de certificación de productos más reconocido a nivel global para la industria ESS.', '/img/productos/icon-certification.avif'],
      ['Confiabilidad validada', 'A través de cientos de horas en terreno y pruebas exhaustivas, nos aseguramos de que cada unidad esté libre de problemas y completamente funcional desde el primer día.', '/img/productos/icon-reliability.avif'],
      ['Soporte local, garantía global', 'Disfruta de 5 años de garantía en partes, respaldada por equipos de servicio locales y stock en la región.', '/img/productos/icon-support.avif']
    ]
  },
  'ampd-silo': {
    slug: 'ampd-silo',
    nombre: 'Ampd Silo',
    eyebrow: 'Limpio. Silencioso. Conectado.',
    h1: 'Ampd Silo: ESS compacto y escalable',
    intro: 'Nuestro sistema avanzado de almacenamiento de energía en baterías (ESS) que sigue entregando energía limpia y confiable a las industrias del mundo. Lanzado en 2024, el Ampd Silo fue nuestro producto de segunda generación.',
    hero: '/img/productos/silo-hero.avif',
    statement: 'El paralelismo del Ampd Silo entrega mayor flexibilidad y escalabilidad. Pueden conectarse entre sí para entregar una mayor potencia AC con mayor capacidad de energía.',
    features: {
      titulo: 'Durable y compacto',
      items: [
        ['Salida del sistema', 'Hasta 115 kW / 115 kVA (100 kW / 100 kVA continua)'],
        ['Móvil', 'Construido para transporte fácil con grúa horquilla o grúas pequeñas'],
        ['Flexible', 'Integración perfecta con diversas fuentes de energía: red, generador y solar FV'],
        ['Escalable', 'Combina múltiples unidades en paralelo para aumentar potencia y capacidad'],
        ['Confiable', 'Tecnología probada y experiencia de operación en más de 200 proyectos de construcción'],
        ['Robusto', 'Uso pesado, capaz de soportar condiciones climáticas extremas y entornos hostiles']
      ]
    },
    brochure: 'https://cdn.prod.website-files.com/5ede58eb58c141f86a3a423c/677c8ebbf7a584e0fb5967e7_15734-AMPD_Product_Company_Brochure_HRF.pdf',
    beneficios: true,
    detalle: {
      titulo: 'Compacto y escalable',
      texto: 'El Ampd Silo es una solución de energía flexible, escalable y móvil. Con su diseño compacto que entrega un rendimiento excepcional, está diseñado para reemplazar los generadores diésel sucios, ruidosos y peligrosos que alimentan las industrias del mundo.',
      img: '/img/productos/silo-render.png',
      interior: '/img/productos/silo-abierto.png',
      hint: 'Pasa el cursor para ver el interior'
    },
    software: true,
    industrias: true
  },
  'software': {
    slug: 'software',
    nombre: 'Software',
    eyebrow: 'Inteligencia de desempeño en tiempo real',
    h1: 'El software Ampd es estándar en todas las unidades',
    intro: 'Acceso a un stack de software líder en su clase que simplifica drásticamente la planificación previa al despliegue, la operación y mantención, la gestión de flota y el reporte de datos.',
    hero: '/img/productos/software-hero.jpg',
    heroFit: 'contain',
    features: {
      titulo: 'Lo que obtienes de fábrica con una unidad Ampd',
      items: [
        ['Inteligencia de desempeño en tiempo real', 'Monitorea el desempeño 24/7 con Ampd Pulse, tu plataforma intuitiva de monitoreo remoto, analítica y reporte de datos.'],
        ['Actualizaciones de la plataforma', 'Accede a datos valiosos del equipo desde nuestras plataformas de software, con entrega continua de las últimas funciones y mejoras.'],
        ['Programación en la nube', 'Personaliza el horario de operación de tu equipo según el ritmo de la faena con el Schedule Designer de Ampd Pulse.']
      ]
    },
    brochure: 'https://cdn.prod.website-files.com/5ede58eb58c141f86a3a423c/69934e9b460606fbc3a8e524_Ampd%20-%20Brochure%202026%20-%20v3.1%20-%20Single%20page.pdf',
    pulse: {
      eyebrow: 'Ampd Pulse',
      titulo: 'Ampd Pulse es nuestro portal en línea que se conecta a tu unidad Ampd',
      items: [
        ['Monitoreo 24/7', 'Monitoreo remoto de desempeño 24/7, datos en tiempo real, reportes y analítica.'],
        ['Ahorros', 'El motor de cálculo de energía, combustible y carbono calcula automáticamente el consumo del sitio y el ahorro de combustible y CO₂.'],
        ['Reporte mensual', 'Reportes mensuales descargables de operación, energía y ahorro de carbono.'],
        ['Schedule Designer', 'Personalización remota del horario de operación de tu equipo Ampd según el ritmo de la faena.'],
        ['Panel de servicio', 'Panel de servicio integrado para el monitoreo proactivo de activos.']
      ]
    },
    tecnico: {
      titulo: 'Fundamento técnico y control del usuario',
      items: [
        ['Inteligencia en tiempo real', 'Salud de la batería: SOC 0–100 %, temperatura de celdas. Flujo de potencia: corriente, potencia y voltaje de entrada/salida.'],
        ['Cobertura de seguridad completa', 'Monitoreo de apagado de emergencia, detección de inundación, fuego y gas. Alertas de temperatura con avisos visuales.'],
        ['Seguridad empresarial', 'Tranquilidad con manejo de datos conforme a GDPR y registro de auditoría.'],
        ['Inteligencia de negocio', 'Seguimiento de emisiones de carbono vs. generadores diésel. Ahorro de combustible con escenarios personalizables.'],
        ['Acceso desde cualquier lugar', 'Accede a tus datos vía web y apps móviles (iOS y Android), con soporte multilenguaje y API REST.'],
        ['Control de usuarios', 'Control de acceso por rol a nivel de plataforma y de equipo.']
      ],
      img: '/img/productos/home-hero.avif'
    },
    aplicaciones: {
      titulo: 'Aplicaciones por industria',
      texto: 'Deja de operar a ciegas con tus baterías. Ampd Pulse te da la visibilidad y los datos que necesitas para optimizar el desempeño, reducir costos y demostrar el impacto ambiental.',
      items: [
        ['Construcción y eventos', 'Monitorea sistemas de energía temporal y entrega a tus clientes la documentación del ahorro de combustible.'],
        ['Ubicaciones remotas', 'Monitoreo confiable para operaciones de minería, telecomunicaciones y oil & gas en entornos exigentes.']
      ],
      img: '/img/productos/tunneling.jpg'
    },
    industrias: true
  }
};

export const BENEFICIOS: [string, string][] = [
  ['Totalmente eléctrico', 'Un sistema de baterías de última generación con electrónica de alta potencia que alimenta las cargas más exigentes.'],
  ['Conectado', 'La conectividad a internet permite monitoreo remoto, gestión de equipos, diagnóstico remoto y analítica de datos.'],
  ['Cero emisiones', 'Sin emisiones directas. Ninguna de las emisiones dañinas de CO, CO₂, NOx, PM o SO₂ de un generador diésel.'],
  ['Más seguro', 'Elimina el manejo de diésel, los derrames y los devastadores incendios por diésel.'],
  ['Más silencioso', 'Casi treinta y dos veces más silencioso que un generador diésel.'],
  ['Plug-and-play', 'Reemplazo directo de la mayoría de los generadores diésel grandes. Operativo en menos de 2 horas.'],
  ['Productividad', 'Recarga automática, pocos requisitos de mantención y un diseño modular significan casi cero tiempo de detención.'],
  ['Soporte y servicio', 'Monitoreado remotamente por Ampd ante cualquier problema. Equipo de servicio rápido y dedicado.']
];

/* Para el listado de la home */
export const PRODUCTO_CARDS = [
  { slug: 'ampd-200', nombre: 'Ampd 200', tag: 'NextGen', spec: 'Hasta 292 kW / 297 kVA', specCont: '193 kW / 214 kVA continua', img: '/img/producto-ampd-200.png' },
  { slug: 'ampd-400', nombre: 'Ampd 400', tag: 'NextGen', spec: 'Hasta 585 kW / 595 kVA', specCont: '386 kW / 428 kVA continua', img: '/img/producto-ampd-400.png' },
  { slug: 'enertainer', nombre: 'Enertainer', spec: 'Hasta 470 kW / 525 kVA', specCont: '427 kW / 437 kVA continua', img: '/img/producto-enertainer-lista.png' },
  { slug: 'ampd-silo', nombre: 'Ampd Silo', spec: 'Hasta 57,5 kW / 57,5 kVA', specCont: '50 kW / 50 kVA continua', img: '/img/producto-ampd-silo.png' },
  { slug: 'software', nombre: 'Software Ampd Pulse', spec: '24/7 en tiempo real', specCont: 'Web · app iOS/Android · API', img: '/img/producto-ampd-pulse.jpg' },
];
