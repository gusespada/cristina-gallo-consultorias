export const siteConfig = {
  profile: {
    name: "Cristina Gallo",
    role: "Directora coral · Docente-investigadora",
    statement: "Un espacio de consultoría para directoras y directores de coro que buscan profundizar su práctica, su escucha y sus decisiones artísticas.",
    shortBio:
      "Cristina Gallo es docente-investigadora de la Universidad Nacional de Villa María, directora coral y Magíster en Interpretación de la Música Latinoamericana del siglo XX.",
    longBio:
      "Su trabajo reúne interpretación vocal, música popular, dirección coral e investigación. En la UNVM dicta materias en la Licenciatura en Composición Musical con orientación en Música Popular y en el Ciclo de Complementación Curricular de la Licenciatura en Interpretación Vocal con orientación en Música Popular.",
  },
  consultation: {
    id: "direccion-coral",
    name: "Consultoría en Dirección Coral",
    duration: 75,
    modality: "Online",
    features: [
      {
        eyebrow: "Una pregunta concreta",
        name: "Mirada focal",
        description: "Trabajamos una dificultad puntual de dirección: gesto, ensayo, escucha, liderazgo o vínculo con el coro.",
      },
      {
        eyebrow: "Una mirada de conjunto",
        name: "Estrategia de ensayo",
        description: "Organizamos prioridades y herramientas para que puedas abordar repertorio, planificación y dinámica grupal.",
      },
      {
        eyebrow: "Preparación profunda",
        name: "Clínica de obra",
        description: "Analizamos una obra desde la forma, la interpretación, el gesto y las decisiones pedagógicas del ensayo.",
      },
    ],
  },
  credentials: [
    ["Formación", "Magíster en Interpretación de la Música Latinoamericana del siglo XX · UNCuyo"],
    ["Docencia", "Docente-investigadora de la Universidad Nacional de Villa María"],
    ["Dirección", "Directora del Coro Nonino de la UNVM y de Coral Mediterráneo"],
  ],
  faq: [
    ["¿A quién está dirigida la consultoría?", "A directoras y directores de coro que quieran revisar una obra, preparar un ensayo, repensar una decisión interpretativa o profundizar un desafío de su práctica profesional."],
    ["¿Necesito enviar material antes?", "Sí. Al reservar podés contar brevemente qué querés trabajar. Si la consulta incluye una obra, coordinamos el envío de la partitura y otros materiales."],
    ["¿En qué zona horaria se muestran los turnos?", "En este prototipo los horarios se presentan en Argentina (UTC−3). La versión productiva detectará tu zona y te permitirá cambiarla."],
    ["¿Cómo se realiza el encuentro?", "Recibirás un enlace de videollamada junto con la confirmación. La integración real se activará en una fase posterior."],
  ],
} as const;
