// ============================================
// PROJECTS PAGE - Filtering & Modals with Fuad's Projects
// ============================================

// Fuad's actual projects
const projects = [
    {
        id: 1,
        title: "DIU Bus E-Ticketing System",
        category: "web",
        description: "QR-based payment verification with GPS tracking for live bus monitoring",
        fullDescription: "Developed a comprehensive bus e-ticketing system for Daffodil International University featuring QR-based payment verification and real-time GPS tracking for live bus monitoring. Built using Node.js, Express, and MongoDB for the backend with React Native for the mobile frontend. Handled full architecture planning and implementation from scratch.",
        tags: ["React Native", "Node.js", "MongoDB", "GPS", "QR Code"],
        image: "placeholder-web",
        link: "https://github.com",
        demo: null
    },
    {
        id: 2,
        title: "MemoryKeeper - AI Companion",
        category: "web",
        description: "AI-driven memory reconstruction for dementia patients",
        fullDescription: "Built an innovative AI companion designed to help dementia patients through memory reconstruction using photos, audio, and contextual storytelling. Features VR/AR integration for immersive experiences and privacy-first on-device processing. Developed with multi-phase workflow including clinical validation planning and monetization strategy.",
        tags: ["AI", "Machine Learning", "VR/AR", "Privacy Tech"],
        image: "placeholder-web",
        link: "https://github.com",
        demo: null
    },
    {
        id: 3,
        title: "Brain Tumor MRI Classification",
        category: "web",
        description: "Hybrid CNN-Transformer-Capsule architecture for medical imaging",
        fullDescription: "Developed a state-of-the-art brain tumor classification system using a hybrid architecture combining CNN, Transformer, and Capsule networks. Created a complete Kaggle-ready pipeline with advanced visualization tools including confusion matrices and detailed performance metrics for medical diagnosis.",
        tags: ["Python", "TensorFlow", "CNN", "Transformers", "Medical AI"],
        image: "placeholder-web",
        link: "https://github.com",
        demo: null
    },
    {
        id: 4,
        title: "Mini-C Subset Compiler",
        category: "web",
        description: "Compiler implementation using Flex and Bison",
        fullDescription: "Implemented a complete compiler for a subset of the C programming language using Flex (lexical analyzer) and Bison (parser). Developed lexer, parser, Abstract Syntax Tree (AST) structure, and organized folder architecture following compiler design principles.",
        tags: ["C", "Flex", "Bison", "Compiler Design"],
        image: "placeholder-design",
        link: "https://github.com",
        demo: null
    },
    {
        id: 5,
        title: "School Management System",
        category: "web",
        description: "Complete system for managing students, courses, and grades",
        fullDescription: "Built a comprehensive school management system with features for student enrollment, course management, grade tracking, and Excel-based data persistence. Designed with a clean, user-friendly interface and robust data management capabilities.",
        tags: ["Java", "Excel Integration", "Database"],
        image: "placeholder-web",
        link: "https://github.com",
        demo: null
    },
    {
        id: 6,
        title: "Ghoroya Project",
        category: "web",
        description: "Software-based service/utility solution",
        fullDescription: "Developed Ghoroya, a comprehensive software solution designed to streamline service delivery and utility management. Features modern UI/UX design and efficient backend architecture.",
        tags: ["Full-Stack", "Web Development", "UI/UX"],
        image: "placeholder-web",
        link: "https://sites.google.com/diu.edu.bd/fuadhossain",
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
    if (type === 'web') {
        gradient.addColorStop(0, '#6366f1');
        gradient.addColorStop(1, '#8b5cf6');
    } else if (type === 'mobile') {
        gradient.addColorStop(0, '#06b6d4');
        gradient.addColorStop(1, '#0891b2');
    } else {
        gradient.addColorStop(0, '#ec4899');
        gradient.addColorStop(1, '#f43f5e');
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 400);

    // Icon
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.font = 'bold 100px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(type === 'web' ? '🚀' : type === 'mobile' ? '📱' : '🎨', 300, 200);

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
    <h2 style="color: var(--color-primary-light); margin-bottom: 1rem;">${project.title}</h2>
    <p style="color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">${project.fullDescription}</p>
    
    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.75rem; font-size: 1.125rem;">Technologies Used:</h4>
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
