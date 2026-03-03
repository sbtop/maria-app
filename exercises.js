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
        tags: ["funcional"],
        instructions: "1. Sujeta una mancuerna verticalmente frente al pecho.\n2. Mantén los codos hacia adentro y baja la cadera.\n3. Mantén la espalda recta y el peso en los talones."
    },
    {
        id: "zancadas_mancuerna",
        name: "Zancadas con Mancuernas",
        muscle: "Piernas completo",
        equip: "Mancuerna",
        category: "Pierna",
        tags: ["equilibrio"],
        instructions: "1. Sujeta una mancuerna en cada mano a los costados.\n2. Da un paso largo al frente bajando la rodilla trasera.\n3. Mantén el torso erguido y no dejes que la rodilla delantera pase la punta del pie."
    },
    {
        id: "peso_muerto_rumano_mancuerna",
        name: "Peso Muerto Rumano (Mancuernas)",
        muscle: "Isquiotibiales/Glúteo",
        equip: "Mancuerna",
        category: "Pierna",
        tags: ["fuerza"],
        instructions: "1. Sujeta las mancuernas frente a tus muslos.\n2. Baja el torso llevando la cadera hacia atrás con las rodillas ligeramente flexionadas.\n3. Baja hasta sentir el estiramiento en los isquios y sube apretando el glúteo."
    },
    {
        id: "press_militar_mancuerna",
        name: "Press Militar (Mancuerna)",
        muscle: "Hombros",
        equip: "Mancuerna",
        category: "Hombro",
        tags: ["fuerza"],
        instructions: "1. Siéntate o quédate de pie con las mancuernas a la altura de las orejas.\n2. Empuja verticalmente hasta estirar los brazos.\n3. Baja lentamente controlando el peso."
    },
    {
        id: "remo_mancuerna_un_brazo",
        name: "Remo a un brazo (Mancuerna)",
        muscle: "Espalda",
        equip: "Mancuerna",
        category: "Espalda",
        tags: ["densidad"],
        instructions: "1. Apoya una mano y rodilla en un banco.\n2. Sujeta la mancuerna con el brazo libre.\n3. Tira de la mancuerna hacia tu cadera, llevando el codo bien atrás."
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
