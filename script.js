/* ═══════════════════════════════════════════════════════════════════
   STUDY PLANNER V4 - CORRECTED
   Smooth slider, sequential chapters, parallel subjects, even distribution
═══════════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────
// DATA - CORRECTED CHAPTER NUMBERING
// ─────────────────────────────────────────────────────────────────

// CBSE 10: Science (13 chapters SEQUENTIAL 1-13)
const CBSE10_CHAPTERS = [
    { id: 1, number: 1, title: 'Chemical Reactions', learning: 6, revision: 2, practice: 3, subject: 'Chemistry', subjectId: 1 },
    { id: 2, number: 2, title: 'Acids, Bases, Salts', learning: 8, revision: 3, practice: 4, subject: 'Chemistry', subjectId: 1 },
    { id: 3, number: 3, title: 'Metals & Non-metals', learning: 10, revision: 3, practice: 5, subject: 'Chemistry', subjectId: 1 },
    { id: 4, number: 4, title: 'Carbon Compounds', learning: 12, revision: 4, practice: 6, subject: 'Chemistry', subjectId: 1 },
    { id: 5, number: 5, title: 'Life Processes', learning: 14, revision: 5, practice: 6, subject: 'Biology', subjectId: 2 },
    { id: 6, number: 6, title: 'Control & Coordination', learning: 8, revision: 3, practice: 4, subject: 'Biology', subjectId: 2 },
    { id: 7, number: 7, title: 'Reproduction', learning: 10, revision: 4, practice: 5, subject: 'Biology', subjectId: 2 },
    { id: 8, number: 8, title: 'Heredity', learning: 6, revision: 2, practice: 4, subject: 'Biology', subjectId: 2 },
    { id: 9, number: 9, title: 'Light', learning: 14, revision: 5, practice: 8, subject: 'Physics', subjectId: 3 },
    { id: 10, number: 10, title: 'Human Eye', learning: 8, revision: 3, practice: 4, subject: 'Physics', subjectId: 3 },
    { id: 11, number: 11, title: 'Electricity', learning: 12, revision: 4, practice: 8, subject: 'Physics', subjectId: 3 },
    { id: 12, number: 12, title: 'Magnetic Effects', learning: 10, revision: 3, practice: 5, subject: 'Physics', subjectId: 3 },
    { id: 13, number: 13, title: 'Our Environment', learning: 5, revision: 2, practice: 3, subject: 'Environment', subjectId: 4 }
];

// CBSE 12: Physics (1-14, per subject)
const CBSE12_PHYSICS = [
    { id: 1, number: 1, title: 'Electric Charges and Fields', learning: 22, revision: 5.5, practice: 5, subject: 'Physics', subjectId: 1 },
    { id: 2, number: 2, title: 'Electrostatic Potential & Capacitance', learning: 18, revision: 4.5, practice: 5, subject: 'Physics', subjectId: 1 },
    { id: 3, number: 3, title: 'Current Electricity', learning: 11.7, revision: 2.9, practice: 5, subject: 'Physics', subjectId: 1 },
    { id: 4, number: 4, title: 'Moving Charges and Magnetism', learning: 14.5, revision: 3.6, practice: 5, subject: 'Physics', subjectId: 1 },
    { id: 5, number: 5, title: 'Magnetism and Matter', learning: 7.2, revision: 1.8, practice: 5, subject: 'Physics', subjectId: 1 },
    { id: 6, number: 6, title: 'Electromagnetic Induction', learning: 9.2, revision: 2.3, practice: 5, subject: 'Physics', subjectId: 1 },
    { id: 7, number: 7, title: 'Alternating Current', learning: 10.8, revision: 2.7, practice: 5, subject: 'Physics', subjectId: 1 },
    { id: 8, number: 8, title: 'Electromagnetic Waves', learning: 4.2, revision: 1.1, practice: 5, subject: 'Physics', subjectId: 1 },
    { id: 9, number: 9, title: 'Ray Optics & Optical Instruments', learning: 17, revision: 4.2, practice: 5, subject: 'Physics', subjectId: 1 },
    { id: 10, number: 10, title: 'Wave Optics', learning: 9.5, revision: 2.4, practice: 5, subject: 'Physics', subjectId: 1 },
    { id: 11, number: 11, title: 'Dual Nature of Radiation & Matter', learning: 6.4, revision: 1.6, practice: 5, subject: 'Physics', subjectId: 1 },
    { id: 12, number: 12, title: 'Atoms', learning: 6.4, revision: 1.6, practice: 5, subject: 'Physics', subjectId: 1 },
    { id: 13, number: 13, title: 'Nuclei', learning: 6.8, revision: 1.7, practice: 5, subject: 'Physics', subjectId: 1 },
    { id: 14, number: 14, title: 'Semiconductor Electronics', learning: 8.4, revision: 2.1, practice: 5, subject: 'Physics', subjectId: 1 }
];

// CBSE 12: Chemistry (1-10, per subject)
const CBSE12_CHEMISTRY = [
    { id: 1, number: 1, title: 'Solutions', learning: 12, revision: 3, practice: 4, subject: 'Chemistry', subjectId: 2 },
    { id: 2, number: 2, title: 'Electrochemistry', learning: 14, revision: 4, practice: 5, subject: 'Chemistry', subjectId: 2 },
    { id: 3, number: 3, title: 'Chemical Kinetics', learning: 12, revision: 3, practice: 4, subject: 'Chemistry', subjectId: 2 },
    { id: 4, number: 4, title: 'd- and f-Block Elements', learning: 10, revision: 4, practice: 3, subject: 'Chemistry', subjectId: 2 },
    { id: 5, number: 5, title: 'Coordination Compounds', learning: 12, revision: 3, practice: 4, subject: 'Chemistry', subjectId: 2 },
    { id: 6, number: 6, title: 'Haloalkanes and Haloarenes', learning: 12, revision: 4, practice: 4, subject: 'Chemistry', subjectId: 2 },
    { id: 7, number: 7, title: 'Alcohols, Phenols and Ethers', learning: 14, revision: 4, practice: 5, subject: 'Chemistry', subjectId: 2 },
    { id: 8, number: 8, title: 'Aldehydes, Ketones and Carboxylic Acids', learning: 16, revision: 5, practice: 6, subject: 'Chemistry', subjectId: 2 },
    { id: 9, number: 9, title: 'Amines', learning: 10, revision: 3, practice: 4, subject: 'Chemistry', subjectId: 2 },
    { id: 10, number: 10, title: 'Biomolecules', learning: 10, revision: 3, practice: 3, subject: 'Chemistry', subjectId: 2 }
];

// STATE BOARD 12: Physics (1-11, per subject)
const STATE_BOARD_PHYSICS = [
    { id: 1, number: 1, title: 'Electrostatics', learning: 30, revision: 5, practice: 8, subject: 'Physics', subjectId: 1 },
    { id: 2, number: 2, title: 'Current Electricity', learning: 18, revision: 3, practice: 6, subject: 'Physics', subjectId: 1 },
    { id: 3, number: 3, title: 'Magnetism & Magnetic Effects', learning: 27, revision: 5, practice: 8, subject: 'Physics', subjectId: 1 },
    { id: 4, number: 4, title: 'EMI and Alternating Current', learning: 27, revision: 5, practice: 8, subject: 'Physics', subjectId: 1 },
    { id: 5, number: 5, title: 'Electromagnetic Waves', learning: 7, revision: 2, practice: 4, subject: 'Physics', subjectId: 1 },
    { id: 6, number: 6, title: 'Ray Optics', learning: 22, revision: 4, practice: 6, subject: 'Physics', subjectId: 1 },
    { id: 7, number: 7, title: 'Wave Optics', learning: 24, revision: 4, practice: 7, subject: 'Physics', subjectId: 1 },
    { id: 8, number: 8, title: 'Dual Nature of Radiation', learning: 13, revision: 3, practice: 5, subject: 'Physics', subjectId: 1 },
    { id: 9, number: 9, title: 'Atomic and Nuclear Physics', learning: 22, revision: 4, practice: 7, subject: 'Physics', subjectId: 1 },
    { id: 10, number: 10, title: 'Electronics & Communication', learning: 24, revision: 4, practice: 7, subject: 'Physics', subjectId: 1 },
    { id: 11, number: 11, title: 'Recent Developments in Physics', learning: 9, revision: 2, practice: 4, subject: 'Physics', subjectId: 1 }
];

// STATE BOARD 12: Chemistry (1-15, per subject)
const STATE_BOARD_CHEMISTRY = [
    { id: 1, number: 1, title: 'Metallurgy', learning: 6, revision: 2, practice: 3, subject: 'Chemistry', subjectId: 2 },
    { id: 2, number: 2, title: 'p-Block Elements-I', learning: 8, revision: 3, practice: 4, subject: 'Chemistry', subjectId: 2 },
    { id: 3, number: 3, title: 'p-Block Elements-II', learning: 12, revision: 4, practice: 5, subject: 'Chemistry', subjectId: 2 },
    { id: 4, number: 4, title: 'Transition & Inner Transition', learning: 8, revision: 3, practice: 4, subject: 'Chemistry', subjectId: 2 },
    { id: 5, number: 5, title: 'Coordination Chemistry', learning: 12, revision: 4, practice: 5, subject: 'Chemistry', subjectId: 2 },
    { id: 6, number: 6, title: 'Solid State', learning: 7, revision: 2, practice: 3, subject: 'Chemistry', subjectId: 2 },
    { id: 7, number: 7, title: 'Chemical Kinetics', learning: 9, revision: 3, practice: 4, subject: 'Chemistry', subjectId: 2 },
    { id: 8, number: 8, title: 'Ionic Equilibrium', learning: 10, revision: 3, practice: 4, subject: 'Chemistry', subjectId: 2 },
    { id: 9, number: 9, title: 'Electro Chemistry', learning: 11, revision: 4, practice: 5, subject: 'Chemistry', subjectId: 2 },
    { id: 10, number: 10, title: 'Surface Chemistry', learning: 7, revision: 2, practice: 3, subject: 'Chemistry', subjectId: 2 },
    { id: 11, number: 11, title: 'Hydroxy Compounds & Ethers', learning: 12, revision: 4, practice: 5, subject: 'Chemistry', subjectId: 2 },
    { id: 12, number: 12, title: 'Carbonyl Compounds & Acids', learning: 15, revision: 5, practice: 6, subject: 'Chemistry', subjectId: 2 },
    { id: 13, number: 13, title: 'Organic Nitrogen Compounds', learning: 10, revision: 3, practice: 4, subject: 'Chemistry', subjectId: 2 },
    { id: 14, number: 14, title: 'Biomolecules', learning: 7, revision: 2, practice: 3, subject: 'Chemistry', subjectId: 2 },
    { id: 15, number: 15, title: 'Everyday Life & Polymers', learning: 4, revision: 1, practice: 2, subject: 'Chemistry', subjectId: 2 }
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const SUBJECT_COLORS = {
    'Physics': '#FF6B35',
    'Chemistry': '#0d2ad4',
    'Biology': '#16a34a',
    'Environment': '#0891b2'
};

let CHAPTERS = CBSE10_CHAPTERS;

let planState = {
    type: 'study',
    completed: new Set(),
    hours: { Monday: 1, Tuesday: 1, Wednesday: 1, Thursday: 1, Friday: 1, Saturday: 3, Sunday: 2 },
    plan: null,
    plannerType: 'cbse10',
    schedule: null
};

// ─────────────────────────────────────────────────────────────────
// UTILITY FUNCTIONS
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

function formatDateFull(date) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}

function roundToDecimal(num, decimals = 1) {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

// ─────────────────────────────────────────────────────────────────
// MAIN UI FUNCTIONS
// ─────────────────────────────────────────────────────────────────

function scrollToPlanner() {
    const selector = document.getElementById('plannerSelector');
    if (selector) {
        selector.style.display = 'block';
        document.getElementById('plannerSection').style.display = 'none';
        document.getElementById('resultsSection').style.display = 'none';
        setTimeout(() => selector.scrollIntoView({ behavior: 'smooth' }), 100);
    }
}

function activatePlanner(type) {
    planState.plannerType = type;
    planState.completed.clear();
    planState.type = 'study';
    
    // Update radio buttons
    ['radio-cbse10', 'radio-cbse12', 'radio-stateboard'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.background = 'transparent';
    });
    const selectedRadio = document.getElementById('radio-' + type);
    if (selectedRadio) selectedRadio.style.background = '#0d2ad4';
    
    // Load chapters
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
    }
    
    const selector = document.getElementById('plannerSelector');
    const section = document.getElementById('plannerSection');
    
    if (selector && section) {
        selector.style.display = 'none';
        section.style.display = 'block';
        setTimeout(() => {
            renderChapters();
            renderHours();
            document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
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
        if (input) el.classList.toggle('selected', input.value === type);
    });
    renderChapters();
}

function renderChapters() {
    const container = document.getElementById('chaptersContainer');
    const title = document.getElementById('chaptersTitle');
    const subtitle = document.getElementById('chaptersSubtitle');
    
    if (!container || !title || !subtitle) return;
    
    title.textContent = planState.type === 'revision' ? 'Chapters to revise' : 'Completed chapters';
    subtitle.textContent = planState.type === 'revision' ? 'Tap to exclude' : 'Tap to skip learning phase';
    
    const subjects = {};
    CHAPTERS.forEach(ch => {
        if (!subjects[ch.subject]) subjects[ch.subject] = [];
        subjects[ch.subject].push(ch);
    });
    
    let html = '';
    for (const [subject, chapters] of Object.entries(subjects)) {
        const totalHours = chapters.reduce((sum, ch) => sum + ch.learning + ch.revision + ch.practice, 0);
        const color = SUBJECT_COLORS[subject] || '#0d2ad4';
        
        html += `<div class="subject-section" style="margin-bottom: 1.5rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid ${color};">
                <div style="width: 12px; height: 12px; border-radius: 50%; background-color: ${color};"></div>
                <span style="font-weight: 600; color: #333;">${subject}</span>
                <span style="color: #999; font-size: 0.9rem; margin-left: auto;">${roundToDecimal(totalHours)}h total</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">`;
        
        chapters.forEach(ch => {
            const isDone = planState.completed.has(ch.id);
            const total = roundToDecimal(ch.learning + ch.revision + ch.practice);
            
            html += `<div onclick="toggleChapter(${ch.id})" style="cursor: pointer; padding: 1rem; background: ${isDone ? color : 'white'}; border: 2px solid ${color}; border-radius: 8px; transition: all 0.3s; opacity: ${isDone ? 0.7 : 1};">
                <div style="display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <span style="font-weight: 700; font-size: 1.2rem; color: ${isDone ? 'white' : color}; min-width: 30px;">Ch${ch.number}</span>
                    <span style="flex: 1; line-height: 1.4; color: ${isDone ? 'white' : '#333'};"><strong>${ch.title}</strong></span>
                    ${isDone ? '<span style="color: white; font-weight: 700;">✓</span>' : ''}
                </div>
                <div style="text-align: right; font-size: 0.85rem; color: ${isDone ? 'rgba(255,255,255,0.8)' : '#999'};">${total}h</div>
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
        html += `<div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <label style="font-weight: 600; color: #0d2ad4; font-size: 0.9rem;">${day}</label>
            <input type="range" min="0" max="8" step="0.1" value="${hours}" oninput="updateHours('${day}', this.value)" style="cursor: pointer; outline: none; -webkit-appearance: none; width: 100%; height: 6px; border-radius: 3px; background: linear-gradient(to right, #0d2ad4 0%, #0d2ad4 ${(hours/8)*100}%, #ddd ${(hours/8)*100}%, #ddd 100%); ">
            <div style="text-align: center; font-weight: 700; color: #0d2ad4; font-size: 1.1rem;">${roundToDecimal(hours)}h</div>
        </div>`;
    });
    container.innerHTML = html;
    updateWeeklyTotal();
}

function updateHours(day, value) {
    let val = parseFloat(value);
    // Snap to nearest 0.5
    val = Math.round(val * 2) / 2;
    planState.hours[day] = val;
    renderHours();
}

function updateWeeklyTotal() {
    const total = Object.values(planState.hours).reduce((sum, h) => sum + h, 0);
    const el = document.getElementById('weeklyTotal');
    if (el) el.textContent = roundToDecimal(total) + ' hrs/week';
}

// ─────────────────────────────────────────────────────────────────
// SMART SCHEDULING - PARALLEL SUBJECTS, EVEN DISTRIBUTION
// ─────────────────────────────────────────────────────────────────

function generatePlan() {
    const totalWeekly = Object.values(planState.hours).reduce((sum, h) => sum + h, 0);
    if (totalWeekly < 0.5) {
        alert('Please set at least 0.5 hours per week');
        return;
    }
    
    let included = CHAPTERS.filter(ch => !planState.completed.has(ch.id));
    
    const daysAvailable = getDaysUntilTarget();
    const weeksAvailable = Math.ceil(daysAvailable / 7);
    const hoursAvailable = totalWeekly * weeksAvailable;
    
    // Calculate total hours needed
    let totalNeeded = 0;
    included.forEach(ch => {
        if (planState.type === 'study') {
            totalNeeded += ch.learning + ch.revision + ch.practice;
        } else {
            totalNeeded += ch.revision + ch.practice;
        }
    });
    
    totalNeeded = roundToDecimal(totalNeeded);
    
    // Check if time is sufficient
    if (totalNeeded > hoursAvailable) {
        const dailyNeeded = totalNeeded / daysAvailable;
        const suggestedWeekly = roundToDecimal((dailyNeeded * 7));
        alert(`⚠️ TIME NOT SUFFICIENT!\n\nYou need:\n• ${totalNeeded} hours total\n• ${roundToDecimal(dailyNeeded)} hours/day\n• ${suggestedWeekly} hours/week\n\nYou currently have:\n• ${roundToDecimal(hoursAvailable)} hours\n• ${roundToDecimal(hoursAvailable/daysAvailable)} hours/day\n• ${roundToDecimal(totalWeekly)} hours/week\n\nPlease increase your daily study hours!`);
        return;
    }
    
    // Generate schedule
    const schedule = computeSmartSchedule(included, planState.hours, planState.type);
    
    planState.plan = {
        chapters: CHAPTERS,
        included: included,
        totalNeeded: totalNeeded,
        hoursAvailable: roundToDecimal(hoursAvailable),
        daysAvailable: daysAvailable,
        targetDate: getTargetDate(),
        startDate: new Date()
    };
    
    planState.schedule = schedule;
    
    renderResults();
    
    const formSection = document.getElementById('formSection');
    const resultsSection = document.getElementById('resultsSection');
    
    if (formSection && resultsSection) {
        formSection.style.display = 'none';
        resultsSection.style.display = 'block';
        setTimeout(() => resultsSection.scrollIntoView({ behavior: 'smooth' }), 100);
    }
}

function computeSmartSchedule(chapters, hoursByDay, planType) {
    const startDate = new Date();
    const targetDate = getTargetDate();
    const schedule = [];
    
    // For Class 12: Alternate between Physics and Chemistry
    const isClass12 = chapters.some(ch => ch.subject === 'Physics') && chapters.some(ch => ch.subject === 'Chemistry');
    
    // PHASE 1: LEARNING
    if (planType === 'study') {
        const physicsChapters = chapters.filter(ch => ch.subject === 'Physics');
        const chemistryChapters = chapters.filter(ch => ch.subject === 'Chemistry');
        const otherChapters = chapters.filter(ch => ch.subject !== 'Physics' && ch.subject !== 'Chemistry');
        
        let currentDate = new Date(startDate);
        let phyIndex = 0, chemIndex = 0, otherIndex = 0;
        let usePhysics = true; // Alternate: Physics, Chemistry, Physics...
        
        while (currentDate.getMonth() < 11 && (phyIndex < physicsChapters.length || chemIndex < chemistryChapters.length || otherIndex < otherChapters.length)) {
            const dayName = DAYS[currentDate.getDay() === 0 ? 6 : currentDate.getDay() - 1];
            const availableHours = hoursByDay[dayName] || 0;
            
            if (availableHours > 0) {
                let chapter = null;
                
                // For Class 12: Alternate subjects
                if (isClass12 && physicsChapters.length > 0 && chemistryChapters.length > 0) {
                    if (usePhysics && phyIndex < physicsChapters.length) {
                        chapter = physicsChapters[phyIndex++];
                    } else if (!usePhysics && chemIndex < chemistryChapters.length) {
                        chapter = chemistryChapters[chemIndex++];
                    } else if (usePhysics && phyIndex >= physicsChapters.length && chemIndex < chemistryChapters.length) {
                        chapter = chemistryChapters[chemIndex++];
                    } else if (!usePhysics && chemIndex >= chemistryChapters.length && phyIndex < physicsChapters.length) {
                        chapter = physicsChapters[phyIndex++];
                    }
                    usePhysics = !usePhysics;
                } else {
                    // For Class 10: Sequential
                    if (otherIndex < otherChapters.length) {
                        chapter = otherChapters[otherIndex++];
                    } else if (phyIndex < physicsChapters.length) {
                        chapter = physicsChapters[phyIndex++];
                    } else if (chemIndex < chemistryChapters.length) {
                        chapter = chemistryChapters[chemIndex++];
                    }
                }
                
                if (chapter) {
                    let remaining = chapter.learning;
                    while (remaining > 0 && currentDate.getMonth() < 11) {
                        const dayName = DAYS[currentDate.getDay() === 0 ? 6 : currentDate.getDay() - 1];
                        const available = hoursByDay[dayName] || 0;
                        
                        if (available > 0) {
                            const allocate = Math.min(remaining, available);
                            schedule.push({
                                date: new Date(currentDate),
                                chapter: chapter,
                                phase: 'Learning',
                                hours: roundToDecimal(allocate),
                                day: dayName
                            });
                            remaining -= allocate;
                        }
                        currentDate.setDate(currentDate.getDate() + 1);
                    }
                }
            } else {
                currentDate.setDate(currentDate.getDate() + 1);
            }
        }
    }
    
    // PHASE 2 & 3: REVISION & PRACTICE (January)
    currentDate = new Date(currentDate.getFullYear(), 0, 1); // January 1st
    
    // Distribute chapters evenly across January for Revision
    const daysInJan = 31;
    const revisionChapters = chapters.filter(ch => ch.revision > 0);
    
    revisionChapters.forEach((ch, idx) => {
        let remaining = ch.revision;
        let dateOffset = Math.floor((idx * daysInJan) / revisionChapters.length);
        let revDate = new Date(currentDate.getFullYear(), 0, 1 + dateOffset);
        
        while (remaining > 0 && revDate <= targetDate) {
            const dayName = DAYS[revDate.getDay() === 0 ? 6 : revDate.getDay() - 1];
            const available = hoursByDay[dayName] || 0;
            
            if (available > 0) {
                const allocate = Math.min(remaining, available);
                schedule.push({
                    date: new Date(revDate),
                    chapter: ch,
                    phase: 'Revision',
                    hours: roundToDecimal(allocate),
                    day: dayName
                });
                remaining -= allocate;
            }
            revDate.setDate(revDate.getDate() + 1);
        }
    });
    
    // Distribute Practice across January
    const practiceChapters = chapters.filter(ch => ch.practice > 0);
    practiceChapters.forEach((ch, idx) => {
        let remaining = ch.practice;
        let dateOffset = Math.floor((idx * daysInJan) / practiceChapters.length);
        let pracDate = new Date(currentDate.getFullYear(), 0, 1 + dateOffset + 15); // Start mid-January
        
        while (remaining > 0 && pracDate <= targetDate) {
            const dayName = DAYS[pracDate.getDay() === 0 ? 6 : pracDate.getDay() - 1];
            const available = hoursByDay[dayName] || 0;
            
            if (available > 0) {
                const allocate = Math.min(remaining, available);
                schedule.push({
                    date: new Date(pracDate),
                    chapter: ch,
                    phase: 'Practice',
                    hours: roundToDecimal(allocate),
                    day: dayName
                });
                remaining -= allocate;
            }
            pracDate.setDate(pracDate.getDate() + 1);
        }
    });
    
    return schedule.sort((a, b) => a.date - b.date);
}

// ─────────────────────────────────────────────────────────────────
// RESULTS RENDERING
// ─────────────────────────────────────────────────────────────────

function renderResults() {
    if (!planState.plan || !planState.schedule) return;
    
    const plan = planState.plan;
    const statsGrid = document.getElementById('statsGrid');
    
    if (statsGrid) {
        statsGrid.innerHTML = `
            <div style="padding: 1.5rem; background: #f0fffe; border-radius: 8px; border-left: 4px solid #049A8F; text-align: center;">
                <div style="font-size: 0.9rem; color: #666; margin-bottom: 0.5rem;">Days Available</div>
                <div style="font-size: 2rem; font-weight: 700; color: #049A8F;">${plan.daysAvailable}</div>
            </div>
            <div style="padding: 1.5rem; background: #fff5f0; border-radius: 8px; border-left: 4px solid #FF6B35; text-align: center;">
                <div style="font-size: 0.9rem; color: #666; margin-bottom: 0.5rem;">Hours Needed</div>
                <div style="font-size: 2rem; font-weight: 700; color: #FF6B35;">${plan.totalNeeded}h</div>
            </div>
            <div style="padding: 1.5rem; background: #f0fdf4; border-radius: 8px; border-left: 4px solid #16a34a; text-align: center;">
                <div style="font-size: 0.9rem; color: #666; margin-bottom: 0.5rem;">Chapters</div>
                <div style="font-size: 2rem; font-weight: 700; color: #16a34a;">${plan.included.length}</div>
            </div>
        `;
    }
    
    renderPreparationTable();
    renderCalendarView();
}

function renderPreparationTable() {
    const container = document.getElementById('preparationPlanContainer');
    if (!container || !planState.schedule) return;
    
    // Group by chapter for table view
    const byChapter = {};
    planState.schedule.forEach(item => {
        const key = item.chapter.id;
        if (!byChapter[key]) {
            byChapter[key] = {
                chapter: item.chapter,
                learning: null,
                revision: null,
                practice: null
            };
        }
        if (item.phase === 'Learning') byChapter[key].learning = formatDate(item.date);
        else if (item.phase === 'Revision') byChapter[key].revision = formatDate(item.date);
        else if (item.phase === 'Practice') byChapter[key].practice = formatDate(item.date);
    });
    
    let html = '<h3 style="font-size: 1.2rem; color: #0d2ad4; margin-bottom: 1rem; font-weight: 600;">Preparation Timeline</h3>';
    html += '<div style="overflow-x: auto;"><table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">';
    html += '<thead><tr style="background: #0d2ad4; color: white;"><th style="padding: 10px; text-align: left;">Subject</th><th style="padding: 10px; text-align: left;">Chapter</th><th style="padding: 10px; text-align: center; background: #049A8F;">Learning</th><th style="padding: 10px; text-align: center; background: #EDB538;">Revision</th><th style="padding: 10px; text-align: center; background: #FF6B35;">Practice</th></tr></thead>';
    html += '<tbody>';
    
    Object.values(byChapter).sort((a, b) => a.chapter.id - b.chapter.id).forEach((item, idx) => {
        const bg = idx % 2 === 0 ? '#f9f9f9' : 'white';
        html += `<tr style="background: ${bg}; border-bottom: 1px solid #eee;">
            <td style="padding: 10px; font-weight: 600;">${item.chapter.subject}</td>
            <td style="padding: 10px;">Ch${item.chapter.number}: ${item.chapter.title}</td>
            <td style="padding: 10px; text-align: center; color: #049A8F;">${item.learning || '-'}</td>
            <td style="padding: 10px; text-align: center; color: #EDB538;">${item.revision || '-'}</td>
            <td style="padding: 10px; text-align: center; color: #FF6B35;">${item.practice || '-'}</td>
        </tr>`;
    });
    
    html += '</tbody></table></div>';
    container.innerHTML = html;
}

function renderCalendarView() {
    const container = document.getElementById('weeklyScheduleContainer');
    if (!container || !planState.schedule) return;
    
    // Group by week
    const weekMap = {};
    const startDate = new Date();
    
    planState.schedule.forEach(item => {
        const weekStart = new Date(item.date);
        weekStart.setDate(weekStart.getDate() - (weekStart.getDay() === 0 ? 6 : weekStart.getDay() - 1));
        
        const weekKey = weekStart.toISOString().split('T')[0];
        if (!weekMap[weekKey]) {
            weekMap[weekKey] = {};
            DAYS.forEach(d => weekMap[weekKey][d] = []);
        }
        
        weekMap[weekKey][item.day].push(item);
    });
    
    let html = '<h3 style="font-size: 1.2rem; color: #0d2ad4; margin-bottom: 1.5rem; font-weight: 600;">Weekly Schedule Calendar</h3>';
    
    Object.keys(weekMap).sort().forEach(weekKey => {
        const weekDays = weekMap[weekKey];
        const weekDate = new Date(weekKey);
        const weekEnd = new Date(weekDate);
        weekEnd.setDate(weekEnd.getDate() + 6);
        
        html += `<div style="margin-bottom: 2rem; padding: 1rem; background: #f9fffe; border-radius: 8px; border: 1px solid #ddd;">
            <h4 style="color: #0d2ad4; margin-bottom: 1rem; font-size: 1rem;">Week of ${formatDateFull(weekDate)} to ${formatDateFull(weekEnd)}</h4>
            <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px;">`;
        
        DAYS.forEach(day => {
            const items = weekDays[day] || [];
            const hasItems = items.length > 0;
            const dayHours = items.reduce((sum, item) => sum + item.hours, 0);
            
            html += `<div style="padding: 10px; background: ${hasItems ? '#f0fffe' : '#f5f5f5'}; border-radius: 6px; border: 1px solid ${hasItems ? '#049A8F' : '#ddd'}; font-size: 0.85rem; min-height: 100px;">
                <strong style="display: block; margin-bottom: 5px; color: #0d2ad4;">${day.slice(0, 3)}</strong>`;
            
            if (hasItems) {
                html += `<div style="font-size: 0.75rem; color: #666; margin-bottom: 5px;">Total: ${roundToDecimal(dayHours)}h</div>`;
                items.forEach(item => {
                    const phaseColor = item.phase === 'Learning' ? '#049A8F' : (item.phase === 'Revision' ? '#EDB538' : '#FF6B35');
                    const phaseShort = item.phase === 'Learning' ? 'L' : (item.phase === 'Revision' ? 'R' : 'P');
                    html += `<div style="margin-bottom: 4px; padding: 4px; background: ${phaseColor}20; border-left: 3px solid ${phaseColor}; padding-left: 6px; border-radius: 2px;">
                        <span style="font-weight: 600; color: ${phaseColor}; font-size: 0.8rem;">${item.chapter.subject.slice(0, 2)}-${item.chapter.number}</span><br>
                        <span style="font-size: 0.7rem; color: #666;">${phaseShort} ${item.hours}h</span>
                    </div>`;
                });
            } else {
                html += '<span style="color: #999;">Rest</span>';
            }
            
            html += '</div>';
        });
        
        html += '</div></div>';
    });
    
    container.innerHTML = html;
}

function editPlan() {
    const form = document.getElementById('formSection');
    const results = document.getElementById('resultsSection');
    if (form && results) {
        results.style.display = 'none';
        form.style.display = 'block';
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

// ─────────────────────────────────────────────────────────────────
// PDF GENERATION
// ─────────────────────────────────────────────────────────────────

function downloadPDF() {
    if (!planState.plan || !planState.schedule) {
        alert('Please generate a plan first');
        return;
    }
    
    const content = generatePDFContent();
    const printWindow = window.open('', '', 'height=800,width=900');
    printWindow.document.write(content);
    printWindow.document.close();
    
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 250);
}

function generatePDFContent() {
    const plan = planState.plan;
    const schedule = planState.schedule;
    
    // Table 1: Preparation Timeline
    let table1 = '<table border="1" cellpadding="8" style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 12px;"><tr style="background: #0d2ad4; color: white;"><th>Subject</th><th>Chapter</th><th style="background: #049A8F;">Learning</th><th style="background: #EDB538;">Revision</th><th style="background: #FF6B35;">Practice</th></tr>';
    
    const byChapter = {};
    schedule.forEach(item => {
        const key = item.chapter.id;
        if (!byChapter[key]) {
            byChapter[key] = { chapter: item.chapter, learning: null, revision: null, practice: null };
        }
        if (item.phase === 'Learning') byChapter[key].learning = formatDate(item.date);
        else if (item.phase === 'Revision') byChapter[key].revision = formatDate(item.date);
        else if (item.phase === 'Practice') byChapter[key].practice = formatDate(item.date);
    });
    
    Object.values(byChapter).sort((a, b) => a.chapter.id - b.chapter.id).forEach(item => {
        table1 += `<tr><td>${item.chapter.subject}</td><td>Ch${item.chapter.number}: ${item.chapter.title}</td><td>${item.learning || '-'}</td><td>${item.revision || '-'}</td><td>${item.practice || '-'}</td></tr>`;
    });
    
    table1 += '</table>';
    
    // Table 2: Calendar
    let table2 = '<h2>Weekly Schedule Calendar</h2>';
    
    const weekMap = {};
    schedule.forEach(item => {
        const weekStart = new Date(item.date);
        weekStart.setDate(weekStart.getDate() - (weekStart.getDay() === 0 ? 6 : weekStart.getDay() - 1));
        const weekKey = weekStart.toISOString().split('T')[0];
        
        if (!weekMap[weekKey]) {
            weekMap[weekKey] = {};
            DAYS.forEach(d => weekMap[weekKey][d] = []);
        }
        weekMap[weekKey][item.day].push(item);
    });
    
    Object.keys(weekMap).sort().forEach(weekKey => {
        const weekDays = weekMap[weekKey];
        const weekDate = new Date(weekKey);
        
        table2 += `<p><strong>Week of ${formatDateFull(weekDate)}</strong></p>`;
        table2 += '<table border="1" cellpadding="6" style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 11px;"><tr>';
        
        DAYS.forEach(day => {
            const items = weekDays[day] || [];
            let dayContent = `<strong>${day.slice(0, 3)}</strong><br>`;
            
            if (items.length > 0) {
                const dayHours = items.reduce((sum, item) => sum + item.hours, 0);
                dayContent += `Total: ${roundToDecimal(dayHours)}h<br>`;
                items.forEach(item => {
                    const phaseShort = item.phase === 'Learning' ? 'L' : (item.phase === 'Revision' ? 'R' : 'P');
                    dayContent += `${item.chapter.subject.slice(0, 2)}-${item.chapter.number} ${phaseShort} ${item.hours}h<br>`;
                });
            } else {
                dayContent += 'Rest';
            }
            
            table2 += `<td style="text-align: center; height: 100px; vertical-align: top;">${dayContent}</td>`;
        });
        
        table2 += '</tr></table>';
    });
    
    return `<!DOCTYPE html><html><head><title>Study Plan</title><style>body { font-family: Arial; margin: 20px; } h2 { color: #0d2ad4; border-bottom: 2px solid #0d2ad4; padding-bottom: 10px; } table { border: 1px solid #ddd; } th, td { border: 1px solid #ddd; padding: 8px; } th { background: #0d2ad4; color: white; }</style></head><body><h1>Study Plan Schedule</h1><p>Target: ${formatDate(plan.targetDate)} | Days: ${plan.daysAvailable} | Hours Needed: ${plan.totalNeeded}h</p><h2>Preparation Timeline</h2>${table1}${table2}</body></html>`;
}

// ─────────────────────────────────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    console.log('Planner loaded. Target:', getTargetDate().toDateString());
});
