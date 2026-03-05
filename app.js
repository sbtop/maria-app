// Global Error Handler - MOVED TO TOP to catch everything
window.onerror = function (msg, url, line) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = "position:fixed; top:0; left:0; width:100%; background:rgba(255,0,0,0.9); color:white; font-size:12px; z-index:9999; padding:10px; text-align:center;";
    errorDiv.innerText = "⚠️ ERROR: " + msg + " (Línea: " + line + ")";
    if (document.body) document.body.appendChild(errorDiv);
    return false;
};

console.log("Maria App v5 Loading...");

const exerciseImages = {
    "Prensa de piernas": "images/real_prensa_piernas_diagram.png",
    "Jalón al pecho": "images/real_jalon_pecho_diagram.png",
    "Curl femoral": "images/real_curl_femoral_diagram.png",
    "Hip thrust": "images/real_hip_thrust_diagram.png",
    "Glúteo en máquina": "images/real_gluteo_maquina_diagram.png",
    "Extensión de piernas": "images/real_extension_piernas_diagram.png",
    "Abductores": "images/abductores.webp",
    "Remo sentado": "images/remo_sentado.jpg",
    "Bíceps en máquina": "images/biceps_maquina.png",
    "Tríceps en polea": "",
    "Deltoide posterior": "",
    "Press de pecho": "",
    "Press de hombros": "",
    "Elevaciones laterales": "",
    "Patada de glúteo": "",
    "Prensa pies altos": ""
};

const modalDescriptions = {
    "Prensa de piernas": "Coloca los pies a la anchura de los hombros. Baja la plataforma controladamente hasta que tus rodillas formen un ángulo de 90 grados y empuja con fuerza sin bloquear las rodillas.",
    "Jalón al pecho": "Sujeta la barra más ancho que tus hombros. Lleva la barra hacia la parte superior del pecho contrayendo la espalda, evitando balanceos con el cuerpo.",
    "Curl femoral": "Ajusta el rodillo sobre tus talones. Flexiona las piernas llevando los talones hacia el glúteo y vuelve a la posición inicial lentamente.",
    "Hip thrust": "Apoya la parte alta de la espalda en el banco. Empuja la cadera hacia arriba con los talones hasta que tu cuerpo esté alineado, apretando fuerte el glúteo.",
    "Glúteo en máquina": "Sujeta los agarres y mantén el core firme. Empuja la plataforma hacia atrás con el talón concentrando todo el esfuerzo en el glúteo.",
    "Extensión de piernas": "Siéntate con la espalda bien apoyada. Extiende las piernas completamente y aprieta los cuádriceps un segundo antes de bajar con control.",
    "Abductores": "Ajusta las almohadillas en la parte exterior de tus rodillas. Abre las piernas con fuerza hacia los lados y cierra suavemente.",
    "Remo sentado": "Mantén la espalda recta y el pecho fuera. Tira del agarre hacia tu ombligo juntando las escápulas y estira los brazos sin perder la postura.",
    "Bíceps en máquina": "Apoya los brazos en el cojín. Flexiona los codos llevando el agarre hacia tus hombros y baja sin estirar del todo para mantener la tensión.",
    "Tríceps en polea": "Codos pegados a los costados. Extiende los brazos hacia abajo completamente apretando el tríceps y sube hasta que los antebrazos estén paralelos al suelo.",
    "Deltoide posterior": "En la máquina de aperturas, siéntate de frente. Lleva los brazos hacia atrás con los codos ligeramente flexionados para trabajar la parte trasera del hombro.",
    "Press de pecho": "Apoya bien la espalda. Empuja los agarres hacia adelante hasta extender los brazos y vuelve sintiendo el estiramiento en el pectoral.",
    "Press de hombros": "Empuja los agarres verticalmente sobre tu cabeza. Baja hasta que tus manos estén a la altura de las orejas y repite.",
    "Elevaciones laterales": "Con mancuernas o poleas, eleva los brazos hacia los lados hasta la altura de los hombros, manteniendo una ligera flexión en los codos.",
    "Patada de glúteo": "En polea baja, sujeta el tobillo. Lleva la pierna hacia atrás estirada sin arquear la zona lumbar, focando en la contracción del glúteo.",
    "Prensa pies altos": "Igual que la prensa normal pero con los pies en la parte superior de la plataforma para enfocar más el trabajo en glúteos e isquiotibiales."
};

const workouts = [
    {
        day: "Lunes",
        focus: "Piernas & Glúteos",
        exercises: [
            { name: "Prensa de piernas", desc: "4 series x 12 reps", hasImg: true },
            { name: "Curl femoral", desc: "3 series x 15 reps", hasImg: true },
            { name: "Extensión de piernas", desc: "3 series x 15 reps", hasImg: true },
            { name: "Abductores", desc: "4 series x 20 reps", hasImg: true },
            { name: "Glúteo en máquina", desc: "3 series x 15 reps por pierna", hasImg: true },
            { name: "Cardio", desc: "20 min Caminadora inclinada o elíptica" }
        ]
    },
    {
        day: "Martes",
        focus: "Espalda & Brazos",
        exercises: [
            { name: "Jalón al pecho", desc: "4 series x 12 reps", hasImg: true },
            { name: "Remo sentado", desc: "3 series x 12 reps", hasImg: true },
            { name: "Bíceps en máquina", desc: "3 series x 15 reps", hasImg: true },
            { name: "Tríceps en polea", desc: "3 series x 15 reps", hasImg: true },
            { name: "Deltoide posterior", desc: "3 series x 15 reps", hasImg: true },
            { name: "Cardio", desc: "20 min Bicicleta con intervalos" }
        ]
    },
    {
        day: "Miércoles",
        focus: "Cardio & Core",
        exercises: [
            { name: "Cardio continuo", desc: "30–40 min (bici, elíptica o caminadora)" },
            { name: "Abdominal máquina", desc: "3 series x 15 reps" },
            { name: "Crunch en fitball", desc: "3 series x 20 reps" },
            { name: "Plancha", desc: "3 series de 30–45 seg" }
        ]
    },
    {
        day: "Jueves",
        focus: "Glúteos & Femoral",
        exercises: [
            { name: "Hip thrust", desc: "4 series x 12 reps", hasImg: true },
            { name: "Curl femoral", desc: "4 series x 15 reps", hasImg: true },
            { name: "Abductores", desc: "4 series x 20 reps", hasImg: true },
            { name: "Prensa pies altos", desc: "3 series x 12 reps", hasImg: true },
            { name: "Patada de glúteo", desc: "3 series x 15 reps", hasImg: true },
            { name: "Cardio", desc: "15–20 min Stairmaster o caminadora" }
        ]
    },
    {
        day: "Viernes",
        focus: "Pecho, Hombros & Brazos",
        exercises: [
            { name: "Press de pecho", desc: "4 series x 12 reps", hasImg: true },
            { name: "Press de hombros", desc: "3 series x 12 reps", hasImg: true },
            { name: "Elevaciones laterales", desc: "3 series x 15 reps", hasImg: true },
            { name: "Biceps/Triceps Superserie", desc: "3 series x 15 reps" },
            { name: "Cardio Final", desc: "20 min libre" }
        ]
    }
];

// Backup of original workouts to allow "Restablecer"
const originalWorkouts = JSON.parse(JSON.stringify(workouts));

// App State
// App State with EXTREME Error Resilience
let supplements = [];
let completedExercises = {};
let exerciseLogs = {}; // { date: { exName: { weight: 0, reps: 0 } } }
let weightTracker = { initial: '', current: '' };
let currentWeightUnit = 'kg';
let currentDayIndex = 0;
let lastCheckTime = null;

function loadState() {
    try {
        const s = localStorage.getItem('maria-supps');
        if (s) supplements = JSON.parse(s);

        const c = localStorage.getItem('maria-completed');
        if (c) completedExercises = JSON.parse(c);

        const l = localStorage.getItem('maria-logs');
        if (l) exerciseLogs = JSON.parse(l);

        const w = localStorage.getItem('maria-weights');
        if (w) weightTracker = JSON.parse(w);

        const u = localStorage.getItem('maria-weight-unit');
        if (u) currentWeightUnit = u;

        lastCheckTime = localStorage.getItem('maria-last-check');
    } catch (e) {
        console.error("Error crítico en loadState:", e);
    }
}
loadState();

// DOM Elements
const mainContent = document.getElementById('main-content');
const viewTitle = document.getElementById('view-title');
const navItems = document.querySelectorAll('.nav-item');
const viewSections = document.querySelectorAll('.view-section');

const libContent = document.getElementById('library-content');
const libSearch = document.getElementById('library-search');

const weeklyVolumeEl = document.getElementById('weekly-volume');

// DOM Elements
const suppList = document.getElementById('supplement-list');
const addBtn = document.getElementById('add-supp-btn');
const addForm = document.getElementById('add-form');
const saveSupp = document.getElementById('save-supp');
const cancelSupp = document.getElementById('cancel-supp');
const suppNameInput = document.getElementById('supp-name');
const suppTimeInput = document.getElementById('supp-time');
const workoutContent = document.getElementById('workout-content');
const workoutTabs = document.querySelectorAll('.tab');
const enableNotifBtn = document.getElementById('enable-notif');
const notifMsg = document.getElementById('notif-msg');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

// AI Coach & Modal Elements
const aiTrigger = document.getElementById('ai-coach-trigger');
const aiChat = document.getElementById('ai-chat');
const chatHistory = document.getElementById('chat-history');
const chatInput = document.getElementById('chat-input');
const sendChat = document.getElementById('send-chat');

const exModal = document.getElementById('exercise-modal');
const modalTitle = document.getElementById('modal-title');
const exerciseImg = document.getElementById('exercise-img');
const modalDesc = document.getElementById('modal-desc');
const closeModal = document.getElementById('close-modal');

// Initialization
function init() {
    document.getElementById('weight-unit-select').value = currentWeightUnit;
    updateUnitLabels();

    setupNav();
    renderSupplements();
    renderWorkout(0);
    renderLibrary();
    updateStats();
    checkNotificationPermission();
    setupInterval();
    checkMissedAlarms();
}

// Navigation Logic
function setupNav() {
    navItems.forEach(item => {
        item.onclick = () => {
            const view = item.dataset.view;
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            viewSections.forEach(sec => sec.classList.add('hidden'));
            const target = document.getElementById(`view-${view}`);
            if (target) target.classList.remove('hidden');

            viewTitle.innerText = item.querySelector('span').innerText;
            if (view === 'stats') updateStats();
            if (view === 'library') renderLibrary();
        };
    });
}

window.generateAIWorkout = () => {
    const focus = document.getElementById('ai-focus').value;
    const equip = document.getElementById('ai-equip').value;

    let pool;
    let focusName;
    let instructionDesc;

    if (focus === 'Quema Grasa (4 Semanas)') {
        // Fat loss: Cardio, Full Body, Core, Legs. High reps/Intensity.
        pool = window.exerciseDatabase.filter(ex =>
            (ex.category === 'Cardio' || ex.category === 'Abdomen' || ex.category === 'Pierna' || ex.category === 'Glúteo') &&
            (ex.equip === equip || ex.equip === 'Máquina' || equip === 'Máquina' || ex.equip === 'Peso corporal')
        );
        focusName = `Plan Quema Grasa - Día ${currentDayIndex + 1} (${equip})`;
        instructionDesc = "Circuito 🔥 4 x 15-20 reps (Poco descanso)";
    } else {
        // Standard muscle group selections
        pool = window.exerciseDatabase.filter(ex =>
            (ex.category === focus || focus === 'Full Body') &&
            (ex.equip === equip || ex.equip === 'Máquina' || equip === 'Máquina')
        );
        focusName = `IA: ${focus} (${equip})`;
        instructionDesc = "Sugerido por IA - 3 x 12";
    }

    // Pick 5-6 exercises
    const selected = pool.sort(() => 0.5 - Math.random()).slice(0, 6);

    if (selected.length === 0) {
        alert("No encontré suficientes ejercicios para ese filtro. Prueba con 'Gimnasio'.");
        return;
    }

    // Replace the current day's workout with this dynamic one
    const todayName = workouts[currentDayIndex].day;
    workouts[currentDayIndex] = {
        day: todayName,
        focus: focusName,
        exercises: selected.map(ex => ({
            name: ex.name,
            desc: instructionDesc,
            hasImg: ex.hasImg
        }))
    };

    renderWorkout(currentDayIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (focus === 'Quema Grasa (4 Semanas)') {
        alert("¡Circuito Quema Grasa generado! 🔥 Dalo todo.");
    } else {
        alert("¡Rutina generada con IA! 🌸");
    }
};

window.restoreOriginalWorkout = () => {
    workouts[currentDayIndex] = JSON.parse(JSON.stringify(originalWorkouts[currentDayIndex]));
    renderWorkout(currentDayIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    alert("Rutina original restaurada. ✨");
};

// Supplement Logic (Same as before but with pastel style in CSS)
function renderSupplements() {
    suppList.innerHTML = supplements.length === 0 ?
        '<p style="text-align: center; color: #666; font-size: 0.9rem;">No hay suplementos programados.</p>' : '';

    supplements.sort((a, b) => a.time.localeCompare(b.time)).forEach((supp, index) => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <div>
                <strong>${supp.name}</strong>
                <div style="font-size: 0.8rem; color: var(--text-secondary);">Diario</div>
            </div>
            <div style="display: flex; align-items: center; gap: 15px;">
                <span class="time">${supp.time}</span>
                <span style="cursor: pointer; color: #ffb5c2;" onclick="deleteSupp(${index})">✕</span>
            </div>
        `;
        suppList.appendChild(div);
    });
}

window.deleteSupp = (index) => {
    supplements.splice(index, 1);
    saveAndRender();
};

function saveAndRender() {
    localStorage.setItem('maria-supps', JSON.stringify(supplements));
    renderSupplements();
}

addBtn.onclick = () => {
    addForm.classList.remove('hidden');
    addBtn.classList.add('hidden');
};

cancelSupp.onclick = () => {
    addForm.classList.add('hidden');
    addBtn.classList.remove('hidden');
};

saveSupp.onclick = () => {
    const name = suppNameInput.value.trim();
    const time = suppTimeInput.value;
    if (name && time) {
        supplements.push({ name, time });
        saveAndRender();
        addForm.classList.add('hidden');
        addBtn.classList.remove('hidden');
        suppNameInput.value = '';
        suppTimeInput.value = '';
    }
};

// Workout Logic
function renderWorkout(dayIndex) {
    currentDayIndex = dayIndex;
    const workout = workouts[dayIndex];
    if (!completedExercises[workout.day]) completedExercises[workout.day] = {};

    workoutContent.innerHTML = `
        <h3 style="color: var(--text-primary); margin-bottom: 5px;">${workout.focus}</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 20px;">${workout.day}</p>
        ${workout.exercises.map((ex, idx) => {
        const isDone = (completedExercises[workout.day] && completedExercises[workout.day][ex.name]) || false;
        const log = (exerciseLogs[workout.day] && exerciseLogs[workout.day][ex.name]) || { weight: '', reps: '' };

        return `
            <div class="exercise-item ${isDone ? 'completed' : ''}" style="display: flex; flex-direction: column; gap: 10px; border-left: 3px solid var(--secondary); padding-left: 15px; margin-bottom: 20px;">
                <div style="display: flex; align-items: flex-start; gap: 12px;">
                    <div class="checkbox ${isDone ? 'checked' : ''}" onclick="toggleExercise('${workout.day}', '${ex.name}')"></div>
                    <div style="flex: 1; cursor: ${ex.hasImg ? 'pointer' : 'default'}" onclick="${ex.hasImg ? `openExercise('${ex.name}')` : ''}">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <h4 style="margin: 0; font-size: 0.95rem;">${ex.name}</h4>
                            ${ex.hasImg ? '<span style="font-size: 0.7rem; color: var(--primary);">Foto 📸</span>' : ''}
                        </div>
                        <p style="margin-top: 2px; font-size: 0.8rem;">${ex.desc}</p>
                    </div>
                </div>
                
                <div class="log-inputs">
                    <div>
                        <div class="label">Peso (<span class="unit-label">${currentWeightUnit}</span>)</div>
                        <input type="number" id="log-w-${idx}" value="${log.weight}" placeholder="0" onchange="saveLog('${workout.day}', '${ex.name}', ${idx})">
                    </div>
                    <div>
                        <div class="label">Reps</div>
                        <input type="number" id="log-r-${idx}" value="${log.reps}" placeholder="0" onchange="saveLog('${workout.day}', '${ex.name}', ${idx})">
                    </div>
                </div>
            </div>
            `;
    }).join('')}
    `;
    updateProgress(workout.day);
}

window.saveLog = (day, exName, idx) => {
    const weight = document.getElementById(`log-w-${idx}`).value;
    const reps = document.getElementById(`log-r-${idx}`).value;

    if (!exerciseLogs[day]) exerciseLogs[day] = {};
    exerciseLogs[day][exName] = { weight, reps };

    localStorage.setItem('maria-logs', JSON.stringify(exerciseLogs));
    updateStats();
};

window.toggleExercise = (day, exName) => {
    completedExercises[day][exName] = !completedExercises[day][exName];
    localStorage.setItem('maria-completed', JSON.stringify(completedExercises));
    renderWorkout(currentDayIndex);
};

function updateProgress(day) {
    const workout = workouts[currentDayIndex];
    const total = workout.exercises.length;
    const done = Object.values(completedExercises[day]).filter(Boolean).length;
    const percent = Math.round((done / total) * 100);

    progressBar.style.width = `${percent}%`;
    progressText.innerText = `${percent}%`;
}

window.openExercise = (name) => {
    const exData = window.exerciseDatabase.find(ex => ex.name === name);
    const imgPath = exerciseImages[name];

    modalTitle.innerText = name;
    if (imgPath) {
        exerciseImg.src = imgPath;
        exerciseImg.classList.remove('hidden');
    } else {
        exerciseImg.classList.add('hidden');
    }

    let description = modalDescriptions[name] || "Sigue este diagrama detallado para ver la postura correcta.";
    if (exData && exData.instructions) {
        const dumbbellTip = exData.equip === "Mancuerna" ? "\n\n💡 TIP MANCUERNA: Controla el peso y no uses impulso." : "";
        description = `Instrucciones:\n${exData.instructions}${dumbbellTip}`;
    }

    modalDesc.innerText = description;
    exModal.classList.remove('hidden');
};

closeModal.onclick = () => exModal.classList.add('hidden');

workoutTabs.forEach(tab => {
    tab.onclick = () => {
        workoutTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderWorkout(parseInt(tab.dataset.day));
    };
});

// Library & Stats Logic
function renderLibrary(filter = '') {
    const normalizedFilter = filter.toLowerCase();
    libContent.innerHTML = '';

    window.exerciseDatabase.filter(ex =>
        ex.name.toLowerCase().includes(normalizedFilter) ||
        ex.muscle.toLowerCase().includes(normalizedFilter)
    ).forEach(ex => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.style.cssText = "background: white; display: flex; justify-content: space-between; align-items: center; padding: 12px; margin-bottom: 8px; border-radius: 12px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);";
        div.innerHTML = `
            <div style="flex: 1;">
                <strong style="display: block; font-size: 0.95rem;">${ex.name}</strong>
                <div style="font-size: 0.75rem; color: var(--text-secondary);">${ex.muscle} • ${ex.equip}</div>
            </div>
            <button onclick="openExercise('${ex.name}')" style="padding: 6px 12px; font-size: 0.75rem; background: var(--secondary); color: #333; margin-left: 10px; flex-shrink: 0;">Ver</button>
        `;
        libContent.appendChild(div);
    });
}

libSearch.oninput = (e) => renderLibrary(e.target.value);

window.changeWeightUnit = () => {
    currentWeightUnit = document.getElementById('weight-unit-select').value;
    localStorage.setItem('maria-weight-unit', currentWeightUnit);
    updateUnitLabels();
    updateStats();
    renderWorkout(currentDayIndex);
};

function updateUnitLabels() {
    document.querySelectorAll('.unit-label').forEach(el => el.innerText = currentWeightUnit);
}

window.saveWeight = () => {
    const initial = document.getElementById('weight-initial').value;
    const current = document.getElementById('weight-current').value;
    weightTracker = { initial, current };
    localStorage.setItem('maria-weights', JSON.stringify(weightTracker));
    updateStats();
};

function updateStats() {
    // Weight Logic update
    document.getElementById('weight-initial').value = weightTracker.initial || '';
    document.getElementById('weight-current').value = weightTracker.current || '';

    if (weightTracker.initial && weightTracker.current) {
        const diff = parseFloat(weightTracker.current) - parseFloat(weightTracker.initial);
        const isLoss = diff < 0;
        let diffText = diff > 0 ? `+${diff.toFixed(1)} <span class="unit-label">${currentWeightUnit}</span>` : `${diff.toFixed(1)} <span class="unit-label">${currentWeightUnit}</span>`;
        let color = isLoss ? '#4CAF50' : (diff > 0 ? '#f44336' : 'var(--text-secondary)');
        document.getElementById('weight-diff').innerHTML = `<span style="color: ${color}">${diffText}</span>`;
    } else {
        document.getElementById('weight-diff').innerHTML = `0.0 <span class="unit-label">${currentWeightUnit}</span>`;
    }

    // Volume Logic
    let totalVolume = 0;
    Object.values(exerciseLogs).forEach(dayLogs => {
        Object.values(dayLogs).forEach(log => {
            if (log.weight && log.reps) {
                totalVolume += parseFloat(log.weight) * parseInt(log.reps);
            }
        });
    });
    weeklyVolumeEl.innerText = totalVolume.toLocaleString();
}

// AI Coach Logic (Enfoque en entrenamiento femenino)
const coachAdvice = {
    "prensa": "Para enfocar más en glúteos en la prensa, coloca los pies un poco más arriba en la plataforma. No bloquees nunca las rodillas y mantén el control. ¡Tus piernas se verán increíbles!",
    "jalon": "En el jalón, enfócate en llevar los codos hacia tus costillas. Esto te ayudará a definir la espalda sin ensancharla demasiado, dándote esa forma estética que buscamos.",
    "hip thrust": "¡El rey de los ejercicios de glúteo! Empuja con los talones y mantén la contracción 2 segundos arriba. Imagina que quieres romper la barra con la cadera.",
    "gluteo": "En la patada de glúteo, mantén el core bien firme para no arquear la espalda. Concentra todo el esfuerzo en el glúteo mayor. ¡Sentirás el trabajo!",
    "abductores": "Este es clave para la forma lateral del glúteo. Abre con explosividad y cierra muy lento para maximizar la tonificación.",
    "curl femoral": "Mantén las caderas pegadas al banco. Imagina que quieres tocar tus glúteos con los talones. Es vital para unos femorales definidos.",
    "extension": "Ajusta la máquina para que el peso no baile. Extiende y aprieta el cuádriceps arriba. Ideal para dar forma a la parte delantera de la pierna.",
    "remo": "Mantén el pecho orgulloso y la espalda recta. Tira hacia tu ombligo para trabajar la zona media de la espalda y mejorar tu postura.",
    "biceps": "Controla el movimiento. No balancees los hombros. Unos brazos tonificados lucen genial con cualquier outfit veraniego.",
    "triceps": "Focaliza en la parte posterior del brazo para evitar la flacidez. Baja con fuerza y siente el estiramiento.",
    "abdominal": "Calidad sobre cantidad. Siente cómo se contrae el abdomen en cada repetición. Mantén el cuello relajado.",
    "pecho": "Un press suave ayuda a mantener la firmeza de la zona pectoral. No subas demasiado peso, busca la sensación del músculo.",
    "hombros": "Unos hombros redondeados dan una percha espectacular. Usa un peso que te permita hacer el movimiento completo y elegante.",
    "cardio": "El cardio es tu aliado para la quema de grasa. ¡Mantén el ritmo, Maria! Estás haciendo un trabajo espectacular por tu salud."
};

aiTrigger.onclick = () => aiChat.classList.toggle('hidden');

sendChat.onclick = () => {
    // AI Coach Logic Improvement (Normalización de texto)
    const normalize = (text) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const qNorm = normalize(chatInput.value.trim());
    if (!qNorm) return;

    // Add User Message
    addChatMessage('Tu', chatInput.value, 'white');
    chatInput.value = '';

    // Simple Bot Logic
    setTimeout(() => {
        let response = "¡Buena pregunta! Sobre eso te recomiendo mantener siempre buena postura y controlar el movimiento. ¿Alguna máquina en especial te genera dudas?";

        // Find specific advice
        for (const key in coachAdvice) {
            const keyNorm = normalize(key);
            if (qNorm.includes(keyNorm)) {
                response = coachAdvice[key];
                break;
            }
        }

        addChatMessage('Coach', response, 'var(--coach-bg)');
    }, 600);
};

function addChatMessage(sender, msg, bg) {
    const p = document.createElement('p');
    p.style.cssText = `background: ${bg}; padding: 10px; border-radius: 12px; margin-bottom: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);`;
    p.innerHTML = `<strong>${sender}:</strong> ${msg}`;
    chatHistory.appendChild(p);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Notifications Logic
function checkNotificationPermission() {
    if (!("Notification" in window)) {
        notifMsg.innerText = "Este navegador no soporta notificaciones.";
        enableNotifBtn.classList.add('hidden');
        return;
    }

    if (Notification.permission === "granted") {
        enableNotifBtn.classList.add('hidden');
        notifMsg.innerText = "✅ Las alarmas están activas.";
    }
}

enableNotifBtn.onclick = () => {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            checkNotificationPermission();
        }
    });
};

// lastCheckTime is already declared at the top of the file

function setupInterval() {
    // Check every 30 seconds instead of 1000ms to be more energy efficient but still catch the minute
    setInterval(() => {
        performAlarmCheck();
    }, 30000);

    // Also check immediately when the app becomes visible
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            performAlarmCheck();
            checkMissedAlarms();
        }
    });
}

function performAlarmCheck() {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const dateStr = now.toDateString(); // To ensure we only notify once per day per supplement

    supplements.forEach(supp => {
        const lastNotifKey = `notif-${supp.name}-${supp.time}-${dateStr}`;
        if (supp.time === currentTime && !localStorage.getItem(lastNotifKey)) {
            showNotification(supp.name);
            localStorage.setItem(lastNotifKey, 'true'); // Guard against multiple notifications in the same minute
        }
    });

    localStorage.setItem('maria-last-check', now.getTime());
    lastCheckTime = now.getTime(); // Update global state
}

function checkMissedAlarms() {
    if (!lastCheckTime) return;

    const now = new Date();
    const lastCheck = new Date(parseInt(lastCheckTime));

    // If last check was more than 24 hours ago, just reset
    if (now - lastCheck > 86400000) return;

    supplements.forEach(supp => {
        const [h, m] = supp.time.split(':').map(Number);
        const suppTime = new Date();
        suppTime.setHours(h, m, 0, 0);

        // If the supplement time was between the last check and now
        if (suppTime > lastCheck && suppTime < now) {
            const lastNotifKey = `notif-${supp.name}-${supp.time}-${now.toDateString()}`;
            if (!localStorage.getItem(lastNotifKey)) {
                showNotification(`Puntual (Recordatorio): ${supp.name}`);
                localStorage.setItem(lastNotifKey, 'true');
            }
        }
    });
}

// Added for user testing
window.testNotification = () => {
    showNotification("Prueba de Maria App 🌸");
};

// Nuclear Reset Function
window.nuclearReset = () => {
    if (confirm("¿Quieres borrar todos los datos y reiniciar la app? Esto borrará tus suplementos y progreso.")) {
        localStorage.clear();
        if ('serviceWorker' in navigator) {
            caches.keys().then(names => {
                for (let name of names) caches.delete(name);
            });
        }
        location.reload();
    }
};

function showNotification(name) {
    if (Notification.permission === "granted") {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then(registration => {
                registration.showNotification("¡Hora de tus suplementos!", {
                    body: `Es momento de tomar: ${name}`,
                    icon: "https://cdn-icons-png.flaticon.com/512/3062/3062125.png",
                    badge: "https://cdn-icons-png.flaticon.com/512/3062/3062125.png"
                });
            });
        } else {
            new Notification("¡Hora de tus suplementos!", {
                body: `Es momento de tomar: ${name}`,
                icon: "https://cdn-icons-png.flaticon.com/512/3062/3062125.png"
            });
        }
    }
}

// Init App
try {
    init();
    console.log("App iniciada correctamente.");
} catch (e) {
    console.error("Fallo fatal en init():", e);
    // window.onerror will catch this and show the red box
}
