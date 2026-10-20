// ============================================
// PROJECTS PAGE - Software, Mobile & System Projects
// ============================================

const projects = [
    {
        id: 1,
        title: "BridgeOne CRM — Enterprise Sales & Lead Pipeline Management",
        category: "web",
        typeBadge: "Enterprise Web App",
        image: "../images/projects/bridgeone-crm.png",
        description: "Full-scale enterprise CRM platform developed for Mariners Group to streamline lead generation, pipeline stages, and sales operations.",
        fullDescription: "Architected and engineered an end-to-end enterprise CRM platform for Mariners Group corporate operations. Features comprehensive lead stage funnel analytics (New, Contacted, In Discussion, Proposal, Negotiation, Won, Lost), visual lead sources breakdown (Facebook Ads, Direct, Inbound Calls, Referrals), daily activity tracking (Scheduled, Completed, Pending, Upcoming), task checklists, and built-in SMS communication tools with role-based access control. Built with Next.js, Node.js, and Supabase (PostgreSQL) backend, deployed on Hostinger VPS.",
        tags: ["Next.js", "Node.js", "Supabase", "PostgreSQL", "Tailwind CSS", "REST APIs", "Hostinger VPS"],
        link: "https://crm.brg1.io/",
        demo: "https://crm.brg1.io/"
    },
    {
        id: 2,
        title: "MOHS Venice City — Real Estate & Planned Housing Web Portal",
        category: "web",
        typeBadge: "Real Estate Portal",
        image: "../images/projects/mohs-venice-city.png",
        description: "Modern digital web portal for MOHS Venice City, a flagship mega residential housing project under Mariners Group.",
        fullDescription: "Designed and developed the official digital real estate web portal for MOHS Venice City, an exclusive planned residential community situated between Uttara and Purbachal. The platform features an interactive master plan layout, prime connectivity mapping, project media galleries, interest-free payment ecosystem highlights, downloadable project brochures, and an automated site-visit booking and inquiry management system. Built with Next.js, Node.js, and Supabase cloud infrastructure.",
        tags: ["Next.js", "React", "Node.js", "Supabase", "Tailwind CSS", "Responsive UI/UX", "AWS"],
        link: "https://www.mohsrealestate.com/",
        demo: "https://www.mohsrealestate.com/"
    },
    {
        id: 3,
        title: "Marine Shadi — Shariah-Compliant Matrimonial Matchmaking Platform",
        category: ["web", "mobile"],
        typeBadge: "Full-Stack Web & App",
        image: "../images/projects/marine-shadi.png",
        description: "Trusted Islamic matrimonial platform featuring strict Shariah privacy, verified profiles, and advanced biodata matchmaking.",
        fullDescription: "Developed an Islamic matrimonial matchmaking platform dedicated to helping individuals find life partners in compliance with Islamic Shariah. Engineered strict biodata privacy protocols, multi-criteria search & filtering (district, profession, education, religious practices), verified candidate authentication, guardian contact workflows, and success story showcases. Full-stack ecosystem built with Next.js, Node.js, and Supabase database, with cross-platform mobile applications developed in Flutter for Android and Apple (iOS).",
        tags: ["Next.js", "Flutter", "Dart", "Node.js", "Supabase", "PostgreSQL", "Firebase", "REST APIs"],
        link: "https://www.marineshadi.com/",
        demo: "https://www.marineshadi.com/"
    },
    {
        id: 4,
        title: "HealthScope BD — AI-Powered Epidemic Tracker & Health Companion",
        category: "mobile",
        typeBadge: "Mobile Application",
        image: "../images/projects/healthscope-bd.jpg",
        description: "AI-based symptom prediction and epidemic tracking mobile platform.",
        fullDescription: "Developed a comprehensive mobile health application using Flutter and Dart with AI-based symptom prediction and epidemic tracking. Implemented Firebase Authentication, Cloud Firestore, disease reporting, real-time statistics, and epidemic heatmap features. Built healthcare utilities including nearby hospital search, emergency contacts, health insights, and dark/light mode UI.",
        tags: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "OpenStreetMap", "AI Prediction"],
        link: "https://github.com/FuadSaad",
        demo: null
    },
    {
        id: 5,
        title: "EzyHouse — Property Finding & Listing Application",
        category: "mobile",
        typeBadge: "Mobile Application",
        image: "../images/projects/ezyhouse.jpg",
        description: "Smart property platform for homes, offices, P.G. accommodations, and shops.",
        fullDescription: "Developed a Flutter-based property platform for homes, offices, P.G. accommodations, and shops with smart search and filtering. Implemented Firebase Authentication, Firestore, Storage, in-app messaging, and interactive maps for property management and communication. Built a responsive Glassmorphism UI/UX with smooth animations, lateral navigation, and integrated relocation/transport services.",
        tags: ["Flutter", "Dart", "Firebase", "Provider", "Maps", "Glassmorphism UI"],
        link: "https://github.com/FuadSaad",
        demo: null
    },
    {
        id: 6,
        title: "HealthScope — Web-Based Health & Symptom Checker",
        category: "web",
        typeBadge: "Web Application",
        image: "../images/projects/healthscope-web.jpg",
        description: "Web health platform featuring symptom checking and health reporting.",
        fullDescription: "Developed a web-based health platform featuring symptom checking, user authentication, profile management, and health reporting. Implemented PHP-based backend APIs and database integration for managing user data, reports, and application functionality.",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
        link: "https://github.com/FuadSaad",
        demo: null
    },
    {
        id: 7,
        title: "DIU Bus E-Ticketing System",
        category: "systems",
        typeBadge: "IoT & Web System",
        image: "../images/projects/diu-bus.jpg",
        description: "IoT-based GPS tracking and smart ticketing for campus transportation.",
        fullDescription: "Designed and developed the DIU Bus E-Ticketing System with user-friendly UI/UX. Built an IoT-based GPS tracking device for real-time bus location monitoring. Integrated ticketing and tracking system for efficient and smart campus transportation.",
        tags: ["IoT", "GPS Tracking", "UI/UX", "Transportation", "Embedded Systems"],
        link: "https://github.com/FuadSaad",
        demo: null
    },
    {
        id: 8,
        title: "Egyptian Desert Simulation — OpenGL 2D Graphics",
        category: "systems",
        typeBadge: "Computer Graphics & Simulation",
        image: "../images/projects/egyptian-simulation.jpg",
        description: "Interactive 2D Egyptian desert simulation featuring dynamic environment, traffic, and particle effects.",
        fullDescription: "Developed an interactive 2D Egyptian desert simulation featuring pyramids, temples, obelisks, roads, Nile River, and modern infrastructure. Implemented dynamic day/night cycle, traffic lights, vehicle movement, camel-crossing detection, airplane and cruise-ship animations. Added interactive controls for simulation speed, play/pause, fireworks particle effects, and environment modes using keyboard input.",
        tags: ["C", "OpenGL", "FreeGLUT", "GLU", "2D Graphics", "Computer Simulation", "Particles"],
        link: "https://github.com/FuadSaad",
        demo: null
    }
];

// Generate placeholder image
function generatePlaceholderImage(type, title) {
    const rawType = Array.isArray(type) ? type[0] : type;
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');

    // Gradient background based on type
    const gradient = ctx.createLinearGradient(0, 0, 600, 400);
    if (rawType === 'research') {
        gradient.addColorStop(0, '#1d4ed8');
        gradient.addColorStop(1, '#7c3aed');
    } else if (rawType === 'mobile') {
        gradient.addColorStop(0, '#1e3a8a');
        gradient.addColorStop(1, '#3b82f6');
    } else if (title && (title.includes('Desert') || title.includes('OpenGL') || title.includes('Graphics'))) {
        gradient.addColorStop(0, '#92400e');
        gradient.addColorStop(1, '#d97706');
    } else {
        gradient.addColorStop(0, '#065f46');
        gradient.addColorStop(1, '#059669');
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 400);

    // Icon
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.font = 'bold 110px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const icon = rawType === 'research' ? '🔬' : rawType === 'mobile' ? '📱' : (title && (title.includes('Desert') || title.includes('Graphics')) ? '🏜️' : '💻');
    ctx.fillText(icon, 300, 200);

    return canvas.toDataURL();
}

// Render projects
function renderProjects(filter = 'all', searchQuery = '') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const q = searchQuery.toLowerCase().trim();

    const filteredProjects = projects.filter(p => {
        const matchCategory = (filter === 'all')
            ? true
            : (Array.isArray(p.category) ? p.category.includes(filter) : p.category === filter);

        const matchSearch = !q
            ? true
            : (
                p.title.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                (p.fullDescription && p.fullDescription.toLowerCase().includes(q)) ||
                (p.tags && p.tags.some(tag => tag.toLowerCase().includes(q)))
            );

        return matchCategory && matchSearch;
    });

    if (filteredProjects.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1.5rem; background: #ffffff; border: 1px dashed #cbd5e1; border-radius: 1.25rem;">
            <p style="font-size: 1.15rem; font-weight: 600; color: #0f172a; margin-bottom: 0.5rem;">No matching projects found</p>
            <p style="font-size: 0.88rem; color: #64748b; margin-bottom: 1.25rem;">Try searching for another technology (e.g. Next.js, Flutter, Supabase) or reset filters.</p>
            <button class="btn btn-secondary" onclick="resetProjectFilters()" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">Reset Search &amp; Filters</button>
          </div>
        `;
        return;
    }

    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card scroll-animate';
        card.style.animationDelay = `${index * 0.08}s`;
        card.setAttribute('data-project-id', project.id);

        const primaryCat = Array.isArray(project.category) ? project.category[0] : project.category;
        const imageSrc = project.image || generatePlaceholderImage(primaryCat, project.title);
        const displayUrl = project.demo
            ? project.demo.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
            : (project.github ? project.github.replace(/^https?:\/\/(www\.)?github\.com\//, 'github.com/') : 'system.internal');

        card.innerHTML = `
      <div class="browser-mockup">
        <div class="browser-header">
          <div class="browser-dots">
            <span class="browser-dot dot-red"></span>
            <span class="browser-dot dot-yellow"></span>
            <span class="browser-dot dot-green"></span>
          </div>
          <div class="browser-address-bar">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <span>${displayUrl}</span>
          </div>
          <div class="browser-actions">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>
        <div class="browser-screen">
          <img src="${imageSrc}" alt="${project.title}" class="project-image" onerror="this.onerror=null; this.src=generatePlaceholderImage('${primaryCat}', '${project.title}');">
        </div>
      </div>
      <div class="project-info">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
          <span class="badge ${primaryCat === 'research' ? 'badge-published' : 'badge-role'}">${project.typeBadge || 'Project'}</span>
          ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener" onclick="event.stopPropagation();" title="Visit Live Platform" style="font-size: 0.78rem; color: #0284c7; font-weight: 600; display: inline-flex; align-items: center; gap: 0.35rem; font-family: var(--font-code); text-decoration: none; padding: 0.25rem 0.65rem; background: rgba(0, 180, 216, 0.1); border-radius: var(--radius-full); border: 1px solid rgba(0, 180, 216, 0.3);">Live Site <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>` : ''}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    `;

        card.addEventListener('click', () => openModal(project));
        grid.appendChild(card);
    });

    // Re-observe for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
}

// Update filter counts
function updateFilterCounts() {
    const countAll = document.getElementById('count-all');
    const countWeb = document.getElementById('count-web');
    const countMobile = document.getElementById('count-mobile');
    const countSystems = document.getElementById('count-systems');

    if (countAll) countAll.textContent = projects.length;
    if (countWeb) countWeb.textContent = projects.filter(p => Array.isArray(p.category) ? p.category.includes('web') : p.category === 'web').length;
    if (countMobile) countMobile.textContent = projects.filter(p => Array.isArray(p.category) ? p.category.includes('mobile') : p.category === 'mobile').length;
    if (countSystems) countSystems.textContent = projects.filter(p => Array.isArray(p.category) ? (p.category.includes('systems') || p.category.includes('graphics')) : (p.category === 'systems' || p.category === 'graphics')).length;
}

// Global reset helper
window.resetProjectFilters = function () {
    const searchInput = document.getElementById('projectSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    if (searchInput) searchInput.value = '';
    if (clearBtn) clearBtn.style.display = 'none';

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(b => b.classList.remove('active'));
    const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allBtn) allBtn.classList.add('active');

    renderProjects('all', '');
};

// Open modal with project details
function openModal(project) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');

    const primaryCat = Array.isArray(project.category) ? project.category[0] : project.category;
    const imageSrc = project.image || generatePlaceholderImage(primaryCat, project.title);

    modalBody.innerHTML = `
    <img src="${imageSrc}" alt="${project.title}" style="width: 100%; border-radius: 1rem; margin-bottom: 1.5rem; max-height: 380px; object-fit: cover;" onerror="this.onerror=null; this.src=generatePlaceholderImage('${primaryCat}', '${project.title}');">
    <span class="badge ${primaryCat === 'research' ? 'badge-published' : 'badge-role'}" style="margin-bottom: 0.75rem;">${project.typeBadge || 'Project'}</span>
    <h2 style="color: var(--color-primary-light); margin-bottom: 1rem;">${project.title}</h2>
    <p style="color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">${project.fullDescription}</p>
    
    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.75rem; font-size: 1.125rem;">Technologies & Methods:</h4>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
    
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      ${project.demo ? `
      <a href="${project.demo}" target="_blank" rel="noopener" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
        <span>Visit Live Platform</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>` : `
      <a href="${project.link}" target="_blank" rel="noopener" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
        <span>View Project</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>`}
      <a href="https://github.com/FuadSaad" target="_blank" rel="noopener" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
        <span>GitHub Profile</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </a>
    </div>
  `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    // Initial counts and render
    updateFilterCounts();
    renderProjects('all', '');

    // Search input handler
    const searchInput = document.getElementById('projectSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = this.value.trim();
            if (clearBtn) clearBtn.style.display = query ? 'flex' : 'none';
            const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
            renderProjects(activeFilter, query);
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', function () {
            if (searchInput) searchInput.value = '';
            this.style.display = 'none';
            const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
            renderProjects(activeFilter, '');
        });
    }

    // Filter button functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            const query = searchInput ? searchInput.value.trim() : '';
            renderProjects(filter, query);
        });
    });

    // Modal close button
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal on backdrop click
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
