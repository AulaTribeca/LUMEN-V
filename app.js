
const DIMENSIONS = {
  R: { name: "Realista", short: "R", description: "Preferencia por actividades prácticas, técnicas, manuales, mecánicas, físicas o relacionadas con objetos, herramientas, máquinas, naturaleza y resolución tangible de problemas." },
  I: { name: "Investigadora", short: "I", description: "Interés por analizar, comprender, investigar, resolver problemas complejos, trabajar con ideas, datos, ciencia, tecnología o pensamiento lógico." },
  A: { name: "Artística", short: "A", description: "Afinidad por crear, imaginar, comunicar de forma original, diseñar, escribir, interpretar, producir contenidos o explorar lenguajes expresivos." },
  S: { name: "Social", short: "S", description: "Preferencia por ayudar, enseñar, acompañar, cuidar, orientar, mediar y trabajar con personas desde la comunicación y la cooperación." },
  E: { name: "Emprendedora", short: "E", description: "Interés por liderar, persuadir, organizar proyectos, negociar, vender, tomar decisiones, emprender o coordinar equipos." },
  C: { name: "Convencional", short: "C", description: "Gusto por organizar información, seguir procedimientos, gestionar documentos, controlar detalles, administrar, clasificar y trabajar con precisión." }
};

const STYLE_DESCRIPTIONS = {
  apertura: { high: "curiosidad intelectual y apertura al aprendizaje", low: "preferencia por aprendizajes más guiados y concretos" },
  responsabilidad: { high: "constancia y responsabilidad", low: "necesidad de reforzar hábitos de planificación y persistencia" },
  asertividad: { high: "seguridad comunicativa e iniciativa social", low: "preferencia por contextos de menor exposición pública" },
  cooperacion: { high: "cooperación y sensibilidad interpersonal", low: "preferencia por tareas más autónomas o con menor demanda relacional" },
  gestion: { high: "buena recuperación ante dificultades", low: "conviene trabajar gestión de presión y miedo al error" }
};

const ITEMS = [
  // Intereses, 6 por dimensión
  { id: "int_R1", section: "interests", dim: "R", text: "Montar, reparar o ajustar objetos, aparatos, herramientas o materiales." },
  { id: "int_R2", section: "interests", dim: "R", text: "Realizar tareas prácticas en talleres, laboratorios técnicos, cocinas, instalaciones o espacios al aire libre." },
  { id: "int_R3", section: "interests", dim: "R", text: "Trabajar con máquinas, vehículos, sistemas eléctricos, dispositivos o equipamiento técnico." },
  { id: "int_R4", section: "interests", dim: "R", text: "Resolver problemas observando directamente lo que ocurre y probando soluciones concretas." },
  { id: "int_R5", section: "interests", dim: "R", text: "Cuidar animales, plantas, espacios naturales, instalaciones o recursos materiales." },
  { id: "int_R6", section: "interests", dim: "R", text: "Aprender una profesión mediante práctica guiada, demostraciones y experiencia directa." },

  { id: "int_I1", section: "interests", dim: "I", text: "Investigar por qué ocurren las cosas y buscar explicaciones basadas en datos." },
  { id: "int_I2", section: "interests", dim: "I", text: "Analizar problemas complejos, detectar patrones y comparar posibles soluciones." },
  { id: "int_I3", section: "interests", dim: "I", text: "Estudiar contenidos científicos, tecnológicos, sanitarios, matemáticos o sociales con profundidad." },
  { id: "int_I4", section: "interests", dim: "I", text: "Diseñar experimentos, revisar información fiable o comprobar hipótesis." },
  { id: "int_I5", section: "interests", dim: "I", text: "Programar, calcular, interpretar gráficos, manejar bases de datos o trabajar con información técnica." },
  { id: "int_I6", section: "interests", dim: "I", text: "Leer, documentarme y comprender temas exigentes antes de tomar una decisión." },

  { id: "int_A1", section: "interests", dim: "A", text: "Crear textos, imágenes, vídeos, música, presentaciones, historias o propuestas visuales." },
  { id: "int_A2", section: "interests", dim: "A", text: "Diseñar objetos, espacios, materiales digitales, ropa, carteles, juegos o experiencias." },
  { id: "int_A3", section: "interests", dim: "A", text: "Expresar ideas de forma personal, original o estética." },
  { id: "int_A4", section: "interests", dim: "A", text: "Trabajar en proyectos con libertad creativa y margen para proponer soluciones propias." },
  { id: "int_A5", section: "interests", dim: "A", text: "Interpretar, actuar, comunicar en público, fotografiar, editar o producir contenido." },
  { id: "int_A6", section: "interests", dim: "A", text: "Buscar formas distintas de presentar una idea para que sea más clara, atractiva o emocionante." },

  { id: "int_S1", section: "interests", dim: "S", text: "Ayudar a otras personas a aprender, mejorar, resolver dificultades o tomar decisiones." },
  { id: "int_S2", section: "interests", dim: "S", text: "Escuchar, acompañar, explicar o mediar cuando alguien tiene un problema." },
  { id: "int_S3", section: "interests", dim: "S", text: "Trabajar en educación, salud, intervención social, orientación, cuidados o apoyo comunitario." },
  { id: "int_S4", section: "interests", dim: "S", text: "Participar en proyectos que tengan impacto positivo en personas o grupos." },
  { id: "int_S5", section: "interests", dim: "S", text: "Coordinar actividades con niños, adolescentes, familias, personas mayores o colectivos diversos." },
  { id: "int_S6", section: "interests", dim: "S", text: "Comunicar contenidos de forma cercana para que otras personas los comprendan." },

  { id: "int_E1", section: "interests", dim: "E", text: "Organizar proyectos, proponer iniciativas y convencer a otras personas de una idea." },
  { id: "int_E2", section: "interests", dim: "E", text: "Dirigir equipos, repartir tareas, negociar objetivos o tomar decisiones con rapidez." },
  { id: "int_E3", section: "interests", dim: "E", text: "Crear un negocio, gestionar una marca, vender productos o presentar propuestas a clientes." },
  { id: "int_E4", section: "interests", dim: "E", text: "Participar en debates, campañas, actividades comerciales, eventos o proyectos con visibilidad." },
  { id: "int_E5", section: "interests", dim: "E", text: "Asumir responsabilidades cuando hay que coordinar personas o recursos." },
  { id: "int_E6", section: "interests", dim: "E", text: "Trabajar en contextos dinámicos donde haya metas, resultados y capacidad de influencia." },

  { id: "int_C1", section: "interests", dim: "C", text: "Ordenar documentos, datos, horarios, presupuestos, inventarios o expedientes." },
  { id: "int_C2", section: "interests", dim: "C", text: "Seguir procedimientos claros y comprobar que todo está correcto antes de entregarlo." },
  { id: "int_C3", section: "interests", dim: "C", text: "Gestionar información administrativa, contable, jurídica, logística o de atención al público." },
  { id: "int_C4", section: "interests", dim: "C", text: "Trabajar con hojas de cálculo, formularios, bases de datos o sistemas de archivo." },
  { id: "int_C5", section: "interests", dim: "C", text: "Planificar tareas con orden, plazos y criterios definidos." },
  { id: "int_C6", section: "interests", dim: "C", text: "Realizar trabajos que exijan precisión, constancia y control de detalles." },

  // Habilidades, 3 por dimensión
  { id: "hab_R1", section: "skills", dim: "R", text: "Aprendo bien cuando puedo observar una demostración y practicar después." },
  { id: "hab_R2", section: "skills", dim: "R", text: "Se me da razonablemente bien manejar objetos, herramientas, materiales o tecnología práctica." },
  { id: "hab_R3", section: "skills", dim: "R", text: "Suelo tener paciencia para probar soluciones materiales hasta que algo funciona." },
  { id: "hab_I1", section: "skills", dim: "I", text: "Comprendo ideas abstractas cuando puedo analizarlas paso a paso." },
  { id: "hab_I2", section: "skills", dim: "I", text: "Se me da bien buscar información, comparar fuentes y sacar conclusiones." },
  { id: "hab_I3", section: "skills", dim: "I", text: "Puedo concentrarme en problemas difíciles aunque necesiten tiempo." },
  { id: "hab_A1", section: "skills", dim: "A", text: "Tengo facilidad para imaginar, diseñar, escribir, dibujar, editar o proponer ideas originales." },
  { id: "hab_A2", section: "skills", dim: "A", text: "Sé adaptar una explicación, imagen o presentación para que resulte atractiva." },
  { id: "hab_A3", section: "skills", dim: "A", text: "Me siento capaz de trabajar sin instrucciones excesivamente cerradas." },
  { id: "hab_S1", section: "skills", dim: "S", text: "Tengo facilidad para escuchar, explicar y ayudar a otras personas sin perder la calma." },
  { id: "hab_S2", section: "skills", dim: "S", text: "Puedo trabajar con personas muy distintas y adaptar mi forma de comunicarme." },
  { id: "hab_S3", section: "skills", dim: "S", text: "Cuando alguien no entiende algo, suelo buscar otra forma de explicarlo." },
  { id: "hab_E1", section: "skills", dim: "E", text: "Me veo capaz de tomar la iniciativa cuando un grupo necesita organización." },
  { id: "hab_E2", section: "skills", dim: "E", text: "Puedo defender una idea con argumentos y hablar con seguridad ante otras personas." },
  { id: "hab_E3", section: "skills", dim: "E", text: "Me resulta natural proponer objetivos, repartir tareas o buscar resultados." },
  { id: "hab_C1", section: "skills", dim: "C", text: "Soy capaz de mantener ordenados apuntes, archivos, datos o tareas." },
  { id: "hab_C2", section: "skills", dim: "C", text: "Detecto errores cuando reviso documentos, cálculos, instrucciones o listas." },
  { id: "hab_C3", section: "skills", dim: "C", text: "Me adapto bien a normas, procedimientos y plazos cuando están claros." },

  // Valores y expectativas, ponderan dimensiones y condiciones
  { id: "val_R1", section: "values", dim: "R", text: "Prefiero ver resultados concretos de mi trabajo antes que quedarme solo en ideas teóricas." },
  { id: "val_I1", section: "values", dim: "I", text: "Me atraen los estudios o trabajos donde pueda seguir aprendiendo y profundizando durante años." },
  { id: "val_A1", section: "values", dim: "A", text: "Necesito que mi futuro tenga algún espacio para la creatividad, la expresión o el diseño." },
  { id: "val_S1", section: "values", dim: "S", text: "Me importa que mi actividad futura tenga utilidad para otras personas." },
  { id: "val_E1", section: "values", dim: "E", text: "Me motiva poder crecer, liderar, emprender o influir en decisiones." },
  { id: "val_C1", section: "values", dim: "C", text: "Valoro la estabilidad, el orden, la seguridad y saber qué se espera de mí." },
  { id: "val_R2", section: "values", dim: "R", text: "Preferiría una formación con mucha práctica, equipamiento, taller, laboratorio o simulaciones." },
  { id: "val_I2", section: "values", dim: "I", text: "Aceptaría estudios exigentes si me permiten comprender temas complejos o acceder a profesiones cualificadas." },
  { id: "val_A2", section: "values", dim: "A", text: "Me desmotivaría un itinerario donde todo fuese rutinario y apenas pudiera aportar ideas propias." },
  { id: "val_S2", section: "values", dim: "S", text: "Me veo mejor en un entorno con trato humano que en uno centrado casi solo en objetos o documentos." },
  { id: "val_E2", section: "values", dim: "E", text: "Me atraen los retos con metas visibles, reconocimiento o posibilidad de progreso." },
  { id: "val_C2", section: "values", dim: "C", text: "Me sentiría cómodo/a en un trabajo donde haya método, procedimientos y responsabilidad documental." },

  // Estilo de trabajo, no RIASEC directo
  { id: "sty_O1", section: "style", styleDim: "apertura", text: "Disfruto aprendiendo temas nuevos aunque al principio parezcan difíciles." },
  { id: "sty_O2", section: "style", styleDim: "apertura", text: "Me gusta relacionar ideas de distintas asignaturas o ámbitos." },
  { id: "sty_R1", section: "style", styleDim: "responsabilidad", text: "Cuando una tarea me importa, suelo esforzarme hasta dejarla bien terminada." },
  { id: "sty_R2", section: "style", styleDim: "responsabilidad", text: "Necesito mejorar mi constancia cuando las tareas son largas o poco motivadoras.", reverse: true },
  { id: "sty_E1", section: "style", styleDim: "asertividad", text: "Me siento capaz de expresar opiniones o preguntar dudas delante de otras personas." },
  { id: "sty_E2", section: "style", styleDim: "asertividad", text: "Prefiero pasar desapercibido/a incluso cuando tengo algo útil que aportar.", reverse: true },
  { id: "sty_A1", section: "style", styleDim: "cooperacion", text: "Trabajo bien cuando hay cooperación y respeto dentro del grupo." },
  { id: "sty_A2", section: "style", styleDim: "cooperacion", text: "Me resulta fácil ponerme en el lugar de otras personas." },
  { id: "sty_N1", section: "style", styleDim: "gestion", text: "Cuando algo no sale bien, puedo reorganizarme y volver a intentarlo." },
  { id: "sty_N2", section: "style", styleDim: "gestion", text: "La presión o el miedo a equivocarme pueden bloquear mis decisiones.", reverse: true }
];

const PATHWAYS = [
  {
    title: "Ciclos de FP de Informática y Comunicaciones",
    type: "FP",
    vector: { R: 64, I: 86, A: 28, S: 32, E: 34, C: 70 },
    studies: ["SMR", "ASIR", "DAM", "DAW", "Ciberseguridad, según oferta disponible"],
    jobs: ["técnico/a de soporte", "desarrollador/a web junior", "administrador/a de sistemas", "técnico/a de redes", "operador/a de ciberseguridad"],
    notes: "Adecuado para perfiles analíticos, tecnológicos, pacientes y con tolerancia a aprendizaje continuo."
  },
  {
    title: "Ciclos de FP de Sanidad",
    type: "FP",
    vector: { R: 58, I: 74, A: 20, S: 82, E: 28, C: 66 },
    studies: ["Cuidados Auxiliares de Enfermería", "Emergencias Sanitarias", "Laboratorio Clínico y Biomédico", "Imagen para el Diagnóstico", "Higiene Bucodental"],
    jobs: ["TCAE", "técnico/a de laboratorio", "técnico/a de emergencias", "higienista bucodental", "técnico/a de imagen diagnóstica"],
    notes: "Exige responsabilidad, trato humano, precisión y aceptación de protocolos."
  },
  {
    title: "Ciclos de FP de Servicios Socioculturales y a la Comunidad",
    type: "FP",
    vector: { R: 24, I: 52, A: 56, S: 94, E: 42, C: 44 },
    studies: ["Educación Infantil", "Integración Social", "Mediación Comunicativa", "Promoción de Igualdad de Género", "Animación Sociocultural y Turística"],
    jobs: ["técnico/a de integración social", "educador/a infantil", "mediador/a comunicativo/a", "monitor/a socioeducativo/a", "dinamizador/a comunitario/a"],
    notes: "Muy recomendable cuando domina el interés por ayudar, educar, acompañar y comunicar."
  },
  {
    title: "Ciclos de FP de Administración y Gestión",
    type: "FP",
    vector: { R: 22, I: 44, A: 18, S: 48, E: 60, C: 92 },
    studies: ["Gestión Administrativa", "Administración y Finanzas", "Asistencia a la Dirección"],
    jobs: ["administrativo/a", "técnico/a contable", "auxiliar de gestión", "asistente de dirección", "gestor/a documental"],
    notes: "Encaja con perfiles ordenados, constantes, atentos al detalle y cómodos con procedimientos."
  },
  {
    title: "Ciclos de FP de Comercio y Marketing",
    type: "FP",
    vector: { R: 24, I: 44, A: 62, S: 58, E: 90, C: 60 },
    studies: ["Actividades Comerciales", "Marketing y Publicidad", "Comercio Internacional", "Gestión de Ventas"],
    jobs: ["técnico/a de marketing", "gestor/a de ventas", "community manager junior", "técnico/a de comercio exterior", "visual merchandiser"],
    notes: "Combina comunicación, iniciativa, persuasión, creatividad y análisis comercial."
  },
  {
    title: "Ciclos de FP de Imagen y Sonido",
    type: "FP",
    vector: { R: 48, I: 38, A: 92, S: 42, E: 44, C: 38 },
    studies: ["Producción de Audiovisuales", "Realización de Proyectos Audiovisuales", "Sonido", "Animaciones 3D y Juegos"],
    jobs: ["técnico/a audiovisual", "editor/a de vídeo", "técnico/a de sonido", "productor/a junior", "diseñador/a 3D junior"],
    notes: "Adecuado para perfiles creativos con tolerancia técnica y trabajo por proyectos."
  },
  {
    title: "Ciclos de FP de Electricidad, Electrónica, Instalación y Mantenimiento",
    type: "FP",
    vector: { R: 94, I: 58, A: 16, S: 22, E: 30, C: 56 },
    studies: ["Instalaciones Eléctricas", "Automatización y Robótica Industrial", "Mantenimiento Electromecánico", "Mecatrónica Industrial"],
    jobs: ["electricista", "técnico/a de mantenimiento", "técnico/a de automatización", "mecatrónico/a", "instalador/a industrial"],
    notes: "Requiere orientación práctica, seguridad, precisión y aprendizaje técnico continuo."
  },
  {
    title: "Ciclos de FP de Hostelería, Turismo y Servicios",
    type: "FP",
    vector: { R: 62, I: 26, A: 54, S: 68, E: 62, C: 42 },
    studies: ["Cocina y Gastronomía", "Dirección de Cocina", "Gestión de Alojamientos", "Guía, Información y Asistencias Turísticas"],
    jobs: ["cocinero/a", "jefe/a de partida", "recepcionista", "guía turístico/a", "técnico/a de alojamiento"],
    notes: "Combina práctica, trato con personas, ritmo de trabajo y, en algunos perfiles, creatividad."
  },
  {
    title: "Bachillerato de Ciencias y Tecnología",
    type: "Bachillerato",
    vector: { R: 48, I: 92, A: 24, S: 34, E: 32, C: 56 },
    studies: ["Matemáticas", "Física", "Química", "Biología", "Tecnología e Ingeniería"],
    jobs: ["puerta de acceso a ingeniería", "sanidad", "ciencias", "tecnología", "investigación"],
    notes: "Conviene cuando hay interés investigador, buena disposición ante matemáticas/ciencias y tolerancia a estudio exigente."
  },
  {
    title: "Bachillerato de Humanidades y Ciencias Sociales",
    type: "Bachillerato",
    vector: { R: 12, I: 58, A: 60, S: 72, E: 56, C: 62 },
    studies: ["Latín", "Griego", "Economía", "Historia", "Matemáticas aplicadas", "Geografía"],
    jobs: ["puerta de acceso a educación", "derecho", "empresa", "comunicación", "intervención social"],
    notes: "Adecuado si hay interés por personas, sociedad, cultura, comunicación, análisis social o gestión."
  },
  {
    title: "Bachillerato de Artes",
    type: "Bachillerato",
    vector: { R: 22, I: 40, A: 96, S: 42, E: 40, C: 24 },
    studies: ["Dibujo Artístico", "Diseño", "Cultura Audiovisual", "Artes Escénicas", "Música"],
    jobs: ["puerta de acceso a diseño", "bellas artes", "comunicación audiovisual", "artes escénicas", "creación digital"],
    notes: "Recomendable con creatividad alta, necesidad expresiva y motivación clara por proyectos artísticos."
  },
  {
    title: "Grado en Educación Infantil o Primaria",
    type: "Universidad",
    vector: { R: 16, I: 50, A: 56, S: 94, E: 38, C: 48 },
    studies: ["Educación Infantil", "Educación Primaria", "menciones de atención a la diversidad, música, lengua extranjera o educación física"],
    jobs: ["maestro/a", "docente de apoyo", "diseñador/a de materiales didácticos", "coordinador/a de proyectos educativos"],
    notes: "Requiere interés social muy alto, comunicación, paciencia, planificación y compromiso educativo."
  },
  {
    title: "Grado en Pedagogía, Educación Social o Trabajo Social",
    type: "Universidad",
    vector: { R: 10, I: 60, A: 48, S: 96, E: 42, C: 46 },
    studies: ["Pedagogía", "Educación Social", "Trabajo Social"],
    jobs: ["orientador/a educativo/a", "educador/a social", "técnico/a de intervención socioeducativa", "mediador/a", "técnico/a de formación"],
    notes: "Encaja con perfiles orientados a personas, análisis de necesidades y diseño de intervención."
  },
  {
    title: "Grado en Psicología",
    type: "Universidad",
    vector: { R: 10, I: 78, A: 36, S: 88, E: 30, C: 52 },
    studies: ["Psicología", "itinerarios clínicos, educativos, sociales, organizacionales o de investigación"],
    jobs: ["psicólogo/a con habilitación correspondiente", "técnico/a de RR. HH.", "investigador/a", "orientador/a laboral", "consultor/a de bienestar"],
    notes: "Requiere interés por conducta humana, método científico, lectura, evaluación y trato cuidadoso."
  },
  {
    title: "Grados en Enfermería, Fisioterapia, Terapia Ocupacional o Logopedia",
    type: "Universidad",
    vector: { R: 44, I: 78, A: 24, S: 90, E: 26, C: 62 },
    studies: ["Enfermería", "Fisioterapia", "Terapia Ocupacional", "Logopedia"],
    jobs: ["enfermero/a", "fisioterapeuta", "terapeuta ocupacional", "logopeda", "técnico/a de programas de salud"],
    notes: "Combina ciencia aplicada, cuidado, responsabilidad, contacto humano y práctica."
  },
  {
    title: "Grados en Ingeniería, Arquitectura Técnica o Tecnología Industrial",
    type: "Universidad",
    vector: { R: 78, I: 90, A: 30, S: 22, E: 36, C: 62 },
    studies: ["Ingenierías", "Arquitectura Técnica", "Tecnologías Industriales", "Organización Industrial"],
    jobs: ["ingeniero/a", "técnico/a de proyectos", "consultor/a técnico/a", "responsable de producción", "analista de procesos"],
    notes: "Requiere base matemática, razonamiento técnico, persistencia y gusto por resolver problemas."
  },
  {
    title: "Grados en Informática, Ciencia de Datos o Inteligencia Artificial",
    type: "Universidad",
    vector: { R: 46, I: 96, A: 34, S: 18, E: 34, C: 70 },
    studies: ["Ingeniería Informática", "Ciencia de Datos", "Inteligencia Artificial", "Matemáticas Computacionales"],
    jobs: ["desarrollador/a", "analista de datos", "ingeniero/a de IA", "arquitecto/a software", "consultor/a tecnológico/a"],
    notes: "Muy afín a perfiles investigadores, lógicos, autónomos y con buena tolerancia al error."
  },
  {
    title: "Grados en Biología, Química, Física, Matemáticas o Ciencias Ambientales",
    type: "Universidad",
    vector: { R: 42, I: 98, A: 24, S: 22, E: 18, C: 58 },
    studies: ["Biología", "Química", "Física", "Matemáticas", "Ciencias Ambientales"],
    jobs: ["investigador/a", "técnico/a de laboratorio", "analista de calidad", "consultor/a ambiental", "docente científico"],
    notes: "Exige interés por comprender, rigor metodológico, lectura científica y formación prolongada."
  },
  {
    title: "Grados en Comunicación, Periodismo, Publicidad o Diseño",
    type: "Universidad",
    vector: { R: 12, I: 50, A: 94, S: 56, E: 60, C: 34 },
    studies: ["Comunicación Audiovisual", "Periodismo", "Publicidad y Relaciones Públicas", "Diseño", "Bellas Artes"],
    jobs: ["redactor/a", "diseñador/a", "productor/a de contenido", "creativo/a publicitario/a", "responsable de comunicación"],
    notes: "Potente con creatividad alta, comunicación, cultura visual y tolerancia a proyectos cambiantes."
  },
  {
    title: "Grados en ADE, Economía, Marketing o Relaciones Laborales",
    type: "Universidad",
    vector: { R: 12, I: 58, A: 30, S: 46, E: 88, C: 78 },
    studies: ["Administración y Dirección de Empresas", "Economía", "Marketing", "Relaciones Laborales", "Finanzas"],
    jobs: ["consultor/a", "técnico/a de marketing", "analista financiero", "gestor/a de RR. HH.", "controller"],
    notes: "Combina iniciativa, organización, análisis, toma de decisiones y orientación a resultados."
  },
  {
    title: "Grados en Derecho, Criminología, Relaciones Internacionales o Ciencias Políticas",
    type: "Universidad",
    vector: { R: 8, I: 64, A: 38, S: 58, E: 78, C: 76 },
    studies: ["Derecho", "Criminología", "Ciencias Políticas", "Relaciones Internacionales"],
    jobs: ["abogado/a con habilitación", "técnico/a jurídico/a", "gestor/a público/a", "consultor/a", "analista de políticas"],
    notes: "Favorece perfiles con argumentación, lectura, precisión normativa, comunicación y sentido institucional."
  },
  {
    title: "Grados o ciclos vinculados a Deporte, Actividad Física y Tiempo Libre",
    type: "FP/Universidad",
    vector: { R: 76, I: 46, A: 34, S: 76, E: 54, C: 30 },
    studies: ["Guía en el Medio Natural", "Acondicionamiento Físico", "TSEAS", "Ciencias de la Actividad Física y del Deporte"],
    jobs: ["monitor/a deportivo/a", "entrenador/a", "técnico/a de actividades físicas", "guía de medio natural", "preparador/a físico/a"],
    notes: "Encaja con perfiles activos, sociales, prácticos y orientados al bienestar."
  },
  {
    title: "Grados y FP de Artes, Diseño, Moda, Animación y Videojuegos",
    type: "FP/Universidad",
    vector: { R: 36, I: 42, A: 98, S: 34, E: 48, C: 30 },
    studies: ["Diseño", "Moda", "Animación 3D", "Bellas Artes", "Diseño Gráfico", "Videojuegos"],
    jobs: ["diseñador/a gráfico/a", "ilustrador/a", "animador/a 3D", "diseñador/a de producto", "artista digital"],
    notes: "Conviene cuando la creatividad es muy alta y existe disposición a construir portafolio."
  },
  {
    title: "Cuerpos de seguridad, emergencias y protección civil",
    type: "Profesional/FP/Oposición",
    vector: { R: 82, I: 38, A: 10, S: 58, E: 62, C: 64 },
    studies: ["Emergencias y Protección Civil", "Seguridad", "preparación de oposiciones", "formación física y normativa"],
    jobs: ["bombero/a", "policía", "técnico/a de emergencias", "operador/a de coordinación", "protección civil"],
    notes: "Exige condición física, autocontrol, normas, responsabilidad y vocación de servicio."
  },
  {
    title: "Oficios cualificados: madera, metal, automoción, construcción, energía",
    type: "FP/Profesional",
    vector: { R: 96, I: 42, A: 28, S: 22, E: 34, C: 50 },
    studies: ["Carpintería", "Soldadura", "Automoción", "Obras", "Eficiencia energética", "Energías renovables"],
    jobs: ["técnico/a de automoción", "soldador/a", "carpintero/a", "instalador/a", "operario/a cualificado/a"],
    notes: "Muy afín cuando domina la orientación práctica, técnica y manual."
  },
  {
    title: "Bibliotecas, archivos, documentación y gestión cultural",
    type: "FP/Universidad",
    vector: { R: 8, I: 68, A: 50, S: 46, E: 26, C: 88 },
    studies: ["Información y Documentación", "Humanidades", "Gestión Cultural", "Archivística"],
    jobs: ["documentalista", "archivero/a", "técnico/a de biblioteca", "gestor/a cultural", "curador/a de contenidos"],
    notes: "Adecuado para perfiles ordenados, lectores, culturales y cuidadosos con la información."
  }
];


const HEX_ORDER = ["R", "I", "A", "S", "E", "C"];
const I18N = {
  "gl": {
    "language": "Idioma",
    "font": "Fonte",
    "standardFont": "Estándar",
    "accessibility": "Accesibilidade",
    "zoom": "Zoom",
    "zoomSmall": "Máis pequeno",
    "zoomNormal": "Normal",
    "zoomLarge": "Máis grande",
    "literalHelp": "Asistencia ao pensamento literal",
    "literalHelpNote": "Ao pasar o cursor por algunhas palabras ou expresións aparecerá unha aclaración breve do seu significado.",
    "systemName": "Sistema de orientación académica e profesional",
    "subtitle": "Explorador de intereses, habilidades, valores e oportunidades vocacionais",
    "heroText": "Sistema de exploración vocacional pensado para acompañar decisións académicas e profesionais, facilitar a reflexión sobre itinerarios formativos e apoiar procesos de reorientación profesional desde unha lectura prudente, estruturada e fundamentada.",
    "beforeStart": "Antes de comezar",
    "orientationUse": "Uso orientativo, non diagnóstico",
    "consentText": "LUMEN-V non substitúe unha entrevista de orientación nin determina de forma pechada o futuro académico ou profesional dunha persoa. Os resultados deben lerse como unha base razoada para conversar, contrastar información e explorar opcións.",
    "consentCheck": "Lin e comprendín que os resultados son orientativos.",
    "start": "Comezar cuestionario",
    "scienceButton": "Ver base científica e licenza",
    "scienceKicker": "Base científica, autoría e permisos",
    "scienceTitle": "En que se basea LUMEN-V",
    "scienceText": "LUMEN-V é desenvolvido por Tribeca Academia. Utiliza ítems orixinais e non reproduce ítems, baremos nin informes de probas comerciais ou propietarias. A ferramenta toma como referencia o modelo RIASEC de Holland, a teoría sociocognitiva da carreira e fontes documentais abertas ou oficiais.",
    "sci1Title": "Intereses",
    "sci1Text": "O núcleo organízase co modelo RIASEC: Realista, Investigador, Artístico, Social, Emprendedor e Convencional.",
    "sci2Title": "Variables complementarias",
    "sci2Text": "Integra habilidades autopercibidas, valores, expectativas, estilo de traballo e contexto académico.",
    "sci3Title": "Cálculo",
    "sci3Text": "O perfil global pondera intereses, habilidades e valores, e compara o resultado cunha matriz de itinerarios mediante similitude coseno e distancia euclídea normalizada.",
    "sci4Title": "Licenza",
    "sci4Text": "A obra orixinal LUMEN-V distribúese baixo CC BY-NC-ND 4.0. As fontes externas citadas conservan as súas propias condicións.",
    "contextKicker": "Datos de contexto",
    "contextTitle": "Información inicial",
    "contextLead": "Estes datos axudan a interpretar o informe con prudencia. Non se utilizan como baremo normativo.",
    "studentName": "Nome ou iniciais",
    "stage": "Curso ou etapa",
    "likedSubjects": "Materias que máis interesan",
    "difficultSubjects": "Materias que máis custan ou se evitan",
    "preferredRoute": "Itinerario que contempla inicialmente",
    "studyHorizon": "Horizonte de estudo aceptable",
    "barriers": "Dúbidas, barreiras ou condicións relevantes",
    "continue": "Continuar",
    "scaleIntro": "Escolle a opción que mellor encaixe contigo neste momento.",
    "previous": "Anterior",
    "next": "Seguinte",
    "savePdf": "Gardar informe en PDF",
    "reset": "Borrar respostas",
    "developedBy": "Desenvolvido por Tribeca Academia",
    "section_interests": "Intereses vocacionais",
    "section_skills": "Habilidades autopercibidas",
    "section_values": "Valores e expectativas",
    "section_style": "Estilo de aprendizaxe e traballo",
    "question": "Pregunta",
    "of": "de",
    "resultsTitle": "Informe de resultados",
    "reportMeta": "Sistema de orientación académica e profesional · Tribeca Academia",
    "vocCode": "Código vocacional principal",
    "summary": "Resumo visual inicial",
    "summaryText": "O resultado ordena as respostas nun perfil de exploración. Non é unha etiqueta definitiva, senón unha hipótese de traballo para orientar decisións académicas e profesionais.",
    "dominantArea": "Área dominante",
    "bestMatch": "Maior compatibilidade",
    "secondRoute": "Segunda vía",
    "profileReading": "Lectura do perfil",
    "topOptions": "Primeiras opcións de exploración",
    "profile": "Perfil RIASEC visual",
    "strengths": "Fortalezas dominantes",
    "development": "Oportunidades de desenvolvemento",
    "style": "Estilo de aprendizaxe e traballo",
    "high": "Itinerarios e profesións de maior compatibilidade",
    "moderate": "Opcións de compatibilidade moderada",
    "low": "Opcións de baixa compatibilidade inicial",
    "calc": "Base de cálculo aplicada",
    "context": "Datos de contexto achegados",
    "date": "Data",
    "student": "Alumno/a",
    "notGiven": "Non indicado",
    "lowNote": "Estas opcións non quedan prohibidas nin descartadas; indican áreas que poderían requirir máis adaptación, máis información ou unha motivación forte.",
    "calcText": "A puntuación global de cada dimensión calcúlase como 55 % intereses, 25 % habilidades autopercibidas e 20 % valores. O índice de compatibilidade é orientativo e non é un percentil normativo.",
    "scale": [
      "Nada que ver comigo",
      "Parécese pouco a min",
      "Só a medias ou con dúbidas",
      "Parécese bastante a min",
      "Descríbeme moi ben"
    ]
  },
  "es": {
    "language": "Idioma",
    "font": "Fuente",
    "standardFont": "Estándar",
    "accessibility": "Accesibilidad",
    "zoom": "Zoom",
    "zoomSmall": "Más pequeño",
    "zoomNormal": "Normal",
    "zoomLarge": "Más grande",
    "literalHelp": "Asistencia al pensamiento literal",
    "literalHelpNote": "Al pasar el cursor por algunas palabras o expresiones aparecerá una aclaración breve de su significado.",
    "systemName": "Sistema de orientación académica y profesional",
    "subtitle": "Explorador de intereses, habilidades, valores y oportunidades vocacionales",
    "heroText": "Sistema de exploración vocacional diseñado para acompañar decisiones académicas y profesionales, facilitar la reflexión sobre itinerarios formativos y apoyar procesos de reorientación profesional desde una lectura prudente, estructurada y fundamentada.",
    "beforeStart": "Antes de empezar",
    "orientationUse": "Uso orientativo, no diagnóstico",
    "consentText": "LUMEN-V no sustituye una entrevista de orientación ni determina de forma cerrada el futuro académico o profesional de una persona. Los resultados deben leerse como una base razonada para conversar, contrastar información y explorar opciones.",
    "consentCheck": "He leído y comprendido que los resultados son orientativos.",
    "start": "Comenzar cuestionario",
    "scienceButton": "Ver base científica y licencia",
    "scienceKicker": "Base científica, autoría y permisos",
    "scienceTitle": "En qué se basa LUMEN-V",
    "scienceText": "LUMEN-V está desarrollado por Tribeca Academia. Utiliza ítems originales y no reproduce ítems, baremos ni informes de pruebas comerciales o propietarias. La herramienta toma como referencia el modelo RIASEC de Holland, la teoría sociocognitiva de la carrera y fuentes documentales abiertas u oficiales.",
    "sci1Title": "Intereses",
    "sci1Text": "El núcleo se organiza con el modelo RIASEC: Realista, Investigador, Artístico, Social, Emprendedor y Convencional.",
    "sci2Title": "Variables complementarias",
    "sci2Text": "Integra habilidades autopercibidas, valores, expectativas, estilo de trabajo y contexto académico.",
    "sci3Title": "Cálculo",
    "sci3Text": "El perfil global pondera intereses, habilidades y valores, y compara el resultado con una matriz de itinerarios mediante similitud coseno y distancia euclídea normalizada.",
    "sci4Title": "Licencia",
    "sci4Text": "La obra original LUMEN-V se distribuye bajo CC BY-NC-ND 4.0. Las fuentes externas citadas conservan sus propias condiciones.",
    "contextKicker": "Datos de contexto",
    "contextTitle": "Información inicial",
    "contextLead": "Estos datos ayudan a interpretar el informe con prudencia. No se utilizan como baremo normativo.",
    "studentName": "Nombre o iniciales",
    "stage": "Curso o etapa",
    "likedSubjects": "Materias que más interesan",
    "difficultSubjects": "Materias que más cuestan o se evitan",
    "preferredRoute": "Itinerario que contempla inicialmente",
    "studyHorizon": "Horizonte de estudio aceptable",
    "barriers": "Dudas, barreras o condiciones relevantes",
    "continue": "Continuar",
    "scaleIntro": "Elige la opción que mejor encaje contigo en este momento.",
    "previous": "Anterior",
    "next": "Siguiente",
    "savePdf": "Guardar informe en PDF",
    "reset": "Borrar respuestas",
    "developedBy": "Desarrollado por Tribeca Academia",
    "section_interests": "Intereses vocacionales",
    "section_skills": "Habilidades autopercibidas",
    "section_values": "Valores y expectativas",
    "section_style": "Estilo de aprendizaje y trabajo",
    "question": "Pregunta",
    "of": "de",
    "resultsTitle": "Informe de resultados",
    "reportMeta": "Sistema de orientación académica y profesional · Tribeca Academia",
    "vocCode": "Código vocacional principal",
    "summary": "Resumen visual inicial",
    "summaryText": "El resultado ordena las respuestas en un perfil de exploración. No es una etiqueta definitiva, sino una hipótesis de trabajo para orientar decisiones académicas y profesionales.",
    "dominantArea": "Área dominante",
    "bestMatch": "Mayor compatibilidad",
    "secondRoute": "Segunda vía",
    "profileReading": "Lectura del perfil",
    "topOptions": "Primeras opciones de exploración",
    "profile": "Perfil RIASEC visual",
    "strengths": "Fortalezas dominantes",
    "development": "Oportunidades de desarrollo",
    "style": "Estilo de aprendizaje y trabajo",
    "high": "Itinerarios y profesiones de mayor compatibilidad",
    "moderate": "Opciones de compatibilidad moderada",
    "low": "Opciones de baja compatibilidad inicial",
    "calc": "Base de cálculo aplicada",
    "context": "Datos de contexto aportados",
    "date": "Fecha",
    "student": "Alumno/a",
    "notGiven": "No indicado",
    "lowNote": "Estas opciones no quedan prohibidas ni descartadas; indican áreas que podrían requerir más adaptación, más información o una motivación fuerte.",
    "calcText": "La puntuación global de cada dimensión se calcula como 55 % intereses, 25 % habilidades autopercibidas y 20 % valores. El índice de compatibilidad es orientativo y no es un percentil normativo.",
    "scale": [
      "Nada que ver conmigo",
      "Se parece poco a mí",
      "Solo a medias o con dudas",
      "Se parece bastante a mí",
      "Me describe muy bien"
    ]
  },
  "en": {
    "language": "Language",
    "font": "Font",
    "standardFont": "Standard",
    "accessibility": "Accessibility",
    "zoom": "Zoom",
    "zoomSmall": "Smaller",
    "zoomNormal": "Normal",
    "zoomLarge": "Larger",
    "literalHelp": "Literal thinking assistance",
    "literalHelpNote": "When you hover over some words or expressions, a short explanation of their meaning will appear.",
    "systemName": "Academic and professional guidance system",
    "subtitle": "Explorer of interests, skills, values and vocational opportunities",
    "heroText": "A vocational exploration system designed to support academic and professional decisions, encourage reflection on educational pathways and assist professional reorientation through a careful, structured and evidence-informed reading.",
    "beforeStart": "Before starting",
    "orientationUse": "Guidance use, not diagnosis",
    "consentText": "LUMEN-V does not replace a guidance interview and does not determine a person’s academic or professional future. Results should be read as a reasoned basis for discussion, comparison and exploration.",
    "consentCheck": "I have read and understood that the results are guidance-oriented.",
    "start": "Start questionnaire",
    "scienceButton": "View scientific basis and licence",
    "scienceKicker": "Scientific basis, authorship and permissions",
    "scienceTitle": "What LUMEN-V is based on",
    "scienceText": "LUMEN-V is developed by Tribeca Academia. It uses original items and does not reproduce items, norms or reports from commercial or proprietary tests. It draws on Holland’s RIASEC model, Social Cognitive Career Theory and open or official documentary sources.",
    "sci1Title": "Interests",
    "sci1Text": "The core is organised through the RIASEC model: Realistic, Investigative, Artistic, Social, Enterprising and Conventional.",
    "sci2Title": "Complementary variables",
    "sci2Text": "It integrates self-perceived skills, values, expectations, work style and academic context.",
    "sci3Title": "Scoring",
    "sci3Text": "The global profile weights interests, skills and values, and compares the result with a pathway matrix using cosine similarity and normalised Euclidean distance.",
    "sci4Title": "Licence",
    "sci4Text": "The original LUMEN-V work is distributed under CC BY-NC-ND 4.0. Cited external sources keep their own terms.",
    "contextKicker": "Context data",
    "contextTitle": "Initial information",
    "contextLead": "These data help interpret the report cautiously. They are not used as normative scores.",
    "studentName": "Name or initials",
    "stage": "Course or stage",
    "likedSubjects": "Subjects of greatest interest",
    "difficultSubjects": "Subjects that are difficult or avoided",
    "preferredRoute": "Initial pathway considered",
    "studyHorizon": "Acceptable study horizon",
    "barriers": "Doubts, barriers or relevant conditions",
    "continue": "Continue",
    "scaleIntro": "Choose the option that best fits you at this moment.",
    "previous": "Previous",
    "next": "Next",
    "savePdf": "Save report as PDF",
    "reset": "Delete answers",
    "developedBy": "Developed by Tribeca Academia",
    "section_interests": "Vocational interests",
    "section_skills": "Self-perceived skills",
    "section_values": "Values and expectations",
    "section_style": "Learning and work style",
    "question": "Question",
    "of": "of",
    "resultsTitle": "Results report",
    "reportMeta": "Academic and professional guidance system · Tribeca Academia",
    "vocCode": "Main vocational code",
    "summary": "Initial visual summary",
    "summaryText": "The result arranges the answers into an exploration profile. It is not a definitive label, but a working hypothesis for academic and professional decisions.",
    "dominantArea": "Dominant area",
    "bestMatch": "Highest compatibility",
    "secondRoute": "Second pathway",
    "profileReading": "Profile reading",
    "topOptions": "First exploration options",
    "profile": "Visual RIASEC profile",
    "strengths": "Dominant strengths",
    "development": "Development opportunities",
    "style": "Learning and work style",
    "high": "Most compatible pathways and professions",
    "moderate": "Moderate compatibility options",
    "low": "Initial low compatibility options",
    "calc": "Scoring basis applied",
    "context": "Context data provided",
    "date": "Date",
    "student": "Student",
    "notGiven": "Not provided",
    "lowNote": "These options are not forbidden or ruled out; they point to areas that may require more adaptation, more information or stronger motivation.",
    "calcText": "The global score for each dimension is calculated as 55% interests, 25% self-perceived skills and 20% values. The compatibility index is guidance-oriented and is not a normative percentile.",
    "scale": [
      "Not like me at all",
      "A little like me",
      "Partly or unsure",
      "Quite like me",
      "Describes me very well"
    ]
  },
  "pt": {
    "language": "Idioma",
    "font": "Font",
    "standardFont": "Standard",
    "accessibility": "Acessibilidade",
    "zoom": "Zoom",
    "zoomSmall": "Menor",
    "zoomNormal": "Normal",
    "zoomLarge": "Maior",
    "literalHelp": "Assistência ao pensamento literal",
    "literalHelpNote": "Ao passar o cursor sobre algumas palavras ou expressões, aparecerá uma breve explicação do seu significado.",
    "systemName": "Sistema de orientação académica e profissional",
    "subtitle": "Explorer of interests, skills, values and vocational opportunities",
    "heroText": "Sistema de exploração vocacional concebido para apoiar decisões académicas e profissionais e processos de reorientação profissional com uma leitura prudente, estruturada e fundamentada.",
    "beforeStart": "Before starting",
    "orientationUse": "Guidance use, not diagnosis",
    "consentText": "LUMEN-V does not replace a guidance interview and does not determine a person’s academic or professional future. Results should be read as a reasoned basis for discussion, comparison and exploration.",
    "consentCheck": "I have read and understood that the results are guidance-oriented.",
    "start": "Começar questionário",
    "scienceButton": "Ver base científica e licença",
    "scienceKicker": "Scientific basis, authorship and permissions",
    "scienceTitle": "What LUMEN-V is based on",
    "scienceText": "LUMEN-V is developed by Tribeca Academia. It uses original items and does not reproduce items, norms or reports from commercial or proprietary tests. It draws on Holland’s RIASEC model, Social Cognitive Career Theory and open or official documentary sources.",
    "sci1Title": "Interests",
    "sci1Text": "The core is organised through the RIASEC model: Realistic, Investigative, Artistic, Social, Enterprising and Conventional.",
    "sci2Title": "Complementary variables",
    "sci2Text": "It integrates self-perceived skills, values, expectations, work style and academic context.",
    "sci3Title": "Scoring",
    "sci3Text": "The global profile weights interests, skills and values, and compares the result with a pathway matrix using cosine similarity and normalised Euclidean distance.",
    "sci4Title": "Licence",
    "sci4Text": "The original LUMEN-V work is distributed under CC BY-NC-ND 4.0. Cited external sources keep their own terms.",
    "contextKicker": "Context data",
    "contextTitle": "Initial information",
    "contextLead": "These data help interpret the report cautiously. They are not used as normative scores.",
    "studentName": "Name or initials",
    "stage": "Course or stage",
    "likedSubjects": "Subjects of greatest interest",
    "difficultSubjects": "Subjects that are difficult or avoided",
    "preferredRoute": "Initial pathway considered",
    "studyHorizon": "Acceptable study horizon",
    "barriers": "Doubts, barriers or relevant conditions",
    "continue": "Continue",
    "scaleIntro": "Choose the option that best fits you at this moment.",
    "previous": "Previous",
    "next": "Next",
    "savePdf": "Guardar relatório em PDF",
    "reset": "Delete answers",
    "developedBy": "Developed by Tribeca Academia",
    "section_interests": "Vocational interests",
    "section_skills": "Self-perceived skills",
    "section_values": "Values and expectations",
    "section_style": "Learning and work style",
    "question": "Question",
    "of": "of",
    "resultsTitle": "Relatório de resultados",
    "reportMeta": "Sistema de orientação académica e profissional · Tribeca Academia",
    "vocCode": "Main vocational code",
    "summary": "Initial visual summary",
    "summaryText": "The result arranges the answers into an exploration profile. It is not a definitive label, but a working hypothesis for academic and professional decisions.",
    "dominantArea": "Dominant area",
    "bestMatch": "Highest compatibility",
    "secondRoute": "Second pathway",
    "profileReading": "Profile reading",
    "topOptions": "First exploration options",
    "profile": "Visual RIASEC profile",
    "strengths": "Dominant strengths",
    "development": "Development opportunities",
    "style": "Learning and work style",
    "high": "Most compatible pathways and professions",
    "moderate": "Moderate compatibility options",
    "low": "Initial low compatibility options",
    "calc": "Scoring basis applied",
    "context": "Context data provided",
    "date": "Date",
    "student": "Student",
    "notGiven": "Not provided",
    "lowNote": "These options are not forbidden or ruled out; they point to areas that may require more adaptation, more information or stronger motivation.",
    "calcText": "The global score for each dimension is calculated as 55% interests, 25% self-perceived skills and 20% values. The compatibility index is guidance-oriented and is not a normative percentile.",
    "scale": [
      "Nada a ver comigo",
      "Parece-se pouco comigo",
      "Só em parte ou com dúvidas",
      "Parece-se bastante comigo",
      "Descreve-me muito bem"
    ]
  },
  "fr": {
    "language": "Langue",
    "font": "Font",
    "standardFont": "Standard",
    "accessibility": "Accessibilité",
    "zoom": "Zoom",
    "zoomSmall": "Plus petit",
    "zoomNormal": "Normal",
    "zoomLarge": "Plus grand",
    "literalHelp": "Assistance à la pensée littérale",
    "literalHelpNote": "En passant le curseur sur certains mots ou expressions, une brève explication de leur signification apparaîtra.",
    "systemName": "Système d’orientation académique et professionnelle",
    "subtitle": "Explorer of interests, skills, values and vocational opportunities",
    "heroText": "Système d’exploration vocationnelle conçu pour accompagner les décisions académiques et professionnelles ainsi que les processus de réorientation, avec une lecture prudente, structurée et fondée.",
    "beforeStart": "Before starting",
    "orientationUse": "Guidance use, not diagnosis",
    "consentText": "LUMEN-V does not replace a guidance interview and does not determine a person’s academic or professional future. Results should be read as a reasoned basis for discussion, comparison and exploration.",
    "consentCheck": "I have read and understood that the results are guidance-oriented.",
    "start": "Commencer le questionnaire",
    "scienceButton": "Voir base scientifique et licence",
    "scienceKicker": "Scientific basis, authorship and permissions",
    "scienceTitle": "What LUMEN-V is based on",
    "scienceText": "LUMEN-V is developed by Tribeca Academia. It uses original items and does not reproduce items, norms or reports from commercial or proprietary tests. It draws on Holland’s RIASEC model, Social Cognitive Career Theory and open or official documentary sources.",
    "sci1Title": "Interests",
    "sci1Text": "The core is organised through the RIASEC model: Realistic, Investigative, Artistic, Social, Enterprising and Conventional.",
    "sci2Title": "Complementary variables",
    "sci2Text": "It integrates self-perceived skills, values, expectations, work style and academic context.",
    "sci3Title": "Scoring",
    "sci3Text": "The global profile weights interests, skills and values, and compares the result with a pathway matrix using cosine similarity and normalised Euclidean distance.",
    "sci4Title": "Licence",
    "sci4Text": "The original LUMEN-V work is distributed under CC BY-NC-ND 4.0. Cited external sources keep their own terms.",
    "contextKicker": "Context data",
    "contextTitle": "Initial information",
    "contextLead": "These data help interpret the report cautiously. They are not used as normative scores.",
    "studentName": "Name or initials",
    "stage": "Course or stage",
    "likedSubjects": "Subjects of greatest interest",
    "difficultSubjects": "Subjects that are difficult or avoided",
    "preferredRoute": "Initial pathway considered",
    "studyHorizon": "Acceptable study horizon",
    "barriers": "Doubts, barriers or relevant conditions",
    "continue": "Continue",
    "scaleIntro": "Choose the option that best fits you at this moment.",
    "previous": "Previous",
    "next": "Next",
    "savePdf": "Enregistrer le rapport en PDF",
    "reset": "Delete answers",
    "developedBy": "Developed by Tribeca Academia",
    "section_interests": "Vocational interests",
    "section_skills": "Self-perceived skills",
    "section_values": "Values and expectations",
    "section_style": "Learning and work style",
    "question": "Question",
    "of": "of",
    "resultsTitle": "Rapport de résultats",
    "reportMeta": "Système d’orientation académique et professionnelle · Tribeca Academia",
    "vocCode": "Main vocational code",
    "summary": "Initial visual summary",
    "summaryText": "The result arranges the answers into an exploration profile. It is not a definitive label, but a working hypothesis for academic and professional decisions.",
    "dominantArea": "Dominant area",
    "bestMatch": "Highest compatibility",
    "secondRoute": "Second pathway",
    "profileReading": "Profile reading",
    "topOptions": "First exploration options",
    "profile": "Visual RIASEC profile",
    "strengths": "Dominant strengths",
    "development": "Development opportunities",
    "style": "Learning and work style",
    "high": "Most compatible pathways and professions",
    "moderate": "Moderate compatibility options",
    "low": "Initial low compatibility options",
    "calc": "Scoring basis applied",
    "context": "Context data provided",
    "date": "Date",
    "student": "Student",
    "notGiven": "Not provided",
    "lowNote": "These options are not forbidden or ruled out; they point to areas that may require more adaptation, more information or stronger motivation.",
    "calcText": "The global score for each dimension is calculated as 55% interests, 25% self-perceived skills and 20% values. The compatibility index is guidance-oriented and is not a normative percentile.",
    "scale": [
      "Pas du tout comme moi",
      "Me ressemble peu",
      "Partiellement ou avec hésitation",
      "Me ressemble assez",
      "Me décrit très bien"
    ]
  },
  "pl": {
    "language": "Język",
    "font": "Font",
    "standardFont": "Standard",
    "accessibility": "Dostępność",
    "zoom": "Zoom",
    "zoomSmall": "Mniejszy",
    "zoomNormal": "Normalny",
    "zoomLarge": "Większy",
    "literalHelp": "Wsparcie dla myślenia dosłownego",
    "literalHelpNote": "Po najechaniu kursorem na niektóre słowa lub wyrażenia pojawi się krótkie wyjaśnienie ich znaczenia.",
    "systemName": "System orientacji edukacyjnej i zawodowej",
    "subtitle": "Explorer of interests, skills, values and vocational opportunities",
    "heroText": "System eksploracji zawodowej zaprojektowany do wspierania decyzji edukacyjnych i zawodowych oraz procesów reorientacji zawodowej w sposób ostrożny, uporządkowany i uzasadniony.",
    "beforeStart": "Before starting",
    "orientationUse": "Guidance use, not diagnosis",
    "consentText": "LUMEN-V does not replace a guidance interview and does not determine a person’s academic or professional future. Results should be read as a reasoned basis for discussion, comparison and exploration.",
    "consentCheck": "I have read and understood that the results are guidance-oriented.",
    "start": "Rozpocznij kwestionariusz",
    "scienceButton": "Zobacz podstawy naukowe i licencję",
    "scienceKicker": "Scientific basis, authorship and permissions",
    "scienceTitle": "What LUMEN-V is based on",
    "scienceText": "LUMEN-V is developed by Tribeca Academia. It uses original items and does not reproduce items, norms or reports from commercial or proprietary tests. It draws on Holland’s RIASEC model, Social Cognitive Career Theory and open or official documentary sources.",
    "sci1Title": "Interests",
    "sci1Text": "The core is organised through the RIASEC model: Realistic, Investigative, Artistic, Social, Enterprising and Conventional.",
    "sci2Title": "Complementary variables",
    "sci2Text": "It integrates self-perceived skills, values, expectations, work style and academic context.",
    "sci3Title": "Scoring",
    "sci3Text": "The global profile weights interests, skills and values, and compares the result with a pathway matrix using cosine similarity and normalised Euclidean distance.",
    "sci4Title": "Licence",
    "sci4Text": "The original LUMEN-V work is distributed under CC BY-NC-ND 4.0. Cited external sources keep their own terms.",
    "contextKicker": "Context data",
    "contextTitle": "Initial information",
    "contextLead": "These data help interpret the report cautiously. They are not used as normative scores.",
    "studentName": "Name or initials",
    "stage": "Course or stage",
    "likedSubjects": "Subjects of greatest interest",
    "difficultSubjects": "Subjects that are difficult or avoided",
    "preferredRoute": "Initial pathway considered",
    "studyHorizon": "Acceptable study horizon",
    "barriers": "Doubts, barriers or relevant conditions",
    "continue": "Continue",
    "scaleIntro": "Choose the option that best fits you at this moment.",
    "previous": "Previous",
    "next": "Next",
    "savePdf": "Zapisz raport jako PDF",
    "reset": "Delete answers",
    "developedBy": "Developed by Tribeca Academia",
    "section_interests": "Vocational interests",
    "section_skills": "Self-perceived skills",
    "section_values": "Values and expectations",
    "section_style": "Learning and work style",
    "question": "Question",
    "of": "of",
    "resultsTitle": "Raport wyników",
    "reportMeta": "System orientacji edukacyjnej i zawodowej · Tribeca Academia",
    "vocCode": "Main vocational code",
    "summary": "Initial visual summary",
    "summaryText": "The result arranges the answers into an exploration profile. It is not a definitive label, but a working hypothesis for academic and professional decisions.",
    "dominantArea": "Dominant area",
    "bestMatch": "Highest compatibility",
    "secondRoute": "Second pathway",
    "profileReading": "Profile reading",
    "topOptions": "First exploration options",
    "profile": "Visual RIASEC profile",
    "strengths": "Dominant strengths",
    "development": "Development opportunities",
    "style": "Learning and work style",
    "high": "Most compatible pathways and professions",
    "moderate": "Moderate compatibility options",
    "low": "Initial low compatibility options",
    "calc": "Scoring basis applied",
    "context": "Context data provided",
    "date": "Date",
    "student": "Student",
    "notGiven": "Not provided",
    "lowNote": "These options are not forbidden or ruled out; they point to areas that may require more adaptation, more information or stronger motivation.",
    "calcText": "The global score for each dimension is calculated as 55% interests, 25% self-perceived skills and 20% values. The compatibility index is guidance-oriented and is not a normative percentile.",
    "scale": [
      "W ogóle do mnie nie pasuje",
      "Trochę do mnie pasuje",
      "Częściowo lub mam wątpliwości",
      "Dość dobrze do mnie pasuje",
      "Bardzo dobrze mnie opisuje"
    ]
  },
  "de": {
    "language": "Sprache",
    "font": "Font",
    "standardFont": "Standard",
    "accessibility": "Barrierefreiheit",
    "zoom": "Zoom",
    "zoomSmall": "Kleiner",
    "zoomNormal": "Normal",
    "zoomLarge": "Größer",
    "literalHelp": "Unterstützung für wörtliches Denken",
    "literalHelpNote": "Wenn Sie mit dem Mauszeiger über bestimmte Wörter oder Ausdrücke fahren, erscheint eine kurze Erklärung ihrer Bedeutung.",
    "systemName": "System der akademischen und beruflichen Orientierung",
    "subtitle": "Explorer of interests, skills, values and vocational opportunities",
    "heroText": "Ein System zur beruflichen Exploration, das akademische und berufliche Entscheidungen sowie berufliche Neuorientierung durch eine vorsichtige, strukturierte und fundierte Auswertung unterstützt.",
    "beforeStart": "Before starting",
    "orientationUse": "Guidance use, not diagnosis",
    "consentText": "LUMEN-V does not replace a guidance interview and does not determine a person’s academic or professional future. Results should be read as a reasoned basis for discussion, comparison and exploration.",
    "consentCheck": "I have read and understood that the results are guidance-oriented.",
    "start": "Fragebogen starten",
    "scienceButton": "Wissenschaftliche Grundlage und Lizenz anzeigen",
    "scienceKicker": "Scientific basis, authorship and permissions",
    "scienceTitle": "What LUMEN-V is based on",
    "scienceText": "LUMEN-V is developed by Tribeca Academia. It uses original items and does not reproduce items, norms or reports from commercial or proprietary tests. It draws on Holland’s RIASEC model, Social Cognitive Career Theory and open or official documentary sources.",
    "sci1Title": "Interests",
    "sci1Text": "The core is organised through the RIASEC model: Realistic, Investigative, Artistic, Social, Enterprising and Conventional.",
    "sci2Title": "Complementary variables",
    "sci2Text": "It integrates self-perceived skills, values, expectations, work style and academic context.",
    "sci3Title": "Scoring",
    "sci3Text": "The global profile weights interests, skills and values, and compares the result with a pathway matrix using cosine similarity and normalised Euclidean distance.",
    "sci4Title": "Licence",
    "sci4Text": "The original LUMEN-V work is distributed under CC BY-NC-ND 4.0. Cited external sources keep their own terms.",
    "contextKicker": "Context data",
    "contextTitle": "Initial information",
    "contextLead": "These data help interpret the report cautiously. They are not used as normative scores.",
    "studentName": "Name or initials",
    "stage": "Course or stage",
    "likedSubjects": "Subjects of greatest interest",
    "difficultSubjects": "Subjects that are difficult or avoided",
    "preferredRoute": "Initial pathway considered",
    "studyHorizon": "Acceptable study horizon",
    "barriers": "Doubts, barriers or relevant conditions",
    "continue": "Continue",
    "scaleIntro": "Choose the option that best fits you at this moment.",
    "previous": "Previous",
    "next": "Next",
    "savePdf": "Bericht als PDF speichern",
    "reset": "Delete answers",
    "developedBy": "Developed by Tribeca Academia",
    "section_interests": "Vocational interests",
    "section_skills": "Self-perceived skills",
    "section_values": "Values and expectations",
    "section_style": "Learning and work style",
    "question": "Question",
    "of": "of",
    "resultsTitle": "Ergebnisbericht",
    "reportMeta": "System der akademischen und beruflichen Orientierung · Tribeca Academia",
    "vocCode": "Main vocational code",
    "summary": "Initial visual summary",
    "summaryText": "The result arranges the answers into an exploration profile. It is not a definitive label, but a working hypothesis for academic and professional decisions.",
    "dominantArea": "Dominant area",
    "bestMatch": "Highest compatibility",
    "secondRoute": "Second pathway",
    "profileReading": "Profile reading",
    "topOptions": "First exploration options",
    "profile": "Visual RIASEC profile",
    "strengths": "Dominant strengths",
    "development": "Development opportunities",
    "style": "Learning and work style",
    "high": "Most compatible pathways and professions",
    "moderate": "Moderate compatibility options",
    "low": "Initial low compatibility options",
    "calc": "Scoring basis applied",
    "context": "Context data provided",
    "date": "Date",
    "student": "Student",
    "notGiven": "Not provided",
    "lowNote": "These options are not forbidden or ruled out; they point to areas that may require more adaptation, more information or stronger motivation.",
    "calcText": "The global score for each dimension is calculated as 55% interests, 25% self-perceived skills and 20% values. The compatibility index is guidance-oriented and is not a normative percentile.",
    "scale": [
      "Trifft überhaupt nicht auf mich zu",
      "Trifft eher wenig auf mich zu",
      "Teilweise oder unsicher",
      "Trifft ziemlich gut auf mich zu",
      "Beschreibt mich sehr gut"
    ]
  }
};
const ITEM_TEXTS = {"gl": {"int_R1": "Montar, reparar ou axustar obxectos, aparellos, ferramentas ou materiais.", "int_R2": "Realizar tarefas prácticas en talleres, laboratorios técnicos, cociñas, instalacións ou espazos ao aire libre.", "int_R3": "Traballar con máquinas, vehículos, sistemas eléctricos, dispositivos ou equipamento técnico.", "int_R4": "Resolver problemas observando directamente o que ocorre e probando solucións concretas.", "int_R5": "Coidar animais, plantas, espazos naturais, instalacións ou recursos materiais.", "int_R6": "Aprender unha profesión mediante práctica guiada, demostracións e experiencia directa.", "int_I1": "Investigar por que ocorren as cousas e buscar explicacións baseadas en datos.", "int_I2": "Analizar problemas complexos, detectar patróns e comparar posibles solucións.", "int_I3": "Estudar con profundidade contidos científicos, tecnolóxicos, sanitarios, matemáticos ou sociais.", "int_I4": "Deseñar experimentos, revisar información fiable ou comprobar hipóteses.", "int_I5": "Programar, calcular, interpretar gráficos, manexar bases de datos ou traballar con información técnica.", "int_I6": "Ler, documentarme e comprender temas esixentes antes de tomar unha decisión.", "int_A1": "Crear textos, imaxes, vídeos, música, presentacións, historias ou propostas visuais.", "int_A2": "Deseñar obxectos, espazos, materiais dixitais, roupa, carteis, xogos ou experiencias.", "int_A3": "Expresar ideas dunha forma persoal, orixinal ou estética.", "int_A4": "Traballar en proxectos con liberdade creativa e marxe para propoñer solucións propias.", "int_A5": "Interpretar, actuar, comunicar en público, fotografar, editar ou producir contido.", "int_A6": "Buscar formas distintas de presentar unha idea para que sexa máis clara, atractiva ou emocionante.", "int_S1": "Axudar outras persoas a aprender, mellorar, resolver dificultades ou tomar decisións.", "int_S2": "Escoitar, acompañar, explicar ou mediar cando alguén ten un problema.", "int_S3": "Traballar en educación, saúde, intervención social, orientación, coidados ou apoio comunitario.", "int_S4": "Participar en proxectos que teñan impacto positivo en persoas ou grupos.", "int_S5": "Coordinar actividades con nenos, adolescentes, familias, persoas maiores ou colectivos diversos.", "int_S6": "Comunicar contidos de forma próxima para que outras persoas os comprendan.", "int_E1": "Organizar proxectos, propoñer iniciativas e convencer outras persoas dunha idea.", "int_E2": "Dirixir equipos, repartir tarefas, negociar obxectivos ou tomar decisións con rapidez.", "int_E3": "Crear un negocio, xestionar unha marca, vender produtos ou presentar propostas a clientes.", "int_E4": "Participar en debates, campañas, actividades comerciais, eventos ou proxectos con visibilidade.", "int_E5": "Asumir responsabilidades cando hai que coordinar persoas ou recursos.", "int_E6": "Traballar en contextos dinámicos onde haxa metas, resultados e capacidade de influencia.", "int_C1": "Ordenar documentos, datos, horarios, orzamentos, inventarios ou expedientes.", "int_C2": "Seguir procedementos claros e comprobar que todo está correcto antes de entregalo.", "int_C3": "Xestionar información administrativa, contable, xurídica, loxística ou de atención ao público.", "int_C4": "Traballar con follas de cálculo, formularios, bases de datos ou sistemas de arquivo.", "int_C5": "Planificar tarefas con orde, prazos e criterios definidos.", "int_C6": "Realizar traballos que esixan precisión, constancia e control dos detalles.", "hab_R1": "Aprendo ben cando podo observar unha demostración e practicar despois.", "hab_R2": "Teño certa facilidade para manexar obxectos, ferramentas, materiais ou tecnoloxía práctica.", "hab_R3": "Adoito ter paciencia para probar solucións materiais ata que algo funciona.", "hab_I1": "Comprendo ideas abstractas cando podo analizalas paso a paso.", "hab_I2": "Teño facilidade para buscar información, comparar fontes e sacar conclusións.", "hab_I3": "Podo concentrarme en problemas difíciles aínda que necesiten tempo.", "hab_A1": "Teño facilidade para imaxinar, deseñar, escribir, debuxar, editar ou propoñer ideas orixinais.", "hab_A2": "Sei adaptar unha explicación, imaxe ou presentación para que resulte atractiva.", "hab_A3": "Síntome capaz de traballar sen instrucións excesivamente pechadas.", "hab_S1": "Teño facilidade para escoitar, explicar e axudar outras persoas sen perder a calma.", "hab_S2": "Podo traballar con persoas moi distintas e adaptar a miña forma de comunicarme.", "hab_S3": "Cando alguén non entende algo, adoito buscar outra forma de explicalo.", "hab_E1": "Véxome capaz de tomar a iniciativa cando un grupo precisa organización.", "hab_E2": "Podo defender unha idea con argumentos e falar con seguridade ante outras persoas.", "hab_E3": "Resúltame natural propoñer obxectivos, repartir tarefas ou buscar resultados.", "hab_C1": "Son capaz de manter ordenados apuntamentos, arquivos, datos ou tarefas.", "hab_C2": "Detecto erros cando reviso documentos, cálculos, instrucións ou listas.", "hab_C3": "Adáptome ben a normas, procedementos e prazos cando están claros.", "val_R1": "Prefiro ver resultados concretos do meu traballo antes que quedar só en ideas teóricas.", "val_I1": "Atráenme estudos ou traballos onde poida seguir aprendendo e profundando durante anos.", "val_A1": "Preciso que o meu futuro teña algún espazo para a creatividade, a expresión ou o deseño.", "val_S1": "Impórtame que a miña actividade futura teña utilidade para outras persoas.", "val_E1": "Motívame poder medrar, liderar, emprender ou influír en decisións.", "val_C1": "Valoro a estabilidade, a orde, a seguridade e saber que se espera de min.", "val_R2": "Preferiría unha formación con moita práctica, equipamento, taller, laboratorio ou simulacións.", "val_I2": "Aceptaría estudos esixentes se me permiten comprender temas complexos ou acceder a profesións cualificadas.", "val_A2": "Desmotivaríame un itinerario onde todo fose rutineiro e apenas puidese achegar ideas propias.", "val_S2": "Véxome mellor nun contorno con trato humano que nun centrado case só en obxectos ou documentos.", "val_E2": "Atráenme os retos con metas visibles, recoñecemento ou posibilidade de progreso.", "val_C2": "Sentiríame cómodo/a nun traballo onde haxa método, procedementos e responsabilidade documental.", "sty_O1": "Gústame aprender temas novos aínda que ao principio parezan difíciles.", "sty_O2": "Gústame relacionar ideas de distintas materias ou ámbitos.", "sty_R1": "Cando unha tarefa me importa, adoito esforzarme ata deixala ben rematada.", "sty_R2": "Preciso mellorar a miña constancia cando as tarefas son longas ou pouco motivadoras.", "sty_E1": "Síntome capaz de expresar opinións ou preguntar dúbidas diante doutras persoas.", "sty_E2": "Prefiro pasar desapercibido/a mesmo cando teño algo útil que achegar.", "sty_A1": "Traballo ben cando hai cooperación e respecto dentro do grupo.", "sty_A2": "Resúltame fácil poñerme no lugar doutras persoas.", "sty_N1": "Cando algo non sae ben, podo reorganizarme e volver tentalo.", "sty_N2": "A presión ou o medo a equivocarme poden bloquear as miñas decisións."}, "es": {"int_R1": "Montar, reparar o ajustar objetos, aparatos, herramientas o materiales.", "int_R2": "Realizar tareas prácticas en talleres, laboratorios técnicos, cocinas, instalaciones o espacios al aire libre.", "int_R3": "Trabajar con máquinas, vehículos, sistemas eléctricos, dispositivos o equipamiento técnico.", "int_R4": "Resolver problemas observando directamente lo que ocurre y probando soluciones concretas.", "int_R5": "Cuidar animales, plantas, espacios naturales, instalaciones o recursos materiales.", "int_R6": "Aprender una profesión mediante práctica guiada, demostraciones y experiencia directa.", "int_I1": "Investigar por qué ocurren las cosas y buscar explicaciones basadas en datos.", "int_I2": "Analizar problemas complejos, detectar patrones y comparar posibles soluciones.", "int_I3": "Estudiar contenidos científicos, tecnológicos, sanitarios, matemáticos o sociales con profundidad.", "int_I4": "Diseñar experimentos, revisar información fiable o comprobar hipótesis.", "int_I5": "Programar, calcular, interpretar gráficos, manejar bases de datos o trabajar con información técnica.", "int_I6": "Leer, documentarme y comprender temas exigentes antes de tomar una decisión.", "int_A1": "Crear textos, imágenes, vídeos, música, presentaciones, historias o propuestas visuales.", "int_A2": "Diseñar objetos, espacios, materiales digitales, ropa, carteles, juegos o experiencias.", "int_A3": "Expresar ideas de forma personal, original o estética.", "int_A4": "Trabajar en proyectos con libertad creativa y margen para proponer soluciones propias.", "int_A5": "Interpretar, actuar, comunicar en público, fotografiar, editar o producir contenido.", "int_A6": "Buscar formas distintas de presentar una idea para que sea más clara, atractiva o emocionante.", "int_S1": "Ayudar a otras personas a aprender, mejorar, resolver dificultades o tomar decisiones.", "int_S2": "Escuchar, acompañar, explicar o mediar cuando alguien tiene un problema.", "int_S3": "Trabajar en educación, salud, intervención social, orientación, cuidados o apoyo comunitario.", "int_S4": "Participar en proyectos que tengan impacto positivo en personas o grupos.", "int_S5": "Coordinar actividades con niños, adolescentes, familias, personas mayores o colectivos diversos.", "int_S6": "Comunicar contenidos de forma cercana para que otras personas los comprendan.", "int_E1": "Organizar proyectos, proponer iniciativas y convencer a otras personas de una idea.", "int_E2": "Dirigir equipos, repartir tareas, negociar objetivos o tomar decisiones con rapidez.", "int_E3": "Crear un negocio, gestionar una marca, vender productos o presentar propuestas a clientes.", "int_E4": "Participar en debates, campañas, actividades comerciales, eventos o proyectos con visibilidad.", "int_E5": "Asumir responsabilidades cuando hay que coordinar personas o recursos.", "int_E6": "Trabajar en contextos dinámicos donde haya metas, resultados y capacidad de influencia.", "int_C1": "Ordenar documentos, datos, horarios, presupuestos, inventarios o expedientes.", "int_C2": "Seguir procedimientos claros y comprobar que todo está correcto antes de entregarlo.", "int_C3": "Gestionar información administrativa, contable, jurídica, logística o de atención al público.", "int_C4": "Trabajar con hojas de cálculo, formularios, bases de datos o sistemas de archivo.", "int_C5": "Planificar tareas con orden, plazos y criterios definidos.", "int_C6": "Realizar trabajos que exijan precisión, constancia y control de detalles.", "hab_R1": "Aprendo bien cuando puedo observar una demostración y practicar después.", "hab_R2": "Se me da razonablemente bien manejar objetos, herramientas, materiales o tecnología práctica.", "hab_R3": "Suelo tener paciencia para probar soluciones materiales hasta que algo funciona.", "hab_I1": "Comprendo ideas abstractas cuando puedo analizarlas paso a paso.", "hab_I2": "Se me da bien buscar información, comparar fuentes y sacar conclusiones.", "hab_I3": "Puedo concentrarme en problemas difíciles aunque necesiten tiempo.", "hab_A1": "Tengo facilidad para imaginar, diseñar, escribir, dibujar, editar o proponer ideas originales.", "hab_A2": "Sé adaptar una explicación, imagen o presentación para que resulte atractiva.", "hab_A3": "Me siento capaz de trabajar sin instrucciones excesivamente cerradas.", "hab_S1": "Tengo facilidad para escuchar, explicar y ayudar a otras personas sin perder la calma.", "hab_S2": "Puedo trabajar con personas muy distintas y adaptar mi forma de comunicarme.", "hab_S3": "Cuando alguien no entiende algo, suelo buscar otra forma de explicarlo.", "hab_E1": "Me veo capaz de tomar la iniciativa cuando un grupo necesita organización.", "hab_E2": "Puedo defender una idea con argumentos y hablar con seguridad ante otras personas.", "hab_E3": "Me resulta natural proponer objetivos, repartir tareas o buscar resultados.", "hab_C1": "Soy capaz de mantener ordenados apuntes, archivos, datos o tareas.", "hab_C2": "Detecto errores cuando reviso documentos, cálculos, instrucciones o listas.", "hab_C3": "Me adapto bien a normas, procedimientos y plazos cuando están claros.", "val_R1": "Prefiero ver resultados concretos de mi trabajo antes que quedarme solo en ideas teóricas.", "val_I1": "Me atraen los estudios o trabajos donde pueda seguir aprendiendo y profundizando durante años.", "val_A1": "Necesito que mi futuro tenga algún espacio para la creatividad, la expresión o el diseño.", "val_S1": "Me importa que mi actividad futura tenga utilidad para otras personas.", "val_E1": "Me motiva poder crecer, liderar, emprender o influir en decisiones.", "val_C1": "Valoro la estabilidad, el orden, la seguridad y saber qué se espera de mí.", "val_R2": "Preferiría una formación con mucha práctica, equipamiento, taller, laboratorio o simulaciones.", "val_I2": "Aceptaría estudios exigentes si me permiten comprender temas complejos o acceder a profesiones cualificadas.", "val_A2": "Me desmotivaría un itinerario donde todo fuese rutinario y apenas pudiera aportar ideas propias.", "val_S2": "Me veo mejor en un entorno con trato humano que en uno centrado casi solo en objetos o documentos.", "val_E2": "Me atraen los retos con metas visibles, reconocimiento o posibilidad de progreso.", "val_C2": "Me sentiría cómodo/a en un trabajo donde haya método, procedimientos y responsabilidad documental.", "sty_O1": "Disfruto aprendiendo temas nuevos aunque al principio parezcan difíciles.", "sty_O2": "Me gusta relacionar ideas de distintas asignaturas o ámbitos.", "sty_R1": "Cuando una tarea me importa, suelo esforzarme hasta dejarla bien terminada.", "sty_R2": "Necesito mejorar mi constancia cuando las tareas son largas o poco motivadoras.", "sty_E1": "Me siento capaz de expresar opiniones o preguntar dudas delante de otras personas.", "sty_E2": "Prefiero pasar desapercibido/a incluso cuando tengo algo útil que aportar.", "sty_A1": "Trabajo bien cuando hay cooperación y respeto dentro del grupo.", "sty_A2": "Me resulta fácil ponerme en el lugar de otras personas.", "sty_N1": "Cuando algo no sale bien, puedo reorganizarme y volver a intentarlo.", "sty_N2": "La presión o el miedo a equivocarme pueden bloquear mis decisiones."}, "en": {"int_R1": "Assemble, repair or adjust objects, devices, tools or materials.", "int_R2": "Carry out practical tasks in workshops, technical labs, kitchens, facilities or outdoor spaces.", "int_R3": "Work with machines, vehicles, electrical systems, devices or technical equipment.", "int_R4": "Solve problems by observing what happens and trying concrete solutions.", "int_R5": "Care for animals, plants, natural spaces, facilities or material resources.", "int_R6": "Learn a profession through guided practice, demonstrations and direct experience.", "int_I1": "Investigate why things happen and look for explanations based on data.", "int_I2": "Analyse complex problems, detect patterns and compare possible solutions.", "int_I3": "Study scientific, technological, health, mathematical or social topics in depth.", "int_I4": "Design experiments, review reliable information or test hypotheses.", "int_I5": "Program, calculate, interpret graphs, use databases or work with technical information.", "int_I6": "Read, research and understand demanding topics before making a decision.", "int_A1": "Create texts, images, videos, music, presentations, stories or visual proposals.", "int_A2": "Design objects, spaces, digital materials, clothing, posters, games or experiences.", "int_A3": "Express ideas in a personal, original or aesthetic way.", "int_A4": "Work on projects with creative freedom and room to propose my own solutions.", "int_A5": "Perform, act, speak in public, take photographs, edit or produce content.", "int_A6": "Find different ways to present an idea so that it is clearer, more attractive or more moving.", "int_S1": "Help other people learn, improve, solve difficulties or make decisions.", "int_S2": "Listen, support, explain or mediate when someone has a problem.", "int_S3": "Work in education, health, social intervention, guidance, care or community support.", "int_S4": "Take part in projects that have a positive impact on people or groups.", "int_S5": "Coordinate activities with children, adolescents, families, older people or diverse groups.", "int_S6": "Communicate content in an approachable way so that other people understand it.", "int_E1": "Organise projects, suggest initiatives and persuade other people about an idea.", "int_E2": "Lead teams, distribute tasks, negotiate goals or make quick decisions.", "int_E3": "Create a business, manage a brand, sell products or present proposals to clients.", "int_E4": "Take part in debates, campaigns, commercial activities, events or visible projects.", "int_E5": "Take responsibility when people or resources need to be coordinated.", "int_E6": "Work in dynamic contexts with goals, results and influence.", "int_C1": "Organise documents, data, schedules, budgets, inventories or files.", "int_C2": "Follow clear procedures and check that everything is correct before submitting it.", "int_C3": "Manage administrative, accounting, legal, logistical or customer-service information.", "int_C4": "Work with spreadsheets, forms, databases or filing systems.", "int_C5": "Plan tasks with order, deadlines and defined criteria.", "int_C6": "Carry out work that requires accuracy, consistency and attention to detail.", "hab_R1": "I learn well when I can watch a demonstration and then practise.", "hab_R2": "I am reasonably good at handling objects, tools, materials or practical technology.", "hab_R3": "I usually have patience to try material solutions until something works.", "hab_I1": "I understand abstract ideas when I can analyse them step by step.", "hab_I2": "I am good at searching for information, comparing sources and drawing conclusions.", "hab_I3": "I can focus on difficult problems even when they take time.", "hab_A1": "I find it easy to imagine, design, write, draw, edit or suggest original ideas.", "hab_A2": "I can adapt an explanation, image or presentation so that it becomes attractive.", "hab_A3": "I feel able to work without excessively closed instructions.", "hab_S1": "I find it easy to listen, explain and help others without losing calm.", "hab_S2": "I can work with very different people and adapt the way I communicate.", "hab_S3": "When someone does not understand something, I usually look for another way to explain it.", "hab_E1": "I see myself able to take initiative when a group needs organisation.", "hab_E2": "I can defend an idea with arguments and speak confidently in front of others.", "hab_E3": "It feels natural to suggest goals, distribute tasks or seek results.", "hab_C1": "I can keep notes, files, data or tasks organised.", "hab_C2": "I detect errors when I review documents, calculations, instructions or lists.", "hab_C3": "I adapt well to rules, procedures and deadlines when they are clear.", "val_R1": "I prefer to see concrete results from my work rather than stay only with theoretical ideas.", "val_I1": "I am attracted to studies or jobs where I can keep learning in depth for years.", "val_A1": "I need my future to include some space for creativity, expression or design.", "val_S1": "It matters to me that my future activity is useful to other people.", "val_E1": "I am motivated by growth, leadership, entrepreneurship or influence.", "val_C1": "I value stability, order, security and knowing what is expected of me.", "val_R2": "I would prefer training with a lot of practice, equipment, workshop, laboratory or simulations.", "val_I2": "I would accept demanding studies if they help me understand complex topics or access qualified professions.", "val_A2": "I would feel demotivated by a pathway where everything was routine and I could hardly contribute my own ideas.", "val_S2": "I see myself better in an environment with human contact than in one focused almost only on objects or documents.", "val_E2": "I am attracted to challenges with visible goals, recognition or the possibility of progress.", "val_C2": "I would feel comfortable in a job with method, procedures and documentary responsibility.", "sty_O1": "I enjoy learning new topics even if they seem difficult at first.", "sty_O2": "I like connecting ideas from different subjects or fields.", "sty_R1": "When a task matters to me, I usually work hard until it is well finished.", "sty_R2": "I need to improve my consistency when tasks are long or not very motivating.", "sty_E1": "I feel able to express opinions or ask questions in front of other people.", "sty_E2": "I prefer to go unnoticed even when I have something useful to contribute.", "sty_A1": "I work well when there is cooperation and respect in the group.", "sty_A2": "I find it easy to put myself in other people’s place.", "sty_N1": "When something goes wrong, I can reorganise and try again.", "sty_N2": "Pressure or fear of making mistakes can block my decisions."}, "pt": {"int_R1": "Assemble, repair or adjust objects, devices, tools or materials.", "int_R2": "Carry out practical tasks in workshops, technical labs, kitchens, facilities or outdoor spaces.", "int_R3": "Work with machines, vehicles, electrical systems, devices or technical equipment.", "int_R4": "Solve problems by observing what happens and trying concrete solutions.", "int_R5": "Care for animals, plants, natural spaces, facilities or material resources.", "int_R6": "Learn a profession through guided practice, demonstrations and direct experience.", "int_I1": "Investigate why things happen and look for explanations based on data.", "int_I2": "Analyse complex problems, detect patterns and compare possible solutions.", "int_I3": "Study scientific, technological, health, mathematical or social topics in depth.", "int_I4": "Design experiments, review reliable information or test hypotheses.", "int_I5": "Program, calculate, interpret graphs, use databases or work with technical information.", "int_I6": "Read, research and understand demanding topics before making a decision.", "int_A1": "Create texts, images, videos, music, presentations, stories or visual proposals.", "int_A2": "Design objects, spaces, digital materials, clothing, posters, games or experiences.", "int_A3": "Express ideas in a personal, original or aesthetic way.", "int_A4": "Work on projects with creative freedom and room to propose my own solutions.", "int_A5": "Perform, act, speak in public, take photographs, edit or produce content.", "int_A6": "Find different ways to present an idea so that it is clearer, more attractive or more moving.", "int_S1": "Help other people learn, improve, solve difficulties or make decisions.", "int_S2": "Listen, support, explain or mediate when someone has a problem.", "int_S3": "Work in education, health, social intervention, guidance, care or community support.", "int_S4": "Take part in projects that have a positive impact on people or groups.", "int_S5": "Coordinate activities with children, adolescents, families, older people or diverse groups.", "int_S6": "Communicate content in an approachable way so that other people understand it.", "int_E1": "Organise projects, suggest initiatives and persuade other people about an idea.", "int_E2": "Lead teams, distribute tasks, negotiate goals or make quick decisions.", "int_E3": "Create a business, manage a brand, sell products or present proposals to clients.", "int_E4": "Take part in debates, campaigns, commercial activities, events or visible projects.", "int_E5": "Take responsibility when people or resources need to be coordinated.", "int_E6": "Work in dynamic contexts with goals, results and influence.", "int_C1": "Organise documents, data, schedules, budgets, inventories or files.", "int_C2": "Follow clear procedures and check that everything is correct before submitting it.", "int_C3": "Manage administrative, accounting, legal, logistical or customer-service information.", "int_C4": "Work with spreadsheets, forms, databases or filing systems.", "int_C5": "Plan tasks with order, deadlines and defined criteria.", "int_C6": "Carry out work that requires accuracy, consistency and attention to detail.", "hab_R1": "I learn well when I can watch a demonstration and then practise.", "hab_R2": "I am reasonably good at handling objects, tools, materials or practical technology.", "hab_R3": "I usually have patience to try material solutions until something works.", "hab_I1": "I understand abstract ideas when I can analyse them step by step.", "hab_I2": "I am good at searching for information, comparing sources and drawing conclusions.", "hab_I3": "I can focus on difficult problems even when they take time.", "hab_A1": "I find it easy to imagine, design, write, draw, edit or suggest original ideas.", "hab_A2": "I can adapt an explanation, image or presentation so that it becomes attractive.", "hab_A3": "I feel able to work without excessively closed instructions.", "hab_S1": "I find it easy to listen, explain and help others without losing calm.", "hab_S2": "I can work with very different people and adapt the way I communicate.", "hab_S3": "When someone does not understand something, I usually look for another way to explain it.", "hab_E1": "I see myself able to take initiative when a group needs organisation.", "hab_E2": "I can defend an idea with arguments and speak confidently in front of others.", "hab_E3": "It feels natural to suggest goals, distribute tasks or seek results.", "hab_C1": "I can keep notes, files, data or tasks organised.", "hab_C2": "I detect errors when I review documents, calculations, instructions or lists.", "hab_C3": "I adapt well to rules, procedures and deadlines when they are clear.", "val_R1": "I prefer to see concrete results from my work rather than stay only with theoretical ideas.", "val_I1": "I am attracted to studies or jobs where I can keep learning in depth for years.", "val_A1": "I need my future to include some space for creativity, expression or design.", "val_S1": "It matters to me that my future activity is useful to other people.", "val_E1": "I am motivated by growth, leadership, entrepreneurship or influence.", "val_C1": "I value stability, order, security and knowing what is expected of me.", "val_R2": "I would prefer training with a lot of practice, equipment, workshop, laboratory or simulations.", "val_I2": "I would accept demanding studies if they help me understand complex topics or access qualified professions.", "val_A2": "I would feel demotivated by a pathway where everything was routine and I could hardly contribute my own ideas.", "val_S2": "I see myself better in an environment with human contact than in one focused almost only on objects or documents.", "val_E2": "I am attracted to challenges with visible goals, recognition or the possibility of progress.", "val_C2": "I would feel comfortable in a job with method, procedures and documentary responsibility.", "sty_O1": "I enjoy learning new topics even if they seem difficult at first.", "sty_O2": "I like connecting ideas from different subjects or fields.", "sty_R1": "When a task matters to me, I usually work hard until it is well finished.", "sty_R2": "I need to improve my consistency when tasks are long or not very motivating.", "sty_E1": "I feel able to express opinions or ask questions in front of other people.", "sty_E2": "I prefer to go unnoticed even when I have something useful to contribute.", "sty_A1": "I work well when there is cooperation and respect in the group.", "sty_A2": "I find it easy to put myself in other people’s place.", "sty_N1": "When something goes wrong, I can reorganise and try again.", "sty_N2": "Pressure or fear of making mistakes can block my decisions."}, "fr": {"int_R1": "Assemble, repair or adjust objects, devices, tools or materials.", "int_R2": "Carry out practical tasks in workshops, technical labs, kitchens, facilities or outdoor spaces.", "int_R3": "Work with machines, vehicles, electrical systems, devices or technical equipment.", "int_R4": "Solve problems by observing what happens and trying concrete solutions.", "int_R5": "Care for animals, plants, natural spaces, facilities or material resources.", "int_R6": "Learn a profession through guided practice, demonstrations and direct experience.", "int_I1": "Investigate why things happen and look for explanations based on data.", "int_I2": "Analyse complex problems, detect patterns and compare possible solutions.", "int_I3": "Study scientific, technological, health, mathematical or social topics in depth.", "int_I4": "Design experiments, review reliable information or test hypotheses.", "int_I5": "Program, calculate, interpret graphs, use databases or work with technical information.", "int_I6": "Read, research and understand demanding topics before making a decision.", "int_A1": "Create texts, images, videos, music, presentations, stories or visual proposals.", "int_A2": "Design objects, spaces, digital materials, clothing, posters, games or experiences.", "int_A3": "Express ideas in a personal, original or aesthetic way.", "int_A4": "Work on projects with creative freedom and room to propose my own solutions.", "int_A5": "Perform, act, speak in public, take photographs, edit or produce content.", "int_A6": "Find different ways to present an idea so that it is clearer, more attractive or more moving.", "int_S1": "Help other people learn, improve, solve difficulties or make decisions.", "int_S2": "Listen, support, explain or mediate when someone has a problem.", "int_S3": "Work in education, health, social intervention, guidance, care or community support.", "int_S4": "Take part in projects that have a positive impact on people or groups.", "int_S5": "Coordinate activities with children, adolescents, families, older people or diverse groups.", "int_S6": "Communicate content in an approachable way so that other people understand it.", "int_E1": "Organise projects, suggest initiatives and persuade other people about an idea.", "int_E2": "Lead teams, distribute tasks, negotiate goals or make quick decisions.", "int_E3": "Create a business, manage a brand, sell products or present proposals to clients.", "int_E4": "Take part in debates, campaigns, commercial activities, events or visible projects.", "int_E5": "Take responsibility when people or resources need to be coordinated.", "int_E6": "Work in dynamic contexts with goals, results and influence.", "int_C1": "Organise documents, data, schedules, budgets, inventories or files.", "int_C2": "Follow clear procedures and check that everything is correct before submitting it.", "int_C3": "Manage administrative, accounting, legal, logistical or customer-service information.", "int_C4": "Work with spreadsheets, forms, databases or filing systems.", "int_C5": "Plan tasks with order, deadlines and defined criteria.", "int_C6": "Carry out work that requires accuracy, consistency and attention to detail.", "hab_R1": "I learn well when I can watch a demonstration and then practise.", "hab_R2": "I am reasonably good at handling objects, tools, materials or practical technology.", "hab_R3": "I usually have patience to try material solutions until something works.", "hab_I1": "I understand abstract ideas when I can analyse them step by step.", "hab_I2": "I am good at searching for information, comparing sources and drawing conclusions.", "hab_I3": "I can focus on difficult problems even when they take time.", "hab_A1": "I find it easy to imagine, design, write, draw, edit or suggest original ideas.", "hab_A2": "I can adapt an explanation, image or presentation so that it becomes attractive.", "hab_A3": "I feel able to work without excessively closed instructions.", "hab_S1": "I find it easy to listen, explain and help others without losing calm.", "hab_S2": "I can work with very different people and adapt the way I communicate.", "hab_S3": "When someone does not understand something, I usually look for another way to explain it.", "hab_E1": "I see myself able to take initiative when a group needs organisation.", "hab_E2": "I can defend an idea with arguments and speak confidently in front of others.", "hab_E3": "It feels natural to suggest goals, distribute tasks or seek results.", "hab_C1": "I can keep notes, files, data or tasks organised.", "hab_C2": "I detect errors when I review documents, calculations, instructions or lists.", "hab_C3": "I adapt well to rules, procedures and deadlines when they are clear.", "val_R1": "I prefer to see concrete results from my work rather than stay only with theoretical ideas.", "val_I1": "I am attracted to studies or jobs where I can keep learning in depth for years.", "val_A1": "I need my future to include some space for creativity, expression or design.", "val_S1": "It matters to me that my future activity is useful to other people.", "val_E1": "I am motivated by growth, leadership, entrepreneurship or influence.", "val_C1": "I value stability, order, security and knowing what is expected of me.", "val_R2": "I would prefer training with a lot of practice, equipment, workshop, laboratory or simulations.", "val_I2": "I would accept demanding studies if they help me understand complex topics or access qualified professions.", "val_A2": "I would feel demotivated by a pathway where everything was routine and I could hardly contribute my own ideas.", "val_S2": "I see myself better in an environment with human contact than in one focused almost only on objects or documents.", "val_E2": "I am attracted to challenges with visible goals, recognition or the possibility of progress.", "val_C2": "I would feel comfortable in a job with method, procedures and documentary responsibility.", "sty_O1": "I enjoy learning new topics even if they seem difficult at first.", "sty_O2": "I like connecting ideas from different subjects or fields.", "sty_R1": "When a task matters to me, I usually work hard until it is well finished.", "sty_R2": "I need to improve my consistency when tasks are long or not very motivating.", "sty_E1": "I feel able to express opinions or ask questions in front of other people.", "sty_E2": "I prefer to go unnoticed even when I have something useful to contribute.", "sty_A1": "I work well when there is cooperation and respect in the group.", "sty_A2": "I find it easy to put myself in other people’s place.", "sty_N1": "When something goes wrong, I can reorganise and try again.", "sty_N2": "Pressure or fear of making mistakes can block my decisions."}, "pl": {"int_R1": "Assemble, repair or adjust objects, devices, tools or materials.", "int_R2": "Carry out practical tasks in workshops, technical labs, kitchens, facilities or outdoor spaces.", "int_R3": "Work with machines, vehicles, electrical systems, devices or technical equipment.", "int_R4": "Solve problems by observing what happens and trying concrete solutions.", "int_R5": "Care for animals, plants, natural spaces, facilities or material resources.", "int_R6": "Learn a profession through guided practice, demonstrations and direct experience.", "int_I1": "Investigate why things happen and look for explanations based on data.", "int_I2": "Analyse complex problems, detect patterns and compare possible solutions.", "int_I3": "Study scientific, technological, health, mathematical or social topics in depth.", "int_I4": "Design experiments, review reliable information or test hypotheses.", "int_I5": "Program, calculate, interpret graphs, use databases or work with technical information.", "int_I6": "Read, research and understand demanding topics before making a decision.", "int_A1": "Create texts, images, videos, music, presentations, stories or visual proposals.", "int_A2": "Design objects, spaces, digital materials, clothing, posters, games or experiences.", "int_A3": "Express ideas in a personal, original or aesthetic way.", "int_A4": "Work on projects with creative freedom and room to propose my own solutions.", "int_A5": "Perform, act, speak in public, take photographs, edit or produce content.", "int_A6": "Find different ways to present an idea so that it is clearer, more attractive or more moving.", "int_S1": "Help other people learn, improve, solve difficulties or make decisions.", "int_S2": "Listen, support, explain or mediate when someone has a problem.", "int_S3": "Work in education, health, social intervention, guidance, care or community support.", "int_S4": "Take part in projects that have a positive impact on people or groups.", "int_S5": "Coordinate activities with children, adolescents, families, older people or diverse groups.", "int_S6": "Communicate content in an approachable way so that other people understand it.", "int_E1": "Organise projects, suggest initiatives and persuade other people about an idea.", "int_E2": "Lead teams, distribute tasks, negotiate goals or make quick decisions.", "int_E3": "Create a business, manage a brand, sell products or present proposals to clients.", "int_E4": "Take part in debates, campaigns, commercial activities, events or visible projects.", "int_E5": "Take responsibility when people or resources need to be coordinated.", "int_E6": "Work in dynamic contexts with goals, results and influence.", "int_C1": "Organise documents, data, schedules, budgets, inventories or files.", "int_C2": "Follow clear procedures and check that everything is correct before submitting it.", "int_C3": "Manage administrative, accounting, legal, logistical or customer-service information.", "int_C4": "Work with spreadsheets, forms, databases or filing systems.", "int_C5": "Plan tasks with order, deadlines and defined criteria.", "int_C6": "Carry out work that requires accuracy, consistency and attention to detail.", "hab_R1": "I learn well when I can watch a demonstration and then practise.", "hab_R2": "I am reasonably good at handling objects, tools, materials or practical technology.", "hab_R3": "I usually have patience to try material solutions until something works.", "hab_I1": "I understand abstract ideas when I can analyse them step by step.", "hab_I2": "I am good at searching for information, comparing sources and drawing conclusions.", "hab_I3": "I can focus on difficult problems even when they take time.", "hab_A1": "I find it easy to imagine, design, write, draw, edit or suggest original ideas.", "hab_A2": "I can adapt an explanation, image or presentation so that it becomes attractive.", "hab_A3": "I feel able to work without excessively closed instructions.", "hab_S1": "I find it easy to listen, explain and help others without losing calm.", "hab_S2": "I can work with very different people and adapt the way I communicate.", "hab_S3": "When someone does not understand something, I usually look for another way to explain it.", "hab_E1": "I see myself able to take initiative when a group needs organisation.", "hab_E2": "I can defend an idea with arguments and speak confidently in front of others.", "hab_E3": "It feels natural to suggest goals, distribute tasks or seek results.", "hab_C1": "I can keep notes, files, data or tasks organised.", "hab_C2": "I detect errors when I review documents, calculations, instructions or lists.", "hab_C3": "I adapt well to rules, procedures and deadlines when they are clear.", "val_R1": "I prefer to see concrete results from my work rather than stay only with theoretical ideas.", "val_I1": "I am attracted to studies or jobs where I can keep learning in depth for years.", "val_A1": "I need my future to include some space for creativity, expression or design.", "val_S1": "It matters to me that my future activity is useful to other people.", "val_E1": "I am motivated by growth, leadership, entrepreneurship or influence.", "val_C1": "I value stability, order, security and knowing what is expected of me.", "val_R2": "I would prefer training with a lot of practice, equipment, workshop, laboratory or simulations.", "val_I2": "I would accept demanding studies if they help me understand complex topics or access qualified professions.", "val_A2": "I would feel demotivated by a pathway where everything was routine and I could hardly contribute my own ideas.", "val_S2": "I see myself better in an environment with human contact than in one focused almost only on objects or documents.", "val_E2": "I am attracted to challenges with visible goals, recognition or the possibility of progress.", "val_C2": "I would feel comfortable in a job with method, procedures and documentary responsibility.", "sty_O1": "I enjoy learning new topics even if they seem difficult at first.", "sty_O2": "I like connecting ideas from different subjects or fields.", "sty_R1": "When a task matters to me, I usually work hard until it is well finished.", "sty_R2": "I need to improve my consistency when tasks are long or not very motivating.", "sty_E1": "I feel able to express opinions or ask questions in front of other people.", "sty_E2": "I prefer to go unnoticed even when I have something useful to contribute.", "sty_A1": "I work well when there is cooperation and respect in the group.", "sty_A2": "I find it easy to put myself in other people’s place.", "sty_N1": "When something goes wrong, I can reorganise and try again.", "sty_N2": "Pressure or fear of making mistakes can block my decisions."}, "de": {"int_R1": "Assemble, repair or adjust objects, devices, tools or materials.", "int_R2": "Carry out practical tasks in workshops, technical labs, kitchens, facilities or outdoor spaces.", "int_R3": "Work with machines, vehicles, electrical systems, devices or technical equipment.", "int_R4": "Solve problems by observing what happens and trying concrete solutions.", "int_R5": "Care for animals, plants, natural spaces, facilities or material resources.", "int_R6": "Learn a profession through guided practice, demonstrations and direct experience.", "int_I1": "Investigate why things happen and look for explanations based on data.", "int_I2": "Analyse complex problems, detect patterns and compare possible solutions.", "int_I3": "Study scientific, technological, health, mathematical or social topics in depth.", "int_I4": "Design experiments, review reliable information or test hypotheses.", "int_I5": "Program, calculate, interpret graphs, use databases or work with technical information.", "int_I6": "Read, research and understand demanding topics before making a decision.", "int_A1": "Create texts, images, videos, music, presentations, stories or visual proposals.", "int_A2": "Design objects, spaces, digital materials, clothing, posters, games or experiences.", "int_A3": "Express ideas in a personal, original or aesthetic way.", "int_A4": "Work on projects with creative freedom and room to propose my own solutions.", "int_A5": "Perform, act, speak in public, take photographs, edit or produce content.", "int_A6": "Find different ways to present an idea so that it is clearer, more attractive or more moving.", "int_S1": "Help other people learn, improve, solve difficulties or make decisions.", "int_S2": "Listen, support, explain or mediate when someone has a problem.", "int_S3": "Work in education, health, social intervention, guidance, care or community support.", "int_S4": "Take part in projects that have a positive impact on people or groups.", "int_S5": "Coordinate activities with children, adolescents, families, older people or diverse groups.", "int_S6": "Communicate content in an approachable way so that other people understand it.", "int_E1": "Organise projects, suggest initiatives and persuade other people about an idea.", "int_E2": "Lead teams, distribute tasks, negotiate goals or make quick decisions.", "int_E3": "Create a business, manage a brand, sell products or present proposals to clients.", "int_E4": "Take part in debates, campaigns, commercial activities, events or visible projects.", "int_E5": "Take responsibility when people or resources need to be coordinated.", "int_E6": "Work in dynamic contexts with goals, results and influence.", "int_C1": "Organise documents, data, schedules, budgets, inventories or files.", "int_C2": "Follow clear procedures and check that everything is correct before submitting it.", "int_C3": "Manage administrative, accounting, legal, logistical or customer-service information.", "int_C4": "Work with spreadsheets, forms, databases or filing systems.", "int_C5": "Plan tasks with order, deadlines and defined criteria.", "int_C6": "Carry out work that requires accuracy, consistency and attention to detail.", "hab_R1": "I learn well when I can watch a demonstration and then practise.", "hab_R2": "I am reasonably good at handling objects, tools, materials or practical technology.", "hab_R3": "I usually have patience to try material solutions until something works.", "hab_I1": "I understand abstract ideas when I can analyse them step by step.", "hab_I2": "I am good at searching for information, comparing sources and drawing conclusions.", "hab_I3": "I can focus on difficult problems even when they take time.", "hab_A1": "I find it easy to imagine, design, write, draw, edit or suggest original ideas.", "hab_A2": "I can adapt an explanation, image or presentation so that it becomes attractive.", "hab_A3": "I feel able to work without excessively closed instructions.", "hab_S1": "I find it easy to listen, explain and help others without losing calm.", "hab_S2": "I can work with very different people and adapt the way I communicate.", "hab_S3": "When someone does not understand something, I usually look for another way to explain it.", "hab_E1": "I see myself able to take initiative when a group needs organisation.", "hab_E2": "I can defend an idea with arguments and speak confidently in front of others.", "hab_E3": "It feels natural to suggest goals, distribute tasks or seek results.", "hab_C1": "I can keep notes, files, data or tasks organised.", "hab_C2": "I detect errors when I review documents, calculations, instructions or lists.", "hab_C3": "I adapt well to rules, procedures and deadlines when they are clear.", "val_R1": "I prefer to see concrete results from my work rather than stay only with theoretical ideas.", "val_I1": "I am attracted to studies or jobs where I can keep learning in depth for years.", "val_A1": "I need my future to include some space for creativity, expression or design.", "val_S1": "It matters to me that my future activity is useful to other people.", "val_E1": "I am motivated by growth, leadership, entrepreneurship or influence.", "val_C1": "I value stability, order, security and knowing what is expected of me.", "val_R2": "I would prefer training with a lot of practice, equipment, workshop, laboratory or simulations.", "val_I2": "I would accept demanding studies if they help me understand complex topics or access qualified professions.", "val_A2": "I would feel demotivated by a pathway where everything was routine and I could hardly contribute my own ideas.", "val_S2": "I see myself better in an environment with human contact than in one focused almost only on objects or documents.", "val_E2": "I am attracted to challenges with visible goals, recognition or the possibility of progress.", "val_C2": "I would feel comfortable in a job with method, procedures and documentary responsibility.", "sty_O1": "I enjoy learning new topics even if they seem difficult at first.", "sty_O2": "I like connecting ideas from different subjects or fields.", "sty_R1": "When a task matters to me, I usually work hard until it is well finished.", "sty_R2": "I need to improve my consistency when tasks are long or not very motivating.", "sty_E1": "I feel able to express opinions or ask questions in front of other people.", "sty_E2": "I prefer to go unnoticed even when I have something useful to contribute.", "sty_A1": "I work well when there is cooperation and respect in the group.", "sty_A2": "I find it easy to put myself in other people’s place.", "sty_N1": "When something goes wrong, I can reorganise and try again.", "sty_N2": "Pressure or fear of making mistakes can block my decisions."}};
const DIM_TEXT = {"gl": {"R": {"name": "Realista", "description": "Preferencia por actividades prácticas, técnicas, manuais, mecánicas ou relacionadas con obxectos, ferramentas e solucións tanxibles."}, "I": {"name": "Investigadora", "description": "Preferencia por analizar, investigar, comprender datos e resolver problemas complexos con rigor."}, "A": {"name": "Artística", "description": "Preferencia pola creación, expresión, deseño, comunicación estética e propostas orixinais."}, "S": {"name": "Social", "description": "Preferencia por axudar, ensinar, acompañar, coidar, orientar ou traballar con persoas."}, "E": {"name": "Emprendedora", "description": "Preferencia por liderar, convencer, organizar proxectos, emprender ou influír en decisións."}, "C": {"name": "Convencional", "description": "Preferencia por tarefas ordenadas, procedementos claros, datos, documentos, precisión e organización."}}, "es": {"R": {"name": "Realista", "description": "Preferencia por actividades prácticas, técnicas, manuales, mecánicas o relacionadas con objetos, herramientas y soluciones tangibles."}, "I": {"name": "Investigadora", "description": "Preferencia por analizar, investigar, comprender datos y resolver problemas complejos con rigor."}, "A": {"name": "Artística", "description": "Preferencia por la creación, expresión, diseño, comunicación estética y propuestas originales."}, "S": {"name": "Social", "description": "Preferencia por ayudar, enseñar, acompañar, cuidar, orientar o trabajar con personas."}, "E": {"name": "Emprendedora", "description": "Preferencia por liderar, convencer, organizar proyectos, emprender o influir en decisiones."}, "C": {"name": "Convencional", "description": "Preferencia por tareas ordenadas, procedimientos claros, datos, documentos, precisión y organización."}}, "en": {"R": {"name": "Realistic", "description": "Preference for practical, technical, manual or mechanical activities involving objects, tools and tangible solutions."}, "I": {"name": "Investigative", "description": "Preference for analysing, researching, understanding data and solving complex problems rigorously."}, "A": {"name": "Artistic", "description": "Preference for creation, expression, design, aesthetic communication and original proposals."}, "S": {"name": "Social", "description": "Preference for helping, teaching, supporting, caring, guiding or working with people."}, "E": {"name": "Enterprising", "description": "Preference for leading, persuading, organising projects, entrepreneurship or influencing decisions."}, "C": {"name": "Conventional", "description": "Preference for orderly tasks, clear procedures, data, documents, accuracy and organisation."}}, "pt": {"R": {"name": "Realistic", "description": "Preference for practical, technical, manual or mechanical activities involving objects, tools and tangible solutions."}, "I": {"name": "Investigative", "description": "Preference for analysing, researching, understanding data and solving complex problems rigorously."}, "A": {"name": "Artistic", "description": "Preference for creation, expression, design, aesthetic communication and original proposals."}, "S": {"name": "Social", "description": "Preference for helping, teaching, supporting, caring, guiding or working with people."}, "E": {"name": "Enterprising", "description": "Preference for leading, persuading, organising projects, entrepreneurship or influencing decisions."}, "C": {"name": "Conventional", "description": "Preference for orderly tasks, clear procedures, data, documents, accuracy and organisation."}}, "fr": {"R": {"name": "Realistic", "description": "Preference for practical, technical, manual or mechanical activities involving objects, tools and tangible solutions."}, "I": {"name": "Investigative", "description": "Preference for analysing, researching, understanding data and solving complex problems rigorously."}, "A": {"name": "Artistic", "description": "Preference for creation, expression, design, aesthetic communication and original proposals."}, "S": {"name": "Social", "description": "Preference for helping, teaching, supporting, caring, guiding or working with people."}, "E": {"name": "Enterprising", "description": "Preference for leading, persuading, organising projects, entrepreneurship or influencing decisions."}, "C": {"name": "Conventional", "description": "Preference for orderly tasks, clear procedures, data, documents, accuracy and organisation."}}, "pl": {"R": {"name": "Realistic", "description": "Preference for practical, technical, manual or mechanical activities involving objects, tools and tangible solutions."}, "I": {"name": "Investigative", "description": "Preference for analysing, researching, understanding data and solving complex problems rigorously."}, "A": {"name": "Artistic", "description": "Preference for creation, expression, design, aesthetic communication and original proposals."}, "S": {"name": "Social", "description": "Preference for helping, teaching, supporting, caring, guiding or working with people."}, "E": {"name": "Enterprising", "description": "Preference for leading, persuading, organising projects, entrepreneurship or influencing decisions."}, "C": {"name": "Conventional", "description": "Preference for orderly tasks, clear procedures, data, documents, accuracy and organisation."}}, "de": {"R": {"name": "Realistic", "description": "Preference for practical, technical, manual or mechanical activities involving objects, tools and tangible solutions."}, "I": {"name": "Investigative", "description": "Preference for analysing, researching, understanding data and solving complex problems rigorously."}, "A": {"name": "Artistic", "description": "Preference for creation, expression, design, aesthetic communication and original proposals."}, "S": {"name": "Social", "description": "Preference for helping, teaching, supporting, caring, guiding or working with people."}, "E": {"name": "Enterprising", "description": "Preference for leading, persuading, organising projects, entrepreneurship or influencing decisions."}, "C": {"name": "Conventional", "description": "Preference for orderly tasks, clear procedures, data, documents, accuracy and organisation."}}};
const GLOSSARY = {"gl": {"orientación": "Proceso de axuda para tomar decisións educativas ou profesionais con máis información.", "vocacional": "Relacionado cos intereses, motivacións e vías de futuro dunha persoa.", "itinerario": "Camiño formativo ou profesional que se pode seguir.", "compatibilidade": "Grao de axuste inicial entre o perfil obtido e unha opción.", "perfil": "Resumo ordenado das respostas dunha persoa.", "baremo": "Comparación cun grupo normativo. LUMEN-V aínda non emprega baremos.", "hipótese": "Idea inicial que debe contrastarse, non conclusión definitiva."}, "es": {"orientación": "Proceso de ayuda para tomar decisiones educativas o profesionales con más información.", "vocacional": "Relacionado con los intereses, motivaciones y vías de futuro de una persona.", "itinerario": "Camino formativo o profesional que se puede seguir.", "compatibilidad": "Grado de ajuste inicial entre el perfil obtenido y una opción.", "perfil": "Resumen ordenado de las respuestas de una persona.", "baremo": "Comparación con un grupo normativo. LUMEN-V todavía no usa baremos.", "hipótesis": "Idea inicial que debe contrastarse, no conclusión definitiva."}, "en": {"guidance": "Support process for making educational or professional decisions with better information.", "vocational": "Related to a person’s interests, motivations and future pathways.", "pathway": "Educational or professional route that can be explored.", "compatibility": "Initial degree of fit between the profile and an option.", "profile": "Structured summary of a person’s answers.", "norm": "Comparison with a reference group. LUMEN-V does not yet use norms.", "hypothesis": "Initial idea to be checked, not a final conclusion."}, "pt": {"guidance": "Support process for making educational or professional decisions with better information.", "vocational": "Related to a person’s interests, motivations and future pathways.", "pathway": "Educational or professional route that can be explored.", "compatibility": "Initial degree of fit between the profile and an option.", "profile": "Structured summary of a person’s answers.", "norm": "Comparison with a reference group. LUMEN-V does not yet use norms.", "hypothesis": "Initial idea to be checked, not a final conclusion."}, "fr": {"guidance": "Support process for making educational or professional decisions with better information.", "vocational": "Related to a person’s interests, motivations and future pathways.", "pathway": "Educational or professional route that can be explored.", "compatibility": "Initial degree of fit between the profile and an option.", "profile": "Structured summary of a person’s answers.", "norm": "Comparison with a reference group. LUMEN-V does not yet use norms.", "hypothesis": "Initial idea to be checked, not a final conclusion."}, "pl": {"guidance": "Support process for making educational or professional decisions with better information.", "vocational": "Related to a person’s interests, motivations and future pathways.", "pathway": "Educational or professional route that can be explored.", "compatibility": "Initial degree of fit between the profile and an option.", "profile": "Structured summary of a person’s answers.", "norm": "Comparison with a reference group. LUMEN-V does not yet use norms.", "hypothesis": "Initial idea to be checked, not a final conclusion."}, "de": {"guidance": "Support process for making educational or professional decisions with better information.", "vocational": "Related to a person’s interests, motivations and future pathways.", "pathway": "Educational or professional route that can be explored.", "compatibility": "Initial degree of fit between the profile and an option.", "profile": "Structured summary of a person’s answers.", "norm": "Comparison with a reference group. LUMEN-V does not yet use norms.", "hypothesis": "Initial idea to be checked, not a final conclusion."}};

const state = {
  lang: "gl",
  current: 0,
  answers: {},
  context: {},
  autoTimer: null
};

function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
}
function scaleLabels() { return t("scale") || I18N.en.scale; }
function dimName(dim) { return (DIM_TEXT[state.lang] || DIM_TEXT.en)[dim].name; }
function dimDesc(dim) { return (DIM_TEXT[state.lang] || DIM_TEXT.en)[dim].description; }
function qText(item) {
  const pack = ITEM_TEXTS[state.lang] || ITEM_TEXTS.en;
  return pack[item.id] || ITEM_TEXTS.es[item.id] || item.text;
}
function orderedItems() {
  const sequence = ["interests","skills","values","style"];
  const result = [];
  sequence.forEach(section => {
    const list = ITEMS.filter(i => i.section === section);
    if (section === "style") { result.push(...list); return; }
    const dims = ["S","R","I","C","A","E"];
    const max = Math.max(...dims.map(d => list.filter(i => i.dim === d).length));
    for (let idx=0; idx<max; idx++) dims.forEach(d => {
      const item = list.filter(i => i.dim === d)[idx];
      if (item) result.push(item);
    });
  });
  return result;
}
const ORDERED_ITEMS = orderedItems();

function applyZoom(value) {
  const zoomMap = { small: 0.92, normal: 1, large: 1.08 };
  const factor = zoomMap[value] || 1;
  document.documentElement.style.fontSize = `${factor * 100}%`;
}

function applyI18n() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t(key)) el.textContent = t(key);
  });
  if (document.getElementById("start") && document.getElementById("consent")) document.getElementById("start").disabled = !document.getElementById("consent").checked;
  renderQuestion();
  updateProgress();
  if (!document.getElementById("result-screen").hidden) renderReport();
  glossify(document.body);
}

function glossify(root) {
  document.querySelectorAll(".gloss").forEach(el => el.replaceWith(document.createTextNode(el.textContent)));
  if (!document.getElementById("literal-help").checked) return;
  const terms = GLOSSARY[state.lang] || GLOSSARY.en;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement.closest("script,style,select,option,input,textarea,button,.gloss")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    let text = node.nodeValue;
    let replaced = false;
    const frag = document.createDocumentFragment();
    const pattern = new RegExp("\\b(" + Object.keys(terms).map(escapeRegExp).join("|") + ")\\b", "gi");
    let last=0, m;
    while ((m = pattern.exec(text))) {
      replaced = true;
      frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      const span = document.createElement("span");
      span.className = "gloss";
      span.textContent = m[0];
      span.dataset.gloss = terms[m[0].toLowerCase()] || terms[Object.keys(terms).find(k => k.toLowerCase()===m[0].toLowerCase())];
      frag.appendChild(span);
      last = m.index + m[0].length;
    }
    if (replaced) {
      frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    }
  });
}
function escapeRegExp(str) { return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

function startApp() {
  closeFooterPanels();
  document.getElementById("app").hidden = false;
  document.getElementById("context-screen").hidden = false;
  document.getElementById("question-screen").hidden = true;
  document.getElementById("result-screen").hidden = true;
  document.getElementById("app").scrollIntoView({behavior:"smooth", block:"start"});
}
function collectContext() {
  ["studentName","stage","likedSubjects","difficultSubjects","preferredRoute","studyHorizon","barriers"].forEach(id => state.context[id] = document.getElementById(id).value.trim());
}
function goQuestions() {
  collectContext();
  document.getElementById("context-screen").hidden = true;
  document.getElementById("question-screen").hidden = false;
  state.current = 0;
  renderQuestion();
  updateProgress();
}
function sectionLabel(item) {
  return t("section_" + item.section);
}
function renderQuestion() {
  const screen = document.getElementById("question-screen");
  if (screen.hidden) return;
  const item = ORDERED_ITEMS[state.current];
  if (!item) return;
  document.getElementById("question-section").textContent = sectionLabel(item);
  document.getElementById("question-number").textContent = state.current + 1;
  document.getElementById("question-progress").textContent = `${t("question")} ${state.current + 1} ${t("of")} ${ORDERED_ITEMS.length}`;
  document.getElementById("question-text").textContent = qText(item);
  const labels = scaleLabels();
  const selected = state.answers[item.id];
  const wrap = document.getElementById("scale-buttons");
  wrap.innerHTML = labels.map((label, idx) => {
    const val = idx + 1;
    return `<button type="button" class="scale-button ${selected===val?"is-selected":""}" data-value="${val}"><strong>${val}</strong><span>${escapeHtml(label)}</span></button>`;
  }).join("");
  wrap.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
    const value = Number(btn.dataset.value);
    state.answers[item.id] = value;
    clearTimeout(state.autoTimer);
    renderQuestion();
    updateProgress();
    const questionIndex = state.current;
    state.autoTimer = setTimeout(() => {
      if (state.current !== questionIndex) return;
      if (questionIndex < ORDERED_ITEMS.length - 1) {
        state.current += 1;
        renderQuestion();
        updateProgress();
      } else {
        calculateAndShow();
      }
    }, 180);
  }));
  document.getElementById("prev-question").disabled = state.current === 0;
  document.getElementById("next-question").textContent = state.current === ORDERED_ITEMS.length - 1 ? t("resultsTitle") : t("next");
  glossify(document.getElementById("question-screen"));
}
function nextQuestion() {
  clearTimeout(state.autoTimer);
  const item = ORDERED_ITEMS[state.current];
  if (!state.answers[item.id]) {
    alert(t("scaleIntro"));
    return;
  }
  if (state.current < ORDERED_ITEMS.length - 1) {
    state.current += 1;
    renderQuestion();
  } else {
    calculateAndShow();
  }
  updateProgress();
}
function prevQuestion() {
  clearTimeout(state.autoTimer);
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
    updateProgress();
  }
}
function updateProgress() {
  const answered = ORDERED_ITEMS.filter(item => state.answers[item.id]).length;
  const percent = Math.round((answered / ORDERED_ITEMS.length) * 100);
  document.getElementById("progress-label").textContent = `${percent} %`;
  document.getElementById("progress-bar").style.width = `${percent}%`;
  document.getElementById("progress-detail").textContent = `${answered} / ${ORDERED_ITEMS.length}`;
}

function mean(values) { return values.length ? values.reduce((a,b)=>a+b,0)/values.length : 0; }
function scoreDimension(section, dim) {
  const vals = ITEMS.filter(i => i.section === section && i.dim === dim).map(i => state.answers[i.id]);
  return ((mean(vals) - 1) / 4) * 100;
}
function scoreStyle() {
  const result={};
  ["apertura","responsabilidad","asertividad","cooperacion","gestion"].forEach(sd => {
    const vals = ITEMS.filter(i => i.section==="style" && i.styleDim===sd).map(i => {
      const raw = state.answers[i.id];
      return i.reverse ? 6 - raw : raw;
    });
    result[sd] = Math.round(((mean(vals)-1)/4)*100);
  });
  return result;
}
function calculateScores() {
  const interests={}, skills={}, values={}, global={};
  HEX_ORDER.forEach(dim => {
    interests[dim]=scoreDimension("interests", dim);
    skills[dim]=scoreDimension("skills", dim);
    values[dim]=scoreDimension("values", dim);
    global[dim]=Math.round(interests[dim]*0.55 + skills[dim]*0.25 + values[dim]*0.20);
  });
  const ranking = HEX_ORDER.map(dim => ({dim, score:global[dim]})).sort((a,b)=>b.score-a.score);
  return {interests, skills, values, global, ranking, style: scoreStyle()};
}
function cosine(a,b) {
  let dot=0, na=0, nb=0; HEX_ORDER.forEach(d=>{dot += a[d]*b[d]; na += a[d]*a[d]; nb += b[d]*b[d];});
  return (!na || !nb) ? 0 : dot/(Math.sqrt(na)*Math.sqrt(nb));
}
function euclideanScore(a,b) {
  const sum = HEX_ORDER.reduce((acc,d)=> acc + Math.pow(a[d]-b[d],2), 0);
  return Math.max(0, 1 - (Math.sqrt(sum) / Math.sqrt(6*10000)));
}
function matchPathways(scores) {
  return PATHWAYS.map(p => {
    const match = Math.round((cosine(scores.global,p.vector)*0.62 + cosine(scores.interests,p.vector)*0.23 + euclideanScore(scores.global,p.vector)*0.15)*100);
    return {...p, match};
  }).sort((a,b)=>b.match-a.match);
}
function differentiation(global) {
  const vals = Object.values(global).sort((a,b)=>b-a);
  return Math.round(vals[0] - vals[2]);
}
function getDiffText(v) {
  if (v >= 45) return state.lang==="es" ? "perfil muy diferenciado" : state.lang==="gl" ? "perfil moi diferenciado" : "highly differentiated profile";
  if (v >= 30) return state.lang==="es" ? "perfil diferenciado" : state.lang==="gl" ? "perfil diferenciado" : "differentiated profile";
  if (v >= 18) return state.lang==="es" ? "perfil moderadamente diferenciado" : state.lang==="gl" ? "perfil moderadamente diferenciado" : "moderately differentiated profile";
  return state.lang==="es" ? "perfil poco diferenciado" : state.lang==="gl" ? "perfil pouco diferenciado" : "less differentiated profile";
}
function renderScoreBars(scores) {
  return `<div class="score-bars">${scores.ranking.map(r => `<div class="score-line"><strong>${r.dim} · ${dimName(r.dim)}</strong><div class="bar"><span style="width:${r.score}%"></span></div><span>${r.score}</span></div>`).join("")}</div>`;
}
function reportDate() {
  const loc = state.lang==="gl" ? "gl-ES" : state.lang==="es" ? "es-ES" : state.lang==="pt" ? "pt-PT" : state.lang==="fr" ? "fr-FR" : state.lang==="pl" ? "pl-PL" : state.lang==="de" ? "de-DE" : "en-GB";
  return new Intl.DateTimeFormat(loc, {day:"2-digit", month:"2-digit", year:"numeric"}).format(new Date());
}
function list(items) { return `<ul>${items.map(x=>`<li>${x}</li>`).join("")}</ul>`; }
function renderReport() {
  const scores = calculateScores();
  const matches = matchPathways(scores);
  const top = scores.ranking.slice(0,3);
  const topCode = top.map(x=>x.dim).join("");
  const topNames = top.map(x=>dimName(x.dim)).join(" + ");
  const diff = differentiation(scores.global);
  const best = matches[0], second = matches[1];
  const strengths = top.map(r => `${dimName(r.dim)} (${r.score}/100): ${dimDesc(r.dim)}`);
  const dev = scores.ranking.slice(-2).reverse().map(r => `${dimName(r.dim)} (${r.score}/100): ${state.lang==="gl"?"menor axuste inicial ou menor atracción relativa":state.lang==="es"?"menor ajuste inicial o menor atracción relativa":"lower initial fit or relative attraction"}.`);
  const high = matches.slice(0,6);
  const moderate = matches.slice(6,10);
  const low = matches.slice(-4).reverse();
  document.getElementById("report").innerHTML = `
    <div class="report-print-header">
      <div class="report-print-header__brand"><img src="assets/lumen-v-symbol.png" alt="LUMEN-V"><div><p class="report-print-header__eyebrow">LUMEN-V</p><h3>${t("resultsTitle")}</h3><p>${t("reportMeta")}</p></div></div>
      <div><p><strong>${t("date")}:</strong> ${reportDate()}</p><p><strong>${t("student")}:</strong> ${escapeHtml(state.context.studentName || t("notGiven"))}</p></div>
    </div>
    <div class="report-card">
      <h2>${t("summary")}</h2>
      <p>${t("summaryText")}</p>
      <div class="summary-grid">
        <div class="tile"><strong>${t("vocCode")}</strong><h2>${topCode}</h2><p>${topNames}</p></div>
        <div class="tile"><strong>${t("bestMatch")}</strong><h3>${escapeHtml(best.title)}</h3><p><span class="badge">${best.match}%</span></p></div>
        <div class="tile"><strong>${t("secondRoute")}</strong><h3>${escapeHtml(second.title)}</h3><p><span class="badge">${second.match}%</span></p></div>
      </div>
    </div>
    <div class="report-card"><h3>${t("profileReading")}</h3><p>${getDiffText(diff)}. ${t("profile")}:</p>${renderScoreBars(scores)}</div>
    <div class="report-card"><h3>${t("strengths")}</h3>${list(strengths.map(escapeHtml))}</div>
    <div class="report-card"><h3>${t("development")}</h3>${list(dev.map(escapeHtml))}</div>
    <div class="report-card"><h3>${t("high")}</h3>${renderPathways(high)}</div>
    <div class="report-card"><h3>${t("moderate")}</h3>${renderPathways(moderate)}</div>
    <div class="report-card"><h3>${t("low")}</h3><p>${t("lowNote")}</p>${renderPathways(low)}</div>
    <div class="report-card"><h3>${t("calc")}</h3><p>${t("calcText")}</p></div>
    <div class="report-card"><h3>${t("context")}</h3>
      <p><strong>${t("stage")}:</strong> ${escapeHtml(state.context.stage || t("notGiven"))}</p>
      <p><strong>${t("likedSubjects")}:</strong> ${escapeHtml(state.context.likedSubjects || t("notGiven"))}</p>
      <p><strong>${t("difficultSubjects")}:</strong> ${escapeHtml(state.context.difficultSubjects || t("notGiven"))}</p>
      <p><strong>${t("preferredRoute")}:</strong> ${escapeHtml(state.context.preferredRoute || t("notGiven"))}</p>
      <p><strong>${t("studyHorizon")}:</strong> ${escapeHtml(state.context.studyHorizon || t("notGiven"))}</p>
      <p><strong>${t("barriers")}:</strong> ${escapeHtml(state.context.barriers || t("notGiven"))}</p>
    </div>`;
  glossify(document.getElementById("report"));
}
function renderPathways(list) {
  return `<div class="pathway-list">${list.map(p => `<article class="tile"><h3>${escapeHtml(p.title)} <span class="badge">${p.match}%</span></h3><p>${escapeHtml(p.notes)}</p><p><strong>${state.lang==="gl"?"Puestos":state.lang==="es"?"Puestos":"Jobs"}:</strong> ${p.jobs.slice(0,5).map(escapeHtml).join(", ")}</p></article>`).join("")}</div>`;
}
function calculateAndShow() {
  document.getElementById("question-screen").hidden = true;
  document.getElementById("result-screen").hidden = false;
  renderReport();
  document.getElementById("result-screen").scrollIntoView({behavior:"smooth", block:"start"});
}
function resetAll() {
  if (!confirm(state.lang==="gl" ? "Borrar todas as respostas?" : state.lang==="es" ? "¿Borrar todas las respuestas?" : "Delete all answers?")) return;
  state.answers={}; state.current=0; state.context={};
  ["studentName","stage","likedSubjects","difficultSubjects","preferredRoute","studyHorizon","barriers"].forEach(id => document.getElementById(id).value="");
  document.getElementById("context-screen").hidden=false;
  document.getElementById("question-screen").hidden=true;
  document.getElementById("result-screen").hidden=true;
  updateProgress();
  document.getElementById("app").scrollIntoView({behavior:"smooth"});
}
function escapeHtml(str) { return String(str).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }

function toggleAccessibilityPanel(force) {
  const panel = document.getElementById("accessibility-panel");
  const button = document.getElementById("accessibility-toggle");
  if (!panel || !button) return;
  const willOpen = typeof force === "boolean" ? force : panel.hidden;
  panel.hidden = !willOpen;
  button.setAttribute("aria-expanded", String(willOpen));
}

function closeFooterPanels() {
  document.querySelectorAll(".footer-panel").forEach(panel => panel.hidden = true);
  document.querySelectorAll(".footer__link").forEach(btn => btn.classList.remove("is-active"));
}

function openFooterPanel(id) {
  const panel = document.getElementById(id);
  if (!panel) return;
  const isHidden = panel.hidden;
  closeFooterPanels();
  if (isHidden) {
    panel.hidden = false;
    const trigger = document.querySelector(`[data-panel-target="${id}"]`);
    if (trigger) trigger.classList.add("is-active");
    panel.scrollIntoView({behavior:"smooth", block:"nearest"});
  }
}

function init() {
  const on = (id, event, handler) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener(event, handler);
  };

  on("language-select", "change", e => { state.lang = e.target.value; applyI18n(); });

  on("accessibility-toggle", "click", event => {
    event.stopPropagation();
    toggleAccessibilityPanel();
  });

  document.addEventListener("click", event => {
    const area = document.querySelector(".accessibility");
    if (area && !area.contains(event.target)) toggleAccessibilityPanel(false);
  });

  on("zoom-select", "change", e => {
    applyZoom(e.target.value);
    toggleAccessibilityPanel(false);
  });

  on("font-select", "change", e => {
    document.body.classList.remove("font-standard","font-comic","font-dyslexic");
    document.body.classList.add("font-" + e.target.value);
    toggleAccessibilityPanel(false);
  });

  on("literal-help", "change", () => {
    applyI18n();
    toggleAccessibilityPanel(false);
  });

  on("consent", "change", e => {
    const startButton = document.getElementById("start");
    if (startButton) startButton.disabled = !e.target.checked;
  });

  on("start", "click", startApp);

  on("science-toggle", "click", () => {
    const s = document.getElementById("science");
    if (!s) return;
    s.hidden = !s.hidden;
    if (!s.hidden) s.scrollIntoView({behavior:"smooth", block:"start"});
  });

  on("context-next", "click", goQuestions);
  on("next-question", "click", nextQuestion);
  on("prev-question", "click", prevQuestion);
  on("print-report", "click", () => window.print());
  on("reset", "click", resetAll);

  document.querySelectorAll("[data-panel-target]").forEach(btn => {
    btn.addEventListener("click", event => {
      event.preventDefault();
      openFooterPanel(btn.dataset.panelTarget);
    });
  });

  document.querySelectorAll("[data-close-panel]").forEach(btn => {
    btn.addEventListener("click", event => {
      event.preventDefault();
      closeFooterPanels();
    });
  });

  const zoomSelect = document.getElementById("zoom-select");
  if (zoomSelect) applyZoom(zoomSelect.value);
  applyI18n();
}
document.addEventListener("DOMContentLoaded", init);
