/* ═══════════════════════════════════════════════════════════════════
   STUDY PLANNER - ENHANCED VERSION
   All Improvements: Smooth sliders, Complete results, Proper PDF
═══════════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────
// DATA - ALL PLANNERS
// ─────────────────────────────────────────────────────────────────

const CBSE10_CHAPTERS = [
    { id: 1, title: 'Chemical Reactions', learning: 6, revision: 2, practice: 3, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 2, title: 'Acids, Bases, Salts', learning: 8, revision: 3, practice: 4, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 3, title: 'Metals & Non-metals', learning: 10, revision: 3, practice: 5, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 4, title: 'Carbon Compounds', learning: 12, revision: 4, practice: 6, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 5, title: 'Life Processes', learning: 14, revision: 5, practice: 6, subject: 'Biology', color: '#16a34a' },
    { id: 6, title: 'Control & Coordination', learning: 8, revision: 3, practice: 4, subject: 'Biology', color: '#16a34a' },
    { id: 7, title: 'Reproduction', learning: 10, revision: 4, practice: 5, subject: 'Biology', color: '#16a34a' },
    { id: 8, title: 'Heredity', learning: 6, revision: 2, practice: 4, subject: 'Biology', color: '#16a34a' },
    { id: 9, title: 'Light', learning: 14, revision: 5, practice: 8, subject: 'Physics', color: '#FF6B35' },
    { id: 10, title: 'Human Eye', learning: 8, revision: 3, practice: 4, subject: 'Physics', color: '#FF6B35' },
    { id: 11, title: 'Electricity', learning: 12, revision: 4, practice: 8, subject: 'Physics', color: '#FF6B35' },
    { id: 12, title: 'Magnetic Effects', learning: 10, revision: 3, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 13, title: 'Our Environment', learning: 5, revision: 2, practice: 3, subject: 'Environment', color: '#0891b2' }
];

const CBSE12_PHYSICS = [
    { id: 1, title: 'Electric Charges and Fields', learning: 22, revision: 5.5, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 2, title: 'Electrostatic Potential & Capacitance', learning: 18, revision: 4.5, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 3, title: 'Current Electricity', learning: 11.7, revision: 2.9, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 4, title: 'Moving Charges and Magnetism', learning: 14.5, revision: 3.6, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 5, title: 'Magnetism and Matter', learning: 7.2, revision: 1.8, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 6, title: 'Electromagnetic Induction', learning: 9.2, revision: 2.3, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 7, title: 'Alternating Current', learning: 10.8, revision: 2.7, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 8, title: 'Electromagnetic Waves', learning: 4.2, revision: 1.1, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 9, title: 'Ray Optics & Optical Instruments', learning: 17, revision: 4.2, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 10, title: 'Wave Optics', learning: 9.5, revision: 2.4, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 11, title: 'Dual Nature of Radiation & Matter', learning: 6.4, revision: 1.6, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 12, title: 'Atoms', learning: 6.4, revision: 1.6, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 13, title: 'Nuclei', learning: 6.8, revision: 1.7, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 14, title: 'Semiconductor Electronics', learning: 8.4, revision: 2.1, practice: 5, subject: 'Physics', color: '#FF6B35' }
];

const CBSE12_CHEMISTRY = [
    { id: 101, title: 'Solutions', learning: 12, revision: 3, practice: 4, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 102, title: 'Electrochemistry', learning: 14, revision: 4, practice: 5, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 103, title: 'Chemical Kinetics', learning: 12, revision: 3, practice: 4, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 104, title: 'd- and f-Block Elements', learning: 10, revision: 4, practice: 3, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 105, title: 'Coordination Compounds', learning: 12, revision: 3, practice: 4, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 106, title: 'Haloalkanes and Haloarenes', learning: 12, revision: 4, practice: 4, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 107, title: 'Alcohols, Phenols and Ethers', learning: 14, revision: 4, practice: 5, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 108, title: 'Aldehydes, Ketones and Carboxylic Acids', learning: 16, revision: 5, practice: 6, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 109, title: 'Amines', learning: 10, revision: 3, practice: 4, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 110, title: 'Biomolecules', learning: 10, revision: 3, practice: 3, subject: 'Chemistry', color: '#0d2ad4' }
];

const STATE_BOARD_PHYSICS = [
    { id: 201, title: 'Electrostatics', learning: 30, revision: 5, practice: 8, subject: 'Physics', color: '#FF6B35' },
    { id: 202, title: 'Current Electricity', learning: 18, revision: 3, practice: 6, subject: 'Physics', color: '#FF6B35' },
    { id: 203, title: 'Magnetism & Magnetic Effects', learning: 27, revision: 5, practice: 8, subject: 'Physics', color: '#FF6B35' },
    { id: 204, title: 'EMI and Alternating Current', learning: 27, revision: 5, practice: 8, subject: 'Physics', color: '#FF6B35' },
    { id: 205, title: 'Electromagnetic Waves', learning: 7, revision: 2, practice: 4, subject: 'Physics', color: '#FF6B35' },
    { id: 206, title: 'Ray Optics', learning: 22, revision: 4, practice: 6, subject: 'Physics', color: '#FF6B35' },
    { id: 207, title: 'Wave Optics', learning: 24, revision: 4, practice: 7, subject: 'Physics', color: '#FF6B35' },
    { id: 208, title: 'Dual Nature of Radiation', learning: 13, revision: 3, practice: 5, subject: 'Physics', color: '#FF6B35' },
    { id: 209, title: 'Atomic and Nuclear Physics', learning: 22, revision: 4, practice: 7, subject: 'Physics', color: '#FF6B35' },
    { id: 210, title: 'Electronics & Communication', learning: 24, revision: 4, practice: 7, subject: 'Physics', color: '#FF6B35' },
    { id: 211, title: 'Recent Developments in Physics', learning: 9, revision: 2, practice: 4, subject: 'Physics', color: '#FF6B35' }
];

const STATE_BOARD_CHEMISTRY = [
    { id: 301, title: 'Metallurgy', learning: 6, revision: 2, practice: 3, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 302, title: 'p-Block Elements-I', learning: 8, revision: 3, practice: 4, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 303, title: 'p-Block Elements-II', learning: 12, revision: 4, practice: 5, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 304, title: 'Transition & Inner Transition', learning: 8, revision: 3, practice: 4, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 305, title: 'Coordination Chemistry', learning: 12, revision: 4, practice: 5, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 306, title: 'Solid State', learning: 7, revision: 2, practice: 3, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 307, title: 'Chemical Kinetics', learning: 9, revision: 3, practice: 4, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 308, title: 'Ionic Equilibrium', learning: 10, revision: 3, practice: 4, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 309, title: 'Electro Chemistry', learning: 11, revision: 4, practice: 5, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 310, title: 'Surface Chemistry', learning: 7, revision: 2, practice: 3, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 311, title: 'Hydroxy Compounds & Ethers', learning: 12, revision: 4, practice: 5, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 312, title: 'Carbonyl Compounds & Acids', learning: 15, revision: 5, practice: 6, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 313, title: 'Organic Nitrogen Compounds', learning: 10, revision: 3, practice: 4, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 314, title: 'Biomolecules', learning: 7, revision: 2, practice: 3, subject: 'Chemistry', color: '#0d2ad4' },
    { id: 315, title: 'Everyday Life & Polymers', learning: 4, revision: 1, practice: 2, subject: 'Chemistry', color: '#0d2ad4' }
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// ─────────────────────────────────────────────────────────────────
// STATE & DEFAULTS
// ─────────────────────────────────────────────────────────────────

let CHAPTERS = CBSE10_CHAPTERS;

let planState = {
    type: 'study',
    completed: new Set(),
    hours: {
        'Monday': 1,
        'Tuesday': 1,
        'Wednesday': 1,
        'Thursday': 1,
        'Friday': 1,
        'Saturday': 3,
        'Sunday': 2
    },
    plan: null,
    plannerType: 'cbse10',
    schedule: null
};

// ─────────────────────────────────────────────────────────────────
// DATE UTILITIES
// ─────────────────────────────────────────────────────────────────

function getTargetDate() {
    const today = new Date();
    const nextYear = today.getFullYear() + 1;
    return new Date(nextYear, 0, 31);
}

function getDaysUntilTarget() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = getTargetDate();
    return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}

// ─────────────────────────────────────────────────────────────────
// MAIN FUNCTIONS
// ─────────────────────────────────────────────────────────────────

function scrollToPlanner() {
    const selector = document.getElementById('plannerSelector');
    const section = document.getElementById('plannerSection');
    const results = document.getElementById('resultsSection');
    
    if (selector) {
        selector.style.display = 'block';
        if (section) section.style.display = 'none';
        if (results) results.style.display = 'none';
        
        setTimeout(() => {
            selector.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

function activatePlanner(type) {
    console.log('activatePlanner:', type);
    
    planState.plannerType = type;
    planState.completed.clear();
    planState.type = 'study';
    
    // Update radio buttons
    const radios = ['radio-cbse10', 'radio-cbse12', 'radio-stateboard'];
    radios.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.background = 'transparent';
    });
    const selectedRadio = document.getElementById('radio-' + type);
    if (selectedRadio) selectedRadio.style.background = '#0d2ad4';
    
    // Set chapters based on type
    switch(type) {
        case 'cbse10':
            CHAPTERS = CBSE10_CHAPTERS;
            break;
        case 'cbse12':
            CHAPTERS = [...CBSE12_PHYSICS, ...CBSE12_CHEMISTRY];
            break;
        case 'stateboard':
            CHAPTERS = [...STATE_BOARD_PHYSICS, ...STATE_BOARD_CHEMISTRY];
            break;
        default:
            CHAPTERS = CBSE10_CHAPTERS;
    }
    
    const selector = document.getElementById('plannerSelector');
    const section = document.getElementById('plannerSection');
    
    if (selector && section) {
        selector.style.display = 'none';
        section.style.display = 'block';
        
        setTimeout(() => {
            renderChapters();
            renderHours();
            
            const formEl = document.getElementById('formSection');
            if (formEl) {
                formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 50);
    }
}

function exitPlanner() {
    const selector = document.getElementById('plannerSelector');
    const section = document.getElementById('plannerSection');
    
    if (selector && section) {
        section.style.display = 'none';
        selector.style.display = 'block';
        
        planState.completed.clear();
        planState.plan = null;
    }
}

// ─────────────────────────────────────────────────────────────────
// RENDERING FUNCTIONS
// ─────────────────────────────────────────────────────────────────

function selectPlanType(type) {
    planState.type = type;
    
    document.querySelectorAll('.toggle-option').forEach(el => {
        const input = el.querySelector('input');
        if (input) {
            el.classList.toggle('selected', input.value === type);
        }
    });
    
    renderChapters();
}

function renderChapters() {
    const container = document.getElementById('chaptersContainer');
    const title = document.getElementById('chaptersTitle');
    const subtitle = document.getElementById('chaptersSubtitle');
    
    if (!container || !title || !subtitle) return;
    
    if (planState.type === 'revision') {
        title.textContent = 'Chapters you want to revise';
        subtitle.textContent = 'Tap to remove chapters from your revision plan';
    } else {
        title.textContent = 'Chapters already completed';
        subtitle.textContent = 'Tap to mark chapters you\'ve finished';
    }
    
    const subjects = {};
    CHAPTERS.forEach(ch => {
        if (!subjects[ch.subject]) subjects[ch.subject] = [];
        subjects[ch.subject].push(ch);
    });
    
    let html = '';
    
    for (const [subject, chapters] of Object.entries(subjects)) {
        const totalHours = chapters.reduce((sum, ch) => sum + (ch.learning || 0) + (ch.revision || 0) + (ch.practice || 0), 0);
        const chapterColor = chapters[0].color;
        
        html += `<div class="subject-section">
            <div class="subject-header">
                <div class="subject-dot" style="background-color: ${chapterColor}"></div>
                <span>${subject}</span>
                <span class="subject-hours">${Math.round(totalHours)}h</span>
            </div>
            <div class="chapter-chips">`;
        
        chapters.forEach(ch => {
            const isDone = planState.completed.has(ch.id);
            const hours = (ch.learning || 0) + (ch.revision || 0) + (ch.practice || 0);
            html += `<div class="chip ${isDone ? 'done' : ''}" onclick="toggleChapter(${ch.id})">
                <div class="chip-num" style="${isDone ? `background-color: ${ch.color}` : ''}">${ch.id}</div>
                <div style="flex: 1;">${ch.title} <small>(${Math.round(hours)}h)</small></div>
                ${isDone ? '<div class="chip-check">✓</div>' : ''}
            </div>`;
        });
        
        html += '</div></div>';
    }
    
    container.innerHTML = html;
}

function toggleChapter(id) {
    if (planState.completed.has(id)) {
        planState.completed.delete(id);
    } else {
        planState.completed.add(id);
    }
    renderChapters();
}

function renderHours() {
    const container = document.getElementById('hoursGrid');
    if (!container) return;
    
    let html = '';
    
    DAYS.forEach(day => {
        const hours = planState.hours[day] || 1;
        html += `<div class="hour-input">
            <label>
                <div class="day-indicator ${hours > 0 ? 'active' : ''}"></div>
                ${day.slice(0, 3)}
            </label>
            <input type="range" min="0" max="8" step="0.5" value="${hours}" oninput="updateHours('${day}', this.value)">
            <div class="hour-display">${hours > 0 ? hours + 'h' : 'Rest'}</div>
        </div>`;
    });
    
    container.innerHTML = html;
    updateWeeklyTotal();
}

function updateHours(day, value) {
    planState.hours[day] = parseFloat(value);
    
    // Update display in real-time
    const container = document.getElementById('hoursGrid');
    if (container) {
        const inputs = container.querySelectorAll('input');
        const displays = container.querySelectorAll('.hour-display');
        const indicators = container.querySelectorAll('.day-indicator');
        
        inputs.forEach((input, idx) => {
            if (DAYS[idx] === day) {
                const val = parseFloat(value);
                displays[idx].textContent = val > 0 ? val + 'h' : 'Rest';
                indicators[idx].classList.toggle('active', val > 0);
            }
        });
    }
    
    updateWeeklyTotal();
}

function updateWeeklyTotal() {
    const total = Object.values(planState.hours).reduce((sum, h) => sum + h, 0);
    const weeklyEl = document.getElementById('weeklyTotal');
    if (weeklyEl) {
        weeklyEl.textContent = total.toFixed(1) + ' hrs/week';
    }
}

// ─────────────────────────────────────────────────────────────────
// PLAN GENERATION & SCHEDULING
// ─────────────────────────────────────────────────────────────────

function generatePlan() {
    const totalWeekly = Object.values(planState.hours).reduce((sum, h) => sum + h, 0);
    if (totalWeekly < 0.5) {
        alert('Please set at least some study hours per week!');
        return;
    }
    
    // Get included chapters
    const included = CHAPTERS.filter(ch => !planState.completed.has(ch.id));
    
    // Calculate schedule
    planState.schedule = computeSchedule(included, planState.hours);
    
    // Calculate totals
    const totalHours = included.reduce((sum, ch) => sum + ch.learning + ch.revision + ch.practice, 0);
    const daysAvailable = getDaysUntilTarget();
    const weeksAvailable = Math.ceil(daysAvailable / 7);
    const hoursAvailable = totalWeekly * weeksAvailable;
    
    planState.plan = {
        chapters: CHAPTERS,
        included: included,
        totalHours: totalHours,
        hoursAvailable: hoursAvailable,
        daysAvailable: daysAvailable,
        weeksAvailable: weeksAvailable,
        targetDate: getTargetDate(),
        startDate: new Date()
    };
    
    renderResults();
    
    const formSection = document.getElementById('formSection');
    const resultsSection = document.getElementById('resultsSection');
    
    if (formSection && resultsSection) {
        formSection.style.display = 'none';
        resultsSection.style.display = 'block';
        
        setTimeout(() => {
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

function computeSchedule(chapters, hoursByDay) {
    const targetDate = getTargetDate();
    const startDate = new Date();
    const daysAvailable = getDaysUntilTarget();
    
    const schedule = {
        byPhase: {
            learning: [],
            revision: [],
            practice: []
        },
        byWeek: {},
        byMonth: {}
    };
    
    let currentDate = new Date(startDate);
    let dayIndex = 0;
    
    // Distribute chapters through three phases
    chapters.forEach(ch => {
        const phases = [
            { name: 'Learning', hours: ch.learning },
            { name: 'Revision', hours: ch.revision },
            { name: 'Practice', hours: ch.practice }
        ];
        
        let phaseStartDate = new Date(currentDate);
        let phaseDateIndex = dayIndex;
        
        phases.forEach(phase => {
            if (phase.hours === 0) return;
            
            let remainingHours = phase.hours;
            let phaseEndDate = new Date(phaseStartDate);
            
            while (remainingHours > 0 && phaseEndDate < targetDate) {
                const dayOfWeek = DAYS[phaseDateIndex % 7];
                const availableHours = hoursByDay[dayOfWeek] || 0;
                
                if (availableHours > 0) {
                    const hoursToAllocate = Math.min(remainingHours, availableHours);
                    
                    schedule.byPhase[phase.name.toLowerCase()].push({
                        chapter: ch,
                        phase: phase.name,
                        date: new Date(phaseEndDate),
                        hours: hoursToAllocate,
                        day: dayOfWeek
                    });
                    
                    remainingHours -= hoursToAllocate;
                }
                
                phaseDateIndex++;
                phaseEndDate.setDate(phaseEndDate.getDate() + 1);
            }
            
            phaseStartDate = new Date(phaseEndDate);
            phaseDateIndex = Math.floor((phaseEndDate - startDate) / (1000 * 60 * 60 * 24)) % 7;
        });
    });
    
    return schedule;
}

// ─────────────────────────────────────────────────────────────────
// RESULTS RENDERING
// ─────────────────────────────────────────────────────────────────

function renderResults() {
    if (!planState.plan) return;
    
    const plan = planState.plan;
    const statsGrid = document.getElementById('statsGrid');
    const alertBox = document.getElementById('alertBox');
    
    // Stats
    const percent = Math.round((plan.totalHours / plan.hoursAvailable) * 100);
    let alertClass, alertMsg;
    
    if (percent <= 100) {
        alertClass = 'success';
        alertMsg = `✓ Perfect! You need ${Math.round(plan.totalHours)}h, you have ${Math.round(plan.hoursAvailable)}h.`;
    } else {
        alertClass = 'warning';
        alertMsg = `⚠ You need ${Math.round(plan.totalHours)}h but have ${Math.round(plan.hoursAvailable)}h.`;
    }
    
    if (alertBox) {
        alertBox.className = alertClass;
        alertBox.innerHTML = alertMsg;
    }
    
    if (statsGrid) {
        statsGrid.innerHTML = `
            <div class="stat-box">
                <div class="stat-number">${plan.daysAvailable}</div>
                <div class="stat-label">Days</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">${Math.round(plan.totalHours)}</div>
                <div class="stat-label">Hours</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">${plan.included.length}</div>
                <div class="stat-label">Chapters</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">${percent}%</div>
                <div class="stat-label">Usage</div>
            </div>
        `;
    }
    
    // Chapter Breakdown
    renderChapterBreakdown();
    
    // Preparation Plan Breakdown
    renderPreparationPlan();
    
    // Weekly Schedule
    renderWeeklySchedule();
}

function renderChapterBreakdown() {
    const container = document.getElementById('chapterBreakdownContainer');
    if (!container || !planState.plan) return;
    
    let html = '<h3 style="font-size: 1.2rem; color: #0d2ad4; margin-bottom: 1rem; font-weight: 600;">Chapter Breakdown</h3>';
    html += '<div style="overflow-x: auto;"><table style="width: 100%; border-collapse: collapse;">';
    html += '<thead><tr style="background: #0d2ad4; color: white;"><th style="padding: 10px; text-align: left;">Chapter</th><th style="padding: 10px; text-align: center;">Learn</th><th style="padding: 10px; text-align: center;">Revise</th><th style="padding: 10px; text-align: center;">Practice</th><th style="padding: 10px; text-align: center;">Total</th></tr></thead>';
    html += '<tbody>';
    
    planState.plan.included.forEach((ch, idx) => {
        const bg = idx % 2 === 0 ? '#f9f9f9' : 'white';
        const total = ch.learning + ch.revision + ch.practice;
        html += `<tr style="background: ${bg}; border-bottom: 1px solid #eee;">
            <td style="padding: 10px;"><strong>${ch.title}</strong></td>
            <td style="padding: 10px; text-align: center;">${ch.learning}h</td>
            <td style="padding: 10px; text-align: center;">${ch.revision}h</td>
            <td style="padding: 10px; text-align: center;">${ch.practice}h</td>
            <td style="padding: 10px; text-align: center; font-weight: bold; color: #0d2ad4;">${total.toFixed(1)}h</td>
        </tr>`;
    });
    
    html += '</tbody></table></div>';
    container.innerHTML = html;
}

function renderPreparationPlan() {
    const container = document.getElementById('preparationPlanContainer');
    if (!container || !planState.schedule) return;
    
    const schedule = planState.schedule;
    
    let html = '<h3 style="font-size: 1.2rem; color: #0d2ad4; margin-bottom: 1.5rem; font-weight: 600;">Preparation Plan Breakdown</h3>';
    
    // Learning Phase
    html += '<div style="margin-bottom: 2rem;"><h4 style="color: #049A8F; font-size: 1rem; margin-bottom: 1rem;">📚 Learning Phase (New Concepts)</h4>';
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">';
    
    if (schedule.byPhase.learning.length > 0) {
        schedule.byPhase.learning.slice(0, 50).forEach(item => {
            html += `<div style="padding: 1rem; background: #f0fffe; border-left: 4px solid ${item.chapter.color}; border-radius: 4px;">
                <strong>${item.chapter.title}</strong><br>
                <small style="color: #666;">${formatDate(item.date)} | ${item.hours}h</small>
            </div>`;
        });
    } else {
        html += '<p style="color: #999;">No learning phase scheduled</p>';
    }
    
    html += '</div></div>';
    
    // Revision Phase
    html += '<div style="margin-bottom: 2rem;"><h4 style="color: #EDB538; font-size: 1rem; margin-bottom: 1rem;">🔄 Revision Phase (Consolidation)</h4>';
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">';
    
    if (schedule.byPhase.revision.length > 0) {
        schedule.byPhase.revision.slice(0, 50).forEach(item => {
            html += `<div style="padding: 1rem; background: #fffbf0; border-left: 4px solid ${item.chapter.color}; border-radius: 4px;">
                <strong>${item.chapter.title}</strong><br>
                <small style="color: #666;">${formatDate(item.date)} | ${item.hours}h</small>
            </div>`;
        });
    } else {
        html += '<p style="color: #999;">No revision scheduled</p>';
    }
    
    html += '</div></div>';
    
    // Practice Phase
    html += '<div><h4 style="color: #FF6B35; font-size: 1rem; margin-bottom: 1rem;">⚡ Practice Phase (Mock Tests)</h4>';
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">';
    
    if (schedule.byPhase.practice.length > 0) {
        schedule.byPhase.practice.slice(0, 50).forEach(item => {
            html += `<div style="padding: 1rem; background: #fff5f0; border-left: 4px solid ${item.chapter.color}; border-radius: 4px;">
                <strong>${item.chapter.title}</strong><br>
                <small style="color: #666;">${formatDate(item.date)} | ${item.hours}h</small>
            </div>`;
        });
    } else {
        html += '<p style="color: #999;">No practice scheduled</p>';
    }
    
    html += '</div></div>';
    
    container.innerHTML = html;
}

function renderWeeklySchedule() {
    const container = document.getElementById('weeklyScheduleContainer');
    if (!container) return;
    
    let html = '<h3 style="font-size: 1.2rem; color: #0d2ad4; margin-bottom: 1rem; font-weight: 600;">Weekly Schedule</h3>';
    html += '<div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px;">';
    
    DAYS.forEach(day => {
        const hours = planState.hours[day] || 0;
        const bg = hours > 0 ? '#f0fffe' : '#f5f5f5';
        const textColor = hours > 0 ? '#049A8F' : '#999';
        
        html += `<div style="padding: 1rem; background: ${bg}; border-radius: 8px; text-align: center; border: 1px solid #ddd;">
            <strong style="display: block; margin-bottom: 0.5rem;">${day.slice(0, 3)}</strong>
            <div style="font-size: 1.5rem; color: ${textColor}; font-weight: bold;">${hours}h</div>
            <small style="color: #999; display: block; margin-top: 0.5rem;">${(hours * 52).toFixed(0)}h/year</small>
        </div>`;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function editPlan() {
    const form = document.getElementById('formSection');
    const results = document.getElementById('resultsSection');
    
    if (form && results) {
        results.style.display = 'none';
        form.style.display = 'block';
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ─────────────────────────────────────────────────────────────────
// PDF GENERATION - WORKING VERSION
// ─────────────────────────────────────────────────────────────────

function downloadPDF() {
    if (!planState.plan) {
        alert('Please generate a plan first');
        return;
    }
    
    // Create HTML content for PDF
    const htmlContent = generatePDFHTML();
    
    // Create a temporary element
    const container = document.createElement('div');
    container.innerHTML = htmlContent;
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.width = '800px';
    container.style.padding = '20px';
    container.style.fontFamily = 'Arial, sans-serif';
    document.body.appendChild(container);
    
    // Use html2pdf if available
    if (typeof html2pdf !== 'undefined') {
        html2pdf().set({
            margin: 10,
            filename: 'study-plan.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
        }).from(container).save().then(() => {
            document.body.removeChild(container);
        });
    } else {
        // Fallback: Use print dialog
        alert('Opening print dialog. Press Ctrl+P (or Cmd+P) to save as PDF');
        window.print();
        setTimeout(() => {
            document.body.removeChild(container);
        }, 1000);
    }
}

function generatePDFHTML() {
    if (!planState.plan || !planState.schedule) return '';
    
    const plan = planState.plan;
    const schedule = planState.schedule;
    
    let html = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            
            <!-- Title Page -->
            <h1 style="color: #0d2ad4; text-align: center; margin-bottom: 0.5rem;">STUDY PLAN SCHEDULE</h1>
            <p style="text-align: center; color: #666; margin-bottom: 2rem;">
                Target Date: ${formatDate(plan.targetDate)} | 
                Days: ${plan.daysAvailable} | 
                Weeks: ${plan.weeksAvailable}
            </p>
            
            <hr style="border: 1px solid #0d2ad4; margin: 2rem 0;">
            
            <!-- Chapter Breakdown Table -->
            <h2 style="color: #0d2ad4; border-bottom: 2px solid #0d2ad4; padding-bottom: 0.5rem; margin-bottom: 1rem;">Chapter Breakdown</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
                <thead>
                    <tr style="background: #0d2ad4; color: white;">
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Chapter</th>
                        <th style="padding: 10px; text-align: center; border: 1px solid #ddd;">Learn</th>
                        <th style="padding: 10px; text-align: center; border: 1px solid #ddd;">Revise</th>
                        <th style="padding: 10px; text-align: center; border: 1px solid #ddd;">Practice</th>
                        <th style="padding: 10px; text-align: center; border: 1px solid #ddd;">Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${plan.included.map((ch, idx) => {
                        const bg = idx % 2 === 0 ? '#f9f9f9' : 'white';
                        const total = ch.learning + ch.revision + ch.practice;
                        return `<tr style="background: ${bg}; border-bottom: 1px solid #ddd;">
                            <td style="padding: 10px; border: 1px solid #ddd;"><strong>${ch.title}</strong></td>
                            <td style="padding: 10px; text-align: center; border: 1px solid #ddd;">${ch.learning}h</td>
                            <td style="padding: 10px; text-align: center; border: 1px solid #ddd;">${ch.revision}h</td>
                            <td style="padding: 10px; text-align: center; border: 1px solid #ddd;">${ch.practice}h</td>
                            <td style="padding: 10px; text-align: center; font-weight: bold; color: #0d2ad4; border: 1px solid #ddd;">${total.toFixed(1)}h</td>
                        </tr>`;
                    }).join('')}
                </tbody>
            </table>
            
            <hr style="border: 1px solid #0d2ad4; margin: 2rem 0;">
            
            <!-- Preparation Plan -->
            <h2 style="color: #0d2ad4; border-bottom: 2px solid #0d2ad4; padding-bottom: 0.5rem; margin-bottom: 1.5rem; page-break-before: always;">Preparation Plan Breakdown</h2>
            
            <h3 style="color: #049A8F; margin-bottom: 1rem;">📚 Learning Phase (New Concepts)</h3>
            ${schedule.byPhase.learning.length > 0 ? `<div>${schedule.byPhase.learning.map(item => `
                <div style="padding: 0.5rem; margin-bottom: 0.5rem; border-left: 4px solid ${item.chapter.color}; padding-left: 1rem;">
                    <strong>${item.chapter.title}</strong><br>
                    <small style="color: #666;">${formatDate(item.date)} | ${item.hours}h | ${item.day}</small>
                </div>
            `).join('')}</div>` : '<p style="color: #999;">No learning phase scheduled</p>'}
            
            <h3 style="color: #EDB538; margin-top: 1.5rem; margin-bottom: 1rem;">🔄 Revision Phase (Consolidation)</h3>
            ${schedule.byPhase.revision.length > 0 ? `<div>${schedule.byPhase.revision.map(item => `
                <div style="padding: 0.5rem; margin-bottom: 0.5rem; border-left: 4px solid ${item.chapter.color}; padding-left: 1rem;">
                    <strong>${item.chapter.title}</strong><br>
                    <small style="color: #666;">${formatDate(item.date)} | ${item.hours}h | ${item.day}</small>
                </div>
            `).join('')}</div>` : '<p style="color: #999;">No revision scheduled</p>'}
            
            <h3 style="color: #FF6B35; margin-top: 1.5rem; margin-bottom: 1rem;">⚡ Practice Phase (Mock Tests)</h3>
            ${schedule.byPhase.practice.length > 0 ? `<div>${schedule.byPhase.practice.map(item => `
                <div style="padding: 0.5rem; margin-bottom: 0.5rem; border-left: 4px solid ${item.chapter.color}; padding-left: 1rem;">
                    <strong>${item.chapter.title}</strong><br>
                    <small style="color: #666;">${formatDate(item.date)} | ${item.hours}h | ${item.day}</small>
                </div>
            `).join('')}</div>` : '<p style="color: #999;">No practice scheduled</p>'}
            
            <hr style="border: 1px solid #0d2ad4; margin: 2rem 0; page-break-before: always;">
            
            <!-- Weekly Schedule -->
            <h2 style="color: #0d2ad4; border-bottom: 2px solid #0d2ad4; padding-bottom: 0.5rem; margin-bottom: 1rem;">Weekly Schedule</h2>
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    ${DAYS.map(day => {
                        const hours = planState.hours[day] || 0;
                        return `<td style="padding: 10px; text-align: center; border: 1px solid #ddd; background: ${hours > 0 ? '#f0fffe' : '#f5f5f5'};">
                            <strong>${day.slice(0, 3)}</strong><br>
                            <span style="font-size: 1.2rem; color: #0d2ad4; font-weight: bold;">${hours}h</span><br>
                            <small style="color: #666;">${(hours * 52).toFixed(0)}h/year</small>
                        </td>`;
                    }).join('')}
                </tr>
            </table>
            
            <p style="text-align: center; color: #999; margin-top: 2rem; font-size: 0.9rem;">
                Generated on ${new Date().toLocaleDateString('en-IN')} | Ready by 31 January
            </p>
        </div>
    `;
    
    return html;
}

// ─────────────────────────────────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    console.log('Planner ready - Target:', getTargetDate().toDateString());
});
