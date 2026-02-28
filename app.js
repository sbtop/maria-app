const exerciseImages = {
    "Prensa de piernas": "./images/real_prensa_piernas_diagram.png",
    "Jalón al pecho": "./images/real_jalon_pecho_diagram.png",
    "Curl femoral": "./images/real_curl_femoral_diagram.png",
    "Hip thrust": "./images/real_hip_thrust_diagram.png",
    "Glúteo en máquina": "./images/real_gluteo_maquina_diagram.png",
    "Extensión de piernas": "./images/real_extension_piernas_diagram.png",
    "Abductores": "",
    "Remo sentado": "",
    "Bíceps en máquina": "",
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

// App State
let supplements = JSON.parse(localStorage.getItem('maria-supps')) || [];
let completedExercises = JSON.parse(localStorage.getItem('maria-completed')) || {}; // { "Lunes": { "Prensa...": true } }
let currentDayIndex = 0;

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
    renderSupplements();
    renderWorkout(0);
    checkNotificationPermission();
    setupInterval();
}

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
        const isDone = completedExercises[workout.day][ex.name] || false;
        return `
            <div class="exercise-item ${isDone ? 'completed' : ''}" style="display: flex; align-items: flex-start; gap: 15px; border-left: none; padding-left: 0;">
                <div class="checkbox ${isDone ? 'checked' : ''}" onclick="toggleExercise('${workout.day}', '${ex.name}')"></div>
                <div style="flex: 1; cursor: ${ex.hasImg ? 'pointer' : 'default'}" onclick="${ex.hasImg ? `openExercise('${ex.name}')` : ''}">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h4 style="margin: 0;">${ex.name}</h4>
                        ${ex.hasImg ? '<span style="font-size: 0.75rem; color: var(--primary);">Ver Foto 📸</span>' : ''}
                    </div>
                    <p style="margin-top: 5px;">${ex.desc}</p>
                </div>
            </div>
            `;
    }).join('')}
    `;
    updateProgress(workout.day);
}

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
    const imgPath = exerciseImages[name];
    if (imgPath) {
        modalTitle.innerText = name;
        exerciseImg.src = imgPath;
        modalDesc.innerText = modalDescriptions[name] || "Sigue este diagrama detallado para ver la máquina y la postura correcta. ¡Tú puedes!";
        exModal.classList.remove('hidden');
    }
};

closeModal.onclick = () => exModal.classList.add('hidden');

workoutTabs.forEach(tab => {
    tab.onclick = () => {
        workoutTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderWorkout(parseInt(tab.dataset.day));
    };
});

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

function setupInterval() {
    setInterval(() => {
        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

        // This runs every minute (approx) to check for alarms
        if (now.getSeconds() === 0) {
            supplements.forEach(supp => {
                if (supp.time === currentTime) {
                    showNotification(supp.name);
                }
            });
        }
    }, 1000);
}

function showNotification(name) {
    if (Notification.permission === "granted") {
        new Notification("¡Hora de tus suplementos!", {
            body: `Es momento de tomar: ${name}`,
            icon: "https://cdn-icons-png.flaticon.com/512/3062/3062125.png"
        });
    }
}

// Init App
init();
