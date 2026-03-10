const exerciseDatabase = [
    // Piernas & Glúteos
    {
        id: "prensa",
        name: "Prensa de piernas",
        muscle: "Cuádriceps/Glúteo",
        equip: "Máquina",
        category: "Pierna",
        tags: ["fuerza", "hipertrofia"],
        hasImg: true,
        instructions: "1. Coloca los pies a la anchura de los hombros.\n2. Baja la plataforma controladamente hasta que tus rodillas formen un ángulo de 90 grados.\n3. Empuja con fuerza sin bloquear las rodillas al final."
    },
    {
        id: "curl_femoral",
        name: "Curl femoral",
        muscle: "Isquiotibiales",
        equip: "Máquina",
        category: "Pierna",
        tags: ["aislamiento"],
        hasImg: true,
        instructions: "1. Ajusta el rodillo sobre tus talones.\n2. Flexiona las piernas llevando los talones hacia el glúteo.\n3. Vuelve a la posición inicial lentamente manteniendo la tensión."
    },
    {
        id: "extension_piernas",
        name: "Extensión de piernas",
        muscle: "Cuádriceps",
        equip: "Máquina",
        category: "Pierna",
        tags: ["aislamiento"],
        hasImg: true,
        instructions: "1. Siéntate con la espalda bien apoyada.\n2. Extiende las piernas completamente y aprieta los cuádriceps.\n3. Baja con control evitando que las pesas choquen."
    },
    {
        id: "abductores",
        name: "Abductores",
        muscle: "Glúteo Medio",
        equip: "Máquina",
        category: "Glúteo",
        tags: ["aislamiento"],
        hasImg: true,
        instructions: "1. Ajusta el asiento y las almohadillas al exterior de las rodillas.\n2. Abre las piernas con fuerza hacia afuera.\n3. Cierra lentamente resistiendo el peso."
    },
    {
        id: "gluteo_maquina",
        name: "Glúteo en máquina",
        muscle: "Glúteo Mayor",
        equip: "Máquina",
        category: "Glúteo",
        tags: ["aislamiento"],
        hasImg: true,
        instructions: "1. Coloca el pie en la plataforma.\n2. Empuja hacia atrás concentrando el esfuerzo en el glúteo.\n3. No arquees la espalda baja durante el movimiento."
    },
    {
        id: "hip_thrust",
        name: "Hip thrust",
        muscle: "Glúteo Mayor",
        equip: "Barra/Banco",
        category: "Glúteo",
        tags: ["compuesto", "premium"],
        hasImg: true,
        instructions: "1. Apoya la espalda alta en un banco.\n2. Coloca la pesa sobre la cadera.\n3. Empuja hacia arriba con los talones y aprieta el glúteo 2 segundos."
    },

    // ESPECIAL MANCUERNAS (Dumbbells)
    {
        id: "sentadilla_goblet",
        name: "Sentadilla Goblet",
        muscle: "Cuádriceps/Glúteo",
        equip: "Mancuerna",
        category: "Pierna",
        tags: ["funcional", "básico"],
        instructions: "1. Sujeta una mancuerna verticalmente frente al pecho con ambas manos.\n2. Separa los pies a la anchura de los hombros con las puntas hacia afuera.\n3. Baja la cadera manteniendo la espalda recta y los codos por dentro de las rodillas.\n4. Empuja con los talones para volver a la posición inicial."
    },
    {
        id: "zancadas_mancuerna",
        name: "Zancadas con Mancuernas",
        muscle: "Piernas completo",
        equip: "Mancuerna",
        category: "Pierna",
        tags: ["equilibrio", "estabilidad"],
        instructions: "1. Sujeta una mancuerna en cada mano a los costados con los brazos extendidos.\n2. Da un paso largo al frente manteniendo el torso erguido.\n3. Baja la rodilla trasera hasta que casi toque el suelo (90 grados).\n4. Impúlsate hacia atrás para regresar a la posición de inicio."
    },
    {
        id: "peso_muerto_rumano_mancuerna",
        name: "Peso Muerto Rumano (Mancuernas)",
        muscle: "Isquiotibiales/Glúteo",
        equip: "Mancuerna",
        category: "Pierna",
        tags: ["fuerza", "cadena posterior"],
        instructions: "1. Sujeta las mancuernas frente a tus muslos con las palmas mirando hacia ti.\n2. Lleva la cadera hacia atrás manteniendo la espalda completamente plana.\n3. Baja las pesas pegadas a tus piernas hasta pasar las rodillas.\n4. Siente el estiramiento en los isquiotibiales y sube apretando el glúteo."
    },
    {
        id: "bulgarian_split_squat",
        name: "Sentadilla Búlgara",
        muscle: "Glúteo/Cuádriceps",
        equip: "Mancuerna",
        category: "Pierna",
        tags: ["unilateral", "premium"],
        instructions: "1. Apoya un pie atrás en un banco o silla y el otro al frente.\n2. Sujeta las mancuernas a los costados.\n3. Baja la cadera verticalmente hasta que la rodilla delantera forme 90 grados.\n4. Mantén el peso en el talón delantero y sube con control."
    },
    {
        id: "press_pecho_mancuerna",
        name: "Press de Pecho (Mancuernas)",
        muscle: "Pectoral/Tríceps",
        equip: "Mancuerna",
        category: "Pecho",
        tags: ["empuje", "fuerza"],
        instructions: "1. Túmbate en un banco con una mancuerna en cada mano sobre el pecho.\n2. Baja las pesas hacia los lados del pecho controladamente.\n3. Empuja hacia arriba extendiendo los brazos sin chocar las mancuernas.\n4. Mantén los pies apoyados y la espalda estable."
    },
    {
        id: "aperturas_pecho_mancuerna",
        name: "Aperturas de Pecho (Mancuerna)",
        muscle: "Pectoral Mayor",
        equip: "Mancuerna",
        category: "Pecho",
        tags: ["aislamiento", "estiramiento"],
        instructions: "1. Túmbate en un banco con las pesas juntas sobre tu cara.\n2. Abre los brazos en forma de arco manteniendo una ligera flexión de codo.\n3. Baja hasta sentir el estiramiento en el pectoral.\n4. Cierra los brazos usando el pecho para volver al inicio."
    },
    {
        id: "remo_mancuerna_un_brazo",
        name: "Remo a un brazo",
        muscle: "Espalda/Dorsal",
        equip: "Mancuerna",
        category: "Espalda",
        tags: ["densidad", "fuerza"],
        instructions: "1. Apoya una mano y la rodilla del mismo lado en un banco.\n2. Con el otro brazo, tira de la mancuerna hacia tu cadera.\n3. Mantén el codo pegado al cuerpo y aprieta la espalda al final.\n4. Baja el peso lentamente extendiendo el brazo por completo."
    },
    {
        id: "renegade_row",
        name: "Remo Renegado",
        muscle: "Espalda/Core",
        equip: "Mancuerna",
        category: "Espalda",
        tags: ["funcional", "core"],
        instructions: "1. Colócate en posición de plancha alta apoyado sobre las mancuernas.\n2. Realiza un remo con un brazo llevando la pesa a la cadera.\n3. Mantén la cadera paralela al suelo sin rotar el cuerpo.\n4. Alterna brazos manteniendo el abdomen muy firme."
    },
    {
        id: "press_militar_mancuerna",
        name: "Press Militar (Hombros)",
        muscle: "Hombros",
        equip: "Mancuerna",
        category: "Hombro",
        tags: ["empuje", "fuerza"],
        instructions: "1. Siéntate o de pie con las mancuernas a la altura de las orejas.\n2. Empuja verticalmente hasta que los brazos estén casi rectos.\n3. Baja lentamente controlando el peso hasta la posición inicial.\n4. Evita arquear la espalda baja durante el movimiento."
    },
    {
        id: "elevaciones_laterales",
        name: "Elevaciones Laterales",
        muscle: "Deltoide Lateral",
        equip: "Mancuerna",
        category: "Hombro",
        tags: ["aislamiento", "estética"],
        instructions: "1. Sujeta las mancuernas frente a tus muslos.\n2. Eleva los brazos hacia los lados hasta la altura de los hombros.\n3. Mantén una ligera flexión en los codos y el torso quieto.\n4. Baja el peso controlando la resistencia en todo momento."
    },
    {
        id: "elevaciones_frontales",
        name: "Elevaciones Frontales",
        muscle: "Deltoide Anterior",
        equip: "Mancuerna",
        category: "Hombro",
        tags: ["aislamiento"],
        instructions: "1. De pie, sujeta las mancuernas frente a tus muslos.\n2. Eleva una pesa al frente hasta la altura de los ojos.\n3. Baja con control y repite con el otro brazo.\n4. No uses el balanceo del cuerpo para subir el peso."
    },
    {
        id: "curls_biceps_mancuerna",
        name: "Curl de Bíceps",
        muscle: "Bíceps",
        equip: "Mancuerna",
        category: "Brazo",
        tags: ["aislamiento", "brazos"],
        instructions: "1. Sujeta las pesas con las palmas mirando al frente.\n2. Flexiona los codos llevando las pesas hacia los hombros.\n3. Aprieta el bíceps un segundo en la parte superior.\n4. Baja lentamente hasta estirar los brazos por completo."
    },
    {
        id: "hammer_curls",
        name: "Curl Martillo",
        muscle: "Bíceps/Braquial",
        equip: "Mancuerna",
        category: "Brazo",
        tags: ["aislamiento", "agarre"],
        instructions: "1. Sujeta las mancuernas con las palmas enfrentadas (agarre neutro).\n2. Flexiona los brazos manteniendo los codos pegados al torso.\n3. Sube las pesas hacia los hombros sin girar las muñecas.\n4. Baja con control manteniendo la tensión."
    },
    {
        id: "copa_triceps_mancuerna",
        name: "Extensión tras nuca (Copa)",
        muscle: "Tríceps",
        equip: "Mancuerna",
        category: "Brazo",
        tags: ["aislamiento", "estiramiento"],
        instructions: "1. Sujeta una mancuerna con ambas manos por encima de la cabeza.\n2. Baja la pesa por detrás de tu nuca flexionando los codos.\n3. Mantén los codos cerrados y apuntando hacia el techo.\n4. Extiende los brazos totalmente hacia arriba."
    },
    {
        id: "patada_triceps",
        name: "Patada de Tríceps",
        muscle: "Tríceps",
        equip: "Mancuerna",
        category: "Brazo",
        tags: ["aislamiento"],
        instructions: "1. Inclina el torso hacia adelante con la espalda recta.\n2. Mantén el codo pegado al costado y el brazo paralelo al suelo.\n3. Extiende el brazo hacia atrás bloqueando el tríceps.\n4. Regresa a la posición inicial sin mover el hombro."
    },

    // Espalda & Pecho
    { id: "jalon_pecho", name: "Jalón al pecho", muscle: "Dorsales", equip: "Máquina", category: "Espalda", tags: ["tracción"], hasImg: true, instructions: "Sujeta la barra ancho, tira hacia el pecho juntando escápulas." },
    { id: "remo_sentado", name: "Remo sentado", muscle: "Espalda Media", equip: "Máquina", category: "Espalda", tags: ["densidad"], hasImg: true, instructions: "Espalda recta, tira hacia el ombligo." },
    { id: "press_pecho", name: "Press de pecho", muscle: "Pectoral", equip: "Máquina", category: "Pecho", tags: ["empuje"], hasImg: true, instructions: "Empuja al frente con control total." },

    // Hombros & Brazos
    { id: "press_hombros", name: "Press de hombros", muscle: "Deltoides", equip: "Máquina", category: "Hombro", tags: ["empuje"], hasImg: true, instructions: "Empuja hacia arriba desde las orejas." },
    { id: "elevaciones_laterales", name: "Elevaciones laterales", muscle: "Deltoide Lateral", equip: "Mancuerna", category: "Hombro", tags: ["estética"], hasImg: true, instructions: "Eleva brazos a los lados con ligera flexión de codo." },
    { id: "deltoide_posterior", name: "Deltoide posterior", muscle: "Deltoide Posterior", equip: "Máquina", category: "Hombro", tags: ["postura"], hasImg: true, instructions: "Lleva brazos atrás en forma de arco." },
    { id: "biceps_maquina", name: "Bíceps en máquina", muscle: "Bíceps", equip: "Máquina", category: "Brazo", tags: ["aislamiento"], hasImg: true, instructions: "Flexiona codos apretando el bíceps." },
    { id: "triceps_polea", name: "Tríceps en polea", muscle: "Tríceps", equip: "Polea", category: "Brazo", tags: ["aislamiento"], hasImg: true, instructions: "Extiende brazos hacia abajo bloqueando codos." },

    // Core & Cardio
    { id: "abdominal_maquina", name: "Abdominal máquina", muscle: "Core", equip: "Máquina", category: "Abdomen", tags: ["fuerza"], instructions: "Contrae el abdomen al bajar." },
    { id: "plancha", name: "Plancha", muscle: "Core", equip: "Peso corporal", category: "Abdomen", tags: ["resistencia"], instructions: "Mantén el cuerpo recto y el abdomen apretado." },
    { id: "stairmaster", name: "Stairmaster", muscle: "Glúteos/Cardio", equip: "Máquina", category: "Cardio", tags: ["premium"], instructions: "Sube peldaños sin apoyarte en los laterales." }
];

window.exerciseDatabase = exerciseDatabase;
