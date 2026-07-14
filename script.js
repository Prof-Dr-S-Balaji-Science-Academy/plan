/* ═══════════════════════════════════════════════════════════════════
   STUDY PLANNER - JAVASCRIPT
   Fixed Slider, Board Selection Modal, PDF Download
═══════════════════════════════════════════════════════════════════ */

// STATE for board and plan
let selectedBoard = null;
let planState = {
    board: null,
    planType: 'study',
    completedChapters: [],
    weeklyHours: [0, 0, 0, 0, 0, 0, 0],
    plan: null
};

// Board data
const boardData = {
    cbse10: {
        name: 'CBSE Class 10 - Science',
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

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// ─────────────────────────────────────────────────────────────────
// HAMBURGER MENU
// ─────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('navMobile');
    const closeMenu = document.getElementById('closeMenu');
    
    if (hamburger && navMobile) {
        hamburger.addEventListener('click', () => {
            navMobile.classList.add('active');
        });
    }
    
    if (closeMenu && navMobile) {
        closeMenu.addEventListener('click', () => {
            navMobile.classList.remove('active');
        });
    }
    
    document.querySelectorAll('.nav-link-mobile').forEach(link => {
        link.addEventListener('click', () => {
            if (navMobile) navMobile.classList.remove('active');
        });
    });

    // Modal overlay close
    const modal = document.getElementById('boardModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeBoardSelector();
            }
        });
    }
});

// ─────────────────────────────────────────────────────────────────
// BOARD MODAL FUNCTIONS
// ─────────────────────────────────────────────────────────────────

function showBoardSelector() {
    document.getElementById('boardModal').style.display = 'flex';
}

function closeBoardSelector() {
    document.getElementById('boardModal').style.display = 'none';
}

function selectBoard(boardKey) {
    planState.board = boardKey;
    selectedBoard = boardKey;
    
    // Update UI
    document.querySelectorAll('.board-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // Show planner after delay
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
    planState.completedChapters = [];
    planState.weeklyHours = [0, 0, 0, 0, 0, 0, 0];
    planState.planType = 'study';
    planState.plan = null;
}

// ─────────────────────────────────────────────────────────────────
// PLANNER FUNCTIONS
// ─────────────────────────────────────────────────────────────────

function showPlanner() {
    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('plannerSection').style.display = 'block';
    
    const boardInfo = boardData[planState.board];
    document.getElementById('plannerTitle').textContent = `Create Your ${boardInfo.name} Plan`;
    
    renderChapters();
    renderHoursGrid();
}

function renderChapters() {
    const container = document.getElementById('chaptersContainer');
    const chapters = boardData[planState.board].chapters;
    
    let html = '<div class="chapter-grid">';
    
    chapters.forEach((ch, idx) => {
        const isComplete = planState.completedChapters.includes(idx);
        
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
    if (planState.completedChapters.includes(idx)) {
        planState.completedChapters = planState.completedChapters.filter(i => i !== idx);
    } else {
        planState.completedChapters.push(idx);
    }
    renderChapters();
}

function selectPlanType(type) {
    planState.planType = type;
    
    document.querySelectorAll('.toggle-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    event.currentTarget.closest('.toggle-option').classList.add('selected');
}

function renderHoursGrid() {
    const container = document.getElementById('hoursGrid');
    
    let html = '';
    DAYS.forEach((day, idx) => {
        html += `
            <div class="hour-row">
                <div class="day-label">${day}</div>
                <div class="slider-wrapper">
                    <input type="range" 
                           id="day-${idx}" 
                           min="0" 
                           max="12" 
                           value="${planState.weeklyHours[idx]}"
                           class="day-slider"
                           oninput="updateHours(${idx}, this.value)">
                </div>
                <div class="hour-value" id="hours-${idx}">${planState.weeklyHours[idx]}h</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    updateWeeklyTotal();
}

function updateHours(dayIdx, value) {
    planState.weeklyHours[dayIdx] = parseInt(value);
    document.getElementById(`hours-${dayIdx}`).textContent = value + 'h';
    updateWeeklyTotal();
}

function updateWeeklyTotal() {
    const total = planState.weeklyHours.reduce((a, b) => a + b, 0);
    document.getElementById('weeklyTotal').textContent = total + ' hrs';
}

// ─────────────────────────────────────────────────────────────────
// PLAN GENERATION
// ─────────────────────────────────────────────────────────────────

function generatePlan() {
    const totalWeeklyHours = planState.weeklyHours.reduce((a, b) => a + b, 0);
    
    if (totalWeeklyHours === 0) {
        alert('Please allocate at least some study hours!');
        return;
    }
    
    const boardInfo = boardData[planState.board];
    const allChapters = boardInfo.chapters;
    const remainingChapters = allChapters.filter((_, idx) => !planState.completedChapters.includes(idx));
    
    const hoursPerChapter = planState.planType === 'study' ? 8 : 4;
    const totalHoursNeeded = remainingChapters.length * hoursPerChapter;
    const weeksNeeded = Math.ceil(totalHoursNeeded / totalWeeklyHours);
    
    planState.plan = {
        board: planState.board,
        boardName: boardInfo.name,
        planType: planState.planType,
        chapters: remainingChapters,
        weeklyHours: planState.weeklyHours,
        totalWeeks: weeksNeeded,
        colors: boardInfo.colors,
        generatedDate: new Date().toLocaleDateString()
    };
    
    displayResults();
}

function displayResults() {
    document.getElementById('resultsSection').style.display = 'block';
    document.querySelector('.planner-container').scrollIntoView({ behavior: 'smooth' });
    
    const plan = planState.plan;
    
    document.getElementById('resultsTitle').textContent = `Your ${plan.boardName} Study Plan`;
    
    // Alert
    const alertBox = document.getElementById('alertBox');
    alertBox.innerHTML = `
        <strong>✓ Goal:</strong> Complete ${plan.chapters.length} chapters in ${plan.totalWeeks} weeks | <strong>Generated:</strong> ${plan.generatedDate}
    `;
    
    renderStats();
    renderPreparationPlan();
    renderWeeklySchedule();
}

function renderStats() {
    const plan = planState.plan;
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
    const plan = planState.plan;
    const chapters = plan.chapters;
    const weeksNeeded = plan.totalWeeks;
    const chaptersPerWeek = Math.ceil(chapters.length / weeksNeeded);
    
    let html = '<h3 style="margin-bottom: 1rem; font-size: 1rem;">Preparation Timeline</h3>';
    html += '<table class="gantt-table" style="width: 100%; border-collapse: collapse;"><thead><tr><th style="background: #f5f5f5; padding: 0.75rem; text-align: left; font-weight: bold; border-bottom: 2px solid #e0e0e0;">Week</th><th style="background: #f5f5f5; padding: 0.75rem; text-align: left; font-weight: bold; border-bottom: 2px solid #e0e0e0;">Chapters</th><th style="background: #f5f5f5; padding: 0.75rem; text-align: left; font-weight: bold; border-bottom: 2px solid #e0e0e0;">Progress</th></tr></thead><tbody>';
    
    for (let w = 0; w < weeksNeeded; w++) {
        const startIdx = w * chaptersPerWeek;
        const endIdx = Math.min(startIdx + chaptersPerWeek, chapters.length);
        const weekChapters = chapters.slice(startIdx, endIdx);
        const progress = Math.round((endIdx / chapters.length) * 100);
        
        let chaptersList = weekChapters.map(ch => `<span style="display:inline-block; padding:0.25rem 0.5rem; background:${plan.colors[ch.subject]}20; color:${plan.colors[ch.subject]}; border-radius:4px; font-size:0.75rem; margin-right:0.25rem; margin-bottom:0.25rem;">${ch.name.split(':')[0]}</span>`).join('');
        
        html += `
            <tr style="border-bottom: 1px solid #f5f5f5;">
                <td style="padding: 0.75rem;"><strong>Week ${w + 1}</strong></td>
                <td style="padding: 0.75rem;">${chaptersList}</td>
                <td style="padding: 0.75rem;">
                    <div style="background: #f5f5f5; border-radius: 4px; overflow: hidden;">
                        <div style="width: ${progress}%; background: linear-gradient(90deg, #0d2ad4, #2563eb); padding: 0.5rem; color: white; font-size: 0.7rem; font-weight: bold; text-align: center;">${progress}%</div>
                    </div>
                </td>
            </tr>
        `;
    }
    
    html += '</tbody></table>';
    document.getElementById('preparationPlanContainer').innerHTML = html;
}

function renderWeeklySchedule() {
    const plan = planState.plan;
    
    let html = '<h3 style="margin-bottom: 1rem; font-size: 1rem;">Your Weekly Schedule</h3>';
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem;">';
    
    DAYS.forEach((day, dayIdx) => {
        const hours = plan.weeklyHours[dayIdx];
        if (hours > 0) {
            html += `
                <div style="background: #eef2ff; padding: 1rem; border-radius: 8px; text-align: center; border-top: 3px solid #0d2ad4;">
                    <strong>${day.substring(0, 3)}</strong><br>
                    <div style="font-size: 1.5rem; font-weight: bold; color: #0d2ad4; margin: 0.5rem 0;">${hours}h</div>
                    <small>Study</small>
                </div>
            `;
        } else {
            html += `
                <div style="background: #f5f5f5; padding: 1rem; border-radius: 8px; text-align: center;">
                    <strong>${day.substring(0, 3)}</strong><br>
                    <div style="font-size: 1rem; color: #999; margin: 0.5rem 0;">Rest</div>
                </div>
            `;
        }
    });
    
    html += '</div>';
    document.getElementById('weeklyScheduleContainer').innerHTML = html;
}

function editPlan() {
    document.getElementById('resultsSection').style.display = 'none';
    document.querySelector('.planner-container').scrollIntoView({ behavior: 'smooth' });
}

// ─────────────────────────────────────────────────────────────────
// PDF DOWNLOAD
// ─────────────────────────────────────────────────────────────────

function downloadPDF() {
    const plan = planState.plan;
    const boardInfo = boardData[plan.board];
    const totalHours = plan.weeklyHours.reduce((a, b) => a + b, 0);
    
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
            .section { margin-bottom: 30px; }
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
                <table>
                    <tr>
    `;
    
    DAYS.forEach(day => {
        pdfHTML += `<th>${day.substring(0, 3)}</th>`;
    });
    
    pdfHTML += `</tr><tr>`;
    
    plan.weeklyHours.forEach(hours => {
        pdfHTML += `<td style="text-align: center; font-weight: bold;">${hours}h</td>`;
    });
    
    pdfHTML += `
                    </tr>
                </table>
            </div>

            <div class="section">
                <div class="section-title">📚 Chapters to Cover</div>
                <table>
                    <thead>
                        <tr><th>Chapter</th><th>Subject</th></tr>
                    </thead>
                    <tbody>
    `;
    
    plan.chapters.forEach((ch) => {
        const color = plan.colors[ch.subject];
        pdfHTML += `
            <tr>
                <td>${ch.name}</td>
                <td><span style="background: ${color}20; color: ${color}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.9rem;">${ch.subject}</span></td>
            </tr>
        `;
    });
    
    pdfHTML += `
                    </tbody>
                </table>
            </div>

            <div class="footer">
                <p>Study Plan generated by Prof. Dr. S. Balaji Study Planner</p>
                <p>Board Exam Ready by 31st January 2026</p>
            </div>
        </div>
    </body>
    </html>
    `;
    
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
