/* ═══════════════════════════════════════════════════════════════════
   STUDY PLANNER - JAVASCRIPT
   Fixed Slider, Board Selection Modal, PDF Download
═══════════════════════════════════════════════════════════════════ */

// STATE MANAGEMENT
const state = {
    board: null,
    planType: 'study',
    completedChapters: [],
    weeklyHours: [0, 0, 0, 0, 0, 0, 0],
    currentWeek: null,
    totalWeeks: null,
    plan: null
};

const boardData = {
    cbse10: {
        name: 'CBSE Class 10 - Science',
        subjects: ['Physics', 'Chemistry', 'Biology'],
        chapters: [
            { name: 'Ch 1: Chemical Reactions', subject: 'Chemistry', num: 1 },
            { name: 'Ch 2: Acids, Bases & Salts', subject: 'Chemistry', num: 2 },
            { name: 'Ch 3: Metals & Non-Metals', subject: 'Chemistry', num: 3 },
            { name: 'Ch 4: Carbon & Its Compounds', subject: 'Chemistry', num: 4 },
            { name: 'Ch 5: Periodic Classification', subject: 'Chemistry', num: 5 },
            { name: 'Ch 1: Motion', subject: 'Physics', num: 1 },
            { name: 'Ch 2: Force', subject: 'Physics', num: 2 },
            { name: 'Ch 3: Gravitation', subject: 'Physics', num: 3 },
            { name: 'Ch 4: Work, Energy & Power', subject: 'Physics', num: 4 },
            { name: 'Ch 5: Sound', subject: 'Physics', num: 5 },
            { name: 'Ch 6: Light', subject: 'Physics', num: 6 },
            { name: 'Ch 7: Electricity', subject: 'Physics', num: 7 },
            { name: 'Ch 8: Magnetism', subject: 'Physics', num: 8 },
            { name: 'Ch 1: Life Processes', subject: 'Biology', num: 1 },
            { name: 'Ch 2: Control & Coordination', subject: 'Biology', num: 2 },
            { name: 'Ch 3: How Do Organisms Reproduce', subject: 'Biology', num: 3 },
            { name: 'Ch 4: Heredity & Evolution', subject: 'Biology', num: 4 },
        ],
        colors: { Chemistry: '#0d2ad4', Physics: '#d97706', Biology: '#16a34a' },
        totalDays: 90
    },
    cbse12: {
        name: 'CBSE Class 12 - Physics & Chemistry',
        subjects: ['Physics', 'Chemistry'],
        chapters: [
            { name: 'Ch 1: Electric Charges', subject: 'Physics', num: 1 },
            { name: 'Ch 2: Electrostatic Potential', subject: 'Physics', num: 2 },
            { name: 'Ch 3: Current Electricity', subject: 'Physics', num: 3 },
            { name: 'Ch 4: Moving Charges & Magnetism', subject: 'Physics', num: 4 },
            { name: 'Ch 5: Magnetism & Matter', subject: 'Physics', num: 5 },
            { name: 'Ch 6: Electromagnetic Induction', subject: 'Physics', num: 6 },
            { name: 'Ch 7: Alternating Current', subject: 'Physics', num: 7 },
            { name: 'Ch 8: Electromagnetic Waves', subject: 'Physics', num: 8 },
            { name: 'Ch 9: Ray Optics', subject: 'Physics', num: 9 },
            { name: 'Ch 10: Wave Optics', subject: 'Physics', num: 10 },
            { name: 'Ch 11: Dual Nature of Matter', subject: 'Physics', num: 11 },
            { name: 'Ch 12: Atoms', subject: 'Physics', num: 12 },
            { name: 'Ch 13: Nuclei', subject: 'Physics', num: 13 },
            { name: 'Ch 14: Semiconductor Electronics', subject: 'Physics', num: 14 },
            { name: 'Ch 1: Solid State', subject: 'Chemistry', num: 1 },
            { name: 'Ch 2: Solutions', subject: 'Chemistry', num: 2 },
            { name: 'Ch 3: Electrochemistry', subject: 'Chemistry', num: 3 },
            { name: 'Ch 4: Chemical Kinetics', subject: 'Chemistry', num: 4 },
            { name: 'Ch 5: Surface Chemistry', subject: 'Chemistry', num: 5 },
            { name: 'Ch 6: General Principles', subject: 'Chemistry', num: 6 },
            { name: 'Ch 7: p-Block Elements', subject: 'Chemistry', num: 7 },
            { name: 'Ch 8: d & f Block Elements', subject: 'Chemistry', num: 8 },
            { name: 'Ch 9: Coordination Compounds', subject: 'Chemistry', num: 9 },
            { name: 'Ch 10: Haloalkanes', subject: 'Chemistry', num: 10 },
            { name: 'Ch 11: Alcohols, Phenols & Ethers', subject: 'Chemistry', num: 11 },
            { name: 'Ch 12: Aldehydes, Ketones & Acids', subject: 'Chemistry', num: 12 },
            { name: 'Ch 13: Amines', subject: 'Chemistry', num: 13 },
            { name: 'Ch 14: Biomolecules', subject: 'Chemistry', num: 14 },
            { name: 'Ch 15: Polymers', subject: 'Chemistry', num: 15 },
            { name: 'Ch 16: Chemistry in Everyday Life', subject: 'Chemistry', num: 16 },
        ],
        colors: { Physics: '#d97706', Chemistry: '#0d2ad4' },
        totalDays: 120
    },
    stateboard: {
        name: 'TN State Board Class 12 - Physics & Chemistry',
        subjects: ['Physics', 'Chemistry'],
        chapters: [
            { name: 'Ch 1: Electrostatics', subject: 'Physics', num: 1 },
            { name: 'Ch 2: Current Electricity', subject: 'Physics', num: 2 },
            { name: 'Ch 3: Magnetism & Magnetic Effects', subject: 'Physics', num: 3 },
            { name: 'Ch 4: Electromagnetic Induction & AC', subject: 'Physics', num: 4 },
            { name: 'Ch 5: Electromagnetic Waves', subject: 'Physics', num: 5 },
            { name: 'Ch 6: Optics', subject: 'Physics', num: 6 },
            { name: 'Ch 7: Atomic & Nuclear Physics', subject: 'Physics', num: 7 },
            { name: 'Ch 8: Semiconductor Devices', subject: 'Physics', num: 8 },
            { name: 'Ch 1: Solid State', subject: 'Chemistry', num: 1 },
            { name: 'Ch 2: Solutions & Colloidal State', subject: 'Chemistry', num: 2 },
            { name: 'Ch 3: Ionic Equilibrium', subject: 'Chemistry', num: 3 },
            { name: 'Ch 4: Redox Reactions', subject: 'Chemistry', num: 4 },
            { name: 'Ch 5: Electrochemistry', subject: 'Chemistry', num: 5 },
            { name: 'Ch 6: Chemical Kinetics', subject: 'Chemistry', num: 6 },
            { name: 'Ch 7: Coordination Chemistry', subject: 'Chemistry', num: 7 },
            { name: 'Ch 8: Main Group Elements', subject: 'Chemistry', num: 8 },
            { name: 'Ch 9: Transition & Inner Transition', subject: 'Chemistry', num: 9 },
            { name: 'Ch 10: Organic Chemistry', subject: 'Chemistry', num: 10 },
            { name: 'Ch 11: Hydrocarbons', subject: 'Chemistry', num: 11 },
            { name: 'Ch 12: Organic Compounds', subject: 'Chemistry', num: 12 },
            { name: 'Ch 13: Polymer & Biomolecules', subject: 'Chemistry', num: 13 },
        ],
        colors: { Physics: '#d97706', Chemistry: '#0d2ad4' },
        totalDays: 120
    }
};

// ─────────────────────────────────────────────────────────────────
// HAMBURGER MENU
// ─────────────────────────────────────────────────────────────────

document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navMobile').classList.add('active');
});

document.getElementById('closeMenu').addEventListener('click', () => {
    document.getElementById('navMobile').classList.remove('active');
});

document.querySelectorAll('.nav-link-mobile').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navMobile').classList.remove('active');
    });
});

// ─────────────────────────────────────────────────────────────────
// BOARD SELECTION MODAL
// ─────────────────────────────────────────────────────────────────

function showBoardSelector() {
    document.getElementById('boardModal').style.display = 'flex';
}

function closeBoardSelector() {
    document.getElementById('boardModal').style.display = 'none';
}

function selectBoard(boardKey) {
    state.board = boardKey;
    
    // Update UI
    document.querySelectorAll('.board-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // Wait a moment then show planner
    setTimeout(() => {
        closeBoardSelector();
        showPlanner();
    }, 300);
}

function backToBoard() {
    document.getElementById('plannerSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
    showBoardSelector();
    
    // Reset state
    state.completedChapters = [];
    state.weeklyHours = [0, 0, 0, 0, 0, 0, 0];
    state.planType = 'study';
    state.plan = null;
}

// Close modal on overlay click
document.getElementById('boardModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeBoardSelector();
    }
});

// ─────────────────────────────────────────────────────────────────
// PLANNER INITIALIZATION
// ─────────────────────────────────────────────────────────────────

function showPlanner() {
    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('plannerSection').style.display = 'block';
    
    const boardInfo = boardData[state.board];
    document.getElementById('plannerTitle').textContent = `Create Your ${boardInfo.name} Plan`;
    
    // Render chapters
    renderChapters();
    
    // Render hours grid
    renderHoursGrid();
}

function renderChapters() {
    const container = document.getElementById('chaptersContainer');
    const chapters = boardData[state.board].chapters;
    
    let html = '<div class="chapter-grid">';
    
    chapters.forEach((ch, idx) => {
        const isComplete = state.completedChapters.includes(idx);
        const color = boardData[state.board].colors[ch.subject];
        
        html += `
            <div class="chapter-chip ${isComplete ? 'done' : ''}" onclick="toggleChapter(${idx})">
                <div class="chapter-num">${ch.num}</div>
                <span>${ch.name.split(':')[1].trim()}</span>
                <div class="chapter-check-icon">✓</div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function toggleChapter(idx) {
    if (state.completedChapters.includes(idx)) {
        state.completedChapters = state.completedChapters.filter(i => i !== idx);
    } else {
        state.completedChapters.push(idx);
    }
    renderChapters();
}

// ─────────────────────────────────────────────────────────────────
// PLAN TYPE SELECTION
// ─────────────────────────────────────────────────────────────────

function selectPlanType(type) {
    state.planType = type;
    
    document.querySelectorAll('.toggle-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    event.currentTarget.closest('.toggle-option').classList.add('selected');
}

// ─────────────────────────────────────────────────────────────────
// HOURS GRID & SLIDER HANDLING
// ─────────────────────────────────────────────────────────────────

function renderHoursGrid() {
    const container = document.getElementById('hoursGrid');
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    let html = '';
    days.forEach((day, idx) => {
        html += `
            <div class="hour-row">
                <div class="day-label">${day}</div>
                <div class="slider-wrapper">
                    <input type="range" 
                           id="day-${idx}" 
                           min="0" 
                           max="12" 
                           value="${state.weeklyHours[idx]}"
                           class="day-slider"
                           oninput="updateHours(${idx}, this.value)">
                </div>
                <div class="hour-value" id="hours-${idx}">${state.weeklyHours[idx]}h</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    updateWeeklyTotal();
}

function updateHours(dayIdx, value) {
    state.weeklyHours[dayIdx] = parseInt(value);
    document.getElementById(`hours-${dayIdx}`).textContent = value + 'h';
    updateWeeklyTotal();
}

function updateWeeklyTotal() {
    const total = state.weeklyHours.reduce((a, b) => a + b, 0);
    document.getElementById('weeklyTotal').textContent = total + ' hrs';
}

// ─────────────────────────────────────────────────────────────────
// PLAN GENERATION
// ─────────────────────────────────────────────────────────────────

function generatePlan() {
    const totalWeeklyHours = state.weeklyHours.reduce((a, b) => a + b, 0);
    
    if (totalWeeklyHours === 0) {
        alert('Please allocate at least some study hours!');
        return;
    }
    
    const boardInfo = boardData[state.board];
    const allChapters = boardInfo.chapters;
    const remainingChapters = allChapters.filter((_, idx) => !state.completedChapters.includes(idx));
    
    // Calculate weeks needed
    const hoursPerChapter = state.planType === 'study' ? 8 : 4;
    const totalHoursNeeded = remainingChapters.length * hoursPerChapter;
    const weeksNeeded = Math.ceil(totalHoursNeeded / totalWeeklyHours);
    
    // Generate plan
    state.plan = {
        board: state.board,
        boardName: boardInfo.name,
        planType: state.planType,
        chapters: remainingChapters,
        weeklyHours: state.weeklyHours,
        totalWeeks: weeksNeeded,
        colors: boardInfo.colors,
        generatedDate: new Date().toLocaleDateString()
    };
    
    // Show results
    displayResults();
}

function displayResults() {
    document.getElementById('plannerSection').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('resultsSection').style.display = 'block';
    
    const plan = state.plan;
    const boardInfo = boardData[plan.board];
    
    // Update title
    document.getElementById('resultsTitle').textContent = `Your ${boardInfo.name} Study Plan`;
    
    // Alert
    const examDate = new Date();
    examDate.setDate(examDate.getDate() + 31); // 31 days from now
    const alertBox = document.getElementById('alertBox');
    alertBox.innerHTML = `
        <strong>✓ Goal:</strong> Complete ${plan.chapters.length} chapters in ${plan.totalWeeks} weeks 
        | <strong>Exam Date:</strong> January 31st | <strong>Plan Generated:</strong> ${plan.generatedDate}
    `;
    
    // Stats
    renderStats();
    
    // Preparation timeline
    renderPreparationPlan();
    
    // Weekly schedule
    renderWeeklySchedule();
}

function renderStats() {
    const plan = state.plan;
    const totalHours = plan.weeklyHours.reduce((a, b) => a + b, 0);
    
    const stats = [
        { label: 'Chapters', value: plan.chapters.length },
        { label: 'Weeks', value: plan.totalWeeks },
        { label: 'Weekly Hrs', value: totalHours },
        { label: 'Total Hrs', value: totalHours * plan.totalWeeks }
    ];
    
    let html = '';
    stats.forEach(stat => {
        html += `
            <div class="stat-card">
                <div class="stat-number">${stat.value}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `;
    });
    
    document.getElementById('statsGrid').innerHTML = html;
}

function renderPreparationPlan() {
    const plan = state.plan;
    const chapters = plan.chapters;
    const weeksNeeded = plan.totalWeeks;
    const chaptersPerWeek = Math.ceil(chapters.length / weeksNeeded);
    
    let html = '<h3 style="margin-bottom: 1rem; font-size: 1rem;">Preparation Timeline</h3>';
    html += '<table class="gantt-table"><thead><tr><th>Week</th><th>Chapters</th><th>Progress</th></tr></thead><tbody>';
    
    for (let w = 0; w < weeksNeeded; w++) {
        const startIdx = w * chaptersPerWeek;
        const endIdx = Math.min(startIdx + chaptersPerWeek, chapters.length);
        const weekChapters = chapters.slice(startIdx, endIdx);
        const progress = Math.round((endIdx / chapters.length) * 100);
        
        let chaptersList = weekChapters.map(ch => `<span style="display:inline-block; padding:0.25rem 0.5rem; background:${plan.colors[ch.subject]}20; color:${plan.colors[ch.subject]}; border-radius:4px; font-size:0.75rem; margin-right:0.25rem; margin-bottom:0.25rem;">${ch.name.split(':')[0]}</span>`).join('');
        
        html += `
            <tr>
                <td><strong>Week ${w + 1}</strong></td>
                <td>${chaptersList}</td>
                <td>
                    <div class="bar-container">
                        <div class="bar" style="width: ${progress}%; background: linear-gradient(90deg, #0d2ad4, #2563eb);">${progress}%</div>
                    </div>
                </td>
            </tr>
        `;
    }
    
    html += '</tbody></table>';
    document.getElementById('preparationPlanContainer').innerHTML = html;
}

function renderWeeklySchedule() {
    const plan = state.plan;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    let html = '<h3 style="margin-bottom: 1rem; font-size: 1rem;">Your Weekly Schedule</h3>';
    html += '<div class="week-list">';
    
    const weekCount = Math.min(2, plan.totalWeeks); // Show first 2 weeks as sample
    
    for (let w = 0; w < weekCount; w++) {
        html += `<div class="week-card">`;
        html += `<div class="week-head">Week ${w + 1}</div>`;
        html += `<div class="week-body">`;
        
        const chaptersInWeek = Math.ceil(plan.chapters.length / plan.totalWeeks);
        const startIdx = w * chaptersInWeek;
        
        days.forEach((day, dayIdx) => {
            const hours = plan.weeklyHours[dayIdx];
            if (hours > 0) {
                const chIdx = startIdx + Math.floor(dayIdx / 2);
                const chapter = plan.chapters[chIdx];
                
                if (chapter) {
                    const color = plan.colors[chapter.subject];
                    html += `
                        <div class="day-task" style="background: ${color};">
                            <strong>${day.substring(0, 3)}</strong><br>
                            ${hours}h<br>
                            <small>${chapter.name.split(':')[0]}</small>
                        </div>
                    `;
                } else {
                    html += `<div class="day-task" style="background: #16a34a;">
                        <strong>${day.substring(0, 3)}</strong><br>
                        ${hours}h<br>
                        <small>Revision</small>
                    </div>`;
                }
            } else {
                html += `<div class="day-task" style="background: #999;">
                    <strong>${day.substring(0, 3)}</strong><br>
                    Rest
                </div>`;
            }
        });
        
        html += `</div></div>`;
    }
    
    if (plan.totalWeeks > 2) {
        html += `<div style="padding: 1rem; text-align: center; color: #666; font-size: 0.9rem;">... and ${plan.totalWeeks - 2} more weeks following the same pattern</div>`;
    }
    
    html += '</div>';
    document.getElementById('weeklyScheduleContainer').innerHTML = html;
}

function editPlan() {
    document.getElementById('resultsSection').style.display = 'none';
    // Scroll back to form
    document.querySelector('.planner-container').scrollIntoView({ behavior: 'smooth' });
}

// ─────────────────────────────────────────────────────────────────
// PDF DOWNLOAD
// ─────────────────────────────────────────────────────────────────

function downloadPDF() {
    const plan = state.plan;
    const boardInfo = boardData[plan.board];
    const totalHours = plan.weeklyHours.reduce((a, b) => a + b, 0);
    
    // Create HTML for PDF
    let pdfHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
            .pdf-container { padding: 30px; max-width: 900px; margin: 0 auto; }
            .pdf-header { 
                background: linear-gradient(135deg, #0d2ad4 0%, #0a1fa8 100%);
                color: white;
                padding: 30px;
                border-radius: 8px;
                margin-bottom: 30px;
                text-align: center;
            }
            .pdf-header h1 { font-size: 28px; margin-bottom: 10px; }
            .pdf-header p { font-size: 14px; opacity: 0.9; }
            .section { margin-bottom: 30px; page-break-inside: avoid; }
            .section-title { 
                font-size: 16px;
                font-weight: bold;
                color: #0d2ad4;
                border-bottom: 2px solid #0d2ad4;
                padding-bottom: 10px;
                margin-bottom: 15px;
            }
            .stats-row {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 15px;
                margin-bottom: 20px;
            }
            .stat-box {
                background: #f5f5f5;
                padding: 15px;
                border-radius: 8px;
                text-align: center;
                border-left: 4px solid #0d2ad4;
            }
            .stat-box .value { font-size: 28px; font-weight: bold; color: #0d2ad4; }
            .stat-box .label { font-size: 12px; color: #666; margin-top: 5px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
            th { background: #f5f5f5; padding: 12px; text-align: left; font-weight: bold; border-bottom: 2px solid #ddd; }
            td { padding: 10px; border-bottom: 1px solid #ddd; }
            tr:nth-child(even) { background: #f9f9f9; }
            .chapter-tag {
                display: inline-block;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                margin-right: 5px;
                margin-bottom: 5px;
                color: white;
            }
            .weekly-schedule { display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; margin-bottom: 20px; }
            .day-box {
                background: #f5f5f5;
                padding: 12px;
                border-radius: 6px;
                text-align: center;
                border-top: 3px solid #0d2ad4;
            }
            .day-box .day-name { font-weight: bold; font-size: 14px; }
            .day-box .hours { font-size: 20px; font-weight: bold; color: #0d2ad4; margin: 5px 0; }
            .day-box .label { font-size: 12px; color: #666; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #999; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class="pdf-container">
            <div class="pdf-header">
                <h1>${boardInfo.name} Study Plan</h1>
                <p>Generated on ${plan.generatedDate}</p>
            </div>

            <div class="section">
                <div class="section-title">📊 Plan Overview</div>
                <div class="stats-row">
                    <div class="stat-box">
                        <div class="value">${plan.chapters.length}</div>
                        <div class="label">Chapters</div>
                    </div>
                    <div class="stat-box">
                        <div class="value">${plan.totalWeeks}</div>
                        <div class="label">Weeks</div>
                    </div>
                    <div class="stat-box">
                        <div class="value">${totalHours}</div>
                        <div class="label">Weekly Hours</div>
                    </div>
                    <div class="stat-box">
                        <div class="value">${totalHours * plan.totalWeeks}</div>
                        <div class="label">Total Hours</div>
                    </div>
                </div>
                <p><strong>Plan Type:</strong> ${plan.planType === 'study' ? 'Learning from Scratch' : 'Focused Revision'}</p>
            </div>

            <div class="section">
                <div class="section-title">📅 Weekly Schedule</div>
                <div class="weekly-schedule">
    `;
    
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    days.forEach((day, idx) => {
        const hours = plan.weeklyHours[idx];
        pdfHTML += `
            <div class="day-box">
                <div class="day-name">${day.substring(0, 3)}</div>
                <div class="hours">${hours}</div>
                <div class="label">hours</div>
            </div>
        `;
    });
    
    pdfHTML += `
                </div>
            </div>

            <div class="section">
                <div class="section-title">📚 Chapters to Cover</div>
                <table>
                    <thead>
                        <tr>
                            <th>Chapter</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    plan.chapters.forEach((ch, idx) => {
        const color = plan.colors[ch.subject];
        pdfHTML += `
            <tr>
                <td>${ch.name}</td>
                <td><span class="chapter-tag" style="background: ${color};">${ch.subject}</span></td>
            </tr>
        `;
    });
    
    pdfHTML += `
                    </tbody>
                </table>
            </div>

            <div class="section">
                <div class="section-title">⏱️ Preparation Timeline</div>
                <p>Your study plan spans <strong>${plan.totalWeeks} weeks</strong>. Below is a sample of your first 2 weeks:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Week</th>
                            <th>Focus Areas</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    const chaptersPerWeek = Math.ceil(plan.chapters.length / plan.totalWeeks);
    for (let w = 0; w < Math.min(2, plan.totalWeeks); w++) {
        const startIdx = w * chaptersPerWeek;
        const endIdx = Math.min(startIdx + chaptersPerWeek, plan.chapters.length);
        const weekChapters = plan.chapters.slice(startIdx, endIdx);
        
        let chaptersList = weekChapters.map(ch => `<span class="chapter-tag" style="background: ${plan.colors[ch.subject]};">${ch.name.split(':')[0]}</span>`).join('');
        
        pdfHTML += `
            <tr>
                <td><strong>Week ${w + 1}</strong></td>
                <td>${chaptersList}</td>
            </tr>
        `;
    }
    
    if (plan.totalWeeks > 2) {
        pdfHTML += `
            <tr>
                <td colspan="2" style="text-align: center; color: #999;"><em>... and ${plan.totalWeeks - 2} more weeks following the same pattern</em></td>
            </tr>
        `;
    }
    
    pdfHTML += `
                    </tbody>
                </table>
            </div>

            <div class="section">
                <div class="section-title">💡 Tips for Success</div>
                <ul style="margin-left: 20px;">
                    <li>Study during your peak productivity hours</li>
                    <li>Take short breaks every 45-50 minutes</li>
                    <li>Review previous chapters while learning new ones</li>
                    <li>Solve practice problems daily</li>
                    <li>Stay consistent with your schedule</li>
                    <li>Adjust the plan if needed based on your progress</li>
                </ul>
            </div>

            <div class="footer">
                <p>Study Plan generated by Prof. Dr. S. Balaji Study Planner</p>
                <p>Board Exam Ready by 31st January 2026</p>
            </div>
        </div>
    </body>
    </html>
    `;
    
    // Create PDF
    const element = document.createElement('div');
    element.innerHTML = pdfHTML;
    
    const opt = {
        margin: 10,
        filename: `${boardInfo.name.replace(/\s+/g, '_')}_Study_Plan.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };
    
    html2pdf().set(opt).from(element).save();
}

// ─────────────────────────────────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
