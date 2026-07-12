/* ═══════════════════════════════════════════════════════════════════
   STUDY PLANNER - COMPLETE WORKING VERSION
   CBSE 10, CBSE 12 (Physics + Chemistry), State Board 12
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
    plannerType: 'cbse10'
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

// ─────────────────────────────────────────────────────────────────
// MAIN FUNCTIONS
// ─────────────────────────────────────────────────────────────────

function scrollToPlanner() {
    console.log('scrollToPlanner: Showing selector');
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
    
    console.log('Loaded', CHAPTERS.length, 'chapters');
    
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
    console.log('exitPlanner: Showing selector');
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
    console.log('selectPlanType:', type);
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
    console.log('renderChapters: Drawing', CHAPTERS.length, 'chapters');
    
    const container = document.getElementById('chaptersContainer');
    const title = document.getElementById('chaptersTitle');
    const subtitle = document.getElementById('chaptersSubtitle');
    
    if (!container || !title || !subtitle) {
        console.error('Chapter elements missing');
        return;
    }
    
    if (planState.type === 'revision') {
        title.textContent = 'Chapters you want to revise';
        subtitle.textContent = 'Tap to remove chapters from your revision plan';
    } else {
        title.textContent = 'Chapters already completed';
        subtitle.textContent = 'Tap to mark chapters you\'ve finished';
    }
    
    const subjects = {};
    CHAPTERS.forEach(ch => {
        if (!subjects[ch.subject]) {
            subjects[ch.subject] = [];
        }
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
    console.log('toggleChapter:', id);
    if (planState.completed.has(id)) {
        planState.completed.delete(id);
    } else {
        planState.completed.add(id);
    }
    renderChapters();
}

function renderHours() {
    console.log('renderHours: Drawing weekly schedule');
    
    const container = document.getElementById('hoursGrid');
    if (!container) {
        console.error('hoursGrid not found');
        return;
    }
    
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
    renderHours();
}

function updateWeeklyTotal() {
    const total = Object.values(planState.hours).reduce((sum, h) => sum + h, 0);
    const weeklyEl = document.getElementById('weeklyTotal');
    if (weeklyEl) {
        weeklyEl.textContent = total.toFixed(1) + ' hrs/week';
    }
}

// ─────────────────────────────────────────────────────────────────
// PLAN GENERATION
// ─────────────────────────────────────────────────────────────────

function generatePlan() {
    console.log('generatePlan: Computing schedule');
    
    const totalWeekly = Object.values(planState.hours).reduce((sum, h) => sum + h, 0);
    if (totalWeekly < 0.5) {
        alert('Please set at least some study hours per week!');
        return;
    }
    
    // Calculate totals
    const included = CHAPTERS.filter(ch => !planState.completed.has(ch.id));
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
    
    console.log('Plan generated:', {
        chapters: included.length,
        hours: totalHours,
        available: hoursAvailable
    });
    
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

function renderResults() {
    console.log('renderResults: Drawing plan');
    
    if (!planState.plan) return;
    
    const plan = planState.plan;
    const statsGrid = document.getElementById('statsGrid');
    const timelineSection = document.getElementById('timelineSection');
    const weeklySection = document.getElementById('weeklySection');
    const alertBox = document.getElementById('alertBox');
    
    // Alert
    const percent = Math.round((plan.totalHours / plan.hoursAvailable) * 100);
    let alertClass, alertMsg;
    
    if (percent <= 100) {
        alertClass = 'success';
        alertMsg = `✓ Your plan fits! You need ${Math.round(plan.totalHours)}h, you have ${Math.round(plan.hoursAvailable)}h.`;
    } else {
        alertClass = 'warning';
        alertMsg = `⚠ You need ${Math.round(plan.totalHours)}h but have ${Math.round(plan.hoursAvailable)}h.`;
    }
    
    if (alertBox) {
        alertBox.className = alertClass;
        alertBox.innerHTML = alertMsg;
    }
    
    // Stats
    if (statsGrid) {
        statsGrid.innerHTML = `
            <div class="stat-box">
                <div class="stat-number">${plan.daysAvailable}</div>
                <div class="stat-label">Days</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">${Math.round(plan.totalHours)}</div>
                <div class="stat-label">Hours Required</div>
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
    
    // Timeline
    if (timelineSection) {
        let timelineHTML = '<h3 class="timeline-title">Chapter Breakdown</h3>';
        
        plan.included.slice(0, 8).forEach((ch, idx) => {
            const total = ch.learning + ch.revision + ch.practice;
            timelineHTML += `<div class="timeline-item">
                <div class="ch-badge" style="background-color: ${ch.color}">Ch${ch.id}</div>
                <div class="timeline-info">
                    <h4>${ch.title}</h4>
                    <p>${ch.subject}</p>
                </div>
                <div class="timeline-bar">
                    <div class="timeline-progress" style="width: 100%; background-color: ${ch.color};">
                        ${total.toFixed(1)}h
                    </div>
                </div>
            </div>`;
        });
        
        if (plan.included.length > 8) {
            timelineHTML += `<p style="text-align: center; color: #999; padding: 1rem;">+ ${plan.included.length - 8} more chapters</p>`;
        }
        
        timelineSection.innerHTML = timelineHTML;
    }
    
    // Weekly
    if (weeklySection) {
        let weeklyHTML = '<h3 class="timeline-title">Weekly Schedule</h3>';
        weeklyHTML += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 1rem;">';
        
        DAYS.forEach(day => {
            const hours = planState.hours[day] || 0;
            weeklyHTML += `<div style="text-align: center; padding: 1rem; border: 1px solid #ddd; border-radius: 8px;">
                <strong>${day.slice(0, 3)}</strong><br>
                <div style="font-size: 1.4rem; color: #0d2ad4; font-weight: bold; margin: 0.5rem 0;">
                    ${hours}h
                </div>
            </div>`;
        });
        
        weeklyHTML += '</div>';
        weeklySection.innerHTML = weeklyHTML;
    }
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
// INITIALIZATION
// ─────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded - Planner ready');
    console.log('Target date:', getTargetDate().toDateString());
    console.log('Days remaining:', getDaysUntilTarget());
});
