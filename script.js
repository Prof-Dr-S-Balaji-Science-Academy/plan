/* ═══════════════════════════════════════════════════════════════════
   PLAN.PROFBALAJI.IN - JAVASCRIPT
   Complete Planner Logic
═══════════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────
// DATA STRUCTURE
// ─────────────────────────────────────────────────────────────────

const CHAPTERS = [
    { id: 1, title: 'Chemical Reactions & Equations', subject: 'Chemistry', color: '#0d2ad4', hours: 6 },
    { id: 2, title: 'Acids, Bases and Salts', subject: 'Chemistry', color: '#0d2ad4', hours: 10 },
    { id: 3, title: 'Metals and Non-metals', subject: 'Chemistry', color: '#0d2ad4', hours: 10 },
    { id: 4, title: 'Carbon and its Compounds', subject: 'Chemistry', color: '#0d2ad4', hours: 15 },
    { id: 5, title: 'Life Processes', subject: 'Biology', color: '#16a34a', hours: 15 },
    { id: 6, title: 'Control and Coordination', subject: 'Biology', color: '#16a34a', hours: 8 },
    { id: 7, title: 'How do Organisms Reproduce?', subject: 'Biology', color: '#16a34a', hours: 12 },
    { id: 8, title: 'Heredity', subject: 'Biology', color: '#16a34a', hours: 8 },
    { id: 9, title: 'Light – Reflection & Refraction', subject: 'Physics', color: '#FF6B35', hours: 12 },
    { id: 10, title: 'The Human Eye', subject: 'Physics', color: '#FF6B35', hours: 8 },
    { id: 11, title: 'Electricity', subject: 'Physics', color: '#FF6B35', hours: 12 },
    { id: 12, title: 'Magnetic Effects of Current', subject: 'Physics', color: '#FF6B35', hours: 10 },
    { id: 13, title: 'Our Environment', subject: 'Environment', color: '#0891b2', hours: 5 }
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const PHASE_COLORS = { 1: '#6366f1', 2: '#0d2ad4', 3: '#FF6B35' };
const PHASE_NAMES = { 1: 'Concept Mastery', 2: 'Consolidation', 3: 'Final Polish' };

// ─────────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────────

let planState = {
    type: 'study',
    completed: new Set(),
    hours: { Monday: 1, Tuesday: 1, Wednesday: 1, Thursday: 1, Friday: 1, Saturday: 3, Sunday: 2 },
    plan: null
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
    selector.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function activatePlanner(type) {
    if (type !== 'cbse10') return;

    gtag('event', 'planner_opened', {
        'planner_type': 'cbse_class_10_science'
    });

    document.getElementById('plannerSelector').style.display = 'none';
    document.getElementById('plannerSection').style.display = 'block';
    renderChapters();
    renderHours();
    
    // Scroll to form section instead of top
    const formSection = document.getElementById('formSection');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function exitPlanner() {
    document.getElementById('plannerSection').style.display = 'none';
    document.getElementById('plannerSelector').style.display = 'block';
    document.getElementById('formSection').style.display = 'block';
    document.getElementById('resultsSection').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        const totalHours = chapters.reduce((sum, ch) => sum + ch.hours, 0);
        const chapter = chapters[0];
        
        html += `
            <div class="subject-section">
                <div class="subject-header">
                    <div class="subject-dot" style="background-color: ${chapter.color}"></div>
                    <span>${subject}</span>
                    <span class="subject-hours">${totalHours} hrs</span>
                </div>
                <div class="chapter-chips">
        `;

        chapters.forEach(ch => {
            const isDone = planState.completed.has(ch.id);
            html += `
                <div class="chip ${isDone ? 'done' : ''}" onclick="toggleChapter(${ch.id})">
                    <div class="chip-num" style="${isDone ? `background-color: ${ch.color}` : ''}">${ch.id}</div>
                    <div style="flex: 1;">${ch.title}</div>
                    ${isDone ? '<div class="chip-check">✓</div>' : ''}
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
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

    container.innerHTML = html;
    updateWeeklyTotal();
}

function updateHours(day, value) {
    planState.hours[day] = parseFloat(value);
    const dayIndicator = document.querySelector(`[data-day="${day}"] .day-indicator`);
    renderHours();
}

function updateWeeklyTotal() {
    const total = Object.values(planState.hours).reduce((sum, h) => sum + h, 0);
    document.getElementById('weeklyTotal').textContent = total.toFixed(1) + ' hrs/week';
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
        'total_hours': Math.round(planState.plan.totalHours)
    });

    // Render results
    renderResults();
    
    // Show results section
    document.getElementById('formSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function computePlan(type, completed, hours) {
    const revisionFactor = type === 'revision' ? 0.55 : 1.0;
    
    // Get included chapters
    const included = CHAPTERS.filter(ch => !completed.has(ch.id));
    
    // Calculate phase allocations
    const p1Factor = type === 'revision' ? 0.25 : 1.0;
    const p2Factor = type === 'revision' ? 0.20 : 0.40;
    const p3Factor = type === 'revision' ? 0.10 : 0.20;

    const items = [];
    
    // Phase 1
    included.forEach(ch => {
        items.push({
            chapter: ch,
            phase: 1,
            hours: ch.hours * revisionFactor * p1Factor
        });
    });

    // Phase 2
    included.forEach(ch => {
        items.push({
            chapter: ch,
            phase: 2,
            hours: ch.hours * revisionFactor * p2Factor
        });
    });

    // Phase 3
    included.forEach(ch => {
        items.push({
            chapter: ch,
            phase: 3,
            hours: ch.hours * revisionFactor * p3Factor
        });
    });

    const totalHours = items.reduce((sum, item) => sum + item.hours, 0);

    // Calculate deadline (Jan 31)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const deadline = new Date(today.getFullYear(), 0, 31);
    if (deadline <= today) {
        deadline.setFullYear(today.getFullYear() + 1);
    }

    const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));

    // Create time slots
    const slots = [];
    let d = new Date(today);
    while (d <= deadline) {
        const dayIndex = d.getDay();
        const dayName = DAYS[dayIndex === 0 ? 6 : dayIndex - 1];
        const h = hours[dayName] || 0;
        if (h > 0) {
            slots.push({ date: new Date(d), hours: h });
        }
        d.setDate(d.getDate() + 1);
    }

    const totalAvailable = slots.reduce((sum, slot) => sum + slot.hours, 0);
    const feasible = totalAvailable >= totalHours;

    // Assign dates to items
    let slotIndex = 0;
    let slotUsed = 0;

    items.forEach(item => {
        let remaining = item.hours;
        item.startDate = slotIndex < slots.length ? new Date(slots[slotIndex].date) : new Date(deadline);
        item.endDate = item.startDate;

        while (remaining > 0 && slotIndex < slots.length) {
            const available = slots[slotIndex].hours - slotUsed;
            
            if (remaining <= available) {
                slotUsed += remaining;
                item.endDate = new Date(slots[slotIndex].date);
                remaining = 0;
                
                if (slotUsed >= slots[slotIndex].hours) {
                    slotIndex++;
                    slotUsed = 0;
                }
            } else {
                remaining -= available;
                item.endDate = new Date(slots[slotIndex].date);
                slotIndex++;
                slotUsed = 0;
            }
        }
    });

    return {
        items,
        included,
        completed,
        totalHours,
        totalAvailable,
        daysLeft,
        deadline,
        feasible,
        type
    };
}

// ─────────────────────────────────────────────────────────────────
// RESULTS RENDERING
// ─────────────────────────────────────────────────────────────────

function renderResults() {
    const plan = planState.plan;

    // Alert
    const alertBox = document.getElementById('alertBox');
    if (plan.feasible) {
        alertBox.className = 'success';
        alertBox.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Great news! You have enough time to complete all chapters before January 31. Stick to your plan!</span>
        `;
    } else {
        alertBox.className = 'warning';
        alertBox.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <span>Time is tight. Consider increasing daily hours or focusing on weaker chapters.</span>
        `;
    }

    // Stats
    const statsGrid = document.getElementById('statsGrid');
    statsGrid.innerHTML = `
        <div class="stat-box">
            <div class="stat-number">${plan.included.length}</div>
            <div class="stat-label">Chapters to ${plan.type === 'revision' ? 'Revise' : 'Study'}</div>
        </div>
        <div class="stat-box">
            <div class="stat-number">${Math.round(plan.totalHours)}</div>
            <div class="stat-label">Total Hours Needed</div>
        </div>
        <div class="stat-box">
            <div class="stat-number">${plan.daysLeft}</div>
            <div class="stat-label">Days Until Jan 31</div>
        </div>
        <div class="stat-box">
            <div class="stat-number" style="color: ${plan.feasible ? '#16a34a' : '#FF6B35'}">${plan.feasible ? '✓' : '!'}</div>
            <div class="stat-label">${plan.feasible ? 'On Track' : 'Tight'}</div>
        </div>
    `;

    // Timeline
    renderTimeline();

    // Weekly breakdown
    renderWeeklyBreakdown();
}

function renderTimeline() {
    const plan = planState.plan;
    const container = document.getElementById('timelineSection');

    // Find date range
    const allDates = plan.items.flatMap(item => [item.startDate, item.endDate]).filter(Boolean);
    const minDate = allDates.reduce((min, d) => d < min ? d : min, plan.items[0]?.startDate || new Date());
    const maxDate = plan.deadline;
    const daySpan = Math.max(1, (maxDate - minDate) / (1000 * 60 * 60 * 24));

    let html = `<h3 class="timeline-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
        Chapter Timeline
    </h3>`;

    // Completed chapters
    for (const id of plan.completed) {
        const ch = CHAPTERS.find(c => c.id === id);
        if (!ch) continue;
        html += `
            <div class="timeline-item completed">
                <div class="ch-badge" style="background-color: ${ch.color}">${ch.id}</div>
                <div class="timeline-info">
                    <h4>Ch ${ch.id}: ${ch.title}</h4>
                    <p>${ch.subject}</p>
                </div>
                <div style="color: #16a34a; font-weight: 700; font-size: 0.8rem;">✓ Done</div>
            </div>
        `;
    }

    // Active chapters
    for (const item of plan.items) {
        const ch = item.chapter;
        const color = PHASE_COLORS[item.phase];
        
        const startOffset = (item.startDate - minDate) / (1000 * 60 * 60 * 24) / daySpan * 100;
        const endOffset = (item.endDate - minDate) / (1000 * 60 * 60 * 24) / daySpan * 100;
        const width = Math.max(3, endOffset - startOffset + 0.5);

        html += `
            <div class="timeline-item">
                <div class="ch-badge" style="background-color: ${color}">${ch.id}</div>
                <div class="timeline-info">
                    <h4>Ch ${ch.id}: ${ch.title}</h4>
                    <p>${ch.subject} • Phase ${item.phase}</p>
                </div>
                <div class="timeline-bar">
                    <div class="timeline-progress" style="background-color: ${color}; left: ${startOffset}%; width: ${width}%;">
                        ${width > 8 ? Math.round(item.hours) + 'h' : ''}
                    </div>
                </div>
                <div class="timeline-dates">
                    ${formatDate(item.startDate)} → ${formatDate(item.endDate)}
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

function formatDate(date) {
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

function renderWeeklyBreakdown() {
    const plan = planState.plan;
    const container = document.getElementById('weeklySection');

    const firstDate = plan.items[0]?.startDate || new Date();
    const lastDate = plan.deadline;
    
    const weeks = [];
    let weekStart = new Date(firstDate);
    const dow = weekStart.getDay();
    weekStart.setDate(weekStart.getDate() + (dow === 0 ? -6 : 1 - dow));

    while (weekStart <= lastDate) {
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekEnd.getDate() + 6);
        weeks.push({ start: new Date(weekStart), end: new Date(weekEnd) });
        weekStart.setDate(weekStart.getDate() + 7);
    }

    let html = '<h3 class="timeline-title">Week-by-Week Schedule</h3>';

    weeks.forEach((week, weekIndex) => {
        const activeItems = plan.items.filter(item => {
            const start = item.startDate || new Date();
            const end = item.endDate || new Date();
            return start <= week.end && end >= week.start;
        });

        if (!activeItems.length && weekIndex > 0) return;

        const dominantPhase = activeItems.reduce((phase, item) => {
            if (!phase[item.phase]) phase[item.phase] = 0;
            phase[item.phase]++;
            return phase;
        }, {});

        const topPhase = Object.entries(dominantPhase).sort((a, b) => b[1] - a[1])[0]?.[0] || 1;
        const phaseColor = PHASE_COLORS[topPhase];

        html += `
            <div style="margin-bottom: 2rem; padding: 1.5rem; background: white; border: 1px solid #e0e0e0; border-radius: 12px;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 2px solid ${phaseColor};">
                    <div style="width: 12px; height: 12px; border-radius: 50%; background: ${phaseColor};"></div>
                    <strong>Week ${weekIndex + 1}</strong>
                    <span style="font-size: 0.85rem; color: #666;">${formatDate(week.start)} – ${formatDate(week.end)}</span>
                    <span style="margin-left: auto; background: ${phaseColor}20; color: ${phaseColor}; font-size: 0.75rem; font-weight: 700; padding: 0.4rem 0.8rem; border-radius: 8px;">
                        ${PHASE_NAMES[topPhase]}
                    </span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.6rem;">
        `;

        DAYS.forEach((day, dayIndex) => {
            const dayDate = new Date(week.start);
            dayDate.setDate(dayDate.getDate() + dayIndex);
            const h = planState.hours[day] || 0;

            const itemOnDay = activeItems.find(item => {
                const start = new Date(item.startDate);
                const end = new Date(item.endDate);
                end.setHours(23, 59, 59);
                return dayDate >= start && dayDate <= end;
            });

            const bgColor = h > 0 ? (itemOnDay ? '#eef2ff' : '#f5f5f5') : '#fafafa';
            const textColor = itemOnDay ? '#0d2ad4' : '#666';

            html += `
                <div style="padding: 0.6rem; background: ${bgColor}; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
                    <div style="font-size: 0.75rem; font-weight: 700; color: #999; text-transform: uppercase; margin-bottom: 0.3rem;">
                        ${day.slice(0, 3)}
                    </div>
                    <div style="font-size: 0.9rem; font-weight: 700; color: ${textColor};">
                        ${itemOnDay ? 'Ch' + itemOnDay.chapter.id : (h > 0 ? h + 'h' : '—')}
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function editPlan() {
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('formSection').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─────────────────────────────────────────────────────────────────
// PDF EXPORT
// ─────────────────────────────────────────────────────────────────

function downloadPDF() {
    const plan = planState.plan;
    const timestamp = new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    let html = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px 25px; background: white;">
            <div style="text-align: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #0d2ad4;">
                <h1 style="color: #0d2ad4; margin: 0 0 5px 0; font-size: 26px; font-weight: 900;">Personalised Study Plan</h1>
                <p style="color: #999; font-size: 12px; margin: 3px 0;">CBSE Class 10 Science • Generated ${timestamp}</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 20px;">
    `;

    const stats = [
        { label: 'Chapters to Study', value: plan.included.length },
        { label: 'Total Hours', value: Math.round(plan.totalHours) },
        { label: 'Days Remaining', value: plan.daysLeft },
        { label: 'Status', value: plan.feasible ? '✓ On Track' : '⚠ Tight' }
    ];

    stats.forEach(stat => {
        html += `
            <div style="background: #eef2ff; padding: 12px 8px; border-radius: 6px; text-align: center;">
                <div style="color: #0d2ad4; font-weight: 900; font-size: 22px;">${stat.value}</div>
                <div style="color: #777; font-size: 11px; font-weight: 600; margin-top: 3px;">${stat.label}</div>
            </div>
        `;
    });

    html += `
            </div>

            <h2 style="color: #0d2ad4; font-size: 16px; margin: 15px 0 10px 0; border-bottom: 2px solid #0d2ad4; padding-bottom: 8px;">Chapter Schedule</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 18px;">
                <thead>
                    <tr style="background: #0d2ad4; color: white;">
                        <th style="padding: 7px 6px; text-align: left; border: 1px solid #ccc; font-size: 10px;">#</th>
                        <th style="padding: 7px 6px; text-align: left; border: 1px solid #ccc; font-size: 10px;">Chapter</th>
                        <th style="padding: 7px 6px; text-align: left; border: 1px solid #ccc; font-size: 10px;">Subject</th>
                        <th style="padding: 7px 6px; text-align: center; border: 1px solid #ccc; font-size: 10px;">Phase</th>
                        <th style="padding: 7px 6px; text-align: center; border: 1px solid #ccc; font-size: 10px;">Hours</th>
                        <th style="padding: 7px 6px; text-align: center; border: 1px solid #ccc; font-size: 10px;">Dates</th>
                    </tr>
                </thead>
                <tbody>
    `;

    // Completed chapters
    for (const id of plan.completed) {
        const ch = CHAPTERS.find(c => c.id === id);
        if (ch) {
            html += `
                <tr style="background: #f0fdf4; opacity: 0.7;">
                    <td style="padding: 6px; border: 1px solid #ddd;">${ch.id}</td>
                    <td style="padding: 6px; border: 1px solid #ddd;">${ch.title}</td>
                    <td style="padding: 6px; border: 1px solid #ddd;">${ch.subject}</td>
                    <td colspan="3" style="padding: 6px; border: 1px solid #ddd; color: #16a34a; font-weight: 700;">✓ Already Completed</td>
                </tr>
            `;
        }
    }

    // Active chapters
    for (const item of plan.items) {
        const ch = item.chapter;
        html += `
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 6px; border: 1px solid #ddd;">${ch.id}</td>
                <td style="padding: 6px; border: 1px solid #ddd;">${ch.title}</td>
                <td style="padding: 6px; border: 1px solid #ddd;">${ch.subject}</td>
                <td style="padding: 6px; border: 1px solid #ddd; text-align: center; font-weight: 700; color: ${PHASE_COLORS[item.phase]};">Phase ${item.phase}</td>
                <td style="padding: 6px; border: 1px solid #ddd; text-align: center; font-weight: 700;">${Math.round(item.hours)}h</td>
                <td style="padding: 6px; border: 1px solid #ddd; text-align: center; font-size: 10px;">${formatDate(item.startDate)} → ${formatDate(item.endDate)}</td>
            </tr>
        `;
    }

    html += `
                </tbody>
            </table>

            <div style="background: #eef2ff; padding: 12px; border-radius: 6px; font-size: 11px; line-height: 1.6; margin: 15px 0 10px 0;">
                <strong style="color: #0d2ad4;">Three-Phase Strategy:</strong><br>
                <strong style="color: #6366f1;">Phase 1 – Concept Mastery:</strong> Deep learning of concepts, formulas, and reactions<br>
                <strong style="color: #0d2ad4;">Phase 2 – Consolidation:</strong> Subject-grouped revision and practice questions<br>
                <strong style="color: #FF6B35;">Phase 3 – Final Polish:</strong> Full syllabus recap and mock tests
            </div>

            <div style="text-align: center; color: #999; font-size: 10px; border-top: 1px solid #ddd; padding-top: 12px; margin-top: 10px;">
                Generated by Prof. Dr. S. Balaji Science Academy<br>
                CBSE Class 10 Science Study Planner • Valid till 31 January 2026<br>
                Learn → Consolidate → Polish → Succeed!
            </div>
        </div>
    `;

    const element = document.createElement('div');
    element.innerHTML = html;
    document.body.appendChild(element);

    html2pdf().set({
        margin: [10, 10, 10, 10],
        filename: 'Science_Study_Plan.pdf',
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).from(element).save().then(() => {
        document.body.removeChild(element);
        
        gtag('event', 'pdf_downloaded', {
            'plan_type': planState.type,
            'chapters_included': plan.included.length
        });
    });
}
