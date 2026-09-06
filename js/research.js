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
        gradient.addColorStop(0, '#059669');
        gradient.addColorStop(1, '#0d9488');
    } else {
        gradient.addColorStop(0, '#4338ca');
        gradient.addColorStop(1, '#6366f1');
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
            <p style="color: var(--color-text-secondary); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem;">
                ${item.description}
            </p>
            <ul class="research-points">
                ${item.keyHighlights.slice(0, 2).map(pt => `<li>${pt}</li>`).join('')}
            </ul>
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
            <a href="${item.link}" target="_blank" rel="noopener" class="btn btn-primary">
                View GitHub Profile &#128187;
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
