// ============================================
// RESEARCH PAGE - Publications & Ongoing Research
// ============================================

const researchItems = [
    {
        id: 1,
        title: "Identifying Factors Behind Late Assignment Submission using ML & ARM",
        category: "published",
        status: "Published Conference Paper",
        venue: "QPAIN2026",
        description: "Predictive approach achieving approximately 96% accuracy in identifying late assignment submission patterns.",
        fullDescription: "Published conference paper at QPAIN2026. Analyzed student behavioral patterns using Association Rule Mining (Apriori Algorithm). Applied Machine Learning models including XGBoost and Support Vector Machines (SVM) for predictive analysis. Successfully developed a predictive approach achieving approximately 96% accuracy in identifying late assignment submission patterns, empowering academic intervention strategies.",
        keyHighlights: [
            "Analyzed student behavioral patterns using Association Rule Mining (Apriori Algorithm)",
            "Applied ML models including XGBoost and SVM for high-precision predictive analysis",
            "Achieved approximately 96% accuracy in identifying late submission patterns",
            "Published in QPAIN2026 proceedings"
        ],
        tags: ["Machine Learning", "Association Rule Mining", "Apriori Algorithm", "XGBoost", "SVM", "QPAIN2026"],
        link: "https://github.com/FuadSaad"
    },
    {
        id: 2,
        title: "Predictive–Prescriptive Analytics for E-commerce Profit Optimization",
        category: "published",
        status: "Published Conference Paper",
        venue: "ICBISD",
        description: "Data-driven optimization techniques and predictive modeling for e-commerce profitability.",
        fullDescription: "Published conference paper at ICBISD. Developed predictive models using Artificial Neural Networks (ANN), Random Forest, and XGBoost. Applied data-driven optimization techniques for improving e-commerce profitability. Analyzed discount and shipping-related decisions using both predictive and prescriptive analytics framework.",
        keyHighlights: [
            "Developed predictive models using ANN, Random Forest, and XGBoost",
            "Applied data-driven optimization techniques for improving e-commerce profitability",
            "Analyzed discount and shipping-related decisions using predictive and prescriptive analytics",
            "Published in ICBISD proceedings"
        ],
        tags: ["Artificial Neural Networks", "Random Forest", "XGBoost", "Prescriptive Analytics", "ICBISD", "Profit Optimization"],
        link: "https://github.com/FuadSaad"
    },
    {
        id: 3,
        title: "NeuroGAT: 3D CNN-Transformer Hybrid GNN for Alzheimer's Classification",
        category: "ongoing",
        status: "Ongoing Research",
        venue: "Multimodal Deep Learning & XAI",
        description: "Multimodal framework integrating 3D DenseNet, PyRadiomics, Clinical Data, and Graph Attention Networks (GAT).",
        fullDescription: "Working on a state-of-the-art multimodal deep learning framework for Alzheimer's disease classification. The architecture integrates 3D DenseNet feature extractors with radiomics features from PyRadiomics, clinical patient metrics, and Graph Attention Networks (GAT) to capture complex relational semantics. Using Explainable AI techniques including Grad-CAM, SHAP, and LIME for transparent model interpretability.",
        keyHighlights: [
            "Multimodal deep learning framework integrating 3D DenseNet and Graph Attention Networks (GAT)",
            "Combines PyRadiomics imaging features with clinical patient records",
            "Utilizes Grad-CAM, SHAP, and LIME for transparent medical interpretability and validation",
            "Targeted for high-accuracy early-stage Alzheimer's disease diagnosis"
        ],
        tags: ["3D DenseNet", "PyRadiomics", "Graph Attention Networks (GAT)", "Grad-CAM", "SHAP", "LIME", "Alzheimer's"],
        link: "https://github.com/FuadSaad"
    },
    {
        id: 4,
        title: "Decoding Student Mental Health: An Explainable Stacking Ensemble Framework for Early Risk Prediction",
        category: "ongoing",
        status: "Ongoing Research",
        venue: "Explainable Machine Learning",
        description: "Two-level Stacking Ensemble achieving 87.22% accuracy, 0.8742 F1-score, and 0.9217 ROC-AUC.",
        fullDescription: "Developing an Explainable Machine Learning framework for early prediction of student mental health risks. Implementing a two-level Stacking Ensemble using Logistic Regression, Random Forest, XGBoost, LightGBM, and CatBoost. Applying KNN Imputation and SMOTETomek to handle missing data and class imbalance. Using SHAP (Explainable AI) and statistical validation techniques to ensure reliability. The proposed framework achieved 87.22% accuracy, 0.8742 F1-score, and 0.9217 ROC-AUC.",
        keyHighlights: [
            "Two-level Stacking Ensemble with Logistic Regression, Random Forest, XGBoost, LightGBM, CatBoost",
            "Advanced preprocessing with KNN Imputation and SMOTETomek for class imbalance",
            "Rigorous SHAP explainability and statistical validation",
            "Achieved 87.22% accuracy, 0.8742 F1-score, and 0.9217 ROC-AUC"
        ],
        tags: ["Stacking Ensemble", "XGBoost", "LightGBM", "CatBoost", "SMOTETomek", "SHAP XAI", "Mental Health"],
        link: "https://github.com/FuadSaad"
    },
    {
        id: 5,
        title: "Brain Tumor Detection using Deep Learning & XAI (Grad-CAM++)",
        category: "ongoing",
        status: "Ongoing Research",
        venue: "Medical Imaging & Deep Learning",
        description: "Deep learning-based system for brain tumor classification and MRI interpretation.",
        fullDescription: "Developing a deep learning-based system for high-precision brain tumor classification from MRI scans. Exploring Grad-CAM++ and Explainable AI (XAI) techniques for MRI image interpretation, providing visual heatmaps that highlight anatomical regions responsible for the model's diagnostic predictions.",
        keyHighlights: [
            "Deep learning pipeline designed for MRI brain tumor classification",
            "Explores Grad-CAM++ for high-resolution visual attribution heatmaps",
            "Aims to assist radiologists and clinicians with verifiable visual explanations",
            "Advanced preprocessing and medical image enhancement"
        ],
        tags: ["Deep Learning", "Grad-CAM++", "Explainable AI", "MRI Imaging", "Medical Diagnosis"],
        link: "https://github.com/FuadSaad"
    }
];

// Generate placeholder image for research
function generateResearchImage(status, title) {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 600, 400);
    if (status === 'published') {
        gradient.addColorStop(0, '#065f46');
        gradient.addColorStop(1, '#059669');
    } else {
        gradient.addColorStop(0, '#1d4ed8');
        gradient.addColorStop(1, '#7c3aed');
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 400);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.font = 'bold 110px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(status === 'published' ? '📄' : '🔬', 300, 200);

    return canvas.toDataURL();
}

// Render research items
function renderResearch(filter = 'all') {
    const grid = document.getElementById('researchGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = filter === 'all'
        ? researchItems
        : filter === 'published'
        ? researchItems.filter(r => r.category === 'published')
        : filter === 'ongoing'
        ? researchItems.filter(r => r.category === 'ongoing')
        : filter === 'xai'
        ? researchItems.filter(r => r.tags.some(t => t.toLowerCase().includes('shap') || t.toLowerCase().includes('cam') || t.toLowerCase().includes('xai')))
        : researchItems;

    filtered.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'research-card scroll-animate';
        card.style.animationDelay = `${index * 0.1}s`;

        const badgeClass = item.category === 'published' ? 'badge-published' : 'badge-ongoing';

        card.innerHTML = `
            <span class="badge ${badgeClass}">${item.status}</span>
            <h3 class="research-title">${item.title}</h3>
            <div class="research-venue">${item.venue}</div>
            <p style="color: var(--color-text-secondary); font-size: 0.9rem; line-height: 1.6; margin-bottom: 0.75rem;">
                ${item.description}
            </p>
            <ul class="research-points">
                ${item.keyHighlights.slice(0, 2).map(pt => `<li>${pt}</li>`).join('')}
            </ul>
            <div style="margin: 0.5rem 0 1rem;">
                <button type="button" class="abstract-toggle-btn" onclick="event.stopPropagation(); window.toggleAbstract(${item.id}, this)">
                    <span>Read Abstract</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div class="abstract-content" id="abstract-${item.id}" onclick="event.stopPropagation()">
                    <p>${item.fullDescription}</p>
                </div>
            </div>
            <div class="project-tags" style="margin-top: auto;">
                ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
        `;

        card.style.cursor = 'pointer';
        card.addEventListener('click', () => openResearchModal(item));
        grid.appendChild(card);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
}

// Open modal with research details
function openResearchModal(item) {
    const modal = document.getElementById('researchModal');
    const modalBody = document.getElementById('modalBody');
    if (!modal || !modalBody) return;

    const badgeClass = item.category === 'published' ? 'badge-published' : 'badge-ongoing';

    modalBody.innerHTML = `
        <span class="badge ${badgeClass}" style="margin-bottom: 0.75rem;">${item.status} — ${item.venue}</span>
        <h2 style="color: var(--color-primary-light); margin-bottom: 1rem; line-height: 1.3;">${item.title}</h2>
        <p style="color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">${item.fullDescription}</p>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.75rem; font-size: 1.125rem; color: var(--color-text-primary);">Key Methodology & Contributions:</h4>
            <ul class="research-points">
                ${item.keyHighlights.map(pt => `<li>${pt}</li>`).join('')}
            </ul>
        </div>

        <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.75rem; font-size: 1.125rem; color: var(--color-text-primary);">Technologies & Keywords:</h4>
            <div class="project-tags">
                ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
        
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="https://www.researchgate.net/profile/Md-Fuad-Saad" target="_blank" rel="noopener" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; background: #00ccbb; border-color: #00b3a4; color: #ffffff;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z"/></svg>
                <span>View on ResearchGate</span>
            </a>
            <a href="${item.link}" target="_blank" rel="noopener" class="btn btn-outline" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                <span>View GitHub Profile</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeResearchModal() {
    const modal = document.getElementById('researchModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

window.toggleAbstract = function (id, btn) {
    const content = document.getElementById(`abstract-${id}`);
    if (!content) return;

    const isOpen = content.classList.contains('open');
    if (isOpen) {
        content.classList.remove('open');
        btn.classList.remove('active');
        btn.querySelector('span').textContent = 'Read Abstract';
    } else {
        content.classList.add('open');
        btn.classList.add('active');
        btn.querySelector('span').textContent = 'Hide Abstract';
    }
};

document.addEventListener('DOMContentLoaded', function () {
    renderResearch('all');

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            renderResearch(filter);
        });
    });

    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeResearchModal);
    }

    const modal = document.getElementById('researchModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeResearchModal();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeResearchModal();
        }
    });
});
