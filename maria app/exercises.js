const exerciseDatabase = [
    // Piernas & Glúteos
    { id: "prensa", name: "Prensa de piernas", muscle: "Cuádriceps/Glúteo", equip: "Máquina", category: "Pierna", tags: ["fuerza", "hipertrofia"], hasImg: true },
    { id: "curl_femoral", name: "Curl femoral", muscle: "Isquiotibiales", equip: "Máquina", category: "Pierna", tags: ["aislamiento"], hasImg: true },
    { id: "extension_piernas", name: "Extensión de piernas", muscle: "Cuádriceps", equip: "Máquina", category: "Pierna", tags: ["aislamiento"], hasImg: true },
    { id: "abductores", name: "Abductores", muscle: "Glúteo Medio", equip: "Máquina", category: "Glúteo", tags: ["aislamiento"], hasImg: true },
    { id: "gluteo_maquina", name: "Glúteo en máquina", muscle: "Glúteo Mayor", equip: "Máquina", category: "Glúteo", tags: ["aislamiento"], hasImg: true },
    { id: "hip_thrust", name: "Hip thrust", muscle: "Glúteo Mayor", equip: "Barra/Banco", category: "Glúteo", tags: ["compuesto", "premium"], hasImg: true },
    { id: "prensa_pies_altos", name: "Prensa pies altos", muscle: "Glúteo/Isquios", equip: "Máquina", category: "Pierna", tags: ["variante"], hasImg: true },
    { id: "patada_gluteo", name: "Patada de glúteo", muscle: "Glúteo Mayor", equip: "Polea", category: "Glúteo", tags: ["aislamiento"], hasImg: true },
    { id: "sentadilla_goblet", name: "Sentadilla Goblet", muscle: "Cuádriceps/Glúteo", equip: "Mancuerna", category: "Pierna", tags: ["funcional"] },
    { id: "zancadas", name: "Zancadas", muscle: "Piernas completo", equip: "Mancuerna", category: "Pierna", tags: ["equilibrio"] },

    // Espalda & Pecho
    { id: "jalon_pecho", name: "Jalón al pecho", muscle: "Dorsales", equip: "Máquina", category: "Espalda", tags: ["tracción"], hasImg: true },
    { id: "remo_sentado", name: "Remo sentado", muscle: "Espalda Media", equip: "Máquina", category: "Espalda", tags: ["densidad"], hasImg: true },
    { id: "press_pecho", name: "Press de pecho", muscle: "Pectoral", equip: "Máquina", category: "Pecho", tags: ["empuje"], hasImg: true },
    { id: "aperturas", name: "Aperturas en máquina", muscle: "Pectoral", equip: "Máquina", category: "Pecho", tags: ["aislamiento"] },

    // Hombros & Brazos
    { id: "press_hombros", name: "Press de hombros", muscle: "Deltoides", equip: "Máquina", category: "Hombro", tags: ["empuje"], hasImg: true },
    { id: "elevaciones_laterales", name: "Elevaciones laterales", muscle: "Deltoide Lateral", equip: "Mancuerna", category: "Hombro", tags: ["estética"], hasImg: true },
    { id: "deltoide_posterior", name: "Deltoide posterior", muscle: "Deltoide Posterior", equip: "Máquina", category: "Hombro", tags: ["postura"], hasImg: true },
    { id: "biceps_maquina", name: "Bíceps en máquina", muscle: "Bíceps", equip: "Máquina", category: "Brazo", tags: ["aislamiento"], hasImg: true },
    { id: "triceps_polea", name: "Tríceps en polea", muscle: "Tríceps", equip: "Polea", category: "Brazo", tags: ["aislamiento"], hasImg: true },

    // Core & Cardio
    { id: "abdominal_maquina", name: "Abdominal máquina", muscle: "Core", equip: "Máquina", category: "Abdomen", tags: ["fuerza"] },
    { id: "plancha", name: "Plancha", muscle: "Core", equip: "Peso corporal", category: "Abdomen", tags: ["resistencia"] },
    { id: "eliptica", name: "Elíptica", muscle: "Cuerpo completo", equip: "Máquina", category: "Cardio", tags: ["quemacalorías"] },
    { id: "stairmaster", name: "Stairmaster", muscle: "Glúteos/Cardio", equip: "Máquina", category: "Cardio", tags: ["premium"] }
];

window.exerciseDatabase = exerciseDatabase;
