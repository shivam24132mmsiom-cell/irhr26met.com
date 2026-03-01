// ============================================
// Industrial Relations & Labor Law Hub - NEW TAB PERFECTED
// Every Topic Card Opens in NEW TAB | Feb 2026
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Labor Law Hub - NEW TAB READY');
    initLaborLawHub();
});

function initLaborLawHub() {
    loadTopicsWithNewTabs();  // ⭐ NEW TAB FUNCTIONALITY
    initSearch();
    initAnimations();
}

const TOPICS_DATA = [
    {
        title: "Alternate Dispute Resolution (ADR)",
        desc: "Quick & Affordable dispute resolution outside court",
        points: ["Arbitration", "Mediation", "Conciliation", "Negotiation", "Lok Adalat"],
        icon: "gavel",
        color: "#ff6b6b",
        url: "3.html"
    },
    {
        title: "Labor Laws",
        desc: "29 old acts → 4 new codes consolidated laws",
        points: ["Wages Code 2019", "IR Code 2020", "Social Security Code", "OSHC Code"],
        icon: "file-contract",
        color: "#4ecdc4",
        url: "topics/labour-codes.html"
    },
    {
        title: "Labor Welfare",
        desc: "Registration recognition collective bargaining rights",
        points: ["Statutory & Non-Statutory Welfare", "Occupational Safety", "Health & Working Conditions", "Worker's Participation"],
        icon: "users",
        color: "#45b7d1",
        url: "topics/labour-welfare.html"
    },
    {
        title: "Contract Labor Act 1970",
        desc: "Contractor licensing welfare facilities compliance",
        points: ["PE registration", "Contractor license", "Canteen 100+ workers", "Prohibition list"],
        icon: "handshake",
        color: "#f9ca24",
        url: "topics/contract-labour.html"
    },
    {
        title: "Standing Orders Act 1946",
        desc: "Service rules misconduct domestic enquiry process",
        points: ["50+ workers apply", "Certification process", "Misconduct schedule", "Domestic enquiry"],
        icon: "list-alt",
        color: "#6c5ce7",
        url: "topics/standing-orders.html"
    },
    {
        title: "Gratuity & PF Compliance",
        desc: "Payment calculation statutory returns nominations",
        points: ["15 days salary/year", "EPF 12% contribution", "5 years service", "Nomination mandatory"],
        icon: "rupee-sign",
        color: "#00b894",
        url: "topics/gratuity-pf.html"
    }
];

// ⭐ CRITICAL: Creates cards that ALWAYS open in NEW TAB
function loadTopicsWithNewTabs() {
    const grid = document.getElementById('topicsGrid');
    grid.innerHTML = ''; // Clear grid
    
    TOPICS_DATA.forEach((topic, index) => {
        const card = createNewTabTopicCard(topic, index);
        grid.appendChild(card);
    });
    
    console.log('✅ 6 NEW TAB cards created successfully');
}

// ⭐ GUARANTEED NEW TAB FUNCTIONALITY
function createNewTabTopicCard(topic, index) {
    const card = document.createElement('a');
    
    // 🔥 NEW TAB ATTRIBUTES - 100% GUARANTEED
    card.href = topic.url;
    card.target = '_blank';                    // ✅ OPENS NEW TAB
    card.rel = 'noopener noreferrer';          // ✅ Security best practice
    card.className = 'topic-card';
    card.setAttribute('data-topic-id', index);
    
    card.innerHTML = `
        <div class="new-tab-badge"></div>
        <i class="fas fa-${topic.icon} topic-icon" style="color:${topic.color};"></i>
        <h3 class="topic-title">${topic.title}</h3>
        <p class="topic-desc">${topic.desc}</p>
        <ul class="key-points">
            ${topic.points.map(point => `<li>${point}</li>`).join('')}
        </ul>
        <div style="text-align:right;margin-top:10px;color:#999;font-size:0.85rem;">
            <i class="fas fa-external-link-alt" style="color:#ff6b6b;"></i> Opens in new tab
        </div>
    `;
    
    // ⭐ CLICK CONFIRMATION
    card.addEventListener('click', function(e) {
        console.log(`🎯 NEW TAB OPENING: "${topic.title}"`);
        showNewTabFeedback(this);
    });
    
    return card;
}

// ⭐ VISUAL NEW TAB FEEDBACK
function showNewTabFeedback(card) {
    // Click animation
    card.style.transform = 'scale(0.97)';
    card.style.backgroundColor = '#e8f5e8';
    
    setTimeout(() => {
        card.style.transform = '';
        card.style.backgroundColor = '';
    }, 150);
    
    // Show success message
    console.log('✅ NEW TAB opened successfully!');
}

// ⭐ SEARCH FUNCTIONALITY
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const term = this.value.toLowerCase();
            document.querySelectorAll('.topic-card').forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(term)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.3s';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const input = document.getElementById('searchInput');
            input.focus();
            input.select();
        });
    }
    
    // Ctrl+K shortcut
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            const input = document.getElementById('searchInput');
            input.focus();
            input.select();
        }
    });
}

// ⭐ HOVER ANIMATIONS
function initAnimations() {
    // Dynamic binding after cards are created
    setTimeout(() => {
        document.querySelectorAll('.topic-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.querySelector('.new-tab-badge').style.background = '#ff5252';
                this.style.boxShadow = '0 30px 60px rgba(0,0,0,0.25)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.querySelector('.new-tab-badge').style.background = '#ff6b6b';
                this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            });
        });
    }, 500);
}

// Global API
window.LaborLawHub = {
    reloadTopics: loadTopicsWithNewTabs,
    topics: TOPICS_DATA
};

console.log('🔥 Labor Law Hub - NEW TAB feature fully loaded!');
