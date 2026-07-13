/* ═══════════════════════════════════════════════════════════════════
   STUDY PLANNER - COMPLETE OVERHAUL
   Fixed: Width, Dates, Phases, PDF, Weekly Schedule, Chapter Numbering
═══════════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────
// DATA - CHAPTERS WITH INDIVIDUAL NUMBERING PER SUBJECT
// ─────────────────────────────────────────────────────────────────

const CBSE10_PHYSICS = [
    { id: 'phys-1', number: 1, title: 'Light', learning: 14, subject: 'Physics', board: 'CBSE 10', color: '#FF6B35' },
    { id: 'phys-2', number: 2, title: 'Human Eye', learning: 8, subject: 'Physics', board: 'CBSE 10', color: '#FF6B35' },
    { id: 'phys-3', number: 3, title: 'Electricity', learning: 12, subject: 'Physics', board: 'CBSE 10', color: '#FF6B35' },
    { id: 'phys-4', number: 4, title: 'Magnetic Effects', learning: 10, subject: 'Physics', board: 'CBSE 10', color: '#FF6B35' },
];

const CBSE10_CHEMISTRY = [
    { id: 'chem-1', number: 1, title: 'Chemical Reactions', learning: 6, subject: 'Chemistry', board: 'CBSE 10', color: '#0d2ad4' },
    { id: 'chem-2', number: 2, title: 'Acids, Bases, Salts', learning: 8, subject: 'Chemistry', board: 'CBSE 10', color: '#0d2ad4' },
    { id: 'chem-3', number: 3, title: 'Metals & Non-metals', learning: 10, subject: 'Chemistry', board: 'CBSE 10', color: '#0d2ad4' },
    { id: 'chem-4', number: 4, title: 'Carbon Compounds', learning: 12, subject: 'Chemistry', board: 'CBSE 10', color: '#0d2ad4' },
];

const CBSE10_BIOLOGY = [
    { id: 'bio-1', number: 1, title: 'Life Processes', learning: 14, subject: 'Biology', board: 'CBSE 10', color: '#16a34a' },
    { id: 'bio-2', number: 2, title: 'Control & Coordination', learning: 8, subject: 'Biology', board: 'CBSE 10', color: '#16a34a' },
    { id: 'bio-3', number: 3, title: 'Reproduction', learning: 10, subject: 'Biology', board: 'CBSE 10', color: '#16a34a' },
    { id: 'bio-4', number: 4, title: 'Heredity', learning: 6, subject: 'Biology', board: 'CBSE 10', color: '#16a34a' },
];

const CBSE12_PHYSICS = [
    { id: 'phys-1', number: 1, title: 'Electric Charges and Fields', learning: 22, subject: 'Physics', board: 'CBSE 12', color: '#FF6B35' },
    { id: 'phys-2', number: 2, title: 'Electrostatic Potential & Capacitance', learning: 18, subject: 'Physics', board: 'CBSE 12', color: '#FF6B35' },
    { id: 'phys-3', number: 3, title: 'Current Electricity', learning: 11.7, subject: 'Physics', board: 'CBSE 12', color: '#FF6B35' },
    { id: 'phys-4', number: 4, title: 'Moving Charges and Magnetism', learning: 14.5, subject: 'Physics', board: 'CBSE 12', color: '#FF6B35' },
    { id: 'phys-5', number: 5, title: 'Magnetism and Matter', learning: 7.2, subject: 'Physics', board: 'CBSE 12', color: '#FF6B35' },
    { id: 'phys-6', number: 6, title: 'Electromagnetic Induction', learning: 9.2, subject: 'Physics', board: 'CBSE 12', color: '#FF6B35' },
];

const CBSE12_CHEMISTRY = [
    { id: 'chem-1', number: 1, title: 'Solutions', learning: 12, subject: 'Chemistry', board: 'CBSE 12', color: '#0d2ad4' },
    { id: 'chem-2', number: 2, title: 'Electrochemistry', learning: 14, subject: 'Chemistry', board: 'CBSE 12', color: '#0d2ad4' },
    { id: 'chem-3', number: 3, title: 'Chemical Kinetics', learning: 12, subject: 'Chemistry', board: 'CBSE 12', color: '#0d2ad4' },
    { id: 'chem-4', number: 4, title: 'd- and f-Block Elements', learning: 10, subject: 'Chemistry', board: 'CBSE 12', color: '#0d2ad4' },
    { id: 'chem-5', number: 5, title: 'Coordination Compounds', learning: 12, subject: 'Chemistry', board: 'CBSE 12', color: '#0d2ad4' },
    { id: 'chem-6', number: 6, title: 'Haloalkanes and Haloarenes', learning: 12, subject: 'Chemistry', board: 'CBSE 12', color: '#0d2ad4' },
];

const STATE_BOARD_PHYSICS = [
    { id: 'phys-1', number: 1, title: 'Electrostatics', learning: 30, subject: 'Physics', board: 'State Board', color: '#FF6B35' },
    { id: 'phys-2', number: 2, title: 'Current Electricity', learning: 18, subject: 'Physics', board: 'State Board', color: '#FF6B35' },
    { id: 'phys-3', number: 3, title: 'Magnetism & Magnetic Effects', learning: 27, subject: 'Physics', board: 'State Board', color: '#FF6B35' },
    { id: 'phys-4', number: 4, title: 'EMI and Alternating Current', learning: 27, subject: 'Physics', board: 'State Board', color: '#FF6B35' },
    { id: 'phys-5', number: 5, title: 'Ray Optics', learning: 22, subject: 'Physics', board: 'State Board', color: '#FF6B35' },
    { id: 'phys-6', number: 6, title: 'Wave Optics', learning: 24, subject: 'Physics', board: 'State Board', color: '#FF6B35' },
];

const STATE_BOARD_CHEMISTRY = [
    { id: 'chem-1', number: 1, title: 'Metallurgy', learning: 6, subject: 'Chemistry', board: 'State Board', color: '#0d2ad4' },
    { id: 'chem-2', number: 2, title: 'p-Block Elements-I', learning: 8, subject: 'Chemistry', board: 'State Board', color: '#0d2ad4' },
    { id: 'chem-3', number: 3, title: 'p-Block Elements-II', learning: 12, subject: 'Chemistry', board: 'State Board', color: '#0d2ad4' },
    { id: 'chem-4', number: 4, title: 'Transition & Inner Transition', learning: 8, subject: 'Chemistry', board: 'State Board', color: '#0d2ad4' },
    { id: 'chem-5', number: 5, title: 'Coordination Chemistry', learning: 12, subject: 'Chemistry', board: 'State Board', color: '#0d2ad4' },
    { id: 'chem-6', number: 6, title: 'Solid State', learning: 7, subject: 'Chemistry', board: 'State Board', color: '#0d2ad4' },
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// ─────────────────────────────────────────────────────────────────
// STATE & DEFAULTS
// ─────────────────────────────────────────────────────────────────

let CHAPTERS = [];

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

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function getWeekNumber(date) {
    const firstDay = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDay) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDay.getDay() + 1) / 7);
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
            CHAPTERS = [...CBSE10_PHYSICS, ...CBSE10_CHEMISTRY, ...CBSE10_BIOLOGY];
            break;
        case 'cbse12':
            CHAPTERS = [...CBSE12_PHYSICS, ...CBSE12_CHEMISTRY];
            break;
        case 'stateboard':
            CHAPTERS = [...STATE_BOARD_PHYSICS, ...STATE_BOARD_CHEMISTRY];
            break;
        default:
            CHAPTERS = [...CBSE10_PHYSICS, ...CBSE10_CHEMISTRY, ...CBSE10_BIOLOGY];
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
        const totalHours = chapters.reduce((sum, ch) => sum + (ch.learning || 0), 0);
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
            const hours = ch.learning || 0;
            html += `<div class="chip ${isDone ? 'done' : ''}" onclick="toggleChapter('${ch.id}')">
                <div class="chip-num" style="${isDone ? `background-color: ${ch.color}` : ''}">${ch.number}</div>
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
            <input type="range" min="0" max="8" step="0.5" value="${hours}" 
                   oninput="updateHours('${day}', this.value)" 
                   style="cursor: pointer; outline: none;">
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
                input.value = val;
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
    
    if (included.length === 0) {
        alert('Please select chapters to study!');
        return;
    }
    
    // Calculate schedule
    planState.schedule = computeSchedule(included, planState.hours);
    
    // Calculate totals
    const totalHours = included.reduce((sum, ch) => sum + ch.learning, 0);
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

/**
 * New schedule computation: Dec only revision, Jan only revision+practice
 * Each chapter gets: Learning phase first, then Revision phase, then Practice phase
 * No overlaps - one activity per day per hour slot
 */
function computeSchedule(chapters, hoursByDay) {
    const startDate = new Date();
    const targetDate = getTargetDate();
    const decemberEnd = new Date(startDate.getFullYear(), 11, 31);
    
    const schedule = {
        byChapter: {},
        byDate: {},
        byWeek: {}
    };
    
    let currentDate = new Date(startDate);
    let dayIndex = (currentDate.getDay() - 1 + 7) % 7; // 0=Monday
    
    // PHASE 1: LEARNING (all completed before December 31)
    // Divide available learning hours across days until Dec 31
    
    chapters.forEach(ch => {
        const learningHours = ch.learning || 0;
        schedule.byChapter[ch.id] = {
            chapter: ch,
            learning: [],
            revision: [],
            practice: []
        };
        
        // Learning phase: distribute across available days until Dec 31
        let remainingLearning = learningHours;
        let learningDate = new Date(startDate);
        let learningDayIndex = dayIndex;
        
        while (remainingLearning > 0 && learningDate <= decemberEnd) {
            const dayOfWeek = DAYS[learningDayIndex % 7];
            const availableHours = hoursByDay[dayOfWeek] || 0;
            
            if (availableHours > 0) {
                const hoursToAllocate = Math.min(remainingLearning, availableHours);
                
                schedule.byChapter[ch.id].learning.push({
                    phase: 'Learning',
                    date: new Date(learningDate),
                    hours: hoursToAllocate,
                    day: dayOfWeek,
                    dateStr: formatDate(learningDate)
                });
                
                remainingLearning -= hoursToAllocate;
            }
            
            learningDayIndex++;
            learningDate.setDate(learningDate.getDate() + 1);
        }
    });
    
    // PHASE 2: REVISION (December onwards, after learning complete for each chapter)
    // Revision happens in December after learning phase
    chapters.forEach(ch => {
        let revisionHours = Math.ceil(ch.learning * 0.4); // Revision = ~40% of learning hours
        
        // Find when learning phase ends for this chapter
        const lastLearningDate = schedule.byChapter[ch.id].learning.length > 0 
            ? schedule.byChapter[ch.id].learning[schedule.byChapter[ch.id].learning.length - 1].date
            : decemberEnd;
        
        let revisionDate = new Date(lastLearningDate);
        revisionDate.setDate(revisionDate.getDate() + 1); // Start day after learning ends
        
        // Ensure revision date is in December
        if (revisionDate > decemberEnd) {
            revisionDate = new Date(decemberEnd);
        }
        
        let revisionDayIndex = (revisionDate.getDay() - 1 + 7) % 7;
        
        while (revisionHours > 0 && revisionDate <= decemberEnd) {
            const dayOfWeek = DAYS[revisionDayIndex % 7];
            const availableHours = hoursByDay[dayOfWeek] || 0;
            
            if (availableHours > 0) {
                const hoursToAllocate = Math.min(revisionHours, availableHours);
                
                schedule.byChapter[ch.id].revision.push({
                    phase: 'Revision',
                    date: new Date(revisionDate),
                    hours: hoursToAllocate,
                    day: dayOfWeek,
                    dateStr: formatDate(revisionDate)
                });
                
                revisionHours -= hoursToAllocate;
            }
            
            revisionDayIndex++;
            revisionDate.setDate(revisionDate.getDate() + 1);
        }
    });
    
    // PHASE 3: PRACTICE TESTS (January only)
    // Practice tests happen throughout January
    chapters.forEach(ch => {
        let practiceHours = Math.ceil(ch.learning * 0.3); // Practice = ~30% of learning hours
        
        // Practice starts from January 1
        let practiceDate = new Date(startDate.getFullYear() + 1, 0, 1);
        let practiceDayIndex = (practiceDate.getDay() - 1 + 7) % 7;
        
        while (practiceHours > 0 && practiceDate <= targetDate) {
            const dayOfWeek = DAYS[practiceDayIndex % 7];
            const availableHours = hoursByDay[dayOfWeek] || 0;
            
            if (availableHours > 0) {
                const hoursToAllocate = Math.min(practiceHours, availableHours);
                
                schedule.byChapter[ch.id].practice.push({
                    phase: 'Practice',
                    date: new Date(practiceDate),
                    hours: hoursToAllocate,
                    day: dayOfWeek,
                    dateStr: formatDate(practiceDate)
                });
                
                practiceHours -= hoursToAllocate;
            }
            
            practiceDayIndex++;
            practiceDate.setDate(practiceDate.getDate() + 1);
        }
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
        alertMsg = `⚠ You need ${Math.round(plan.totalHours)}h but have ${Math.round(plan.hoursAvailable)}h. Increase daily hours.`;
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
                <div class="stat-label">Hours Needed</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">${plan.included.length}</div>
                <div class="stat-label">Chapters</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">${plan.weeksAvailable}</div>
                <div class="stat-label">Weeks</div>
            </div>
        `;
    }
    
    // Render three sections: Preparation Plan, Weekly Schedule, Chapter Breakdown
    renderPreparationPlanTable();
    renderWeeklySchedule();
    renderChapterBreakdown();
}

function renderPreparationPlanTable() {
    const container = document.getElementById('preparationPlanContainer');
    if (!container || !planState.plan) return;
    
    const schedule = planState.schedule;
    
    let html = '<h3 style="margin-bottom: 1rem; color: #1f1f1f;">📚 Preparation Plan Breakdown</h3>';
    html += '<div style="overflow-x: auto;">';
    html += '<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">';
    html += '<thead><tr style="background: #f0f0f0; border-bottom: 2px solid #0d2ad4;">';
    html += '<th style="padding: 0.8rem; text-align: left; border: 1px solid #ddd;">Chapter</th>';
    html += '<th style="padding: 0.8rem; text-align: left; border: 1px solid #ddd;">Learning Dates</th>';
    html += '<th style="padding: 0.8rem; text-align: left; border: 1px solid #ddd;">Revision Dates</th>';
    html += '<th style="padding: 0.8rem; text-align: left; border: 1px solid #ddd;">Practice Dates</th>';
    html += '</tr></thead>';
    html += '<tbody>';
    
    planState.plan.included.forEach(ch => {
        const data = schedule.byChapter[ch.id];
        if (!data) return;
        
        const learningDates = data.learning.length > 0 
            ? data.learning.map(d => d.dateStr).join(', ')
            : 'N/A';
        const revisionDates = data.revision.length > 0 
            ? data.revision.map(d => d.dateStr).join(', ')
            : 'N/A';
        const practiceDates = data.practice.length > 0 
            ? data.practice.map(d => d.dateStr).join(', ')
            : 'N/A';
        
        html += `<tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 0.8rem; border: 1px solid #ddd; font-weight: 500;">${ch.number}. ${ch.title}</td>
            <td style="padding: 0.8rem; border: 1px solid #ddd; font-size: 0.9rem; color: #555;">${learningDates}</td>
            <td style="padding: 0.8rem; border: 1px solid #ddd; font-size: 0.9rem; color: #555;">${revisionDates}</td>
            <td style="padding: 0.8rem; border: 1px solid #ddd; font-size: 0.9rem; color: #555;">${practiceDates}</td>
        </tr>`;
    });
    
    html += '</tbody></table>';
    html += '</div>';
    
    container.innerHTML = html;
}

function renderWeeklySchedule() {
    const container = document.getElementById('weeklyScheduleContainer');
    if (!container || !planState.plan || !planState.schedule) return;
    
    const startDate = planState.plan.startDate;
    const targetDate = planState.plan.targetDate;
    const schedule = planState.schedule;
    
    let html = '<h3 style="margin-bottom: 1rem; color: #1f1f1f;">📅 Weekly Schedule (Today till 31 Jan)</h3>';
    
    // Group activities by week
    const weeks = {};
    
    planState.plan.included.forEach(ch => {
        const data = schedule.byChapter[ch.id];
        if (!data) return;
        
        [...data.learning, ...data.revision, ...data.practice].forEach(activity => {
            const weekNum = getWeekNumber(activity.date);
            const weekKey = `Week ${weekNum}`;
            
            if (!weeks[weekKey]) {
                weeks[weekKey] = [];
            }
            
            weeks[weekKey].push({
                date: activity.date,
                dateStr: activity.dateStr,
                chapter: ch,
                subject: ch.subject,
                chapterNum: ch.number,
                phase: activity.phase,
                hours: activity.hours,
                day: activity.day,
                color: ch.color
            });
        });
    });
    
    // Render weeks
    Object.keys(weeks).slice(0, 10).forEach(weekKey => {
        const activities = weeks[weekKey];
        const dates = [...new Set(activities.map(a => a.dateStr))];
        
        html += `<div style="margin-bottom: 1.5rem; padding: 1rem; background: #f9fffe; border-left: 4px solid #0d2ad4; border-radius: 4px;">
            <h4 style="margin-bottom: 0.8rem; color: #0d2ad4;">${weekKey}</h4>
            <div style="display: grid; gap: 0.5rem;">`;
        
        const sortedActivities = activities.sort((a, b) => a.date - b.date);
        const groupedByDate = {};
        
        sortedActivities.forEach(activity => {
            if (!groupedByDate[activity.dateStr]) {
                groupedByDate[activity.dateStr] = [];
            }
            groupedByDate[activity.dateStr].push(activity);
        });
        
        Object.entries(groupedByDate).forEach(([dateStr, acts]) => {
            html += `<div style="padding: 0.6rem; background: white; border-radius: 4px; border-left: 3px solid #0d2ad4;">
                <div style="font-weight: 600; margin-bottom: 0.3rem; color: #1f1f1f;">${dateStr}</div>`;
            
            acts.forEach(act => {
                html += `<div style="margin: 0.3rem 0; font-size: 0.9rem; padding-left: 0.5rem;">
                    <span style="display: inline-block; background: ${act.color}20; color: ${act.color}; padding: 0.2rem 0.5rem; border-radius: 3px; font-weight: 500;">${act.phase}</span>
                    <span style="margin-left: 0.5rem; color: #555;">${act.chapterNum}. ${act.chapter.title} (${act.hours}h)</span>
                </div>`;
            });
            
            html += '</div>';
        });
        
        html += '</div></div>';
    });
    
    container.innerHTML = html;
}

function renderChapterBreakdown() {
    const container = document.getElementById('chapterBreakdownContainer');
    if (!container || !planState.plan) return;
    
    let html = '<h3 style="margin-bottom: 1rem; color: #1f1f1f;">📖 Chapter-wise Hours Allocation</h3>';
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">';
    
    planState.plan.included.forEach(ch => {
        const totalHours = ch.learning;
        const revisionHours = Math.ceil(ch.learning * 0.4);
        const practiceHours = Math.ceil(ch.learning * 0.3);
        
        html += `<div style="padding: 1rem; background: white; border: 1px solid #e0e0e0; border-radius: 8px; border-left: 4px solid ${ch.color};">
            <h4 style="margin-bottom: 0.8rem; color: ${ch.color}; font-size: 1rem;">${ch.number}. ${ch.title}</h4>
            <div style="display: flex; justify-content: space-between; gap: 1rem;">
                <div style="flex: 1;">
                    <div style="font-size: 1.2rem; font-weight: 600; color: #0d2ad4;">${totalHours}h</div>
                    <div style="font-size: 0.85rem; color: #666;">Learning</div>
                </div>
                <div style="flex: 1;">
                    <div style="font-size: 1.2rem; font-weight: 600; color: #16a34a;">${revisionHours}h</div>
                    <div style="font-size: 0.85rem; color: #666;">Revision</div>
                </div>
                <div style="flex: 1;">
                    <div style="font-size: 1.2rem; font-weight: 600; color: #FF6B35;">${practiceHours}h</div>
                    <div style="font-size: 0.85rem; color: #666;">Practice</div>
                </div>
            </div>
        </div>`;
    });
    
    html += '</div>';
    
    container.innerHTML = html;
}

function editPlan() {
    const formSection = document.getElementById('formSection');
    const resultsSection = document.getElementById('resultsSection');
    
    if (formSection && resultsSection) {
        resultsSection.style.display = 'none';
        formSection.style.display = 'block';
        
        setTimeout(() => {
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

// ─────────────────────────────────────────────────────────────────
// PDF GENERATION
// ─────────────────────────────────────────────────────────────────

function downloadPDF() {
    if (!planState.plan || !planState.schedule) {
        alert('Please generate a plan first!');
        return;
    }
    
    const element = document.createElement('div');
    element.style.padding = '20px';
    element.style.fontFamily = 'Arial, sans-serif';
    element.style.fontSize = '12px';
    element.style.lineHeight = '1.6';
    element.style.color = '#333';
    
    // Add title
    element.innerHTML = `
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #0d2ad4; margin: 0; font-size: 28px;">Study Plan - Prof. Dr. S. Balaji</h1>
            <p style="margin: 5px 0; color: #666;">Generated on ${new Date().toLocaleDateString('en-IN')}</p>
            <p style="margin: 5px 0; color: #666;">Target Date: ${formatDate(planState.plan.targetDate)}</p>
        </div>
    `;
    
    // 1. STATISTICS
    element.innerHTML += `
        <div style="margin-bottom: 30px; page-break-after: avoid;">
            <h2 style="color: #0d2ad4; font-size: 18px; border-bottom: 2px solid #0d2ad4; padding-bottom: 10px;">📊 Plan Summary</h2>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 15px;">
                <div style="border: 1px solid #ddd; padding: 15px; text-align: center; border-radius: 8px;">
                    <div style="font-size: 24px; font-weight: bold; color: #0d2ad4;">${planState.plan.daysAvailable}</div>
                    <div style="color: #666; font-size: 11px;">Days Available</div>
                </div>
                <div style="border: 1px solid #ddd; padding: 15px; text-align: center; border-radius: 8px;">
                    <div style="font-size: 24px; font-weight: bold; color: #16a34a;">${Math.round(planState.plan.totalHours)}</div>
                    <div style="color: #666; font-size: 11px;">Hours Needed</div>
                </div>
                <div style="border: 1px solid #ddd; padding: 15px; text-align: center; border-radius: 8px;">
                    <div style="font-size: 24px; font-weight: bold; color: #FF6B35;">${planState.plan.included.length}</div>
                    <div style="color: #666; font-size: 11px;">Chapters</div>
                </div>
                <div style="border: 1px solid #ddd; padding: 15px; text-align: center; border-radius: 8px;">
                    <div style="font-size: 24px; font-weight: bold; color: #0d2ad4;">${planState.plan.weeksAvailable}</div>
                    <div style="color: #666; font-size: 11px;">Weeks</div>
                </div>
            </div>
        </div>
    `;
    
    // 2. PREPARATION PLAN TABLE
    element.innerHTML += `
        <div style="margin-bottom: 30px; page-break-inside: avoid;">
            <h2 style="color: #0d2ad4; font-size: 18px; border-bottom: 2px solid #0d2ad4; padding-bottom: 10px;">📚 Preparation Plan Breakdown</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 10px;">
                <thead>
                    <tr style="background: #e8e8e8; border-bottom: 2px solid #0d2ad4;">
                        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Chapter</th>
                        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Learning Dates</th>
                        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Revision Dates</th>
                        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Practice Dates</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    planState.plan.included.forEach(ch => {
        const data = planState.schedule.byChapter[ch.id];
        if (!data) return;
        
        const learningDates = data.learning.length > 0 
            ? data.learning.map(d => d.dateStr).join(', ')
            : 'N/A';
        const revisionDates = data.revision.length > 0 
            ? data.revision.map(d => d.dateStr).join(', ')
            : 'N/A';
        const practiceDates = data.practice.length > 0 
            ? data.practice.map(d => d.dateStr).join(', ')
            : 'N/A';
        
        element.innerHTML += `
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">${ch.number}. ${ch.title}</td>
                <td style="border: 1px solid #ddd; padding: 8px; font-size: 9px;">${learningDates}</td>
                <td style="border: 1px solid #ddd; padding: 8px; font-size: 9px;">${revisionDates}</td>
                <td style="border: 1px solid #ddd; padding: 8px; font-size: 9px;">${practiceDates}</td>
            </tr>
        `;
    });
    
    element.innerHTML += `</tbody></table></div>`;
    
    // 3. CHAPTER BREAKDOWN
    element.innerHTML += `
        <div style="margin-bottom: 30px;">
            <h2 style="color: #0d2ad4; font-size: 18px; border-bottom: 2px solid #0d2ad4; padding-bottom: 10px;">📖 Chapter-wise Hours Allocation</h2>
            <div style="margin-top: 15px;">
    `;
    
    planState.plan.included.forEach(ch => {
        const totalHours = ch.learning;
        const revisionHours = Math.ceil(ch.learning * 0.4);
        const practiceHours = Math.ceil(ch.learning * 0.3);
        
        element.innerHTML += `
            <div style="margin-bottom: 12px; padding: 10px; background: #f9f9f9; border-left: 3px solid ${ch.color}; border-radius: 4px; page-break-inside: avoid;">
                <strong style="color: ${ch.color};">${ch.number}. ${ch.title}</strong>
                <div style="margin-top: 5px; font-size: 11px;">
                    Learning: ${totalHours}h | Revision: ${revisionHours}h | Practice: ${practiceHours}h
                </div>
            </div>
        `;
    });
    
    element.innerHTML += `</div></div>`;
    
    // 4. WEEKLY SCHEDULE
    element.innerHTML += `
        <div>
            <h2 style="color: #0d2ad4; font-size: 18px; border-bottom: 2px solid #0d2ad4; padding-bottom: 10px;">📅 Weekly Schedule</h2>
    `;
    
    const weeks = {};
    planState.plan.included.forEach(ch => {
        const data = planState.schedule.byChapter[ch.id];
        if (!data) return;
        
        [...data.learning, ...data.revision, ...data.practice].forEach(activity => {
            const weekNum = getWeekNumber(activity.date);
            const weekKey = `Week ${weekNum}`;
            
            if (!weeks[weekKey]) {
                weeks[weekKey] = [];
            }
            
            weeks[weekKey].push({
                date: activity.date,
                dateStr: activity.dateStr,
                chapter: ch,
                chapterNum: ch.number,
                phase: activity.phase,
                hours: activity.hours,
                color: ch.color
            });
        });
    });
    
    Object.keys(weeks).slice(0, 10).forEach(weekKey => {
        const activities = weeks[weekKey];
        element.innerHTML += `
            <div style="margin: 15px 0; padding: 10px; background: #f0f7ff; border-left: 4px solid #0d2ad4; page-break-inside: avoid;">
                <strong style="color: #0d2ad4;">${weekKey}</strong>
                <div style="margin-top: 8px; font-size: 11px;">
        `;
        
        const sortedActivities = activities.sort((a, b) => a.date - b.date);
        const groupedByDate = {};
        
        sortedActivities.forEach(activity => {
            if (!groupedByDate[activity.dateStr]) {
                groupedByDate[activity.dateStr] = [];
            }
            groupedByDate[activity.dateStr].push(activity);
        });
        
        Object.entries(groupedByDate).forEach(([dateStr, acts]) => {
            element.innerHTML += `<div style="margin-bottom: 5px;"><strong>${dateStr}:</strong>`;
            
            acts.forEach(act => {
                element.innerHTML += `<div style="margin-left: 10px; font-size: 10px;">
                    ${act.phase} | ${act.chapterNum}. ${act.chapter.title} (${act.hours}h)
                </div>`;
            });
            
            element.innerHTML += '</div>';
        });
        
        element.innerHTML += `
                </div>
            </div>
        `;
    });
    
    element.innerHTML += '</div>';
    
    // Generate PDF
    const opt = {
        margin: [10, 10, 10, 10],
        filename: `StudyPlan_${new Date().toISOString().split('T')[0]}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
}

// ─────────────────────────────────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');
});
