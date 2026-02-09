/* ============================================
   AJ MBBS ARCHIVE - SHARED JAVASCRIPT
   Header, Sidebar, Search, Theme - all pages
   ============================================ */

// ===== GLOBAL SEARCH DATA =====
const subjects = [
    "Anatomy", "Physiology", "Biochemistry", "Pathology", "Microbiology",
    "Pharmacology", "ENT", "Ophthalmology", "PSM", "FMT", "Medicine",
    "Surgery", "OBGYN", "Pediatrics", "Orthopedics", "Dermatology",
    "Psychiatry", "Radiology", "Anaesthesia",
    "Anatomy RR", "Physiology RR", "Biochemistry RR", "Pathology RR",
    "Microbiology RR", "Pharmacology RR", "ENT RR", "Ophthalmology RR",
    "PSM RR", "FMT RR", "Medicine RR", "Surgery RR", "OBGYN RR",
    "Pediatrics RR", "Orthopedics RR", "Dermatology RR", "Psychiatry RR",
    "Radiology RR", "Anaesthesia RR",
    "Surgery SS Exam Practice Test 1", "Surgery SS Exam Practice Test 2",
    "NEET SS Mega Exam Challenge 2025", "TD 1", "TD 2", "TD 3", "TD 4", "TD 5"
];

const platforms = [
    { name: "Marrow", file: "marrow.html" },
    { name: "PrepLadder", file: "prep.html" },
    { name: "Cerebellum", file: "cerebellum.html" },
    { name: "Doc Tutorial", file: "doc.html" },
    { name: "DAMS", file: "dams.html" },
    { name: "eGurukul", file: "egurukul.html" },
    { name: "Surgery Dada", file: "surgery_dada.html" }
];

// ===== SEARCH LOGIC =====
function liveSubjectSearch(val, boxId) {
    const query = val.toLowerCase().trim();
    const box = document.getElementById(boxId);
    if (!box) return;

    box.innerHTML = '';
    if (query.length < 1) { box.classList.remove('show'); box.style.display = 'none'; return; }

    const filtered = subjects.filter(s => s.toLowerCase().includes(query));

    if (filtered.length > 0) {
        box.style.display = 'block';
        box.classList.add('show');
        filtered.forEach(s => {
            const isRR = s.toUpperCase().includes("RR");
            const targetP = isRR ? platforms.filter(p => p.name === "PrepLadder") : platforms;

            targetP.forEach(p => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                const tagClass = isRR ? 'sug-tag rr-tag' : 'sug-tag';
                div.innerHTML = `
                    <div class="sug-info">
                        <span class="sug-name">${s}</span>
                        <span class="sug-type">Clinical Module</span>
                    </div>
                    <span class="${tagClass}" data-p="${p.name}">${p.name}</span>`;
                div.onclick = (e) => {
                    e.stopPropagation();
                    window.location.href = `${p.file}?subject=${encodeURIComponent(s)}`;
                };
                box.appendChild(div);
            });
        });
    } else {
        box.classList.remove('show');
        box.style.display = 'none';
    }
}

// ===== HEADER SEARCH TOGGLE =====
const searchToggle = document.getElementById('searchToggle');
const searchExpandable = document.getElementById('searchExpandable');
const headerSearchInput = document.getElementById('headerSearchInput');
const searchClear = document.getElementById('searchClear');

if (searchToggle && searchExpandable) {
    searchToggle.onclick = (e) => {
        e.stopPropagation();
        const isActive = searchExpandable.classList.toggle('active');
        if (isActive) {
            setTimeout(() => headerSearchInput && headerSearchInput.focus(), 100);
        } else {
            closeHeaderSearch();
        }
    };
}

if (searchClear) {
    searchClear.onclick = () => closeHeaderSearch();
}

function closeHeaderSearch() {
    if (headerSearchInput) headerSearchInput.value = '';
    if (searchExpandable) searchExpandable.classList.remove('active');
    const sug = document.getElementById('headerSug');
    if (sug) { sug.style.display = 'none'; sug.classList.remove('show'); }
}

// Close search on outside click
document.addEventListener('click', (e) => {
    if (searchExpandable && !e.target.closest('.search-wrapper')) {
        closeHeaderSearch();
    }
    // Close sidebar search suggestions
    if (!e.target.closest('.sidebar-search')) {
        const sidebarSug = document.getElementById('sidebarSug');
        if (sidebarSug) { sidebarSug.style.display = 'none'; sidebarSug.classList.remove('show'); }
    }
});

// ===== SIDEBAR =====
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function openSidebar() {
    if (sidebar) sidebar.classList.add('active');
    if (sidebarOverlay) sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeSidebar() {
    if (sidebar) sidebar.classList.remove('active');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (menuBtn) menuBtn.onclick = openSidebar;
if (sidebarClose) sidebarClose.onclick = closeSidebar;
if (sidebarOverlay) sidebarOverlay.onclick = closeSidebar;

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.onclick = () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };
}
// Apply saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// ===== HIGHLIGHT ACTIVE SIDEBAR LINK =====
(function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.sidebar-links a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
})();
     
