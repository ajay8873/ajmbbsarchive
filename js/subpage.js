/* ============================================
   SUBPAGE SPECIFIC JAVASCRIPT
   Search highlight + scroll functionality
   ============================================ */

function activateSubjectFromSearch() {
    const params = new URLSearchParams(window.location.search);
    let targetSubject = params.get('subject');

    if (targetSubject) {
        const subjectMap = {
            "Forensic Medicine": "FMT",
            "Preventive & Social Medicine": "PSM",
            "Ophthalmology": "Ophtha",
            "Obstetrics & Gynecology": "OBG",
            "OBGYN": "OBG",
            "Forensic Medicine RR": "FMT RR",
            "Ophthalmology RR": "Ophtha RR",
            "OBGYN RR": "OBG RR",
            "Orthopedics RR": "Ortho RR",
            "Pediatrics RR": "Paediatrics RR"
        };

        if (subjectMap[targetSubject]) targetSubject = subjectMap[targetSubject];

        // Check .subject-btn elements
        const buttons = document.querySelectorAll('.subject-btn, .surgery-card, .mode-card');
        let targetElement = null;

        buttons.forEach(btn => {
            const text = btn.innerText.trim().toLowerCase();
            if (text === targetSubject.toLowerCase() || text.includes(targetSubject.toLowerCase())) {
                targetElement = btn;
            }
        });

        // Also check Marrow subject-wrapper buttons
        if (!targetElement) {
            const wrappers = document.querySelectorAll('.subject-wrapper');
            wrappers.forEach(wrap => {
                const header = wrap.querySelector('.subject-header');
                if (header && header.innerText.trim().toLowerCase().includes(targetSubject.toLowerCase())) {
                    targetElement = wrap;
                    // Auto-open accordion for Marrow items
                    wrap.classList.add('active'); 
                }
            });
        }

        if (targetElement) {
            setTimeout(() => {
                const offset = 120; // Slightly larger offset for mobile comfort
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = targetElement.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;
                
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

                // Apply Highlight Styles
                targetElement.style.transition = 'all 0.3s ease';
                targetElement.style.background = 'var(--primary)';
                targetElement.style.color = '#ffffff'; // Force white for visibility
                targetElement.style.borderColor = 'var(--primary)';
                targetElement.style.transform = 'scale(1.02)';
                targetElement.style.boxShadow = '0 0 25px rgba(108, 92, 231, 0.5)';
                targetElement.style.zIndex = '50';

                // Fix: Reset all styles after exactly 1 second (1000ms)
                setTimeout(() => {
                    targetElement.style.transform = '';
                    targetElement.style.boxShadow = '';
                    targetElement.style.background = '';
                    targetElement.style.color = '';
                    targetElement.style.borderColor = '';
                    targetElement.style.zIndex = '';
                }, 1000); 

            }, 600);
        }
    }
}

window.addEventListener('load', activateSubjectFromSearch);
