/* ═══════════════════════════════════════════════════════════════════
   PLAN.PROFBALAJI.IN - JAVASCRIPT
   Complete Planner Logic with CBSE 10, CBSE 12, & State Board 12
═══════════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────
// DATA STRUCTURE - ALL PLANNERS
// ─────────────────────────────────────────────────────────────────

// CBSE CLASS 10 SCIENCE (13 Chapters)
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

// CBSE CLASS 12 PHYSICS (14 Chapters)
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

// CBSE CLASS 12 CHEMISTRY (10 Units)
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

// STATE BOARD CLASS 12 PHYSICS (11 Units)
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

// STATE BOARD CLASS 12 CHEMISTRY (15 Units)
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

let CHAPTERS = CBSE10_CHAPTERS; // Default to CBSE 10

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const PHASE_COLORS = { 1: '#6366f1', 2: '#0d2ad4', 3: '#FF6B35' };
const PHASE_NAMES = { 1: 'Concept Mastery', 2: 'Consolidation', 3: 'Final Polish' };

// ─────────────────────────────────────────────────────────────────
// UTILITY FUNCTIONS - DATE & TIME
// ─────────────────────────────────────────────────────────────────

function getTargetDate() {
    const today = new Date();
    const nextYear = today.getFullYear() + 1;
    return new Date(nextYear, 0, 31); // January 31st of NEXT year (always)
}

function getDaysUntilTarget() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = getTargetDate();
    return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
}

function formatTargetDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}

// ─────────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────────

let planState = {
    type: 'study',
    completed: new Set(),
    hours: { Monday: 1, Tuesday: 1, Wednesday: 1, Thursday: 1, Friday: 1, Saturday: 3, Sunday: 2 },
    plan: null,
    plannerType: 'cbse10',
    targetDate: getTargetDate()
};

// ─────────────────────────────────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
});

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('navMobile');
    const closeMenu = document.getElementById('closeMenu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMobile.classList.add('active');
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            navMobile.classList.remove('active');
        });
    }

    document.querySelectorAll('.nav-link-mobile').forEach(link => {
        link.addEventListener('click', () => {
            navMobile.classList.remove('active');
        });
    });
}

// ─────────────────────────────────────────────────────────────────
// HERO & NAVIGATION
// ─────────────────────────────────────────────────────────────────

function scrollToPlanner() {
    const selector = document.getElementById('plannerSelector');
    if (selector) {
        selector.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function showPlannerSelector() {
    const selector = document.getElementById('plannerSelector');
    const section = document.getElementById('plannerSection');
    if (selector && section) {
        selector.style.display = 'block';
        section.style.display = 'block';
        selector.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function activatePlanner(type) {
    planState.plannerType = type;
    
    // Set chapters based on planner type
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
    
    gtag('event', 'planner_opened', {
        'planner_type': type
    });

    planState.completed.clear();
    const selector = document.getElementById('plannerSelector');
    const section = document.getElementById('plannerSection');
    
    if (selector && section) {
        selector.style.display = 'none';
        section.style.display = 'block';
        renderChapters();
        renderHours();
        
        const formSection = document.getElementById('formSection');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

function exitPlanner() {
    const section = document.getElementById('plannerSection');
    const selector = document.getElementById('plannerSelector');
    
    if (section && selector) {
        section.style.display = 'none';
        selector.style.display = 'block';
        document.getElementById('formSection').style.display = 'block';
        document.getElementById('resultsSection').style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ─────────────────────────────────────────────────────────────────
// FORM RENDERING
// ─────────────────────────────────────────────────────────────────

function selectPlanType(type) {
    planState.type = type;
    document.querySelectorAll('.toggle-option').forEach(el => {
        el.classList.toggle('selected', el.querySelector('input').value === type);
    });
    renderChapters();
}

function renderChapters() {
    const container = document.getElementById('chaptersContainer');
    const title = document.getElementById('chaptersTitle');
    const subtitle = document.getElementById('chaptersSubtitle');

    if (planState.type === 'revision') {
        title.textContent = 'Chapters you want to revise';
        subtitle.textContent = 'Tap to remove chapters from your revision plan';
    } else {
        title.textContent = 'Chapters already completed';
        subtitle.textContent = 'Tap to mark chapters you\'ve finished — we\'ll skip these in the plan';
    }

    const subjects = {};
    CHAPTERS.forEach(ch => {
        if (!subjects[ch.subject]) subjects[ch.subject] = [];
        subjects[ch.subject].push(ch);
    });

    let html = '';
    for (const [subject, chapters] of Object.entries(subjects)) {
        const totalHours = chapters.reduce((sum, ch) => sum + ch.learning + ch.revision + ch.practice, 0);
        const chapter = chapters[0];
        
        html += `
            <div class="subject-section">
                <div class="subject-header">
                    <div class="subject-dot" style="background-color: ${chapter.color}"></div>
                    <span>${subject}</span>
                    <span class="subject-hours">${Math.round(totalHours)} hrs</span>
                </div>
                <div class="chapter-chips">
        `;

        chapters.forEach(ch => {
            const isDone = planState.completed.has(ch.id);
            const hours = ch.learning + ch.revision + ch.practice;
            html += `
                <div class="chip ${isDone ? 'done' : ''}" onclick="toggleChapter(${ch.id})">
                    <div class="chip-num" style="${isDone ? `background-color: ${ch.color}` : ''}">${ch.id}</div>
                    <div style="flex: 1;">${ch.title} <small>(${hours}h)</small></div>
                    ${isDone ? '<div class="chip-check">✓</div>' : ''}
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    }

    if (container) container.innerHTML = html;
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

    let html = DAYS.map(day => `
        <div class="hour-input">
            <label>
                <div class="day-indicator ${planState.hours[day] > 0 ? 'active' : ''}"></div>
                ${day.slice(0, 3)}
            </label>
            <input type="range" min="0" max="8" step="0.5" value="${planState.hours[day]}"
                oninput="updateHours('${day}', this.value)">
            <div class="hour-display">${planState.hours[day] > 0 ? planState.hours[day] + 'h' : 'Rest'}</div>
        </div>
    `).join('');

    if (container) container.innerHTML = html;
    updateWeeklyTotal();
}

function updateHours(day, value) {
    planState.hours[day] = parseFloat(value);
    renderHours();
}

function updateWeeklyTotal() {
    const total = Object.values(planState.hours).reduce((sum, h) => sum + h, 0);
    const weeklyTotalEl = document.getElementById('weeklyTotal');
    if (weeklyTotalEl) {
        weeklyTotalEl.textContent = total.toFixed(1) + ' hrs/week';
    }
}

// ─────────────────────────────────────────────────────────────────
// PLAN GENERATION
// ─────────────────────────────────────────────────────────────────

function generatePlan() {
    const totalWeeklyHours = Object.values(planState.hours).reduce((sum, h) => sum + h, 0);
    
    if (totalWeeklyHours < 0.5) {
        alert('Please set at least some study hours per week!');
        return;
    }

    // Calculate plan
    planState.plan = computePlan(planState.type, planState.completed, planState.hours);

    gtag('event', 'plan_generated', {
        'plan_type': planState.type,
        'chapters_included': planState.plan.items.length,
        'total_hours': Math.round(planState.plan.totalHours),
        'planner_type': planState.plannerType
    });

    // Render results
    renderResults();
    
    // Show results section
    const formSection = document.getElementById('formSection');
    const resultsSection = document.getElementById('resultsSection');
    if (formSection && resultsSection) {
        formSection.style.display = 'none';
        resultsSection.style.display = 'block';
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function computePlan(type, completed, hours) {
    const revisionFactor = type === 'revision' ? 0.55 : 1.0;
    
    // Get included chapters
    const included = CHAPTERS.filter(ch => !completed.has(ch.id));
    
    // Convert chapters to plan items with 3-phase learning
    const items = included.map(ch => {
        const learningHours = ch.learning * revisionFactor;
        const revisionHours = ch.revision;
        const practiceHours = ch.practice;
        return {
            id: ch.id,
            title: ch.title,
            subject: ch.subject,
            color: ch.color,
            phases: [
                { phase: 1, hours: learningHours, name: PHASE_NAMES[1] },
                { phase: 2, hours: revisionHours, name: PHASE_NAMES[2] },
                { phase: 3, hours: practiceHours, name: PHASE_NAMES[3] }
            ],
            totalHours: learningHours + revisionHours + practiceHours,
            startDate: null,
            endDate: null
        };
    });

    // Distribute items across days and calculate timeline
    const totalWeeklyHours = Object.values(hours).reduce((sum, h) => sum + h, 0);
    const daysUntilTarget = getDaysUntilTarget();
    const weeksAvailable = Math.ceil(daysUntilTarget / 7);
    const hoursAvailable = totalWeeklyHours * weeksAvailable;
    
    let totalHours = items.reduce((sum, item) => sum + item.totalHours, 0);
    let currentDate = new Date();
    let dayIndex = 0;
    
    items.forEach(item => {
        item.startDate = new Date(currentDate);
        
        let remainingHours = item.totalHours;
        while (remainingHours > 0 && currentDate < planState.targetDate) {
            const dayOfWeek = DAYS[dayIndex % 7];
            const availableHours = hours[dayOfWeek];
            
            if (availableHours > 0 && remainingHours > 0) {
                const hoursToAllocate = Math.min(remainingHours, availableHours);
                remainingHours -= hoursToAllocate;
            }
            
            dayIndex++;
            if (dayIndex % 7 === 0) {
                currentDate.setDate(currentDate.getDate() + 1);
            } else {
                currentDate.setDate(currentDate.getDate() + 1);
            }
        }
        
        item.endDate = new Date(currentDate);
    });

    return {
        items: items,
        totalHours: totalHours,
        hoursAvailable: hoursAvailable,
        weeksAvailable: weeksAvailable,
        daysAvailable: daysUntilTarget
    };
}

function renderResults() {
    const statsGrid = document.getElementById('statsGrid');
    const timelineSection = document.getElementById('timelineSection');
    const weeklySection = document.getElementById('weeklySection');
    const alertBox = document.getElementById('alertBox');
    
    if (!statsGrid || !timelineSection || !weeklySection || !alertBox) return;

    const plan = planState.plan;
    const hoursPercentage = Math.round((plan.totalHours / plan.hoursAvailable) * 100);
    const alertType = hoursPercentage <= 100 ? 'success' : 'warning';
    const alertMessage = hoursPercentage <= 100 
        ? `✓ Your plan fits perfectly! You need ${Math.round(plan.totalHours)}h out of ${Math.round(plan.hoursAvailable)}h available.`
        : `⚠ You need ${Math.round(plan.totalHours)}h but only have ${Math.round(plan.hoursAvailable)}h. Consider increasing daily hours or starting earlier.`;

    alertBox.className = alertType;
    alertBox.innerHTML = alertMessage;

    // Stats grid
    statsGrid.innerHTML = `
        <div class="stat-box">
            <div class="stat-number">${getDaysUntilTarget()}</div>
            <div class="stat-label">Days Until Target</div>
        </div>
        <div class="stat-box">
            <div class="stat-number">${Math.round(plan.totalHours)}</div>
            <div class="stat-label">Hours Required</div>
        </div>
        <div class="stat-box">
            <div class="stat-number">${plan.items.length}</div>
            <div class="stat-label">Chapters to Master</div>
        </div>
        <div class="stat-box">
            <div class="stat-number">${hoursPercentage}%</div>
            <div class="stat-label">Time Allocation</div>
        </div>
    `;

    // Timeline
    timelineSection.innerHTML = '<h3 class="timeline-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>Chapter Schedule</h3>';
    
    const timelineHTML = plan.items.map((item, idx) => {
        const badgeColor = item.color;
        const totalHours = item.phases.reduce((sum, p) => sum + p.hours, 0);
        const progressPercent = (totalHours / item.totalHours) * 100;
        
        return `
            <div class="timeline-item ${idx < 3 ? '' : ''}">
                <div class="ch-badge" style="background-color: ${badgeColor}">Ch${item.id}</div>
                <div class="timeline-info">
                    <h4>${item.title}</h4>
                    <p>${item.subject}</p>
                </div>
                <div class="timeline-bar">
                    <div class="timeline-progress" style="width: ${progressPercent}%; background-color: ${badgeColor};">
                        ${totalHours.toFixed(1)}h
                    </div>
                </div>
                <div class="timeline-dates">
                    ${item.startDate && item.endDate ? `${item.startDate.toLocaleDateString('en-IN', {month: 'short', day: 'numeric'})} - ${item.endDate.toLocaleDateString('en-IN', {month: 'short', day: 'numeric'})}` : 'TBD'}
                </div>
            </div>
        `;
    }).join('');
    
    timelineSection.innerHTML += timelineHTML;

    // Weekly view
    weeklySection.innerHTML = `
        <h3 class="timeline-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>Weekly Schedule</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem;">
            ${DAYS.map(day => {
                const hours = planState.hours[day];
                return `
                    <div style="padding: 1rem; border: 1px solid var(--border); border-radius: 12px; text-align: center;">
                        <strong>${day.slice(0, 3)}</strong><br>
                        <div style="font-size: 1.5rem; color: var(--primary-blue); font-weight: 900; margin: 0.5rem 0;">
                            ${hours > 0 ? hours + 'h' : 'Rest'}
                        </div>
                        <small style="color: var(--text-light);">${hours > 0 ? `${(hours * 52).toFixed(0)}h/year` : 'Recovery'}</small>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function editPlan() {
    const formSection = document.getElementById('formSection');
    const resultsSection = document.getElementById('resultsSection');
    if (formSection && resultsSection) {
        resultsSection.style.display = 'none';
        formSection.style.display = 'block';
    }
    document.getElementById('formSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─────────────────────────────────────────────────────────────────
// PDF DOWNLOAD
// ─────────────────────────────────────────────────────────────────

function downloadPDF() {
    if (!planState.plan || !planState.plan.items.length) {
        alert('No plan to download. Please generate a plan first.');
        return;
    }

    const plan = planState.plan;
    const pdfContainer = document.getElementById('pdfContainer');
    if (!pdfContainer) return;

    let html = `
        <div style="font-family: Arial, sans-serif; padding: 2rem; max-width: 800px; margin: 0 auto;">
            <h1 style="text-align: center; color: #0d2ad4; margin-bottom: 0.5rem;">STUDY PLAN SCHEDULE</h1>
            <p style="text-align: center; color: #666; margin-bottom: 2rem; font-size: 0.9rem;">
                Target: ${formatTargetDate(planState.targetDate)} | Days: ${getDaysUntilTarget()} | Total Hours: ${Math.round(plan.totalHours)}h
            </p>

            <h2 style="border-bottom: 2px solid #0d2ad4; padding-bottom: 0.5rem; margin-top: 2rem;">Chapter Schedule</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                <thead>
                    <tr style="background: #0d2ad4; color: white;">
                        <th style="padding: 0.75rem; text-align: left;">Chapter</th>
                        <th style="padding: 0.75rem; text-align: center;">Learning</th>
                        <th style="padding: 0.75rem; text-align: center;">Revision</th>
                        <th style="padding: 0.75rem; text-align: center;">Practice</th>
                        <th style="padding: 0.75rem; text-align: center;">Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${plan.items.map((item, idx) => {
                        const learning = item.phases[0]?.hours || 0;
                        const revision = item.phases[1]?.hours || 0;
                        const practice = item.phases[2]?.hours || 0;
                        const bgColor = idx % 2 === 0 ? '#f5f5f5' : 'white';
                        return `
                            <tr style="background: ${bgColor}; border-bottom: 1px solid #e0e0e0;">
                                <td style="padding: 0.75rem;">${item.title}</td>
                                <td style="padding: 0.75rem; text-align: center;">${learning.toFixed(1)}h</td>
                                <td style="padding: 0.75rem; text-align: center;">${revision.toFixed(1)}h</td>
                                <td style="padding: 0.75rem; text-align: center;">${practice.toFixed(1)}h</td>
                                <td style="padding: 0.75rem; text-align: center; font-weight: bold;">${item.totalHours.toFixed(1)}h</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>

            <h2 style="border-bottom: 2px solid #0d2ad4; padding-bottom: 0.5rem; margin-top: 2rem;">Weekly Schedule</h2>
            <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 1rem; margin-top: 1rem;">
                ${DAYS.map(day => `
                    <div style="padding: 1rem; border: 1px solid #ddd; border-radius: 8px; text-align: center;">
                        <strong>${day}</strong><br>
                        <div style="font-size: 1.2rem; color: #0d2ad4; font-weight: bold; margin: 0.5rem 0;">
                            ${planState.hours[day]}h
                        </div>
                    </div>
                `).join('')}
            </div>

            <p style="text-align: center; color: #666; font-size: 0.85rem; margin-top: 2rem;">
                Generated on ${new Date().toLocaleDateString('en-IN')} | Study ready by 31 January
            </p>
        </div>
    `;

    pdfContainer.innerHTML = html;

    const opt = {
        margin: 10,
        filename: 'study-plan.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };

    html2pdf().set(opt).from(pdfContainer).save();
}
