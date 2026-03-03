const app = {
    cards: [],

    init() {
        this.loadData();
        this.initTheme();
        this.initUsername();
        this.initNotifications();
        this.renderCards();
        this.updateDate();
        this.setupNavigation();
        this.updateNextPayment();
    },

    initNotifications() {
        if ("Notification" in window) {
            if (Notification.permission === "granted") {
                document.getElementById('noti-btn').classList.add('active');
            }
        } else {
            document.getElementById('noti-btn').style.display = 'none';
        }
    },

    requestNotifications() {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                document.getElementById('noti-btn').classList.add('active');
                new Notification("sbtop pay", { body: "Notificaciones activadas satisfactoriamente." });
            }
        });
    },

    getDaysRemaining(dueDay, paidUntil) {
        const now = new Date();
        const y = now.getFullYear();
        const m = now.getMonth();
        const d = now.getDate();

        const today = new Date(y, m, d);
        let target = new Date(y, m, dueDay);

        const currentCycle = `${y}-${String(m + 1).padStart(2, '0')}`;

        // If the due day is smaller than today OR this cycle is already paid
        if (dueDay < d || (paidUntil && paidUntil >= currentCycle)) {
            target = new Date(y, m + 1, dueDay);

            // If even next month is paid, we might need to jump further (though usually 1 jump is enough for this app's scope)
            const nextCycle = `${target.getFullYear()}-${String(target.getMonth() + 1).padStart(2, '0')}`;
            if (paidUntil && paidUntil >= nextCycle) {
                target = new Date(target.getFullYear(), target.getMonth() + 1, dueDay);
            }
        }

        const diffTime = target.getTime() - today.getTime();
        return Math.round(diffTime / (1000 * 60 * 60 * 24));
    },

    initUsername() {
        const savedName = localStorage.getItem('fintech_flow_user') || 'Usuario';
        document.getElementById('user-name-text').textContent = `Hola, ${savedName}`;
    },

    editUsername() {
        const currentName = localStorage.getItem('fintech_flow_user') || 'Usuario';
        const newName = prompt('¿Cómo te llamas?', currentName);

        if (newName && newName.trim()) {
            localStorage.setItem('fintech_flow_user', newName.trim());
            this.initUsername();
        }
    },

    initTheme() {
        const savedTheme = localStorage.getItem('fintech_flow_theme') || 'blue';
        this.applyTheme(savedTheme);

        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.getAttribute('data-theme');
                this.applyTheme(theme);
            });
        });
    },

    applyTheme(theme) {
        // Remove old theme classes
        document.body.classList.remove('theme-blue', 'theme-emerald', 'theme-amethyst', 'theme-gold');
        if (theme !== 'blue') {
            document.body.classList.add(`theme-${theme}`);
        }

        // Update UI
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
        });

        localStorage.setItem('fintech_flow_theme', theme);
    },

    loadData() {
        const saved = localStorage.getItem('fintech_flow_cards');
        if (saved) {
            this.cards = JSON.parse(saved);
        }
    },

    saveData() {
        localStorage.setItem('fintech_flow_cards', JSON.stringify(this.cards));
    },

    exportData() {
        const data = {
            cards: this.cards,
            theme: localStorage.getItem('fintech_flow_theme'),
            user: localStorage.getItem('fintech_flow_user')
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sbtop_pay_backup_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
    },

    importData(input) {
        const file = input.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.cards) {
                    this.cards = data.cards;
                    this.saveData();
                    if (data.theme) this.applyTheme(data.theme);
                    if (data.user) {
                        localStorage.setItem('fintech_flow_user', data.user);
                        this.initUsername();
                    }
                    this.renderCards();
                    this.updateNextPayment();
                    alert('¡Datos restaurados con éxito!');
                }
            } catch (err) {
                alert('Error al leer el archivo. Asegúrate de que sea un archivo de sbtop pay válido.');
            }
        };
        reader.readAsText(file);
    },

    updateDate() {
        const now = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        document.getElementById('current-date').textContent = now.toLocaleDateString('es-ES', options);
    },

    setupNavigation() {
        document.querySelectorAll('nav li').forEach(li => {
            li.addEventListener('click', () => {
                const viewId = li.getAttribute('data-view');
                this.switchView(viewId);

                document.querySelectorAll('nav li').forEach(item => item.classList.remove('active'));
                li.classList.add('active');
            });
        });
    },

    switchView(viewId) {
        console.log('Switching to view:', viewId);
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
            view.style.display = 'none';
        });

        const targetView = document.getElementById(`${viewId}-view`);
        if (targetView) {
            targetView.classList.add('active');
            targetView.style.display = 'block';
            console.log('View activated:', viewId);
        } else {
            console.error('View not found:', `${viewId}-view`);
        }
    },

    showModal(id) {
        document.getElementById(id).style.display = 'flex';
    },

    hideModal(id) {
        document.getElementById(id).style.display = 'none';
    },

    saveCard() {
        const name = document.getElementById('card-name').value;
        const cut = parseInt(document.getElementById('card-cut').value);
        const due = parseInt(document.getElementById('card-due').value);
        const amount = parseFloat(document.getElementById('card-amount').value) || 0;

        if (!name || isNaN(cut) || isNaN(due)) {
            alert('Por favor completa los campos principales');
            return;
        }

        const newCard = {
            id: Date.now(),
            name,
            cutDay: cut,
            dueDay: due,
            amount
        };

        this.cards.push(newCard);
        this.saveData();
        this.renderCards();
        this.updateNextPayment();
        this.hideModal('card-modal');

        // Clear inputs
        document.getElementById('card-name').value = '';
        document.getElementById('card-cut').value = '';
        document.getElementById('card-due').value = '';
        document.getElementById('card-amount').value = '';
    },

    renderCards() {
        const briefList = document.getElementById('cards-list-brief');
        const fullList = document.getElementById('cards-list-full');

        const html = this.cards.length === 0
            ? '<div class="empty-state"><p>No tienes tarjetas registradas aún.</p></div>'
            : this.cards.map(card => {
                const daysLeft = this.getDaysRemaining(card.dueDay, card.paidUntil);
                let urgencyClass = '';
                let urgencyLabel = '';

                if (daysLeft === 0) {
                    urgencyClass = 'urgent';
                    urgencyLabel = '¡PAGA HOY!';
                } else if (daysLeft < 3) {
                    urgencyClass = 'warning';
                    urgencyLabel = 'PAGO PRÓXIMO';
                }

                return `
                <div class="glass finance-card ${urgencyClass}">
                    ${urgencyLabel ? `<div class="urgency-badge">${urgencyLabel}</div>` : ''}
                    <div class="card-item-title">${card.name}</div>
                    <div class="card-item-row">
                        <span>Estado</span>
                        <span style="color: ${daysLeft < 3 ? 'var(--danger)' : 'var(--accent)'}">${daysLeft === 0 ? 'Vence hoy' : `Faltan ${daysLeft} días`}</span>
                    </div>
                    <div class="card-item-row">
                        <span>Límite de Pago</span>
                        <span>Día ${card.dueDay}</span>
                    </div>
                    <div class="card-item-row">
                        <span>Monto a Pagar</span>
                        <span>$${card.amount.toLocaleString('es-MX')}</span>
                    </div>
                    <div class="card-actions">
                        <button class="btn-primary" style="flex: 1" onclick="app.markAsPaid(${card.id})">Marcar Pagado</button>
                        <button class="btn-secondary" onclick="app.deleteCard(${card.id})" title="Eliminar">
                            <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </button>
                    </div>
                </div>
            `}).join('');

        if (briefList) briefList.innerHTML = html;
        if (fullList) fullList.innerHTML = html;
    },

    deleteCard(id) {
        if (!confirm('¿Estás seguro de eliminar esta tarjeta?')) return;
        this.cards = this.cards.filter(c => c.id !== id);
        this.saveData();
        this.renderCards();
        this.updateNextPayment();
    },

    markAsPaid(id) {
        const now = new Date();
        const currentCycle = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

        const card = this.cards.find(c => c.id === id);
        if (card) {
            card.paidUntil = currentCycle;
            this.saveData();
            this.renderCards();
            this.updateNextPayment();
            alert(`Pago registrado para ${card.name}. Próximo recordatorio actualizado.`);
        }
    },

    updateNextPayment() {
        if (this.cards.length === 0) {
            document.getElementById('next-payment-val').textContent = '--';
            document.getElementById('next-payment-date').textContent = 'No hay pagos pendientes';
            return;
        }

        // Sort by actual remaining days instead of just the day number
        const sorted = [...this.cards].sort((a, b) => {
            return this.getDaysRemaining(a.dueDay, a.paidUntil) - this.getDaysRemaining(b.dueDay, b.paidUntil);
        });

        const next = sorted[0];
        const daysLeft = this.getDaysRemaining(next.dueDay, next.paidUntil);
        const statusText = daysLeft === 0 ? '¡Vence hoy!' : `Faltan ${daysLeft} días`;

        document.getElementById('next-payment-val').textContent = `$${next.amount.toLocaleString('es-MX')}`;
        document.getElementById('next-payment-date').textContent = `${next.name} - ${statusText}`;
    },

    runAnalysis() {
        const amount = parseFloat(document.getElementById('finance-amount').value);
        if (isNaN(amount)) {
            alert('Ingresa un monto válido');
            return;
        }

        const aName = document.getElementById('opt-a-name').value || 'A';
        const aRate = parseFloat(document.getElementById('opt-a-rate').value) || 0;
        const aFee = parseFloat(document.getElementById('opt-a-fee').value) || 0;

        const bName = document.getElementById('opt-b-name').value || 'B';
        const bRate = parseFloat(document.getElementById('opt-b-rate').value) || 0;
        const bFee = parseFloat(document.getElementById('opt-b-fee').value) || 0;

        const totalA = (amount * (aRate / 100)) + aFee;
        const totalB = (amount * (bRate / 100)) + bFee;

        const results = document.getElementById('analysis-results');
        results.classList.remove('hidden');

        const winner = totalA < totalB ? aName : bName;
        const savings = Math.abs(totalA - totalB);

        results.innerHTML = `
            <div class="winner">La mejor opción es: ${winner}</div>
            <p>Costo Anual estimado (${aName}): $${totalA.toLocaleString('es-MX')}</p>
            <p>Costo Anual estimado (${bName}): $${totalB.toLocaleString('es-MX')}</p>
            <div style="margin-top: 1rem; font-weight: 600">Ahorro proyectado: $${savings.toLocaleString('es-MX')}</div>
        `;
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
