// ============================================
// PROJECTS PAGE - Software, Mobile & System Projects
// ============================================

const projects = [
    {
        id: 1,
        title: "HealthScope BD — AI-Powered Epidemic Tracker & Health Companion",
        category: "mobile",
        typeBadge: "Mobile Application",
        description: "AI-based symptom prediction and epidemic tracking mobile platform.",
        fullDescription: "Developed a comprehensive mobile health application using Flutter and Dart with AI-based symptom prediction and epidemic tracking. Implemented Firebase Authentication, Cloud Firestore, disease reporting, real-time statistics, and epidemic heatmap features. Built healthcare utilities including nearby hospital search, emergency contacts, health insights, and dark/light mode UI.",
        tags: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "OpenStreetMap", "AI Prediction"],
        link: "https://github.com/FuadSaad",
        demo: null
    },
    {
        id: 2,
        title: "EzyHouse — Property Finding & Listing Application",
        category: "mobile",
        typeBadge: "Mobile Application",
        description: "Smart property platform for homes, offices, P.G. accommodations, and shops.",
        fullDescription: "Developed a Flutter-based property platform for homes, offices, P.G. accommodations, and shops with smart search and filtering. Implemented Firebase Authentication, Firestore, Storage, in-app messaging, and interactive maps for property management and communication. Built a responsive Glassmorphism UI/UX with smooth animations, lateral navigation, and integrated relocation/transport services.",
        tags: ["Flutter", "Dart", "Firebase", "Provider", "Maps", "Glassmorphism UI"],
        link: "https://github.com/FuadSaad",
        demo: null
    },
    {
        id: 3,
        title: "HealthScope — Web-Based Health & Symptom Checker",
        category: "web",
        typeBadge: "Web Application",
        description: "Web health platform featuring symptom checking and health reporting.",
        fullDescription: "Developed a web-based health platform featuring symptom checking, user authentication, profile management, and health reporting. Implemented PHP-based backend APIs and database integration for managing user data, reports, and application functionality.",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
        link: "https://github.com/FuadSaad",
        demo: null
    },
    {
        id: 4,
        title: "DIU Bus E-Ticketing System",
        category: "systems",
        typeBadge: "IoT & Web System",
        description: "IoT-based GPS tracking and smart ticketing for campus transportation.",
        fullDescription: "Designed and developed the DIU Bus E-Ticketing System with user-friendly UI/UX. Built an IoT-based GPS tracking device for real-time bus location monitoring. Integrated ticketing and tracking system for efficient and smart campus transportation.",
        tags: ["IoT", "GPS Tracking", "UI/UX", "Transportation", "Embedded Systems"],
        link: "https://github.com/FuadSaad",
        demo: null
    },
    {
        id: 5,
        title: "Egyptian Desert Simulation — OpenGL 2D Graphics",
        category: "systems",
        typeBadge: "Computer Graphics & Simulation",
        description: "Interactive 2D Egyptian desert simulation featuring dynamic environment, traffic, and particle effects.",
        fullDescription: "Developed an interactive 2D Egyptian desert simulation featuring pyramids, temples, obelisks, roads, Nile River, and modern infrastructure. Implemented dynamic day/night cycle, traffic lights, vehicle movement, camel-crossing detection, airplane and cruise-ship animations. Added interactive controls for simulation speed, play/pause, fireworks particle effects, and environment modes using keyboard input.",
        tags: ["C", "OpenGL", "FreeGLUT", "GLU", "2D Graphics", "Computer Simulation", "Particles"],
        link: "https://github.com/FuadSaad",
        demo: null
    }
];

// Generate placeholder image
function generatePlaceholderImage(type, title) {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');

    // Gradient background based on type
    const gradient = ctx.createLinearGradient(0, 0, 600, 400);
    if (type === 'research') {
        gradient.addColorStop(0, '#4f46e5');
        gradient.addColorStop(1, '#7c3aed');
    } else if (type === 'mobile') {
        gradient.addColorStop(0, '#0284c7');
        gradient.addColorStop(1, '#06b6d4');
    } else if (title && (title.includes('Desert') || title.includes('OpenGL') || title.includes('Graphics'))) {
        gradient.addColorStop(0, '#d97706');
        gradient.addColorStop(1, '#ea580c');
    } else {
        gradient.addColorStop(0, '#0d9488');
        gradient.addColorStop(1, '#10b981');
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 400);

    // Icon
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.font = 'bold 110px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const icon = type === 'research' ? '🔬' : type === 'mobile' ? '📱' : (title && (title.includes('Desert') || title.includes('Graphics')) ? '🏜️' : '💻');
    ctx.fillText(icon, 300, 200);

    return canvas.toDataURL();
}

// Render projects
function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card scroll-animate';
        card.style.animationDelay = `${index * 0.1}s`;
        card.setAttribute('data-project-id', project.id);

        const imageSrc = generatePlaceholderImage(project.category, project.title);

        card.innerHTML = `
      <img src="${imageSrc}" alt="${project.title}" class="project-image">
      <div class="project-info">
        <span class="badge ${project.category === 'research' ? 'badge-published' : 'badge-role'}">${project.typeBadge || 'Project'}</span>
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

// Open modal with project details
function openModal(project) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');

    const imageSrc = generatePlaceholderImage(project.category, project.title);

    modalBody.innerHTML = `
    <img src="${imageSrc}" alt="${project.title}" style="width: 100%; border-radius: 1rem; margin-bottom: 1.5rem;">
    <span class="badge ${project.category === 'research' ? 'badge-published' : 'badge-role'}" style="margin-bottom: 0.75rem;">${project.typeBadge || 'Project'}</span>
    <h2 style="color: var(--color-primary-light); margin-bottom: 1rem;">${project.title}</h2>
    <p style="color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">${project.fullDescription}</p>
    
    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.75rem; font-size: 1.125rem;">Technologies & Methods:</h4>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
    
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="${project.link}" target="_blank" rel="noopener" class="btn btn-primary">
        View Project &#128187;
      </a>
      ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener" class="btn btn-secondary">Live Demo &#128279;</a>` : ''}
    </div>
  `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    // Render all projects initially
    renderProjects('all');

    // Filter button functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter projects
            const filter = this.getAttribute('data-filter');
            renderProjects(filter);
        });
    });

    // Modal close button
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal on backdrop click
    const modal = document.getElementById('projectModal');
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
