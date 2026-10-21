export type LandingId = "inicio" | "shilajit" | "creatina" | "maquinaria" | "recuperacion";

export interface NavItem {
  id: LandingId;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  name: string;
  tagline: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  features: string[];
  image?: string;
  targetLanding?: LandingId;
  cta?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Landing {
  id: LandingId;
  navLabel: string;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  heroImage: string;
  primaryCta: string;
  secondaryCta: string;
  stats: Stat[];
  benefitsEyebrow: string;
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: Benefit[];
  productsEyebrow: string;
  productsTitle: string;
  productsSubtitle: string;
  products: Product[];
  processEyebrow: string;
  processTitle: string;
  processSteps: ProcessStep[];
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonials: Testimonial[];
  faqs: Faq[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaImage: string;
}

export const STORE_URL = "https://www.wolfstrgn.com";

export const NAV_ITEMS: NavItem[] = [
  { id: "inicio", label: "Inicio" },
  { id: "shilajit", label: "Shilajit" },
  { id: "creatina", label: "Creatina" },
  { id: "maquinaria", label: "Maquinaria" },
  { id: "recuperacion", label: "Recuperación" },
];

export const LANDINGS: Record<LandingId, Landing> = {
  inicio: {
    id: "inicio",
    navLabel: "Inicio",
    eyebrow: "Suplementación · Entrenamiento · Recuperación",
    title: "ENTRENA COMO",
    titleHighlight: "UN LOBO",
    subtitle:
      "WOLFSTRGN es la tienda online española de suplementación, equipamiento y maquinaria para una vida activa. Fuerza, instinto y resultados: todo lo que necesitas para dominar tu entrenamiento, con un 10% de descuento en tu pedido.",
    heroImage: "/images/hero-brand.png",
    primaryCta: "Comprar ahora · 10% DTO",
    secondaryCta: "Ver Shilajit del Himalaya",
    stats: [
      { value: "85+", label: "Minerales en el Shilajit" },
      { value: "1-3", label: "Días de envío con seguimiento" },
      { value: "30", label: "Días de devolución garantizada" },
      { value: "10%", label: "Descuento en tu pedido" },
    ],
    benefitsEyebrow: "Por qué WOLFSTRGN",
    benefitsTitle: "VENTAJAS DE LA MANADA",
    benefitsSubtitle:
      "Compra con la tranquilidad de quien sabe que cada detalle está pensado para que solo te preocupes por entrenar.",
    benefits: [
      {
        icon: "truck",
        title: "Envío en 1-3 días",
        description:
          "Recibe tu pedido en casa en cuestión de días, con número de seguimiento en todo momento desde que sales de nuestro almacén.",
      },
      {
        icon: "percent",
        title: "10% de descuento directo",
        description:
          "El descuento se aplica automáticamente sobre el total de tu carrito al tramitar el pedido. Sin códigos, sin letra pequeña.",
      },
      {
        icon: "shield",
        title: "Pago 100% seguro",
        description:
          "Paga con Visa, Mastercard, Apple Pay o Google Pay a través de Shopify. Tus datos viajan cifrados y nunca los almacenamos.",
      },
      {
        icon: "undo",
        title: "Devoluciones 30 días",
        description:
          "Si algo no encaja contigo, tienes 30 días garantizados para devolverlo. Sin excusas y sin complicaciones.",
      },
      {
        icon: "badge-check",
        title: "Selección verificada",
        description:
          "Cada producto del catálogo pasa un filtro de calidad: solo suplementos, equipamiento y maquinaria que usaríamos nosotros.",
      },
      {
        icon: "headset",
        title: "Soporte cercano",
        description:
          "Atención por email y WhatsApp para resolver dudas antes y después de tu compra. Trato humano, no bots.",
      },
    ],
    productsEyebrow: "Nuestras categorías",
    productsTitle: "EL ARSENAL COMPLETO",
    productsSubtitle:
      "Cuatro líneas de producto que cubren el ciclo completo: energía, rendimiento, entrenamiento y recuperación.",
    products: [
      {
        name: "Suplementación",
        tagline: "Resina Pura de Shilajit del Himalaya con 85+ minerales, creatina y nutrición deportiva de máxima pureza.",
        price: "Desde 29,39 €",
        badge: "Producto estrella",
        features: ["Shilajit del Himalaya", "Creatina monohidrato", "Energía vital diaria"],
        image: "/images/product-shilajit.png",
        targetLanding: "shilajit",
        cta: "Ver suplementos",
      },
      {
        name: "Nutrición deportiva",
        tagline: "Creatina micronizada y soporte nutricional para exprimir cada serie y recuperar antes.",
        price: "Desde 19,99 €",
        features: ["Fuerza y potencia", "Volumen muscular", "Disolución instantánea"],
        image: "/images/product-creatina.png",
        targetLanding: "creatina",
        cta: "Ver creatina",
      },
      {
        name: "Maquinaria de entrenamiento",
        tagline: "Máquinas de gimnasio, peso libre y electroestimulación para montar tu box o tu home gym.",
        price: "Presupuesto a medida",
        features: ["Máquinas guiadas", "Peso libre", "Electroestimulación"],
        image: "/images/maquinaria.png",
        targetLanding: "maquinaria",
        cta: "Ver maquinaria",
      },
      {
        name: "Recuperación muscular",
        tagline: "Pistolas de masaje, rodillos de espuma y presoterapia para volver al entrenamiento antes.",
        price: "Desde 39,99 €",
        features: ["Pistolas de masaje", "Rodillos de foam", "Presoterapia"],
        image: "/images/recuperacion.png",
        targetLanding: "recuperacion",
        cta: "Ver recuperación",
      },
    ],
    processEyebrow: "Cómo funciona",
    processTitle: "DE LA MANADA A TU CASA",
    processSteps: [
      {
        title: "Elige tu equipo",
        description:
          "Explora el catálogo y añade al carrito lo que necesites: suplementos, equipamiento o maquinaria. El 10% de descuento se suma solo.",
      },
      {
        title: "Paga con seguridad",
        description:
          "Tramita el pedido con Visa, Mastercard, Apple Pay o Google Pay sobre la plataforma Shopify, con cifrado de extremo a extremo.",
      },
      {
        title: "Recíbelo en 1-3 días",
        description:
          "Te enviamos el número de seguimiento y en poco tiempo lo tienes en casa. Y si no encaja, tienes 30 días para devolverlo.",
      },
    ],
    testimonialsTitle: "LO QUE DICE LA MANADA",
    testimonialsSubtitle: "Clientes reales que ya entrenan con WOLFSTRGN.",
    testimonials: [
      {
        name: "Carlos M.",
        role: "Powerlifter amateur, Sevilla",
        quote:
          "El Shilajit se nota en la energía diaria y la creatina disuelve perfecto. Pedí un martes y el jueves lo tenía en casa. Repetiré sin duda.",
        rating: 5,
      },
      {
        name: "Lucía R.",
        role: "CrossFit, Huelva",
        quote:
          "La pistola de masaje me ha cambiado la recuperación entre sesiones. Y el 10% de descuento aplicado al pagar fue una sorpresa agradable.",
        rating: 5,
      },
      {
        name: "Javier P.",
        role: "Owner de gimnasio, Bonares",
        quote:
          "Montamos la zona de fuerza con su maquinaria. Asesoramiento serio y entrega puntual. Relación calidad-precio difícil de igualar en España.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "¿Cómo se aplica el 10% de descuento?",
        answer:
          "El descuento se aplica automáticamente sobre el total de tu carrito al tramitar el pedido en wolfstrgn.com. No necesitas introducir ningún código ni cumplir condiciones especiales: se resta directamente antes del pago.",
      },
      {
        question: "¿Cuánto tarda el envío y cómo lo sigo?",
        answer:
          "Los envíos llegan en un plazo de 1 a 3 días laborables a toda España. En cuanto sale el pedido recibirás un email con el número de seguimiento para conocer la posición del paquete en todo momento.",
      },
      {
        question: "¿Qué métodos de pago aceptáis?",
        answer:
          "Aceptamos Visa, Mastercard, Apple Pay y Google Pay. Todas las transacciones se procesan a través de la pasarela segura de Shopify, con cifrado SSL y sin almacenar datos de tarjeta.",
      },
      {
        question: "¿Puedo devolver un producto si no me convence?",
        answer:
          "Sí. Tienes 30 días garantizados desde la recepción para solicitar una devolución. Escríbenos a contact.wolfstrgn@gmail.com y gestionamos la recogida o el cambio sin complicaciones.",
      },
      {
        question: "¿Trabajáis con gimnasios y boxes?",
        answer:
          "Sí, equipamos gimnasios completos con maquinaria de fuerza, peso libre y electroestimulación. Escríbenos con tu proyecto y te preparamos un presupuesto a medida con ventajas para profesionales.",
      },
    ],
    ctaTitle: "ÚNETE A LA MANADA HOY",
    ctaSubtitle:
      "Aprovecha el 10% de descuento sobre tu pedido completo y empieza a entrenar con equipamiento de verdad. La manada te está esperando.",
    ctaImage: "/images/athlete.png",
  },

  shilajit: {
    id: "shilajit",
    navLabel: "Shilajit",
    eyebrow: "Energía vital desde 3.000 metros de altitud",
    title: "RESINA PURA DE",
    titleHighlight: "SHILAJIT",
    subtitle:
      "Resina pura de Shilajit del Himalaya con más de 85 minerales traza y ácido fúlvico. El adaptógeno ancestral que usan los montañeros del Himalaya para sostener energía, claridad mental y rendimiento día tras día. Por 29,39 € y con 10% de descuento al tramitar el pedido.",
    heroImage: "/images/himalaya.png",
    primaryCta: "Comprar Shilajit · 29,39 €",
    secondaryCta: "Ver cómo se usa",
    stats: [
      { value: "85+", label: "Minerales traza naturales" },
      { value: "100%", label: "Resina pura purificada" },
      { value: "29,39 €", label: "Precio con envío rápido" },
      { value: "30", label: "Días de garantía de devolución" },
    ],
    benefitsEyebrow: "Beneficios que se notan",
    benefitsTitle: "EL ORO NEGRO DEL HIMALAYA",
    benefitsSubtitle:
      "Formado durante siglos por la descomposición de plantas en las alturas del Himalaya, el Shilajit concentra en la resina lo que la montaña tardó milenios en crear.",
    benefits: [
      {
        icon: "zap",
        title: "Energía sostenida",
        description:
          "Los minerales traza y el ácido fúlvico apoyan la producción de energía celular (ATP), ayudándote a combatir la fatiga sin picos ni caídas de cafeína.",
      },
      {
        icon: "brain",
        title: "Claridad mental",
        description:
          "El ácido fúlvico actúa como antioxidante cerebral. Muchos usuarios reportan mayor concentración y foco desde las primeras semanas de uso constante.",
      },
      {
        icon: "flame",
        title: "Soporte hormonal",
        description:
          "Estudios preliminares asocian el Shilajit purificado con niveles saludables de testosterona y mejor recuperación en hombres activos.",
      },
      {
        icon: "shield",
        title: "Pureza verificada",
        description:
          "Resina purificada y filtrada, libre de metales pesados e impurezas. Nada de polvos diluidos: textura resinosa auténtica y sabor intenso.",
      },
      {
        icon: "droplets",
        title: "85+ minerales traza",
        description:
          "Hierro, zinc, magnesio, potasio y más de 80 oligoelementos que la dieta moderna apenas aporta, en forma biodisponible.",
      },
      {
        icon: "mountain",
        title: "Origen Himalaya",
        description:
          "Recolectado a gran altitud y procesado con métodos tradicionales de purificación. De la montaña directa a tu tarro de vidrio.",
      },
    ],
    productsEyebrow: "Ficha del producto",
    productsTitle: "UN SOLO PRODUCTO. CERO COMPROMISOS.",
    productsSubtitle:
      "No vendemos versiones diluidas ni mezclas baratas. Este es el Shilajit que usamos nosotros.",
    products: [
      {
        name: "Resina Pura de Shilajit del Himalaya",
        tagline:
          "Tarro de vidrio con resina purificada, cuchara dosificadora incluida y guía de uso impresa. 85+ minerales traza y ácido fúlvico de alta concentración.",
        price: "29,39 €",
        badge: "Más vendido",
        features: [
          "Resina 100% pura, sin diluir",
          "85+ minerales traza + ácido fúlvico",
          "Cuchara dosificadora incluida",
          "Envío 1-3 días · Devolución 30 días",
        ],
        image: "/images/product-shilajit.png",
        cta: "Añadir al pedido · 10% DTO",
      },
    ],
    processEyebrow: "Cómo usarlo",
    processTitle: "TRES PASOS, CADA DÍA",
    processSteps: [
      {
        title: "Toma una dosis de guisante",
        description:
          "Con la cuchara dosificadora, extrae una porción del tamaño de un guisante (aprox. 300-400 mg). La resina es densa: no hace falta más.",
      },
      {
        title: "Disuélvela en líquido caliente",
        description:
          "Mézclala en agua, té o café caliente. Se disuelve en segundos sin grumos. Evita líquidos con alcohol para no degradar los compuestos activos.",
      },
      {
        title: "Sé constante, 1-2 veces al día",
        description:
          "Los efectos se acumulan: la mayoría nota la diferencia entre la semana 2 y la 4. Mañana y mediodía es el momento ideal.",
      },
    ],
    testimonialsTitle: "ENERGÍA REAL, RESULTADOS REALES",
    testimonialsSubtitle: "Lo que cuentan quienes ya lo toman a diario.",
    testimonials: [
      {
        name: "Miguel Á.",
        role: "Trail runner, Sierra de Aracena",
        quote:
          "Entreno por la mañana y las tardes ya no me caigo. La energía es estable, sin bajones. El sabor es intenso pero se va con el té.",
        rating: 5,
      },
      {
        name: "Rocío T.",
        role: "Yoga y pilates, Huelva",
        quote:
          "Lo empecé por curiosidad y me quedé por la claridad mental. Trabajo delante del ordenador y noto menos fatiga al final del día.",
        rating: 5,
      },
      {
        name: "Antonio G.",
        role: "Culturista, Lepe",
        quote:
          "Llevaba tiempo buscando shilajit que no fuese polvo adulterado. Esta resina tiene la textura y el olor auténticos. Aprobado.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "¿Qué es exactamente el Shilajit?",
        answer:
          "Es una resina mineral que se forma durante siglos en las rocas del Himalaya por la lenta descomposición de vegetación alpina. Su apodo es 'el destructor de la debilidad' en la medicina ayurvédica, donde se usa desde hace más de 3.000 años por su alto contenido en minerales traza y ácido fúlvico.",
      },
      {
        question: "¿Cómo sé que es auténtico y no un polvo diluido?",
        answer:
          "El Shilajit auténtico es una resina densa, pegajosa y oscura que se ablanda con el calor de las manos y se disuelve completamente en agua caliente sin dejar residuos. Nuestra resina pasa por un proceso de purificación y filtrado, y su comportamiento en agua fría y caliente es el característico de la resina original.",
      },
      {
        question: "¿Tiene algún efecto secundario?",
        answer:
          "El Shilajit purificado es bien tolerado por la mayoría de personas. Si estás embarazada, en lactancia, tomas medicación o tienes alguna condición médica, consulta antes con tu profesional de salud. No superes la dosis diaria recomendada.",
      },
      {
        question: "¿Cuánto tarda en hacer efecto?",
        answer:
          "Los primeros cambios en energía suelen notarse en 1-2 semanas. Los efectos completos sobre rendimiento y recuperación se aprecian con uso constante de 4 a 8 semanas, ya que los minerales se van acumulando en el organismo.",
      },
      {
        question: "¿Se puede combinar con creatina u otros suplementos?",
        answer:
          "Sí, es una combinación excelente y muy habitual: la creatina apoya la potencia en el entrenamiento y el Shilajit aporta soporte mineral y de energía diaria. No hay interacciones negativas conocidas entre ambos.",
      },
    ],
    ctaTitle: "PRUEBA EL ORO NEGRO DEL HIMALAYA",
    ctaSubtitle:
      "Tarro de resina pura por 29,39 € con 10% de descuento al tramitar el pedido y envío en 1-3 días. Si no te convence, tienes 30 días de devolución garantizada.",
    ctaImage: "/images/himalaya.png",
  },

  creatina: {
    id: "creatina",
    navLabel: "Creatina",
    eyebrow: "El suplemento más estudiado del planeta",
    title: "CREATINA DE",
    titleHighlight: "MÁXIMA PUREZA",
    subtitle:
      "Monohidrato de creatina micronizado: el ingrediente con más evidencia científica para ganar fuerza, potencia y volumen muscular. Sin rellenos, sin sabores artificiales, sin excusas. Disolución instantánea y precio con 10% de descuento al tramitar el pedido.",
    heroImage: "/images/product-creatina.png",
    primaryCta: "Comprar creatina · 10% DTO",
    secondaryCta: "Ver protocolo de toma",
    stats: [
      { value: "500+", label: "Estudios científicos la respaldan" },
      { value: "5 g", label: "Dosis diaria efectiva" },
      { value: "100%", label: "Monohidrato micronizado" },
      { value: "1-3", label: "Días de envío con seguimiento" },
    ],
    benefitsEyebrow: "Por qué tomarla",
    benefitsTitle: "FUERZA QUE SE MIDE EN KILOS",
    benefitsSubtitle:
      "La creatina aumenta las reservas de fosfocreatina en el músculo: más energía disponible en las series cortas y de alta intensidad, y más progreso semana a semana.",
    benefits: [
      {
        icon: "dumbbell",
        title: "Más fuerza y potencia",
        description:
          "Mejora el rendimiento en esfuerzos máximos de corta duración: sentadillas, press, sprints. Los incrementos del 5-15% en fuerza son habituales en la literatura.",
      },
      {
        icon: "activity",
        title: "Volumen muscular",
        description:
          "Al hidratar la célula muscular aumenta el volumen intracelular, un entorno anabólico que favorece la síntesis proteica y el aspecto más lleno del músculo.",
      },
      {
        icon: "timer",
        title: "Recuperación entre series",
        description:
          "Repones fosfocreatina más rápido entre series y entre sesiones, sosteniendo más volumen de entrenamiento efectivo a lo largo de la semana.",
      },
      {
        icon: "brain",
        title: "Beneficio cognitivo",
        description:
          "El cerebro también usa ATP. La investigación reciente asocia la creatina con mejor memoria de trabajo y menos fatiga mental, especialmente en déficit de sueño.",
      },
      {
        icon: "wand",
        title: "Disolución instantánea",
        description:
          "Micronizada para disolverse sin grumos en agua o zumo. Nada de texturas arenosas ni residuos en el fondo del vaso.",
      },
      {
        icon: "leaf",
        title: "Solo un ingrediente",
        description:
          "Sin mezclas ocultas ni rellenos: etiqueta limpia de monohidrato de creatina. El formato con más evidencia y mejor relación eficacia-precio.",
      },
    ],
    productsEyebrow: "Ficha del producto",
    productsTitle: "CREATINA SIN ADORNOS",
    productsSubtitle:
      "Un producto, un ingrediente, cero promesas vacías. La base de cualquier stack serio.",
    products: [
      {
        name: "Creatina Monohidrato Micronizada",
        tagline:
          "Creapure-quality monohydrate, 100% micronizado. Sin sabor para mezclar con lo que quieras. Rendimiento y recuperación, serie a serie.",
        price: "Desde 19,99 €",
        badge: "Mejor precio",
        features: [
          "Monohidrato 100% micronizado",
          "Sin sabor, sin aditivos",
          "Disolución instantánea",
          "Bote de larga duración",
        ],
        image: "/images/product-creatina.png",
        cta: "Añadir al pedido · 10% DTO",
      },
    ],
    processEyebrow: "Protocolo de toma",
    processTitle: "SIMPLE Y EFECTIVO",
    processSteps: [
      {
        title: "Toma 5 g al día",
        description:
          "Una medida diaria de 5 gramos, todos los días —entrenes o no—. La constancia importa más que el momento del día en que la tomes.",
      },
      {
        title: "Mezcla con cualquier líquido",
        description:
          "Agua, zumo o tu batido de proteína. Se disuelve en segundos. Opcionalmente combínala con carbohidratos para mejorar ligeramente su captación.",
      },
      {
        title: "Mantén la constancia",
        description:
          "Las reservas musculares se saturan en 2-4 semanas de toma continua. A partir de ahí, el efecto se sostiene mientras mantengas los 5 g diarios.",
      },
    ],
    testimonialsTitle: "PROGRESO REAL EN LA BARRA",
    testimonialsSubtitle: "Historias de quienes sumaron creatina a su rutina.",
    testimonials: [
      {
        name: "David L.",
        role: "Fuerza, Madrid",
        quote:
          "En seis semanas sumé 7,5 kg a mi sentadilla. Se disuelve perfecto en el batido y no me retiene nada de molestias estomacales.",
        rating: 5,
      },
      {
        name: "Elena S.",
        role: "Hyrox, Sevilla",
        quote:
          "Notaba que llegaba al final del WOD con el tanque vacío. Con la creatina sostengo mejor las series de alto ritmo. Llegó en dos días.",
        rating: 5,
      },
      {
        name: "Pablo V.",
        role: "Estudiante y gimnasio, Cádiz",
        quote:
          "Precio imbatible con el 10% de descuento. Producto sencillo, tal cual debe ser la creatina. Mi bote dura más de dos meses.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "¿La creatina es segura?",
        answer:
          "Es el suplemento deportivo más estudiado de la historia, con cientos de estudios en poblaciones sanas que la confirman como segura a dosis de 3-5 g diarios. No es una hormona ni un esteroide: un compuesto que tu cuerpo ya produce y que también obtienes de alimentos como la carne y el pescado.",
      },
      {
        question: "¿Necesito fase de carga?",
        answer:
          "No es imprescindible. La fase de carga (20 g/día durante 5-7 días) satura las reservas más rápido, pero tomar 5 g diarios alcanza la misma saturación en 2-4 semanas. Para la mayoría, la vía simple es la mejor.",
      },
      {
        question: "¿Engorda o retiene líquidos?",
        answer:
          "La creatina aumenta el agua dentro de la célula muscular (no debajo de la piel), por lo que puedes subir 1-2 kg al saturar las reservas. Es intracelular, forma parte del efecto beneficioso y se normaliza al suspender la toma.",
      },
      {
        question: "¿Cuándo es mejor tomarla?",
        answer:
          "La evidencia sugiere que tomarla cerca del entrenamiento (antes o después) puede tener una ligera ventaja, pero la diferencia es mínima. Lo que de verdad importa es tomarla todos los días, también en descanso.",
      },
      {
        question: "¿Puedo tomarla con Shilajit y proteína?",
        answer:
          "Sí, son combinaciones compatibles y habituales. Muchos clientes toman creatina en el batido post-entreno y Shilajit en el desayuno. No hay interacciones negativas conocidas.",
      },
    ],
    ctaTitle: "EL SUPLEMENTO QUE NO PUEDE FALTAR",
    ctaSubtitle:
      "Monohidrato micronizado puro, con 10% de descuento al tramitar el pedido y envío en 1-3 días. Empieza hoy y siente la diferencia en tu barra.",
    ctaImage: "/images/athlete.png",
  },

  maquinaria: {
    id: "maquinaria",
    navLabel: "Maquinaria",
    eyebrow: "Equipamiento profesional y home gym",
    title: "MAQUINARIA PARA",
    titleHighlight: "DOMINAR EL HIERRO",
    subtitle:
      "Máquinas de gimnasio, peso libre y electroestimulación para montar tu box profesional o tu home gym soñado. Asesoramiento real, presupuesto a medida y logística de entrega cuidada en toda España.",
    heroImage: "/images/maquinaria.png",
    primaryCta: "Pedir presupuesto · 10% DTO",
    secondaryCta: "Ver zonas de entrenamiento",
    stats: [
      { value: "360°", label: "Asesoría de montaje completa" },
      { value: "3", label: "Líneas: máquinas, peso libre, EMS" },
      { value: "10%", label: "Descuento sobre el total" },
      { value: "30", label: "Días de garantía de devolución" },
    ],
    benefitsEyebrow: "Por qué WOLFSTRGN",
    benefitsTitle: "HIERRO QUE AGUANTA AÑOS",
    benefitsSubtitle:
      "Seleccionamos maquinaria con estándares de uso comercial: estructuras reforzadas, recubrimientos resistentes y repuestos disponibles. Nada de material de consumo que se afloja en meses.",
    benefits: [
      {
        icon: "warehouse",
        title: "Estándar comercial",
        description:
          "Estructuras de acero reforzado y cojinería de alta densidad pensadas para uso intensivo en gimnasio, no para el salón de casa.",
      },
      {
        icon: "ruler",
        title: "Diseño a medida",
        description:
          "Estudiamos tu espacio, techos y suelo, y te proponemos la distribución óptima: estaciones, recorridos y zonas funcionales.",
      },
      {
        icon: "package",
        title: "Logística cuidada",
        description:
          "Entrega coordinada con seguimiento en 1-3 días para material estándar y planificación de entrega para cargas voluminosas.",
      },
      {
        icon: "wrench",
        title: "Montaje asesorado",
        description:
          "Instrucciones claras y soporte por WhatsApp durante el montaje. En proyectos grandes coordinamos asistencia profesional.",
      },
      {
        icon: "zap",
        title: "Electroestimulación EMS",
        description:
          "Equipos EMS para entrenamiento de alta intensidad en tiempo mínimo: ideal para estudios personalizados y recuperación.",
      },
      {
        icon: "shield",
        title: "Garantía y repuestos",
        description:
          "Garantía sobre estructuras y disponibilidad de repuestos: rodamientos, poleas y cables siempre al alcance.",
      },
    ],
    productsEyebrow: "Líneas de equipo",
    productsTitle: "TRES LÍNEAS, UN ECOSISTEMA",
    productsSubtitle:
      "Desde la máquina guiada perfecta hasta el último disco de calibración: todo convive en un mismo diseño de sala.",
    products: [
      {
        name: "Máquinas de gimnasio",
        tagline:
          "Estaciones guiadas: press, jalón, remo, extensión y flexión, multiplicadores... Recorridos naturales y cambio de peso rápido.",
        price: "Presupuesto a medida",
        badge: "Proyectos",
        features: ["Torres multipuesto", "Estaciones monopuesto", "Recorrido biomecánico natural"],
        image: "/images/maquinaria.png",
        cta: "Solicitar catálogo",
      },
      {
        name: "Peso libre",
        tagline:
          "Racks, jaulas, barras olímpicas, discos calibrados y bancos de competición. La zona de fuerza que aguanta tu progresión.",
        price: "Desde 249 €",
        features: ["Racks y jaulas de potencia", "Barras olímpicas 20/15 kg", "Discos y bancos planos/inclinados"],
        image: "/images/athlete.png",
        cta: "Equipar zona de fuerza",
      },
      {
        name: "Electroestimulación EMS",
        tagline:
          "Chalecos y equipos EMS para sesiones de 20 minutos de máxima activación muscular. Perfecto para estudios boutique.",
        price: "Consultar",
        features: ["Chalecos EMS de última generación", "Control inalámbrico", "Formación incluida"],
        image: "/images/recuperacion.png",
        cta: "Montar estudio EMS",
      },
    ],
    processEyebrow: "Tu proyecto, paso a paso",
    processTitle: "DE LA IDEA AL PRIMER ENTRENAMIENTO",
    processSteps: [
      {
        title: "Cuéntanos tu espacio",
        description:
          "Metros, tipo de suelo, altura de techo y objetivo del gimnasio. Una llamada o email nos da casi toda la información.",
      },
      {
        title: "Recibe tu propuesta",
        description:
          "Te enviamos una distribución en planta con equipos concretos, prioridades de compra y presupuesto cerrado con el 10% aplicado.",
      },
      {
        title: "Entrega y puesta en marcha",
        description:
          "Coordinamos la entrega, asesoramos el montaje y quedamos a tu lado para el mantenimiento. Tu sala, lista para entrenar.",
      },
    ],
    testimonialsTitle: "GYMS QUE YA CONFÍAN",
    testimonialsSubtitle: "Proyectos reales equipados por WOLFSTRGN.",
    testimonials: [
      {
        name: "Box Iron Huelva",
        role: "Centro de fuerza, Huelva capital",
        quote:
          "Nos asesoraron la distribución y acertamos de pleno con el rack y los bancos. Los clientes entrenan cómodos y el material sigue como el primer día.",
        rating: 5,
      },
      {
        name: "María F.",
        role: "Home gym, Bollullos",
        quote:
          "Monté un garaje gym completo con su ayuda. Me evitaron comprar cosas innecesarias y la entrega llegó cuando prometían.",
        rating: 5,
      },
      {
        name: "Estudio Vital EMS",
        role: "Estudio boutique, Aljaraque",
        quote:
          "Equipamos dos cabinas EMS con formación incluida. En tres meses, ocupación completa. El soporte post-venta responde rápido.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "¿Hacéis montaje de la maquinaria?",
        answer:
          "El material estándar incluye instrucciones y soporte por WhatsApp durante el montaje. En proyectos de gimnasio completo coordinamos asistencia profesional para que la sala quede lista y segura.",
      },
      {
        question: "¿Cómo se calcula el presupuesto?",
        answer:
          "Depende del espacio, los objetivos y los equipos elegidos. Tras una primera conversación preparamos una propuesta cerrada con distribución en planta y el 10% de descuento ya aplicado sobre el total.",
      },
      {
        question: "¿Cuánto tarda la entrega?",
        answer:
          "El material estándar en stock se entrega en 1-3 días laborables con seguimiento. Para cargas voluminosas o proyectos completos acordamos una ventana de entrega que te venga bien.",
      },
      {
        question: "¿Qué garantía tiene la maquinaria?",
        answer:
          "Toda la maquinaria incluye garantía sobre estructuras y componentes, con 30 días de devolución garantizada además. Contamos con repuestos de desgaste como cables, poleas y rodamientos.",
      },
      {
        question: "¿Puedo comprar una sola máquina o solo proyectos completos?",
        answer:
          "Ambas opciones son válidas: desde una barra con discos para casa hasta el equipamiento integral de un gimnasio. Escríbenos y te asesoramos sin compromiso.",
      },
    ],
    ctaTitle: "MONTA EL GYM QUE IMAGINAS",
    ctaSubtitle:
      "Cuéntanos tu proyecto y recibe una propuesta a medida con el 10% de descuento aplicado. Del garaje al box profesional: nosotros ponemos el hierro, tú los Kilos.",
    ctaImage: "/images/maquinaria.png",
  },

  recuperacion: {
    id: "recuperacion",
    navLabel: "Recuperación",
    eyebrow: "Pistolas de masaje · Rodillos · Presoterapia",
    title: "RECUPERA COMO",
    titleHighlight: "UN PROFESIONAL",
    subtitle:
      "El entrenamiento te estimula, la recuperación te hace más fuerte. Pistolas de masaje, rodillos de espuma y presoterapia para reducir agujetas, mejorar la movilidad y volver al entrenamiento antes. Con 10% de descuento en tu pedido.",
    heroImage: "/images/recuperacion.png",
    primaryCta: "Comprar · 10% DTO",
    secondaryCta: "Ver rutina de recuperación",
    stats: [
      { value: "20'", label: "Sesión diaria suficiente" },
      { value: "4", label: "Niveles de intensidad en pistolas" },
      { value: "1-3", label: "Días de envío con seguimiento" },
      { value: "30", label: "Días de devolución garantizada" },
    ],
    benefitsEyebrow: "Por qué recuperar mejor",
    benefitsTitle: "ENTRENA DURO, RECUPERA INTELIGENTE",
    benefitsSubtitle:
      "La adaptación ocurre cuando descansas. Estas herramientas aceleran los procesos naturales de recuperación para que rindas en cada sesión, no solo en algunas.",
    benefits: [
      {
        icon: "waves",
        title: "Adiós a las agujetas",
        description:
          "El masaje percusivo y la presión reducen la sensación de dolor muscular tardío (DOMS), para que caminar al día siguiente de piernas sea digno de nuevo.",
      },
      {
        icon: "heart-pulse",
        title: "Mejor circulación",
        description:
          "La presoterapia aplica presión secuencial que favorece el retorno venoso y linfático, acelerando la eliminación de metabolitos tras sesiones duras.",
      },
      {
        icon: "move",
        title: "Movilidad y rango",
        description:
          "Rodillos y bolas de masaje liberan fascias y puntos de tensión, devolviendo rango de movimiento a caderas, hombros y tobillos.",
      },
      {
        icon: "bed",
        title: "Descanso de calidad",
        description:
          "Una sesión de masaje antes de dormir relaja el sistema nervioso y mejora la calidad del sueño: donde realmente ocurre la adaptación.",
      },
      {
        icon: "battery-charging",
        title: "Volver antes al entreno",
        description:
          "Reducir el tiempo entre sesiones de alta intensidad significa más volumen de entrenamiento útil al mes. Recuperar rápido es entrenar más.",
      },
      {
        icon: "briefcase",
        title: "Formato de viaje",
        description:
          "Pistolas y rodillos compactos que caben en la mochila: tu rutina de recuperación te acompaña a competiciones y viajes.",
      },
    ],
    productsEyebrow: "Herramientas de recuperación",
    productsTitle: "TU KIT DE RECUPERACIÓN",
    productsSubtitle:
      "Tres herramientas complementarias: percusión para puntos profundos, rodillo para superficies y presoterapia para piernas cargadas.",
    products: [
      {
        name: "Pistola de masaje percusiva",
        tagline:
          "Motor de alto par con 4 velocidades y cabezales intercambiables. Alivia puntos de tensión profundos en minutos, en cualquier lugar.",
        price: "Desde 79,99 €",
        badge: "Más vendida",
        features: ["4 velocidades + 4 cabezales", "Batería de larga duración", "Silenciosa y portátil"],
        image: "/images/recuperacion.png",
        cta: "Añadir al pedido · 10% DTO",
      },
      {
        name: "Rodillo de espuma premium",
        tagline:
          "Textura trigrada para liberación miofascial efectiva. Ideal para cuádriceps, isquios, espalda y glúteo antes y después de entrenar.",
        price: "Desde 24,99 €",
        features: ["Alta densidad sin deformarse", "Textura de masaje profundo", "Tamaño de viaje disponible"],
        image: "/images/athlete.png",
        cta: "Añadir al pedido · 10% DTO",
      },
      {
        name: "Presoterapia para piernas",
        tagline:
          "Botas de compresión secuencial que descongestionan las piernas en 20 minutos. La herramienta favorita de corredores y ciclistas.",
        price: "Consultar",
        features: ["Compresión secuencial programable", "Sesiones de 20 minutos", "Ideal post-competición"],
        image: "/images/maquinaria.png",
        cta: "Solicitar información",
      },
    ],
    processEyebrow: "Rutina recomendada",
    processTitle: "20 MINUTOS QUE CAMBIAN TU SEMANA",
    processSteps: [
      {
        title: "Post-entreno: rodillo 5-10'",
        description:
          "Pasa el rodillo por los grupos trabajados, sin prisa, deteniéndote en los puntos sensibles. El objetivo es devolver elasticidad al tejido.",
      },
      {
        title: "Puntos profundos: pistola 2' por zona",
        description:
          "Aplica la pistola en glúteo, cuádriceps, dorsal o trapecio con movimientos lentos. No más de 2 minutos por zona: la percusión es potente.",
      },
      {
        title: "Noches clave: presoterapia 20'",
        description:
          "Tras sesiones de piernas o competiciones, una sesión de presoterapia mientras ves la TV descongestiona las piernas y mejora el sueño.",
      },
    ],
    testimonialsTitle: "RECUPERACIÓN QUE SE NOTA",
    testimonialsSubtitle: "Deportistas que ya aceleran su vuelta al entreno.",
    testimonials: [
      {
        name: "Sara M.",
        role: "Maratón, Punta Umbría",
        quote:
          "La presoterapia tras los rodajes largos es otro nivel. Las piernas del día siguiente pesan la mitad. Llegó en dos días y con descuento.",
        rating: 5,
      },
      {
        name: "Kevin D.",
        role: "Fútbol amateur, Huelva",
        quote:
          "La pistola va en la mochila a todos los partidos. Dos minutos en cuádriceps e isquios y las agujetas del miércoles ya no existen.",
        rating: 5,
      },
      {
        name: "Teresa C.",
        role: "Desk job + gym, Bonares",
        quote:
          "Trabajo sentada ocho horas y el rodillo por la noche me ha quitado esa tensión de espalda que arrastraba durante meses.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "¿Qué herramienta es mejor para empezar?",
        answer:
          "Si solo puedes elegir una, la pistola de masaje es la más versátil: sirve para puntos profundos, calentamiento y relajación. El rodillo es el mejor complemento económico y la presoterapia brilla en deportes de resistencia con piernas muy cargadas.",
      },
      {
        question: "¿Cuántas veces al día puedo usar la pistola de masaje?",
        answer:
          "Entre 1 y 2 sesiones diarias, con un máximo de 2 minutos por grupo muscular. Más tiempo no significa mejor resultado: la percusión es intensa y el tejido necesita adaptarse. Evita huesos, articulaciones y cuello por dentro.",
      },
      {
        question: "¿La presoterapia sirve para algo más que para piernas?",
        answer:
          "Los protocolos más habituales son de piernas por el volumen de sangre que gestionan, pero la compresión secuencial también favorece la recuperación general y el descanso. Es muy usada post-competición y en personas que pasan muchas horas de pie.",
      },
      {
        question: "¿Puedo usar rodillo si estoy lesionado?",
        answer:
          "El rodillo ayuda en tensión muscular general, pero ante lesión diagnosticada, dolor agudo o inflamación, consulta primero con tu fisioterapeuta. La recuperación pasiva nunca sustituye un diagnóstico profesional.",
      },
      {
        question: "¿Incluyen garantía y devolución?",
        answer:
          "Sí: todos los productos de recuperación incluyen garantía y 30 días de devolución garantizada. Si algo falla o no es para ti, escríbenos y lo gestionamos por email o WhatsApp.",
      },
    ],
    ctaTitle: "RECUPERA HOY, RINDE MAÑANA",
    ctaSubtitle:
      "Monta tu kit de recuperación con 10% de descuento al tramitar el pedido. Tu cuerpo entrena contigo: dale las herramientas para seguir al máximo.",
    ctaImage: "/images/recuperacion.png",
  },
};
